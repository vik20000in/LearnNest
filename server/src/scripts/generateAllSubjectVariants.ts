import { initDatabase } from '../db/database';

async function generateAllSubjectVariants() {
    console.log('🚀 Generating Set A, B, C variants for ALL subjects...\n');
    
    const db = await initDatabase();
    
    // Get all subjects
    const subjects = await db.all('SELECT id, name FROM subjects WHERE id NOT IN (3) ORDER BY id');
    
    let totalGenerated = 0;
    
    for (const subject of subjects) {
        console.log(`\n${'='.repeat(70)}`);
        console.log(`📚 Processing: ${subject.name} (ID: ${subject.id})`);
        console.log(`${'='.repeat(70)}\n`);
        
        // Get all chapters for this subject
        const chapters = await db.all('SELECT id, name FROM chapters WHERE subject_id = ?', subject.id);
        
        if (chapters.length === 0) {
            console.log('   ⚠️  No chapters found, skipping...\n');
            continue;
        }
        
        console.log(`   Found ${chapters.length} chapters\n`);
        
        // Generate variants for each chapter
        for (const chapter of chapters) {
            console.log(`   📝 Generating variants for: ${chapter.name}`);
            
            const variantSetId = `${subject.name.toLowerCase().replace(/\s+/g, '_')}_${chapter.id}_${Date.now()}`;
            console.log(`      Variant Set ID: ${variantSetId}`);
            
            // Generate Set A, B, C
            for (const label of ['A', 'B', 'C']) {
                const paper = {
                    title: `${subject.name} Practice Paper - ${chapter.name} - Set ${label}`,
                    school: "LearnNest School",
                    class: "Class 6 ICSE",
                    subject: subject.name,
                    duration: "1 hour 30 minutes",
                    totalMarks: 40,
                    sections: [
                        {
                            name: "Section A: Multiple Choice Questions (10 marks)",
                            questions: generateMCQs(subject.name, chapter.name, label)
                        },
                        {
                            name: "Section B: Very Short Answer Questions (12 marks)",
                            questions: generateVeryShortAnswers(subject.name, chapter.name, label)
                        },
                        {
                            name: "Section C: Short Answer Questions (8 marks)",
                            questions: generateShortAnswers(subject.name, chapter.name, label)
                        },
                        {
                            name: "Section D: Long Answer Questions (10 marks)",
                            questions: generateLongAnswers(subject.name, chapter.name, label)
                        }
                    ]
                };

                const result = await db.run(
                    'INSERT INTO question_papers (subject_id, chapter_id, title, content, variant_set_id, variant_label) VALUES (?, ?, ?, ?, ?, ?)',
                    subject.id,
                    chapter.id,
                    paper.title,
                    JSON.stringify(paper),
                    variantSetId,
                    label
                );

                console.log(`      ✅ Set ${label} created (Paper ID: ${result.lastID})`);
                totalGenerated++;
            }
        }
    }

    console.log(`\n\n${'='.repeat(70)}`);
    console.log(`✨ Successfully generated ${totalGenerated} practice papers!`);
    console.log(`📊 Summary:`);
    console.log(`   - ${subjects.length} subjects processed`);
    console.log(`   - 3 variants per chapter (Set A, B, C)`);
    console.log(`   - Total papers: ${totalGenerated}`);
    console.log(`${'='.repeat(70)}\n`);
    console.log('💡 Access these papers in the Question Generator page');
}

function generateMCQs(subjectName: string, chapterName: string, variant: string): any[] {
    const questions = [];
    for (let i = 1; i <= 10; i++) {
        const { question, options, answer } = getMCQQuestion(subjectName, chapterName, variant, i);
        questions.push({
            id: i,
            question,
            options,
            answer,
            marks: 1
        });
    }
    return questions;
}

