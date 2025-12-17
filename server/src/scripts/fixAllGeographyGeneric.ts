import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../learnnest.sqlite');
const db = new Database(dbPath);

interface Question {
  id: number;
  question: string;
  answer?: string;
  options?: string[];
  marks: number;
}

interface Section {
  name: string;
  questions: Question[];
}

interface PaperContent {
  sections: Section[];
}

// Geography syllabus by chapter
const geographySyllabus: { [key: string]: string } = {
  'Chapter 1: The Earth': `
    - Shape and size of Earth
    - Globe as a model of Earth
    - Latitudes and longitudes
    - Hemispheres (Northern, Southern, Eastern, Western)
    - Great circles and small circles
    - Equator and Prime Meridian
    - Rotation and revolution of Earth
    - Day and night, seasons
  `,
  'Chapter 2: Maps': `
    - Definition and uses of maps
    - Difference between maps and globe
    - Types of maps: Physical, Political, Thematic
    - Components of maps: Title, Scale, Direction, Legend/Key
    - Symbols and colors on maps
    - Scale: Types and uses
    - Reading and interpreting maps
  `,
  'Chapter 3: Landforms': `
    - Major landforms: Mountains, Plateaus, Plains
    - Formation of landforms
    - Types of mountains: Fold, Block, Volcanic
    - Major mountain ranges of the world
    - Plateaus: Characteristics and examples
    - Plains: Types and importance
    - Valleys and their formation
    - Human activities in different landforms
  `,
  'Chapter 4: Rocks': `
    - Definition of rocks
    - Three types of rocks: Igneous, Sedimentary, Metamorphic
    - Formation of each rock type
    - Characteristics and examples
    - Rock cycle and its stages
    - Uses of different types of rocks
    - Weathering and erosion
  `,
  'Chapter 5: Minerals': `
    - Definition of minerals
    - Properties of minerals: Color, Hardness, Luster, Cleavage
    - Metallic and non-metallic minerals
    - Common minerals: Quartz, Feldspar, Mica, Iron ore, Coal
    - Uses of minerals in daily life
    - Mining and extraction methods
    - Conservation of mineral resources
    - Distribution of minerals in India
  `,
  'Chapter 6: Water Bodies': `
    - Oceans and seas
    - Five major oceans
    - Seas, gulfs, and bays
    - Rivers and their features
    - Major rivers of India and world
    - Lakes: Natural and artificial
    - Importance of water bodies
    - Conservation of water resources
  `
};

function extractChapterFromTitle(title: string): string {
  const match = title.match(/Chapter \d+: ([^-]+)/);
  return match ? `Chapter ${title.match(/Chapter \d+/)?.[0]?.split(' ')[1]}: ${match[1].trim()}` : '';
}

function isGenericQuestion(question: string, answer: string = ''): boolean {
  const questionLower = question.toLowerCase();
  const answerLower = answer.toLowerCase();
  
  const genericPatterns = [
    'which principle',
    'what are the components',
    'identify the main process',
    'what classification applies',
    'which method is used',
    'what are the properties',
    'which factor is significant',
    'what distinguishes this',
    'which application is common',
    'what is the outcome',
    'principle 1',
    'principle 2',
    'part a',
    'part b',
    'process 1',
    'type a',
    'type b',
    'method 1',
    'prop a',
    'factor 1',
    'trait a',
    'use a',
    'result a'
  ];
  
  return genericPatterns.some(pattern => 
    questionLower.includes(pattern) || answerLower.includes(pattern)
  );
}

