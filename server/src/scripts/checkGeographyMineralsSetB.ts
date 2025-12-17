import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../learnnest.sqlite');
const db = new Database(dbPath);

const paper = db.prepare(`
  SELECT id, title 
  FROM question_papers 
  WHERE title LIKE '%Chapter 5: Minerals%Set B%'
`).get() as { id: number; title: string } | undefined;

if (paper) {
  console.log('Paper ID:', paper.id);
  console.log('Title:', paper.title);
  
  const content = db.prepare('SELECT content FROM question_papers WHERE id = ?').get(paper.id) as { content: string };
  const parsed = JSON.parse(content.content);
  
  console.log('\n=== ALL QUESTIONS ===\n');
  
  let genericCount = 0;
  const genericQuestions: any[] = [];
  
  for (const section of parsed.sections) {
    console.log(`\n${section.name}:`);
    console.log('='.repeat(80));
    
    for (const q of section.questions) {
      console.log(`\nQ${q.id}: ${q.question}`);
      
      if (q.options) {
        console.log('Options:', q.options.join(', '));
      }
      
      if (q.answer) {
        console.log('Answer:', q.answer.substring(0, 150) + (q.answer.length > 150 ? '...' : ''));
      }
      
      console.log('Marks:', q.marks);
      
      // Check for generic placeholders
      const questionText = q.question.toLowerCase();
      const answerText = (q.answer || '').toLowerCase();
      
      const genericPatterns = [
        'this is a placeholder',
        'sample question',
        'to be replaced',
        'generic question',
        'test question',
        'question about',
        'answer here',
        'answer to be provided'
      ];
      
      const isGeneric = genericPatterns.some(pattern => 
        questionText.includes(pattern) || answerText.includes(pattern)
      );
      
      if (isGeneric) {
        genericCount++;
        genericQuestions.push({
          section: section.name,
          id: q.id,
          question: q.question,
          answer: q.answer
        });
        console.log('⚠️  GENERIC PLACEHOLDER DETECTED');
      }
      
      console.log('-'.repeat(80));
    }
  }
  
  console.log('\n\n=== SUMMARY ===');
  console.log('Total generic placeholder questions found:', genericCount);
  
  if (genericCount > 0) {
    console.log('\n⚠️  GENERIC QUESTIONS:');
    for (const gq of genericQuestions) {
      console.log(`\n${gq.section} - Q${gq.id}:`);
      console.log(`Question: ${gq.question}`);
      console.log(`Answer: ${gq.answer?.substring(0, 100)}...`);
    }
  } else {
    console.log('✅ No generic placeholder questions found!');
  }
} else {
  console.log('❌ Paper not found. Searching for similar titles...');
  
  const similar = db.prepare(`
    SELECT id, title 
    FROM question_papers 
    WHERE title LIKE '%Minerals%'
    ORDER BY title
  `).all();
  
  console.log('\nFound papers with "Minerals":');
  for (const p of similar as any[]) {
    console.log(`- ${p.id}: ${p.title}`);
  }
}

db.close();
