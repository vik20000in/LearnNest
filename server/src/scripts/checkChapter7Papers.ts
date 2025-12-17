import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../learnnest.sqlite');
const db = new Database(dbPath);

console.log('\n================================================================================');
console.log('CHECKING GEOGRAPHY CHAPTER 7 PAPERS');
console.log('================================================================================\n');

const papers = db.prepare(`
  SELECT qp.id, qp.title 
  FROM question_papers qp
  JOIN subjects s ON qp.subject_id = s.id
  WHERE s.name = 'Geography' 
  AND qp.title LIKE '%Chapter 7:%'
  ORDER BY qp.id
`).all();

console.log(`Found ${papers.length} Chapter 7 papers\n`);

for (const paper of papers as any[]) {
  console.log(`\nPaper ${paper.id}: ${paper.title}`);
  console.log('='.repeat(80));
  
  const questions = db.prepare(`
    SELECT q.id, q.question_text, q.type 
    FROM questions q
    WHERE q.paper_id = ?
    ORDER BY q.id
    LIMIT 15
  `).all(paper.id);
  
  console.log(`Total questions: ${questions.length}`);
  
  // Check Section A (MCQs)
  const sectionA = (questions as any[]).filter(q => q.type === 'mcq').slice(0, 10);
  console.log(`\nSection A (MCQs): ${sectionA.length} questions`);
  sectionA.forEach((q, idx) => {
    const isGeneric = /which (principle|statement|option|property)|what (are|is) (the )?(components|main)|type (a|b)|option (i|ii|iii|iv)|following (is|are) (true|correct)|statement (a|b|c)/i.test(q.question_text);
    console.log(`  ${idx + 1}. ${q.question_text.substring(0, 80)}... ${isGeneric ? '⚠️  GENERIC' : '✓'}`);
  });
  
  // Check other sections
  const otherQuestions = (questions as any[]).filter(q => q.type !== 'mcq');
  console.log(`\nOther sections: ${otherQuestions.length} questions`);
  otherQuestions.slice(0, 5).forEach((q, idx) => {
    const isGeneric = /which (principle|statement|option|property)|what (are|is) (the )?(components|main)|type (a|b)|option (i|ii|iii|iv)|following (is|are) (true|correct)|statement (a|b|c)/i.test(q.question_text);
    console.log(`  ${idx + 1}. [${q.type.toUpperCase()}] ${q.question_text.substring(0, 70)}... ${isGeneric ? '⚠️  GENERIC' : '✓'}`);
  });
}

console.log('\n================================================================================');
console.log('✅ CHECK COMPLETED');
console.log('================================================================================\n');

db.close();
