import { initDatabase } from '../db/database';

async function inspectHistoryPaper() {
  const db = await initDatabase();
  
  const paper = await db.get(`
    SELECT id, title, content 
    FROM question_papers 
    WHERE title LIKE '%Buddhism%' 
    LIMIT 1
  `);
  
  if (paper) {
    console.log('Title:', paper.title);
    console.log('\nContent structure:');
    const content = JSON.parse(paper.content);
    console.log(JSON.stringify(content, null, 2).substring(0, 1000));
  }
  
  await db.close();
}

inspectHistoryPaper().catch(console.error);