function generateVeryShortAnswers(subjectName: string, chapterName: string, variant: string): any[] {
    const questions = [];
    for (let i = 1; i <= 6; i++) {
        questions.push({
            id: 10 + i,
            question: getVeryShortQuestion(subjectName, chapterName, variant, i),
            answer: `Brief answer covering key concepts from ${chapterName}.`,
            marks: 2
        });
    }
    return questions;
}

function generateShortAnswers(subjectName: string, chapterName: string, variant: string): any[] {
    return [
        {
            id: 17,
            question: getShortQuestion(subjectName, chapterName, variant, 1),
            answer: `Detailed explanation demonstrating understanding of ${chapterName} principles with examples.`,
            marks: 4
        },
        {
            id: 18,
            question: getShortQuestion(subjectName, chapterName, variant, 2),
            answer: `Complete answer covering theory and practical applications from ${chapterName}.`,
            marks: 4
        }
    ];
}

function generateLongAnswers(subjectName: string, chapterName: string, variant: string): any[] {
    return [
        {
            id: 19,
            question: getLongQuestion(subjectName, chapterName, variant, 1),
            answer: `Comprehensive answer covering: (1) Definition and fundamental concepts, (2) Key principles from ${chapterName}, (3) Real-world applications and examples, (4) Important formulas and relationships.`,
            marks: 5
        },
        {
            id: 20,
            question: getLongQuestion(subjectName, chapterName, variant, 2),
            answer: `Detailed response including: (1) Theoretical foundation, (2) Key observations from ${chapterName}, (3) Practical implications, (4) Summary of key points.`,
            marks: 5
        }
    ];
}

function getMCQQuestion(subjectName: string, chapterName: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    const subjectLower = subjectName.toLowerCase();
    const chapterLower = chapterName.toLowerCase();
    
    // Math-specific questions
    if (subjectLower.includes('math')) {
        return getMathMCQ(chapterLower, variant, num);
    }
    
    // Chemistry-specific questions
    if (subjectLower.includes('chem')) {
        return getChemistryMCQ(chapterLower, variant, num);
    }
    
    // Biology-specific questions
    if (subjectLower.includes('bio')) {
        return getBiologyMCQ(chapterLower, variant, num);
    }
    
    // Computer-specific questions
    if (subjectLower.includes('comp')) {
        return getComputerMCQ(chapterLower, variant, num);
    }
    
    // English-specific questions
    if (subjectLower.includes('english')) {
        return getEnglishMCQ(chapterLower, variant, num);
    }
    
    // History-specific questions
    if (subjectLower.includes('hist') || subjectLower.includes('civic')) {
        return getHistoryMCQ(chapterLower, variant, num);
    }
    
    // Geography-specific questions
    if (subjectLower.includes('geo')) {
        return getGeographyMCQ(chapterLower, variant, num);
    }
    
    // Generic fallback
    return {
        question: `[Set ${variant} Q${num}] ${chapterName}: Which of the following is correct?`,
        options: ["First option", "Second option", "Third option", "Fourth option"],
        answer: "Second option"
    };
}

