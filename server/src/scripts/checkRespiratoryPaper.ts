import { getDb } from '../db/database';

async function checkRespiratoryPaper() {
  const db = await getDb();
  
  const paper = await db.get(`
    SELECT id, title, content 
    FROM question_papers 
    WHERE title LIKE '%Respiratory System%' AND title LIKE '%Set A%'
  `);
  
  if (paper) {
    const content = JSON.parse(paper.content);
    console.log('Paper ID:', paper.id);
    console.log('Title:', paper.title);
    console.log('\n=== ALL SECTIONS ===\n');
    
    content.sections.forEach((section: any, idx: number) => {
      console.log(`\n${section.name}`);
      console.log('-'.repeat(80));
      section.questions.slice(0, 3).forEach((q: any) => {
        console.log(`\nQ${q.id}: ${q.question}`);
        if (q.options) {
          q.options.forEach((opt: string, i: number) => {
            console.log(`  ${String.fromCharCode(65+i)}) ${opt}`);
          });
        }
        console.log(`Answer: ${q.answer}`);
        console.log(`Marks: ${q.marks}`);
      });
      if (section.questions.length > 3) {
        console.log(`\n... and ${section.questions.length - 3} more questions`);
      }
    });
  } else {
    console.log('Paper not found');
  }
  
  await db.close();
}

checkRespiratoryPaper().catch(console.error);
