import { getDb } from '../db/database';

// Paper 823: Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set B

const fixes = {
  823: {
    'Section B: Very Short Answer Questions (6 marks)': {
      11: {
        question: "What is the function of mitochondria?",
        answer: "Mitochondria produce energy (ATP) through cellular respiration. They are called the powerhouse of the cell.",
        marks: 1
      },
      12: {
        question: "What is cytoplasm?",
        answer: "Cytoplasm is the jelly-like substance filling the cell between the cell membrane and nucleus where chemical reactions occur.",
        marks: 1
      },
      13: {
        question: "Why are lysosomes called 'suicide bags'?",
        answer: "Lysosomes contain digestive enzymes that can break down cell components. If they rupture, they can destroy the entire cell.",
        marks: 1
      },
      14: {
        question: "What is the function of chloroplasts?",
        answer: "Chloroplasts carry out photosynthesis - the process of making food using sunlight, carbon dioxide, and water.",
        marks: 1
      },
      15: {
        question: "Name the scientist who discovered the nucleus.",
        answer: "Robert Brown discovered the nucleus in 1831.",
        marks: 1
      },
      16: {
        question: "What is the difference between cell wall and cell membrane?",
        answer: "Cell wall is rigid, made of cellulose, found only in plants. Cell membrane is thin, flexible, found in all cells.",
        marks: 1
      }
    },
    'Section C: Short Answer Questions (12 marks)': {
      17: {
        question: "Explain the structure and functions of the nucleus. Why is it called the 'brain' of the cell?",
        answer: "Structure and Functions of Nucleus:\n\nStructure:\n1. Nuclear Membrane:\n- Double-layered covering\n- Has pores for exchange of materials\n- Separates nucleus from cytoplasm\n\n2. Nucleoplasm:\n- Jelly-like substance inside nucleus\n- Contains chromatin\n\n3. Chromatin:\n- Thread-like structures\n- Made of DNA and proteins\n- Condenses to form chromosomes during cell division\n\n4. Nucleolus:\n- Dense spherical body\n- One or more present\n- Makes ribosomes\n\nFunctions:\n\n1. Controls Cell Activities:\n- Directs all chemical reactions\n- Regulates cell growth and reproduction\n\n2. Stores Genetic Information:\n- Contains DNA with genes\n- Carries hereditary information\n- Passes traits to offspring\n\n3. Protein Synthesis:\n- DNA codes for proteins\n- Sends instructions (mRNA) to ribosomes\n\n4. Cell Division:\n- Chromosomes duplicate and separate\n- Ensures each new cell gets complete set of genes\n\nWhy Called 'Brain':\n- Controls all cell functions like brain controls body\n- Makes all important decisions\n- Without nucleus, cell cannot survive long\n- Coordinates activities of all organelles",
        marks: 6
      },
      18: {
        question: "Describe the process of diffusion through cell membrane. Give examples from daily life.",
        answer: "Diffusion Through Cell Membrane:\n\nWhat is Diffusion:\n- Movement of particles from high concentration to low concentration\n- Passive process (no energy required)\n- Continues until concentration is equal\n\nHow it Works in Cells:\n\n1. Cell Membrane is Selectively Permeable:\n- Small molecules can pass through\n- Large molecules cannot\n- Controls what enters and exits\n\n2. Process:\n- Particles move randomly\n- More particles where concentration is high\n- Net movement toward low concentration area\n- Stops when equilibrium reached\n\nExamples in Living Systems:\n\n1. Oxygen Entry:\n- Oxygen concentration high outside cell (in blood)\n- Low inside cell (used in respiration)\n- Oxygen diffuses into cell\n\n2. Carbon Dioxide Exit:\n- CO₂ concentration high inside cell (waste product)\n- Low outside cell\n- CO₂ diffuses out of cell\n\n3. Nutrients:\n- Glucose and amino acids diffuse into cells\n- Water moves by osmosis (special diffusion)\n\nDaily Life Examples:\n\n1. Perfume Spreading:\n- Spray perfume in corner of room\n- Smell spreads throughout room\n- Molecules diffuse from high to low concentration\n\n2. Tea Bag in Water:\n- Tea molecules concentrated in bag\n- Diffuse into water\n- Water becomes uniformly colored\n\n3. Sugar in Water:\n- Sugar crystals at bottom\n- Gradually spreads throughout\n- Eventually uniform sweetness\n\n4. Incense Stick:\n- Smoke spreads from burning end\n- Fills entire room\n\nImportance:\n- Essential for cell survival\n- Brings in nutrients and oxygen\n- Removes waste products\n- Maintains cell environment",
        marks: 6
      }
    },
    'Section D: Long Answer Questions (12 marks)': {
      19: {
        question: "Explain the process of cell division (mitosis). Why is cell division important? Draw diagrams showing the stages.",
        answer: "Cell Division - Mitosis:\n\nWhat is Mitosis:\n- Process by which one cell divides into two identical daughter cells\n- Each daughter cell has same number of chromosomes as parent\n- Occurs in body cells (somatic cells)\n- Results in growth and repair\n\nStages of Mitosis:\n\n1. Interphase (Preparation):\n- Not actual division, but preparation phase\n- Cell grows and matures\n- DNA replicates (doubles)\n- Organelles duplicate\n- Cell prepares for division\n\n2. Prophase:\n- Chromatin condenses into visible chromosomes\n- Each chromosome has two sister chromatids\n- Nuclear membrane starts to disappear\n- Centrioles move to opposite poles\n- Spindle fibers begin to form\n\n3. Metaphase:\n- Chromosomes line up at cell's equator\n- Called metaphase plate\n- Spindle fibers attach to centromeres\n- Chromosomes are most visible now\n\n4. Anaphase:\n- Sister chromatids separate\n- Move to opposite poles of cell\n- Pulled by spindle fibers\n- Cell starts to elongate\n\n5. Telophase:\n- Chromosomes reach poles\n- Begin to uncoil back to chromatin\n- Nuclear membrane reforms around each set\n- Spindle fibers disappear\n- Two nuclei now present in one cell\n\n6. Cytokinesis:\n- Actual division of cytoplasm\n- In animals: Cell membrane pinches inward\n- In plants: Cell plate forms\n- Results in two separate daughter cells\n\nImportance of Cell Division:\n\n1. Growth:\n- Multicellular organisms grow by increasing cell number\n- Baby becomes adult through cell division\n\n2. Repair and Healing:\n- Replaces damaged or dead cells\n- Heals wounds and cuts\n- Skin cells constantly replaced\n\n3. Reproduction:\n- In unicellular organisms, cell division is reproduction\n- Bacteria, amoeba reproduce this way\n\n4. Replace Old Cells:\n- Red blood cells live ~120 days\n- Need constant replacement\n- Millions of cells divide daily\n\n5. Maintain Body Functions:\n- Digestive system lining replaced every few days\n- Ensures healthy functioning\n\nConclusion:\nCell division is essential for life. Without it, organisms cannot grow, heal, or reproduce. Every cell in our body came from division of previously existing cells.",
        marks: 6
      },
      20: {
        question: "Write a detailed comparison between prokaryotic and eukaryotic cells. Give examples of organisms having each type. Include a table.",
        answer: "Prokaryotic vs Eukaryotic Cells:\n\nComparison Table:\n\n| Feature | Prokaryotic Cell | Eukaryotic Cell |\n|---------|-----------------|----------------|\n| Nucleus | No true nucleus; genetic material in nucleoid | True nucleus with nuclear membrane |\n| Size | Smaller (1-10 μm) | Larger (10-100 μm) |\n| DNA | Circular, not in chromosomes | Linear, organized in chromosomes |\n| Membrane-bound Organelles | Absent | Present (mitochondria, ER, Golgi, etc.) |\n| Ribosomes | Smaller (70S) | Larger (80S) |\n| Cell Wall | Present (made of peptidoglycan) | Present in plants (cellulose), absent in animals |\n| Cell Division | Binary fission | Mitosis/Meiosis |\n| Reproduction | Asexual only | Sexual and asexual |\n| Examples | Bacteria, Blue-green algae | Plants, Animals, Fungi, Protists |\n| Complexity | Simple | Complex |\n\nDetailed Explanation:\n\nProkaryotic Cells:\n\n1. Structure:\n- No organized nucleus\n- DNA floats freely in cytoplasm\n- Single circular chromosome\n- No mitochondria or chloroplasts\n- Ribosomes present but smaller\n- Cell wall present\n\n2. Functions:\n- All life processes in single compartment\n- Simpler organization\n- Reproduce rapidly\n\n3. Examples:\n- All Bacteria (E. coli, Streptococcus)\n- Cyanobacteria (blue-green algae)\n- Archaea\n\n4. Characteristics:\n- First cells to evolve on Earth\n- Extremely diverse\n- Can survive harsh conditions\n- Some cause diseases\n- Many beneficial (yogurt, nitrogen fixation)\n\nEukaryotic Cells:\n\n1. Structure:\n- Well-defined nucleus\n- DNA in chromosomes\n- Many membrane-bound organelles\n- Specialized compartments for different functions\n- Larger and more complex\n\n2. Functions:\n- Different organelles perform specific tasks\n- More efficient organization\n- Can be multicellular\n\n3. Examples:\n- Plants (mango tree, rose)\n- Animals (humans, dogs, fish)\n- Fungi (mushroom, yeast)\n- Protists (amoeba, paramecium)\n\n4. Characteristics:\n- Evolved from prokaryotes\n- More complex life forms\n- Allow specialization\n- Enable multicellular life\n\nEvolutionary Connection:\n\nEndosymbiotic Theory:\n- Mitochondria and chloroplasts evolved from prokaryotic bacteria\n- Ancient eukaryotic cell engulfed bacteria\n- Bacteria lived inside as organelles\n- Evidence: Both have own DNA, ribosomes similar to bacteria\n\nKey Differences Summary:\n\nProkaryotic:\n- PRO = Before; KARYON = Nucleus\n- Primitive, simple\n- Single-celled\n- Reproduce quickly\n- Bacteria\n\nEukaryotic:\n- EU = True; KARYON = Nucleus\n- Advanced, complex\n- Can be multicellular\n- Larger size\n- All other life\n\nImportance:\n- Understanding cell types helps classify organisms\n- Different structures suit different life strategies\n- Both types essential in ecosystems\n- Prokaryotes decompose waste, fix nitrogen\n- Eukaryotes include all visible life forms",
        marks: 6
      }
    }
  }
};

async function fixPaper() {
  console.log('🔬 Fixing Biology - Chapter 3: Cell - Set B (Paper 823)\n');
  
  const db = await getDb();
  
  try {
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 823');
    const content = JSON.parse(paper.content);
    
    let fixedCount = 0;
    
    for (const section of content.sections) {
      // @ts-ignore - Dynamic section name indexing
      const sectionFixes = (fixes[823] as any)[section.name];
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
      823
    );
    
    console.log(`\n💾 Saved ${fixedCount} fixes to database\n`);
    console.log('✅ Paper 823 complete!\n');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await db.close();
  }
}

fixPaper().catch(console.error);