// Helper functions for each subject
function getMathMCQ(chapter: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    if (chapter.includes('decimal')) {
        const mcqs = [
            { q: "What is 0.5 + 0.3?", opts: ["0.7", "0.8", "0.9", "1.0"], ans: "0.8" },
            { q: "Which is greater: 0.7 or 0.07?", opts: ["0.7", "0.07", "Both equal", "Cannot compare"], ans: "0.7" },
            { q: "What is 2.5 × 10?", opts: ["2.5", "25", "250", "0.25"], ans: "25" },
            { q: "Convert 3/4 to decimal", opts: ["0.25", "0.5", "0.75", "1.0"], ans: "0.75" },
            { q: "What is 1.2 ÷ 4?", opts: ["0.2", "0.3", "0.4", "0.5"], ans: "0.3" },
            { q: "Round 2.67 to 1 decimal place", opts: ["2.6", "2.7", "2.8", "3.0"], ans: "2.7" },
            { q: "What is the place value of 5 in 12.35?", opts: ["Ones", "Tenths", "Hundredths", "Thousandths"], ans: "Hundredths" },
            { q: "Which is smallest: 0.2, 0.02, 0.002?", opts: ["0.2", "0.02", "0.002", "All equal"], ans: "0.002" },
            { q: "What is 0.1 + 0.01 + 0.001?", opts: ["0.111", "0.11", "1.11", "0.012"], ans: "0.111" },
            { q: "Convert 0.6 to fraction", opts: ["1/2", "2/3", "3/5", "4/5"], ans: "3/5" }
        ];
        return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
    }
    
    if (chapter.includes('ratio')) {
        const mcqs = [
            { q: "Simplify the ratio 12:18", opts: ["1:2", "2:3", "3:4", "4:5"], ans: "2:3" },
            { q: "If a:b = 2:3, what is a:b:c if c = 4?", opts: ["2:3:4", "6:9:12", "4:6:8", "1:2:3"], ans: "2:3:4" },
            { q: "What is 20% of 500?", opts: ["50", "100", "150", "200"], ans: "100" },
            { q: "Divide 100 in ratio 2:3", opts: ["40:60", "30:70", "50:50", "20:80"], ans: "40:60" },
            { q: "If 5 pencils cost ₹25, what is cost of 1?", opts: ["₹3", "₹4", "₹5", "₹6"], ans: "₹5" },
            { q: "Which ratio is equivalent to 3:4?", opts: ["6:8", "5:6", "9:10", "7:8"], ans: "6:8" },
            { q: "Express 1:2 as percentage", opts: ["25%", "33%", "50%", "75%"], ans: "50%" },
            { q: "What is the ratio of 2m to 50cm?", opts: ["1:25", "2:1", "4:1", "1:4"], ans: "4:1" },
            { q: "If a:b = 3:4 and b:c = 2:5, find a:c", opts: ["3:10", "6:20", "3:5", "1:2"], ans: "3:10" },
            { q: "Share 150 in ratio 1:2:3", opts: ["25:50:75", "30:60:90", "50:50:50", "40:60:80"], ans: "25:50:75" }
        ];
        return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
    }
    
    // Generic math MCQ
    return {
        question: `[Set ${variant} Q${num}] Which of the following statements about ${chapter} is true?`,
        options: ["Statement A is correct", "Statement B is correct", "Both A and B", "Neither"],
        answer: "Both A and B"
    };
}

function getChemistryMCQ(chapter: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    const mcqs = [
        { q: "What is the chemical symbol for water?", opts: ["H2O", "HO", "H2O2", "H3O"], ans: "H2O" },
        { q: "Which gas do plants absorb?", opts: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], ans: "Carbon dioxide" },
        { q: "What is the pH of pure water?", opts: ["5", "7", "9", "14"], ans: "7" },
        { q: "Which element is essential for life?", opts: ["Gold", "Silver", "Carbon", "Mercury"], ans: "Carbon" },
        { q: "What percentage of air is nitrogen?", opts: ["21%", "50%", "78%", "90%"], ans: "78%" },
        { q: "Which is a compound?", opts: ["Oxygen", "Iron", "Salt", "Gold"], ans: "Salt" },
        { q: "What is the chemical formula for salt?", opts: ["NaCl", "KCl", "CaCO3", "NaOH"], ans: "NaCl" },
        { q: "Which gas is produced during photosynthesis?", opts: ["CO2", "N2", "O2", "H2"], ans: "O2" },
        { q: "What is the boiling point of water?", opts: ["0°C", "50°C", "100°C", "150°C"], ans: "100°C" },
        { q: "Which is a pure substance?", opts: ["Air", "Sea water", "Gold", "Milk"], ans: "Gold" }
    ];
    return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
}

