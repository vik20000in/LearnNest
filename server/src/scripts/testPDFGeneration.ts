import { initDatabase } from '../db/database';
import { generateQuestionPaperPDF, generateAnswerKeyPDF } from '../services/pdfService';
import fs from 'fs';
import path from 'path';

async function testPDFGeneration() {
    console.log('Testing PDF generation...\n');
    
    const db = await initDatabase();
    
    // Get a sample practice paper
    const paper = await db.get(`
        SELECT qp.id, qp.content, s.name as subject_name, c.name as chapter_name
        FROM question_papers qp
        LEFT JOIN subjects s ON qp.subject_id = s.id
        LEFT JOIN chapters c ON qp.chapter_id = c.id
        WHERE qp.chapter_id IS NOT NULL
        LIMIT 1
    `);

    if (!paper) {
        console.log('❌ No practice papers found in database');
        return;
    }

    console.log(`📄 Testing with: ${paper.chapter_name || 'Sample Paper'}`);
    console.log(`   Subject: ${paper.subject_name || 'N/A'}\n`);

    const paperContent = JSON.parse(paper.content);
    
    // Create test output directory
    const outputDir = path.join(__dirname, '../../test-pdfs');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        // Generate question paper PDF
        console.log('Generating question paper PDF...');
        const questionPDF = await generateQuestionPaperPDF(paperContent);
        const questionPDFPath = path.join(outputDir, 'test-question-paper.pdf');
        const questionWriteStream = fs.createWriteStream(questionPDFPath);
        
        await new Promise<void>((resolve, reject) => {
            questionPDF.pipe(questionWriteStream);
            questionWriteStream.on('finish', () => {
                console.log(`✅ Question paper PDF saved to: ${questionPDFPath}`);
                resolve();
            });
            questionWriteStream.on('error', reject);
        });

        // Generate answer key PDF
        console.log('\nGenerating answer key PDF...');
        const answerKeyPDF = await generateAnswerKeyPDF(paperContent);
        const answerKeyPDFPath = path.join(outputDir, 'test-answer-key.pdf');
        const answerKeyWriteStream = fs.createWriteStream(answerKeyPDFPath);
        
        await new Promise<void>((resolve, reject) => {
            answerKeyPDF.pipe(answerKeyWriteStream);
            answerKeyWriteStream.on('finish', () => {
                console.log(`✅ Answer key PDF saved to: ${answerKeyPDFPath}`);
                resolve();
            });
            answerKeyWriteStream.on('error', reject);
        });

        console.log('\n✨ PDF generation test completed successfully!');
        console.log(`📁 Check the PDFs in: ${outputDir}`);

    } catch (error) {
        console.error('❌ Error during PDF generation:', error);
    }
}

testPDFGeneration().catch(console.error);
