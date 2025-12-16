import { getDb } from '../db/database';

const inspectPaper638 = async () => {
  const db = await getDb();
  
  // Paper 638 should be Chapter 20 Set C
  const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 638');
  
  if (!paper) {
    console.log('Paper 638 not found!');
    return;
  }
  
  console.log(`\nPaper ${paper.id}: ${paper.title}`);
  console.log('='.repeat(80));
  
  const content = JSON.parse(paper.content);
  
  content.sections.forEach((section: any, idx: number) => {
    console.log(`\n\nSection ${idx + 1}: ${section.name}`);
    console.log('-'.repeat(80));
    
    section.questions.forEach((q: any, qIdx: number) => {
      console.log(`\nQ${qIdx + 1}. ${q.question}`);
      if (q.options) {
        q.options.forEach((opt: string) => console.log(`   ${opt}`));
      }
      console.log(`   Answer: ${q.answer}`);
      console.log(`   Marks: ${q.marks}`);
    });
  });
};

inspectPaper638()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
