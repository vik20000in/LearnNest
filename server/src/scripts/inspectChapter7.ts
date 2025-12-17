import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../learnnest.sqlite');
const db = new Database(dbPath);

const paper = db.prepare(`
  SELECT qp.id, qp.title, qp.content 
  FROM question_papers qp
  JOIN subjects s ON qp.subject_id = s.id
  WHERE s.name = 'Geography' 
  AND qp.id = 852
`).get() as any;

console.log(`\nPaper ${paper.id}: ${paper.title}\n`);

const content = JSON.parse(paper.content);
console.log('Paper structure:', Object.keys(content));

if (content.sections) {
  console.log(`\nSections: ${content.sections.length}`);
  content.sections.forEach((section: any) => {
    console.log(`\n${section.name}: ${section.questions?.length || 0} questions`);
    if (section.questions && section.questions.length > 0) {
      const firstQ = section.questions[0];
      console.log(`  Sample question: ${firstQ.question?.substring(0, 100)}`);
      const isGeneric = /which (principle|statement|option|property)|what (are|is) (the )?(components|main)|type (a|b)|option (i|ii|iii|iv)|following (is|are) (true|correct)|statement (a|b|c)/i.test(firstQ.question || '');
      console.log(`  Is generic: ${isGeneric ? 'YES ⚠️' : 'NO ✓'}`);
    }
  });
}

db.close();
