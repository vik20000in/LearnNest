
import { initDatabase } from '../db/database';

async function findBiologyPaper() {
    const db = await initDatabase();
    const title = "Biology Practice Paper - General / Introduction - Set A";
    
    let paper = await db.get('SELECT * FROM question_papers WHERE title = ?', title);
    
    if (!paper) {
        console.log("Exact match not found. Searching with LIKE...");
        const papers = await db.all('SELECT * FROM question_papers WHERE title LIKE ?', '%Biology%General%Set A%');
        if (papers.length > 0) {
            console.log("Found similar papers:", papers.map(p => ({id: p.id, title: p.title})));
        } else {
            console.log("No paper found.");
        }
    } else {
        console.log("Found paper:", paper.id, paper.title);
    }
}

findBiologyPaper().catch(console.error);
