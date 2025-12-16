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

interface QuestionRequest {
    chapterName: string;
    chapterSyllabus: string;
    questionType: 'mcq' | 'short' | 'long';
    marks: number;
    invalidQuestion: string;
    reason: string;
    sectionName: string;
    questionNumber: number;
}

// Generate multiple replacement questions in one AI call
const generateReplacementQuestionsBatch = async (
    requests: QuestionRequest[]
): Promise<(Question | null)[]> => {
    if (requests.length === 0) return [];

    const typeDescriptions = {
        mcq: 'multiple choice question with 4 options (A, B, C, D)',
        short: 'short answer question (2-3 lines explanation)',
        long: 'long answer question (detailed step-by-step solution)'
    };

    // Build batch prompt
    const questionsPrompt = requests.map((req, idx) => `
Question ${idx + 1}:
Chapter: ${req.chapterName}
Syllabus: ${req.chapterSyllabus}
Type: ${typeDescriptions[req.questionType]}
Marks: ${req.marks}
Invalid question to replace: "${req.invalidQuestion}"
Reason invalid: ${req.reason}

Generate a NEW question that:
- Tests concepts from ${req.chapterName}
- Is appropriate for Class 6 ICSE students in India
- Is COMPLETELY DIFFERENT from the invalid question
- Matches the syllabus topics listed above
`).join('\n---\n');

    const prompt = `Generate ${requests.length} NEW questions for Class 6 ICSE Mathematics students in India.

${questionsPrompt}

Respond with a JSON array containing ${requests.length} questions in this exact format:
[
${requests.map((req, idx) => `    {
        "questionNumber": ${idx + 1},
        "question": "Your contextually appropriate question here",
        ${req.questionType === 'mcq' ? '"options": ["A) option1", "B) option2", "C) option3", "D) option4"],' : ''}
        "answer": "Complete answer${req.questionType === 'long' ? ' with detailed step-by-step explanation' : ''}"
    }${idx < requests.length - 1 ? ',' : ''}`).join('\n')}
]`;

    try {
        const response = await generateText(prompt);
        const jsonMatch = response.match(/\[[\s\S]*\]/);
        
        if (jsonMatch) {
            const results = JSON.parse(jsonMatch[0]);
            return results.map((result: any, idx: number) => {
                const req = requests[idx];
                if (result && result.question) {
                    return {
                        question: result.question,
                        options: result.options,
                        answer: result.answer,
                        marks: req.marks
                    };
                }
                return null;
            });
        }
        
        console.log('   ⚠️ Failed to parse batch AI response, falling back to individual generation');
        // Fallback: generate individually
        return Promise.all(requests.map(req => generateReplacementQuestionSingle(req)));
    } catch (error: any) {
        console.error(`   ⚠️ Batch generation error: ${error.message}, falling back`);
        // Fallback: generate individually
        return Promise.all(requests.map(req => generateReplacementQuestionSingle(req)));
    }
};

