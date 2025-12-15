import { initDatabase } from '../db/database';

const papers = [
  {
    subject: 'Maths',
    title: 'Annual Examination - Mathematics',
    content: {
      title: "Annual Examination - Mathematics",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Multiple Choice (10 Marks)",
          questions: [
            { id: 1, marks: 2, question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?", options: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3, 4, 5}"], answer: "{3}" },
            { id: 2, marks: 2, question: "The ratio of 50cm to 2.5m is:", options: ["1:5", "1:50", "20:1", "1:20"], answer: "1:5" },
            { id: 3, marks: 2, question: "Which of the following is a simple equation?", options: ["2x + 5", "2x + 5 = 9", "x > 5", "3x - 2"], answer: "2x + 5 = 9" },
            { id: 4, marks: 2, question: "The sum of angles in a quadrilateral is:", options: ["180°", "270°", "360°", "90°"], answer: "360°" },
            { id: 5, marks: 2, question: "Find the mean of the first 5 natural numbers.", options: ["2", "3", "4", "5"], answer: "3" }
          ]
        },
        {
          name: "Section B: Short Answer (20 Marks)",
          questions: [
            { id: 6, marks: 4, question: "A car travels 150 km in 3 hours. Find its speed and the distance it will cover in 5 hours.", answer: "Speed = 50 km/hr. Distance in 5 hours = 250 km." },
            { id: 7, marks: 4, question: "Convert 0.75 into a percentage and 45% into a fraction in simplest form.", answer: "0.75 = 75%. 45% = 9/20." },
            { id: 8, marks: 4, question: "Solve for x: 3x - 7 = 14.", answer: "3x = 21 => x = 7." },
            { id: 9, marks: 4, question: "Find the value of 'a' if the angles of a quadrilateral are 50°, 130°, 120°, and 'a'.", answer: "50+130+120+a = 360 => 300+a = 360 => a = 60°." },
            { id: 10, marks: 4, question: "Define a regular polygon. Name a regular polygon with 4 sides.", answer: "A polygon with all sides and angles equal. Square." }
          ]
        },
        {
          name: "Section C: Long Answer (20 Marks)",
          questions: [
            { id: 11, marks: 10, question: "Construct a triangle ABC where AB = 5cm, BC = 6cm and AC = 7cm. Measure angle B using a protractor.", answer: "Construction steps required." },
            { id: 12, marks: 10, question: "The marks obtained by 10 students are: 12, 15, 18, 12, 20, 15, 12, 18, 20, 15. Find the Mean and Median marks.", answer: "Mean = 15.7, Median = 15." }
          ]
        }
      ]
    }
  },
  {
    subject: 'Physics',
    title: 'Annual Examination - Physics',
    content: {
      title: "Annual Examination - Physics",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Multiple Choice (10 Marks)",
          questions: [
            { id: 1, marks: 2, question: "Which of these is a non-magnetic substance?", options: ["Iron", "Nickel", "Wood", "Cobalt"], answer: "Wood" },
            { id: 2, marks: 2, question: "Light travels in a:", options: ["Curved line", "Zig-zag line", "Straight line", "Random path"], answer: "Straight line" },
            { id: 3, marks: 2, question: "The SI unit of Force is:", options: ["Joule", "Newton", "Pascal", "Watt"], answer: "Newton" },
            { id: 4, marks: 2, question: "A pulley is used to:", options: ["Increase friction", "Change direction of force", "Stop motion", "Measure weight"], answer: "Change direction of force" },
            { id: 5, marks: 2, question: "Which class of lever is a pair of scissors?", options: ["Class I", "Class II", "Class III", "None"], answer: "Class I" }
          ]
        },
        {
          name: "Section B: Short Answer (20 Marks)",
          questions: [
            { id: 6, marks: 4, question: "Differentiate between Luminous and Non-luminous objects with examples.", answer: "Luminous emit light (Sun), Non-luminous reflect light (Moon)." },
            { id: 7, marks: 4, question: "State the laws of reflection.", answer: "1. Angle of incidence = Angle of reflection. 2. Incident ray, reflected ray, and normal lie on the same plane." },
            { id: 8, marks: 4, question: "What is friction? State one advantage and one disadvantage.", answer: "Opposing force. Adv: Walking. Disadv: Wear and tear." },
            { id: 9, marks: 4, question: "Define 'Magnetic Field'. Draw the magnetic field lines of a bar magnet.", answer: "Region around a magnet where magnetic force is felt. Lines move N to S outside." },
            { id: 10, marks: 4, question: "Explain the working of a wedge with an example.", answer: "Simple machine with two inclined planes (e.g., Knife, Axe)." }
          ]
        },
        {
          name: "Section C: Long Answer (20 Marks)",
          questions: [
            { id: 11, marks: 10, question: "Describe an experiment to show that light travels in a straight line.", answer: "Cardboard experiment description with diagram." },
            { id: 12, marks: 10, question: "How can you make a temporary magnet using the stroking method? Explain with a diagram.", answer: "Single touch method description." }
          ]
        }
      ]
    }
  },
  {
    subject: 'Chemistry',
    title: 'Annual Examination - Chemistry',
    content: {
      title: "Annual Examination - Chemistry",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Multiple Choice (10 Marks)",
          questions: [
            { id: 1, marks: 2, question: "The percentage of Nitrogen in air is approximately:", options: ["21%", "78%", "0.03%", "1%"], answer: "78%" },
            { id: 2, marks: 2, question: "Water is a:", options: ["Element", "Compound", "Mixture", "Atom"], answer: "Compound" },
            { id: 3, marks: 2, question: "The symbol for Potassium is:", options: ["P", "Po", "K", "Pt"], answer: "K" },
            { id: 4, marks: 2, question: "Filtration is used to separate:", options: ["Solid-Liquid mixture", "Liquid-Liquid mixture", "Gas-Gas mixture", "Solid-Solid mixture"], answer: "Solid-Liquid mixture" },
            { id: 5, marks: 2, question: "Which gas supports combustion?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], answer: "Oxygen" }
          ]
        },
        {
          name: "Section B: Short Answer (20 Marks)",
          questions: [
            { id: 6, marks: 4, question: "Define 'Saturated Solution'. How can you make it unsaturated?", answer: "No more solute dissolves. Heat it or add more solvent." },
            { id: 7, marks: 4, question: "Write the chemical formula for: Water, Carbon Dioxide, Common Salt, Sulphuric Acid.", answer: "H2O, CO2, NaCl, H2SO4." },
            { id: 8, marks: 4, question: "Explain the importance of the Ozone layer.", answer: "Protects from harmful UV rays." },
            { id: 9, marks: 4, question: "Differentiate between Elements and Compounds.", answer: "Element: One type of atom. Compound: Two or more elements chemically combined." },
            { id: 10, marks: 4, question: "What is 'Potable Water'? List two properties.", answer: "Fit for drinking. Colorless, odorless, free from germs." }
          ]
        },
        {
          name: "Section C: Long Answer (20 Marks)",
          questions: [
            { id: 11, marks: 10, question: "Describe the Water Cycle with a neat labeled diagram.", answer: "Evaporation -> Condensation -> Precipitation -> Collection." },
            { id: 12, marks: 10, question: "Describe an experiment to show that air contains water vapor.", answer: "Glass with ice experiment showing droplets on the outside." }
          ]
        }
      ]
    }
  },
  {
    subject: 'Biology',
    title: 'Annual Examination - Biology',
    content: {
      title: "Annual Examination - Biology",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Multiple Choice (10 Marks)",
          questions: [
            { id: 1, marks: 2, question: "The male reproductive part of a flower is:", options: ["Pistil", "Stamen", "Sepal", "Petal"], answer: "Stamen" },
            { id: 2, marks: 2, question: "Which organ filters blood in the human body?", options: ["Heart", "Lungs", "Kidney", "Liver"], answer: "Kidney" },
            { id: 3, marks: 2, question: "The structural and functional unit of life is:", options: ["Tissue", "Organ", "Cell", "System"], answer: "Cell" },
            { id: 4, marks: 2, question: "Which vitamin deficiency causes Scurvy?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin C" },
            { id: 5, marks: 2, question: "Cactus is adapted to grow in:", options: ["Aquatic habitat", "Desert habitat", "Mountain habitat", "Grassland"], answer: "Desert habitat" }
          ]
        },
        {
          name: "Section B: Short Answer (20 Marks)",
          questions: [
            { id: 6, marks: 4, question: "Draw a labeled diagram of a typical cell (Plant or Animal).", answer: "Diagram required." },
            { id: 7, marks: 4, question: "What are the functions of the Skeleton?", answer: "Support, Protection, Movement, Blood cell formation." },
            { id: 8, marks: 4, question: "Explain the process of pollination.", answer: "Transfer of pollen from anther to stigma." },
            { id: 9, marks: 4, question: "List three ways to maintain personal hygiene.", answer: "Bathing, Brushing, Washing hands." },
            { id: 10, marks: 4, question: "How is a camel adapted to desert life?", answer: "Hump for fat, long lashes, padded feet." }
          ]
        },
        {
          name: "Section C: Long Answer (20 Marks)",
          questions: [
            { id: 11, marks: 10, question: "Describe the human digestive system with a diagram. Mention the function of the stomach and small intestine.", answer: "Digestion process description." },
            { id: 12, marks: 10, question: "Explain the structure and function of the human heart.", answer: "4 chambers, pumping blood, arteries/veins." }
          ]
        }
      ]
    }
  },
  {
    subject: 'History',
    title: 'Annual Examination - History & Civics',
    content: {
      title: "Annual Examination - History & Civics",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Multiple Choice (10 Marks)",
          questions: [
            { id: 1, marks: 2, question: "The founder of Buddhism was:", options: ["Mahavira", "Gautama Buddha", "Ashoka", "Chandragupta"], answer: "Gautama Buddha" },
            { id: 2, marks: 2, question: "The Arthashastra was written by:", options: ["Megasthenes", "Chanakya", "Kalidasa", "Harisena"], answer: "Chanakya" },
            { id: 3, marks: 2, question: "The head of the Gram Panchayat is called:", options: ["Sarpanch", "Mayor", "Commissioner", "District Magistrate"], answer: "Sarpanch" },
            { id: 4, marks: 2, question: "The Gupta period is known as the:", options: ["Dark Age", "Golden Age", "Iron Age", "Bronze Age"], answer: "Golden Age" },
            { id: 5, marks: 2, question: "The capital of the Mauryan Empire was:", options: ["Taxila", "Ujjain", "Pataliputra", "Vaishali"], answer: "Pataliputra" }
          ]
        },
        {
          name: "Section B: Short Answer (20 Marks)",
          questions: [
            { id: 6, marks: 4, question: "What are the 'Four Noble Truths' of Buddhism?", answer: "Life is suffering, cause is desire, end desire to end suffering, follow Eightfold path." },
            { id: 7, marks: 4, question: "Write a short note on Ashoka's Dhamma.", answer: "Code of conduct, non-violence, respect for elders." },
            { id: 8, marks: 4, question: "Who was Samudragupta? Why is he called the 'Napoleon of India'?", answer: "Great Gupta ruler, extensive conquests." },
            { id: 9, marks: 4, question: "Differentiate between Gram Sabha and Gram Panchayat.", answer: "Sabha: General body of voters. Panchayat: Elected executive body." },
            { id: 10, marks: 4, question: "What are the functions of the Municipal Corporation?", answer: "Water supply, garbage disposal, roads, street lights." }
          ]
        },
        {
          name: "Section C: Long Answer (20 Marks)",
          questions: [
            { id: 11, marks: 10, question: "Describe the administration of the Mauryan Empire.", answer: "Central, Provincial, District, Village administration. Spy system." },
            { id: 12, marks: 10, question: "Explain the main features of the Later Vedic Period (Society and Religion).", answer: "Caste system rigid, rise of Brahma/Vishnu/Shiva, expensive rituals." }
          ]
        }
      ]
    }
  },
  {
    subject: 'Geography',
    title: 'Annual Examination - Geography',
    content: {
      title: "Annual Examination - Geography",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Multiple Choice (10 Marks)",
          questions: [
            { id: 1, marks: 2, question: "The Andes mountain range is located in:", options: ["North America", "South America", "Africa", "Europe"], answer: "South America" },
            { id: 2, marks: 2, question: "Which color represents water bodies on a map?", options: ["Green", "Brown", "Blue", "Yellow"], answer: "Blue" },
            { id: 3, marks: 2, question: "The Amazon river flows through:", options: ["Brazil", "Egypt", "China", "USA"], answer: "Brazil" },
            { id: 4, marks: 2, question: "Cash crops are grown primarily for:", options: ["Home consumption", "Sale in market", "Animal feed", "Decoration"], answer: "Sale in market" },
            { id: 5, marks: 2, question: "A piece of land surrounded by water on three sides is a:", options: ["Island", "Peninsula", "Strait", "Isthmus"], answer: "Peninsula" }
          ]
        },
        {
          name: "Section B: Short Answer (20 Marks)",
          questions: [
            { id: 6, marks: 4, question: "Define 'Agriculture'. Name two food crops.", answer: "Cultivation of land. Rice, Wheat." },
            { id: 7, marks: 4, question: "What is a Map? How is it different from a Globe?", answer: "2D representation vs 3D model." },
            { id: 8, marks: 4, question: "Name the major physical divisions of South America.", answer: "Andes, Eastern Highlands, Central Lowlands, Coastal Plains." },
            { id: 9, marks: 4, question: "What are Minerals? Give examples of metallic minerals.", answer: "Natural substances. Iron, Copper, Gold." },
            { id: 10, marks: 4, question: "Explain the term 'Plateau'. Name one famous plateau.", answer: "Flat-topped tableland. Deccan Plateau / Tibetan Plateau." }
          ]
        },
        {
          name: "Section C: Long Answer (20 Marks)",
          questions: [
            { id: 11, marks: 10, question: "Describe the climate and vegetation of the Amazon Basin.", answer: "Equatorial climate, hot/wet, dense rainforests (Selvas)." },
            { id: 12, marks: 10, question: "Draw a conventional symbol for: (a) River (b) Temple (c) Railway line (d) Post Office (e) Bridge.", answer: "Drawing required." }
          ]
        }
      ]
    }
  },
  {
    subject: 'Computer',
    title: 'Annual Examination - Computer Applications',
    content: {
      title: "Annual Examination - Computer Applications",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Multiple Choice (10 Marks)",
          questions: [
            { id: 1, marks: 2, question: "HTML stands for:", options: ["Hyper Text Markup Language", "High Tech Mail Link", "Hyper Transfer Main Line", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
            { id: 2, marks: 2, question: "In QBasic, which command is used to print output?", options: ["INPUT", "PRINT", "CLS", "END"], answer: "PRINT" },
            { id: 3, marks: 2, question: "Which tag is used to insert an image in HTML?", options: ["<img>", "<pic>", "<image>", "<src>"], answer: "<img>" },
            { id: 4, marks: 2, question: "Scratch is a ______ programming language.", options: ["Text-based", "Block-based", "Binary", "Assembly"], answer: "Block-based" },
            { id: 5, marks: 2, question: "To start a presentation in PowerPoint, press:", options: ["F1", "F5", "F12", "Esc"], answer: "F5" }
          ]
        },
        {
          name: "Section B: Short Answer (20 Marks)",
          questions: [
            { id: 6, marks: 4, question: "What is a Web Browser? Give two examples.", answer: "Software to access internet. Chrome, Firefox." },
            { id: 7, marks: 4, question: "Explain the use of 'INPUT' statement in QBasic with an example.", answer: "Takes user input. INPUT \"Enter Name\"; N$" },
            { id: 8, marks: 4, question: "What are the basic structure tags of an HTML document?", answer: "<html>, <head>, <title>, <body>." },
            { id: 9, marks: 4, question: "What is a Sprite in Scratch?", answer: "Character or object that performs actions." },
            { id: 10, marks: 4, question: "Define 'Animation' in Presentation software.", answer: "Visual effects applied to individual objects on a slide." }
          ]
        },
        {
          name: "Section C: Long Answer (20 Marks)",
          questions: [
            { id: 11, marks: 10, question: "Write a QBasic program to accept two numbers and print their sum and product.", answer: "CLS \n INPUT A \n INPUT B \n S = A + B \n P = A * B \n PRINT S \n PRINT P \n END" },
            { id: 12, marks: 10, question: "Write the HTML code to create a webpage with a red background, a heading 'My School', and a paragraph describing it.", answer: "<body bgcolor='red'> <h1>My School</h1> <p>...</p> </body>" }
          ]
        }
      ]
    }
  },
  {
    subject: 'English',
    title: 'Annual Examination - English Language',
    content: {
      title: "Annual Examination - English Language",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Grammar (20 Marks)",
          questions: [
            { id: 1, marks: 5, question: "Fill in the blanks with suitable Prepositions: (a) The cat jumped ___ the table. (b) He is fond ___ music.", answer: "(a) upon/on (b) of" },
            { id: 2, marks: 5, question: "Change the Tense: (a) She sings a song (to Past Continuous). (b) They played football (to Future Simple).", answer: "(a) She was singing a song. (b) They will play football." },
            { id: 3, marks: 5, question: "Change to Indirect Speech: He said, 'I am busy now.'", answer: "He said that he was busy then." },
            { id: 4, marks: 5, question: "Identify the Adjectives: The brave soldier fought a difficult battle.", answer: "brave, difficult" }
          ]
        },
        {
          name: "Section B: Writing Skills (20 Marks)",
          questions: [
            { id: 5, marks: 10, question: "Write a letter to your friend inviting him/her to your birthday party.", answer: "Format: Address, Date, Salutation, Body, Closing." },
            { id: 6, marks: 10, question: "Write a Narrative Essay on 'A Visit to a Historical Place'.", answer: "Essay writing." }
          ]
        },
        {
          name: "Section C: Comprehension (10 Marks)",
          questions: [
            { id: 7, marks: 10, question: "Read the passage (provided in exam) and answer the questions.", answer: "Comprehension answers." }
          ]
        }
      ]
    }
  },
  {
    subject: 'English',
    title: 'Annual Examination - English Literature',
    content: {
      title: "Annual Examination - English Literature",
      school: "DPS Megacity",
      class: "Class 6 ICSE",
      sections: [
        {
          name: "Section A: Context Questions (20 Marks)",
          questions: [
            { id: 1, marks: 10, question: "Reference: 'The woods are lovely, dark and deep...' (a) Name the poem and poet. (b) Why does the poet stop? (c) What promises does he have to keep?", answer: "(a) Stopping by Woods on a Snowy Evening, Robert Frost." },
            { id: 2, marks: 10, question: "Reference: 'The Remarkable Rocket' (a) Who is the speaker? (b) Why did he think he was remarkable?", answer: "Oscar Wilde's story context." }
          ]
        },
        {
          name: "Section B: Short Answer (15 Marks)",
          questions: [
            { id: 3, marks: 5, question: "Why was the cyber friend a mystery?", answer: "Virtual identity vs reality." },
            { id: 4, marks: 5, question: "What is the theme of the poem 'To India: My Native Land'?", answer: "Patriotism, past glory of India." },
            { id: 5, marks: 5, question: "Describe the character of Ivan in 'The Lottery Ticket'.", answer: "Middle class, content but then greedy." }
          ]
        },
        {
          name: "Section C: Long Answer (15 Marks)",
          questions: [
            { id: 6, marks: 15, question: "How does the story 'The Lottery Ticket' show the effect of money on human relationships?", answer: "Detailed analysis of greed and suspicion." }
          ]
        }
      ]
    }
  }
];

