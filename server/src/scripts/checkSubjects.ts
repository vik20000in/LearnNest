
import { initDatabase } from '../db/database';

async function checkSubjects() {
    const db = await initDatabase();
    const subjects = await db.all('SELECT * FROM subjects');
    console.log("Subjects:", subjects);
}

checkSubjects().catch(console.error);