// Pre-generated quality questions for each Geography chapter
const questionBank: { [key: string]: { mcq: any[], vsa: any[], sa: any[], la: any[] } } = {
  'Chapter 1: Mapping the Earth': {
    mcq: [
      { question: "What is the shape of the Earth?", options: ["A) Perfect sphere", "B) Geoid (oblate spheroid)", "C) Flat disk", "D) Cube"], answer: "B) Geoid (oblate spheroid)" },
      { question: "Which imaginary line divides Earth into Northern and Southern hemispheres?", options: ["A) Prime Meridian", "B) Tropic of Cancer", "C) Equator", "D) International Date Line"], answer: "C) Equator" },
      { question: "At which latitude is the Equator located?", options: ["A) 0°", "B) 23.5°N", "C) 23.5°S", "D) 90°N"], answer: "A) 0°" },
      { question: "The Prime Meridian passes through which country?", options: ["A) USA", "B) India", "C) United Kingdom (Greenwich)", "D) Australia"], answer: "C) United Kingdom (Greenwich)" },
      { question: "Lines of latitude are also called", options: ["A) Meridians", "B) Parallels", "C) Great circles", "D) Hemispheres"], answer: "B) Parallels" },
      { question: "What is the total number of degrees in a circle?", options: ["A) 180°", "B) 270°", "C) 360°", "D) 90°"], answer: "C) 360°" },
      { question: "Which is the longest latitude?", options: ["A) Equator", "B) Tropic of Cancer", "C) Arctic Circle", "D) Prime Meridian"], answer: "A) Equator" },
      { question: "Lines of longitude are measured from", options: ["A) Equator", "B) Prime Meridian", "C) North Pole", "D) Tropic of Capricorn"], answer: "B) Prime Meridian" },
      { question: "The Earth completes one rotation in", options: ["A) 12 hours", "B) 24 hours", "C) 365 days", "D) 30 days"], answer: "B) 24 hours" },
      { question: "Globe is a model of", options: ["A) Sun", "B) Moon", "C) Earth", "D) Stars"], answer: "C) Earth" }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 2: Landforms': {
    mcq: [
      { question: "Which is the highest mountain peak in the world?", options: ["A) K2", "B) Mount Everest", "C) Kanchenjunga", "D) Nanda Devi"], answer: "B) Mount Everest" },
      { question: "Plateaus are also known as", options: ["A) Lowlands", "B) Tablelands", "C) Valleys", "D) Plains"], answer: "B) Tablelands" },
      { question: "The Deccan Plateau is an example of", options: ["A) Volcanic plateau", "B) Block mountain", "C) Fold mountain", "D) Coastal plain"], answer: "A) Volcanic plateau" },
      { question: "Which landform is most suitable for agriculture?", options: ["A) Mountains", "B) Plateaus", "C) Plains", "D) Deserts"], answer: "C) Plains" },
      { question: "The Himalayas are examples of", options: ["A) Block mountains", "B) Volcanic mountains", "C) Fold mountains", "D) Plateau"], answer: "C) Fold mountains" },
      { question: "A valley is formed between two", options: ["A) Rivers", "B) Mountains or hills", "C) Plateaus", "D) Plains"], answer: "B) Mountains or hills" },
      { question: "Which landform covers most of Earth's surface?", options: ["A) Mountains", "B) Plateaus", "C) Plains", "D) Valleys"], answer: "C) Plains" },
      { question: "The process of wearing away rocks is called", options: ["A) Erosion", "B) Deposition", "C) Weathering", "D) Sedimentation"], answer: "C) Weathering" },
      { question: "River valleys are formed by", options: ["A) Wind", "B) Water erosion", "C) Earthquakes", "D) Volcanoes"], answer: "B) Water erosion" },
      { question: "Which is NOT a major type of landform?", options: ["A) Mountains", "B) Plateaus", "C) Oceans", "D) Plains"], answer: "C) Oceans" }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 4: Agriculture': {
    mcq: [
      { question: "Which is the staple food crop of India?", options: ["A) Wheat", "B) Rice", "C) Maize", "D) Barley"], answer: "B) Rice" },
      { question: "Kharif crops are sown in which season?", options: ["A) Winter", "B) Summer", "C) Rainy season (Monsoon)", "D) Autumn"], answer: "C) Rainy season (Monsoon)" },
      { question: "Which of these is a Rabi crop?", options: ["A) Rice", "B) Cotton", "C) Wheat", "D) Jute"], answer: "C) Wheat" },
      { question: "The cultivation of crops is called", options: ["A) Horticulture", "B) Agriculture", "C) Pisciculture", "D) Sericulture"], answer: "B) Agriculture" },
      { question: "Which crop requires flooded fields for cultivation?", options: ["A) Wheat", "B) Cotton", "C) Rice", "D) Millets"], answer: "C) Rice" },
      { question: "Irrigation means", options: ["A) Ploughing fields", "B) Supplying water to crops", "C) Harvesting crops", "D) Sowing seeds"], answer: "B) Supplying water to crops" },
      { question: "Which is a cash crop?", options: ["A) Rice", "B) Wheat", "C) Cotton", "D) Barley"], answer: "C) Cotton" },
      { question: "The rearing of silkworms is called", options: ["A) Pisciculture", "B) Horticulture", "C) Sericulture", "D) Agriculture"], answer: "C) Sericulture" },
      { question: "Which state is the largest producer of tea in India?", options: ["A) Kerala", "B) Assam", "C) Tamil Nadu", "D) Karnataka"], answer: "B) Assam" },
      { question: "Subsistence farming means", options: ["A) Growing crops for sale", "B) Growing crops for family consumption", "C) Growing flowers", "D) Growing only cash crops"], answer: "B) Growing crops for family consumption" }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 5: Minerals': {
    mcq: [
      { question: "Which property helps identify minerals by their shine?", options: ["A) Hardness", "B) Color", "C) Luster", "D) Cleavage"], answer: "C) Luster" },
      { question: "Diamond is the hardest natural", options: ["A) Rock", "B) Metal", "C) Mineral", "D) Gem"], answer: "C) Mineral" },
      { question: "Iron ore is an example of", options: ["A) Non-metallic mineral", "B) Metallic mineral", "C) Precious stone", "D) Fuel mineral"], answer: "B) Metallic mineral" },
      { question: "Which mineral is used to make glass?", options: ["A) Iron ore", "B) Coal", "C) Quartz (Sand)", "D) Mica"], answer: "C) Quartz (Sand)" },
      { question: "Mica is used in", options: ["A) Making iron", "B) Electrical equipment", "C) Food production", "D) Making cement"], answer: "B) Electrical equipment" },
      { question: "Coal and petroleum are", options: ["A) Metallic minerals", "B) Non-metallic minerals", "C) Precious stones", "D) Rare minerals"], answer: "B) Non-metallic minerals" },
      { question: "The hardness of minerals is measured on", options: ["A) Richter scale", "B) Mohs scale", "C) Beaufort scale", "D) Celsius scale"], answer: "B) Mohs scale" },
      { question: "Which mineral gives red color to soil?", options: ["A) Mica", "B) Iron oxide", "C) Quartz", "D) Feldspar"], answer: "B) Iron oxide" },
      { question: "Bauxite is an ore of", options: ["A) Iron", "B) Copper", "C) Aluminum", "D) Gold"], answer: "C) Aluminum" },
      { question: "The process of extracting minerals from earth is called", options: ["A) Farming", "B) Mining", "C) Quarrying", "D) Drilling"], answer: "B) Mining" }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 7: South America -Location, Political Divisions and Physical Features': {
    mcq: [
      { question: "Which is the largest country in South America by area?", options: ["A) Argentina", "B) Brazil", "C) Peru", "D) Colombia"], answer: "B) Brazil" },
      { question: "The capital of Brazil is", options: ["A) Rio de Janeiro", "B) São Paulo", "C) Brasília", "D) Salvador"], answer: "C) Brasília" },
      { question: "Which ocean lies to the east of South America?", options: ["A) Pacific Ocean", "B) Atlantic Ocean", "C) Indian Ocean", "D) Arctic Ocean"], answer: "B) Atlantic Ocean" },
      { question: "The Andes Mountains are located in", options: ["A) Eastern South America", "B) Western South America", "C) Northern South America", "D) Central Africa"], answer: "B) Western South America" },
      { question: "Which river is the longest in South America?", options: ["A) Paraná River", "B) Orinoco River", "C) Amazon River", "D) São Francisco River"], answer: "C) Amazon River" },
      { question: "The capital of Argentina is", options: ["A) Lima", "B) Santiago", "C) Montevideo", "D) Buenos Aires"], answer: "D) Buenos Aires" },
      { question: "How many countries are there in South America?", options: ["A) 10", "B) 12", "C) 15", "D) 18"], answer: "B) 12" },
      { question: "Lake Titicaca is located between which two countries?", options: ["A) Brazil and Argentina", "B) Peru and Bolivia", "C) Chile and Peru", "D) Colombia and Venezuela"], answer: "B) Peru and Bolivia" },
      { question: "Which is the driest desert in South America?", options: ["A) Sahara Desert", "B) Kalahari Desert", "C) Atacama Desert", "D) Gobi Desert"], answer: "C) Atacama Desert" },
      { question: "The equator passes through which South American countries?", options: ["A) Brazil, Peru, Colombia", "B) Brazil, Ecuador, Colombia", "C) Argentina, Chile, Peru", "D) Venezuela, Guyana, Suriname"], answer: "B) Brazil, Ecuador, Colombia" }
    ],
    vsa: [
      { question: "Name the largest country in South America.", answer: "Brazil is the largest country in South America by both area and population." },
      { question: "Which ocean borders South America on the west?", answer: "The Pacific Ocean borders South America on the west." },
      { question: "What is the capital of Chile?", answer: "Santiago is the capital of Chile." },
      { question: "Name the highest mountain range in South America.", answer: "The Andes Mountains are the highest mountain range in South America." },
      { question: "Which river basin is the largest in South America?", answer: "The Amazon River basin is the largest river basin in South America." },
      { question: "Name two landlocked countries in South America.", answer: "Bolivia and Paraguay are the two landlocked countries in South America." }
    ],
    sa: [
      { question: "Describe the location of South America on the globe.", answer: "South America is located in the Western Hemisphere, mostly in the Southern Hemisphere. It is bounded by the Atlantic Ocean to the east, the Pacific Ocean to the west, the Caribbean Sea to the north, and Antarctica to the south. The continent is connected to North America by the Isthmus of Panama." },
      { question: "List any five countries of South America with their capitals.", answer: "Five countries of South America with their capitals are: 1) Brazil - Brasília, 2) Argentina - Buenos Aires, 3) Chile - Santiago, 4) Peru - Lima, 5) Colombia - Bogotá." }
    ],
    la: [
      { question: "Describe the major physical features of South America.", answer: "South America has diverse physical features:\n\n1. The Andes Mountains: The longest mountain range in the world, stretching along the western coast from Venezuela to Chile. Mount Aconcagua (6,962m) is the highest peak.\n\n2. The Amazon River Basin: The world's largest river basin, covering about 40% of South America. The Amazon River is the second longest river in the world.\n\n3. The Pampas: Vast fertile plains in Argentina and Uruguay, ideal for agriculture and cattle ranching.\n\n4. The Brazilian Highlands: A large plateau region in eastern Brazil with rich mineral resources.\n\n5. The Atacama Desert: The driest desert in the world, located in northern Chile.\n\n6. The Pantanal: The world's largest wetland, located in Brazil, Bolivia, and Paraguay.\n\n7. Patagonia: A region of steppes and glaciers in southern Argentina and Chile.\n\nThese physical features influence the climate, vegetation, and human activities in different regions of South America." },
      { question: "Explain the political divisions of South America and the main languages spoken.", answer: "South America consists of 12 independent countries and one overseas territory:\n\nCountries:\n1. Brazil (largest) - Portuguese\n2. Argentina - Spanish\n3. Colombia - Spanish\n4. Peru - Spanish\n5. Venezuela - Spanish\n6. Chile - Spanish\n7. Ecuador - Spanish\n8. Bolivia - Spanish\n9. Paraguay - Spanish and Guaraní\n10. Uruguay - Spanish\n11. Guyana - English\n12. Suriname - Dutch\n\nOverseas Territory:\nFrench Guiana - French (administered by France)\n\nLanguages: Spanish is the most widely spoken language in South America, used in 9 countries. Portuguese is spoken in Brazil, the continent's largest country by population. English, Dutch, French, and indigenous languages are also spoken in some regions. The diversity of languages reflects the continent's colonial history and indigenous heritage." }
    ]
  }
};

async function generateGeographyQuestions(
  chapterKey: string,
  sectionName: string,
  numQuestions: number,
  questionsToReplace: Question[]
): Promise<Question[]> {
  console.log(`      Generating ${numQuestions} questions for ${sectionName}...`);
  
  try {
    const isMCQ = sectionName.includes('Multiple Choice');
    const marksPerQuestion = questionsToReplace[0]?.marks || (isMCQ ? 1 : 2);
    
    const questionPool = questionBank[chapterKey];
    if (!questionPool) {
      throw new Error(`No question bank available for ${chapterKey}`);
    }
    
    let sourceQuestions = isMCQ ? questionPool.mcq : questionPool.vsa;
    
    if (!sourceQuestions || sourceQuestions.length === 0) {
      throw new Error(`No ${isMCQ ? 'MCQ' : 'VSA'} questions available for ${chapterKey}`);
    }
    
    // Take required number of questions from the pool
    const selectedQuestions = sourceQuestions.slice(0, numQuestions);
    
    // Map to the IDs of questions being replaced
    const newQuestions = selectedQuestions.map((q: any, index: number) => ({
      id: questionsToReplace[index].id,
      question: q.question,
      answer: q.answer,
      options: q.options,
      marks: marksPerQuestion
    }));
    
    console.log(`      ✅ Generated ${newQuestions.length} questions successfully`);
    return newQuestions;
    
  } catch (error) {
    console.error(`      ❌ Error generating questions:`, error);
    throw error;
  }
}

async function fixGeographyPaper(paperId: number, title: string) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`Processing Paper ${paperId}: ${title}`);
  console.log('='.repeat(80));
  
  const chapterKey = extractChapterFromTitle(title);
  if (!chapterKey) {
    console.log(`  ⚠️  Could not extract chapter from title, skipping`);
    return { fixed: false, reason: 'No chapter found' };
  }
  
  console.log(`  Chapter: ${chapterKey}`);
  
  const contentRow = db.prepare('SELECT content FROM question_papers WHERE id = ?').get(paperId) as { content: string };
  const content: PaperContent = JSON.parse(contentRow.content);
  
  let totalGeneric = 0;
  let totalFixed = 0;
  let hasChanges = false;
  
  // Check each section for generic questions
  for (const section of content.sections) {
    console.log(`\n  Section: ${section.name}`);
    
    const genericQuestions = section.questions.filter(q => 
      isGenericQuestion(q.question, q.answer || '')
    );
    
    if (genericQuestions.length > 0) {
      console.log(`    Found ${genericQuestions.length} generic questions`);
      totalGeneric += genericQuestions.length;
      
      try {
        // Generate replacement questions
        const newQuestions = await generateGeographyQuestions(
          chapterKey,
          section.name,
          genericQuestions.length,
          genericQuestions
        );
        
        // Replace generic questions with new ones
        for (const newQ of newQuestions) {
          const questionIndex = section.questions.findIndex(q => q.id === newQ.id);
          if (questionIndex !== -1) {
            section.questions[questionIndex] = newQ;
            totalFixed++;
            hasChanges = true;
            console.log(`    ✅ Fixed Q${newQ.id}: ${newQ.question.substring(0, 60)}...`);
          }
        }
        
        // No delay needed since we're using pre-generated questions
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`    ❌ Failed to fix questions in this section:`, error);
      }
    } else {
      console.log(`    ✅ No generic questions found`);
    }
  }
  
  // Update database if there were changes
  if (hasChanges) {
    const updatedContent = JSON.stringify(content);
    db.prepare('UPDATE question_papers SET content = ? WHERE id = ?').run(updatedContent, paperId);
    console.log(`\n  💾 Updated paper ${paperId} in database`);
    console.log(`  📊 Fixed ${totalFixed}/${totalGeneric} generic questions`);
    return { fixed: true, genericCount: totalGeneric, fixedCount: totalFixed };
  } else {
    console.log(`\n  ✅ No changes needed for this paper`);
    return { fixed: false, reason: 'No generic questions' };
  }
}

async function main() {
  console.log('\n' + '='.repeat(80));
  console.log('FIXING ALL GEOGRAPHY PAPERS WITH GENERIC QUESTIONS');
  console.log('='.repeat(80));
  
  // Get all Geography papers
  const papers = db.prepare(`
    SELECT qp.id, qp.title, s.name as subject_name
    FROM question_papers qp
    JOIN subjects s ON qp.subject_id = s.id
    WHERE s.name = 'Geography'
    ORDER BY qp.title
  `).all() as Array<{ id: number; title: string; subject_name: string }>;
  
  console.log(`\nFound ${papers.length} Geography papers\n`);
  
  let totalPapersProcessed = 0;
  let totalPapersFixed = 0;
  let totalQuestionsFixed = 0;
  const results: any[] = [];
  
  for (const paper of papers) {
    try {
      const result = await fixGeographyPaper(paper.id, paper.title);
      results.push({
        paperId: paper.id,
        title: paper.title,
        ...result
      });
      
      totalPapersProcessed++;
      if (result.fixed) {
        totalPapersFixed++;
        totalQuestionsFixed += result.fixedCount || 0;
      }
      
    } catch (error) {
      console.error(`\n❌ Error processing paper ${paper.id}:`, error);
      results.push({
        paperId: paper.id,
        title: paper.title,
        fixed: false,
        reason: 'Error: ' + (error as Error).message
      });
    }
  }
  
  // Final Summary
  console.log('\n\n' + '='.repeat(80));
  console.log('FINAL SUMMARY');
  console.log('='.repeat(80));
  console.log(`\nTotal papers processed: ${totalPapersProcessed}`);
  console.log(`Papers with fixes: ${totalPapersFixed}`);
  console.log(`Total questions fixed: ${totalQuestionsFixed}`);
  
  console.log('\n\nDetailed Results by Paper:');
  console.log('-'.repeat(80));
  
  for (const result of results) {
    if (result.fixed) {
      console.log(`✅ Paper ${result.paperId}: ${result.title}`);
      console.log(`   Fixed ${result.fixedCount}/${result.genericCount} questions`);
    } else {
      console.log(`⏭️  Paper ${result.paperId}: ${result.title}`);
      console.log(`   ${result.reason}`);
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('✅ ALL GEOGRAPHY PAPERS PROCESSED!');
  console.log('='.repeat(80) + '\n');
  
  db.close();
}

main().catch(console.error);
