import dotenv from 'dotenv';
import path from 'path';

// Load environment variables before other imports
dotenv.config({ path: path.join(__dirname, '../../.env') });

import { initDatabase } from '../db/database';
import { generateText } from '../services/aiService';

async function checkAndGenerate() {
    console.log("Starting data integrity check...");
    const db = await initDatabase();
    
    // Get all chapters with subject info
    const chapters = await db.all(`
        SELECT c.id, c.name as chapter_name, c.syllabus, s.name as subject_name 
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
    `);

    console.log(`Found ${chapters.length} chapters.`);

    for (const chapter of chapters) {
        console.log(`Checking ${chapter.subject_name} - ${chapter.chapter_name}...`);

        // 1. Check Syllabus
        if (!chapter.syllabus || chapter.syllabus.trim() === '') {
            console.warn(`  [WARNING] Missing syllabus for ${chapter.chapter_name}`);
        } else {
            console.log(`  Syllabus present.`);
        }

        // 2. Check Questions/Answers (Flashcards)
        const result = await db.get(
            'SELECT COUNT(*) as count FROM flashcards WHERE chapter_id = ?', 
            chapter.id
        );
        
        const count = result ? result.count : 0;

        if (count === 0) {
            console.log(`  No flashcards found. Generating...`);
            await generateFlashcardsForChapter(db, chapter);
        } else {
            console.log(`  ${count} flashcards exist.`);
        }
    }
    console.log("Check and generation complete.");
}

async function generateFlashcardsForChapter(db: any, chapter: any) {
    const prompt = `
You are an expert teacher for Class 6.
Subject: ${chapter.subject_name}
Chapter: ${chapter.chapter_name}
Syllabus: ${chapter.syllabus || 'General topic'}

Generate 5 important question and answer pairs (flashcards) for this chapter.
Focus on key concepts and definitions.
Format the output as a JSON array of objects with "front" (question) and "back" (answer) keys.
Example:
[
  {"front": "What is photosynthesis?", "back": "The process by which plants make food."},
  {"front": "Define force.", "back": "A push or a pull acting on an object."}
]
Return ONLY the JSON array. Do not include any other text.
`;

    try {
        const response = await generateText(prompt);
        let jsonStr = response;
        // Clean up markdown
        if (jsonStr.includes('```json')) {
            jsonStr = jsonStr.split('```json')[1].split('```')[0];
        } else if (jsonStr.includes('```')) {
            jsonStr = jsonStr.split('```')[1].split('```')[0];
        }
        
        try {
            const flashcards = JSON.parse(jsonStr.trim());

            if (Array.isArray(flashcards)) {
                for (const card of flashcards) {
                    await db.run(
                        'INSERT INTO flashcards (chapter_id, front, back) VALUES (?, ?, ?)',
                        chapter.id, card.front, card.back
                    );
                }
                console.log(`  Generated and saved ${flashcards.length} flashcards.`);
            } else {
                console.error('  AI returned invalid format (not an array).');
            }
        } catch (parseError) {
            console.error('  Failed to parse JSON from AI:', jsonStr);
        }

    } catch (error) {
        console.error(`  Failed to generate flashcards for ${chapter.chapter_name}:`, error);
    }
}

checkAndGenerate().catch(console.error);
