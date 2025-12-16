import { initDatabase } from '../db/database';

async function verifyPaper() {
    const db = await initDatabase();
    
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 390');
    const content = JSON.parse(paper.content);
    
    console.log('📝 Paper:', paper.title);
    console.log('⏱️  Duration:', content.duration);
    console.log('🎯 Total Marks:', content.totalMarks);
    console.log('\n📚 Sections:\n');
    
    content.sections.forEach((s: any) => {
        const totalMarks = s.questions.reduce((sum: number, q: any) => sum + q.marks, 0);
        console.log(`   ${s.name}`);
        console.log(`      Questions: ${s.questions.length}`);
        console.log(`      Total Marks: ${totalMarks}\n`);
    });
    
    const totalQuestions = content.sections.reduce((sum: number, s: any) => sum + s.questions.length, 0);
    const totalMarks = content.sections.reduce((sum: number, s: any) => 
        sum + s.questions.reduce((qsum: number, q: any) => qsum + q.marks, 0), 0
    );
    
    console.log(`✅ Total Questions: ${totalQuestions}`);
    console.log(`✅ Total Marks: ${totalMarks}\n`);
    
    // Show a sample MCQ
    console.log('📋 Sample MCQ (Section A):');
    console.log(`   Q1: ${content.sections[0].questions[0].question}`);
    console.log(`   Options: ${content.sections[0].questions[0].options.join(', ')}`);
    console.log(`   Marks: ${content.sections[0].questions[0].marks}\n`);
    
    // Show a sample Very Short Answer
    console.log('📋 Sample Very Short Answer (Section B):');
    console.log(`   Q11: ${content.sections[1].questions[0].question}`);
    console.log(`   Marks: ${content.sections[1].questions[0].marks}\n`);
    
    // Show a sample Short Answer
    console.log('📋 Sample Short Answer (Section C):');
    console.log(`   Q17: ${content.sections[2].questions[0].question}`);
    console.log(`   Marks: ${content.sections[2].questions[0].marks}\n`);
    
    // Show a sample Long Answer
    console.log('📋 Sample Long Answer (Section D):');
    console.log(`   Q19: ${content.sections[3].questions[0].question}`);
    console.log(`   Marks: ${content.sections[3].questions[0].marks}`);
}

verifyPaper().catch(console.error);
