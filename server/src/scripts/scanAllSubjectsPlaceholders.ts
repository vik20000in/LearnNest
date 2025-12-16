import { getDb } from '../db/database';

const scanAllSubjects = async () => {
  const db = await getDb();
  
  // Get all subjects
  const subjects = await db.all('SELECT id, name FROM subjects ORDER BY name');
  
  console.log('\n🔍 Scanning all subjects for placeholder issues...\n');
  
  const results: any[] = [];
  
  for (const subject of subjects) {
    const papers = await db.all(`
      SELECT qp.id, qp.title, qp.content
      FROM question_papers qp
      WHERE qp.subject_id = ?
      ORDER BY qp.id
    `, subject.id);
    
    let placeholderCount = 0;
    const problematicPapers: any[] = [];
    
    for (const paper of papers) {
      const content = JSON.parse(paper.content);
      
      for (const section of content.sections) {
        if (section.questions && section.questions.length > 0) {
          const placeholders = section.questions.filter((q: any) => 
            q.question && (
              q.question.includes('Solve this problem') || 
              q.question.includes('[Set A') || 
              q.question.includes('[Set B') || 
              q.question.includes('[Set C') ||
              q.question.includes('(Show your work)') ||
              q.question.includes('Solve the given problem') ||
              q.question.includes('Solve and verify') ||
              q.question.includes('Solve the word problem')
            )
          );
          
          if (placeholders.length > 0) {
            placeholderCount += placeholders.length;
            problematicPapers.push({
              id: paper.id,
              title: paper.title,
              sectionName: section.name,
              placeholderCount: placeholders.length
            });
          }
        }
      }
    }
    
    results.push({
      subject: subject.name,
      totalPapers: papers.length,
      problematicPapers: problematicPapers.length,
      totalPlaceholders: placeholderCount
    });
  }
  
  console.log('='.repeat(100));
  console.log('\n📊 PLACEHOLDER SCAN RESULTS BY SUBJECT:\n');
  console.log('='.repeat(100));
  
  results.forEach(r => {
    const status = r.totalPlaceholders === 0 ? '✅' : '❌';
    console.log(`\n${status} ${r.subject}`);
    console.log(`   Total Papers: ${r.totalPapers}`);
    console.log(`   Papers with Issues: ${r.problematicPapers}`);
    console.log(`   Total Placeholders: ${r.totalPlaceholders}`);
  });
  
  console.log('\n' + '='.repeat(100));
  
  const totalIssues = results.reduce((sum, r) => sum + r.totalPlaceholders, 0);
  console.log(`\n🎯 SUMMARY: ${totalIssues} total placeholder questions across all subjects\n`);
  
  await db.close();
};

scanAllSubjects()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
