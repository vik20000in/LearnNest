import { getDb } from '../db/database';

// Paper 822: Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set A

const fixes = {
  822: {
    'Section A: Multiple Choice Questions (10 marks)': {
      1: {
        question: "Who discovered the cell?",
        options: ["Charles Darwin", "Robert Hooke", "Louis Pasteur", "Gregor Mendel"],
        answer: "Robert Hooke",
        marks: 1
      },
      2: {
        question: "Which is called the 'powerhouse' of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        answer: "Mitochondria",
        marks: 1
      },
      3: {
        question: "What is the control center of the cell?",
        options: ["Cytoplasm", "Nucleus", "Cell membrane", "Vacuole"],
        answer: "Nucleus",
        marks: 1
      }
    },
    'Section B: Very Short Answer Questions (6 marks)': {
      11: {
        question: "What is a cell?",
        answer: "A cell is the basic structural and functional unit of life. It is the smallest unit that can carry out all life processes.",
        marks: 1
      },
      12: {
        question: "Name the two main types of cells.",
        answer: "Prokaryotic cells (without true nucleus) and Eukaryotic cells (with true nucleus)",
        marks: 1
      },
      13: {
        question: "What is the function of the cell membrane?",
        answer: "The cell membrane controls the movement of substances in and out of the cell and protects the cell.",
        marks: 1
      },
      14: {
        question: "Why are plant cells green?",
        answer: "Plant cells are green because they contain chloroplasts with chlorophyll pigment.",
        marks: 1
      },
      15: {
        question: "What are organelles?",
        answer: "Organelles are specialized structures within a cell that perform specific functions, like mitochondria, nucleus, etc.",
        marks: 1
      },
      16: {
        question: "Name the largest organelle in the cell.",
        answer: "Nucleus",
        marks: 1
      }
    },
    'Section C: Short Answer Questions (12 marks)': {
      17: {
        question: "Describe the structure of a typical animal cell with a diagram. Label the main parts.",
        answer: "Structure of Animal Cell:\n\nAn animal cell is bounded by a cell membrane and contains various organelles:\n\n1. Cell Membrane:\n- Thin outer covering\n- Controls what enters and leaves\n- Made of lipids and proteins\n\n2. Nucleus:\n- Large, round structure\n- Contains genetic material (DNA)\n- Controls all cell activities\n- Surrounded by nuclear membrane\n\n3. Cytoplasm:\n- Jelly-like substance\n- Fills the space between membrane and nucleus\n- Where many chemical reactions occur\n\n4. Mitochondria:\n- Bean-shaped organelles\n- Produce energy through respiration\n- Called 'powerhouse' of cell\n\n5. Ribosomes:\n- Tiny structures\n- Manufacture proteins\n\n6. Endoplasmic Reticulum (ER):\n- Network of membranes\n- Transport materials\n- Rough ER has ribosomes, Smooth ER doesn't\n\n7. Golgi Apparatus:\n- Stacks of flattened sacs\n- Packages and distributes proteins\n\n8. Lysosomes:\n- Small sacs with enzymes\n- Break down waste materials\n- Called 'suicide bags'\n\n9. Vacuoles:\n- Small storage sacs\n- Store food, water, waste\n\n[Diagram should show a circular cell with labeled organelles]",
        marks: 6
      },
      18: {
        question: "Compare and contrast plant cells and animal cells. Make a table showing at least 5 differences.",
        answer: "Comparison of Plant and Animal Cells:\n\n| Feature | Plant Cell | Animal Cell |\n|---------|-----------|-------------|\n| Cell Wall | Present (made of cellulose) | Absent |\n| Shape | Fixed rectangular/box shape | Irregular/round shape |\n| Chloroplasts | Present (for photosynthesis) | Absent |\n| Vacuole | One large central vacuole | Many small vacuoles |\n| Centrosome | Absent | Present |\n| Storage | Store starch | Store glycogen |\n| Plastids | Present | Absent |\n| Nucleus | Present at side | Present in center |\n\nSimilarities:\n1. Both have cell membrane\n2. Both have nucleus with DNA\n3. Both have cytoplasm\n4. Both have mitochondria\n5. Both have ribosomes\n6. Both have endoplasmic reticulum\n7. Both have Golgi apparatus\n\nKey Differences Explained:\n- Cell wall in plants provides rigidity and support\n- Chloroplasts enable plants to make their own food\n- Large vacuole in plants stores water and maintains shape\n- Centrosome helps in animal cell division",
        marks: 6
      }
    },
    'Section D: Long Answer Questions (12 marks)': {
      19: {
        question: "Write a detailed note on the discovery of cells and the development of cell theory. Name the scientists involved.",
        answer: "Discovery of Cells and Cell Theory:\n\nHistorical Development:\n\n1. Robert Hooke (1665):\n- First person to observe cells\n- Used simple microscope\n- Observed thin slice of cork\n- Saw tiny box-like structures\n- Named them 'cells' (meaning small rooms)\n- These were actually dead plant cell walls\n\n2. Anton van Leeuwenhoek (1674):\n- Made better microscopes\n- First to see living cells\n- Observed bacteria, protozoans, blood cells\n- Called them 'animalcules' (tiny animals)\n\n3. Robert Brown (1831):\n- Discovered the nucleus\n- Observed it in orchid cells\n- Recognized it as important cell structure\n\n4. Matthias Schleiden (1838):\n- German botanist\n- Studied plant tissues\n- Concluded all plants are made of cells\n\n5. Theodor Schwann (1839):\n- German zoologist\n- Studied animal tissues\n- Concluded all animals are made of cells\n- Together with Schleiden, proposed first two parts of cell theory\n\n6. Rudolf Virchow (1855):\n- German physician\n- Added third part to cell theory\n- Stated 'Omnis cellula e cellula' (all cells from pre-existing cells)\n\nThe Cell Theory (Modern Form):\n\n1. All living organisms are made up of one or more cells\n2. The cell is the basic unit of structure and function in all living things\n3. All cells arise from pre-existing cells through cell division\n\nAdditional Modern Concepts:\n4. Cells contain hereditary information (DNA) passed from cell to cell\n5. All cells have the same basic chemical composition\n6. Energy flow (metabolism) occurs within cells\n\nImportance of Cell Theory:\n- Foundation of modern biology\n- Explains how organisms are structured\n- Explains how organisms grow and reproduce\n- Helps understand diseases\n- Basis for medical treatments\n\nConclusion:\nThe cell theory revolutionized biology and medicine. It took nearly 200 years and work of many scientists to fully understand that cells are the fundamental units of life.",
        marks: 6
      },
      20: {
        question: "Explain the functions of different cell organelles. How do they work together to keep the cell alive?",
        answer: "Functions of Cell Organelles:\n\n1. Nucleus - The Control Center:\n- Contains DNA (genetic material)\n- Controls all cell activities\n- Directs protein synthesis\n- Responsible for cell division\n- Stores hereditary information\n\n2. Mitochondria - The Powerhouse:\n- Site of cellular respiration\n- Breaks down glucose to release energy (ATP)\n- Provides energy for all cell activities\n- Has its own DNA\n\n3. Ribosomes - Protein Factories:\n- Manufacture proteins\n- Found free in cytoplasm or attached to ER\n- Translate genetic code into proteins\n\n4. Endoplasmic Reticulum - The Highway:\n- Network of membranes\n- Transports materials within cell\n- Rough ER: Has ribosomes, makes proteins\n- Smooth ER: Makes lipids, detoxifies\n\n5. Golgi Apparatus - The Packaging Center:\n- Modifies proteins from ER\n- Packages them in vesicles\n- Sends them to correct destinations\n- Like a post office\n\n6. Lysosomes - The Cleaning Crew:\n- Contains digestive enzymes\n- Breaks down waste materials\n- Digests old organelles\n- Destroys harmful bacteria\n- Called 'suicide bags' because they can destroy cell if ruptured\n\n7. Cell Membrane - The Gatekeeper:\n- Controls entry and exit of substances\n- Selectively permeable\n- Protects cell contents\n- Communicates with other cells\n\n8. Cytoplasm - The Factory Floor:\n- Jelly-like substance\n- Site of many chemical reactions\n- Holds organelles in place\n- Medium for transport\n\n9. Vacuoles - Storage Tanks:\n- Store water, food, waste\n- Maintain cell pressure (turgor)\n- Large in plant cells\n\n10. Chloroplasts (in plant cells only):\n- Site of photosynthesis\n- Contains chlorophyll\n- Converts light energy to chemical energy\n- Makes food (glucose)\n\nHow Organelles Work Together:\n\nExample 1 - Making Proteins:\n1. Nucleus sends instructions (mRNA)\n2. Ribosomes read instructions and make protein\n3. ER transports protein\n4. Golgi packages protein\n5. Vesicle delivers protein to destination\n6. Mitochondria provides energy for entire process\n\nExample 2 - Energy Production:\n1. Food enters cell through membrane\n2. Lysosomes may help digest it\n3. Mitochondria break down glucose\n4. Energy (ATP) produced\n5. Energy used by all organelles\n\nExample 3 - Cell Cleaning:\n1. Old or damaged organelles identified\n2. Lysosomes digest them\n3. Useful materials recycled\n4. Waste removed through membrane\n\nConclusion:\nAll organelles are interdependent. Like organs in a body, each has a specific job, but they must work together for the cell to survive. The cell is like a tiny factory where each organelle is a department working in coordination.",
        marks: 6
      }
    }
  }
};

async function fixPaper() {
  console.log('🔬 Fixing Biology - Chapter 3: Cell - Set A (Paper 822)\n');
  
  const db = await getDb();
  
  try {
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = 822');
    const content = JSON.parse(paper.content);
    
    let fixedCount = 0;
    
    for (const section of content.sections) {
      // @ts-ignore - Dynamic section name indexing
      const sectionFixes = (fixes[822] as any)[section.name];
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
      822
    );
    
    console.log(`\n💾 Saved ${fixedCount} fixes to database\n`);
    console.log('✅ Paper 822 complete!\n');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await db.close();
  }
}

fixPaper().catch(console.error);
