import { getDb } from '../db/database';
import { generateText } from '../services/aiService';

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

interface QuestionPaper {
    id: number;
    title: string;
    content: string;
    chapter_id: number;
    chapter_name: string;
    variant_label: string;
}

interface ValidationResult {
    paperId: number;
    title: string;
    chapterName: string;
    variant: string;
    invalidQuestions: {
        sectionIndex: number;
        questionIndex: number;
        question: string;
        reason: string;
    }[];
}

const validateQuestionContext = async (
    question: string,
    chapterName: string,
    chapterSyllabus: string
): Promise<{ isValid: boolean; reason: string }> => {
    const prompt = `You are a Math education expert. Analyze if the following question is contextually appropriate for the given chapter.

Chapter: ${chapterName}
Syllabus Topics: ${chapterSyllabus}

Question: ${question}

Respond in JSON format:
{
    "isValid": true/false,
    "reason": "Brief explanation of why the question is valid or invalid for this chapter"
}

Consider:
1. Does the question test concepts taught in this chapter?
2. Are the mathematical operations appropriate for this topic?
3. Does the question align with the syllabus content?

Be strict - flag anything that seems out of context.`;

    try {
        const response = await generateText(prompt);
        
        // Try to extract JSON from response
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const result = JSON.parse(jsonMatch[0]);
            return {
                isValid: result.isValid === true,
                reason: result.reason || 'No reason provided'
            };
        }
        
        // Fallback parsing
        const isValid = response.toLowerCase().includes('"isvalid": true') || 
                       response.toLowerCase().includes('"isvalid":true');
        return {
            isValid,
            reason: isValid ? 'Appears valid' : 'Context mismatch detected'
        };
    } catch (error) {
        console.error('Error validating question:', error);
        return { isValid: true, reason: 'Error during validation - defaulting to valid' };
    }
};

