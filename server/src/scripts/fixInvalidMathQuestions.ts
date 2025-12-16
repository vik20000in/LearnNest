import { getDb } from '../db/database';
import { generateText } from '../services/aiService';
import * as fs from 'fs';
import * as path from 'path';

interface Question {
    question: string;
    options?: string[];
    answer: string;
    marks: number;
}

interface Section {
    name: string;
    type: string;
    questions: Question[];
}

interface InvalidQuestionReport {
    chapterName: string;
    paperTitle: string;
    paperId: number;
    sectionName: string;
    questionNumber: number;
    question: string;
    reason: string;
}

const generateReplacementQuestion = async (
    chapterName: string,
    chapterSyllabus: string,
    questionType: 'mcq' | 'short' | 'long',
    marks: number,
    invalidQuestion: string,
    reason: string
): Promise<Question | null> => {
    const typeDescriptions = {
        mcq: 'multiple choice question with 4 options (A, B, C, D)',
        short: 'short answer question (2-3 lines explanation)',
        long: 'long answer question (detailed step-by-step solution)'
    };

    const prompt = `Generate a NEW ${typeDescriptions[questionType]} for Class 6 ICSE Mathematics students in India.

Chapter: ${chapterName}
Syllabus Topics: ${chapterSyllabus}
Marks: ${marks}

IMPORTANT CONTEXT:
- This question replaces an invalid question: "${invalidQuestion}"
- Reason it was invalid: ${reason}
- Generate a COMPLETELY DIFFERENT question that properly tests concepts from ${chapterName}
- Make sure it's appropriate for Class 6 ICSE students in India
- Question must be directly related to the chapter topics

Respond in JSON format only:
{
    "question": "Your contextually appropriate question here",
    ${questionType === 'mcq' ? '"options": ["A) option1", "B) option2", "C) option3", "D) option4"],' : ''}
    "answer": "Complete answer${questionType === 'long' ? ' with detailed step-by-step explanation' : ''}"
}`;

    try {
        const response = await generateText(prompt);
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        
        if (jsonMatch) {
            const result = JSON.parse(jsonMatch[0]);
            return {
                question: result.question,
                options: result.options,
                answer: result.answer,
                marks
            };
        }
        
        console.log('   ⚠️ Failed to parse AI response');
        return null;
    } catch (error: any) {
        console.error(`   ⚠️ Error generating question: ${error.message}`);
        return null;
    }
};

const fixInvalidQuestions = async () => {
    console.log('🔧 Starting to fix invalid Math questions...\n');
    
    // Read the validation report
    const reportPath = path.join(__dirname, '../../math_validation_report.json');
    if (!fs.existsSync(reportPath)) {
        console.error('❌ Report not found! Run npm run validate:math:report first.');
        process.exit(1);
    }

    const invalidQuestions: InvalidQuestionReport[] = JSON.parse(
        fs.readFileSync(reportPath, 'utf-8')
    );

    console.log(`Found ${invalidQuestions.length} invalid questions to fix\n`);

    const db = await getDb();
    
    // Group by paper ID for efficiency
    const questionsByPaper = invalidQuestions.reduce((acc, q) => {
        if (!acc[q.paperId]) acc[q.paperId] = [];
        acc[q.paperId].push(q);
        return acc;
    }, {} as Record<number, InvalidQuestionReport[]>);

    let totalFixed = 0;
    let totalFailed = 0;

    // Get chapter syllabi for context
    const chapters = await db.all('SELECT id, name, syllabus FROM chapters');
    const chapterMap = new Map(chapters.map(c => [c.name, c.syllabus || 'No syllabus provided']));

    for (const [paperIdStr, questions] of Object.entries(questionsByPaper)) {
        const paperId = Number(paperIdStr);
        console.log(`\n${'='.repeat(80)}`);
        console.log(`📄 Processing Paper ID: ${paperId} - ${questions[0].paperTitle}`);
        console.log(`   Chapter: ${questions[0].chapterName}`);
        console.log(`   Invalid questions: ${questions.length}`);
        console.log(`${'='.repeat(80)}\n`);

        try {
            // Load paper content
            const paper = await db.get('SELECT content FROM question_papers WHERE id = ?', paperId);
            if (!paper) {
                console.log('   ⚠️ Paper not found in database, skipping...');
                totalFailed += questions.length;
                continue;
            }

            const content = JSON.parse(paper.content);
            const sections: Section[] = content.sections || [];
            
            const chapterSyllabus = chapterMap.get(questions[0].chapterName) || 'No syllabus provided';

            for (const invalid of questions) {
                console.log(`\n   🔍 Fixing Q${invalid.questionNumber} in "${invalid.sectionName}"`);
                console.log(`      Old question: ${invalid.question.substring(0, 80)}...`);
                console.log(`      Reason: ${invalid.reason}`);

                // Find the section and question
                const section = sections.find(s => 
                    s.name === invalid.sectionName || s.type === invalid.sectionName
                );

                if (!section) {
                    console.log(`      ⚠️ Section not found, skipping...`);
                    totalFailed++;
                    continue;
                }

                const questionIndex = invalid.questionNumber - 1;
                if (questionIndex < 0 || questionIndex >= section.questions.length) {
                    console.log(`      ⚠️ Question index out of range, skipping...`);
                    totalFailed++;
                    continue;
                }

                const oldQuestion = section.questions[questionIndex];

                // Determine question type
                let questionType: 'mcq' | 'short' | 'long' = 'short';
                if (invalid.sectionName.toLowerCase().includes('mcq') || invalid.sectionName.toLowerCase().includes('multiple choice') || oldQuestion.options) {
                    questionType = 'mcq';
                } else if (invalid.sectionName.toLowerCase().includes('long')) {
                    questionType = 'long';
                }

                console.log(`      🤖 Generating new ${questionType} question...`);

                const newQuestion = await generateReplacementQuestion(
                    invalid.chapterName,
                    chapterSyllabus,
                    questionType,
                    oldQuestion.marks,
                    invalid.question,
                    invalid.reason
                );

                if (newQuestion) {
                    section.questions[questionIndex] = newQuestion;
                    console.log(`      ✅ Successfully generated: ${newQuestion.question.substring(0, 80)}...`);
                    totalFixed++;
                } else {
                    console.log(`      ❌ Failed to generate replacement`);
                    totalFailed++;
                }

                // Small delay to avoid overwhelming Ollama
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            // Save updated paper
            content.sections = sections;
            await db.run(
                'UPDATE question_papers SET content = ? WHERE id = ?',
                JSON.stringify(content),
                paperId
            );
            console.log(`\n   💾 Paper ${paperId} updated successfully`);

        } catch (error: any) {
            console.error(`   ❌ Error processing paper ${paperId}: ${error.message}`);
            totalFailed += questions.length;
        }
    }

    console.log(`\n\n${'='.repeat(80)}`);
    console.log('📊 FIX SUMMARY');
    console.log(`${'='.repeat(80)}`);
    console.log(`Total invalid questions: ${invalidQuestions.length}`);
    console.log(`Successfully fixed: ${totalFixed}`);
    console.log(`Failed to fix: ${totalFailed}`);
    console.log(`Success rate: ${((totalFixed / invalidQuestions.length) * 100).toFixed(1)}%`);
    console.log(`${'='.repeat(80)}\n`);

    if (totalFixed > 0) {
        console.log('✅ Database has been updated with fixed questions!');
        console.log('💡 Tip: Run npm run validate:math:report again to verify fixes\n');
    }
};

// Run the script
fixInvalidQuestions()
    .then(() => {
        console.log('✅ Fix process complete!');
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Error:', error);
        process.exit(1);
    });
