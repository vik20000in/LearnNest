import { getDb } from '../db/database';

// Paper 819: Biology Practice Paper - General / Introduction - Set A
// Fixing Section A MCQs (first 3), Section B (all 6), Section C (2), Section D (2)

const fixes = {
  819: {
    'Section A: Multiple Choice Questions (10 marks)': {
      1: {
        question: "What is Biology?",
        options: ["Study of rocks", "Study of living organisms", "Study of chemicals", "Study of planets"],
        answer: "Study of living organisms",
        marks: 1
      },
      2: {
        question: "Which of the following is a characteristic of all living things?",
        options: ["They can fly", "They need food and water", "They are green", "They live in water"],
        answer: "They need food and water",
        marks: 1
      },
      3: {
        question: "What is the basic unit of life?",
        options: ["Tissue", "Organ", "Cell", "System"],
        answer: "Cell",
        marks: 1
      }
    },
    'Section B: Very Short Answer Questions (6 marks)': {
      11: {
        question: "What does MRS GREN stand for?",
        answer: "Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition",
        marks: 1
      },
      12: {
        question: "Name two living things and two non-living things.",
        answer: "Living: Plants, Animals. Non-living: Rock, Water.",
        marks: 1
      },
      13: {
        question: "Why do plants need sunlight?",
        answer: "Plants need sunlight to make their own food through photosynthesis.",
        marks: 1
      },
      14: {
        question: "What is the difference between unicellular and multicellular organisms?",
        answer: "Unicellular organisms have only one cell (like bacteria), while multicellular organisms have many cells (like humans).",
        marks: 1
      },
      15: {
        question: "Name the science of classifying living things.",
        answer: "Taxonomy",
        marks: 1
      },
      16: {
        question: "What is biodiversity?",
        answer: "Biodiversity is the variety of different species of plants and animals in an ecosystem.",
        marks: 1
      }
    },
    'Section C: Short Answer Questions (12 marks)': {
      17: {
        question: "Explain the seven characteristics of living organisms with examples.",
        answer: "The seven characteristics of living organisms (MRS GREN) are:\n1. Movement - Animals move to find food, plants move towards light\n2. Respiration - Breaking down food to release energy\n3. Sensitivity - Responding to stimuli like light, sound, touch\n4. Growth - Increasing in size and complexity\n5. Reproduction - Producing offspring\n6. Excretion - Removing waste products\n7. Nutrition - Taking in and using food for energy\n\nAll living things must show these characteristics.",
        marks: 6
      },
      18: {
        question: "Describe the difference between plants and animals. Give at least four points.",
        answer: "Differences between plants and animals:\n\n1. Food: Plants make their own food (autotrophs) through photosynthesis, while animals eat other organisms (heterotrophs)\n\n2. Movement: Most animals can move from place to place, while most plants are fixed in one place\n\n3. Cell structure: Plant cells have cell walls and chloroplasts, while animal cells do not\n\n4. Growth: Plants can grow throughout their lives, while animals stop growing after reaching adult size\n\n5. Response: Animals respond quickly to stimuli, while plants respond slowly",
        marks: 6
      }
    },
    'Section D: Long Answer Questions (12 marks)': {
      19: {
        question: "Write a detailed essay on the importance of Biology in our daily life. Include examples of how biological knowledge helps us.",
        answer: "Biology is the study of living organisms and is extremely important in our daily lives:\n\n1. Health and Medicine:\n- Understanding the human body helps doctors treat diseases\n- Vaccines and antibiotics are developed using biological knowledge\n- We learn about nutrition and healthy eating habits\n\n2. Agriculture and Food:\n- Crop improvement through plant breeding\n- Understanding pests and diseases affecting crops\n- Food preservation techniques\n\n3. Environment:\n- Conservation of endangered species\n- Understanding ecosystems and biodiversity\n- Managing pollution and waste\n\n4. Daily Applications:\n- Personal hygiene and disease prevention\n- Understanding heredity and genetics\n- Fermentation in making bread, yogurt, cheese\n\n5. Career Opportunities:\n- Doctors, nurses, veterinarians\n- Agricultural scientists, botanists, zoologists\n- Environmental scientists and conservationists\n\nBiology helps us understand life itself and make informed decisions about health, environment, and resources.",
        marks: 6
      },
      20: {
        question: "Explain the concept of adaptation in living organisms. Give examples of adaptations in plants and animals to different environments.",
        answer: "Adaptation is the process by which organisms develop special features that help them survive in their environment.\n\nTypes of Adaptations:\n\n1. Structural Adaptations (body features):\n- Cactus has thick stem to store water in deserts\n- Polar bears have thick fur for insulation in cold regions\n- Birds have hollow bones for flight\n\n2. Behavioral Adaptations (actions):\n- Bears hibernate in winter\n- Birds migrate to warmer places\n- Desert animals are nocturnal (active at night)\n\n3. Physiological Adaptations (body functions):\n- Camels can survive without water for long periods\n- Some plants close their stomata to prevent water loss\n\nExamples:\n\nDesert Plants:\n- Deep roots to reach underground water\n- Leaves modified into spines to reduce water loss\n- Waxy coating on stems\n\nAquatic Animals:\n- Fish have gills to breathe underwater\n- Streamlined body for swimming\n- Fins for movement\n\nArctic Animals:\n- White fur for camouflage in snow\n- Thick layer of fat (blubber) for warmth\n- Small ears to reduce heat loss\n\nAdaptations help organisms survive, find food, protect themselves, and reproduce successfully in their environment.",
        marks: 6
      }
    }
  }
};

async function fixPaper() {
  console.log('🔬 Fixing Biology - General / Introduction - Set A (Paper 819)\n');
  
  const db = await getDb();
  
  try {
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 819');
    const content = JSON.parse(paper.content);
    
    let fixedCount = 0;
    
    // Apply fixes
    for (const section of content.sections) {
      // @ts-ignore - Dynamic section name indexing
      const sectionFixes = (fixes[819] as any)[section.name];
      if (sectionFixes) {
        for (const question of section.questions) {
          const fix = sectionFixes[question.id];
          if (fix) {
            question.question = fix.question;
            question.answer = fix.answer;
            if (fix.options) question.options = fix.options;
            question.marks = fix.marks;
            fixedCount++;
            console.log(`   ✅ Fixed Q${question.id}: ${fix.question.substring(0, 60)}...`);
          }
        }
      }
    }
    
    // Update database
    await db.run(
      'UPDATE question_papers SET content = ? WHERE id = ?',
      JSON.stringify(content),
      819
    );
    
    console.log(`\n💾 Saved ${fixedCount} fixes to database\n`);
    console.log('✅ Paper 819 complete!\n');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await db.close();
  }
}

fixPaper().catch(console.error);
