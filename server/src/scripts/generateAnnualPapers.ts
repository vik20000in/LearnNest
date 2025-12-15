import { initDatabase } from '../db/database';
import { generateQuestions } from '../services/aiService';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const generateAnnualPapers = async () => {
    console.log('Initializing database...');
    const db = await initDatabase();

    console.log('Fetching subjects...');
    const subjects = await db.all('SELECT * FROM subjects');

    for (const subject of subjects) {
        console.log(`Processing subject: ${subject.name}`);

        // Fetch syllabus
        // Prefer "General Syllabus" as it contains the full term breakdown
        let syllabusRow = await db.get('SELECT syllabus FROM chapters WHERE subject_id = ? AND name = "General Syllabus"', subject.id);
        
        let syllabusText = '';
        if (syllabusRow) {
            syllabusText = syllabusRow.syllabus;
        } else {
            // Fallback: combine all chapters
            const chapters = await db.all('SELECT name, syllabus FROM chapters WHERE subject_id = ?', subject.id);
            if (chapters.length === 0) {
                console.log(`No syllabus found for ${subject.name}, skipping.`);
                continue;
            }
            syllabusText = chapters.map(c => `${c.name}: ${c.syllabus}`).join('\n');
        }

        // Construct Prompt
        const prompt = `You are an expert teacher for Class 6 ICSE students at DPS Megacity School.
Create a comprehensive "Annual Examination" Question Paper for the subject: ${subject.name}.

Use the following syllabus context. Focus ONLY on the topics listed under "ANNUAL EXAMINATION" if specified, otherwise cover the whole syllabus provided.
SYLLABUS:
${syllabusText}

The question paper should be balanced and test understanding, application, and knowledge.
Include a mix of:
1. Multiple Choice Questions (5 questions)
2. Short Answer Questions (5 questions)
3. Long Answer Questions (3 questions)

Format the output strictly as a JSON object with the following structure:
{
  "title": "Annual Examination - ${subject.name}",
  "school": "DPS Megacity",
  "class": "Class 6 ICSE",
  "sections": [
    {
      "name": "Section A: Multiple Choice",
      "questions": [
        { "id": 1, "question": "...", "options": ["A", "B", "C", "D"], "answer": "Correct Option" }
      ]
    },
    {
      "name": "Section B: Short Answer",
      "questions": [
        { "id": 6, "question": "...", "answer": "Model Answer" }
      ]
    },
    {
      "name": "Section C: Long Answer",
      "questions": [
        { "id": 11, "question": "...", "answer": "Model Answer" }
      ]
    }
  ]
}

Do not include any markdown formatting (like \`\`\`json). Just return the raw JSON string.
`;

        try {
            console.log(`Generating paper for ${subject.name}...`);
            let response = await generateQuestions(prompt);
            
            // Clean up response if it contains markdown code blocks
            response = response.replace(/```json/g, '').replace(/```/g, '').trim();

            // Validate JSON
            try {
                JSON.parse(response);
            } catch (e) {
                console.warn(`Invalid JSON received for ${subject.name}. Attempting to fix or skipping.`);
                // In a real scenario, we might retry or use a heuristic fixer. 
                // For now, we'll just log it and maybe try to save it anyway if it's close? 
                // No, let's save it as text if JSON fails, but the frontend expects JSON.
                // Let's try to find the first { and last }
                const firstBrace = response.indexOf('{');
                const lastBrace = response.lastIndexOf('}');
                if (firstBrace !== -1 && lastBrace !== -1) {
                    response = response.substring(firstBrace, lastBrace + 1);
                    try {
                        JSON.parse(response); // Check again
                    } catch (e2) {
                        console.error(`Failed to parse JSON for ${subject.name} even after cleanup.`);
                        continue;
                    }
                } else {
                    console.error(`No JSON object found in response for ${subject.name}.`);
                    continue;
                }
            }

            // Store in DB
            await db.run(
                'INSERT INTO question_papers (subject_id, title, content) VALUES (?, ?, ?)',
                subject.id,
                `Annual Examination - ${subject.name}`,
                response
            );
            console.log(`Saved paper for ${subject.name}`);

        } catch (error) {
            console.error(`Error generating paper for ${subject.name}:`, error);
        }
    }

    console.log('Done generating annual papers.');
};

generateAnnualPapers().catch(console.error);
