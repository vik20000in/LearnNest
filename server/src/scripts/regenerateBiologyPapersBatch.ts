
import { initDatabase } from '../db/database';

const papersToRegenerate = [
    {
        title: "Biology Practice Paper - General / Introduction - Set B",
        content: {
            "title": "Biology Practice Paper - General / Introduction - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which instrument is used to see tiny objects like cells?", "options": ["Telescope", "Microscope", "Periscope", "Stethoscope"], "answer": "Microscope", "marks": 1 },
                        { "id": 2, "question": "Organisms made of only one cell are called:", "options": ["Multicellular", "Unicellular", "Bicellular", "Acellular"], "answer": "Unicellular", "marks": 1 },
                        { "id": 3, "question": "The process of removing waste from the body is:", "options": ["Nutrition", "Respiration", "Excretion", "Digestion"], "answer": "Excretion", "marks": 1 },
                        { "id": 4, "question": "Which of these is a vertebrate?", "options": ["Earthworm", "Snail", "Fish", "Butterfly"], "answer": "Fish", "marks": 1 },
                        { "id": 5, "question": "Plants breathe through tiny pores called:", "options": ["Gills", "Lungs", "Stomata", "Skin"], "answer": "Stomata", "marks": 1 },
                        { "id": 6, "question": "The green pigment in plants is:", "options": ["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"], "answer": "Chlorophyll", "marks": 1 },
                        { "id": 7, "question": "Which of these is an invertebrate?", "options": ["Dog", "Snake", "Cockroach", "Parrot"], "answer": "Cockroach", "marks": 1 },
                        { "id": 8, "question": "The ability to move from one place to another is called:", "options": ["Growth", "Locomotion", "Respiration", "Sensitivity"], "answer": "Locomotion", "marks": 1 },
                        { "id": 9, "question": "Which of these is a scavenger?", "options": ["Lion", "Cow", "Vulture", "Deer"], "answer": "Vulture", "marks": 1 },
                        { "id": 10, "question": "Life science is another name for:", "options": ["Physics", "Chemistry", "Biology", "Geology"], "answer": "Biology", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Name the scientist who invented the simple microscope.", "marks": 1, "answer": "Antonie van Leeuwenhoek" },
                        { "id": 12, "question": "Give two examples of multicellular organisms.", "marks": 1, "answer": "Humans, Mango tree (or any animal/plant)." },
                        { "id": 13, "question": "What is the main source of energy for plants?", "marks": 1, "answer": "Sunlight" },
                        { "id": 14, "question": "Define anatomy.", "marks": 1, "answer": "Anatomy is the study of the internal structure of organisms." },
                        { "id": 15, "question": "What are omnivores?", "marks": 1, "answer": "Animals that eat both plants and other animals (e.g., Bear, Human)." },
                        { "id": 16, "question": "Name the process by which seeds grow into plants.", "marks": 1, "answer": "Germination" }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between vertebrates and invertebrates.", "marks": 6, "answer": "Vertebrates vs Invertebrates:\n1. Vertebrates have a backbone (vertebral column); Invertebrates do not.\n2. Vertebrates usually have a well-developed internal skeleton; Invertebrates may have an external skeleton or none.\n3. Examples of Vertebrates: Fish, Birds, Mammals.\n4. Examples of Invertebrates: Insects, Worms, Snails." },
                        { "id": 18, "question": "Write three uses of animals.", "marks": 6, "answer": "Uses of Animals:\n1. Food: We get milk, eggs, and meat from animals.\n2. Clothing: We get wool, silk, and leather from animals.\n3. Agriculture/Transport: Animals like oxen and horses are used for ploughing and carrying loads.\n4. Companionship: Dogs and cats are kept as pets." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Differentiate between plants and animals.", "marks": 6, "answer": "Plants vs Animals:\n1. Nutrition: Plants make their own food (Autotrophs); Animals depend on others for food (Heterotrophs).\n2. Locomotion: Plants are fixed to the ground; Animals move from place to place.\n3. Growth: Plants grow throughout their life; Animals grow up to a certain age.\n4. Breathing: Plants breathe through stomata; Animals have special organs like lungs, gills, etc.\n5. Cell Structure: Plant cells have cell walls and chloroplasts; Animal cells do not." },
                        { "id": 20, "question": "Explain the steps of the scientific method.", "marks": 6, "answer": "The scientific method involves:\n1. Observation: Noticing something interesting.\n2. Question: Asking 'Why' or 'How'.\n3. Hypothesis: Making a guess or prediction.\n4. Experiment: Testing the hypothesis.\n5. Conclusion: Deciding if the hypothesis was correct based on results.\nThis systematic approach helps scientists learn about the world." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - General / Introduction - Set C",
        content: {
            "title": "Biology Practice Paper - General / Introduction - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The place where an organism lives is called its:", "options": ["Habit", "Habitat", "Environment", "Niche"], "answer": "Habitat", "marks": 1 },
                        { "id": 2, "question": "Which of these is a biotic component of the environment?", "options": ["Water", "Soil", "Plants", "Air"], "answer": "Plants", "marks": 1 },
                        { "id": 3, "question": "Animals that live in water are called:", "options": ["Terrestrial", "Aquatic", "Aerial", "Amphibian"], "answer": "Aquatic", "marks": 1 },
                        { "id": 4, "question": "A sequence of who eats whom is called a:", "options": ["Food web", "Food chain", "Food cycle", "Food pyramid"], "answer": "Food chain", "marks": 1 },
                        { "id": 5, "question": "Which of these is an abiotic component?", "options": ["Bacteria", "Fungi", "Sunlight", "Animals"], "answer": "Sunlight", "marks": 1 },
                        { "id": 6, "question": "Animals that are active at night are called:", "options": ["Diurnal", "Nocturnal", "Hibernating", "Migratory"], "answer": "Nocturnal", "marks": 1 },
                        { "id": 7, "question": "The study of the relationship between living things and their surroundings is:", "options": ["Ecology", "Geology", "Astronomy", "Physiology"], "answer": "Ecology", "marks": 1 },
                        { "id": 8, "question": "Which of these animals lives in a desert?", "options": ["Polar Bear", "Camel", "Penguin", "Shark"], "answer": "Camel", "marks": 1 },
                        { "id": 9, "question": "Organisms that break down dead matter are called:", "options": ["Producers", "Consumers", "Decomposers", "Predators"], "answer": "Decomposers", "marks": 1 },
                        { "id": 10, "question": "Plants are also known as:", "options": ["Consumers", "Producers", "Decomposers", "Scavengers"], "answer": "Producers", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define adaptation.", "marks": 1, "answer": "Adaptation is a change in an organism's body or behavior that helps it survive in its habitat." },
                        { "id": 12, "question": "Give an example of an amphibian.", "marks": 1, "answer": "Frog (or Toad/Salamander)." },
                        { "id": 13, "question": "What is a food web?", "marks": 1, "answer": "A network of interconnected food chains." },
                        { "id": 14, "question": "Name a plant that grows in water.", "marks": 1, "answer": "Lotus (or Water Lily/Hydrilla)." },
                        { "id": 15, "question": "What are terrestrial animals?", "marks": 1, "answer": "Animals that live on land." },
                        { "id": 16, "question": "Name one decomposer.", "marks": 1, "answer": "Bacteria (or Fungi/Mushroom)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the difference between biotic and abiotic components.", "marks": 6, "answer": "Biotic vs Abiotic:\n1. Biotic components are the living parts of the environment (Plants, Animals, Microorganisms).\n2. Abiotic components are the non-living parts of the environment (Air, Water, Soil, Sunlight, Temperature).\nBoth interact with each other to form an ecosystem." },
                        { "id": 18, "question": "How is a camel adapted to live in a desert?", "marks": 6, "answer": "Camel Adaptations:\n1. Hump: Stores fat for energy when food is scarce.\n2. Long Eyelashes: Protect eyes from sand.\n3. Padded Feet: Prevent sinking into the sand.\n4. Thick Skin: Protects from heat and cold.\n5. Water Conservation: Can drink lots of water at once and excrete very little." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the interdependence of plants and animals.", "marks": 6, "answer": "Plants and animals depend on each other:\n1. Oxygen-CO2 Balance: Plants give oxygen for animals to breathe; Animals give carbon dioxide for plants to make food.\n2. Food: Animals depend on plants for food (directly or indirectly).\n3. Pollination/Dispersal: Animals help plants in pollination and seed dispersal.\n4. Shelter: Plants provide shelter to many animals (birds, monkeys).\n5. Nutrients: Animal waste and dead bodies provide nutrients to plants." },
                        { "id": 20, "question": "Describe a simple food chain with an example.", "marks": 6, "answer": "A food chain shows the flow of energy from one organism to another through food.\nIt always starts with a producer (plant).\nExample:\nGrass (Producer) -> Grasshopper (Primary Consumer/Herbivore) -> Frog (Secondary Consumer/Carnivore) -> Snake (Tertiary Consumer).\nIn this chain, the grasshopper eats grass, the frog eats the grasshopper, and the snake eats the frog." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set A",
        content: {
            "title": "Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Who discovered the cell?", "options": ["Robert Brown", "Robert Hooke", "Charles Darwin", "Louis Pasteur"], "answer": "Robert Hooke", "marks": 1 },
                        { "id": 2, "question": "The control center of the cell is:", "options": ["Cytoplasm", "Nucleus", "Mitochondria", "Vacuole"], "answer": "Nucleus", "marks": 1 },
                        { "id": 3, "question": "The jelly-like substance inside the cell is called:", "options": ["Protoplasm", "Cytoplasm", "Nucleoplasm", "Serum"], "answer": "Cytoplasm", "marks": 1 },
                        { "id": 4, "question": "Which part is present only in plant cells?", "options": ["Cell Membrane", "Nucleus", "Cell Wall", "Ribosome"], "answer": "Cell Wall", "marks": 1 },
                        { "id": 5, "question": "The outer covering of an animal cell is:", "options": ["Cell Wall", "Cell Membrane", "Nuclear Membrane", "Capsule"], "answer": "Cell Membrane", "marks": 1 },
                        { "id": 6, "question": "Which organelle is called the 'Powerhouse of the cell'?", "options": ["Lysosome", "Mitochondria", "Golgi Body", "Ribosome"], "answer": "Mitochondria", "marks": 1 },
                        { "id": 7, "question": "Green plastids are called:", "options": ["Leucoplasts", "Chromoplasts", "Chloroplasts", "Protoplasts"], "answer": "Chloroplasts", "marks": 1 },
                        { "id": 8, "question": "The smallest cell is:", "options": ["Ostrich egg", "Nerve cell", "Mycoplasma (PPLO)", "Amoeba"], "answer": "Mycoplasma (PPLO)", "marks": 1 },
                        { "id": 9, "question": "A group of similar cells performing a specific function is called:", "options": ["Organ", "Tissue", "System", "Organism"], "answer": "Tissue", "marks": 1 },
                        { "id": 10, "question": "Which stain is used to color onion peel cells?", "options": ["Iodine", "Safranin", "Methylene Blue", "Alcohol"], "answer": "Safranin", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define cell.", "marks": 1, "answer": "Cell is the structural and functional unit of life." },
                        { "id": 12, "question": "Name the longest cell in the human body.", "marks": 1, "answer": "Nerve cell (Neuron)." },
                        { "id": 13, "question": "What is the function of the cell wall?", "marks": 1, "answer": "It provides shape, rigidity, and protection to the plant cell." },
                        { "id": 14, "question": "Name the unit of inheritance located in the nucleus.", "marks": 1, "answer": "Genes (on Chromosomes)." },
                        { "id": 15, "question": "What is a tissue?", "marks": 1, "answer": "A group of cells similar in structure and function." },
                        { "id": 16, "question": "Who discovered the nucleus?", "marks": 1, "answer": "Robert Brown." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "State the three main points of the Cell Theory.", "marks": 6, "answer": "Cell Theory states:\n1. All living organisms are made up of cells.\n2. The cell is the basic structural and functional unit of life.\n3. All cells arise from pre-existing cells." },
                        { "id": 18, "question": "What are the functions of the nucleus?", "marks": 6, "answer": "Functions of Nucleus:\n1. It controls all the activities of the cell.\n2. It plays a central role in cell division.\n3. It contains chromosomes which carry genes responsible for the transfer of characters from parents to offspring." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Differentiate between Plant Cell and Animal Cell.", "marks": 6, "answer": "Plant Cell vs Animal Cell:\n1. Cell Wall: Present in Plant Cell; Absent in Animal Cell.\n2. Plastids: Present in Plant Cell (Chloroplasts); Absent in Animal Cell.\n3. Vacuoles: Large, central vacuole in Plant Cell; Small, temporary or absent in Animal Cell.\n4. Centrosome: Absent in Plant Cell; Present in Animal Cell.\n5. Shape: Usually rectangular/fixed; Usually irregular/round." },
                        { "id": 20, "question": "Draw a labeled diagram of an Animal Cell (Description).", "marks": 6, "answer": "[Diagram Question - Student should draw]\nKey labels to include:\n- Cell Membrane (Outer boundary)\n- Cytoplasm (Jelly-like filling)\n- Nucleus (Central spherical body)\n- Nuclear Membrane (Surrounding nucleus)\n- Mitochondria (Rod-shaped)\n- Vacuole (Small bubbles)" }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set B",
        content: {
            "title": "Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which organelle is known as the 'Kitchen of the cell'?", "options": ["Mitochondria", "Chloroplast", "Ribosome", "Vacuole"], "answer": "Chloroplast", "marks": 1 },
                        { "id": 2, "question": "Ribosomes are the site for:", "options": ["Fat synthesis", "Protein synthesis", "Starch synthesis", "Sugar synthesis"], "answer": "Protein synthesis", "marks": 1 },
                        { "id": 3, "question": "The empty spaces in the cytoplasm are called:", "options": ["Plastids", "Vacuoles", "Granules", "Nucleoli"], "answer": "Vacuoles", "marks": 1 },
                        { "id": 4, "question": "Which of these is a unicellular organism?", "options": ["Man", "Mango", "Amoeba", "Mosquito"], "answer": "Amoeba", "marks": 1 },
                        { "id": 5, "question": "Chromosomes are found inside the:", "options": ["Cytoplasm", "Nucleus", "Vacuole", "Plastid"], "answer": "Nucleus", "marks": 1 },
                        { "id": 6, "question": "The membrane surrounding the vacuole is called:", "options": ["Cell membrane", "Tonoplast", "Nuclear membrane", "Cell wall"], "answer": "Tonoplast", "marks": 1 },
                        { "id": 7, "question": "Which organelle is responsible for cell division in animal cells?", "options": ["Centrosome", "Chloroplast", "Lysosome", "Ribosome"], "answer": "Centrosome", "marks": 1 },
                        { "id": 8, "question": "The largest cell is:", "options": ["Hen's egg", "Ostrich egg", "Nerve cell", "Bacteria"], "answer": "Ostrich egg", "marks": 1 },
                        { "id": 9, "question": "Colourless plastids are called:", "options": ["Chloroplasts", "Chromoplasts", "Leucoplasts", "Protoplasts"], "answer": "Leucoplasts", "marks": 1 },
                        { "id": 10, "question": "The living substance of the cell is:", "options": ["Cytoplasm", "Nucleoplasm", "Protoplasm", "Cell sap"], "answer": "Protoplasm", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the function of mitochondria?", "marks": 1, "answer": "It produces energy for the cell (Cellular Respiration)." },
                        { "id": 12, "question": "Name the pigment present in chloroplasts.", "marks": 1, "answer": "Chlorophyll." },
                        { "id": 13, "question": "What is the function of Leucoplasts?", "marks": 1, "answer": "Storage of food (starch, oils, proteins)." },
                        { "id": 14, "question": "Name the organelle called 'Suicide Bag'.", "marks": 1, "answer": "Lysosome." },
                        { "id": 15, "question": "What is the shape of an Amoeba?", "marks": 1, "answer": "Irregular (changes shape)." },
                        { "id": 16, "question": "Name the fluid present inside the nucleus.", "marks": 1, "answer": "Nucleoplasm." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write the functions of the Cell Membrane.", "marks": 6, "answer": "Functions of Cell Membrane:\n1. It protects the inner parts of the cell.\n2. It gives shape to the animal cell.\n3. It is selectively permeable, meaning it allows only certain substances to enter and leave the cell." },
                        { "id": 18, "question": "Explain the structure of the Nucleus.", "marks": 6, "answer": "Structure of Nucleus:\n1. Nuclear Membrane: Double-layered covering with pores.\n2. Nucleoplasm: Dense fluid inside.\n3. Nucleolus: Small spherical body rich in RNA.\n4. Chromatin Network: Thread-like structures that form chromosomes during division." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the different types of plastids.", "marks": 6, "answer": "Types of Plastids (found only in plants):\n1. Chloroplasts: Green plastids containing chlorophyll. They help in photosynthesis (Kitchen of the cell).\n2. Chromoplasts: Coloured plastids (red, orange, yellow). They give colour to flowers and fruits to attract insects.\n3. Leucoplasts: Colourless plastids. They store food like starch, proteins, and fats. Found in roots and underground stems." },
                        { "id": 20, "question": "Draw a labeled diagram of a Plant Cell (Description).", "marks": 6, "answer": "[Diagram Question - Student should draw]\nKey labels to include:\n- Cell Wall (Thick outer layer)\n- Cell Membrane (Inner to cell wall)\n- Large Vacuole (Central)\n- Chloroplasts (Green ovals)\n- Nucleus (Pushed to side)\n- Cytoplasm" }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set C",
        content: {
            "title": "Biology Practice Paper - Chapter 3: Cell: The structure and functions - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which cells in the human body can change their shape?", "options": ["Nerve cells", "Muscle cells", "White Blood Cells (WBC)", "Skin cells"], "answer": "White Blood Cells (WBC)", "marks": 1 },
                        { "id": 2, "question": "The thread-like structures in the nucleus are called:", "options": ["Chromatin", "Ribosomes", "Lysosomes", "Centrioles"], "answer": "Chromatin", "marks": 1 },
                        { "id": 3, "question": "Which of these is NOT a part of the cell theory?", "options": ["All living things are made of cells", "Cells come from pre-existing cells", "All cells have a cell wall", "Cell is the basic unit of life"], "answer": "All cells have a cell wall", "marks": 1 },
                        { "id": 4, "question": "Prokaryotic cells lack:", "options": ["Cell membrane", "Cytoplasm", "Well-defined nucleus", "Ribosomes"], "answer": "Well-defined nucleus", "marks": 1 },
                        { "id": 5, "question": "The function of the Golgi Body is:", "options": ["Respiration", "Secretion and packaging", "Digestion", "Photosynthesis"], "answer": "Secretion and packaging", "marks": 1 },
                        { "id": 6, "question": "Red Blood Cells (RBC) are shaped like:", "options": ["Spindle", "Disc (Biconcave)", "Irregular", "Long and branched"], "answer": "Disc (Biconcave)", "marks": 1 },
                        { "id": 7, "question": "Muscle cells are:", "options": ["Spherical", "Spindle-shaped", "Rectangular", "Branched"], "answer": "Spindle-shaped", "marks": 1 },
                        { "id": 8, "question": "The network of tubes for transport within the cell is:", "options": ["Golgi Body", "Endoplasmic Reticulum", "Mitochondria", "Lysosome"], "answer": "Endoplasmic Reticulum", "marks": 1 },
                        { "id": 9, "question": "Genes are responsible for:", "options": ["Energy production", "Digestion", "Transfer of characters", "Movement"], "answer": "Transfer of characters", "marks": 1 },
                        { "id": 10, "question": "Which organism is an exception to the cell theory (acellular)?", "options": ["Bacteria", "Virus", "Fungi", "Algae"], "answer": "Virus", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a prokaryotic cell?", "marks": 1, "answer": "A cell without a well-defined nucleus (e.g., Bacteria)." },
                        { "id": 12, "question": "What is a eukaryotic cell?", "marks": 1, "answer": "A cell with a well-defined nucleus and membrane-bound organelles." },
                        { "id": 13, "question": "Name the organelle that helps in protein synthesis.", "marks": 1, "answer": "Ribosome." },
                        { "id": 14, "question": "What is the function of the nerve cell?", "marks": 1, "answer": "To transmit messages (impulses) between brain and body parts." },
                        { "id": 15, "question": "Why are RBCs red?", "marks": 1, "answer": "Due to the presence of hemoglobin." },
                        { "id": 16, "question": "Name the pores on the nuclear membrane.", "marks": 1, "answer": "Nuclear pores." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Why is the cell called the structural and functional unit of life?", "marks": 6, "answer": "1. Structural Unit: All living organisms are made up of cells, just as a building is made of bricks. It provides structure to the body.\n2. Functional Unit: All life functions (respiration, digestion, excretion, etc.) are performed by the cells. The collective function of cells keeps the organism alive." },
                        { "id": 18, "question": "Differentiate between Protoplasm and Cytoplasm.", "marks": 6, "answer": "Protoplasm vs Cytoplasm:\n1. Protoplasm: It is the total living matter of the cell. It includes the Cytoplasm AND the Nucleus. (Protoplasm = Cytoplasm + Nucleus).\n2. Cytoplasm: It is the jelly-like substance between the cell membrane and the nucleus. It contains organelles." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain how the shape of cells is related to their function with examples.", "marks": 6, "answer": "Cell shape is adapted to function:\n1. Nerve Cell: Long and branched to carry messages over long distances.\n2. RBC: Biconcave disc shape to increase surface area for carrying oxygen and to squeeze through capillaries.\n3. Muscle Cell: Spindle-shaped and contractile to help in movement.\n4. Skin Cell: Flat to cover and protect the body.\n5. WBC: Irregular (amoeboid) to squeeze out of capillaries and engulf germs." },
                        { "id": 20, "question": "Describe the structure and function of the Endoplasmic Reticulum (ER).", "marks": 6, "answer": "Endoplasmic Reticulum (ER):\nStructure: A network of membranous tubes and sheets distributed in the cytoplasm. It is connected to the nuclear membrane.\nTypes:\n1. Rough ER (RER): Has ribosomes attached; helps in protein synthesis.\n2. Smooth ER (SER): No ribosomes; helps in fat/lipid synthesis.\nFunction: It acts as a transport system for moving materials within the cell and provides mechanical support." }
                    ]
                }
            ]
        }
    }
];

async function regeneratePapers() {
    const db = await initDatabase();
    
    for (const paperData of papersToRegenerate) {
        const title = paperData.title;
        console.log(`Processing: ${title}`);
        
        // Check if paper exists
        const paper = await db.get('SELECT * FROM question_papers WHERE title = ?', title);
        
        if (!paper) {
            console.error(`Paper with title "${title}" not found! Skipping...`);
            // Optional: Create if not exists? The prompt implies regeneration, so it should exist.
            // But if titles are slightly off, we might want to search.
            // For now, strict match.
            continue;
        }

        console.log(`Found paper ID: ${paper.id}. Updating content...`);

        await db.run(
            'UPDATE question_papers SET content = ? WHERE id = ?',
            JSON.stringify(paperData.content),
            paper.id
        );

        console.log(`Paper "${title}" updated successfully!`);
        console.log('---');
    }
}

regeneratePapers().catch(console.error);
