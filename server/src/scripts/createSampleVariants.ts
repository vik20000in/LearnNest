import { initDatabase } from '../db/database';

async function createSampleVariants() {
    console.log('Creating sample paper variants for demonstration...\n');
    
    const db = await initDatabase();
    
    // Get a subject
    const subject = await db.get('SELECT id, name FROM subjects WHERE name = "Maths" LIMIT 1');
    
    if (!subject) {
        console.log('❌ Subject not found');
        return;
    }

    const variantSetId = `demo_variant_${Date.now()}`;
    const variantLabels = ['A', 'B', 'C'];
    
    console.log(`Creating variant set: ${variantSetId}\n`);

    for (const label of variantLabels) {
        const paper = {
            title: `Demo Math Practice Paper - Set ${label}`,
            school: "LearnNest School",
            class: "Class 6 ICSE",
            subject: subject.name,
            sections: [
                {
                    name: "Section A: Multiple Choice",
                    questions: [
                        {
                            id: 1,
                            question: `What is ${label === 'A' ? '5 + 3' : label === 'B' ? '7 + 2' : '4 + 5'}?`,
                            options: label === 'A' ? ["6", "7", "8", "9"] : label === 'B' ? ["7", "8", "9", "10"] : ["8", "9", "10", "11"],
                            answer: label === 'A' ? "8" : label === 'B' ? "9" : "9",
                            marks: 1
                        },
                        {
                            id: 2,
                            question: `Solve: ${label === 'A' ? '12 ÷ 3' : label === 'B' ? '15 ÷ 3' : '18 ÷ 3'}`,
                            options: ["3", "4", "5", "6"],
                            answer: label === 'A' ? "4" : label === 'B' ? "5" : "6",
                            marks: 1
                        }
                    ]
                },
                {
                    name: "Section B: Short Answer",
                    questions: [
                        {
                            id: 3,
                            question: `Find the ${label === 'A' ? 'perimeter' : label === 'B' ? 'area' : 'diagonal'} of a ${label === 'A' ? 'rectangle with length 5cm and width 3cm' : label === 'B' ? 'square with side 4cm' : 'rectangle with length 6cm and width 3cm'}.`,
                            answer: label === 'A' ? "Perimeter = 2(l+w) = 2(5+3) = 16cm" : label === 'B' ? "Area = side² = 4² = 16cm²" : "Using Pythagoras: √(6²+3²) = √45 = 6.7cm",
                            marks: 3
                        }
                    ]
                },
                {
                    name: "Section C: Long Answer",
                    questions: [
                        {
                            id: 4,
                            question: `A shopkeeper ${label === 'A' ? 'bought 20 apples at ₹5 each and sold them at ₹7 each' : label === 'B' ? 'bought 30 oranges at ₹4 each and sold them at ₹6 each' : 'bought 25 mangoes at ₹6 each and sold them at ₹8 each'}. Calculate the profit and profit percentage.`,
                            answer: label === 'A' ? "Cost = 20×5 = ₹100, Sale = 20×7 = ₹140, Profit = ₹40, Profit% = 40%" : label === 'B' ? "Cost = 30×4 = ₹120, Sale = 30×6 = ₹180, Profit = ₹60, Profit% = 50%" : "Cost = 25×6 = ₹150, Sale = 25×8 = ₹200, Profit = ₹50, Profit% = 33.33%",
                            marks: 5
                        }
                    ]
                }
            ]
        };

        const result = await db.run(
            'INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) VALUES (?, ?, ?, ?, ?)',
            subject.id,
            paper.title,
            JSON.stringify(paper),
            variantSetId,
            label
        );

        console.log(`✅ Created Set ${label} (Paper ID: ${result.lastID})`);
    }

    console.log(`\n✨ Successfully created 3 sample variants!`);
    console.log(`📊 Variant Set ID: ${variantSetId}`);
    console.log('\n💡 You can now:');
    console.log('   1. View these variants in the frontend Annual Papers tab');
    console.log('   2. See variant labels (Set A, B, C) next to each paper');
    console.log('   3. Export any variant as PDF\n');
}

createSampleVariants().catch(console.error);