function getBiologyMCQ(chapter: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    const mcqs = [
        { q: "What is the basic unit of life?", opts: ["Atom", "Cell", "Tissue", "Organ"], ans: "Cell" },
        { q: "Which organ pumps blood?", opts: ["Liver", "Kidney", "Heart", "Lungs"], ans: "Heart" },
        { q: "Where does digestion begin?", opts: ["Stomach", "Mouth", "Small intestine", "Esophagus"], ans: "Mouth" },
        { q: "Which gas do we breathe out?", opts: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], ans: "Carbon dioxide" },
        { q: "What is the function of red blood cells?", opts: ["Fight disease", "Carry oxygen", "Clot blood", "Digest food"], ans: "Carry oxygen" },
        { q: "Which system controls body functions?", opts: ["Digestive", "Respiratory", "Nervous", "Circulatory"], ans: "Nervous" },
        { q: "What is photosynthesis?", opts: ["Breathing", "Making food", "Digestion", "Circulation"], ans: "Making food" },
        { q: "Which is the largest organ?", opts: ["Heart", "Liver", "Skin", "Brain"], ans: "Skin" },
        { q: "What gives plants green color?", opts: ["Carotene", "Chlorophyll", "Melanin", "Hemoglobin"], ans: "Chlorophyll" },
        { q: "How many chambers in human heart?", opts: ["Two", "Three", "Four", "Five"], ans: "Four" }
    ];
    return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
}

