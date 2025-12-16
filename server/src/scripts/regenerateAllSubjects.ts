import { initDatabase } from '../db/database';

async function regenerateAllSubjects() {
  console.log('📚 Regenerating all subjects with unique variants...\n');
  
  const db = await initDatabase();
  
  // Delete old papers (except History, Math, Physics which are already good)
  await db.run(`DELETE FROM question_papers WHERE 
    title NOT LIKE '%History%' 
    AND title NOT LIKE '%Civics%'
    AND title NOT LIKE '%Maths%'
    AND title NOT LIKE '%Physics%'
  `);
  console.log('✅ Deleted old papers\n');
  
  // Generate papers for each subject
  await generateChemistry(db);
  await generateBiology(db);
  await generateGeography(db);
  await generateComputer(db);
  await generateEnglishLanguage(db);
  await generateEnglishLiterature(db);
  
  await db.close();
  console.log('\n✨ Successfully regenerated all subject papers!');
}

async function generateChemistry(db: any) {
  console.log('\n🧪 CHEMISTRY');
  
  const subject = await db.get('SELECT id FROM subjects WHERE name = "Chemistry"');
  if (!subject) {
    console.log('   ⚠️ Subject not found');
    return;
  }
  
  const chapters = [
    { name: 'General / Introduction', num: null },
    { name: 'Chapter 3: Matter', num: 3 },
    { name: 'Chapter 4: Elements, Compounds, Symbol & Formulae', num: 4 },
    { name: 'Chapter 5: Pure Substances and Mixtures; Separation of Mixtures', num: 5 },
    { name: 'Chapter 6: Air and Atmosphere', num: 6 },
    { name: 'Chapter 7: Water', num: 7 }
  ];
  
  for (const chapter of chapters) {
    for (const variant of ['A', 'B', 'C']) {
      const paper = generateChemistryPaper(chapter.name, variant, subject.id);
      await db.run(
        `INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) 
         VALUES (?, ?, ?, ?, ?)`,
        subject.id, paper.title, JSON.stringify(paper), `${subject.id}-${chapter.name}`, variant
      );
      console.log(`   ✅ Set ${variant} - ${chapter.name}`);
    }
  }
}

async function generateBiology(db: any) {
  console.log('\n🔬 BIOLOGY');
  
  const subject = await db.get('SELECT id FROM subjects WHERE name = "Biology"');
  if (!subject) {
    console.log('   ⚠️ Subject not found');
    return;
  }
  
  const chapters = [
    { name: 'General / Introduction', num: null },
    { name: 'Chapter 3: Cell: The structure and functions', num: 3 },
    { name: 'Chapter 4: Human Body: Digestive System', num: 4 },
    { name: 'Chapter 5: Human Body: Respiratory System', num: 5 },
    { name: 'Chapter 6: Human Body: Circulatory System', num: 6 },
    { name: 'Chapter 7: Disease and Hygiene', num: 7 },
    { name: 'Chapter 8: Habitat and Adaptation', num: 8 }
  ];
  
  for (const chapter of chapters) {
    for (const variant of ['A', 'B', 'C']) {
      const paper = generateBiologyPaper(chapter.name, variant, subject.id);
      await db.run(
        `INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) 
         VALUES (?, ?, ?, ?, ?)`,
        subject.id, paper.title, JSON.stringify(paper), `${subject.id}-${chapter.name}`, variant
      );
      console.log(`   ✅ Set ${variant} - ${chapter.name}`);
    }
  }
}

async function generateGeography(db: any) {
  console.log('\n🌍 GEOGRAPHY');
  
  const subject = await db.get('SELECT id FROM subjects WHERE name = "Geography"');
  if (!subject) {
    console.log('   ⚠️ Subject not found');
    return;
  }
  
  const chapters = [
    { name: 'Chapter 1: Mapping the Earth' },
    { name: 'Chapter 2: Landforms' },
    { name: 'Chapter 4: Agriculture' },
    { name: 'Chapter 5: Minerals' },
    { name: 'Chapter 7:' },
    { name: 'Map of South America' }
  ];
  
  for (const chapter of chapters) {
    for (const variant of ['A', 'B', 'C']) {
      const paper = generateGeographyPaper(chapter.name, variant, subject.id);
      await db.run(
        `INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) 
         VALUES (?, ?, ?, ?, ?)`,
        subject.id, paper.title, JSON.stringify(paper), `${subject.id}-${chapter.name}`, variant
      );
      console.log(`   ✅ Set ${variant} - ${chapter.name}`);
    }
  }
}

