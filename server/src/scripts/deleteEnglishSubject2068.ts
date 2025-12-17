
import { initDatabase } from '../db/database';

async function deleteEnglishSubject2068() {
    const db = await initDatabase();
    
    const subjectId = 2068;
    console.log(`Deleting subject ID: ${subjectId}...`);

    // Delete chapters
    const chaptersResult = await db.run('DELETE FROM chapters WHERE subject_id = ?', subjectId);
    console.log(`Deleted ${chaptersResult.changes} chapters.`);

    // Delete papers
    const papersResult = await db.run('DELETE FROM question_papers WHERE subject_id = ?', subjectId);
    console.log(`Deleted ${papersResult.changes} papers.`);

    // Delete the subject
    const subjectResult = await db.run('DELETE FROM subjects WHERE id = ?', subjectId);
    console.log(`Deleted subject ID ${subjectId}.`);
}

deleteEnglishSubject2068().catch(console.error);
