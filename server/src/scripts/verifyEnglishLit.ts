
import { initDatabase } from '../db/database';

async function verifyPaper() {
    const db = await initDatabase();
    const title = "ENGLISH LITERATURE Practice Paper - Prose: The Remarkable Rocket-Oscar Wilde - Set A";
    const paper = await db.get('SELECT content FROM question_papers WHERE title = ?', title);
    
    if (paper) {
        console.log(paper.content);
    } else {
        console.log("Paper not found");
    }
}

verifyPaper().catch(console.error);
