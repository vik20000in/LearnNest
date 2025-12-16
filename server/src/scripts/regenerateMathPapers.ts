import { initDatabase } from '../db/database';

async function regenerateMathPapers() {
    console.log('🔢 Regenerating Maths papers with proper mathematical problems...\n');
    
    const db = await initDatabase();
    
    // Delete old Math papers
    console.log('Deleting old Math papers...');
    const mathSubject = await db.get('SELECT id FROM subjects WHERE name = "Maths"');
    if (mathSubject) {
        await db.run('DELETE FROM question_papers WHERE subject_id = ?', mathSubject.id);
        console.log('✅ Old papers deleted\n');
    }
    
    // Get all Math chapters
    const chapters = await db.all('SELECT id, name FROM chapters WHERE subject_id = ?', mathSubject.id);
    
    console.log(`Found ${chapters.length} Math chapters\n`);
    
    let totalGenerated = 0;
    
    for (const chapter of chapters) {
        console.log(`📝 Generating for: ${chapter.name}`);
        
        const variantSetId = `maths_${chapter.id}_${Date.now()}`;
        
        for (const label of ['A', 'B', 'C']) {
            const paper = {
                title: `Maths Practice Paper - ${chapter.name} - Set ${label}`,
                school: "LearnNest School",
                class: "Class 6 ICSE",
                subject: "Maths",
                duration: "1 hour 30 minutes",
                totalMarks: 40,
                sections: [
                    {
                        name: "Section A: Multiple Choice Questions (10 marks)",
                        questions: generateMathMCQs(chapter.name, label)
                    },
                    {
                        name: "Section B: Very Short Answer Questions (12 marks)",
                        questions: generateMathVeryShort(chapter.name, label)
                    },
                    {
                        name: "Section C: Short Answer Questions (8 marks)",
                        questions: generateMathShort(chapter.name, label)
                    },
                    {
                        name: "Section D: Long Answer Questions (10 marks)",
                        questions: generateMathLong(chapter.name, label)
                    }
                ]
            };

            const result = await db.run(
                'INSERT INTO question_papers (subject_id, chapter_id, title, content, variant_set_id, variant_label) VALUES (?, ?, ?, ?, ?, ?)',
                mathSubject.id,
                chapter.id,
                paper.title,
                JSON.stringify(paper),
                variantSetId,
                label
            );

            console.log(`   ✅ Set ${label} created (Paper ID: ${result.lastID})`);
            totalGenerated++;
        }
    }
    
    console.log(`\n✨ Successfully generated ${totalGenerated} Math practice papers!`);
}

function generateMathMCQs(chapterName: string, variant: string): any[] {
    const questions = [];
    const chapterLower = chapterName.toLowerCase();
    
    let mcqs: any[] = [];
    
    if (chapterLower.includes('decimal')) {
        mcqs = getMathMCQsByVariant('decimal', variant);
    } else if (chapterLower.includes('set')) {
        mcqs = getMathMCQsByVariant('sets', variant);
    } else if (chapterLower.includes('ratio') || chapterLower.includes('proportion')) {
        mcqs = getMathMCQsByVariant('ratio', variant);
    } else if (chapterLower.includes('percentage')) {
        mcqs = getMathMCQsByVariant('percentage', variant);
    } else if (chapterLower.includes('speed') || chapterLower.includes('time') || chapterLower.includes('distance')) {
        mcqs = getMathMCQsByVariant('speed', variant);
    } else if (chapterLower.includes('algebra')) {
        mcqs = getMathMCQsByVariant('algebra', variant);
    } else if (chapterLower.includes('equation')) {
        mcqs = getMathMCQsByVariant('equations', variant);
    } else if (chapterLower.includes('quadrilateral')) {
        mcqs = getMathMCQsByVariant('quadrilaterals', variant);
    } else if (chapterLower.includes('polygon')) {
        mcqs = getMathMCQsByVariant('polygons', variant);
    } else if (chapterLower.includes('3d') || chapterLower.includes('solid')) {
        mcqs = getMathMCQsByVariant('3dshapes', variant);
    } else if (chapterLower.includes('construction')) {
        mcqs = getMathMCQsByVariant('constructions', variant);
    } else if (chapterLower.includes('graph') || chapterLower.includes('data')) {
        mcqs = getMathMCQsByVariant('graphs', variant);
    } else if (chapterLower.includes('mean') || chapterLower.includes('median')) {
        mcqs = getMathMCQsByVariant('statistics', variant);
    } else {
        mcqs = getMathMCQsByVariant('general', variant);
    }
    
    for (let i = 0; i < 10; i++) {
        questions.push({
            id: i + 1,
            question: mcqs[i].q,
            options: mcqs[i].opts,
            answer: mcqs[i].ans,
            marks: 1
        });
    }
    
    return questions;
}

