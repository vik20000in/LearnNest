import { Request, Response } from 'express';
import { getDb } from '../db/database';
import { generateText } from '../services/aiService';

export const getFlashcards = async (req: Request, res: Response) => {
    const { id } = req.params; // Chapter ID
    try {
        const db = await getDb();
        const flashcards = await db.all('SELECT * FROM flashcards WHERE chapter_id = ?', id);
        res.json(flashcards);
    } catch (error) {
        console.error('Error fetching flashcards:', error);
        res.status(500).json({ error: 'Failed to fetch flashcards' });
    }
};

export const generateFlashcards = async (req: Request, res: Response) => {
    const { id } = req.params; // Chapter ID
    try {
        const db = await getDb();
        const chapter = await db.get('SELECT * FROM chapters WHERE id = ?', id);
        
        if (!chapter) {
            return res.status(404).json({ error: 'Chapter not found' });
        }

        const subject = await db.get('SELECT name FROM subjects WHERE id = ?', chapter.subject_id);

        const prompt = `You are an expert teacher for Class 6 ICSE students.
Create a set of 10 revision flashcards (Cheat Sheet style) for the chapter: "${chapter.name}" in the subject: "${subject.name}".

The goal is to provide a quick revision tool. DO NOT generate questions or quizzes.
Generate "Key Concepts", "Important Formulas", "Definitions", or "Summaries".

Syllabus/Context:
${chapter.syllabus || 'General topic coverage'}

Format the output as a JSON array of objects with "front" (Concept/Term/Topic) and "back" (Definition/Formula/Explanation) keys.
Example:
[
  { "front": "Photosynthesis", "back": "Process by which green plants make food using sunlight, CO2, and water." },
  { "front": "Area of Rectangle", "back": "Length × Breadth" },
  { "front": "Battle of Panipat", "back": "Fought in 1526, marked the beginning of the Mughal Empire." }
]

Ensure the content is suitable for 11-12 year olds.
Do not include any conversational text, only the JSON array.
`;

        const aiResponse = await generateText(prompt);
        
        let cleanJson = aiResponse;
        if (cleanJson.includes('```json')) {
            cleanJson = cleanJson.split('```json')[1].split('```')[0];
        } else if (cleanJson.includes('```')) {
            cleanJson = cleanJson.split('```')[1].split('```')[0];
        }

        try {
            const flashcards = JSON.parse(cleanJson.trim());
            
            if (!Array.isArray(flashcards)) {
                throw new Error('AI response is not an array');
            }

            // Save to DB
            // First, delete existing auto-generated ones? Or append? 
            // For now, let's append, but maybe the user wants to clear old ones.
            // The requirement says "Auto-generate... added to the syllabus section".
            // I'll just insert them.
            
            const stmt = await db.prepare('INSERT INTO flashcards (chapter_id, front, back) VALUES (?, ?, ?)');
            for (const card of flashcards) {
                await stmt.run(id, card.front, card.back);
            }
            await stmt.finalize();

            // Return the newly generated cards (or all cards)
            const allCards = await db.all('SELECT * FROM flashcards WHERE chapter_id = ?', id);
            res.json(allCards);

        } catch (e) {
            console.error("Failed to parse AI JSON for flashcards:", cleanJson);
            res.status(500).json({ error: "Failed to parse generated flashcards", raw: aiResponse });
        }

    } catch (error) {
        console.error('Error generating flashcards:', error);
        res.status(500).json({ error: 'Failed to generate flashcards' });
    }
};
