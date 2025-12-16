import { getDb } from '../db/database';

const inspect639 = async () => {
  const db = await getDb();
  const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 639');
  
  if (!paper) {
    console.log('Paper not found!');
    return;
  }
  
  const content = JSON.parse(paper.content);
  const sectionB = content.sections.find((s: any) => s.name.includes('Section B'));
  
  console.log(`\nPaper ${paper.id}: ${paper.title}`);
  console.log('\nSection B:');
  console.log('Section name:', sectionB?.name);
  console.log('Questions:');
  sectionB?.questions.forEach((q: any, i: number) => {
    console.log(`Q${i+1}: ${q.question.substring(0, 100)}`);
  });
};

inspect639()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
