import { getDb } from '../db/database';

// Paper 820: Biology Practice Paper - General / Introduction - Set B
// Fixing Section B (all 6), Section C (2), Section D (2)

const fixes = {
  820: {
    'Section B: Very Short Answer Questions (6 marks)': {
      11: {
        question: "What is the main difference between living and non-living things?",
        answer: "Living things can grow, reproduce, and respond to their environment, while non-living things cannot.",
        marks: 1
      },
      12: {
        question: "Name three kingdoms of living organisms.",
        answer: "Animals, Plants, and Fungi (or Bacteria, Protista)",
        marks: 1
      },
      13: {
        question: "What is excretion? Why is it important?",
        answer: "Excretion is the removal of waste products from the body. It is important to prevent accumulation of toxic substances.",
        marks: 1
      },
      14: {
        question: "Give two examples of unicellular organisms.",
        answer: "Amoeba and Bacteria (or Paramecium, Euglena)",
        marks: 1
      },
      15: {
        question: "What is photosynthesis in simple terms?",
        answer: "Photosynthesis is the process by which plants use sunlight to make food from carbon dioxide and water.",
        marks: 1
      },
      16: {
        question: "Name two sense organs in humans.",
        answer: "Eyes and Ears (or Nose, Tongue, Skin)",
        marks: 1
      }
    },
    'Section C: Short Answer Questions (12 marks)': {
      17: {
        question: "Explain how living organisms are classified. Why is classification important?",
        answer: "Classification of Living Organisms:\n\nLiving organisms are classified based on their characteristics into groups:\n\n1. Kingdom - Broadest group (Animals, Plants, Fungi, etc.)\n2. Phylum/Division\n3. Class\n4. Order\n5. Family\n6. Genus\n7. Species - Most specific group\n\nImportance of Classification:\n\n1. Organization: Makes it easier to study millions of species\n2. Identification: Helps identify organisms correctly\n3. Understanding relationships: Shows how organisms are related\n4. Communication: Scientists worldwide use the same names\n5. Study of evolution: Helps understand how species evolved\n\nExample: Humans are classified as:\nKingdom: Animalia, Phylum: Chordata, Class: Mammalia, Order: Primates, Family: Hominidae, Genus: Homo, Species: sapiens",
        marks: 6
      },
      18: {
        question: "What are the differences between vertebrates and invertebrates? Give examples of each.",
        answer: "Differences between Vertebrates and Invertebrates:\n\nVertebrates:\n- Have a backbone (spinal column)\n- Have an internal skeleton (endoskeleton)\n- Generally larger in size\n- Have a well-developed nervous system\n- Include 5 main groups: Fish, Amphibians, Reptiles, Birds, Mammals\n- Examples: Humans, dogs, fish, frogs, snakes, eagles\n\nInvertebrates:\n- Do not have a backbone\n- Many have external skeleton (exoskeleton) or no skeleton\n- Generally smaller in size\n- Simpler nervous system\n- Make up 95% of all animal species\n- Examples: Insects (butterfly, ant), Molluscs (snail, octopus), Worms (earthworm), Jellyfish, Starfish\n\nKey Point: Vertebrates are more complex but less numerous, while invertebrates are simpler but make up the vast majority of animal species on Earth.",
        marks: 6
      }
    },
    'Section D: Long Answer Questions (12 marks)': {
      19: {
        question: "Describe the life processes that all living organisms must carry out. Explain each process with examples.",
        answer: "Life Processes in Living Organisms:\n\nAll living organisms must carry out seven life processes (MRS GREN):\n\n1. Movement:\n- Animals: Move from place to place to find food, escape danger\n- Example: A cat chasing a mouse\n- Plants: Move parts (flowers turn towards sun, roots grow downward)\n\n2. Respiration:\n- Breaking down food to release energy\n- Happens in all cells\n- Example: We breathe in oxygen to help release energy from food\n\n3. Sensitivity (Response to stimuli):\n- Detecting and responding to changes in environment\n- Example: We pull our hand away from hot surface\n- Plants grow towards light\n\n4. Growth:\n- Increase in size and number of cells\n- Example: A baby grows into an adult\n- Seeds grow into plants\n\n5. Reproduction:\n- Producing offspring\n- Example: Animals give birth or lay eggs\n- Plants produce seeds\n\n6. Excretion:\n- Removing waste products\n- Example: We excrete urine and sweat\n- Plants excrete oxygen during photosynthesis\n\n7. Nutrition:\n- Taking in food for energy and growth\n- Animals eat food (heterotrophs)\n- Plants make food through photosynthesis (autotrophs)\n\nWithout these processes, an organism cannot survive.",
        marks: 6
      },
      20: {
        question: "Explain the concept of food chains and food webs in an ecosystem. Draw a simple food chain with at least four organisms.",
        answer: "Food Chains and Food Webs:\n\nFood Chain:\nA food chain shows how energy flows from one organism to another through feeding relationships.\n\nComponents:\n1. Producers (Plants) - Make their own food using sunlight\n2. Primary Consumers (Herbivores) - Eat plants\n3. Secondary Consumers (Carnivores) - Eat herbivores\n4. Tertiary Consumers (Top carnivores) - Eat other carnivores\n5. Decomposers - Break down dead organisms\n\nExample Food Chain:\nGrass → Grasshopper → Frog → Snake → Hawk\n(Producer) → (Herbivore) → (Small Carnivore) → (Large Carnivore) → (Top Predator)\n\nEnergy Flow:\n- Energy flows from sun → plants → animals\n- Each level gets only 10% of energy from previous level\n- That's why there are fewer predators than prey\n\nFood Web:\n- Multiple interconnected food chains\n- More realistic representation of ecosystem\n- Shows that most organisms eat various foods\n- If one species disappears, others can survive\n\nImportance:\n1. Shows interdependence of organisms\n2. Explains population balance in nature\n3. Helps understand impact of removing species\n4. Shows energy flow in ecosystem\n\nExample: A rabbit eats grass, but also clover and vegetables. The rabbit is eaten by foxes, hawks, and snakes. This creates a web, not just a chain.",
        marks: 6
      }
    }
  }
};

async function fixPaper() {
  console.log('🔬 Fixing Biology - General / Introduction - Set B (Paper 820)\n');
  
  const db = await getDb();
  
  try {
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 820');
    const content = JSON.parse(paper.content);
    
    let fixedCount = 0;
    
    // Apply fixes
    for (const section of content.sections) {
      // @ts-ignore - Dynamic section name indexing
      const sectionFixes = (fixes[820] as any)[section.name];
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
      820
    );
    
    console.log(`\n💾 Saved ${fixedCount} fixes to database\n`);
    console.log('✅ Paper 820 complete!\n');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await db.close();
  }
}

fixPaper().catch(console.error);
