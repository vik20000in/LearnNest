import { initDatabase } from '../db/database';

async function findBengaliChapter() {
    const db = await initDatabase();
    
    const chapters = await db.all(`
        SELECT c.id, s.name as subject, c.name as chapter,
               (SELECT COUNT(*) FROM question_papers WHERE chapter_id = c.id) as paper_count
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
        WHERE s.name LIKE '%3RD LANGUAGE -BENGALI%'
        ORDER BY c.id
    `);

    console.log("3RD LANGUAGE -BENGALI chapters:\n");
    chapters.forEach(ch => {
        console.log(`ID: ${ch.id} | Papers: ${ch.paper_count} | ${ch.chapter}`);
    });
}

findBengaliChapter().catch(console.error);
