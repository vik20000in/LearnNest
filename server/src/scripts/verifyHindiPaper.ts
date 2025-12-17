
import { initDatabase } from '../db/database';

async function verifyHindiPaper() {
    const db = await initDatabase();
    const title = "2ND LANGUAGE - HINDI Practice Paper - General / Introduction - Set A";
    const paper = await db.get('SELECT content FROM question_papers WHERE title = ?', title);
    
    if (paper) {
        console.log(paper.content);
    } else {
        console.log("Paper not found");
    }
}

verifyHindiPaper().catch(console.error);
