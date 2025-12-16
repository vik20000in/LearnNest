import { initDatabase } from '../db/database';

interface DuplicateInfo {
  paperId: number;
  title: string;
  variantLabel: string;
  duplicates: {
    question: string;
    count: number;
    indices: number[];
  }[];
}

async function checkDuplicateQuestions() {
  console.log('🔍 Checking for duplicate questions in papers...\n');
  
  const db = await initDatabase();
  
  // Get all papers
  const papers = await db.all(
    'SELECT id, title, content, variant_label FROM question_papers ORDER BY id'
  );
  
  console.log(`Found ${papers.length} papers to check\n`);
  
  const papersWithDuplicates: DuplicateInfo[] = [];
  
  for (const paper of papers) {
    const content = JSON.parse(paper.content);
    const allQuestions: { text: string; sectionIdx: number; questionIdx: number }[] = [];
    
    // Collect all questions from all sections
    content.sections?.forEach((section: any, sectionIdx: number) => {
      section.questions?.forEach((q: any, questionIdx: number) => {
        allQuestions.push({
          text: q.question,
          sectionIdx,
          questionIdx
        });
      });
    });
    
    // Find duplicates
    const questionMap = new Map<string, number[]>();
    
    allQuestions.forEach((q, idx) => {
      const existing = questionMap.get(q.text) || [];
      existing.push(idx);
      questionMap.set(q.text, existing);
    });
    
    // Check for duplicates (questions that appear more than once)
    const duplicates: { question: string; count: number; indices: number[] }[] = [];
    
    questionMap.forEach((indices, question) => {
      if (indices.length > 1) {
        duplicates.push({
          question,
          count: indices.length,
          indices
        });
      }
    });
    
    if (duplicates.length > 0) {
      papersWithDuplicates.push({
        paperId: paper.id,
        title: paper.title,
        variantLabel: paper.variant_label || 'N/A',
        duplicates
      });
    }
  }
  
  await db.close();
  
  // Report results
  if (papersWithDuplicates.length === 0) {
    console.log('✅ No duplicate questions found in any papers!');
  } else {
    console.log(`❌ Found ${papersWithDuplicates.length} papers with duplicate questions:\n`);
    
    papersWithDuplicates.forEach(paper => {
      console.log(`📄 Paper ID ${paper.paperId}: ${paper.title} (Set ${paper.variantLabel})`);
      console.log(`   Total unique duplicates: ${paper.duplicates.length}`);
      
      paper.duplicates.forEach((dup, idx) => {
        console.log(`   ${idx + 1}. "${dup.question}"`);
        console.log(`      Appears ${dup.count} times at positions: ${dup.indices.join(', ')}`);
      });
      console.log('');
    });
    
    // Summary
    console.log('\n📊 SUMMARY:');
    console.log(`Total papers checked: ${papers.length}`);
    console.log(`Papers with duplicates: ${papersWithDuplicates.length}`);
    console.log(`Papers without duplicates: ${papers.length - papersWithDuplicates.length}`);
    
    // Save report to file
    const report = {
      timestamp: new Date().toISOString(),
      totalPapers: papers.length,
      papersWithDuplicates: papersWithDuplicates.length,
      details: papersWithDuplicates
    };
    
    const fs = require('fs');
    const reportPath = './duplicate-questions-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n💾 Detailed report saved to: ${reportPath}`);
  }
}

checkDuplicateQuestions().catch(console.error);
