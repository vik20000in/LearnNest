
import { initDatabase } from '../db/database';

async function listAllSubjects() {
    const db = await initDatabase();
    const subjects = await db.all('SELECT * FROM subjects');
    console.log("All Subjects:");
    subjects.forEach(s => console.log(`${s.id}: ${s.name}`));
}

listAllSubjects().catch(console.error);
