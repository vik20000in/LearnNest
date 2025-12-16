import { initDatabase } from '../db/database';

async function deletePlaceholderPapers() {
  console.log('🗑️  Deleting papers with placeholder questions...\n');
  
  const db = await initDatabase();
  
  // IDs of papers with placeholders (from findPlaceholderQuestions output)
  const paperIds = [
    2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 
    308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 
    325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 
    342, 343, 344, 345, 346, 347, 348, 349, 350
  ];
  
  console.log(`Found ${paperIds.length} papers to delete\n`);
  
  for (const id of paperIds) {
    const paper = await db.get('SELECT id, title FROM question_papers WHERE id = ?', id);
    if (paper) {
      await db.run('DELETE FROM question_papers WHERE id = ?', id);
      console.log(`✅ Deleted Paper ${id}: ${paper.title}`);
    }
  }
  
  await db.close();
  
  console.log(`\n✨ Successfully deleted ${paperIds.length} papers with placeholder questions`);
  console.log('\n⚠️  NOTE: These were incomplete papers with placeholder questions.');
  console.log('   The good papers (Physics variants with 390-407 and Math papers 609-647) remain intact.');
  console.log('   You may want to regenerate proper papers for the deleted subjects/chapters.');
}

deletePlaceholderPapers().catch(console.error);