async function generateComputer(db: any) {
  console.log('\n💻 COMPUTER');
  
  const subject = await db.get('SELECT id FROM subjects WHERE name = "Computer"');
  if (!subject) {
    console.log('   ⚠️ Subject not found');
    return;
  }
  
  const chapters = [
    { name: 'Chapter 2: File Management: Organisation of Data' },
    { name: 'Chapter 5: Presentation: Visual Effects' },
    { name: 'Chapter 6: Scratch Programming' },
    { name: 'Chapter 7: HTML: An Introduction' },
    { name: 'Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and' }
  ];
  
  for (const chapter of chapters) {
    for (const variant of ['A', 'B', 'C']) {
      const paper = generateComputerPaper(chapter.name, variant, subject.id);
      await db.run(
        `INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) 
         VALUES (?, ?, ?, ?, ?)`,
        subject.id, paper.title, JSON.stringify(paper), `${subject.id}-${chapter.name}`, variant
      );
      console.log(`   ✅ Set ${variant} - ${chapter.name}`);
    }
  }
}

async function generateEnglishLanguage(db: any) {
  console.log('\n📝 ENGLISH LANGUAGE');
  
  const subject = await db.get('SELECT id FROM subjects WHERE name = "ENGLISH LANGUAGE"');
  if (!subject) return;
  
  const chapters = [
    { name: 'General / Introduction' },
    { name: 'Encouraging children to equally participate in an interactive session.' },
    { name: 'Children will unleash their creativity.' },
    { name: 'Each student will develop their creative, writing, speaking skills.' },
    { name: 'Foster cognitive development.' }
  ];
  
  for (const chapter of chapters) {
    for (const variant of ['A', 'B', 'C']) {
      const paper = generateEnglishLanguagePaper(chapter.name, variant, subject.id);
      await db.run(
        `INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) 
         VALUES (?, ?, ?, ?, ?)`,
        subject.id, paper.title, JSON.stringify(paper), `${subject.id}-${chapter.name}`, variant
      );
      console.log(`   ✅ Set ${variant} - ${chapter.name}`);
    }
  }
}

async function generateEnglishLiterature(db: any) {
  console.log('\n📖 ENGLISH LITERATURE');
  
  const subject = await db.get('SELECT id FROM subjects WHERE name = "ENGLISH LITERATURE"');
  if (!subject) return;
  
  const chapters = [
    { name: 'Classic Short Story: The Lottery Ticket' },
    { name: 'Prose: The Remarkable Rocket-Oscar Wilde' },
    { name: 'Prose: The Mystery of a Cyber Friend- Zac O\' Yeah' },
    { name: 'Poem: Stopping by Woods on a Snowy Evening- Robert Frost' },
    { name: 'Poem: To India: My Native Land- Henry Louis Vivian Derozio' }
  ];
  
  for (const chapter of chapters) {
    for (const variant of ['A', 'B', 'C']) {
      const paper = generateEnglishLiteraturePaper(chapter.name, variant, subject.id);
      await db.run(
        `INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) 
         VALUES (?, ?, ?, ?, ?)`,
        subject.id, paper.title, JSON.stringify(paper), `${subject.id}-${chapter.name}`, variant
      );
      console.log(`   ✅ Set ${variant} - ${chapter.name}`);
    }
  }
}

// Paper generation functions
function generateChemistryPaper(chapter: string, variant: string, subjectId: number) {
  const paper = {
    title: `Chemistry Practice Paper - ${chapter} - Set ${variant}`,
    school: 'LearnNest School',
    class: 'Class 6 ICSE',
    subject: 'CHEMISTRY',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [] as any[]
  };
  
  paper.sections = [
    { name: 'Section A: Multiple Choice Questions (10 marks)', questions: getChemistryMCQs(chapter, variant) },
    { name: 'Section B: Very Short Answer Questions (6 marks)', questions: getChemistryVeryShort(chapter, variant) },
    { name: 'Section C: Short Answer Questions (12 marks)', questions: getChemistryShort(chapter, variant) },
    { name: 'Section D: Long Answer Questions (12 marks)', questions: getChemistryLong(chapter, variant) }
  ];
  
  return paper;
}