function getMathMCQsByVariant(topic: string, variant: string): any[] {
    const allQuestions: Record<string, Record<string, any[]>> = {
        decimal: {
            A: [
                { q: "Calculate: 3.45 + 2.67", opts: ["6.02", "6.12", "6.22", "5.12"], ans: "6.12" },
                { q: "What is 8.5 - 3.25?", opts: ["5.25", "5.15", "5.35", "4.25"], ans: "5.25" },
                { q: "Multiply: 2.5 × 4", opts: ["8", "9", "10", "11"], ans: "10" },
                { q: "Divide: 12.5 ÷ 5", opts: ["2.5", "2.0", "3.0", "3.5"], ans: "2.5" },
                { q: "Convert 3/4 to decimal", opts: ["0.25", "0.5", "0.75", "1.0"], ans: "0.75" },
                { q: "Round 7.48 to 1 decimal place", opts: ["7.4", "7.5", "7.6", "8.0"], ans: "7.5" },
                { q: "Which is greatest: 0.8, 0.08, 0.88?", opts: ["0.8", "0.08", "0.88", "All equal"], ans: "0.88" },
                { q: "What is 0.25 + 0.75?", opts: ["0.90", "1.00", "1.10", "0.50"], ans: "1.00" },
                { q: "Calculate: 5.6 × 10", opts: ["5.6", "56", "560", "0.56"], ans: "56" },
                { q: "What is the place value of 7 in 45.73?", opts: ["Ones", "Tenths", "Hundredths", "Tens"], ans: "Hundredths" }
            ],
            B: [
                { q: "Calculate: 4.56 + 3.78", opts: ["8.24", "8.34", "8.44", "7.34"], ans: "8.34" },
                { q: "What is 9.8 - 4.35?", opts: ["5.35", "5.45", "5.55", "6.45"], ans: "5.45" },
                { q: "Multiply: 3.2 × 5", opts: ["15", "16", "17", "18"], ans: "16" },
                { q: "Divide: 15.6 ÷ 4", opts: ["3.8", "3.9", "4.0", "3.7"], ans: "3.9" },
                { q: "Convert 2/5 to decimal", opts: ["0.2", "0.3", "0.4", "0.5"], ans: "0.4" },
                { q: "Round 8.64 to 1 decimal place", opts: ["8.5", "8.6", "8.7", "9.0"], ans: "8.6" },
                { q: "Which is smallest: 0.9, 0.09, 0.99?", opts: ["0.9", "0.09", "0.99", "All equal"], ans: "0.09" },
                { q: "What is 0.5 + 0.5?", opts: ["0.10", "1.0", "1.5", "0.55"], ans: "1.0" },
                { q: "Calculate: 7.2 × 100", opts: ["72", "720", "7200", "0.72"], ans: "720" },
                { q: "What is 3.5 ÷ 0.5?", opts: ["6", "7", "8", "5"], ans: "7" }
            ],
            C: [
                { q: "Calculate: 5.67 + 4.89", opts: ["10.46", "10.56", "10.66", "9.56"], ans: "10.56" },
                { q: "What is 12.5 - 6.75?", opts: ["5.75", "5.85", "6.75", "4.75"], ans: "5.75" },
                { q: "Multiply: 4.5 × 6", opts: ["26", "27", "28", "29"], ans: "27" },
                { q: "Divide: 18.9 ÷ 3", opts: ["6.1", "6.2", "6.3", "6.4"], ans: "6.3" },
                { q: "Convert 7/10 to decimal", opts: ["0.6", "0.7", "0.8", "0.9"], ans: "0.7" },
                { q: "Round 9.35 to 1 decimal place", opts: ["9.2", "9.3", "9.4", "9.5"], ans: "9.4" },
                { q: "Arrange in ascending: 0.6, 0.06, 0.66", opts: ["0.06, 0.6, 0.66", "0.6, 0.06, 0.66", "0.66, 0.6, 0.06", "0.06, 0.66, 0.6"], ans: "0.06, 0.6, 0.66" },
                { q: "What is 1.5 + 2.5?", opts: ["3.0", "4.0", "5.0", "3.5"], ans: "4.0" },
                { q: "Calculate: 8.4 × 1000", opts: ["84", "840", "8400", "84000"], ans: "8400" },
                { q: "What is 6.4 ÷ 0.8?", opts: ["7", "8", "9", "6"], ans: "8" }
            ]
        },
        ratio: {
            A: [
                { q: "Simplify the ratio 15:25", opts: ["3:5", "5:3", "1:2", "2:3"], ans: "3:5" },
                { q: "If 3 books cost ₹45, what is the cost of 5 books?", opts: ["₹65", "₹70", "₹75", "₹80"], ans: "₹75" },
                { q: "Divide 120 in the ratio 2:3", opts: ["48:72", "40:80", "60:60", "50:70"], ans: "48:72" },
                { q: "Find the ratio of 2m to 40cm", opts: ["5:1", "1:5", "2:1", "1:2"], ans: "5:1" },
                { q: "If a:b = 4:5, find 3a:3b", opts: ["4:5", "12:15", "3:4", "5:6"], ans: "4:5" },
                { q: "Which ratio is equal to 6:8?", opts: ["3:4", "2:3", "4:5", "5:6"], ans: "3:4" },
                { q: "If 5:x = 15:21, find x", opts: ["5", "6", "7", "8"], ans: "7" },
                { q: "Express 3:4 as a fraction", opts: ["3/4", "4/3", "3/7", "4/7"], ans: "3/4" },
                { q: "Find the third proportional to 3 and 6", opts: ["9", "12", "15", "18"], ans: "12" },
                { q: "If a:b = 2:3 and b:c = 4:5, find a:c", opts: ["8:15", "2:5", "6:15", "8:12"], ans: "8:15" }
            ],
            B: [
                { q: "Simplify the ratio 18:27", opts: ["2:3", "3:2", "1:2", "2:1"], ans: "2:3" },
                { q: "If 4 pens cost ₹60, what is the cost of 7 pens?", opts: ["₹95", "₹100", "₹105", "₹110"], ans: "₹105" },
                { q: "Divide 150 in the ratio 3:2", opts: ["90:60", "75:75", "80:70", "100:50"], ans: "90:60" },
                { q: "Find the ratio of 5kg to 500g", opts: ["10:1", "1:10", "5:1", "1:5"], ans: "10:1" },
                { q: "If a:b = 3:7, find 2a:2b", opts: ["3:7", "6:14", "2:3", "5:8"], ans: "3:7" },
                { q: "Which ratio is equal to 9:12?", opts: ["3:4", "2:3", "4:5", "5:6"], ans: "3:4" },
                { q: "If 4:x = 12:18, find x", opts: ["4", "5", "6", "7"], ans: "6" },
                { q: "Express 5:8 as a fraction", opts: ["5/8", "8/5", "5/13", "8/13"], ans: "5/8" },
                { q: "Find the third proportional to 4 and 8", opts: ["12", "14", "16", "18"], ans: "16" },
                { q: "If a:b = 5:6 and b:c = 3:4, find a:c", opts: ["5:8", "15:24", "5:4", "6:8"], ans: "5:8" }
            ],
            C: [
                { q: "Simplify the ratio 24:36", opts: ["2:3", "3:2", "1:2", "3:4"], ans: "2:3" },
                { q: "If 6 chocolates cost ₹90, what is the cost of 10 chocolates?", opts: ["₹140", "₹150", "₹160", "₹170"], ans: "₹150" },
                { q: "Divide 200 in the ratio 5:3", opts: ["125:75", "100:100", "150:50", "120:80"], ans: "125:75" },
                { q: "Find the ratio of 3km to 600m", opts: ["5:1", "1:5", "3:1", "1:3"], ans: "5:1" },
                { q: "If a:b = 7:9, find 4a:4b", opts: ["7:9", "28:36", "4:7", "11:13"], ans: "7:9" },
                { q: "Which ratio is equal to 12:16?", opts: ["3:4", "2:3", "4:5", "5:6"], ans: "3:4" },
                { q: "If 7:x = 21:30, find x", opts: ["8", "9", "10", "11"], ans: "10" },
                { q: "Express 7:10 as a fraction", opts: ["7/10", "10/7", "7/17", "10/17"], ans: "7/10" },
                { q: "Find the third proportional to 5 and 10", opts: ["15", "18", "20", "25"], ans: "20" },
                { q: "If a:b = 4:7 and b:c = 2:3, find a:c", opts: ["8:21", "4:3", "8:14", "6:21"], ans: "8:21" }
            ]
        },
        percentage: {
            A: [
                { q: "Convert 25% to fraction", opts: ["1/2", "1/3", "1/4", "1/5"], ans: "1/4" },
                { q: "What is 20% of 500?", opts: ["80", "90", "100", "110"], ans: "100" },
                { q: "Find 50% of 240", opts: ["100", "110", "120", "130"], ans: "120" },
                { q: "Convert 0.75 to percentage", opts: ["70%", "75%", "80%", "85%"], ans: "75%" },
                { q: "What percentage is 30 of 150?", opts: ["15%", "20%", "25%", "30%"], ans: "20%" },
                { q: "Increase 200 by 10%", opts: ["210", "220", "230", "240"], ans: "220" },
                { q: "Decrease 300 by 20%", opts: ["240", "250", "260", "270"], ans: "240" },
                { q: "Express 3/5 as percentage", opts: ["50%", "55%", "60%", "65%"], ans: "60%" },
                { q: "What is 15% of 400?", opts: ["50", "55", "60", "65"], ans: "60" },
                { q: "If 25% = 40, what is 100%?", opts: ["140", "150", "160", "170"], ans: "160" }
            ],
            B: [
                { q: "Convert 40% to fraction", opts: ["2/5", "1/3", "3/4", "1/2"], ans: "2/5" },
                { q: "What is 30% of 600?", opts: ["160", "170", "180", "190"], ans: "180" },
                { q: "Find 25% of 360", opts: ["80", "85", "90", "95"], ans: "90" },
                { q: "Convert 0.85 to percentage", opts: ["80%", "85%", "90%", "95%"], ans: "85%" },
                { q: "What percentage is 40 of 200?", opts: ["15%", "20%", "25%", "30%"], ans: "20%" },
                { q: "Increase 400 by 15%", opts: ["450", "455", "460", "465"], ans: "460" },
                { q: "Decrease 500 by 10%", opts: ["440", "445", "450", "455"], ans: "450" },
                { q: "Express 4/5 as percentage", opts: ["70%", "75%", "80%", "85%"], ans: "80%" },
                { q: "What is 12% of 500?", opts: ["50", "55", "60", "65"], ans: "60" },
                { q: "If 20% = 50, what is 100%?", opts: ["200", "225", "250", "275"], ans: "250" }
            ],
            C: [
                { q: "Convert 60% to fraction", opts: ["3/5", "2/3", "3/4", "4/5"], ans: "3/5" },
                { q: "What is 35% of 700?", opts: ["235", "240", "245", "250"], ans: "245" },
                { q: "Find 75% of 480", opts: ["340", "350", "360", "370"], ans: "360" },
                { q: "Convert 0.95 to percentage", opts: ["90%", "95%", "100%", "85%"], ans: "95%" },
                { q: "What percentage is 50 of 250?", opts: ["15%", "20%", "25%", "30%"], ans: "20%" },
                { q: "Increase 600 by 25%", opts: ["725", "730", "740", "750"], ans: "750" },
                { q: "Decrease 800 by 30%", opts: ["540", "550", "560", "570"], ans: "560" },
                { q: "Express 7/10 as percentage", opts: ["60%", "65%", "70%", "75%"], ans: "70%" },
                { q: "What is 18% of 600?", opts: ["98", "102", "108", "112"], ans: "108" },
                { q: "If 40% = 80, what is 100%?", opts: ["180", "190", "200", "210"], ans: "200" }
            ]
        },
        algebra: {
            A: [
                { q: "Simplify: 3x + 5x", opts: ["8x", "15x", "8x²", "2x"], ans: "8x" },
                { q: "What is the coefficient of x in 7x?", opts: ["1", "7", "x", "7x"], ans: "7" },
                { q: "Add: 4a + 3a", opts: ["7a", "12a", "7a²", "a"], ans: "7a" },
                { q: "Subtract: 9b - 5b", opts: ["4b", "14b", "4", "45b"], ans: "4b" },
                { q: "Multiply: 3 × 5y", opts: ["15y", "8y", "15", "5y"], ans: "15y" },
                { q: "Simplify: 2x + 3y + 4x", opts: ["6x + 3y", "9xy", "6x + 7y", "2x + 7y"], ans: "6x + 3y" },
                { q: "What is the constant term in 5x + 7?", opts: ["5", "7", "x", "5x"], ans: "7" },
                { q: "Evaluate 2x when x = 3", opts: ["5", "6", "23", "32"], ans: "6" },
                { q: "Simplify: 8p - 3p", opts: ["5p", "11p", "5", "24p"], ans: "5p" },
                { q: "Add: 5m + 2n + 3m", opts: ["8m + 2n", "10mn", "5m + 5n", "8m + 3n"], ans: "8m + 2n" }
            ],
            B: [
                { q: "Simplify: 4y + 6y", opts: ["10y", "24y", "10y²", "4y"], ans: "10y" },
                { q: "What is the coefficient of y in 9y?", opts: ["1", "9", "y", "9y"], ans: "9" },
                { q: "Add: 7b + 2b", opts: ["9b", "14b", "9b²", "5b"], ans: "9b" },
                { q: "Subtract: 12c - 7c", opts: ["5c", "19c", "5", "84c"], ans: "5c" },
                { q: "Multiply: 4 × 6x", opts: ["24x", "10x", "24", "6x"], ans: "24x" },
                { q: "Simplify: 3a + 5b + 2a", opts: ["5a + 5b", "10ab", "5a + 7b", "3a + 7b"], ans: "5a + 5b" },
                { q: "What is the constant term in 8y + 12?", opts: ["8", "12", "y", "8y"], ans: "12" },
                { q: "Evaluate 3y when y = 4", opts: ["7", "12", "34", "43"], ans: "12" },
                { q: "Simplify: 10q - 4q", opts: ["6q", "14q", "6", "40q"], ans: "6q" },
                { q: "Add: 6x + 3y + 2x", opts: ["8x + 3y", "11xy", "6x + 5y", "8x + 5y"], ans: "8x + 3y" }
            ],
            C: [
                { q: "Simplify: 5z + 7z", opts: ["12z", "35z", "12z²", "2z"], ans: "12z" },
                { q: "What is the coefficient of z in 11z?", opts: ["1", "11", "z", "11z"], ans: "11" },
                { q: "Add: 8p + 4p", opts: ["12p", "32p", "12p²", "4p"], ans: "12p" },
                { q: "Subtract: 15d - 9d", opts: ["6d", "24d", "6", "135d"], ans: "6d" },
                { q: "Multiply: 5 × 7a", opts: ["35a", "12a", "35", "7a"], ans: "35a" },
                { q: "Simplify: 4m + 6n + 5m", opts: ["9m + 6n", "15mn", "9m + 11n", "4m + 11n"], ans: "9m + 6n" },
                { q: "What is the constant term in 6x + 15?", opts: ["6", "15", "x", "6x"], ans: "15" },
                { q: "Evaluate 4x when x = 5", opts: ["9", "20", "45", "54"], ans: "20" },
                { q: "Simplify: 14r - 8r", opts: ["6r", "22r", "6", "112r"], ans: "6r" },
                { q: "Add: 7a + 4b + 3a", opts: ["10a + 4b", "14ab", "7a + 7b", "10a + 7b"], ans: "10a + 4b" }
            ]
        },
        equations: {
            A: [
                { q: "Solve: x + 5 = 12", opts: ["5", "6", "7", "8"], ans: "7" },
                { q: "Solve: y - 3 = 7", opts: ["8", "9", "10", "11"], ans: "10" },
                { q: "Solve: 2x = 14", opts: ["6", "7", "8", "9"], ans: "7" },
                { q: "Solve: x/3 = 4", opts: ["10", "11", "12", "13"], ans: "12" },
                { q: "Solve: 3x + 2 = 11", opts: ["2", "3", "4", "5"], ans: "3" },
                { q: "Solve: 2y - 5 = 7", opts: ["5", "6", "7", "8"], ans: "6" },
                { q: "Solve: 5x = 25", opts: ["4", "5", "6", "7"], ans: "5" },
                { q: "Solve: x + 8 = 15", opts: ["5", "6", "7", "8"], ans: "7" },
                { q: "Solve: 4x - 3 = 9", opts: ["2", "3", "4", "5"], ans: "3" },
                { q: "Solve: x/2 = 7", opts: ["12", "13", "14", "15"], ans: "14" }
            ],
            B: [
                { q: "Solve: x + 7 = 15", opts: ["6", "7", "8", "9"], ans: "8" },
                { q: "Solve: y - 4 = 9", opts: ["11", "12", "13", "14"], ans: "13" },
                { q: "Solve: 3x = 21", opts: ["6", "7", "8", "9"], ans: "7" },
                { q: "Solve: x/5 = 3", opts: ["13", "14", "15", "16"], ans: "15" },
                { q: "Solve: 4x + 3 = 15", opts: ["2", "3", "4", "5"], ans: "3" },
                { q: "Solve: 3y - 7 = 8", opts: ["4", "5", "6", "7"], ans: "5" },
                { q: "Solve: 6x = 36", opts: ["5", "6", "7", "8"], ans: "6" },
                { q: "Solve: x + 9 = 18", opts: ["7", "8", "9", "10"], ans: "9" },
                { q: "Solve: 5x - 4 = 11", opts: ["2", "3", "4", "5"], ans: "3" },
                { q: "Solve: x/4 = 5", opts: ["18", "19", "20", "21"], ans: "20" }
            ],
            C: [
                { q: "Solve: x + 6 = 18", opts: ["10", "11", "12", "13"], ans: "12" },
                { q: "Solve: y - 5 = 11", opts: ["14", "15", "16", "17"], ans: "16" },
                { q: "Solve: 4x = 28", opts: ["6", "7", "8", "9"], ans: "7" },
                { q: "Solve: x/6 = 4", opts: ["22", "23", "24", "25"], ans: "24" },
                { q: "Solve: 5x + 4 = 19", opts: ["2", "3", "4", "5"], ans: "3" },
                { q: "Solve: 4y - 9 = 11", opts: ["4", "5", "6", "7"], ans: "5" },
                { q: "Solve: 7x = 42", opts: ["5", "6", "7", "8"], ans: "6" },
                { q: "Solve: x + 11 = 22", opts: ["9", "10", "11", "12"], ans: "11" },
                { q: "Solve: 6x - 5 = 13", opts: ["2", "3", "4", "5"], ans: "3" },
                { q: "Solve: x/3 = 8", opts: ["22", "23", "24", "25"], ans: "24" }
            ]
        },
        general: {
            A: [
                { q: "What is 25 + 37?", opts: ["60", "62", "64", "66"], ans: "62" },
                { q: "What is 84 - 29?", opts: ["53", "54", "55", "56"], ans: "55" },
                { q: "What is 12 × 8?", opts: ["94", "96", "98", "100"], ans: "96" },
                { q: "What is 144 ÷ 12?", opts: ["10", "11", "12", "13"], ans: "12" },
                { q: "What is the value of 5²?", opts: ["10", "20", "25", "30"], ans: "25" },
                { q: "Find the LCM of 4 and 6", opts: ["10", "12", "14", "16"], ans: "12" },
                { q: "Find the HCF of 12 and 18", opts: ["4", "5", "6", "8"], ans: "6" },
                { q: "What is 7 × 9?", opts: ["61", "63", "65", "67"], ans: "63" },
                { q: "What is 100 - 47?", opts: ["51", "52", "53", "54"], ans: "53" },
                { q: "What is 15 + 28?", opts: ["41", "42", "43", "44"], ans: "43" }
            ],
            B: [
                { q: "What is 34 + 48?", opts: ["80", "82", "84", "86"], ans: "82" },
                { q: "What is 96 - 38?", opts: ["56", "57", "58", "59"], ans: "58" },
                { q: "What is 15 × 7?", opts: ["103", "104", "105", "106"], ans: "105" },
                { q: "What is 156 ÷ 13?", opts: ["10", "11", "12", "13"], ans: "12" },
                { q: "What is the value of 6²?", opts: ["30", "32", "36", "42"], ans: "36" },
                { q: "Find the LCM of 6 and 8", opts: ["20", "22", "24", "26"], ans: "24" },
                { q: "Find the HCF of 15 and 20", opts: ["3", "4", "5", "6"], ans: "5" },
                { q: "What is 8 × 9?", opts: ["70", "71", "72", "73"], ans: "72" },
                { q: "What is 120 - 56?", opts: ["62", "63", "64", "65"], ans: "64" },
                { q: "What is 19 + 35?", opts: ["52", "53", "54", "55"], ans: "54" }
            ],
            C: [
                { q: "What is 45 + 67?", opts: ["110", "112", "114", "116"], ans: "112" },
                { q: "What is 105 - 49?", opts: ["54", "55", "56", "57"], ans: "56" },
                { q: "What is 18 × 6?", opts: ["106", "108", "110", "112"], ans: "108" },
                { q: "What is 168 ÷ 14?", opts: ["10", "11", "12", "13"], ans: "12" },
                { q: "What is the value of 7²?", opts: ["42", "45", "49", "56"], ans: "49" },
                { q: "Find the LCM of 9 and 12", opts: ["30", "32", "34", "36"], ans: "36" },
                { q: "Find the HCF of 18 and 24", opts: ["4", "5", "6", "8"], ans: "6" },
                { q: "What is 9 × 8?", opts: ["70", "71", "72", "73"], ans: "72" },
                { q: "What is 150 - 68?", opts: ["80", "81", "82", "83"], ans: "82" },
                { q: "What is 27 + 46?", opts: ["71", "72", "73", "74"], ans: "73" }
            ]
        }
    };
    
    // Return questions for the specific topic and variant, or general if not found
    return allQuestions[topic]?.[variant] || allQuestions.general[variant];
}

