import { initDatabase } from '../db/database';

async function deleteOldPhysicsVariants() {
    const db = await initDatabase();
    
    console.log('Deleting old Physics variant papers (IDs 372-389)...\n');
    
    const result = await db.run('DELETE FROM question_papers WHERE id BETWEEN 372 AND 389');
    
    console.log(`✅ Deleted ${result.changes} old Physics variant papers`);
}

deleteOldPhysicsVariants().catch(console.error);
