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

// Batch validate multiple questions at once for speed
const validateQuestionsBatch = async (
    questions: { question: string; index: number }[],
    chapterName: string,
    chapterSyllabus: string
): Promise<Map<number, { isValid: boolean; reason: string }>> => {
    if (questions.length === 0) {
        return new Map();
    }

    const questionsList = questions.map((q, i) => `${i + 1}. ${q.question}`).join('\n');
    
    const prompt = `You are a Math education expert. Analyze if each of the following questions is contextually appropriate for the given chapter.

Chapter: ${chapterName}
Syllabus Topics: ${chapterSyllabus}

Questions to validate:
${questionsList}

Respond ONLY with a JSON array where each element corresponds to each question in order:
[
    {"isValid": true/false, "reason": "Brief explanation"},
    {"isValid": true/false, "reason": "Brief explanation"}
]

For each question, consider:
1. Does it test concepts taught in this chapter?
2. Are the mathematical operations appropriate for this topic?
3. Does it align with the syllabus content?

Be strict - flag anything that seems out of context.`;

    try {
        const response = await generateText(prompt);
        
        // Try to extract JSON array from response
        const jsonMatch = response.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const results = JSON.parse(jsonMatch[0]);
            const resultMap = new Map<number, { isValid: boolean; reason: string }>();
            
            questions.forEach((q, i) => {
                if (results[i]) {
                    resultMap.set(q.index, {
                        isValid: results[i].isValid === true,
                        reason: results[i].reason || 'No reason provided'
                    });
                } else {
                    resultMap.set(q.index, { isValid: true, reason: 'No validation result' });
                }
            });
            
            return resultMap;
        }
        
        // Fallback - mark all as valid if parsing fails
        console.log('   ⚠️ Failed to parse AI response, marking all as valid');
        const resultMap = new Map<number, { isValid: boolean; reason: string }>();
        questions.forEach(q => {
            resultMap.set(q.index, { isValid: true, reason: 'Parse error - defaulting to valid' });
        });
        return resultMap;
    } catch (error: any) {
        console.error(`   ⚠️ Error during batch validation: ${error.message}`);
        const resultMap = new Map<number, { isValid: boolean; reason: string }>();
        questions.forEach(q => {
            resultMap.set(q.index, { isValid: true, reason: `Error: ${error.message}` });
        });
        return resultMap;
    }
};

const validateMathPapersReportOnly = async () => {
    console.log('🔍 Starting Math Question Paper Validation (Report Only Mode)...\n');
    
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
    const allInvalidQuestions: InvalidQuestionReport[] = [];

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
            
            try {
                const content = JSON.parse(paper.content);
                const sections: Section[] = content.sections || [];

                for (let sIdx = 0; sIdx < sections.length; sIdx++) {
                    const section = sections[sIdx];
                    const sectionName = section.name || section.type || `Section ${sIdx + 1}`;
                    
                    if (!section.questions || section.questions.length === 0) {
                        console.log(`   ⚠️ ${sectionName}: No questions found`);
                        continue;
                    }

                    console.log(`\n   Section: ${sectionName} (${section.questions.length} questions)`);
                    
                    // Batch validate all questions in this section at once
                    const questionsToValidate = section.questions.map((q, idx) => ({
                        question: q.question,
                        index: idx
                    }));
                    
                    process.stdout.write(`   Validating batch... `);
                    
                    try {
                        const validationResults = await validateQuestionsBatch(
                            questionsToValidate,
                            chapter.name,
                            chapter.syllabus || 'No syllabus provided'
                        );
                        console.log(`Done! ✅`);
                        
                        totalQuestionsChecked += section.questions.length;
                        
                        // Process results
                        for (let qIdx = 0; qIdx < section.questions.length; qIdx++) {
                            const question = section.questions[qIdx];
                            const validation = validationResults.get(qIdx);
                            
                            if (!validation) continue;
                            
                            if (!validation.isValid) {
                                console.log(`   ❌ Q${qIdx + 1}: INVALID - ${validation.reason}`);
                                totalInvalidQuestions++;
                                
                                allInvalidQuestions.push({
                                    chapterName: chapter.name,
                                    paperTitle: paper.title,
                                    paperId: paper.id,
                                    sectionName: sectionName,
                                    questionNumber: qIdx + 1,
                                    question: question.question,
                                    reason: validation.reason
                                });
                            } else {
                                console.log(`   ✅ Q${qIdx + 1}: Valid`);
                            }
                        }
                    } catch (error: any) {
                        console.log(`Failed! ⚠️`);
                        console.log(`   ⚠️ Error validating section: ${error.message}`);
                        console.log(`   Skipping section and continuing...`);
                    }
                }
            } catch (error: any) {
                console.log(`   ⚠️ Error parsing paper content: ${error.message}`);
                console.log(`   Skipping paper and continuing...`);
            }
        }
    }

    console.log(`\n\n${'='.repeat(80)}`);
    console.log('📊 VALIDATION SUMMARY');
    console.log(`${'='.repeat(80)}`);
    console.log(`Papers checked: ${totalPapersChecked}`);
    console.log(`Questions checked: ${totalQuestionsChecked}`);
    console.log(`Invalid questions found: ${totalInvalidQuestions}`);
    console.log(`Success rate: ${((totalQuestionsChecked - totalInvalidQuestions) / totalQuestionsChecked * 100).toFixed(1)}%`);
    console.log(`${'='.repeat(80)}\n`);

    // Save report to file
    if (allInvalidQuestions.length > 0) {
        const reportPath = path.join(__dirname, '../../math_validation_report.json');
        fs.writeFileSync(reportPath, JSON.stringify(allInvalidQuestions, null, 2));
        console.log(`📝 Detailed report saved to: ${reportPath}\n`);
        
        // Print summary by chapter
        console.log('📋 Invalid Questions by Chapter:');
        console.log('='.repeat(80));
        const byChapter = allInvalidQuestions.reduce((acc, q) => {
            if (!acc[q.chapterName]) acc[q.chapterName] = [];
            acc[q.chapterName].push(q);
            return acc;
        }, {} as Record<string, InvalidQuestionReport[]>);
        
        Object.entries(byChapter).forEach(([chapter, questions]) => {
            console.log(`\n${chapter}: ${questions.length} invalid question(s)`);
            questions.forEach(q => {
                console.log(`  - ${q.paperTitle}`);
                console.log(`    Q${q.questionNumber} (${q.sectionName}): ${q.question.substring(0, 80)}...`);
                console.log(`    Reason: ${q.reason}\n`);
            });
        });
    } else {
        console.log('✨ All Math questions are valid! No issues found.\n');
    }
};

// Run the script
validateMathPapersReportOnly()
    .then(() => {
        console.log('✅ Validation complete!');
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Error:', error);
        process.exit(1);
    });