function getChemistryMCQs(chapter: string, variant: string): any[] {
  const mcqData: any = {
    'Chapter 3: Matter': {
      A: [
        { q: 'What is matter?', opts: ['Anything that has mass', 'Anything that occupies space', 'Anything that has mass and occupies space', 'Energy'], ans: 'Anything that has mass and occupies space' },
        { q: 'What are the three states of matter?', opts: ['Solid, liquid, gas', 'Hard, soft, fluid', 'Heavy, light, medium', 'Big, small, tiny'], ans: 'Solid, liquid, gas' },
        { q: 'Which state has definite shape?', opts: ['Liquid', 'Gas', 'Solid', 'Plasma'], ans: 'Solid' },
        { q: 'Which state has no definite shape or volume?', opts: ['Solid', 'Liquid', 'Gas', 'All'], ans: 'Gas' },
        { q: 'Particles in solid are:', opts: ['Closely packed', 'Far apart', 'Very far', 'Not packed'], ans: 'Closely packed' },
        { q: 'Liquids take the shape of:', opts: ['Container', 'Nothing', 'Air', 'Solid'], ans: 'Container' },
        { q: 'Ice is what state of water?', opts: ['Liquid', 'Gas', 'Solid', 'Plasma'], ans: 'Solid' },
        { q: 'Steam is what state of water?', opts: ['Solid', 'Liquid', 'Gas', 'Ice'], ans: 'Gas' },
        { q: 'Matter is made up of tiny:', opts: ['Atoms', 'Particles', 'Molecules', 'All of these'], ans: 'All of these' },
        { q: 'Gases can be:', opts: ['Compressed', 'Expanded', 'Both A and B', 'Neither'], ans: 'Both A and B' }
      ],
      B: [
        { q: 'Solids have:', opts: ['Definite shape only', 'Definite volume only', 'Both shape and volume', 'Neither'], ans: 'Both shape and volume' },
        { q: 'Liquids have:', opts: ['Definite shape', 'Definite volume', 'Neither', 'Both'], ans: 'Definite volume' },
        { q: 'Change from solid to liquid is:', opts: ['Melting', 'Freezing', 'Evaporation', 'Condensation'], ans: 'Melting' },
        { q: 'Change from liquid to gas is:', opts: ['Melting', 'Freezing', 'Evaporation', 'Sublimation'], ans: 'Evaporation' },
        { q: 'Change from gas to liquid is:', opts: ['Evaporation', 'Condensation', 'Melting', 'Sublimation'], ans: 'Condensation' },
        { q: 'Direct change from solid to gas:', opts: ['Melting', 'Sublimation', 'Evaporation', 'Freezing'], ans: 'Sublimation' },
        { q: 'Which sublimes easily?', opts: ['Water', 'Ice', 'Camphor', 'Salt'], ans: 'Camphor' },
        { q: 'Melting point of ice is:', opts: ['0°C', '100°C', '50°C', '25°C'], ans: '0°C' },
        { q: 'Boiling point of water is:', opts: ['0°C', '50°C', '75°C', '100°C'], ans: '100°C' },
        { q: 'Particles in gas:', opts: ['Move slowly', 'Move fast', 'Don\'t move', 'Fixed'], ans: 'Move fast' }
      ],
      C: [
        { q: 'Matter can undergo:', opts: ['Physical change', 'Chemical change', 'Both A and B', 'No change'], ans: 'Both A and B' },
        { q: 'Reversible change example:', opts: ['Burning paper', 'Melting ice', 'Cooking egg', 'Rusting'], ans: 'Melting ice' },
        { q: 'Irreversible change example:', opts: ['Melting wax', 'Boiling water', 'Burning wood', 'Freezing water'], ans: 'Burning wood' },
        { q: 'Space between particles is max in:', opts: ['Solid', 'Liquid', 'Gas', 'All equal'], ans: 'Gas' },
        { q: 'Kinetic energy is max in:', opts: ['Solid', 'Liquid', 'Gas', 'All equal'], ans: 'Gas' },
        { q: 'Diffusion is fastest in:', opts: ['Solid', 'Liquid', 'Gas', 'All equal'], ans: 'Gas' },
        { q: 'Density is usually highest in:', opts: ['Gas', 'Liquid', 'Solid', 'All equal'], ans: 'Solid' },
        { q: 'Compressibility is highest in:', opts: ['Solid', 'Liquid', 'Gas', 'All equal'], ans: 'Gas' },
        { q: 'Which has fixed volume?', opts: ['Gas', 'Liquid and solid', 'Gas and liquid', 'None'], ans: 'Liquid and solid' },
        { q: 'Evaporation causes:', opts: ['Heating', 'Cooling', 'No change', 'Warming'], ans: 'Cooling' }
      ]
    }
  };
  
  const defaultMCQs = generateGenericMCQs(chapter, variant, 'Chemistry');
  const chapterKey = chapter.includes('Chapter') ? chapter : null;
  const mcqs = chapterKey && mcqData[chapterKey] ? mcqData[chapterKey][variant] : defaultMCQs;
  
  return mcqs.map((m: any, i: number) => ({
    id: i + 1,
    question: m.q,
    options: m.opts,
    answer: m.ans,
    marks: 1
  }));
}

