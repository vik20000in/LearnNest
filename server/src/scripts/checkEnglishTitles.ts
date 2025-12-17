
import { initDatabase } from '../db/database';

async function checkTitles() {
    const db = await initDatabase();
    
    console.log("Searching for English Language papers...");
    const langPapers = await db.all(`
        SELECT title FROM question_papers 
        WHERE title LIKE '%ENGLISH LANGUAGE%' 
        ORDER BY title
    `);
    console.log("Found Language Papers:", langPapers.map(p => p.title));

    console.log("\nSearching for English Literature papers...");
    const litPapers = await db.all(`
        SELECT title FROM question_papers 
        WHERE title LIKE '%ENGLISH LITERATURE%' 
        ORDER BY title
    `);
    console.log("Found Literature Papers:", litPapers.map(p => p.title));
}

checkTitles().catch(console.error);