function getComputerMCQ(chapter: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    const mcqs = [
        { q: "What does CPU stand for?", opts: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"], ans: "Central Processing Unit" },
        { q: "Which is an input device?", opts: ["Monitor", "Printer", "Keyboard", "Speaker"], ans: "Keyboard" },
        { q: "What is RAM?", opts: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Rapid Access Memory"], ans: "Random Access Memory" },
        { q: "Which is a web browser?", opts: ["MS Word", "Chrome", "Excel", "PowerPoint"], ans: "Chrome" },
        { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Text Making Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], ans: "Hyper Text Markup Language" },
        { q: "Which key deletes text?", opts: ["Enter", "Shift", "Backspace", "Ctrl"], ans: "Backspace" },
        { q: "What is an operating system?", opts: ["Hardware", "Software", "Device", "Network"], ans: "Software" },
        { q: "Which stores data permanently?", opts: ["RAM", "Cache", "Hard disk", "Register"], ans: "Hard disk" },
        { q: "What is the brain of computer?", opts: ["Monitor", "CPU", "Keyboard", "Mouse"], ans: "CPU" },
        { q: "Which is output device?", opts: ["Scanner", "Microphone", "Printer", "Keyboard"], ans: "Printer" }
    ];
    return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
}

function getEnglishMCQ(chapter: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    const mcqs = [
        { q: "Which is a noun?", opts: ["Run", "Quickly", "Beautiful", "Teacher"], ans: "Teacher" },
        { q: "What is the plural of 'child'?", opts: ["Childs", "Children", "Childes", "Childer"], ans: "Children" },
        { q: "Which is a verb?", opts: ["Happy", "Dog", "Jump", "Slowly"], ans: "Jump" },
        { q: "What is an adjective?", opts: ["Word describing noun", "Action word", "Naming word", "Joining word"], ans: "Word describing noun" },
        { q: "Which is correct?", opts: ["He go", "He goes", "He going", "He gone"], ans: "He goes" },
        { q: "What is a pronoun?", opts: ["Naming word", "Action word", "Word replacing noun", "Describing word"], ans: "Word replacing noun" },
        { q: "Which is past tense of 'run'?", opts: ["Runs", "Running", "Ran", "Runned"], ans: "Ran" },
        { q: "What is a sentence?", opts: ["Group of words", "Single word", "Complete thought", "Question"], ans: "Complete thought" },
        { q: "Which is an adverb?", opts: ["Quick", "Quickly", "Quickness", "Quicker"], ans: "Quickly" },
        { q: "What is punctuation?", opts: ["Spelling", "Grammar", "Marks in writing", "Vocabulary"], ans: "Marks in writing" }
    ];
    return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
}

function getHistoryMCQ(chapter: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    const mcqs = [
        { q: "Who wrote the Vedas?", opts: ["Aryans", "Dravidians", "Greeks", "Romans"], ans: "Aryans" },
        { q: "Which is oldest Veda?", opts: ["Yajur Veda", "Sama Veda", "Rig Veda", "Atharva Veda"], ans: "Rig Veda" },
        { q: "Who founded Buddhism?", opts: ["Mahavira", "Gautama Buddha", "Ashoka", "Chandragupta"], ans: "Gautama Buddha" },
        { q: "Where was Buddha born?", opts: ["Pataliputra", "Lumbini", "Bodh Gaya", "Sarnath"], ans: "Lumbini" },
        { q: "Who was first Mauryan emperor?", opts: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Brihadratha"], ans: "Chandragupta Maurya" },
        { q: "What was capital of Magadha?", opts: ["Delhi", "Pataliputra", "Takshashila", "Ujjain"], ans: "Pataliputra" },
        { q: "Who founded Jainism?", opts: ["Buddha", "Mahavira", "Ashoka", "Nanak"], ans: "Mahavira" },
        { q: "Which dynasty ruled during Golden Age?", opts: ["Maurya", "Gupta", "Mughal", "British"], ans: "Gupta" },
        { q: "What language were Vedas written in?", opts: ["Hindi", "Sanskrit", "Pali", "Prakrit"], ans: "Sanskrit" },
        { q: "Who built Sanchi Stupa?", opts: ["Akbar", "Ashoka", "Shah Jahan", "Aurangzeb"], ans: "Ashoka" }
    ];
    return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
}

function getGeographyMCQ(chapter: string, variant: string, num: number): { question: string, options: string[], answer: string } {
    const mcqs = [
        { q: "What is a map?", opts: ["Picture of sky", "Representation of Earth", "Drawing of city", "Photo of land"], ans: "Representation of Earth" },
        { q: "Which is highest mountain?", opts: ["K2", "Everest", "Kanchenjunga", "Nanda Devi"], ans: "Everest" },
        { q: "What is a plateau?", opts: ["High flat land", "Low valley", "River basin", "Mountain peak"], ans: "High flat land" },
        { q: "Which is largest ocean?", opts: ["Atlantic", "Indian", "Pacific", "Arctic"], ans: "Pacific" },
        { q: "What is agriculture?", opts: ["Fishing", "Farming", "Mining", "Trading"], ans: "Farming" },
        { q: "Which soil is best for crops?", opts: ["Sandy", "Clay", "Loamy", "Rocky"], ans: "Loamy" },
        { q: "What are minerals?", opts: ["Plants", "Animals", "Natural resources", "Water bodies"], ans: "Natural resources" },
        { q: "Which is a river?", opts: ["Himalayas", "Ganga", "Sahara", "Pacific"], ans: "Ganga" },
        { q: "What is climate?", opts: ["Daily weather", "Long-term weather pattern", "Temperature only", "Rainfall only"], ans: "Long-term weather pattern" },
        { q: "Which line divides Earth?", opts: ["Tropic of Cancer", "Equator", "Prime Meridian", "Arctic Circle"], ans: "Equator" }
    ];
    return { question: mcqs[num - 1].q, options: mcqs[num - 1].opts, answer: mcqs[num - 1].ans };
}

function getVeryShortQuestion(subjectName: string, chapterName: string, variant: string, num: number): string {
    return `[Set ${variant} Q${num}] ${chapterName}: Define or explain a key concept (2 marks).`;
}

function getShortQuestion(subjectName: string, chapterName: string, variant: string, num: number): string {
    return `[Set ${variant} Q${num}] ${chapterName}: Explain a topic with examples (4 marks).`;
}

function getLongQuestion(subjectName: string, chapterName: string, variant: string, num: number): string {
    return `[Set ${variant} Q${num}] ${chapterName}: Describe in detail with diagrams and examples (5 marks).`;
}

generateAllSubjectVariants().catch(console.error);
