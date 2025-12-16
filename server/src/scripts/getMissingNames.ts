import { initDatabase } from '../db/database';

async function getMissingChapterNames() {
    const db = await initDatabase();
    
    const chapters = await db.all(`
        SELECT s.name || ' | ' || c.name as full_name
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
        WHERE c.id NOT IN (SELECT DISTINCT chapter_id FROM flashcards)
    `);

    chapters.forEach(c => {
        console.log(`"${c.full_name}"`);
    });
}

getMissingChapterNames().catch(console.error);