// Fallback for single question generation
const generateReplacementQuestionSingle = async (req: QuestionRequest): Promise<Question | null> => {
    const typeDescriptions = {
        mcq: 'multiple choice question with 4 options (A, B, C, D)',
        short: 'short answer question (2-3 lines explanation)',
        long: 'long answer question (detailed step-by-step solution)'
    };

    const prompt = `Generate a NEW ${typeDescriptions[req.questionType]} for Class 6 ICSE Mathematics students in India.

Chapter: ${req.chapterName}
Syllabus Topics: ${req.chapterSyllabus}
Marks: ${req.marks}

IMPORTANT CONTEXT:
- This question replaces an invalid question: "${req.invalidQuestion}"
- Reason it was invalid: ${req.reason}
- Generate a COMPLETELY DIFFERENT question that properly tests concepts from ${req.chapterName}
- Make sure it's appropriate for Class 6 ICSE students in India
- Question must be directly related to the chapter topics

Respond in JSON format only:
{
    "question": "Your contextually appropriate question here",
    ${req.questionType === 'mcq' ? '"options": ["A) option1", "B) option2", "C) option3", "D) option4"],' : ''}
    "answer": "Complete answer${req.questionType === 'long' ? ' with detailed step-by-step explanation' : ''}"
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
                marks: req.marks
            };
        }
        return null;
    } catch (error: any) {
        console.error(`   ⚠️ Error generating single question: ${error.message}`);
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

    // Process papers in parallel (3 at a time to avoid overwhelming Ollama)
    const paperEntries = Object.entries(questionsByPaper);
    const PARALLEL_PAPERS = 3;

    const processPaper = async (paperIdStr: string, questions: InvalidQuestionReport[]): Promise<{ fixed: number; failed: number }> => {
        const paperId = Number(paperIdStr);
        console.log(`\n${'='.repeat(80)}`);
        console.log(`📄 Processing Paper ID: ${paperId} - ${questions[0].paperTitle}`);
        console.log(`   Chapter: ${questions[0].chapterName}`);
        console.log(`   Invalid questions: ${questions.length}`);
        console.log(`${'='.repeat(80)}\n`);

        let paperFixed = 0;
        let paperFailed = 0;

        try {
            // Load paper content
            const paper = await db.get('SELECT content FROM question_papers WHERE id = ?', paperId);
            if (!paper) {
                console.log('   ⚠️ Paper not found in database, skipping...');
                return { fixed: 0, failed: questions.length };
            }

            const content = JSON.parse(paper.content);
            const sections: Section[] = content.sections || [];
            
            const chapterSyllabus = chapterMap.get(questions[0].chapterName) || 'No syllabus provided';

            // Prepare all requests for batch processing
            const requests: QuestionRequest[] = [];
            const questionMetadata: Array<{ section: Section; questionIndex: number; invalid: InvalidQuestionReport }> = [];

            for (const invalid of questions) {
                const section = sections.find(s => 
                    s.name === invalid.sectionName || s.type === invalid.sectionName
                );

                if (!section) {
                    console.log(`   ⚠️ Section "${invalid.sectionName}" not found for Q${invalid.questionNumber}, skipping...`);
                    totalFailed++;
                    continue;
                }

                const questionIndex = invalid.questionNumber - 1;
                if (questionIndex < 0 || questionIndex >= section.questions.length) {
                    console.log(`   ⚠️ Q${invalid.questionNumber} index out of range, skipping...`);
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

                requests.push({
                    chapterName: invalid.chapterName,
                    chapterSyllabus,
                    questionType,
                    marks: oldQuestion.marks,
                    invalidQuestion: invalid.question,
                    reason: invalid.reason,
                    sectionName: invalid.sectionName,
                    questionNumber: invalid.questionNumber
                });

                questionMetadata.push({ section, questionIndex, invalid });
            }

            // Process in batches of 5 questions (optimal for AI processing)
            const BATCH_SIZE = 5;
            console.log(`\n   🤖 Generating ${requests.length} replacement questions in batches of ${BATCH_SIZE}...`);

            for (let i = 0; i < requests.length; i += BATCH_SIZE) {
                const batch = requests.slice(i, i + BATCH_SIZE);
                const batchMetadata = questionMetadata.slice(i, i + BATCH_SIZE);
                
                console.log(`\n   ⚡ Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(requests.length / BATCH_SIZE)} (Questions ${i + 1}-${Math.min(i + BATCH_SIZE, requests.length)})`);

                const newQuestions = await generateReplacementQuestionsBatch(batch);

                // Apply generated questions
                for (let j = 0; j < newQuestions.length; j++) {
                    const newQuestion = newQuestions[j];
                    const { section, questionIndex, invalid } = batchMetadata[j];

                    if (newQuestion) {
                        section.questions[questionIndex] = newQuestion;
                        console.log(`      ✅ Q${invalid.questionNumber}: ${newQuestion.question.substring(0, 60)}...`);
                        paperFixed++;
                    } else {
                        console.log(`      ❌ Q${invalid.questionNumber}: Failed to generate`);
                        paperFailed++;
                    }
                }
            }

            // Save updated paper
            content.sections = sections;
            await db.run(
                'UPDATE question_papers SET content = ? WHERE id = ?',
                JSON.stringify(content),
                paperId
            );
            console.log(`\n   💾 Paper ${paperId} updated successfully (Fixed: ${paperFixed}, Failed: ${paperFailed})`);

        } catch (error: any) {
            console.error(`   ❌ Error processing paper ${paperId}: ${error.message}`);
            paperFailed += questions.length;
        }

        return { fixed: paperFixed, failed: paperFailed };
    };

    // Process papers in parallel batches
    for (let i = 0; i < paperEntries.length; i += PARALLEL_PAPERS) {
        const batch = paperEntries.slice(i, i + PARALLEL_PAPERS);
        console.log(`\n🔄 Processing paper batch ${Math.floor(i / PARALLEL_PAPERS) + 1}/${Math.ceil(paperEntries.length / PARALLEL_PAPERS)}`);
        console.log(`   Papers: ${batch.map(([id]) => id).join(', ')}\n`);

        const results = await Promise.all(
            batch.map(([paperIdStr, questions]) => processPaper(paperIdStr, questions))
        );

        // Aggregate results
        results.forEach(result => {
            totalFixed += result.fixed;
            totalFailed += result.failed;
        });

        console.log(`\n   📊 Batch complete: ${results.reduce((sum, r) => sum + r.fixed, 0)} fixed, ${results.reduce((sum, r) => sum + r.failed, 0)} failed`);
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
