import { initDatabase } from '../db/database';

async function listSubjects() {
    const db = await initDatabase();
    
    const subjects = await db.all('SELECT id, name FROM subjects ORDER BY id');
    
    console.log('\n📚 Available Subjects:\n');
    
    for (const subject of subjects) {
        const chapters = await db.all('SELECT id, name FROM chapters WHERE subject_id = ? ORDER BY id', subject.id);
        console.log(`${subject.id}. ${subject.name} (${chapters.length} chapters)`);
        chapters.forEach(ch => {
            console.log(`   - ${ch.name}`);
        });
        console.log();
    }
}

listSubjects().catch(console.error);
