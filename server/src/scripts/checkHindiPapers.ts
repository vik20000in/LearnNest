
import { initDatabase } from '../db/database';

async function checkHindiPapers() {
    const db = await initDatabase();
    const papers = await db.all('SELECT id, title FROM question_papers WHERE subject_id = 22');
    
    console.log("Found Hindi Papers (Subject ID 22):");
    papers.forEach(p => console.log(`${p.id}: ${p.title}`));
}

checkHindiPapers().catch(console.error);
