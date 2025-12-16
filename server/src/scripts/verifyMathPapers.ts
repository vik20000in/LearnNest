import { initDatabase } from '../db/database';

async function verifyMathPapers() {
  const db = await initDatabase();

  console.log('🔍 Verifying regenerated Math papers...\n');

  // Check a few Math papers
  const papers = await db.all(
    `SELECT id, title, content, variant_label FROM question_papers WHERE id IN (609, 610, 615, 616, 618, 619) ORDER BY id`
  );

  for (const paper of papers) {
    const content = JSON.parse(paper.content);
    console.log(`\n📄 ${paper.title} (Set ${paper.variant_label})`);
    console.log('Sample MCQs:');
    
    content.sections[0].questions.slice(0, 3).forEach((q: any, idx: number) => {
      console.log(`  ${idx + 1}. ${q.question}`);
      console.log(`     Options: ${q.options.join(', ')}`);
      console.log(`     Answer: ${q.answer}`);
    });
  }

  await db.close();
}

verifyMathPapers();