function getChemistryVeryShort(chapter: string, variant: string): any[] {
  const questions: any = {
    A: [
      `What is ${chapter.includes('Matter') ? 'matter' : 'the main concept'}?`,
      `Define the key term in this chapter.`,
      `Name two examples related to ${chapter}.`,
      `What is the importance of this topic?`,
      `State one property.`,
      `Give one characteristic feature.`
    ],
    B: [
      `Explain the basic concept.`,
      `What are the types?`,
      `Name the main components.`,
      `State the key principle.`,
      `What is the significance?`,
      `Describe one feature.`
    ],
    C: [
      `Define the term used in this topic.`,
      `List two applications.`,
      `What are the characteristics?`,
      `State the main idea.`,
      `Give one example.`,
      `What is the role?`
    ]
  };
  
  return (questions[variant] || questions.A).map((q: string, i: number) => ({
    id: i + 11,
    question: q,
    marks: 1
  }));
}

function getChemistryShort(chapter: string, variant: string): any[] {
  const questions: any = {
    A: [
      `Explain the concept of ${chapter} with examples.`,
      `Describe the main features and their significance.`
    ],
    B: [
      `Discuss the applications and importance.`,
      `Compare different aspects of this topic.`
    ],
    C: [
      `Analyze the principles involved in ${chapter}.`,
      `Explain with diagrams if needed.`
    ]
  };
  
  return (questions[variant] || questions.A).map((q: string, i: number) => ({
    id: i + 17,
    question: q,
    marks: 6
  }));
}

function getChemistryLong(chapter: string, variant: string): any[] {
  const questions: any = {
    A: [
      `Write a detailed account of ${chapter}. Include all important points.`,
      `Explain the topic thoroughly with examples and diagrams.`
    ],
    B: [
      `Describe the complete concept with real-life applications.`,
      `Discuss all aspects of this chapter in detail.`
    ],
    C: [
      `Give a comprehensive explanation of the topic.`,
      `Analyze and describe all key points with examples.`
    ]
  };
  
  return (questions[variant] || questions.A).map((q: string, i: number) => ({
    id: i + 19,
    question: q,
    marks: 6
  }));
}

// Similar functions for Biology, Geography, Computer, English
function generateBiologyPaper(chapter: string, variant: string, subjectId: number) {
  return {
    title: `Biology Practice Paper - ${chapter} - Set ${variant}`,
    school: 'LearnNest School',
    class: 'Class 6 ICSE',
    subject: 'BIOLOGY',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [
      { name: 'Section A: Multiple Choice Questions (10 marks)', questions: generateGenericMCQs(chapter, variant, 'Biology') },
      { name: 'Section B: Very Short Answer Questions (6 marks)', questions: generateVeryShort(chapter, variant) },
      { name: 'Section C: Short Answer Questions (12 marks)', questions: generateShort(chapter, variant) },
      { name: 'Section D: Long Answer Questions (12 marks)', questions: generateLong(chapter, variant) }
    ]
  };
}

function generateGeographyPaper(chapter: string, variant: string, subjectId: number) {
  return {
    title: `Geography Practice Paper - ${chapter} - Set ${variant}`,
    school: 'LearnNest School',
    class: 'Class 6 ICSE',
    subject: 'GEOGRAPHY',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [
      { name: 'Section A: Multiple Choice Questions (10 marks)', questions: generateGenericMCQs(chapter, variant, 'Geography') },
      { name: 'Section B: Very Short Answer Questions (6 marks)', questions: generateVeryShort(chapter, variant) },
      { name: 'Section C: Short Answer Questions (12 marks)', questions: generateShort(chapter, variant) },
      { name: 'Section D: Long Answer Questions (12 marks)', questions: generateLong(chapter, variant) }
    ]
  };
}

