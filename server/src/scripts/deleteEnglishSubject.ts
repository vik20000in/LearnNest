
import { initDatabase } from '../db/database';

async function deleteEnglishSubject() {
    const db = await initDatabase();
    
    const subjectName = 'English';
    const subject = await db.get('SELECT id FROM subjects WHERE name = ?', subjectName);
    
    if (!subject) {
        console.log(`Subject '${subjectName}' not found.`);
        return;
    }

    const subjectId = subject.id;
    console.log(`Deleting subject '${subjectName}' (ID: ${subjectId})...`);

    // Delete chapters
    const chaptersResult = await db.run('DELETE FROM chapters WHERE subject_id = ?', subjectId);
    console.log(`Deleted ${chaptersResult.changes} chapters.`);

    // Delete papers (though we found 0, good practice to include)
    const papersResult = await db.run('DELETE FROM question_papers WHERE subject_id = ?', subjectId);
    console.log(`Deleted ${papersResult.changes} papers.`);

    // Delete the subject
    const subjectResult = await db.run('DELETE FROM subjects WHERE id = ?', subjectId);
    console.log(`Deleted subject '${subjectName}'.`);
}

deleteEnglishSubject().catch(console.error);
