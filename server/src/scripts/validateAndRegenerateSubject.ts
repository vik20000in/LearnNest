import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../learnnest.sqlite');
const db = new Database(dbPath);

interface SectionQuestion {
  question: string;
  answer?: string;
  options?: string[];
  marks: number;
}

interface Section {
  name: string;
  instructions?: string;
  questions: SectionQuestion[];
}

interface PaperContent {
  title: string;
  school?: string;
  class?: string;
  subject: string;
  duration?: string;
  totalMarks?: number;
  sections: Section[];
}

interface ValidationResult {
  isAccurate: boolean;
  reason: string;
  needsRegeneration: boolean;
}

type QuestionBank = {
  mcq: SectionQuestion[];
  vsa: SectionQuestion[];
  sa: SectionQuestion[];
  la: SectionQuestion[];
};

// Offline question banks (extend as needed). Currently Geography chapters 1,2,4,5,7.
const geographyBank: Record<string, QuestionBank> = {
  'Chapter 1: Mapping the Earth': {
    mcq: [
      { question: 'What is the shape of the Earth?', options: ['A) Perfect sphere', 'B) Geoid (oblate spheroid)', 'C) Flat disk', 'D) Cube'], answer: 'B) Geoid (oblate spheroid)', marks: 1 },
      { question: 'Which imaginary line divides Earth into Northern and Southern hemispheres?', options: ['A) Prime Meridian', 'B) Tropic of Cancer', 'C) Equator', 'D) International Date Line'], answer: 'C) Equator', marks: 1 },
      { question: 'At which latitude is the Equator located?', options: ['A) 0°', 'B) 23.5°N', 'C) 23.5°S', 'D) 90°N'], answer: 'A) 0°', marks: 1 },
      { question: 'The Prime Meridian passes through which country?', options: ['A) USA', 'B) India', 'C) United Kingdom (Greenwich)', 'D) Australia'], answer: 'C) United Kingdom (Greenwich)', marks: 1 },
      { question: 'Lines of latitude are also called', options: ['A) Meridians', 'B) Parallels', 'C) Great circles', 'D) Hemispheres'], answer: 'B) Parallels', marks: 1 },
      { question: 'What is the total number of degrees in a circle?', options: ['A) 180°', 'B) 270°', 'C) 360°', 'D) 90°'], answer: 'C) 360°', marks: 1 },
      { question: 'Which is the longest latitude?', options: ['A) Equator', 'B) Tropic of Cancer', 'C) Arctic Circle', 'D) Prime Meridian'], answer: 'A) Equator', marks: 1 },
      { question: 'Lines of longitude are measured from', options: ['A) Equator', 'B) Prime Meridian', 'C) North Pole', 'D) Tropic of Capricorn'], answer: 'B) Prime Meridian', marks: 1 },
      { question: 'The Earth completes one rotation in', options: ['A) 12 hours', 'B) 24 hours', 'C) 365 days', 'D) 30 days'], answer: 'B) 24 hours', marks: 1 },
      { question: 'Globe is a model of', options: ['A) Sun', 'B) Moon', 'C) Earth', 'D) Stars'], answer: 'C) Earth', marks: 1 }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 2: Landforms': {
    mcq: [
      { question: 'Which is the highest mountain peak in the world?', options: ['A) K2', 'B) Mount Everest', 'C) Kanchenjunga', 'D) Nanda Devi'], answer: 'B) Mount Everest', marks: 1 },
      { question: 'Plateaus are also known as', options: ['A) Lowlands', 'B) Tablelands', 'C) Valleys', 'D) Plains'], answer: 'B) Tablelands', marks: 1 },
      { question: 'The Deccan Plateau is an example of', options: ['A) Volcanic plateau', 'B) Block mountain', 'C) Fold mountain', 'D) Coastal plain'], answer: 'A) Volcanic plateau', marks: 1 },
      { question: 'Which landform is most suitable for agriculture?', options: ['A) Mountains', 'B) Plateaus', 'C) Plains', 'D) Deserts'], answer: 'C) Plains', marks: 1 },
      { question: 'The Himalayas are examples of', options: ['A) Block mountains', 'B) Volcanic mountains', 'C) Fold mountains', 'D) Plateau'], answer: 'C) Fold mountains', marks: 1 },
      { question: 'A valley is formed between two', options: ['A) Rivers', 'B) Mountains or hills', 'C) Plateaus', 'D) Plains'], answer: 'B) Mountains or hills', marks: 1 },
      { question: 'Which landform covers most of Earth\'s surface?', options: ['A) Mountains', 'B) Plateaus', 'C) Plains', 'D) Valleys'], answer: 'C) Plains', marks: 1 },
      { question: 'The process of wearing away rocks is called', options: ['A) Erosion', 'B) Deposition', 'C) Weathering', 'D) Sedimentation'], answer: 'C) Weathering', marks: 1 },
      { question: 'River valleys are formed by', options: ['A) Wind', 'B) Water erosion', 'C) Earthquakes', 'D) Volcanoes'], answer: 'B) Water erosion', marks: 1 },
      { question: 'Which is NOT a major type of landform?', options: ['A) Mountains', 'B) Plateaus', 'C) Oceans', 'D) Plains'], answer: 'C) Oceans', marks: 1 }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 4: Agriculture': {
    mcq: [
      { question: 'Which is the staple food crop of India?', options: ['A) Wheat', 'B) Rice', 'C) Maize', 'D) Barley'], answer: 'B) Rice', marks: 1 },
      { question: 'Kharif crops are sown in which season?', options: ['A) Winter', 'B) Summer', 'C) Rainy season (Monsoon)', 'D) Autumn'], answer: 'C) Rainy season (Monsoon)', marks: 1 },
      { question: 'Which of these is a Rabi crop?', options: ['A) Rice', 'B) Cotton', 'C) Wheat', 'D) Jute'], answer: 'C) Wheat', marks: 1 },
      { question: 'The cultivation of crops is called', options: ['A) Horticulture', 'B) Agriculture', 'C) Pisciculture', 'D) Sericulture'], answer: 'B) Agriculture', marks: 1 },
      { question: 'Which crop requires flooded fields for cultivation?', options: ['A) Wheat', 'B) Cotton', 'C) Rice', 'D) Millets'], answer: 'C) Rice', marks: 1 },
      { question: 'Irrigation means', options: ['A) Ploughing fields', 'B) Supplying water to crops', 'C) Harvesting crops', 'D) Sowing seeds'], answer: 'B) Supplying water to crops', marks: 1 },
      { question: 'Which is a cash crop?', options: ['A) Rice', 'B) Wheat', 'C) Cotton', 'D) Barley'], answer: 'C) Cotton', marks: 1 },
      { question: 'The rearing of silkworms is called', options: ['A) Pisciculture', 'B) Horticulture', 'C) Sericulture', 'D) Agriculture'], answer: 'C) Sericulture', marks: 1 },
      { question: 'Which state is the largest producer of tea in India?', options: ['A) Kerala', 'B) Assam', 'C) Tamil Nadu', 'D) Karnataka'], answer: 'B) Assam', marks: 1 },
      { question: 'Subsistence farming means', options: ['A) Growing crops for sale', 'B) Growing crops for family consumption', 'C) Growing flowers', 'D) Growing only cash crops'], answer: 'B) Growing crops for family consumption', marks: 1 }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 5: Minerals': {
    mcq: [
      { question: 'Which property helps identify minerals by their shine?', options: ['A) Hardness', 'B) Color', 'C) Luster', 'D) Cleavage'], answer: 'C) Luster', marks: 1 },
      { question: 'Diamond is the hardest natural', options: ['A) Rock', 'B) Metal', 'C) Mineral', 'D) Gem'], answer: 'C) Mineral', marks: 1 },
      { question: 'Iron ore is an example of', options: ['A) Non-metallic mineral', 'B) Metallic mineral', 'C) Precious stone', 'D) Fuel mineral'], answer: 'B) Metallic mineral', marks: 1 },
      { question: 'Which mineral is used to make glass?', options: ['A) Iron ore', 'B) Coal', 'C) Quartz (Sand)', 'D) Mica'], answer: 'C) Quartz (Sand)', marks: 1 },
      { question: 'Mica is used in', options: ['A) Making iron', 'B) Electrical equipment', 'C) Food production', 'D) Making cement'], answer: 'B) Electrical equipment', marks: 1 },
      { question: 'Coal and petroleum are', options: ['A) Metallic minerals', 'B) Non-metallic minerals', 'C) Precious stones', 'D) Rare minerals'], answer: 'B) Non-metallic minerals', marks: 1 },
      { question: 'The hardness of minerals is measured on', options: ['A) Richter scale', 'B) Mohs scale', 'C) Beaufort scale', 'D) Celsius scale'], answer: 'B) Mohs scale', marks: 1 },
      { question: 'Which mineral gives red color to soil?', options: ['A) Mica', 'B) Iron oxide', 'C) Quartz', 'D) Feldspar'], answer: 'B) Iron oxide', marks: 1 },
      { question: 'Bauxite is an ore of', options: ['A) Iron', 'B) Copper', 'C) Aluminum', 'D) Gold'], answer: 'C) Aluminum', marks: 1 },
      { question: 'The process of extracting minerals from earth is called', options: ['A) Farming', 'B) Mining', 'C) Quarrying', 'D) Drilling'], answer: 'B) Mining', marks: 1 }
    ],
    vsa: [],
    sa: [],
    la: []
  },
  'Chapter 7: South America -Location, Political Divisions and Physical Features': {
    mcq: [
      { question: 'Which is the largest country in South America by area?', options: ['A) Argentina', 'B) Brazil', 'C) Peru', 'D) Colombia'], answer: 'B) Brazil', marks: 1 },
      { question: 'The capital of Brazil is', options: ['A) Rio de Janeiro', 'B) São Paulo', 'C) Brasília', 'D) Salvador'], answer: 'C) Brasília', marks: 1 },
      { question: 'Which ocean lies to the east of South America?', options: ['A) Pacific Ocean', 'B) Atlantic Ocean', 'C) Indian Ocean', 'D) Arctic Ocean'], answer: 'B) Atlantic Ocean', marks: 1 },
      { question: 'The Andes Mountains are located in', options: ['A) Eastern South America', 'B) Western South America', 'C) Northern South America', 'D) Central Africa'], answer: 'B) Western South America', marks: 1 },
      { question: 'Which river is the longest in South America?', options: ['A) Paraná River', 'B) Orinoco River', 'C) Amazon River', 'D) São Francisco River'], answer: 'C) Amazon River', marks: 1 },
      { question: 'The capital of Argentina is', options: ['A) Lima', 'B) Santiago', 'C) Montevideo', 'D) Buenos Aires'], answer: 'D) Buenos Aires', marks: 1 },
      { question: 'How many countries are there in South America?', options: ['A) 10', 'B) 12', 'C) 15', 'D) 18'], answer: 'B) 12', marks: 1 },
      { question: 'Lake Titicaca is located between which two countries?', options: ['A) Brazil and Argentina', 'B) Peru and Bolivia', 'C) Chile and Peru', 'D) Colombia and Venezuela'], answer: 'B) Peru and Bolivia', marks: 1 },
      { question: 'Which is the driest desert in South America?', options: ['A) Sahara Desert', 'B) Kalahari Desert', 'C) Atacama Desert', 'D) Gobi Desert'], answer: 'C) Atacama Desert', marks: 1 },
      { question: 'The equator passes through which South American countries?', options: ['A) Brazil, Peru, Colombia', 'B) Brazil, Ecuador, Colombia', 'C) Argentina, Chile, Peru', 'D) Venezuela, Guyana, Suriname'], answer: 'B) Brazil, Ecuador, Colombia', marks: 1 }
    ],
    vsa: [
      { question: 'Name the largest country in South America.', answer: 'Brazil is the largest country in South America by both area and population.', marks: 1 },
      { question: 'Which ocean borders South America on the west?', answer: 'The Pacific Ocean borders South America on the west.', marks: 1 },
      { question: 'What is the capital of Chile?', answer: 'Santiago is the capital of Chile.', marks: 1 },
      { question: 'Name the highest mountain range in South America.', answer: 'The Andes Mountains are the highest mountain range in South America.', marks: 1 },
      { question: 'Which river basin is the largest in South America?', answer: 'The Amazon River basin is the largest river basin in South America.', marks: 1 },
      { question: 'Name two landlocked countries in South America.', answer: 'Bolivia and Paraguay are the two landlocked countries in South America.', marks: 1 }
    ],
    sa: [
      { question: 'Describe the location of South America on the globe.', answer: 'South America is located in the Western Hemisphere, mostly in the Southern Hemisphere. It is bounded by the Atlantic Ocean to the east, the Pacific Ocean to the west, the Caribbean Sea to the north, and Antarctica to the south. The continent is connected to North America by the Isthmus of Panama.', marks: 6 },
      { question: 'List any five countries of South America with their capitals.', answer: 'Five countries of South America with their capitals are: 1) Brazil - Brasília, 2) Argentina - Buenos Aires, 3) Chile - Santiago, 4) Peru - Lima, 5) Colombia - Bogotá.', marks: 6 }
    ],
    la: [
      { question: 'Describe the major physical features of South America.', answer: 'South America has diverse physical features:\n\n1. The Andes Mountains: The longest mountain range in the world, stretching along the western coast from Venezuela to Chile. Mount Aconcagua (6,962m) is the highest peak.\n\n2. The Amazon River Basin: The world\'s largest river basin, covering about 40% of South America. The Amazon River is the second longest river in the world.\n\n3. The Pampas: Vast fertile plains in Argentina and Uruguay, ideal for agriculture and cattle ranching.\n\n4. The Brazilian Highlands: A large plateau region in eastern Brazil with rich mineral resources.\n\n5. The Atacama Desert: The driest desert in the world, located in northern Chile.\n\n6. The Pantanal: The world\'s largest wetland, located in Brazil, Bolivia, and Paraguay.\n\n7. Patagonia: A region of steppes and glaciers in southern Argentina and Chile.\n\nThese physical features influence the climate, vegetation, and human activities in different regions of South America.', marks: 6 },
      { question: 'Explain the political divisions of South America and the main languages spoken.', answer: 'South America consists of 12 independent countries and one overseas territory:\n\nCountries:\n1. Brazil (largest) - Portuguese\n2. Argentina - Spanish\n3. Colombia - Spanish\n4. Peru - Spanish\n5. Venezuela - Spanish\n6. Chile - Spanish\n7. Ecuador - Spanish\n8. Bolivia - Spanish\n9. Paraguay - Spanish and Guaraní\n10. Uruguay - Spanish\n11. Guyana - English\n12. Suriname - Dutch\n\nOverseas Territory:\nFrench Guiana - French (administered by France)\n\nLanguages: Spanish is the most widely spoken language in South America, used in 9 countries. Portuguese is spoken in Brazil, the continent\'s largest country by population. English, Dutch, French, and indigenous languages are also spoken in some regions. The diversity of languages reflects the continent\'s colonial history and indigenous heritage.', marks: 6 }
    ]
  }
};

const subjectBanks: Record<string, Record<string, QuestionBank>> = {
  Geography: geographyBank
};

const chapterKeywords: Record<string, string[]> = {
  'Chapter 1: Mapping the Earth': ['globe', 'latitude', 'longitude', 'equator', 'prime meridian'],
  'Chapter 2: Landforms': ['mountain', 'plateau', 'plain', 'valley', 'erosion'],
  'Chapter 4: Agriculture': ['crop', 'kharif', 'rabi', 'irrigation', 'farming'],
  'Chapter 5: Minerals': ['mineral', 'ore', 'mining', 'hardness', 'quartz'],
  'Chapter 7: South America -Location, Political Divisions and Physical Features': ['south america', 'andes', 'amazon', 'brazil', 'argentina', 'equator']
};

const genericPatterns = [
  'which principle',
  'which statement',
  'type a',
  'type b',
  'option i',
  'option ii',
  'option iii',
  'option iv',
  'what are the components',
  'what are the main',
  'following is true',
  'following are true',
  'statement a',
  'statement b'
];

const argvSubject = process.argv.find((arg) => arg.startsWith('--subject='));
const subjectName = argvSubject ? argvSubject.split('=')[1] : null;

if (!subjectName) {
  console.error('Usage: npx tsx src/scripts/validateAndRegenerateSubject.ts --subject="Geography"');
  process.exit(1);
}

const subjectRow = db.prepare('SELECT id FROM subjects WHERE name = ?').get(subjectName) as { id?: number } | undefined;

if (!subjectRow?.id) {
  console.error(`Subject not found: ${subjectName}`);
  process.exit(1);
}

const bank = subjectBanks[subjectName];
if (!bank) {
  console.error(`No offline question bank found for subject: ${subjectName}. Add entries to subjectBanks.`);
  process.exit(1);
}

const papers = db.prepare('SELECT id, title, content FROM question_papers WHERE subject_id = ? ORDER BY id').all(subjectRow.id) as any[];

console.log('\n================================================================================');
console.log(`VALIDATING SUBJECT (OFFLINE): ${subjectName}`);
console.log('================================================================================\n');

function parsePaper(content: string): PaperContent | null {
  try {
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

function normalizeQuestionText(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

function overlapRatio(a: string[], b: string[]): number {
  const setA = new Set(a);
  const setB = new Set(b);
  let overlap = 0;
  setA.forEach((q) => {
    if (setB.has(q)) overlap += 1;
  });
  const denominator = Math.max(setA.size, setB.size, 1);
  return overlap / denominator;
}

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function pickDistinctQuestions(pool: SectionQuestion[], count: number, avoid: Set<string>, seed: string): SectionQuestion[] {
  const rng = mulberry32(hashSeed(seed));
  const candidates = pool.map((q) => ({ q, key: normalizeQuestionText(q.question) }))
    .filter(({ key }) => !avoid.has(key));

  // If filtered out too many, fall back to full pool
  const list = candidates.length >= count ? candidates : pool.map((q) => ({ q, key: normalizeQuestionText(q.question) }));

  // Shuffle deterministically
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list.slice(0, Math.min(count, list.length)).map((x) => x.q);
}

function hasChapterKeywords(qText: string, chapterLabel: string): boolean {
  const keywords = chapterKeywords[chapterLabel];
  if (!keywords) return true; // unknown chapter: skip keyword check
  const text = normalizeQuestionText(qText);
  return keywords.some((k) => text.includes(k));
}

function isGenericQuestion(qText: string): boolean {
  const text = normalizeQuestionText(qText);
  return genericPatterns.some((p) => text.includes(p));
}

function validateOffline(parsed: PaperContent, chapterLabel: string): ValidationResult {
  if (!parsed?.sections || !Array.isArray(parsed.sections)) {
    return { isAccurate: false, needsRegeneration: true, reason: 'Invalid or missing sections' };
  }

  const bankChapter = bank[chapterLabel];
  if (!bankChapter) {
    return { isAccurate: false, needsRegeneration: false, reason: `No bank for ${chapterLabel}; skipped` };
  }

  const questions = parsed.sections.flatMap((s) => s.questions || []);
  if (questions.length === 0) {
    return { isAccurate: false, needsRegeneration: true, reason: 'No questions found' };
  }

  const keywordHits = questions.filter((q) => hasChapterKeywords(q.question || '', chapterLabel)).length;
  const genericHits = questions.filter((q) => isGenericQuestion(q.question || '')).length;

  const offTopicRatio = 1 - keywordHits / Math.max(questions.length, 1);
  const genericRatio = genericHits / Math.max(questions.length, 1);

  if (genericRatio > 0.15) {
    return { isAccurate: false, needsRegeneration: true, reason: 'Generic placeholders detected' };
  }

  if (offTopicRatio > 0.35) {
    return { isAccurate: false, needsRegeneration: true, reason: 'Questions not aligned to chapter' };
  }

  return { isAccurate: true, needsRegeneration: false, reason: 'Looks on-topic' };
}

function collectQuestionTexts(paper: PaperContent): string[] {
  if (!paper?.sections) return [];
  return paper.sections
    .flatMap((s) => s.questions || [])
    .map((q) => normalizeQuestionText(q.question || ''))
    .filter(Boolean);
}

function regenerateOffline(paper: any, chapterLabel: string, avoidTexts: string[]): PaperContent {
  const bankChapter = bank[chapterLabel];
  if (!bankChapter) {
    throw new Error(`No offline question bank for ${chapterLabel}`);
  }

  const avoidSet = new Set(avoidTexts);
  const seedBase = `${paper.id}-${chapterLabel}-${paper.title}-${Date.now()}`;

  const mcq = pickDistinctQuestions(bankChapter.mcq, 10, avoidSet, seedBase + '-mcq');
  const vsa = pickDistinctQuestions(bankChapter.vsa.length ? bankChapter.vsa : bankChapter.mcq, 6, avoidSet, seedBase + '-vsa');
  const sa = pickDistinctQuestions(bankChapter.sa.length ? bankChapter.sa : bankChapter.mcq, 2, avoidSet, seedBase + '-sa');
  const la = pickDistinctQuestions(bankChapter.la.length ? bankChapter.la : bankChapter.mcq, 2, avoidSet, seedBase + '-la');

  return {
    title: paper.title,
    school: 'School Name',
    class: 'Class 6',
    subject: subjectName,
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [
      {
        name: 'Section A: Multiple Choice Questions (10 marks)',
        instructions: 'Choose the correct option for each question.',
        questions: mcq
      },
      {
        name: 'Section B: Very Short Answer Questions (6 marks)',
        instructions: 'Answer each question in one sentence.',
        questions: vsa.map((q) => ({ ...q, marks: q.marks ?? 1 }))
      },
      {
        name: 'Section C: Short Answer Questions (12 marks)',
        instructions: 'Answer in 3-4 sentences.',
        questions: sa.map((q) => ({ ...q, marks: q.marks ?? 6 }))
      },
      {
        name: 'Section D: Long Answer Questions (12 marks)',
        instructions: 'Answer in detail.',
        questions: la.map((q) => ({ ...q, marks: q.marks ?? 6 }))
      }
    ]
  };
}

(async () => {
  const chapterBuckets: Record<string, Record<string, string[]>> = {};

  for (const paper of papers) {
    const parsed = parsePaper(paper.content);
    if (!parsed || !parsed.sections) {
      console.log(`\nPaper ${paper.id}: ${paper.title}`);
      console.log('  ⚠️ Invalid JSON, will regenerate.');
      await regenerateAndPersist(paper, 'Unknown Chapter', 'X', chapterBuckets);
      continue;
    }

    const chapterMatch = paper.title.match(/Chapter\s*(\d+)\s*:\s*(.+?)(?:\s*-\s*Set\s*[ABC]\b|$)/i);
    const chapterLabel = chapterMatch ? `Chapter ${chapterMatch[1]}: ${chapterMatch[2].trim()}` : 'Unknown Chapter';
    const setMatch = paper.title.match(/Set\s*([ABC])/i);
    const setLabel = setMatch ? setMatch[1].toUpperCase() : 'X';

    console.log(`\nPaper ${paper.id}: ${paper.title}`);
    console.log(`  Parsed chapter: ${chapterLabel}, Set: ${setLabel}`);

    if (!chapterBuckets[chapterLabel]) chapterBuckets[chapterLabel] = {};
    const currentTexts = collectQuestionTexts(parsed);
    chapterBuckets[chapterLabel][setLabel] = currentTexts;

    const validation = validateOffline(parsed, chapterLabel);
    console.log(`  Validation: ${validation.isAccurate ? '✓ accurate' : '⚠️ needs fix'} - ${validation.reason}`);

    const needsFix = validation.needsRegeneration || validation.isAccurate === false;

    if (!needsFix) {
      const siblings = Object.entries(chapterBuckets[chapterLabel]).filter(([set]) => set !== setLabel);
      for (const [, texts] of siblings) {
        const ratio = overlapRatio(currentTexts, texts);
        if (ratio > 0.35) {
          console.log(`  ⚠️ Overlap ${Math.round(ratio * 100)}% with another set. Regenerating to diversify.`);
          await regenerateAndPersist(paper, chapterLabel, setLabel, chapterBuckets);
          break;
        }
      }
      continue;
    }

    if (validation.reason.includes('No bank')) {
      console.log('  ⚠️ Skipping regeneration due to missing bank.');
      continue;
    }

    await regenerateAndPersist(paper, chapterLabel, setLabel, chapterBuckets);
  }

  console.log('\n================================================================================');
  console.log('✅ Completed offline validation/regeneration run');
  console.log('================================================================================\n');
  db.close();
})().catch((err) => {
  console.error('Script failed:', err);
  db.close();
  process.exit(1);
});

async function regenerateAndPersist(
  paper: any,
  chapterLabel: string,
  setLabel: string,
  chapterBuckets: Record<string, Record<string, string[]>>
) {
  const siblings = Object.entries(chapterBuckets[chapterLabel] || {}).filter(([set]) => set !== setLabel);
  const avoidTexts = siblings.flatMap(([, texts]) => texts);

  try {
    const regenerated = regenerateOffline(paper, chapterLabel, avoidTexts);
    const regenTexts = collectQuestionTexts(regenerated);

    db.prepare('UPDATE question_papers SET content = ? WHERE id = ?').run(JSON.stringify(regenerated), paper.id);
    if (!chapterBuckets[chapterLabel]) chapterBuckets[chapterLabel] = {};
    chapterBuckets[chapterLabel][setLabel] = regenTexts;
    console.log('  ✅ Paper updated (offline bank)');
  } catch (err) {
    console.log(`  ⚠️ Skipped regeneration: ${String(err)}`);
  }
}
