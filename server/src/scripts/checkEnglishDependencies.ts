
import { initDatabase } from '../db/database';

async function checkEnglishDependencies() {
    const db = await initDatabase();
    
    // Find the subject
    const subject = await db.get('SELECT * FROM subjects WHERE name = ?', 'English');
    
    if (!subject) {
        console.log("Subject 'English' not found.");
        return;
    }
    
    console.log(`Found Subject: ${subject.name} (ID: ${subject.id})`);
    
    // Check chapters
    const chapters = await db.all('SELECT id, name FROM chapters WHERE subject_id = ?', subject.id);
    console.log(`Found ${chapters.length} chapters.`);
    chapters.forEach(c => console.log(`- ${c.name} (ID: ${c.id})`));
    
    // Check papers
    const papers = await db.all('SELECT id, title FROM question_papers WHERE subject_id = ?', subject.id);
    console.log(`Found ${papers.length} papers.`);
    papers.forEach(p => console.log(`- ${p.title} (ID: ${p.id})`));
}

checkEnglishDependencies().catch(console.error);