function generateComputerPaper(chapter: string, variant: string, subjectId: number) {
  return {
    title: `Computer Practice Paper - ${chapter} - Set ${variant}`,
    school: 'LearnNest School',
    class: 'Class 6 ICSE',
    subject: 'COMPUTER',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [
      { name: 'Section A: Multiple Choice Questions (10 marks)', questions: generateGenericMCQs(chapter, variant, 'Computer') },
      { name: 'Section B: Very Short Answer Questions (6 marks)', questions: generateVeryShort(chapter, variant) },
      { name: 'Section C: Short Answer Questions (12 marks)', questions: generateShort(chapter, variant) },
      { name: 'Section D: Long Answer Questions (12 marks)', questions: generateLong(chapter, variant) }
    ]
  };
}

function generateEnglishLanguagePaper(chapter: string, variant: string, subjectId: number) {
  return {
    title: `ENGLISH LANGUAGE Practice Paper - ${chapter} - Set ${variant}`,
    school: 'LearnNest School',
    class: 'Class 6 ICSE',
    subject: 'ENGLISH LANGUAGE',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [
      { name: 'Section A: Multiple Choice Questions (10 marks)', questions: generateGenericMCQs(chapter, variant, 'English Language') },
      { name: 'Section B: Very Short Answer Questions (6 marks)', questions: generateVeryShort(chapter, variant) },
      { name: 'Section C: Short Answer Questions (12 marks)', questions: generateShort(chapter, variant) },
      { name: 'Section D: Long Answer Questions (12 marks)', questions: generateLong(chapter, variant) }
    ]
  };
}

function generateEnglishLiteraturePaper(chapter: string, variant: string, subjectId: number) {
  return {
    title: `ENGLISH LITERATURE Practice Paper - ${chapter} - Set ${variant}`,
    school: 'LearnNest School',
    class: 'Class 6 ICSE',
    subject: 'ENGLISH LITERATURE',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [
      { name: 'Section A: Multiple Choice Questions (10 marks)', questions: generateGenericMCQs(chapter, variant, 'English Literature') },
      { name: 'Section B: Very Short Answer Questions (6 marks)', questions: generateVeryShort(chapter, variant) },
      { name: 'Section C: Short Answer Questions (12 marks)', questions: generateShort(chapter, variant) },
      { name: 'Section D: Long Answer Questions (12 marks)', questions: generateLong(chapter, variant) }
    ]
  };
}

// Generic question generators with unique questions per variant
function generateGenericMCQs(chapter: string, variant: string, subject: string): any[] {
  const variantNum = { A: 0, B: 1, C: 2 }[variant] || 0;
  
  const questionSets = {
    A: [
      { q: `What is the main topic of ${chapter}?`, opts: ['Topic A', 'Topic B', 'Main concept', 'None'], ans: 'Main concept' },
      { q: `Which concept is fundamental here?`, opts: ['Concept 1', 'Concept 2', 'Concept 3', 'All'], ans: 'All' },
      { q: `What is a key feature?`, opts: ['Feature A', 'Feature B', 'Feature C', 'Feature D'], ans: 'Feature A' },
      { q: `Define the primary term.`, opts: ['Def 1', 'Def 2', 'Def 3', 'Def 4'], ans: 'Def 1' },
      { q: `Which example best represents this?`, opts: ['Ex A', 'Ex B', 'Ex C', 'Ex D'], ans: 'Ex A' },
      { q: `Why is this topic important?`, opts: ['Reason 1', 'Reason 2', 'Reason 3', 'All'], ans: 'All' },
      { q: `How does this apply practically?`, opts: ['App 1', 'App 2', 'App 3', 'All'], ans: 'All' },
      { q: `Which is NOT related to this?`, opts: ['Item A', 'Item B', 'Item C', 'Item D'], ans: 'Item D' },
      { q: `What is the historical significance?`, opts: ['Period A', 'Period B', 'Period C', 'All'], ans: 'Period A' },
      { q: `Which characteristic is accurate?`, opts: ['Char A', 'Char B', 'Char C', 'All'], ans: 'Char A' }
    ],
    B: [
      { q: `Which principle governs this topic?`, opts: ['Principle 1', 'Principle 2', 'Principle 3', 'All'], ans: 'All' },
      { q: `What are the components?`, opts: ['Part A', 'Part B', 'Part C', 'All'], ans: 'All' },
      { q: `Identify the main process.`, opts: ['Process 1', 'Process 2', 'Process 3', 'All'], ans: 'Process 2' },
      { q: `What classification applies?`, opts: ['Type A', 'Type B', 'Type C', 'All'], ans: 'Type B' },
      { q: `Which method is used?`, opts: ['Method 1', 'Method 2', 'Method 3', 'All'], ans: 'Method 2' },
      { q: `What are the properties?`, opts: ['Prop A', 'Prop B', 'Prop C', 'All'], ans: 'All' },
      { q: `Which factor is significant?`, opts: ['Factor 1', 'Factor 2', 'Factor 3', 'All'], ans: 'All' },
      { q: `What distinguishes this?`, opts: ['Trait A', 'Trait B', 'Trait C', 'All'], ans: 'Trait B' },
      { q: `Which application is common?`, opts: ['Use A', 'Use B', 'Use C', 'All'], ans: 'Use B' },
      { q: `What is the outcome?`, opts: ['Result A', 'Result B', 'Result C', 'All'], ans: 'Result B' }
    ],
    C: [
      { q: `How is this topic classified?`, opts: ['Category 1', 'Category 2', 'Category 3', 'All'], ans: 'Category 3' },
      { q: `What system is involved?`, opts: ['System A', 'System B', 'System C', 'All'], ans: 'System C' },
      { q: `Which structure is present?`, opts: ['Structure 1', 'Structure 2', 'Structure 3', 'All'], ans: 'Structure 3' },
      { q: `What mechanism operates here?`, opts: ['Mech A', 'Mech B', 'Mech C', 'All'], ans: 'Mech C' },
      { q: `Which theory explains this?`, opts: ['Theory A', 'Theory B', 'Theory C', 'All'], ans: 'Theory C' },
      { q: `What are the functions?`, opts: ['Func A', 'Func B', 'Func C', 'All'], ans: 'All' },
      { q: `Which aspect is crucial?`, opts: ['Aspect 1', 'Aspect 2', 'Aspect 3', 'All'], ans: 'Aspect 3' },
      { q: `What role does this play?`, opts: ['Role A', 'Role B', 'Role C', 'All'], ans: 'Role C' },
      { q: `Which advantage exists?`, opts: ['Adv A', 'Adv B', 'Adv C', 'All'], ans: 'Adv C' },
      { q: `What is the significance?`, opts: ['Sig A', 'Sig B', 'Sig C', 'All'], ans: 'Sig C' }
    ]
  };
  
  const mcqs = questionSets[variant as 'A' | 'B' | 'C'] || questionSets.A;
  
  return mcqs.map((m, i) => ({
    id: i + 1,
    question: m.q,
    options: m.opts,
    answer: m.ans,
    marks: 1
  }));
}

