import { getDb } from '../db/database';

const scanSectionBPlaceholders = async () => {
  const db = await getDb();
  
  // Get all math papers
  const papers = await db.all(`
    SELECT qp.id, qp.title, qp.content, s.name as subject_name
    FROM question_papers qp
    JOIN subjects s ON qp.subject_id = s.id
    WHERE s.name = 'Maths'
    ORDER BY qp.id
  `);
  
  console.log(`\n🔍 Scanning ${papers.length} Math papers for Section B placeholder issues...\n`);
  
  const problematicPapers: any[] = [];
  
  for (const paper of papers) {
    const content = JSON.parse(paper.content);
    
    // Find Section B
    const sectionB = content.sections.find((s: any) => 
      s.name.includes('Section B') || s.name.includes('Very Short Answer')
    );
    
    if (sectionB && sectionB.questions && sectionB.questions.length > 0) {
      // Check if questions have placeholder text
      const hasPlaceholders = sectionB.questions.some((q: any) => 
        q.question.includes('Solve this problem') || 
        q.question.includes('[Set A') || 
        q.question.includes('[Set B') || 
        q.question.includes('[Set C') ||
        q.question.includes('(Show your work)')
      );
      
      if (hasPlaceholders) {
        problematicPapers.push({
          id: paper.id,
          title: paper.title,
          sectionName: sectionB.name,
          questionCount: sectionB.questions.length,
          sampleQuestion: sectionB.questions[0].question
        });
      }
    }
  }
  
  console.log(`\n📊 Found ${problematicPapers.length} papers with Section B placeholder issues:\n`);
  console.log('='.repeat(100));
  
  problematicPapers.forEach(paper => {
    console.log(`\n📄 Paper ${paper.id}: ${paper.title}`);
    console.log(`   Section: ${paper.sectionName}`);
    console.log(`   Questions: ${paper.questionCount}`);
    console.log(`   Sample: ${paper.sampleQuestion.substring(0, 100)}...`);
  });
  
  console.log('\n' + '='.repeat(100));
  console.log(`\n✅ Scan complete! ${problematicPapers.length} papers need fixing.\n`);
  
  // Return paper IDs for fixing
  return problematicPapers.map(p => p.id);
};

scanSectionBPlaceholders()
  .then((paperIds) => {
    console.log(`\nPaper IDs to fix: ${paperIds.join(', ')}`);
    process.exit(0);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
