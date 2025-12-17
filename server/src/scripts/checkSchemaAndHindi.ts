
import { initDatabase } from '../db/database';

async function checkSchema() {
    const db = await initDatabase();
    const schema = await db.all('PRAGMA table_info(question_papers)');
    console.log(schema);
    
    // Also let's just list all titles to see what we have, maybe I can filter by title string
    const papers = await db.all('SELECT id, title FROM question_papers');
    const hindiPapers = papers.filter(p => p.title.toUpperCase().includes('HINDI'));
    console.log("Filtered Hindi Papers:", hindiPapers);
}

checkSchema().catch(console.error);
