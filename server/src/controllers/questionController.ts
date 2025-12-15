import { Request, Response } from 'express';
import { generateQuestions } from '../services/aiService';
import { getDb } from '../db/database';

export const generatePaper = async (req: Request, res: Response) => {
    const { subjectId, chapterIds, difficulty, questionTypes } = req.body;
    
    // questionTypes is an object like { mcq: 5, short: 3, long: 2 }

    try {
        const db = await getDb();
        
        // Fetch context
        const subject = await db.get('SELECT name FROM subjects WHERE id = ?', subjectId);
        
        // Handle multiple chapters
        const placeholders = chapterIds.map(() => '?').join(',');
        const chapters = await db.all(`SELECT name, syllabus FROM chapters WHERE id IN (${placeholders})`, chapterIds);
        
        const chapterNames = chapters.map(c => c.name).join(', ');
        const syllabusContext = chapters.map(c => `${c.name}: ${c.syllabus || 'General topic'}`).join('\n');

        // Construct Prompt
        let prompt = `You are an expert teacher for Class 6 ICSE students in India.
Create a question paper for the subject: ${subject.name}.
Chapters: ${chapterNames}.
Difficulty Level: ${difficulty}.

Use the following syllabus context to ensure questions are relevant and not out of syllabus:
${syllabusContext}

Generate the following questions:
`;

        if (questionTypes.mcq > 0) prompt += `- ${questionTypes.mcq} Multiple Choice Questions (MCQs) with 4 options and the correct answer indicated.\n`;
        if (questionTypes.veryShort > 0) prompt += `- ${questionTypes.veryShort} Very Short Answer Questions (1-2 sentences).\n`;
        if (questionTypes.short > 0) prompt += `- ${questionTypes.short} Short Answer Questions (3-4 sentences).\n`;
        if (questionTypes.long > 0) prompt += `- ${questionTypes.long} Long Answer Questions (Detailed explanation).\n`;
        if (questionTypes.numerical > 0 && (subject.name === 'Maths' || subject.name === 'Physics')) prompt += `- ${questionTypes.numerical} Numerical Problems.\n`;

        prompt += `
Format the output as a structured JSON object with the following schema:
{
  "title": "Question Paper Title",
  "sections": [
    {
      "type": "MCQ" | "Very Short" | "Short" | "Long" | "Numerical",
      "questions": [
        {
          "question": "Question text",
          "options": ["A", "B", "C", "D"], // Only for MCQ
          "answer": "Correct answer or marking scheme key points",
          "marks": number
        }
      ]
    }
  ]
}
Ensure the language is simple, age-appropriate for 11-12 year olds.
Do not include any preamble or conversational text, just the JSON.
`;

        const aiResponse = await generateQuestions(prompt);
        
        // Attempt to parse JSON. AI might add markdown code blocks.
        let cleanJson = aiResponse;
        if (cleanJson.includes('```json')) {
            cleanJson = cleanJson.split('```json')[1].split('```')[0];
        } else if (cleanJson.includes('```')) {
            cleanJson = cleanJson.split('```')[1].split('```')[0];
        }

        try {
            const parsedData = JSON.parse(cleanJson.trim());

            // Save generated paper to database
            const title = parsedData.title || `${subject.name} Practice Paper`;
            await db.run(
                'INSERT INTO question_papers (subject_id, title, content) VALUES (?, ?, ?)',
                subjectId,
                title,
                JSON.stringify(parsedData)
            );

            res.json(parsedData);
        } catch (e) {
            console.error("Failed to parse AI JSON:", cleanJson);
            // Fallback: return raw text if JSON parsing fails
            res.json({ raw: aiResponse, error: "Failed to parse structured output" });
        }

    } catch (error) {
        console.error('Generation Error:', error);
        res.status(500).json({ error: 'Failed to generate questions' });
    }
};

export const getStoredPapers = async (req: Request, res: Response) => {
    try {
        const db = await getDb();
        const papers = await db.all('SELECT id, subject_id, title, created_at FROM question_papers ORDER BY created_at DESC');
        res.json(papers);
    } catch (error) {
        console.error('Error fetching papers:', error);
        res.status(500).json({ error: 'Failed to fetch papers' });
    }
};

export const getStoredPaperById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const db = await getDb();
        const paper = await db.get('SELECT * FROM question_papers WHERE id = ?', id);
        
        if (!paper) {
            return res.status(404).json({ error: 'Paper not found' });
        }
        
        // Parse content if it's a string
        try {
            paper.content = JSON.parse(paper.content);
        } catch (e) {
            // content is already object or invalid json, leave as is
        }

        res.json(paper);
    } catch (error) {
        console.error('Error fetching paper:', error);
        res.status(500).json({ error: 'Failed to fetch paper' });
    }
};
