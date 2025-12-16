import { initDatabase } from '../db/database';

async function checkAllVariants() {
  console.log('🔍 Checking all subjects for duplicate variants...\n');
  
  const db = await initDatabase();
  
  // Get all papers excluding History (just fixed), Math, and Physics (already good)
  const papers = await db.all(`
    SELECT id, title, variant_label, content, subject_id
    FROM question_papers 
    WHERE title NOT LIKE '%History%' 
      AND title NOT LIKE '%Civics%'
      AND title NOT LIKE '%Maths%'
      AND title NOT LIKE '%Physics%'
    ORDER BY title, variant_label
  `);
  
  console.log(`Found ${papers.length} papers to check\n`);
  
  // Group by chapter (base title without Set A/B/C)
  const chapters = new Map<string, any[]>();
  
  for (const paper of papers) {
    const baseTitle = paper.title.replace(/ - Set [ABC]$/, '');
    if (!chapters.has(baseTitle)) {
      chapters.set(baseTitle, []);
    }
    chapters.get(baseTitle)!.push(paper);
  }
  
  let duplicateCount = 0;
  const duplicateChapters: string[] = [];
  
  // Check each chapter's variants
  for (const [chapter, variants] of chapters.entries()) {
    if (variants.length < 2) continue;
    
    // Parse questions
    const parsedVariants = variants.map(v => {
      const content = JSON.parse(v.content);
      const allQuestions = content.sections.flatMap((s: any) => s.questions || []);
      return {
        ...v,
        parsedQuestions: allQuestions
      };
    });
    
    const firstVariant = parsedVariants[0].parsedQuestions;
    let hasDuplicates = false;
    
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
        hasDuplicates = true;
        break;
      }
    }
    
    if (hasDuplicates) {
      duplicateCount++;
      duplicateChapters.push(chapter);
      console.log(`❌ ${chapter} - has duplicate questions across variants`);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total subjects checked: ${chapters.size}`);
  console.log(`   Subjects with duplicates: ${duplicateCount}`);
  console.log(`   Subjects with unique variants: ${chapters.size - duplicateCount}`);
  
  await db.close();
}

checkAllVariants().catch(console.error);
