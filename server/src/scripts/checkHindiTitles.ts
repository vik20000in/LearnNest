
import { initDatabase } from '../db/database';

async function checkHindiTitles() {
    const db = await initDatabase();
    const papers = await db.all('SELECT id, title FROM question_papers WHERE subject LIKE ?', ['%HINDI%']);
    
    console.log("Found Hindi Papers:");
    papers.forEach(p => console.log(`${p.id}: ${p.title}`));
}

checkHindiTitles().catch(console.error);
