import { initDatabase } from '../db/database';

async function checkBiologyVariants() {
  const db = await initDatabase();
  
  const papers = await db.all(`
    SELECT id, title, content 
    FROM question_papers 
    WHERE title LIKE '%Biology%Chapter 3%'
    ORDER BY variant_label
  `);
  
  for (const paper of papers) {
    const content = JSON.parse(paper.content);
    const mcqs = content.sections[0].questions;
    console.log(`\n${paper.title}`);
    console.log(`Q1: ${mcqs[0].question}`);
    console.log(`Q2: ${mcqs[1].question}`);
    console.log(`Q3: ${mcqs[2].question}`);
  }
  
  await db.close();
}

checkBiologyVariants().catch(console.error);