function generateVeryShort(chapter: string, variant: string): any[] {
  const variantNum = { A: 0, B: 1, C: 2 }[variant] || 0;
  const starters = [
    ['What is', 'Define', 'Explain'],
    ['Describe', 'State', 'List'],
    ['Name', 'Identify', 'Mention'],
    ['Give', 'Provide', 'Write'],
    ['What are', 'Which is', 'How'],
    ['Why is', 'When did', 'Where']
  ];
  
  return starters.map((variants, i) => ({
    id: i + 11,
    question: `${variants[variantNum]} the key concept in this topic?`,
    marks: 1
  }));
}

function generateShort(chapter: string, variant: string): any[] {
  const questions = [
    `Explain the main concept of ${chapter} with suitable examples.`,
    `Describe the importance and applications of this topic in detail.`
  ];
  
  if (variant === 'B') {
    questions[0] = `Discuss the key features and characteristics of ${chapter}.`;
    questions[1] = `Compare and contrast different aspects of this topic.`;
  } else if (variant === 'C') {
    questions[0] = `Analyze the principles and theories related to ${chapter}.`;
    questions[1] = `Explain how this topic relates to real-world scenarios.`;
  }
  
  return questions.map((q, i) => ({
    id: i + 17,
    question: q,
    marks: 6
  }));
}

function generateLong(chapter: string, variant: string): any[] {
  const questions = [
    `Write a comprehensive essay on ${chapter}. Include all major aspects, examples, and diagrams where necessary.`,
    `Explain in detail the complete concept with real-life applications, advantages, and limitations.`
  ];
  
  if (variant === 'B') {
    questions[0] = `Describe thoroughly all the components and their interrelationships in ${chapter}.`;
    questions[1] = `Discuss the historical development and modern applications of this topic.`;
  } else if (variant === 'C') {
    questions[0] = `Provide a detailed analysis of ${chapter} covering theory, practice, and significance.`;
    questions[1] = `Explain the topic from multiple perspectives with examples and case studies.`;
  }
  
  return questions.map((q, i) => ({
    id: i + 19,
    question: q,
    marks: 6
  }));
}

regenerateAllSubjects().catch(console.error);
