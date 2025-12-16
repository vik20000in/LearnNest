import { initDatabase } from '../db/database';

async function showSummary() {
    const db = await initDatabase();
    
    const stats = await db.get(`
        SELECT 
            (SELECT COUNT(*) FROM subjects) as total_subjects,
            (SELECT COUNT(*) FROM chapters) as total_chapters,
            (SELECT COUNT(*) FROM flashcards) as total_flashcards,
            (SELECT COUNT(DISTINCT chapter_id) FROM flashcards) as chapters_with_flashcards,
            (SELECT COUNT(*) FROM question_papers WHERE chapter_id IS NOT NULL) as total_practice_papers,
            (SELECT COUNT(DISTINCT chapter_id) FROM question_papers WHERE chapter_id IS NOT NULL) as chapters_with_papers
    `);

    console.log('\n📊 LearnNest Database Summary\n');
    console.log(`✅ Total Subjects: ${stats.total_subjects}`);
    console.log(`✅ Total Chapters: ${stats.total_chapters}`);
    console.log(`\n📚 Flashcards:`);
    console.log(`   Chapters with Flashcards: ${stats.chapters_with_flashcards}/${stats.total_chapters} (${Math.round(stats.chapters_with_flashcards/stats.total_chapters*100)}%)`);
    console.log(`   Total Flashcards: ${stats.total_flashcards}`);
    console.log(`   Average per Chapter: ${Math.round(stats.total_flashcards/stats.chapters_with_flashcards)} flashcards`);
    console.log(`\n📝 Practice Papers:`);
    console.log(`   Chapters with Practice Papers: ${stats.chapters_with_papers}/${stats.total_chapters} (${Math.round(stats.chapters_with_papers/stats.total_chapters*100)}%)`);
    console.log(`   Total Practice Papers: ${stats.total_practice_papers}\n`);
}

showSummary().catch(console.error);
