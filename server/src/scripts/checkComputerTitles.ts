
import { initDatabase } from '../db/database';

async function checkComputerTitles() {
    const db = await initDatabase();
    const papers = await db.all('SELECT title FROM question_papers WHERE subject_id = (SELECT id FROM subjects WHERE name = "Computer")');
    console.log(papers.map(p => p.title));
}

checkComputerTitles().catch(console.error);
