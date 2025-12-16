import { initDatabase } from '../db/database';

async function verifyAllSubjectsPapers() {
    const db = await initDatabase();
    
    // Check a few papers from different subjects
    const testPapers = [
        { id: 411, subject: 'Maths - Decimal Fractions' },
        { id: 450, subject: 'Chemistry - Introduction' },
        { id: 468, subject: 'Biology - Introduction' },
        { id: 510, subject: 'Computer - File Management' },
        { id: 492, subject: 'Geography - Mapping' }
    ];
    
    for (const test of testPapers) {
        const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = ?', test.id);
        
        if (!paper) {
            console.log(`❌ Paper ${test.id} not found\n`);
            continue;
        }
        
        const content = JSON.parse(paper.content);
        
        console.log(`\n${'='.repeat(60)}`);
        console.log(`📝 ${test.subject} (Paper ID: ${paper.id})`);
        console.log(`${'-'.repeat(60)}`);
        console.log(`Title: ${paper.title}`);
        console.log(`Duration: ${content.duration}`);
        console.log(`Total Marks: ${content.totalMarks}`);
        
        let totalQ = 0;
        let totalM = 0;
        
        content.sections.forEach((s: any) => {
            const marks = s.questions.reduce((sum: number, q: any) => sum + q.marks, 0);
            totalQ += s.questions.length;
            totalM += marks;
            console.log(`\n${s.name}`);
            console.log(`  Questions: ${s.questions.length}, Marks: ${marks}`);
        });
        
        console.log(`\n✅ Total: ${totalQ} questions, ${totalM} marks`);
        
        // Show sample MCQ
        const mcq = content.sections[0].questions[0];
        console.log(`\n📋 Sample MCQ:`);
        console.log(`   ${mcq.question}`);
        mcq.options.forEach((opt: string, idx: number) => {
            const marker = opt === mcq.answer ? ' ✓' : '';
            console.log(`   ${String.fromCharCode(65 + idx)}) ${opt}${marker}`);
        });
    }
}

verifyAllSubjectsPapers().catch(console.error);
