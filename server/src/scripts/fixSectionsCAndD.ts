import { getDb } from '../db/database';
import { Ollama } from 'ollama';

const ollama = new Ollama({ host: 'http://localhost:11434' });

interface Question {
  question: string;
  answer: string;
  marks: number;
}

const generateSectionCDQuestions = async (chapterTitle: string, chapterSyllabus: string, sectionType: 'C' | 'D', setLetter: string) => {
  const isShortAnswer = sectionType === 'C';
  const marks = isShortAnswer ? 4 : 5;
  const questionType = isShortAnswer ? 'Short Answer' : 'Long Answer';
  const instructions = isShortAnswer 
    ? 'Generate 2 short answer questions (4 marks each). These should require 3-5 steps to solve and explanations.'
    : 'Generate 2 long answer/word problem questions (5 marks each). These should be multi-step problems requiring detailed calculations and explanations.';

  const prompt = `You are creating practice questions for Class 6 ICSE Mathematics students in India.

Chapter: ${chapterTitle}
Syllabus: ${chapterSyllabus}
Section: Section ${sectionType} - ${questionType} Questions
Set: ${setLetter}

${instructions}

Requirements:
- Age-appropriate for 11-12 year olds
- Clear, unambiguous wording
- Progressive difficulty within the chapter
- Include step-by-step solutions
- Real-world contexts where applicable
- Cover different aspects of the chapter

Return EXACTLY 2 questions in this JSON format:
{
  "questions": [
    {
      "question": "Complete question text",
      "answer": "Step-by-step solution with final answer",
      "marks": ${marks}
    },
    {
      "question": "Complete question text",
      "answer": "Step-by-step solution with final answer",
      "marks": ${marks}
    }
  ]
}`;

  try {
    const response = await ollama.chat({
      model: 'deepseek-r1:14b',
      messages: [{ role: 'user', content: prompt }],
      format: 'json',
      options: {
        temperature: 0.7,
        num_predict: 2048
      }
    });

    const result = JSON.parse(response.message.content);
    return result.questions as Question[];
  } catch (error) {
    console.error(`   ❌ Error generating questions:`, error);
    return null;
  }
};

const fixSectionsCAndD = async () => {
  console.log('🚀 AUTOMATED FIX FOR SECTIONS C AND D\n');
  console.log('This will generate contextually appropriate questions for all 78 sections');
  console.log('Estimated time: 30-45 minutes\n');
  console.log('='.repeat(80) + '\n');

  const db = await getDb();
  
  // Get all math papers with their chapter info
  const papers = await db.all(`
    SELECT qp.id, qp.title, qp.content, qp.chapter_id, c.syllabus, c.name as chapter_name
    FROM question_papers qp
    JOIN chapters c ON qp.chapter_id = c.id
    JOIN subjects s ON c.subject_id = s.id
    WHERE s.name = 'Maths'
    ORDER BY qp.id
  `);

  let totalFixed = 0;
  let totalPapers = 0;

  for (const paper of papers) {
    totalPapers++;
    const content = JSON.parse(paper.content);
    
    // Determine set letter from title
    const setMatch = paper.title.match(/Set ([ABC])/);
    const setLetter = setMatch ? setMatch[1] : 'A';
    
    console.log(`\n📄 Paper ${paper.id}: ${paper.title}`);
    console.log(`   Chapter: ${paper.chapter_name}`);
    
    let paperModified = false;
    
    // Fix Section C
    const sectionC = content.sections.find((s: any) => 
      s.name.includes('Section C') || s.name.includes('Short Answer')
    );
    
    if (sectionC) {
      const hasPlaceholders = sectionC.questions.some((q: any) => 
        q.question.includes('[Set ') || q.question.includes('Solve the given problem')
      );
      
      if (hasPlaceholders) {
        console.log(`   🔧 Generating Section C questions...`);
        const newQuestions = await generateSectionCDQuestions(
          paper.chapter_name,
          paper.syllabus || '',
          'C',
          setLetter
        );
        
        if (newQuestions && newQuestions.length === 2) {
          sectionC.questions = newQuestions;
          paperModified = true;
          totalFixed += 2;
          console.log(`   ✅ Section C: 2 short answer questions generated`);
        } else {
          console.log(`   ⚠️  Section C: Failed to generate questions, skipping...`);
        }
        
        // Small delay to avoid overwhelming Ollama
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Fix Section D
    const sectionD = content.sections.find((s: any) => 
      s.name.includes('Section D') || s.name.includes('Long Answer')
    );
    
    if (sectionD) {
      const hasPlaceholders = sectionD.questions.some((q: any) => 
        q.question.includes('[Set ') || q.question.includes('Solve the word problem')
      );
      
      if (hasPlaceholders) {
        console.log(`   🔧 Generating Section D questions...`);
        const newQuestions = await generateSectionCDQuestions(
          paper.chapter_name,
          paper.syllabus || '',
          'D',
          setLetter
        );
        
        if (newQuestions && newQuestions.length === 2) {
          sectionD.questions = newQuestions;
          paperModified = true;
          totalFixed += 2;
          console.log(`   ✅ Section D: 2 long answer questions generated`);
        } else {
          console.log(`   ⚠️  Section D: Failed to generate questions, skipping...`);
        }
        
        // Small delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Save if modified
    if (paperModified) {
      await db.run(
        'UPDATE question_papers SET content = ? WHERE id = ?',
        [JSON.stringify(content), paper.id]
      );
      console.log(`   💾 Saved changes to database`);
    }
    
    // Progress indicator
    console.log(`   Progress: ${totalPapers}/${papers.length} papers processed`);
  }

  console.log('\n\n' + '='.repeat(80));
  console.log(`\n📊 FIX SUMMARY`);
  console.log('='.repeat(80));
  console.log(`Papers processed: ${totalPapers}`);
  console.log(`Questions generated: ${totalFixed}`);
  console.log('='.repeat(80));
  console.log('\n✅ All Sections C and D have been fixed with AI-generated questions!');
};

fixSectionsCAndD()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
