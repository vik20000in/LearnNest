import { getDb } from '../db/database';

async function getAllSubjectPapers() {
  const db = await getDb();
  
  const subjects = [
    'Chemistry',
    'Geography', 
    'History',
    'Computer',
    'ENGLISH LANGUAGE',
    'ENGLISH LITERATURE'
  ];
  
  for (const subject of subjects) {
    const papers = await db.all(
      `SELECT id, title FROM question_papers WHERE title LIKE ? ORDER BY id`,
      `%${subject}%`
    );
    
    console.log(`\n${'='.repeat(80)}`);
    console.log(`${subject}: ${papers.length} papers`);
    console.log(`${'='.repeat(80)}`);
    
    if (papers.length > 0) {
      console.log(`First: ${papers[0].id} - ${papers[0].title}`);
      console.log(`Last: ${papers[papers.length-1].id} - ${papers[papers.length-1].title}`);
      console.log(`Range: ${papers[0].id}-${papers[papers.length-1].id}`);
    }
  }
  
  await db.close();
}

getAllSubjectPapers();
