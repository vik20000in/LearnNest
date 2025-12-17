
import { initDatabase } from '../db/database';

async function checkTitles() {
    const db = await initDatabase();
    
    console.log("Searching for Chemistry papers...");
    const papers = await db.all(`
        SELECT title FROM question_papers 
        WHERE title LIKE '%CHEMISTRY%' 
        ORDER BY title
    `);
    console.log("Found Chemistry Papers:", papers.map(p => p.title));
}

checkTitles().catch(console.error);
