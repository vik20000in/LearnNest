import { getDb } from '../db/database';

// Paper 824: Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set C

const fixes = {
  824: {
    'Section B: Very Short Answer Questions (6 marks)': {
      11: {
        question: "What are ribosomes? What is their function?",
        answer: "Ribosomes are tiny organelles that manufacture proteins. They can be free in cytoplasm or attached to endoplasmic reticulum.",
        marks: 1
      },
      12: {
        question: "What is the function of the Golgi apparatus?",
        answer: "The Golgi apparatus packages and modifies proteins, then transports them to their destinations in the cell.",
        marks: 1
      },
      13: {
        question: "What is osmosis?",
        answer: "Osmosis is the movement of water molecules from a region of high concentration to low concentration through a semi-permeable membrane.",
        marks: 1
      },
      14: {
        question: "Why do plant cells have a large vacuole?",
        answer: "Large vacuoles store water, nutrients, and waste. They also maintain turgor pressure to keep the plant cell rigid and upright.",
        marks: 1
      },
      15: {
        question: "What is the endoplasmic reticulum?",
        answer: "Endoplasmic reticulum (ER) is a network of membranes that transports materials within the cell. Rough ER has ribosomes, Smooth ER doesn't.",
        marks: 1
      },
      16: {
        question: "State one difference between Rough ER and Smooth ER.",
        answer: "Rough ER has ribosomes attached and makes proteins. Smooth ER lacks ribosomes and makes lipids.",
        marks: 1
      }
    },
    'Section C: Short Answer Questions (12 marks)': {
      17: {
        question: "Explain the concept of selective permeability of cell membrane. How does it help the cell?",
        answer: "Selective Permeability of Cell Membrane:\n\nWhat is Selective Permeability:\n- Cell membrane allows some substances to pass through\n- Blocks or controls entry of others\n- Acts as a gatekeeper\n- Also called semi-permeable membrane\n\nStructure Enabling Selectivity:\n\n1. Lipid Bilayer:\n- Made of phospholipids\n- Has hydrophobic (water-repelling) interior\n- Has hydrophilic (water-loving) exterior\n\n2. Membrane Proteins:\n- Channel proteins create passages\n- Carrier proteins transport specific molecules\n- Receptor proteins recognize signals\n\nWhat Can Pass:\n\n1. Small Molecules:\n- Water, oxygen, carbon dioxide\n- Pass through easily\n\n2. Lipid-Soluble Substances:\n- Can dissolve in lipid bilayer\n- Example: Steroid hormones\n\n3. Through Protein Channels:\n- Specific ions and molecules\n- Glucose, amino acids (with help)\n\nWhat Cannot Pass:\n\n1. Large Molecules:\n- Proteins, starch\n- Too big for pores\n\n2. Charged Particles:\n- Cannot cross lipid layer easily\n- Need protein channels\n\n3. Harmful Substances:\n- Many toxins blocked\n\nHow It Helps the Cell:\n\n1. Maintains Cell Environment:\n- Keeps necessary substances inside\n- Prevents harmful substances from entering\n- Maintains proper concentration\n\n2. Nutrient Uptake:\n- Allows essential nutrients to enter\n- Glucose, amino acids, minerals\n\n3. Waste Removal:\n- Allows waste products to leave\n- CO₂, urea, excess water\n\n4. Communication:\n- Receives signals from other cells\n- Responds to hormones\n\n5. Protection:\n- Keeps out disease-causing organisms\n- Maintains cell integrity\n\nConclusion:\nSelective permeability is essential for cell survival. It's like a security system that lets good things in, keeps bad things out, and maintains perfect balance.",
        marks: 6
      },
      18: {
        question: "Describe the different types of plastids found in plant cells. What are their functions?",
        answer: "Types of Plastids in Plant Cells:\n\nWhat are Plastids:\n- Membrane-bound organelles\n- Found only in plant cells\n- Contain pigments or store food\n- Can change from one type to another\n\nThree Main Types:\n\n1. CHLOROPLASTS (Green Plastids):\n\nStructure:\n- Disc-shaped, green colored\n- Contain chlorophyll pigment\n- Have stacks of thylakoids (grana)\n- Contain own DNA\n\nFunctions:\n- Perform photosynthesis\n- Convert light energy to chemical energy\n- Manufacture glucose (food)\n- Produce oxygen as by-product\n\nLocation:\n- Mainly in leaves\n- Also in green stems\n\nImportance:\n- Essential for plant survival\n- Source of food for all life on Earth\n- Produce oxygen we breathe\n\n2. CHROMOPLASTS (Colored Plastids):\n\nStructure:\n- Various shapes\n- Contain pigments (not chlorophyll)\n- Red, orange, yellow colors\n\nPigments:\n- Carotene (orange)\n- Xanthophyll (yellow)\n- Lycopene (red)\n\nFunctions:\n- Give color to flowers, fruits, autumn leaves\n- Attract pollinators (insects, birds)\n- Help seed dispersal\n\nExamples:\n- Tomatoes (red)\n- Carrots (orange)\n- Marigold flowers (yellow/orange)\n\n3. LEUCOPLASTS (Colorless Plastids):\n\nStructure:\n- No pigments\n- Colorless\n- Found in non-green parts\n\nTypes Based on Storage:\n\na) Amyloplasts:\n- Store starch\n- Example: Potato tubers, rice grains\n\nb) Elaioplasts:\n- Store oils and fats\n- Example: Oilseeds\n\nc) Aleuroplasts:\n- Store proteins\n- Example: Seeds\n\nFunctions:\n- Store food materials\n- Provide energy when needed\n- Help in germination of seeds\n\nLocation:\n- Roots, seeds, tubers\n- Underground storage organs\n\nInterconversion:\n\nChloroplasts ↔ Chromoplasts ↔ Leucoplasts\n\nExamples:\n- Green tomatoes (chloroplasts) → Red ripe tomatoes (chromoplasts)\n- Potato exposed to light: Leucoplasts → Chloroplasts (turns green)\n\nImportance of Plastids:\n\n1. Food Production:\n- Chloroplasts make food\n- Leucoplasts store food\n\n2. Plant Coloration:\n- Chromoplasts provide colors\n- Help in reproduction\n\n3. Energy Storage:\n- Store energy in different forms\n- Starch, oils, proteins\n\n4. Adaptation:\n- Can change type based on needs\n- Helps plant survive\n\nConclusion:\nPlastids are unique to plant cells and perform various essential functions from food production to storage to attracting pollinators.",
        marks: 6
      }
    },
    'Section D: Long Answer Questions (12 marks)': {
      19: {
        question: "Write a detailed note on the differences between unicellular and multicellular organisms. Give examples and explain advantages and disadvantages of each.",
        answer: "Unicellular vs Multicellular Organisms:\n\nUNICELLULAR ORGANISMS:\n\nDefinition:\n- Made of only one cell\n- Single cell performs all life functions\n- Also called single-celled organisms\n\nCharacteristics:\n\n1. Structure:\n- One complete cell\n- All organelles present\n- Small size (microscopic)\n\n2. Functions:\n- One cell does everything\n- No division of labor\n- All processes in one compartment\n\n3. Reproduction:\n- Usually asexual\n- Binary fission, budding\n- Rapid reproduction\n\n4. Life Span:\n- Short life span\n- Rapid generations\n\nExamples:\n- Amoeba, Paramecium (Protists)\n- Bacteria (E. coli)\n- Yeast (Fungus)\n- Chlamydomonas (Algae)\n- Euglena\n\nAdvantages:\n\n1. Simple Organization:\n- Easy to maintain\n- Less energy needed\n\n2. Rapid Reproduction:\n- Population grows quickly\n- Adapt fast to environment\n\n3. Can Survive Harsh Conditions:\n- Form spores\n- Become dormant\n\n4. Efficient:\n- Direct exchange with environment\n- No complex transport systems needed\n\nDisadvantages:\n\n1. Size Limitation:\n- Cannot grow large\n- Limited by surface area to volume ratio\n\n2. Limited Complexity:\n- Cannot develop specialized structures\n- Can't perform complex functions\n\n3. Vulnerability:\n- Damage to cell means death\n- No backup systems\n\n4. Limited Lifespan:\n- Usually short-lived\n\nMULTICELLULAR ORGANISMS:\n\nDefinition:\n- Made of many cells\n- Cells work together\n- Cells specialized for different functions\n\nCharacteristics:\n\n1. Structure:\n- Millions to trillions of cells\n- Organized into tissues, organs, systems\n- Can be very large\n\n2. Functions:\n- Division of labor\n- Different cells for different jobs\n- Specialized cells more efficient\n\n3. Reproduction:\n- Sexual and asexual\n- More complex process\n- Specialized reproductive cells\n\n4. Life Span:\n- Generally longer\n- Cells can be replaced\n\nExamples:\n- Plants (mango tree, rose)\n- Animals (humans, dogs, elephants)\n- Fungi (mushrooms)\n- Algae (seaweed)\n\nAdvantages:\n\n1. Large Size:\n- Can grow to enormous sizes\n- Trees, whales, elephants\n\n2. Specialization:\n- Different cells for different tasks\n- More efficient functioning\n- Example: Nerve cells for signals, muscle cells for movement\n\n3. Longevity:\n- Cells can be replaced\n- Organisms live longer\n- Some trees live thousands of years\n\n4. Complex Functions:\n- Can have brains, hearts, complex behaviors\n- Better adaptation\n- Intelligence possible\n\n5. Survival:\n- Damage to some cells doesn't kill organism\n- Healing and regeneration possible\n\nDisadvantages:\n\n1. Complex Maintenance:\n- Need transport systems (blood, xylem, phloem)\n- Need coordination (nervous system, hormones)\n- More energy required\n\n2. Slower Reproduction:\n- Takes time to grow\n- Fewer offspring\n- Slower adaptation\n\n3. Greater Resource Needs:\n- Need more food and oxygen\n- Dependent on multiple systems\n\n4. Cannot Survive Harsh Conditions as Easily:\n- Complex organisms more vulnerable\n- Need stable environment\n\nComparison Table:\n\n| Feature | Unicellular | Multicellular |\n|---------|-------------|---------------|\n| Number of Cells | One | Many |\n| Size | Microscopic | Can be large |\n| Division of Labor | Absent | Present |\n| Specialization | No specialized cells | Specialized cells |\n| Reproduction | Usually asexual, rapid | Sexual/asexual, slower |\n| Lifespan | Short | Usually longer |\n| Complexity | Simple | Complex |\n| Examples | Bacteria, Amoeba | Humans, Plants |\n\nEvolution:\n- Life started with unicellular organisms\n- Multicellular evolved from unicellular\n- Happened about 1 billion years ago\n- Allowed greater diversity and complexity\n\nConclusion:\nBoth types have their place in nature. Unicellular organisms are simple, efficient, and abundant. Multicellular organisms are complex, specialized, and diverse. Both are essential for the balance of ecosystems.",
        marks: 6
      },
      20: {
        question: "Explain in detail how a cell maintains homeostasis. What are the different processes involved? Why is homeostasis important for survival?",
        answer: "Homeostasis in Cells:\n\nWhat is Homeostasis:\n- Maintaining stable internal conditions\n- Despite changes in external environment\n- From Greek: 'homeo' = similar, 'stasis' = stable\n- Essential for cell survival and proper functioning\n\nProcesses Involved in Maintaining Homeostasis:\n\n1. REGULATION OF WATER BALANCE:\n\na) Osmosis:\n- Water moves across membrane\n- From high to low concentration\n- Maintains cell volume\n\nb) In Different Solutions:\n- Hypotonic (more water outside): Cell swells, may burst\n- Hypertonic (less water outside): Cell shrinks\n- Isotonic (equal): Cell maintains shape\n\nc) Plant Cells:\n- Cell wall prevents bursting\n- Turgor pressure keeps plant upright\n- Wilting occurs when water lost\n\nd) Animal Cells:\n- Contractile vacuole in some (paramecium)\n- Pumps out excess water\n- Kidneys maintain water balance in body\n\n2. REGULATION OF NUTRIENTS:\n\na) Selective Permeability:\n- Membrane controls entry\n- Lets in glucose, amino acids\n- Blocks harmful substances\n\nb) Active Transport:\n- Moves substances against concentration\n- Requires energy (ATP)\n- Maintains proper concentrations\n\nc) Storage:\n- Excess nutrients stored\n- Starch in plants, glycogen in animals\n- Released when needed\n\n3. REGULATION OF WASTE PRODUCTS:\n\na) Excretion:\n- Removes metabolic waste\n- CO₂, ammonia, urea\n- Prevents toxin buildup\n\nb) Lysosomes:\n- Digest cellular waste\n- Recycle old organelles\n- Clean up damaged parts\n\nc) Exocytosis:\n- Packages waste in vesicles\n- Releases outside cell\n\n4. REGULATION OF pH:\n\na) Buffers:\n- Chemicals that resist pH changes\n- Keep cytoplasm at optimal pH\n- Usually slightly alkaline (pH 7.2-7.4)\n\nb) Enzyme Function:\n- Enzymes work best at specific pH\n- Wrong pH denatures enzymes\n- Affects all cell processes\n\n5. TEMPERATURE REGULATION:\n\na) In Warm-Blooded Animals:\n- Cells must function at 37°C (humans)\n- Metabolism produces heat\n- Sweating cools down\n\nb) In Cold-Blooded Animals:\n- Cell activity slows in cold\n- Speeds up in warmth\n- Behavior helps regulate\n\nc) In Plants:\n- Transpiration cools leaves\n- Dormancy in winter\n\n6. REGULATION OF ENERGY:\n\na) Cellular Respiration:\n- Breaks down glucose\n- Produces ATP\n- Maintains energy supply\n\nb) Feedback Mechanisms:\n- When ATP high, respiration slows\n- When ATP low, respiration speeds up\n- Self-regulating system\n\n7. REGULATION OF ION CONCENTRATION:\n\na) Sodium-Potassium Pump:\n- Maintains ion balance\n- High K⁺ inside, high Na⁺ outside\n- Essential for nerve and muscle cells\n\nb) Calcium Regulation:\n- Important for signaling\n- Muscle contraction\n- Carefully controlled\n\nWhy Homeostasis is Important:\n\n1. Enzyme Activity:\n- Enzymes need specific conditions\n- pH, temperature must be right\n- All cell reactions depend on enzymes\n\n2. Protein Structure:\n- Proteins denature in wrong conditions\n- Loss of function\n- Can be permanent damage\n\n3. Cell Shape and Size:\n- Too much water: Cell bursts\n- Too little water: Cell shrivels\n- Proper shape needed for function\n\n4. Energy Production:\n- Requires optimal conditions\n- Glucose and oxygen at right levels\n- ATP production must be steady\n\n5. DNA Integrity:\n- Genetic material must be protected\n- Wrong conditions can damage DNA\n- Mutations can occur\n\n6. Waste Removal:\n- Toxins damage cell structures\n- Must be removed promptly\n- Accumulation can kill cell\n\n7. Survival:\n- Cells cannot function in extreme conditions\n- Homeostasis allows life in varying environments\n- Failure means cell death\n\nExamples of Homeostasis Failure:\n\n1. Dehydration:\n- Cells shrink\n- Reduced function\n- Can be fatal\n\n2. pH Imbalance:\n- Acidosis or alkalosis\n- Enzyme failure\n- Organ damage\n\n3. Temperature Extremes:\n- Fever above 42°C denatures proteins\n- Hypothermia slows metabolism\n- Both can be deadly\n\n4. Ion Imbalance:\n- Hyperkalemia (high potassium)\n- Heart rhythm problems\n- Muscle weakness\n\nConclusion:\nHomeostasis is like a thermostat that keeps internal conditions stable. Cells constantly monitor and adjust their environment. This self-regulation is fundamental to life. Without homeostasis, cells cannot survive, and neither can organisms. It's the difference between life and death at the cellular level.",
        marks: 6
      }
    }
  }
};

async function fixPaper() {
  console.log('🔬 Fixing Biology - Chapter 3: Cell - Set C (Paper 824)\n');
  
  const db = await getDb();
  
  try {
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 824');
    const content = JSON.parse(paper.content);
    
    let fixedCount = 0;
    
    for (const section of content.sections) {
      // @ts-ignore - Dynamic section name indexing
      const sectionFixes = (fixes[824] as any)[section.name];
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
      824
    );
    
    console.log(`\n💾 Saved ${fixedCount} fixes to database\n`);
    console.log('✅ Paper 824 complete!\n');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await db.close();
  }
}

fixPaper().catch(console.error);
