import { getDb } from '../db/database';

// Paper 821: Biology Practice Paper - General / Introduction - Set C

const fixes = {
  821: {
    'Section B: Very Short Answer Questions (6 marks)': {
      11: {
        question: "What is respiration? Where does it occur?",
        answer: "Respiration is the process of breaking down food to release energy. It occurs in all living cells.",
        marks: 1
      },
      12: {
        question: "Name two ways plants reproduce.",
        answer: "Seeds and Vegetative propagation (or Spores, Cuttings)",
        marks: 1
      },
      13: {
        question: "What is the function of roots in plants?",
        answer: "Roots anchor the plant in soil and absorb water and minerals from the soil.",
        marks: 1
      },
      14: {
        question: "Define the term 'habitat'.",
        answer: "A habitat is the natural home or environment where an organism lives.",
        marks: 1
      },
      15: {
        question: "What is the difference between growth and development?",
        answer: "Growth is increase in size, while development involves changes in structure and function leading to maturity.",
        marks: 1
      },
      16: {
        question: "Why are decomposers important in nature?",
        answer: "Decomposers break down dead organisms and return nutrients to the soil, completing the nutrient cycle.",
        marks: 1
      }
    },
    'Section C: Short Answer Questions (12 marks)': {
      17: {
        question: "Describe the structure and function of a typical plant cell. How is it different from an animal cell?",
        answer: "Structure of Plant Cell:\n\n1. Cell Wall - Rigid outer covering (absent in animal cells)\n2. Cell Membrane - Controls what enters and leaves\n3. Nucleus - Control center with genetic material\n4. Cytoplasm - Jelly-like substance where activities occur\n5. Chloroplasts - Contain chlorophyll for photosynthesis (absent in animal cells)\n6. Vacuole - Large, stores water and nutrients (small in animal cells)\n7. Mitochondria - Powerhouse, produces energy\n\nFunctions:\n- Cell wall provides shape and protection\n- Chloroplasts make food through photosynthesis\n- Large vacuole stores water and maintains cell pressure\n\nKey Differences from Animal Cells:\n1. Plant cells have cell wall; animal cells don't\n2. Plant cells have chloroplasts; animal cells don't\n3. Plant cells have large central vacuole; animal cells have small vacuoles\n4. Plant cells are usually rectangular; animal cells are rounded",
        marks: 6
      },
      18: {
        question: "Explain how animals are adapted to live in water. Give examples of at least three different adaptations.",
        answer: "Adaptations of Aquatic Animals:\n\n1. Body Shape:\n- Streamlined body to reduce water resistance\n- Example: Fish, dolphins, sharks have torpedo-shaped bodies\n- Helps in fast swimming\n\n2. Breathing:\n- Gills to extract oxygen from water\n- Example: Fish have gills on sides of head\n- Some animals like whales come to surface to breathe air\n\n3. Movement:\n- Fins and flippers for swimming\n- Webbed feet in ducks, frogs\n- Tail for propulsion in fish and dolphins\n\n4. Vision:\n- Special eyes to see underwater\n- Example: Fish have eyes without eyelids\n\n5. Other Adaptations:\n- Scales to protect body\n- Swim bladder in fish to control depth\n- Layer of fat (blubber) in whales for warmth\n- Ability to stay underwater for long periods\n\nExamples:\n- Fish: Gills, fins, streamlined body, scales\n- Frog: Webbed feet, can breathe through skin in water\n- Duck: Webbed feet, waterproof feathers, flat beak\n- Whale: Streamlined body, flippers, blubber, blowholes",
        marks: 6
      }
    },
    'Section D: Long Answer Questions (12 marks)': {
      19: {
        question: "Write a comprehensive note on the human digestive system. Include the organs involved and their functions.",
        answer: "The Human Digestive System:\n\nThe digestive system breaks down food into nutrients that the body can absorb and use for energy, growth, and repair.\n\nOrgans and Functions:\n\n1. Mouth:\n- Chewing breaks food into smaller pieces\n- Saliva contains enzyme (amylase) that starts digesting starch\n- Tongue helps in mixing and swallowing\n\n2. Esophagus (Food pipe):\n- Muscular tube connecting mouth to stomach\n- Pushes food down through wave-like movements (peristalsis)\n\n3. Stomach:\n- J-shaped muscular bag\n- Churns food and mixes it with gastric juice\n- Gastric juice contains acid and enzymes to digest proteins\n- Food becomes semi-liquid (chyme)\n\n4. Small Intestine:\n- Long coiled tube (about 6 meters)\n- Main site of digestion and absorption\n- Receives digestive juices from pancreas and liver\n- Inner walls have tiny finger-like projections (villi) to absorb nutrients\n- Nutrients pass into blood\n\n5. Large Intestine:\n- Absorbs water from undigested food\n- Forms solid waste (feces)\n- Contains useful bacteria\n\n6. Rectum and Anus:\n- Stores and removes solid waste from body\n\nAccessory Organs:\n\n1. Liver:\n- Largest gland\n- Produces bile to digest fats\n- Stores nutrients\n\n2. Pancreas:\n- Produces digestive enzymes\n- Produces insulin to control blood sugar\n\n3. Gall Bladder:\n- Stores bile from liver\n\nProcess Summary:\nMouth → Esophagus → Stomach → Small Intestine → Large Intestine → Rectum → Anus\n\nImportance:\n- Provides energy for all activities\n- Provides materials for growth and repair\n- Absorption of vitamins and minerals",
        marks: 6
      },
      20: {
        question: "Discuss the importance of maintaining balance in ecosystems. What happens when this balance is disturbed? Give examples.",
        answer: "Balance in Ecosystems:\n\nAn ecosystem is a community of living organisms interacting with their environment. Balance is crucial for survival.\n\nImportance of Balance:\n\n1. Food Supply:\n- Maintains proper number of predators and prey\n- Ensures food availability for all organisms\n\n2. Nutrient Cycling:\n- Decomposers break down waste\n- Nutrients return to soil\n- Plants use nutrients to grow\n\n3. Population Control:\n- Predators control herbivore populations\n- Prevents overgrazing\n- Maintains plant diversity\n\n4. Oxygen-Carbon Dioxide Balance:\n- Plants produce oxygen, use carbon dioxide\n- Animals use oxygen, produce carbon dioxide\n- Maintains air quality\n\nWhat Happens When Balance is Disturbed:\n\n1. Overpopulation:\n- If predators disappear, prey multiply rapidly\n- Example: When wolves were removed from Yellowstone, deer overpopulated and destroyed vegetation\n\n2. Species Extinction:\n- Removing one species affects entire food web\n- Example: Bees disappearing threatens plant pollination\n\n3. Habitat Destruction:\n- Deforestation destroys homes of animals\n- Many species become endangered\n\n4. Pollution:\n- Chemical waste kills aquatic life\n- Air pollution affects plants and animals\n\n5. Introduction of Alien Species:\n- New species may have no natural predators\n- Can outcompete native species\n- Example: Water hyacinth in Indian water bodies\n\nHuman Activities Causing Imbalance:\n- Deforestation\n- Pollution\n- Overfishing and hunting\n- Use of pesticides\n- Climate change\n\nConservation Measures:\n- Protected areas and national parks\n- Wildlife sanctuaries\n- Ban on hunting endangered species\n- Reducing pollution\n- Planting trees\n- Sustainable use of resources\n\nConclusion:\nEcosystem balance is essential for life. We must protect nature to ensure survival of all species, including humans.",
        marks: 6
      }
    }
  }
};

async function fixPaper() {
  console.log('🔬 Fixing Biology - General / Introduction - Set C (Paper 821)\n');
  
  const db = await getDb();
  
  try {
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 821');
    const content = JSON.parse(paper.content);
    
    let fixedCount = 0;
    
    for (const section of content.sections) {
      // @ts-ignore - Dynamic section name indexing
      const sectionFixes = (fixes[821] as any)[section.name];
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
    
    await db.run(
      'UPDATE question_papers SET content = ? WHERE id = ?',
      JSON.stringify(content),
      821
    );
    
    console.log(`\n💾 Saved ${fixedCount} fixes to database\n`);
    console.log('✅ Paper 821 complete!\n');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await db.close();
  }
}

fixPaper().catch(console.error);
