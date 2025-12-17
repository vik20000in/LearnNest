import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../learnnest.sqlite');
const db = new Database(dbPath);

// South America - Chapter 7 questions
const chapter7Questions = {
  mcq: [
    { question: "Which is the largest country in South America by area?", options: ["A) Argentina", "B) Brazil", "C) Peru", "D) Colombia"], answer: "B) Brazil", marks: 1 },
    { question: "The capital of Brazil is", options: ["A) Rio de Janeiro", "B) São Paulo", "C) Brasília", "D) Salvador"], answer: "C) Brasília", marks: 1 },
    { question: "Which ocean lies to the east of South America?", options: ["A) Pacific Ocean", "B) Atlantic Ocean", "C) Indian Ocean", "D) Arctic Ocean"], answer: "B) Atlantic Ocean", marks: 1 },
    { question: "The Andes Mountains are located in", options: ["A) Eastern South America", "B) Western South America", "C) Northern South America", "D) Central Africa"], answer: "B) Western South America", marks: 1 },
    { question: "Which river is the longest in South America?", options: ["A) Paraná River", "B) Orinoco River", "C) Amazon River", "D) São Francisco River"], answer: "C) Amazon River", marks: 1 },
    { question: "The capital of Argentina is", options: ["A) Lima", "B) Santiago", "C) Montevideo", "D) Buenos Aires"], answer: "D) Buenos Aires", marks: 1 },
    { question: "How many countries are there in South America?", options: ["A) 10", "B) 12", "C) 15", "D) 18"], answer: "B) 12", marks: 1 },
    { question: "Lake Titicaca is located between which two countries?", options: ["A) Brazil and Argentina", "B) Peru and Bolivia", "C) Chile and Peru", "D) Colombia and Venezuela"], answer: "B) Peru and Bolivia", marks: 1 },
    { question: "Which is the driest desert in South America?", options: ["A) Sahara Desert", "B) Kalahari Desert", "C) Atacama Desert", "D) Gobi Desert"], answer: "C) Atacama Desert", marks: 1 },
    { question: "The equator passes through which South American countries?", options: ["A) Brazil, Peru, Colombia", "B) Brazil, Ecuador, Colombia", "C) Argentina, Chile, Peru", "D) Venezuela, Guyana, Suriname"], answer: "B) Brazil, Ecuador, Colombia", marks: 1 }
  ],
  vsa: [
    { question: "Name the largest country in South America.", answer: "Brazil is the largest country in South America by both area and population.", marks: 1 },
    { question: "Which ocean borders South America on the west?", answer: "The Pacific Ocean borders South America on the west.", marks: 1 },
    { question: "What is the capital of Chile?", answer: "Santiago is the capital of Chile.", marks: 1 },
    { question: "Name the highest mountain range in South America.", answer: "The Andes Mountains are the highest mountain range in South America.", marks: 1 },
    { question: "Which river basin is the largest in South America?", answer: "The Amazon River basin is the largest river basin in South America.", marks: 1 },
    { question: "Name two landlocked countries in South America.", answer: "Bolivia and Paraguay are the two landlocked countries in South America.", marks: 1 }
  ],
  sa: [
    { question: "Describe the location of South America on the globe.", answer: "South America is located in the Western Hemisphere, mostly in the Southern Hemisphere. It is bounded by the Atlantic Ocean to the east, the Pacific Ocean to the west, the Caribbean Sea to the north, and Antarctica to the south. The continent is connected to North America by the Isthmus of Panama.", marks: 6 },
    { question: "List any five countries of South America with their capitals.", answer: "Five countries of South America with their capitals are: 1) Brazil - Brasília, 2) Argentina - Buenos Aires, 3) Chile - Santiago, 4) Peru - Lima, 5) Colombia - Bogotá.", marks: 6 }
  ],
  la: [
    { question: "Describe the major physical features of South America.", answer: "South America has diverse physical features:\n\n1. The Andes Mountains: The longest mountain range in the world, stretching along the western coast from Venezuela to Chile. Mount Aconcagua (6,962m) is the highest peak.\n\n2. The Amazon River Basin: The world's largest river basin, covering about 40% of South America. The Amazon River is the second longest river in the world.\n\n3. The Pampas: Vast fertile plains in Argentina and Uruguay, ideal for agriculture and cattle ranching.\n\n4. The Brazilian Highlands: A large plateau region in eastern Brazil with rich mineral resources.\n\n5. The Atacama Desert: The driest desert in the world, located in northern Chile.\n\n6. The Pantanal: The world's largest wetland, located in Brazil, Bolivia, and Paraguay.\n\n7. Patagonia: A region of steppes and glaciers in southern Argentina and Chile.\n\nThese physical features influence the climate, vegetation, and human activities in different regions of South America.", marks: 6 },
    { question: "Explain the political divisions of South America and the main languages spoken.", answer: "South America consists of 12 independent countries and one overseas territory:\n\nCountries:\n1. Brazil (largest) - Portuguese\n2. Argentina - Spanish\n3. Colombia - Spanish\n4. Peru - Spanish\n5. Venezuela - Spanish\n6. Chile - Spanish\n7. Ecuador - Spanish\n8. Bolivia - Spanish\n9. Paraguay - Spanish and Guaraní\n10. Uruguay - Spanish\n11. Guyana - English\n12. Suriname - Dutch\n\nOverseas Territory:\nFrench Guiana - French (administered by France)\n\nLanguages: Spanish is the most widely spoken language in South America, used in 9 countries. Portuguese is spoken in Brazil, the continent's largest country by population. English, Dutch, French, and indigenous languages are also spoken in some regions. The diversity of languages reflects the continent's colonial history and indigenous heritage.", marks: 6 }
  ]
};

