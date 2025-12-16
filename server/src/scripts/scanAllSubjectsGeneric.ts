import { getDb } from '../db/database';

async function scanAllSubjectsGeneric() {
  const db = await getDb();
  
  const subjects = await db.all('SELECT id, name FROM subjects ORDER BY name');
  
  console.log('\n🔍 Scanning all subjects for generic placeholder questions...\n');
  
  const results: any[] = [];
  
  for (const subject of subjects) {
    const papers = await db.all(`
      SELECT qp.id, qp.title, qp.content
      FROM question_papers qp
      WHERE qp.subject_id = ?
      ORDER BY qp.id
    `, subject.id);
    
    let problematicPapers = 0;
    let totalGenericQuestions = 0;
    
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
            totalGenericQuestions += generic.length;
          }
        }
      }
      
      if (hasGeneric) problematicPapers++;
    }
    
    if (totalGenericQuestions > 0) {
      results.push({
        subject: subject.name,
        totalPapers: papers.length,
        problematicPapers,
        totalGenericQuestions
      });
    }
  }
  
  console.log('='.repeat(100));
  console.log('\n📊 GENERIC QUESTION SCAN RESULTS:\n');
  console.log('='.repeat(100));
  
  if (results.length === 0) {
    console.log('\n✅ No generic placeholder questions found!\n');
  } else {
    results.forEach(r => {
      console.log(`\n❌ ${r.subject}`);
      console.log(`   Total Papers: ${r.totalPapers}`);
      console.log(`   Papers with Generic Questions: ${r.problematicPapers}`);
      console.log(`   Total Generic Questions: ${r.totalGenericQuestions}`);
    });
    
    console.log('\n' + '='.repeat(100));
    
    const totalGeneric = results.reduce((sum, r) => sum + r.totalGenericQuestions, 0);
    const totalPapers = results.reduce((sum, r) => sum + r.problematicPapers, 0);
    console.log(`\n🎯 SUMMARY: ${totalGeneric} generic questions across ${totalPapers} papers\n`);
  }
  
  await db.close();
}

scanAllSubjectsGeneric().catch(console.error);
