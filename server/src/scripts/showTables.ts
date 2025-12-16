import { initDatabase } from '../db/database';

async function showTables() {
    const db = await initDatabase();
    
    const tables = await db.all(`
        SELECT name FROM sqlite_master WHERE type='table'
    `);

    console.log('\nDatabase Tables:\n');
    tables.forEach(t => console.log(`- ${t.name}`));
}

showTables().catch(console.error);
