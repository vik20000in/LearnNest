import { initDatabase } from '../db/database';

async function checkHistoryVariants() {
  console.log('🔍 Checking History and Civics variants...\n');
  
  const db = await initDatabase();
  
  // Get all History and Civics papers
  const papers = await db.all(`
    SELECT id, title, variant_label, content 
    FROM question_papers 
    WHERE title LIKE '%History%' OR title LIKE '%Civics%'
    ORDER BY title, variant_label
  `);
  
  console.log(`Found ${papers.length} History and Civics papers\n`);
  
  // Group by chapter (base title without Set A/B/C)
  const chapters = new Map<string, any[]>();
  
  for (const paper of papers) {
    const baseTitle = paper.title.replace(/ - Set [ABC]$/, '');
    if (!chapters.has(baseTitle)) {
      chapters.set(baseTitle, []);
    }
    chapters.get(baseTitle)!.push(paper);
  }
  
  // Check each chapter's variants
  for (const [chapter, variants] of chapters.entries()) {
    console.log(`\n📚 ${chapter}`);
    console.log(`   Found ${variants.length} variants: ${variants.map(v => v.variant_label).join(', ')}`);
    
    if (variants.length < 2) {
      console.log('   ⚠️  Only one variant, skipping comparison');
      continue;
    }
    
    // Parse questions
    const parsedVariants = variants.map(v => {
      const content = JSON.parse(v.content);
      // Extract all questions from all sections
      const allQuestions = content.sections.flatMap((s: any) => s.questions || []);
      return {
        ...v,
        parsedQuestions: allQuestions
      };
    });
    
    // Compare first 3 questions across variants
    const firstVariant = parsedVariants[0].parsedQuestions;
    let identicalCount = 0;
    
    for (let i = 1; i < parsedVariants.length; i++) {
      const currentVariant = parsedVariants[i].parsedQuestions;
      let sameQuestions = 0;
      
      // Check first 5 questions
      for (let q = 0; q < Math.min(5, firstVariant.length); q++) {
        if (firstVariant[q].question === currentVariant[q].question) {
          sameQuestions++;
        }
      }
      
      if (sameQuestions >= 4) {
        identicalCount++;
        console.log(`   ❌ ${parsedVariants[0].variant_label} and ${parsedVariants[i].variant_label} have ${sameQuestions}/5 identical questions`);
      } else {
        console.log(`   ✅ ${parsedVariants[0].variant_label} and ${parsedVariants[i].variant_label} have ${sameQuestions}/5 same questions`);
      }
    }
    
    // Show sample questions from Set A and Set B
    if (parsedVariants.length >= 2) {
      console.log(`\n   Sample from ${parsedVariants[0].variant_label}:`);
      console.log(`   Q1: ${parsedVariants[0].parsedQuestions[0].question.substring(0, 80)}...`);
      console.log(`   Q2: ${parsedVariants[0].parsedQuestions[1].question.substring(0, 80)}...`);
      
      console.log(`\n   Sample from ${parsedVariants[1].variant_label}:`);
      console.log(`   Q1: ${parsedVariants[1].parsedQuestions[0].question.substring(0, 80)}...`);
      console.log(`   Q2: ${parsedVariants[1].parsedQuestions[1].question.substring(0, 80)}...`);
    }
  }
  
  await db.close();
}

checkHistoryVariants().catch(console.error);
