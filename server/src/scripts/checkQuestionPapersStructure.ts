import { initDatabase } from '../db/database';

async function checkQuestionPapersStructure() {
    const db = await initDatabase();
    
    // Check schema
    const schema = await db.all(`PRAGMA table_info(question_papers)`);
    console.log('\nquestion_papers table schema:');
    schema.forEach(col => {
        console.log(`  ${col.name}: ${col.type}`);
    });
    
    // Check if any papers are linked to chapters
    const withChapter = await db.all(`
        SELECT qp.id, qp.title, qp.chapter_id, s.name as subject, c.name as chapter
        FROM question_papers qp
        JOIN subjects s ON qp.subject_id = s.id
        LEFT JOIN chapters c ON qp.chapter_id = c.id
        LIMIT 5
    `);
    
    console.log('\nSample question papers:');
    withChapter.forEach(p => {
        console.log(`  ${p.subject} - ${p.chapter || 'No Chapter'}: ${p.title}`);
    });
    
    // Count papers with and without chapters
    const stats = await db.get(`
        SELECT 
            COUNT(*) as total,
            SUM(CASE WHEN chapter_id IS NOT NULL THEN 1 ELSE 0 END) as with_chapter,
            SUM(CASE WHEN chapter_id IS NULL THEN 1 ELSE 0 END) as without_chapter
        FROM question_papers
    `);
    
    console.log(`\nStats:`);
    console.log(`  Total papers: ${stats.total}`);
    console.log(`  With chapter: ${stats.with_chapter}`);
    console.log(`  Without chapter (Annual papers): ${stats.without_chapter}`);
    
    // Check which chapters have practice papers
    const chaptersWithPapers = await db.all(`
        SELECT c.id, s.name as subject, c.name as chapter,
               COUNT(qp.id) as paper_count
        FROM chapters c
        JOIN subjects s ON c.subject_id = s.id
        LEFT JOIN question_papers qp ON qp.chapter_id = c.id
        GROUP BY c.id
        HAVING paper_count = 0
    `);
    
    console.log(`\n\nChapters without practice papers (${chaptersWithPapers.length}):`);
    chaptersWithPapers.forEach(c => {
        console.log(`  - ${c.subject} | ${c.chapter}`);
    });
}

checkQuestionPapersStructure().catch(console.error);