console.log('\n================================================================================');
console.log('REGENERATING GEOGRAPHY CHAPTER 7 PAPERS');
console.log('================================================================================\n');

// Get all Chapter 7 papers
const papers = db.prepare(`
  SELECT qp.id, qp.title 
  FROM question_papers qp
  JOIN subjects s ON qp.subject_id = s.id
  WHERE s.name = 'Geography' 
  AND qp.title LIKE '%Chapter 7:%'
  ORDER BY qp.id
`).all() as any[];

console.log(`Found ${papers.length} Chapter 7 papers\n`);

for (const paper of papers) {
  console.log(`\nProcessing Paper ${paper.id}: ${paper.title}`);
  console.log('='.repeat(80));
  
  // Get current content
  const currentContent = JSON.parse((paper as any).content || '{}');
  
  // Create new content with South America questions
  const newContent = {
    title: paper.title,
    school: currentContent.school || 'School Name',
    class: currentContent.class || 'Class 6',
    subject: 'Geography',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [
      {
        name: 'Section A: Multiple Choice Questions (10 marks)',
        instructions: 'Choose the correct option for each question.',
        questions: chapter7Questions.mcq
      },
      {
        name: 'Section B: Very Short Answer Questions (6 marks)',
        instructions: 'Answer the following questions in one sentence.',
        questions: chapter7Questions.vsa
      },
      {
        name: 'Section C: Short Answer Questions (12 marks)',
        instructions: 'Answer the following questions in 3-4 sentences.',
        questions: chapter7Questions.sa
      },
      {
        name: 'Section D: Long Answer Questions (12 marks)',
        instructions: 'Answer the following questions in detail.',
        questions: chapter7Questions.la
      }
    ]
  };
  
  // Update the paper
  db.prepare('UPDATE question_papers SET content = ? WHERE id = ?')
    .run(JSON.stringify(newContent), paper.id);
  
  console.log(`✅ Updated with South America questions`);
  console.log(`   - Section A: ${chapter7Questions.mcq.length} MCQs`);
  console.log(`   - Section B: ${chapter7Questions.vsa.length} VSA questions`);
  console.log(`   - Section C: ${chapter7Questions.sa.length} SA questions`);
  console.log(`   - Section D: ${chapter7Questions.la.length} LA questions`);
}

console.log('\n================================================================================');
console.log(`✅ COMPLETED! Updated ${papers.length} papers`);
console.log('================================================================================\n');

db.close();
