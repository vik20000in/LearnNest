
import { initDatabase } from '../db/database';

const createPaper = (subject: string, chapter: string, sections: any[]) => ({
    title: `Practice Paper - ${chapter}`,
    school: "LearnNest School",
    class: "Class 6 ICSE",
    sections
});

// Pre-generated practice papers for all missing chapters
const practicePapers: { [key: string]: any } = {
    "History | The Vedic Civilization": createPaper("History", "The Vedic Civilization", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "The Vedas were composed in which language?", options: ["Prakrit", "Pali", "Sanskrit", "Tamil"], answer: "Sanskrit" },
                { id: 2, marks: 1, question: "How many Vedas are there?", options: ["Two", "Three", "Four", "Five"], answer: "Four" },
                { id: 3, marks: 1, question: "Which is the oldest Veda?", options: ["Sama Veda", "Yajur Veda", "Rig Veda", "Atharva Veda"], answer: "Rig Veda" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Name the four Vedas.", answer: "Rig Veda, Sama Veda, Yajur Veda, and Atharva Veda" },
                { id: 5, marks: 2, question: "What was the main occupation during Early Vedic period?", answer: "Cattle-rearing and pastoralism were the main occupations." }
            ]
        },
        {
            name: "Section C: Long Answer (4 marks each)",
            questions: [
                { id: 6, marks: 4, question: "Describe the social structure of Vedic civilization.", answer: "Vedic society had a varna system with four main groups: Brahmins (priests), Kshatriyas (warriors), Vaishyas (traders), and Shudras (laborers). The family was the basic unit, and society was initially more flexible than later periods." }
            ]
        }
    ]),

    "English | Nouns": createPaper("English", "Nouns", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Which of the following is a proper noun?", options: ["city", "London", "river", "mountain"], answer: "London" },
                { id: 2, marks: 1, question: "Which is a collective noun?", options: ["boy", "team", "book", "happiness"], answer: "team" },
                { id: 3, marks: 1, question: "Which is an abstract noun?", options: ["table", "courage", "dog", "India"], answer: "courage" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Give two examples of common nouns.", answer: "Examples: book, table, city, teacher (any two valid common nouns)" },
                { id: 5, marks: 2, question: "Convert the verb 'move' into a noun.", answer: "Movement" }
            ]
        },
        {
            name: "Section C: Application (3 marks each)",
            questions: [
                { id: 6, marks: 3, question: "Identify and classify the nouns in this sentence: 'The team showed great courage in Mumbai.'", answer: "team (collective noun), courage (abstract noun), Mumbai (proper noun)" }
            ]
        }
    ]),

    "ENGLISH LANGUAGE | General / Introduction": createPaper("English Language", "Introduction", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "How many skills are there in language learning?", options: ["Two", "Three", "Four", "Five"], answer: "Four" },
                { id: 2, marks: 1, question: "Which of these is NOT a language skill?", options: ["Reading", "Writing", "Speaking", "Dancing"], answer: "Dancing" },
                { id: 3, marks: 1, question: "What provides structure to a language?", options: ["Vocabulary", "Grammar", "Spelling", "Pronunciation"], answer: "Grammar" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Name the four main language skills.", answer: "Reading, Writing, Speaking, and Listening (RWSL)" },
                { id: 5, marks: 2, question: "Why is grammar important?", answer: "Grammar provides rules and structure for clear and correct communication." }
            ]
        }
    ]),

    "ENGLISH LANGUAGE | Encouraging children to equally participate in an interactive session.": createPaper("English Language", "Equal Participation", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is an interactive session?", options: ["Silent reading", "Active discussion", "Independent work", "Testing"], answer: "Active discussion" },
                { id: 2, marks: 1, question: "What helps shy students participate?", options: ["Strict rules", "Safe environment", "Competition", "Time limits"], answer: "Safe environment" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 3, marks: 2, question: "Why is equal participation important?", answer: "It ensures all students learn, share ideas, and develop confidence." },
                { id: 4, marks: 2, question: "What is active listening?", answer: "Paying full attention to the speaker and responding appropriately." }
            ]
        }
    ]),

    "ENGLISH LANGUAGE | Children will unleash their creativity.": createPaper("English Language", "Creativity", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is creativity?", options: ["Copying others", "Generating new ideas", "Following rules", "Memorizing"], answer: "Generating new ideas" },
                { id: 2, marks: 1, question: "Which activity develops creativity?", options: ["Rote learning", "Story writing", "Repetition", "Copying"], answer: "Story writing" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 3, marks: 2, question: "Name two creative activities for children.", answer: "Story writing, poetry, drama, art projects (any two)" },
                { id: 4, marks: 2, question: "How can teachers foster creativity?", answer: "By providing open-ended tasks, encouraging experimentation, and celebrating unique ideas." }
            ]
        }
    ]),

    "ENGLISH LANGUAGE | Each student will develop their creative, writing, speaking skills.": createPaper("English Language", "Skill Development", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "How can students improve writing?", options: ["Never reading", "Regular practice", "Avoiding feedback", "Skipping grammar"], answer: "Regular practice" },
                { id: 2, marks: 1, question: "What makes a good speaker?", options: ["Mumbling", "Clear pronunciation", "Fast talking", "Looking down"], answer: "Clear pronunciation" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 3, marks: 2, question: "What three skills are mentioned?", answer: "Creative thinking, writing skills, and speaking skills" },
                { id: 4, marks: 2, question: "Define public speaking.", answer: "The act of presenting information or ideas to an audience verbally." }
            ]
        }
    ]),

    "ENGLISH LANGUAGE | Foster cognitive development.": createPaper("English Language", "Cognitive Development", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is cognitive development?", options: ["Physical growth", "Mental growth", "Social growth", "Emotional growth"], answer: "Mental growth" },
                { id: 2, marks: 1, question: "Which improves cognitive development?", options: ["Watching TV all day", "Reading books", "Sleeping only", "Avoiding challenges"], answer: "Reading books" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 3, marks: 2, question: "What is critical thinking?", answer: "The ability to analyze information objectively and make reasoned judgments." },
                { id: 4, marks: 2, question: "Why are puzzles good for cognitive development?", answer: "They challenge the brain and improve problem-solving skills." }
            ]
        }
    ]),

    "ENGLISH LITERATURE | Prose: The Mystery of a Cyber Friend- Zac O' Yeah": createPaper("English Literature", "The Mystery of a Cyber Friend", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Who is the author?", options: ["Ruskin Bond", "Zac O'Yeah", "R.K. Narayan", "Mulk Raj Anand"], answer: "Zac O'Yeah" },
                { id: 2, marks: 1, question: "What is a cyber friend?", options: ["School friend", "Online friend", "Family member", "Teacher"], answer: "Online friend" }
            ]
        },
        {
            name: "Section B: Short Answer (3 marks each)",
            questions: [
                { id: 3, marks: 3, question: "What is the main theme of the story?", answer: "The story explores online friendship, digital communication, and mystery in the cyber world." },
                { id: 4, marks: 3, question: "What lesson does the story teach?", answer: "It teaches being cautious with online relationships while exploring modern communication." }
            ]
        }
    ]),

    "ENGLISH LITERATURE | Poem: Stopping by Woods on a Snowy Evening- Robert Frost": createPaper("English Literature", "Stopping by Woods", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Who wrote this poem?", options: ["William Wordsworth", "Robert Frost", "John Keats", "Walt Whitman"], answer: "Robert Frost" },
                { id: 2, marks: 1, question: "What is the setting?", options: ["Summer beach", "City street", "Snowy woods", "Desert"], answer: "Snowy woods" }
            ]
        },
        {
            name: "Section B: Short Answer (3 marks each)",
            questions: [
                { id: 3, marks: 3, question: "What is the famous last line?", answer: "'And miles to go before I sleep' - repeated twice for emphasis" },
                { id: 4, marks: 3, question: "What does the horse represent?", answer: "The horse represents practical responsibilities that call the speaker back to reality." }
            ]
        }
    ]),

    "ENGLISH LITERATURE | Poem: To India: My Native Land- Henry Louis Vivian Derozio": createPaper("English Literature", "To India: My Native Land", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Who is the poet?", options: ["Tagore", "Derozio", "Sarojini Naidu", "Toru Dutt"], answer: "Derozio" },
                { id: 2, marks: 1, question: "What is the main theme?", options: ["Love", "Patriotism", "Nature", "Friendship"], answer: "Patriotism" }
            ]
        },
        {
            name: "Section B: Short Answer (3 marks each)",
            questions: [
                { id: 3, marks: 3, question: "What emotion does the poet express?", answer: "Pride in India's past and sadness at its present condition" },
                { id: 4, marks: 3, question: "What message does Derozio convey?", answer: "Hope for India's revival and remembering its glorious heritage" }
            ]
        }
    ]),

    "ENGLISH LITERATURE | Classic Short Story: The Lottery Ticket": createPaper("English Literature", "The Lottery Ticket", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Who wrote 'The Lottery Ticket'?", options: ["O. Henry", "Anton Chekhov", "Guy de Maupassant", "Edgar Allan Poe"], answer: "Anton Chekhov" },
                { id: 2, marks: 1, question: "What is the main theme?", options: ["Love", "Greed", "Friendship", "Adventure"], answer: "Greed" }
            ]
        },
        {
            name: "Section B: Short Answer (3 marks each)",
            questions: [
                { id: 3, marks: 3, question: "What is the story about?", answer: "How the possibility of sudden wealth affects a couple's relationship and reveals their greed." },
                { id: 4, marks: 3, question: "What is the irony in the story?", answer: "The couple's relationship deteriorates over money they don't actually have." }
            ]
        }
    ]),

    "Chemistry | General / Introduction": createPaper("Chemistry", "Introduction", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is Chemistry?", options: ["Study of life", "Study of matter", "Study of earth", "Study of space"], answer: "Study of matter" },
                { id: 2, marks: 1, question: "How many states of matter are there?", options: ["Two", "Three", "Four", "Five"], answer: "Three" },
                { id: 3, marks: 1, question: "What is an atom?", options: ["Largest particle", "Smallest unit", "A molecule", "A compound"], answer: "Smallest unit" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Name the three states of matter.", answer: "Solid, Liquid, and Gas" },
                { id: 5, marks: 2, question: "What is a molecule?", answer: "A group of two or more atoms bonded together." }
            ]
        }
    ]),

    "Biology | General / Introduction": createPaper("Biology", "Introduction", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is Biology?", options: ["Study of rocks", "Study of living organisms", "Study of chemicals", "Study of planets"], answer: "Study of living organisms" },
                { id: 2, marks: 1, question: "What is a cell?", options: ["Basic unit of life", "A tissue", "An organ", "A system"], answer: "Basic unit of life" },
                { id: 3, marks: 1, question: "Which do MRS GREN represent?", options: ["Types of cells", "Characteristics of life", "Organ systems", "Cell parts"], answer: "Characteristics of life" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "What does MRS GREN stand for?", answer: "Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition" },
                { id: 5, marks: 2, question: "What is biodiversity?", answer: "The variety of different species in an ecosystem." }
            ]
        }
    ]),

    "Computer | Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and": createPaper("Computer", "QBasic Programming", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What does BASIC stand for?", options: ["Basic All Simple Code", "Beginners' All-purpose Symbolic Instruction Code", "Basic Algorithm Standard Code", "Binary Automatic System Code"], answer: "Beginners' All-purpose Symbolic Instruction Code" },
                { id: 2, marks: 1, question: "Which command displays output in QBasic?", options: ["SHOW", "DISPLAY", "PRINT", "OUTPUT"], answer: "PRINT" },
                { id: 3, marks: 1, question: "What is a variable?", options: ["Fixed value", "Named storage location", "A command", "A program"], answer: "Named storage location" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "What is a loop in programming?", answer: "A sequence of instructions repeated until a condition is met." },
                { id: 5, marks: 2, question: "Write a PRINT statement to display 'Hello World'.", answer: "PRINT \"Hello World\"" }
            ]
        }
    ]),

    "Computer | Chapter 6: Scratch Programming": createPaper("Computer", "Scratch Programming", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is Scratch?", options: ["A game", "A visual programming language", "An operating system", "A web browser"], answer: "A visual programming language" },
                { id: 2, marks: 1, question: "What are sprites in Scratch?", options: ["Code blocks", "Objects/characters", "Variables", "Sounds"], answer: "Objects/characters" },
                { id: 3, marks: 1, question: "What is the stage?", options: ["Code area", "Sprite list", "Backdrop/display area", "Variable list"], answer: "Backdrop/display area" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "What are blocks in Scratch?", answer: "Color-coded instruction pieces that snap together to create programs." },
                { id: 5, marks: 2, question: "Why is Scratch good for beginners?", answer: "It uses visual blocks instead of text, making programming logic easier to understand." }
            ]
        }
    ]),

    "Geography | Chapter 1: Mapping the Earth": createPaper("Geography", "Mapping the Earth", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is a map?", options: ["A globe", "A representation of Earth on flat surface", "A compass", "A scale"], answer: "A representation of Earth on flat surface" },
                { id: 2, marks: 1, question: "How many cardinal directions are there?", options: ["Two", "Four", "Six", "Eight"], answer: "Four" },
                { id: 3, marks: 1, question: "What is a globe?", options: ["Flat map", "3D model of Earth", "Compass", "Atlas"], answer: "3D model of Earth" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Name the four cardinal directions.", answer: "North, South, East, and West" },
                { id: 5, marks: 2, question: "What is latitude?", answer: "Lines running east-west measuring distance from the Equator." }
            ]
        }
    ]),

    "Geography | Chapter 2: Landforms": createPaper("Geography", "Landforms", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is a mountain?", options: ["Flat land", "High elevation", "Water body", "Valley"], answer: "High elevation" },
                { id: 2, marks: 1, question: "What is a plateau?", options: ["Low valley", "Elevated flat area", "Mountain peak", "River basin"], answer: "Elevated flat area" },
                { id: 3, marks: 1, question: "Which is a plain?", options: ["High mountain", "Steep valley", "Flat/rolling land", "Deep ocean"], answer: "Flat/rolling land" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "What is a valley?", answer: "A low area between hills or mountains, often with a river." },
                { id: 5, marks: 2, question: "How are valleys formed?", answer: "By erosion from rivers, glaciers, or tectonic activity." }
            ]
        }
    ]),

    "Geography | Chapter 5: Minerals": createPaper("Geography", "Minerals", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is a mineral?", options: ["Living organism", "Naturally occurring inorganic substance", "Manufactured product", "Plant material"], answer: "Naturally occurring inorganic substance" },
                { id: 2, marks: 1, question: "Which is a metallic mineral?", options: ["Limestone", "Iron ore", "Mica", "Gypsum"], answer: "Iron ore" },
                { id: 3, marks: 1, question: "Which is non-metallic?", options: ["Gold", "Copper", "Salt", "Iron"], answer: "Salt" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Name three common minerals.", answer: "Iron, copper, gold, salt, mica, quartz (any three)" },
                { id: 5, marks: 2, question: "Why are minerals important?", answer: "Used in construction, manufacturing, technology, and everyday products." }
            ]
        }
    ]),

    "Geography | Chapter 7:": createPaper("Geography", "Population and Settlement", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "What is population density?", options: ["Total population", "People per unit area", "Birth rate", "Migration rate"], answer: "People per unit area" },
                { id: 2, marks: 1, question: "What is urbanization?", options: ["Rural development", "Movement to cities", "Population decrease", "Agricultural growth"], answer: "Movement to cities" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 3, marks: 2, question: "What factors affect where people live?", answer: "Climate, water, landforms, resources, and economic opportunities." },
                { id: 4, marks: 2, question: "What is population distribution?", answer: "How people are spread across an area or region." }
            ]
        }
    ]),

    "HISTORY AND CIVICS | Later Vedic Period": createPaper("History", "Later Vedic Period", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "When was the Later Vedic Period?", options: ["2000-1500 BCE", "1500-1000 BCE", "1000-600 BCE", "600-400 BCE"], answer: "1000-600 BCE" },
                { id: 2, marks: 1, question: "Main occupation in Later Vedic Period?", options: ["Hunting", "Cattle-rearing", "Agriculture", "Trading"], answer: "Agriculture" },
                { id: 3, marks: 1, question: "How many varnas were there?", options: ["Two", "Three", "Four", "Five"], answer: "Four" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Which Vedas were composed in this period?", answer: "Sama Veda, Yajur Veda, and Atharva Veda" },
                { id: 5, marks: 2, question: "Where did people settle?", answer: "They moved eastward to the Gangetic plains." }
            ]
        }
    ]),

    "HISTORY AND CIVICS | Buddhism and Jainism": createPaper("History", "Buddhism and Jainism", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Who founded Buddhism?", options: ["Mahavira", "Gautama Buddha", "Ashoka", "Chandragupta"], answer: "Gautama Buddha" },
                { id: 2, marks: 1, question: "Who founded Jainism?", options: ["Buddha", "Mahavira", "Nanak", "Kabir"], answer: "Mahavira" },
                { id: 3, marks: 1, question: "Main principle of Jainism?", options: ["Violence", "Ahimsa", "War", "Conquest"], answer: "Ahimsa" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "What are the Four Noble Truths?", answer: "Life is suffering, suffering has a cause, suffering can end, there is a path to end it." },
                { id: 5, marks: 2, question: "Why did these religions emerge?", answer: "As reform movements against rigid rituals and caste system." }
            ]
        }
    ]),

    "HISTORY AND CIVICS | The Rise of Magadha": createPaper("History", "Rise of Magadha", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Where was Magadha located?", options: ["Punjab", "Bihar", "Gujarat", "Maharashtra"], answer: "Bihar" },
                { id: 2, marks: 1, question: "First important ruler of Magadha?", options: ["Ashoka", "Bimbisara", "Chandragupta", "Ajatashatru"], answer: "Bimbisara" },
                { id: 3, marks: 1, question: "Capital of Magadha?", options: ["Delhi", "Pataliputra", "Mumbai", "Kolkata"], answer: "Pataliputra" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "Why did Magadha become powerful?", answer: "Strategic location, fertile land, mineral resources, and strong rulers." },
                { id: 5, marks: 2, question: "Which empire rose from Magadha?", answer: "The Mauryan Empire under Chandragupta Maurya" }
            ]
        }
    ]),

    "HISTORY AND CIVICS | The Early Vedic": createPaper("History", "Early Vedic Period", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "When was Early Vedic Age?", options: ["2000-1500 BCE", "1500-1000 BCE", "1000-600 BCE", "600-400 BCE"], answer: "1500-1000 BCE" },
                { id: 2, marks: 1, question: "Earliest Veda?", options: ["Sama", "Yajur", "Rig", "Atharva"], answer: "Rig" },
                { id: 3, marks: 1, question: "Main occupation?", options: ["Agriculture", "Cattle-rearing", "Trading", "Mining"], answer: "Cattle-rearing" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks each)",
            questions: [
                { id: 4, marks: 2, question: "What was the political unit?", answer: "The tribe (jana) led by a chief (rajan)" },
                { id: 5, marks: 2, question: "Where did people settle?", answer: "Northwestern India, mainly Punjab and adjoining areas." }
            ]
        }
    ]),

    "2ND LANGUAGE-BENGALI | ছছোটদে দে র সবুজ পাতা (ষষ্ঠ) : গদ্য – কে কে লে লে , সর্ব র্বনে নে শে শে মাদুলি লি": createPaper("Bengali", "Chotoder Sabuj Pata", [
        {
            name: "Section A: বহুনির্বাচনী প্রশ্ন",
            questions: [
                { id: 1, marks: 1, question: "গদ্য কী?", options: ["ছন্দযুক্ত রচনা", "ছন্দহীন রচনা", "গান", "নাটক"], answer: "ছন্দহীন রচনা" },
                { id: 2, marks: 1, question: "এই বইটি কোন শ্রেণীর জন্য?", options: ["পঞ্চম", "ষষ্ঠ", "সপ্তম", "অষ্টম"], answer: "ষষ্ঠ" }
            ]
        },
        {
            name: "Section B: সংক্ষিপ্ত উত্তর (২ নম্বর)",
            questions: [
                { id: 3, marks: 2, question: "গদ্য ও পদ্যের পার্থক্য কী?", answer: "গদ্যে ছন্দ থাকে না, পদ্যে ছন্দ ও মাত্রা থাকে।" },
                { id: 4, marks: 2, question: "পাঠ্যবই কেন গুরুত্বপূর্ণ?", answer: "ভাষা দক্ষতা, সাহিত্য জ্ঞান এবং মূল্যবোধ শেখায়।" }
            ]
        }
    ]),

    "2ND LANGUAGE-BENGALI | পদ্য – পাছে ছে ললোকে কে কি কি ছু বলে লে": createPaper("Bengali", "Pache Loke Kichu Bole", [
        {
            name: "Section A: বহুনির্বাচনী প্রশ্ন",
            questions: [
                { id: 1, marks: 1, question: "পদ্যের প্রধান বৈশিষ্ট্য কী?", options: ["ছন্দ", "গদ্য", "নাটক", "প্রবন্ধ"], answer: "ছন্দ" },
                { id: 2, marks: 1, question: "'পাছে লোকে' অর্থ কী?", options: ["লোক আসছে", "ভয় যে লোকে বলবে", "লোক গেছে", "লোক খুশি"], answer: "ভয় যে লোকে বলবে" }
            ]
        },
        {
            name: "Section B: সংক্ষিপ্ত উত্তর (২ নম্বর)",
            questions: [
                { id: 3, marks: 2, question: "ছন্দ কেন গুরুত্বপূর্ণ?", answer: "ছন্দ কবিতাকে সুন্দর, মধুর এবং মনে রাখার যোগ্য করে।" },
                { id: 4, marks: 2, question: "কবিতা পড়ার উপকারিতা লেখো।", answer: "ভাষার সৌন্দর্য বোঝা, কল্পনাশক্তি ও আবেগ বিকাশ হয়।" }
            ]
        }
    ]),

    "2ND LANGUAGE-BENGALI | গল্পে ল্পে র রংমশাল – দশরথে থে র পুত্রলাভ, মি মি নুর বাহাদুরি রি ( দ্রুতপঠন )": createPaper("Bengali", "Golper Rongmoshal", [
        {
            name: "Section A: বহুনির্বাচনী প্রশ্ন",
            questions: [
                { id: 1, marks: 1, question: "দশরথ কে ছিলেন?", options: ["সম্রাট", "অযোধ্যার রাজা", "ঋষি", "মন্ত্রী"], answer: "অযোধ্যার রাজা" },
                { id: 2, marks: 1, question: "দশরথের কতজন পুত্র?", options: ["দুই", "তিন", "চার", "পাঁচ"], answer: "চার" }
            ]
        },
        {
            name: "Section B: সংক্ষিপ্ত উত্তর (২ নম্বর)",
            questions: [
                { id: 3, marks: 2, question: "চার পুত্রের নাম লেখো।", answer: "রাম, লক্ষ্মণ, ভরত এবং শত্রুঘ্ন" },
                { id: 4, marks: 2, question: "দ্রুতপঠন কী?", answer: "দ্রুত গতিতে পড়ে মূল বিষয় বুঝে নেওয়া।" }
            ]
        }
    ]),

    "2ND LANGUAGE-BENGALI | ভাষা প্রসঙ্গ – সমার্থ র্থক শব্দ, পদ পরি রি বর্ত র্ত ন, পুরুষ, রচনা, পত্ররচনা,": createPaper("Bengali", "Bhasha Prosongo", [
        {
            name: "Section A: বহুনির্বাচনী প্রশ্ন",
            questions: [
                { id: 1, marks: 1, question: "সমার্থক শব্দ কী?", options: ["বিপরীত শব্দ", "একই অর্থের শব্দ", "যুক্ত শব্দ", "ক্রিয়া"], answer: "একই অর্থের শব্দ" },
                { id: 2, marks: 1, question: "পুরুষ কত প্রকার?", options: ["দুই", "তিন", "চার", "পাঁচ"], answer: "তিন" }
            ]
        },
        {
            name: "Section B: সংক্ষিপ্ত উত্তর (২ নম্বর)",
            questions: [
                { id: 3, marks: 2, question: "তিন পুরুষের নাম লেখো।", answer: "উত্তম পুরুষ, মধ্যম পুরুষ, প্রথম পুরুষ" },
                { id: 4, marks: 2, question: "'সূর্য'-এর দুটি সমার্থক শব্দ লেখো।", answer: "রবি, দিনকর, ভাস্কর (যেকোনো দুটি)" }
            ]
        }
    ]),

    "2ND LANGUAGE - HINDI | General / Introduction": createPaper("Hindi", "Introduction", [
        {
            name: "Section A: बहुविकल्पीय प्रश्न",
            questions: [
                { id: 1, marks: 1, question: "हिंदी की लिपि क्या है?", options: ["रोमन", "देवनागरी", "अरबी", "फारसी"], answer: "देवनागरी" },
                { id: 2, marks: 1, question: "हिंदी में कितने स्वर हैं?", options: ["९", "१०", "११", "१२"], answer: "११" }
            ]
        },
        {
            name: "Section B: लघु उत्तर (२ अंक)",
            questions: [
                { id: 3, marks: 2, question: "भाषा सीखने के चार कौशल लिखिए।", answer: "सुनना, बोलना, पढ़ना और लिखना" },
                { id: 4, marks: 2, question: "व्याकरण क्या है?", answer: "भाषा के नियमों का विज्ञान जो सही बोलने-लिखने में मदद करता है।" }
            ]
        }
    ]),

    "3RD LANGUAGE - HINDI | General / Introduction": createPaper("Hindi", "Third Language Introduction", [
        {
            name: "Section A: बहुविकल्पीय प्रश्न",
            questions: [
                { id: 1, marks: 1, question: "हिंदी वर्णमाला में कुल कितने वर्ण हैं?", options: ["४५", "५०", "५२", "५५"], answer: "५२" },
                { id: 2, marks: 1, question: "शब्द किसे कहते हैं?", options: ["वाक्य", "सार्थक ध्वनि समूह", "वर्ण", "अक्षर"], answer: "सार्थक ध्वनि समूह" }
            ]
        },
        {
            name: "Section B: लघु उत्तर (२ अंक)",
            questions: [
                { id: 3, marks: 2, question: "तीसरी भाषा के रूप में हिंदी सीखने का लाभ?", answer: "भारत के विभिन्न क्षेत्रों के लोगों से संवाद कर सकते हैं।" },
                { id: 4, marks: 2, question: "वाक्य की परिभाषा दीजिए।", answer: "शब्दों का समूह जो पूरा अर्थ प्रकट करे।" }
            ]
        }
    ]),

    "3RD LANGUAGE -BENGALI | Lets Learn বাংলা : ক ) গদ্য:- বর্ষায় দুর্গতি": createPaper("Bengali", "Barshai Durgati", [
        {
            name: "Section A: বহুনির্বাচনী প্রশ্ন",
            questions: [
                { id: 1, marks: 1, question: "বর্ষা কোন মাসে?", options: ["ফাল্গুন-চৈত্র", "আষাঢ়-শ্রাবণ", "পৌষ-মাঘ", "জ্যৈষ্ঠ-আষাঢ়"], answer: "আষাঢ়-শ্রাবণ" },
                { id: 2, marks: 1, question: "বাংলায় ঋতু কয়টি?", options: ["চার", "পাঁচ", "ছয়", "সাত"], answer: "ছয়" }
            ]
        },
        {
            name: "Section B: সংক্ষিপ্ত উত্তর (২ নম্বর)",
            questions: [
                { id: 3, marks: 2, question: "বর্ষাকালের দুটি বৈশিষ্ট্য লেখো।", answer: "প্রচুর বৃষ্টিপাত এবং সবুজ প্রকৃতি" },
                { id: 4, marks: 2, question: "ছয় ঋতুর নাম লেখো।", answer: "গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত" }
            ]
        }
    ]),

    "3RD LANGUAGE -BENGALI | ব্যাকরণ :- রে রে ফ, বাংলার ছয় টি ঋতু ও বাররোমাসে সে র নাম": createPaper("Bengali", "Grammar - Ref and Seasons", [
        {
            name: "Section A: বহুনির্বাচনী প্রশ্ন",
            questions: [
                { id: 1, marks: 1, question: "রেফ কোথায় বসে?", options: ["নিচে", "উপরে", "পাশে", "সামনে"], answer: "উপরে" },
                { id: 2, marks: 1, question: "বাংলা বছরের প্রথম মাস?", options: ["পৌষ", "বৈশাখ", "চৈত্র", "আষাঢ়"], answer: "বৈশাখ" }
            ]
        },
        {
            name: "Section B: সংক্ষিপ্ত উত্তর (২ নম্বর)",
            questions: [
                { id: 3, marks: 2, question: "রেফের উদাহরণ দাও।", answer: "কর্ম, ধর্ম, বর্ণ (যেকোনো উদাহরণ)" },
                { id: 4, marks: 2, question: "বসন্ত কোন মাসে?", answer: "ফাল্গুন ও চৈত্র মাসে" }
            ]
        }
    ]),

    "3RD LANGUAGE -GERMAN | Lektion 2.1 Was hast du am Montag?": createPaper("German", "Lektion 2.1", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Was bedeutet 'Montag'?", options: ["Sunday", "Monday", "Tuesday", "Wednesday"], answer: "Monday" },
                { id: 2, marks: 1, question: "Wie viele Tage hat die Woche?", options: ["Fünf", "Sechs", "Sieben", "Acht"], answer: "Sieben" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks)",
            questions: [
                { id: 3, marks: 2, question: "Schreiben Sie die Wochentage auf Deutsch.", answer: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag" },
                { id: 4, marks: 2, question: "Was ist ein Stundenplan?", answer: "A timetable showing classes/activities for each day" }
            ]
        }
    ]),

    "3RD LANGUAGE -GERMAN | Lektion 2.2 Was brauchst du heute?": createPaper("German", "Lektion 2.2", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Was bedeutet 'brauchen'?", options: ["to have", "to need", "to want", "to like"], answer: "to need" },
                { id: 2, marks: 1, question: "Was ist 'das Buch'?", options: ["pen", "book", "notebook", "pencil"], answer: "book" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks)",
            questions: [
                { id: 3, marks: 2, question: "Nennen Sie drei Schulsachen.", answer: "das Buch, der Stift, das Heft" },
                { id: 4, marks: 2, question: "Übersetzen: What do you need?", answer: "Was brauchst du?" }
            ]
        }
    ]),

    "3RD LANGUAGE -GERMAN | Lektion 2.3 Schon wieder Eintopf ( All Grammar and vocabulary of all the chapters included)": createPaper("German", "Lektion 2.3", [
        {
            name: "Section A: Multiple Choice",
            questions: [
                { id: 1, marks: 1, question: "Was ist 'Eintopf'?", options: ["dessert", "one-pot stew", "salad", "soup"], answer: "one-pot stew" },
                { id: 2, marks: 1, question: "Der Artikel für männlich?", options: ["die", "der", "das", "den"], answer: "der" }
            ]
        },
        {
            name: "Section B: Short Answer (2 marks)",
            questions: [
                { id: 3, marks: 2, question: "Schreiben Sie die drei Artikel.", answer: "der (masculine), die (feminine), das (neuter)" },
                { id: 4, marks: 2, question: "Was bedeutet 'schon wieder'?", answer: "again, once more (expressing repetition)" }
            ]
        }
    ])
};

