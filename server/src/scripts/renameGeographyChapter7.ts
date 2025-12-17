import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../learnnest.sqlite');
const db = new Database(dbPath);

console.log('\n' + '='.repeat(80));
console.log('RENAMING GEOGRAPHY CHAPTER 7 PAPERS');
console.log('='.repeat(80));

// Find all Geography Chapter 7 papers
const papers = db.prepare(`
  SELECT qp.id, qp.title, s.name as subject_name
  FROM question_papers qp
  JOIN subjects s ON qp.subject_id = s.id
  WHERE s.name = 'Geography' AND qp.title LIKE '%Chapter 7:%'
  ORDER BY qp.title
`).all() as Array<{ id: number; title: string; subject_name: string }>;

console.log(`\nFound ${papers.length} Geography Chapter 7 papers\n`);

const newChapterName = 'Chapter 7: South America -Location, Political Divisions and Physical Features';

for (const paper of papers) {
  console.log(`\nPaper ${paper.id}: ${paper.title}`);
  
  // Extract the Set letter (A, B, or C)
  const setMatch = paper.title.match(/Set ([ABC])$/);
  const setLetter = setMatch ? setMatch[1] : '';
  
  if (setLetter) {
    const newTitle = `Geography Practice Paper - ${newChapterName} - Set ${setLetter}`;
    
    // Update the title in database
    db.prepare('UPDATE question_papers SET title = ? WHERE id = ?').run(newTitle, paper.id);
    
    console.log(`  ✅ Updated to: ${newTitle}`);
  } else {
    console.log(`  ⚠️  Could not extract Set letter, skipping`);
  }
}

console.log('\n' + '='.repeat(80));
console.log(`✅ COMPLETED! Updated ${papers.length} papers`);
console.log('='.repeat(80) + '\n');

db.close();
