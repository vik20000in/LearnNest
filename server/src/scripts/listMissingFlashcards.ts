import { initDatabase } from '../db/database';

async function listMissing() {
    const db = await initDatabase();
    
    const chapters = await db.all(`
        SELECT c.id, s.name as subject, c.name as chapter, c.syllabus,
               (SELECT COUNT(*) FROM flashcards WHERE chapter_id = c.id) as count 
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
        WHERE (SELECT COUNT(*) FROM flashcards WHERE chapter_id = c.id) = 0
    `);

    console.log(`\nChapters missing flashcards (${chapters.length}):\n`);
    chapters.forEach(c => {
        console.log(`- ${c.subject} | ${c.chapter}`);
    });
}

listMissing().catch(console.error);
