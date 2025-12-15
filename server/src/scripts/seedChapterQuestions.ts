import { initDatabase } from '../db/database';

const chapterData = [
  {
    subject: 'Maths',
    chapters: [
      {
        name: 'Fractions',
        questions: {
          title: "Practice Paper - Fractions",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Which of the following is a proper fraction?", options: ["3/2", "5/4", "2/3", "7/5"], answer: "2/3" },
                { id: 2, marks: 1, question: "The equivalent fraction of 2/5 with denominator 20 is:", options: ["4/20", "8/20", "10/20", "12/20"], answer: "8/20" },
                { id: 3, marks: 1, question: "Sum of 1/4 and 1/4 is:", options: ["2/8", "1/2", "1/8", "2/4"], answer: "1/2" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 4, marks: 2, question: "Convert 13/4 into a mixed fraction.", answer: "3 1/4" },
                { id: 5, marks: 2, question: "Simplify: 2/3 + 1/6", answer: "4/6 + 1/6 = 5/6" }
              ]
            },
            {
              name: "Section C: Long Answer",
              questions: [
                { id: 6, marks: 4, question: "Arrange the following fractions in ascending order: 2/3, 1/6, 5/9.", answer: "LCM of 3, 6, 9 is 18. 12/18, 3/18, 10/18. Order: 1/6, 5/9, 2/3." }
              ]
            }
          ]
        }
      },
      {
        name: 'Decimals',
        questions: {
          title: "Practice Paper - Decimals",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "0.5 + 0.05 = ?", options: ["0.55", "0.505", "0.055", "5.5"], answer: "0.55" },
                { id: 2, marks: 1, question: "Which is greater?", options: ["0.7", "0.07", "0.007", "0.0007"], answer: "0.7" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Convert 3/4 into a decimal.", answer: "0.75" },
                { id: 4, marks: 2, question: "Write 20.5 in words.", answer: "Twenty point five" }
              ]
            }
          ]
        }
      },
      {
        name: 'Algebra',
        questions: {
          title: "Practice Paper - Algebra",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "The value of x in x + 5 = 10 is:", options: ["2", "5", "10", "15"], answer: "5" },
                { id: 2, marks: 1, question: "2x means:", options: ["2 + x", "2 - x", "2 multiplied by x", "x multiplied by x"], answer: "2 multiplied by x" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Write an algebraic expression for: 5 added to y.", answer: "y + 5" },
                { id: 4, marks: 2, question: "If a = 2 and b = 3, find the value of 2a + b.", answer: "2(2) + 3 = 4 + 3 = 7" }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    subject: 'Physics',
    chapters: [
      {
        name: 'Force',
        questions: {
          title: "Practice Paper - Force",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Which of these is a contact force?", options: ["Magnetic force", "Gravitational force", "Friction", "Electrostatic force"], answer: "Friction" },
                { id: 2, marks: 1, question: "SI unit of force is:", options: ["Joule", "Newton", "Pascal", "Watt"], answer: "Newton" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Define Force.", answer: "A push or pull acting on an object." },
                { id: 4, marks: 2, question: "Give two effects of force.", answer: "Can change speed, can change direction." }
              ]
            }
          ]
        }
      },
      {
        name: 'Light',
        questions: {
          title: "Practice Paper - Light",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Light travels in:", options: ["Curved lines", "Straight lines", "Zigzag lines", "Circles"], answer: "Straight lines" },
                { id: 2, marks: 1, question: "Which is a natural source of light?", options: ["Bulb", "Sun", "Candle", "Torch"], answer: "Sun" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "What is a shadow?", answer: "A dark area formed when light is blocked by an opaque object." },
                { id: 4, marks: 2, question: "Differentiate between transparent and opaque objects.", answer: "Transparent allows light to pass (glass); Opaque does not (wood)." }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    subject: 'Chemistry',
    chapters: [
      {
        name: 'Matter',
        questions: {
          title: "Practice Paper - Matter",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Which state of matter has a fixed shape?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Solid" },
                { id: 2, marks: 1, question: "The space occupied by matter is called:", options: ["Mass", "Volume", "Density", "Weight"], answer: "Volume" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Define Matter.", answer: "Anything that has mass and occupies space." },
                { id: 4, marks: 2, question: "Why do gases flow?", answer: "Because their particles are loosely packed and can move freely." }
              ]
            }
          ]
        }
      },
      {
        name: 'Water',
        questions: {
          title: "Practice Paper - Water",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Water boils at:", options: ["0°C", "50°C", "100°C", "150°C"], answer: "100°C" },
                { id: 2, marks: 1, question: "Which is the universal solvent?", options: ["Alcohol", "Water", "Oil", "Acid"], answer: "Water" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "What is the chemical formula of water?", answer: "H2O" },
                { id: 4, marks: 2, question: "Name two methods to purify water.", answer: "Boiling, Filtration." }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    subject: 'Biology',
    chapters: [
      {
        name: 'The Leaf',
        questions: {
          title: "Practice Paper - The Leaf",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "The flat green part of a leaf is called:", options: ["Petiole", "Lamina", "Midrib", "Vein"], answer: "Lamina" },
                { id: 2, marks: 1, question: "Leaves are green due to:", options: ["Chlorophyll", "Xanthophyll", "Carotene", "Anthocyanin"], answer: "Chlorophyll" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "What is photosynthesis?", answer: "Process by which green plants make food using sunlight, water, and CO2." },
                { id: 4, marks: 2, question: "State two functions of a leaf.", answer: "Photosynthesis, Transpiration." }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    subject: 'History',
    chapters: [
      {
        name: 'The Vedic Civilization',
        questions: {
          title: "Practice Paper - The Vedic Civilization",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "The oldest Veda is:", options: ["Rig Veda", "Sama Veda", "Yajur Veda", "Atharva Veda"], answer: "Rig Veda" },
                { id: 2, marks: 1, question: "The head of the family in Vedic period was called:", options: ["Rajan", "Grihapati", "Purohit", "Senani"], answer: "Grihapati" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Name the four Vedas.", answer: "Rig, Sama, Yajur, Atharva." },
                { id: 4, marks: 2, question: "What was the main occupation of the Aryans?", answer: "Agriculture and cattle rearing." }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    subject: 'Geography',
    chapters: [
      {
        name: 'Landforms',
        questions: {
          title: "Practice Paper - Landforms",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Which is the highest mountain peak in the world?", options: ["K2", "Mt. Everest", "Kanchenjunga", "Makalu"], answer: "Mt. Everest" },
                { id: 2, marks: 1, question: "A flat-topped highland is called a:", options: ["Mountain", "Plateau", "Plain", "Valley"], answer: "Plateau" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Define a Mountain.", answer: "A natural elevation of the earth surface rising high above surroundings." },
                { id: 4, marks: 2, question: "What is a valley?", answer: "Low land between hills or mountains." }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    subject: 'Computer',
    chapters: [
      {
        name: 'Computer Categories',
        questions: {
          title: "Practice Paper - Computer Categories",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Which is the most powerful type of computer?", options: ["Mainframe", "Supercomputer", "Microcomputer", "Minicomputer"], answer: "Supercomputer" },
                { id: 2, marks: 1, question: "A laptop is a type of:", options: ["Supercomputer", "Microcomputer", "Mainframe", "Server"], answer: "Microcomputer" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Give two examples of Microcomputers.", answer: "Desktop, Laptop, Tablet." },
                { id: 4, marks: 2, question: "What is a Supercomputer used for?", answer: "Weather forecasting, scientific research." }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    subject: 'English',
    chapters: [
      {
        name: 'Nouns',
        questions: {
          title: "Practice Paper - Nouns",
          school: "LearnNest School",
          class: "Class 6 ICSE",
          sections: [
            {
              name: "Section A: Multiple Choice",
              questions: [
                { id: 1, marks: 1, question: "Identify the proper noun: 'The boy lives in Delhi.'", options: ["boy", "lives", "Delhi", "in"], answer: "Delhi" },
                { id: 2, marks: 1, question: "The collective noun for a group of lions is:", options: ["Herd", "Pack", "Pride", "Flock"], answer: "Pride" }
              ]
            },
            {
              name: "Section B: Short Answer",
              questions: [
                { id: 3, marks: 2, question: "Define Abstract Noun with an example.", answer: "Name of a quality, action or state (e.g., Honesty, Childhood)." },
                { id: 4, marks: 2, question: "Pick out the nouns: 'Gold is a precious metal.'", answer: "Gold, metal." }
              ]
            }
          ]
        }
      }
    ]
  }
];

const seedChapterQuestions = async () => {
    console.log('Initializing database...');
    const db = await initDatabase();

    for (const subjectData of chapterData) {
        console.log(`Processing ${subjectData.subject}...`);
        
        // Find Subject
        const subject = await db.get('SELECT id FROM subjects WHERE name LIKE ?', `%${subjectData.subject}%`);
        
        if (!subject) {
            console.log(`Subject ${subjectData.subject} not found, skipping.`);
            continue;
        }

        for (const chapter of subjectData.chapters) {
            // Find or Create Chapter
            let chapterRow = await db.get('SELECT id FROM chapters WHERE subject_id = ? AND name = ?', subject.id, chapter.name);
            
            if (!chapterRow) {
                console.log(`  Creating chapter ${chapter.name}...`);
                const result = await db.run('INSERT INTO chapters (subject_id, name, syllabus) VALUES (?, ?, ?)', subject.id, chapter.name, 'General Syllabus');
                chapterRow = { id: result.lastID };
            }

            // Insert Question Paper
            console.log(`  Saving paper for ${chapter.name}...`);
            await db.run(
                'INSERT INTO question_papers (subject_id, title, content) VALUES (?, ?, ?)',
                subject.id,
                chapter.questions.title,
                JSON.stringify(chapter.questions)
            );
        }
    }
    console.log('Done seeding chapter questions.');
};

seedChapterQuestions().catch(console.error);