async function seedPapers() {
    console.log('Initializing database...');
    const db = await initDatabase();

    for (const paper of papers) {
        console.log(`Seeding paper for ${paper.subject}: ${paper.title}`);
        
        // Find subject ID
        // Note: English matches multiple (Language/Literature), so we might need specific logic or just pick one.
        // For simplicity, I'll try to match loosely or insert for the first match.
        // Actually, let's get the ID.
        let subjectId;
        if (paper.title.includes('Literature')) {
             const sub = await db.get('SELECT id FROM subjects WHERE name LIKE ?', '%Literature%');
             if (!sub) {
                 // Fallback if "English Literature" isn't explicitly named, maybe just "English"
                 const sub2 = await db.get('SELECT id FROM subjects WHERE name = "English"');
                 subjectId = sub2?.id;
             } else {
                 subjectId = sub.id;
             }
        } else if (paper.title.includes('Language')) {
             const sub = await db.get('SELECT id FROM subjects WHERE name LIKE ?', '%Language%');
             if (!sub) {
                 const sub2 = await db.get('SELECT id FROM subjects WHERE name = "English"');
                 subjectId = sub2?.id;
             } else {
                 subjectId = sub.id;
             }
        } else {
            const sub = await db.get('SELECT id FROM subjects WHERE name LIKE ?', `%${paper.subject}%`);
            subjectId = sub?.id;
        }

        if (subjectId) {
            await db.run(
                'INSERT INTO question_papers (subject_id, title, content) VALUES (?, ?, ?)',
                subjectId,
                paper.title,
                JSON.stringify(paper.content)
            );
            console.log(`Saved.`);
        } else {
            console.log(`Subject not found for ${paper.subject}`);
        }
    }
    console.log('Done.');
}

seedPapers().catch(console.error);
