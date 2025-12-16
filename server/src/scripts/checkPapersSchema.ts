import { initDatabase } from '../db/database';

async function checkSchema() {
    const db = await initDatabase();
    const schema = await db.get('SELECT sql FROM sqlite_master WHERE type="table" AND name="question_papers"');
    console.log('question_papers schema:');
    console.log(schema.sql);
}

checkSchema().catch(console.error);
