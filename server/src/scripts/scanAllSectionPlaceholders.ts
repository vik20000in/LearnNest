import { getDb } from '../db/database';

const scanAllSectionPlaceholders = async () => {
  const db = await getDb();
  
  // Get all math papers
  const papers = await db.all(`
    SELECT qp.id, qp.title, qp.content, s.name as subject_name
    FROM question_papers qp
    JOIN subjects s ON qp.subject_id = s.id
    WHERE s.name = 'Maths'
    ORDER BY qp.id
  `);
  
  console.log(`\n🔍 Scanning ${papers.length} Math papers for placeholder issues in ALL sections...\n`);
  
  const problematicPapers: any[] = [];
  
  for (const paper of papers) {
    const content = JSON.parse(paper.content);
    
    // Check all sections for placeholders
    for (const section of content.sections) {
      if (section.questions && section.questions.length > 0) {
        // Check if questions have placeholder text
        const placeholders = section.questions.filter((q: any) => 
          q.question.includes('Solve this problem') || 
          q.question.includes('[Set A') || 
          q.question.includes('[Set B') || 
          q.question.includes('[Set C') ||
          q.question.includes('(Show your work)') ||
          q.question.includes('Solve the given problem') ||
          q.question.includes('Solve and verify') ||
          q.question.includes('Solve the word problem')
        );
        
        if (placeholders.length > 0) {
          problematicPapers.push({
            id: paper.id,
            title: paper.title,
            sectionName: section.name,
            questionCount: section.questions.length,
            placeholderCount: placeholders.length,
            sampleQuestion: placeholders[0].question
          });
        }
      }
    }
  }
  
  console.log(`\n📊 Found ${problematicPapers.length} sections with placeholder issues:\n`);
  console.log('='.repeat(100));
  
  // Group by section type
  const bySection = new Map<string, any[]>();
  problematicPapers.forEach(p => {
    const secType = p.sectionName.includes('Section A') ? 'Section A' :
                    p.sectionName.includes('Section B') ? 'Section B' :
                    p.sectionName.includes('Section C') ? 'Section C' :
                    p.sectionName.includes('Section D') ? 'Section D' : 'Other';
    if (!bySection.has(secType)) bySection.set(secType, []);
    bySection.get(secType)!.push(p);
  });
  
  bySection.forEach((papers, sectionType) => {
    console.log(`\n\n🔴 ${sectionType} Issues (${papers.length} papers):`);
    console.log('-'.repeat(100));
    papers.forEach(paper => {
      console.log(`\n📄 Paper ${paper.id}: ${paper.title}`);
      console.log(`   Section: ${paper.sectionName}`);
      console.log(`   Placeholders: ${paper.placeholderCount}/${paper.questionCount} questions`);
      console.log(`   Sample: ${paper.sampleQuestion.substring(0, 100)}...`);
    });
  });
  
  console.log('\n\n' + '='.repeat(100));
  console.log(`\n✅ Scan complete! ${problematicPapers.length} sections need fixing.\n`);
  
  // Return paper IDs grouped by section
  const result: any = {};
  bySection.forEach((papers, sectionType) => {
    result[sectionType] = papers.map(p => ({ id: p.id, title: p.title }));
  });
  
  return result;
};

scanAllSectionPlaceholders()
  .then((result) => {
    console.log(`\nSummary by section type:`);
    Object.entries(result).forEach(([section, papers]: [string, any]) => {
      console.log(`  ${section}: ${papers.length} papers`);
    });
    process.exit(0);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });
