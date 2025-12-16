import { initDatabase } from '../db/database';

async function findMissingPaper() {
    const db = await initDatabase();
    
    const chapters = await db.all(`
        SELECT c.id, s.name as subject, c.name as chapter 
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
        WHERE NOT EXISTS (
            SELECT 1 FROM question_papers qp WHERE qp.chapter_id = c.id
        )
    `);

    console.log("Chapters without practice papers:\n");
    chapters.forEach(ch => {
        console.log(`${ch.subject} | ${ch.chapter}`);
    });
}

findMissingPaper().catch(console.error);
