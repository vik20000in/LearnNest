
import { initDatabase } from '../db/database';

async function findPaper() {
    const db = await initDatabase();
    const title = "Geography Practice Paper: MAP OF SOUTH AMERICA - SET A";
    // Try exact match first, then like match if not found (case sensitivity might be an issue)
    let paper = await db.get('SELECT * FROM question_papers WHERE title = ?', title);
    
    if (!paper) {
        console.log("Exact match not found. Searching with LIKE...");
        const papers = await db.all('SELECT * FROM question_papers WHERE title LIKE ?', '%South America%Set A%');
        if (papers.length > 0) {
            console.log("Found similar papers:", papers.map(p => ({id: p.id, title: p.title})));
        } else {
            console.log("No paper found.");
        }
    } else {
        console.log("Found paper:", paper.id, paper.title);
    }
}

findPaper().catch(console.error);
