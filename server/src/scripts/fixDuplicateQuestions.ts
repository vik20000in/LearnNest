import { initDatabase } from '../db/database';
import * as fs from 'fs';

interface DuplicateReport {
  timestamp: string;
  totalPapers: number;
  papersWithDuplicates: number;
  details: Array<{
    paperId: number;
    title: string;
    variantLabel: string;
    duplicates: any[];
  }>;
}

async function fixDuplicateQuestions() {
  console.log('🔧 Fixing papers with duplicate questions...\n');
  
  // Check if report file exists
  const reportPath = './duplicate-questions-report.json';
  if (!fs.existsSync(reportPath)) {
    console.log('❌ No report file found. Please run checkDuplicateQuestions.ts first.');
    console.log('   Run: npx ts-node src/scripts/checkDuplicateQuestions.ts');
    return;
  }
  
  // Load report
  const report: DuplicateReport = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  
  if (report.papersWithDuplicates === 0) {
    console.log('✅ No papers need fixing!');
    return;
  }
  
  console.log(`Found ${report.papersWithDuplicates} papers to fix\n`);
  
  const db = await initDatabase();
  
  for (const paperInfo of report.details) {
    console.log(`\n📝 Fixing Paper ID ${paperInfo.paperId}: ${paperInfo.title}`);
    
    // Get paper from database
    const paper = await db.get(
      'SELECT id, subject_id, chapter_id, title, content, variant_set_id, variant_label FROM question_papers WHERE id = ?',
      paperInfo.paperId
    );
    
    if (!paper) {
      console.log(`   ⚠️  Paper not found in database, skipping...`);
      continue;
    }
    
    const content = JSON.parse(paper.content);
    let fixed = false;
    
    // Track all questions across all sections to find duplicates
    const allSeenQuestions = new Set<string>();
    
    // Try to fix duplicates by removing them or regenerating
    content.sections?.forEach((section: any, sectionIdx: number) => {
      const uniqueQuestions: any[] = [];
      
      section.questions?.forEach((q: any, qIdx: number) => {
        if (!allSeenQuestions.has(q.question)) {
          allSeenQuestions.add(q.question);
          uniqueQuestions.push(q);
        } else {
          console.log(`   🔄 Removed duplicate from ${section.name}: "${q.question.substring(0, 60)}..."`);
          fixed = true;
        }
      });
      
      // If we removed duplicates, we might have fewer questions than expected
      if (uniqueQuestions.length < section.questions?.length) {
        section.questions = uniqueQuestions;
        
        // If we now have too few questions, add placeholder warnings
        const expectedCount = getExpectedQuestionCount(section.name);
        if (uniqueQuestions.length < expectedCount) {
          console.log(`   ⚠️  ${section.name} now has ${uniqueQuestions.length}/${expectedCount} questions`);
          console.log(`   📌 This section may need additional questions`);
        }
      }
    });
    
    if (fixed) {
      // Update database
      await db.run(
        'UPDATE question_papers SET content = ? WHERE id = ?',
        JSON.stringify(content),
        paper.id
      );
      console.log(`   ✅ Fixed and saved`);
    } else {
      console.log(`   ℹ️  No fixable duplicates found`);
    }
  }
  
  await db.close();
  
  console.log('\n\n✨ Fixing complete! Run checkDuplicateQuestions.ts again to verify.');
  console.log('\n⚠️  NOTE: Some papers may have fewer questions than expected.');
  console.log('   Consider regenerating those papers completely if needed.');
}

function getExpectedQuestionCount(sectionName: string): number {
  const name = sectionName.toLowerCase();
  if (name.includes('multiple choice') || name.includes('mcq')) return 10;
  if (name.includes('very short')) return 6;
  if (name.includes('short answer')) return 2;
  if (name.includes('long answer')) return 2;
  return 5; // default
}

fixDuplicateQuestions().catch(console.error);
