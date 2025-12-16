import { initDatabase } from '../db/database';

async function listMissingQuestions() {
    const db = await initDatabase();
    
    const chapters = await db.all(`
        SELECT c.id, s.name as subject, c.name as chapter,
               (SELECT COUNT(*) FROM questions WHERE chapter_id = c.id) as count 
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
        WHERE (SELECT COUNT(*) FROM questions WHERE chapter_id = c.id) = 0
    `);

    console.log(`\nChapters missing questions (${chapters.length}):\n`);
    chapters.forEach(c => {
        console.log(`- ${c.subject} | ${c.chapter}`);
    });
    
    // Also show total stats
    const total = await db.get('SELECT COUNT(*) as total FROM chapters');
    const withQuestions = await db.get('SELECT COUNT(DISTINCT chapter_id) as count FROM questions');
    
    console.log(`\nTotal: ${withQuestions.count}/${total.total} chapters have questions`);
}

listMissingQuestions().catch(console.error);
