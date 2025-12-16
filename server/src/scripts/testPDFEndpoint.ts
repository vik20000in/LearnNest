import axios from 'axios';
import fs from 'fs';
import path from 'path';

async function testPDFEndpoint() {
    console.log('Testing PDF export API endpoint...\n');

    try {
        // First, get a list of papers
        console.log('1. Fetching available papers...');
        const papersResponse = await axios.get('http://localhost:3000/api/papers');
        const papers = papersResponse.data;

        if (papers.length === 0) {
            console.log('❌ No papers found in database');
            return;
        }

        const testPaper = papers.find((p: any) => p.title && p.title.includes('Practice'));
        if (!testPaper) {
            console.log('❌ No practice papers found');
            return;
        }

        console.log(`✅ Found paper: ${testPaper.title} (ID: ${testPaper.id})\n`);

        // Test PDF export
        console.log('2. Testing question paper PDF export...');
        const pdfResponse = await axios.get(
            `http://localhost:3000/api/papers/${testPaper.id}/export-pdf`,
            { responseType: 'arraybuffer' }
        );

        const outputDir = path.join(__dirname, '../../test-pdfs');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const pdfPath = path.join(outputDir, 'api-test-question-paper.pdf');
        fs.writeFileSync(pdfPath, pdfResponse.data);
        console.log(`✅ Question paper PDF saved: ${pdfPath}`);

        // Test answer key export
        console.log('\n3. Testing answer key PDF export...');
        const answerKeyResponse = await axios.get(
            `http://localhost:3000/api/papers/${testPaper.id}/export-answer-key`,
            { responseType: 'arraybuffer' }
        );

        const answerKeyPath = path.join(outputDir, 'api-test-answer-key.pdf');
        fs.writeFileSync(answerKeyPath, answerKeyResponse.data);
        console.log(`✅ Answer key PDF saved: ${answerKeyPath}`);

        console.log('\n✨ All API tests passed!');
        console.log(`📁 PDFs saved in: ${outputDir}`);

    } catch (error: any) {
        console.error('❌ Test failed:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }
}

testPDFEndpoint();
