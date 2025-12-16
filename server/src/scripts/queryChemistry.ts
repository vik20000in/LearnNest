import { getDb } from '../db/database';

async function query() {
  const db = await getDb();
  const papers = await db.all(`SELECT id, title FROM question_papers WHERE title LIKE '%Chemistry%' ORDER BY id`);
  papers.forEach(p => console.log(`${p.id}: ${p.title}`));
  await db.close();
}

query();
