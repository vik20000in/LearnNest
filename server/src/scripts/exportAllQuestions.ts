import { getDb } from '../db/database';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Export all questions from database for comprehensive validation
 */

const exportAllQuestions = async () => {
    console.log('📚 Exporting all questions from database...\n');

    const db = await getDb();
    
    // Get all subjects
    const subjects = await db.all('SELECT id, name FROM subjects ORDER BY name');
    
    const allData: any = {};

    for (const subject of subjects) {
        console.log(`\n📖 Processing ${subject.name}...`);
        
        // Get all chapters for this subject
        const chapters = await db.all(
            'SELECT id, name FROM chapters WHERE subject_id = ? ORDER BY name',
            subject.id
        );
        
        allData[subject.name] = {
            subjectId: subject.id,
            chapters: {}
        };
        
        for (const chapter of chapters) {
            // Get all papers for this chapter
            const papers = await db.all(
                'SELECT id, title, content FROM question_papers WHERE chapter_id = ? ORDER BY title',
                chapter.id
            );
            
            if (papers.length > 0) {
                allData[subject.name].chapters[chapter.name] = {
                    chapterId: chapter.id,
                    papers: []
                };
                
                for (const paper of papers) {
                    try {
                        const content = JSON.parse(paper.content);
                        allData[subject.name].chapters[chapter.name].papers.push({
                            paperId: paper.id,
                            title: paper.title,
                            sections: content.sections || []
                        });
                    } catch (error) {
                        console.error(`   ⚠️ Error parsing paper ${paper.id}: ${paper.title}`);
                    }
                }
                
                console.log(`   ✅ ${chapter.name}: ${papers.length} papers`);
            }
        }
    }
    
    // Save to file
    const outputPath = path.join(__dirname, '../../all_questions_export.json');
    fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));
    
    console.log(`\n✅ Export complete!`);
    console.log(`📄 Saved to: all_questions_export.json`);
    
    // Print summary
    console.log('\n📊 SUMMARY:');
    for (const [subjectName, subjectData] of Object.entries(allData)) {
        const chapterCount = Object.keys((subjectData as any).chapters).length;
        let totalPapers = 0;
        let totalQuestions = 0;
        
        for (const chapterData of Object.values((subjectData as any).chapters)) {
            const papers = (chapterData as any).papers;
            totalPapers += papers.length;
            
            for (const paper of papers) {
                for (const section of paper.sections) {
                    totalQuestions += (section.questions || []).length;
                }
            }
        }
        
        console.log(`   ${subjectName}: ${chapterCount} chapters, ${totalPapers} papers, ${totalQuestions} questions`);
    }
};

exportAllQuestions()
    .then(() => process.exit(0))
    .catch(error => {
        console.error('❌ Error:', error);
        process.exit(1);
    });
