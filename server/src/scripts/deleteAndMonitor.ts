
import { initDatabase } from '../db/database';

async function deleteAndMonitor() {
    const db = await initDatabase();
    
    // Delete any subject named 'English'
    const result = await db.run("DELETE FROM subjects WHERE name = 'English'");
    console.log(`Deleted ${result.changes} subjects named 'English'.`);
    
    // Wait 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check again
    const subjects = await db.all("SELECT * FROM subjects WHERE name = 'English'");
    if (subjects.length > 0) {
        console.log("WARNING: 'English' subject reappeared!");
        subjects.forEach(s => console.log(`${s.id}: ${s.name}`));
    } else {
        console.log("Success: 'English' subject is gone.");
    }
}

deleteAndMonitor().catch(console.error);
