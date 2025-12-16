import { initDatabase } from '../db/database';

async function checkQuestionPapers() {
    const db = await initDatabase();
    
    const papers = await db.all(`
        SELECT qp.id, s.name as subject, qp.title, 
               LENGTH(qp.content) as content_length
        FROM question_papers qp
        JOIN subjects s ON qp.subject_id = s.id
        LIMIT 5
    `);

    console.log('\nSample Question Papers:\n');
    papers.forEach(p => {
        console.log(`- ${p.subject}: ${p.title} (${p.content_length} chars)`);
    });
    
    const total = await db.get('SELECT COUNT(*) as count FROM question_papers');
    console.log(`\nTotal question papers: ${total.count}`);
    
    // Check if question_papers are linked to chapters or subjects
    const sample = await db.get('SELECT content FROM question_papers LIMIT 1');
    if (sample) {
        console.log('\nSample content structure:');
        const content = JSON.parse(sample.content);
        console.log(JSON.stringify(content, null, 2).substring(0, 500) + '...');
    }
}

checkQuestionPapers().catch(console.error);