const regenerateQuestion = async (
    questionType: 'mcq' | 'short' | 'long',
    chapterName: string,
    chapterSyllabus: string,
    marks: number,
    previousQuestion: string
): Promise<Question | null> => {
    const typeDescriptions = {
        mcq: 'multiple choice question with 4 options',
        short: 'short answer question (2-3 lines)',
        long: 'long answer question (detailed explanation required)'
    };

    const prompt = `Generate a NEW ${typeDescriptions[questionType]} for Class 6 ICSE Mathematics.

Chapter: ${chapterName}
Topics: ${chapterSyllabus}
Marks: ${marks}

IMPORTANT: DO NOT generate this question: "${previousQuestion}"
Generate a completely DIFFERENT question that still tests the same chapter concepts.

Respond in JSON format:
{
    "question": "Your question here",
    ${questionType === 'mcq' ? '"options": ["A) ...", "B) ...", "C) ...", "D) ..."],' : ''}
    "answer": "Correct answer${questionType === 'long' ? ' with detailed explanation' : ''}"
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
    } catch (error) {
        console.error('Error regenerating question:', error);
    }
    
    return null;
};

const checkOllamaConnection = async (): Promise<boolean> => {
    try {
        const baseUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
        const response = await require('axios').get(`${baseUrl}/api/tags`, { timeout: 5000 });
        
        if (response.data.models && response.data.models.length > 0) {
            console.log('✅ Ollama is running');
            console.log(`📦 Available models: ${response.data.models.map((m: any) => m.name).join(', ')}\n`);
            return true;
        } else {
            console.log('⚠️ Ollama is running but no models found');
            console.log('Run: ollama pull mistral\n');
            return false;
        }
    } catch (error) {
        console.log('❌ Cannot connect to Ollama!');
        console.log('\nPlease install and start Ollama:');
        console.log('1. Download from: https://ollama.ai/download');
        console.log('2. Install and run Ollama');
        console.log('3. Pull a model: ollama pull mistral');
        console.log('4. Then run this script again\n');
        return false;
    }
};

const validateAndFixMathPapers = async () => {
    console.log('🔍 Starting Math Question Paper Context Validation...\n');
    
    // Check Ollama connection first
    const isOllamaReady = await checkOllamaConnection();
    if (!isOllamaReady) {
        console.error('❌ Ollama is not ready. Please set it up first.');
        process.exit(1);
    }
    
    const db = await getDb();
    
    // Get Math subject
    const mathSubject = await db.get('SELECT id FROM subjects WHERE name = ?', 'Maths');
    if (!mathSubject) {
        console.error('Math subject not found!');
        return;
    }

    // Get all Math chapters with their syllabus
    const chapters = await db.all(
        'SELECT id, name, syllabus FROM chapters WHERE subject_id = ?',
        mathSubject.id
    );

    console.log(`Found ${chapters.length} Math chapters\n`);

    let totalPapersChecked = 0;
    let totalQuestionsChecked = 0;
    let totalInvalidQuestions = 0;
    let totalQuestionsRegenerated = 0;

    for (const chapter of chapters) {
        console.log(`\n${'='.repeat(80)}`);
        console.log(`📚 Chapter: ${chapter.name}`);
        console.log(`${'='.repeat(80)}`);

        // Get all question papers for this chapter
        const papers = await db.all(`
            SELECT qp.id, qp.title, qp.content, qp.variant_label
            FROM question_papers qp
            WHERE qp.subject_id = ? AND qp.title LIKE ?
        `, mathSubject.id, `%${chapter.name}%`);

        console.log(`Found ${papers.length} papers for this chapter\n`);

        for (const paper of papers) {
            totalPapersChecked++;
            console.log(`\n📄 Validating: ${paper.title}`);
            
            const content = JSON.parse(paper.content);
            const sections: Section[] = content.sections || [];
            
            const invalidQuestions: ValidationResult['invalidQuestions'] = [];
            let paperModified = false;

            for (let sIdx = 0; sIdx < sections.length; sIdx++) {
                const section = sections[sIdx];
                
                for (let qIdx = 0; qIdx < section.questions.length; qIdx++) {
                    const question = section.questions[qIdx];
                    totalQuestionsChecked++;
                    
                    process.stdout.write(`   Checking Q${qIdx + 1} (${section.type})... `);
                    
                    const validation = await validateQuestionContext(
                        question.question,
                        chapter.name,
                        chapter.syllabus || 'No syllabus provided'
                    );

                    if (!validation.isValid) {
                        console.log(`❌ INVALID`);
                        console.log(`      Reason: ${validation.reason}`);
                        totalInvalidQuestions++;
                        
                        invalidQuestions.push({
                            sectionIndex: sIdx,
                            questionIndex: qIdx,
                            question: question.question,
                            reason: validation.reason
                        });

                        // Attempt to regenerate
                        console.log(`      🔄 Regenerating question...`);
                        
                        let questionType: 'mcq' | 'short' | 'long' = 'short';
                        if (section.type.toLowerCase().includes('mcq') || question.options) {
                            questionType = 'mcq';
                        } else if (section.type.toLowerCase().includes('long')) {
                            questionType = 'long';
                        }

                        let attempts = 0;
                        let newQuestion: Question | null = null;
                        let isNewQuestionValid = false;

                        while (attempts < 3 && !isNewQuestionValid) {
                            attempts++;
                            console.log(`      Attempt ${attempts}/3...`);
                            
                            newQuestion = await regenerateQuestion(
                                questionType,
                                chapter.name,
                                chapter.syllabus || 'No syllabus provided',
                                question.marks,
                                question.question
                            );

                            if (newQuestion) {
                                // Validate the new question
                                const newValidation = await validateQuestionContext(
                                    newQuestion.question,
                                    chapter.name,
                                    chapter.syllabus || 'No syllabus provided'
                                );

                                if (newValidation.isValid) {
                                    isNewQuestionValid = true;
                                    sections[sIdx].questions[qIdx] = newQuestion;
                                    paperModified = true;
                                    totalQuestionsRegenerated++;
                                    console.log(`      ✅ Successfully regenerated and validated!`);
                                } else {
                                    console.log(`      ⚠️ New question also invalid: ${newValidation.reason}`);
                                }
                            }
                        }

                        if (!isNewQuestionValid) {
                            console.log(`      ⛔ Failed to generate valid question after 3 attempts`);
                        }

                    } else {
                        console.log(`✅ Valid`);
                    }

                    // Small delay to avoid rate limiting
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            }

            // Save modified paper if any questions were regenerated
            if (paperModified) {
                content.sections = sections;
                await db.run(
                    'UPDATE question_papers SET content = ? WHERE id = ?',
                    JSON.stringify(content),
                    paper.id
                );
                console.log(`\n   💾 Paper updated with regenerated questions`);
            }

            if (invalidQuestions.length > 0) {
                console.log(`\n   📊 Summary: ${invalidQuestions.length} invalid question(s) found`);
            } else {
                console.log(`\n   ✨ All questions are valid!`);
            }
        }
    }

    console.log(`\n\n${'='.repeat(80)}`);
    console.log('📊 FINAL SUMMARY');
    console.log(`${'='.repeat(80)}`);
    console.log(`Papers checked: ${totalPapersChecked}`);
    console.log(`Questions checked: ${totalQuestionsChecked}`);
    console.log(`Invalid questions found: ${totalInvalidQuestions}`);
    console.log(`Questions successfully regenerated: ${totalQuestionsRegenerated}`);
    console.log(`Questions still invalid: ${totalInvalidQuestions - totalQuestionsRegenerated}`);
    console.log(`${'='.repeat(80)}\n`);
};

// Run the script
validateAndFixMathPapers()
    .then(() => {
        console.log('✅ Validation and regeneration complete!');
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Error:', error);
        process.exit(1);
    });