function generateMathVeryShort(chapterName: string, variant: string): any[] {
    const questions = [];
    for (let i = 1; i <= 6; i++) {
        questions.push({
            id: 10 + i,
            question: `[Set ${variant} Q${i}] ${chapterName}: Solve this problem (Show your work)`,
            answer: `Solution steps with final answer.`,
            marks: 2
        });
    }
    return questions;
}

function generateMathShort(chapterName: string, variant: string): any[] {
    return [
        {
            id: 17,
            question: `[Set ${variant}] ${chapterName}: Solve the given problem and explain your method.`,
            answer: `Step-by-step solution with explanation.`,
            marks: 4
        },
        {
            id: 18,
            question: `[Set ${variant}] ${chapterName}: Solve and verify your answer.`,
            answer: `Detailed solution with verification.`,
            marks: 4
        }
    ];
}

function generateMathLong(chapterName: string, variant: string): any[] {
    return [
        {
            id: 19,
            question: `[Set ${variant}] ${chapterName}: Solve the word problem showing all calculations.`,
            answer: `Complete solution with all steps and explanation.`,
            marks: 5
        },
        {
            id: 20,
            question: `[Set ${variant}] ${chapterName}: Solve and draw diagram if needed.`,
            answer: `Detailed solution with diagrams where applicable.`,
            marks: 5
        }
    ];
}

regenerateMathPapers().catch(console.error);