async function seedProduction() {
    console.log("🌱 Seeding Production Database...");
    const db = await initDatabase();

    for (const key of Object.keys(practicePapers)) {
        const [subjectName, chapterName] = key.split(' | ');
        
        if (!subjectName || !chapterName) {
            console.warn(`⚠️ Invalid key format: ${key}`);
            continue;
        }

        // 1. Ensure Subject Exists
        let subject = await db.get('SELECT id FROM subjects WHERE name = ?', subjectName);
        if (!subject) {
            console.log(`  Creating Subject: ${subjectName}`);
            await db.run('INSERT INTO subjects (name) VALUES (?)', subjectName);
            subject = await db.get('SELECT id FROM subjects WHERE name = ?', subjectName);
        }

        // 2. Ensure Chapter Exists
        let chapter = await db.get('SELECT id FROM chapters WHERE subject_id = ? AND name = ?', subject.id, chapterName);
        if (!chapter) {
            console.log(`  Creating Chapter: ${chapterName}`);
            await db.run('INSERT INTO chapters (subject_id, name, syllabus) VALUES (?, ?, ?)', subject.id, chapterName, 'General Syllabus');
            chapter = await db.get('SELECT id FROM chapters WHERE subject_id = ? AND name = ?', subject.id, chapterName);
        }

        // 3. Insert Paper
        const paper = practicePapers[key];
        const existingPaper = await db.get('SELECT id FROM question_papers WHERE chapter_id = ?', chapter.id);
        
        if (!existingPaper) {
            console.log(`  Inserting Paper for: ${key}`);
            await db.run(
                'INSERT INTO question_papers (subject_id, chapter_id, title, content) VALUES (?, ?, ?, ?)',
                subject.id,
                chapter.id,
                paper.title,
                JSON.stringify(paper)
            );
        }
    }

    console.log("✅ Production Seeding Complete!");
}

export { seedProduction };
