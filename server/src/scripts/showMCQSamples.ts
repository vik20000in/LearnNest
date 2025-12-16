import { initDatabase } from '../db/database';

async function showMCQSamples() {
    const db = await initDatabase();
    
    // Get Set A, B, C for Matter chapter
    const papers = await db.all('SELECT id, title, content FROM question_papers WHERE id BETWEEN 390 AND 392');
    
    for (const paper of papers) {
        const content = JSON.parse(paper.content);
        const mcqSection = content.sections[0];
        
        console.log(`\n${'='.repeat(60)}`);
        console.log(`📝 ${paper.title}`);
        console.log(`${'='.repeat(60)}\n`);
        
        // Show first 3 MCQs
        for (let i = 0; i < 3; i++) {
            const q = mcqSection.questions[i];
            console.log(`Q${i + 1}: ${q.question}`);
            q.options.forEach((opt: string, idx: number) => {
                const marker = opt === q.answer ? '✓' : ' ';
                console.log(`   ${String.fromCharCode(65 + idx)}) ${opt} ${marker}`);
            });
            console.log();
        }
    }
}

showMCQSamples().catch(console.error);
