
import { initDatabase } from '../db/database';

async function checkHindiChapters() {
    const db = await initDatabase();
    const chapters = await db.all('SELECT * FROM chapters WHERE subject_id = 22');
    
    console.log("Found Hindi Chapters:");
    chapters.forEach(c => console.log(`${c.id}: ${c.name}`));
}

checkHindiChapters().catch(console.error);
