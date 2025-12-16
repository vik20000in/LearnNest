import { initDatabase } from '../db/database';

async function findPlaceholderQuestions() {
  console.log('🔍 Searching for placeholder questions in papers...\n');
  
  const db = await initDatabase();
  
  // Get all papers
  const papers = await db.all(
    'SELECT id, title, content FROM question_papers ORDER BY id'
  );
  
  console.log(`Checking ${papers.length} papers...\n`);
  
  const papersWithPlaceholders: any[] = [];
  
  for (const paper of papers) {
    const content = JSON.parse(paper.content);
    let hasPlaceholder = false;
    const placeholderQuestions: string[] = [];
    
    content.sections?.forEach((section: any) => {
      section.questions?.forEach((q: any) => {
        // Check for placeholder patterns
        if (
          q.question.includes('S0-Q') || 
          q.question.includes('S1-Q') || 
          q.question.includes('S2-Q') ||
          q.question.includes('S3-Q') ||
          q.question.includes('Which concept is most important') ||
          q.question.includes('Concept S') ||
          (q.options && q.options[0]?.includes('Concept S'))
        ) {
          hasPlaceholder = true;
          placeholderQuestions.push(q.question);
        }
      });
    });
    
    if (hasPlaceholder) {
      papersWithPlaceholders.push({
        id: paper.id,
        title: paper.title,
        count: placeholderQuestions.length,
        samples: placeholderQuestions.slice(0, 3)
      });
    }
  }
  
  await db.close();
  
  if (papersWithPlaceholders.length === 0) {
    console.log('✅ No placeholder questions found in any papers!');
  } else {
    console.log(`❌ Found ${papersWithPlaceholders.length} papers with placeholder questions:\n`);
    
    papersWithPlaceholders.forEach(paper => {
      console.log(`📄 Paper ID ${paper.id}: ${paper.title}`);
      console.log(`   Placeholder questions: ${paper.count}`);
      console.log(`   Sample: "${paper.samples[0].substring(0, 80)}..."`);
      console.log('');
    });
    
    console.log('\n📊 SUMMARY:');
    console.log(`Total papers: ${papers.length}`);
    console.log(`Papers with placeholders: ${papersWithPlaceholders.length}`);
    console.log(`Papers without placeholders: ${papers.length - papersWithPlaceholders.length}`);
  }
}

findPlaceholderQuestions().catch(console.error);
