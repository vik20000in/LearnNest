import { getDb } from '../db/database';

async function scanBiologyGenericQuestions() {
  const db = await getDb();
  
  const papers = await db.all(`
    SELECT qp.id, qp.title, qp.content
    FROM question_papers qp
    JOIN subjects s ON qp.subject_id = s.id
    WHERE s.name = 'Biology'
    ORDER BY qp.id
  `);
  
  console.log(`\n🔍 Scanning ${papers.length} Biology papers for generic questions...\n`);
  
  const problematic: any[] = [];
  
  for (const paper of papers) {
    const content = JSON.parse(paper.content);
    let hasGeneric = false;
    
    for (const section of content.sections) {
      if (section.questions && section.questions.length > 0) {
        const generic = section.questions.filter((q: any) => 
          q.question && (
            q.question.includes('What is the main topic of Chapter') ||
            q.question.includes('Which concept is fundamental') ||
            q.question.includes('What is a key feature') ||
            q.question.includes('key concept in this topic') ||
            (q.options && (
              q.options.includes('Topic A') ||
              q.options.includes('Concept 1') ||
              q.options.includes('Feature A')
            )) ||
            q.answer === 'undefined' ||
            q.answer === undefined
          )
        );
        
        if (generic.length > 0) {
          hasGeneric = true;
          problematic.push({
            id: paper.id,
            title: paper.title,
            sectionName: section.name,
            genericCount: generic.length,
            totalQuestions: section.questions.length
          });
        }
      }
    }
  }
  
  console.log('='.repeat(100));
  console.log(`\n📊 Found ${problematic.length} sections with generic questions:\n`);
  console.log('='.repeat(100));
  
  const paperIds = new Set(problematic.map(p => p.id));
  console.log(`\n🔴 ${paperIds.size} papers need fixing:\n`);
  
  paperIds.forEach(id => {
    const paperSections = problematic.filter(p => p.id === id);
    console.log(`\nPaper ${id}: ${paperSections[0].title}`);
    paperSections.forEach(p => {
      console.log(`  - ${p.sectionName}: ${p.genericCount}/${p.totalQuestions} generic questions`);
    });
  });
  
  console.log('\n' + '='.repeat(100));
  console.log(`\n✅ Scan complete!\n`);
  
  await db.close();
}

scanBiologyGenericQuestions().catch(console.error);
