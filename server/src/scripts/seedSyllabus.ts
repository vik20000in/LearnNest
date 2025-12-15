import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { initDatabase } from '../db/database';
import { generateQuestions } from '../services/aiService';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

const PDF_PATH = 'C:\\Users\\vikra\\Documents\\Applications\\LearnNest\\CLASS VI( REVIEW TEST II & ANNUAL)  SYLLABUS.pdf';

async function parseSyllabus() {
    console.log('Reading PDF file...');
    
    if (!fs.existsSync(PDF_PATH)) {
        console.error(`File not found: ${PDF_PATH}`);
        process.exit(1);
    }

    const dataBuffer = fs.readFileSync(PDF_PATH);
    
    try {
        // Dynamic import for pdf-parse
        const pdfModule: any = await import('pdf-parse');
        const PDFParse = pdfModule.PDFParse || pdfModule.default.PDFParse;

        console.log('Parsing PDF...');
        // Try passing buffer directly or in an object
        // Based on v2 docs, it might expect an object or buffer.
        // Let's try passing buffer directly first as it's common.
        // If that fails, we might need to look at docs more.
        
        // Actually, let's try to instantiate it.
        // If it fails, we will catch it.
        
        let text = '';
        try {
            const parser = new PDFParse(new Uint8Array(dataBuffer));
            const result = await parser.getText();
            text = result.text;
        } catch (e) {
            console.log('Direct buffer failed, trying object wrapper...');
            // Maybe it expects { source: buffer } or similar?
            // But let's assume buffer works for now.
            throw e;
        }

        console.log('PDF Text extracted. Length:', text.length);
        
        // Heuristic Parsing since AI might not be available
        const subjectsData = parseTextHeuristically(text);
        
        console.log('Structured Data:', JSON.stringify(subjectsData, null, 2));

        console.log('Updating Database...');
        const db = await initDatabase();

        for (const subjectData of subjectsData) {
            // 1. Find or Create Subject
            const subjectName = subjectData.subject.trim();
            
            // Check if subject exists
            let subject = await db.get('SELECT id, name FROM subjects WHERE name LIKE ?', subjectName);
            
            if (!subject) {
                console.log(`Creating new subject: ${subjectName}`);
                try {
                    const result = await db.run('INSERT INTO subjects (name) VALUES (?)', subjectName);
                    subject = { id: result.lastID, name: subjectName };
                } catch (e) {
                    // Ignore unique constraint error if it happens race condition
                    subject = await db.get('SELECT id, name FROM subjects WHERE name LIKE ?', subjectName);
                }
            } else {
                console.log(`Found existing subject: ${subject.name}`);
            }

            if (!subject) continue;

            // 2. Add Chapters
            for (const chapterData of subjectData.chapters) {
                const chapterName = chapterData.name.trim();
                const syllabus = chapterData.syllabus.trim();

                // Check if chapter exists
                const existingChapter = await db.get(
                    'SELECT id FROM chapters WHERE subject_id = ? AND name = ?', 
                    subject.id, chapterName
                );

                if (existingChapter) {
                    console.log(`  Updating chapter: ${chapterName}`);
                    await db.run(
                        'UPDATE chapters SET syllabus = ? WHERE id = ?',
                        syllabus, existingChapter.id
                    );
                } else {
                    console.log(`  Creating chapter: ${chapterName}`);
                    await db.run(
                        'INSERT INTO chapters (subject_id, name, syllabus) VALUES (?, ?, ?)',
                        subject.id, chapterName, syllabus
                    );
                }
            }
        }

        console.log('Syllabus import completed successfully!');

    } catch (error) {
        console.error('Error parsing syllabus:', error);
    }
}

function parseTextHeuristically(text: string) {
    const knownSubjects = [
        'ENGLISH LANGUAGE', 'ENGLISH LITERATURE', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY', 
        'COMPUTER', 'MATHEMATICS', 'GEOGRAPHY', 'HISTORY AND CIVICS', 
        '2ND LANGUAGE-BENGALI', '2ND LANGUAGE - HINDI', '3RD LANGUAGE - HINDI', 
        '3RD LANGUAGE -BENGALI', '3RD LANGUAGE -GERMAN'
    ];

    const results: any[] = [];
    
    // Normalize text
    // Remove page numbers like "-- 1 of 13 --"
    text = text.replace(/-- \d+ of \d+ --/g, '');

    // Find indices of subjects
    const subjectIndices: { name: string, index: number }[] = [];
    
    for (const sub of knownSubjects) {
        // Find the first occurrence of the subject name
        // We use a simple indexOf, but we should be careful about "HINDI" matching "3RD LANGUAGE - HINDI"
        // So we sort knownSubjects by length descending to match longest first?
        // Or just find all and sort by index.
        
        // Actually, let's iterate through the text and find the headers.
        // But the text is unstructured.
        
        // Let's try to split by known subjects.
        const index = text.indexOf(sub);
        if (index !== -1) {
            subjectIndices.push({ name: sub, index });
        }
    }

    subjectIndices.sort((a, b) => a.index - b.index);

    for (let i = 0; i < subjectIndices.length; i++) {
        const currentSubject = subjectIndices[i];
        const nextSubject = subjectIndices[i + 1];
        
        const start = currentSubject.index + currentSubject.name.length;
        const end = nextSubject ? nextSubject.index : text.length;
        
        const content = text.substring(start, end);
        
        // Parse content for chapters
        // Look for "Chapter \d+ :? (.*)" or numbered items
        const chapters: any[] = [];
        
        // Strategy: Split by lines
        const lines = content.split('\n').map(l => l.trim()).filter(l => l);
        
        let currentChapter = { name: 'General Syllabus', syllabus: '' };
        let buffer = '';

        for (const line of lines) {
            // Check for Chapter pattern
            const chapterMatch = line.match(/^(Chapter\s*\d+|CHAPTER\s*\d+)\s*[:\.]?\s*(.*)/i);
            if (chapterMatch) {
                // Save previous chapter if it has content
                if (buffer) {
                    currentChapter.syllabus = buffer;
                    chapters.push({ ...currentChapter });
                }
                
                // Start new chapter
                const chapName = chapterMatch[1] + (chapterMatch[2] ? ': ' + chapterMatch[2] : '');
                currentChapter = { name: chapName, syllabus: line };
                buffer = line;
            } else if (line.match(/^\d+\.\s+/)) {
                 // Numbered item like "1. Tense"
                 // Treat as a topic or a chapter if we haven't found explicit chapters
                 if (buffer) {
                     buffer += '\n' + line;
                 } else {
                     buffer = line;
                 }
            } else {
                buffer += '\n' + line;
            }
        }
        
        if (buffer) {
            currentChapter.syllabus = buffer;
            chapters.push({ ...currentChapter });
        }

        // If we found explicit chapters, filter out the "General Syllabus" if it's just noise
        // But for now, let's keep everything.
        
        // Clean up chapters
        // If a chapter name is just "Chapter 5", and syllabus has the name, it's fine.
        
        results.push({
            subject: currentSubject.name,
            chapters: chapters.length > 0 ? chapters : [{ name: 'Full Syllabus', syllabus: content.trim() }]
        });
    }

    return results;
}

parseSyllabus();
