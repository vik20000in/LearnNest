import { initDatabase } from '../db/database';

const createPaper = (subject: string, chapter: string, sections: any[]) => ({
    title: `Practice Paper - ${chapter}`,
    school: "LearnNest School",
    class: "Class 6 ICSE",
    sections
});

const paper = createPaper("Bengali", "Barshai Durgati", [
    {
        name: "Section A: বহুনির্বাচনী প্রশ্ন",
        questions: [
            { id: 1, marks: 1, question: "বর্ষা কোন মাসে?", options: ["ফাল্গুন-চৈত্র", "আষাঢ়-শ্রাবণ", "পৌষ-মাঘ", "জ্যৈষ্ঠ-আষাঢ়"], answer: "আষাঢ়-শ্রাবণ" },
            { id: 2, marks: 1, question: "বাংলায় ঋতু কয়টি?", options: ["চার", "পাঁচ", "ছয়", "সাত"], answer: "ছয়" }
        ]
    },
    {
        name: "Section B: সংক্ষিপ্ত উত্তর (২ নম্বর)",
        questions: [
            { id: 3, marks: 2, question: "বর্ষাকালের দুটি বৈশিষ্ট্য লেখো।", answer: "প্রচুর বৃষ্টিপাত এবং সবুজ প্রকৃতি" },
            { id: 4, marks: 2, question: "ছয় ঋতুর নাম লেখো।", answer: "গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত" }
        ]
    }
]);

async function addLastPracticePaper() {
    const db = await initDatabase();
    
    // Get the chapter by ID (178)
    const chapter = await db.get(`
        SELECT c.id, c.subject_id, s.name as subject, c.name as chapter 
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
        WHERE c.id = 178
    `);

    if (!chapter) {
        console.log("❌ Chapter not found");
        return;
    }

    console.log(`Found chapter: ${chapter.subject} | ${chapter.chapter}`);
    console.log(`Chapter ID: ${chapter.id}, Subject ID: ${chapter.subject_id}\n`);

    // Check if already exists
    const existing = await db.get(
        'SELECT id FROM question_papers WHERE chapter_id = ?',
        chapter.id
    );

    if (existing) {
        console.log("✅ Practice paper already exists!");
        return;
    }

    // Insert the paper
    await db.run(
        'INSERT INTO question_papers (subject_id, chapter_id, title, content) VALUES (?, ?, ?, ?)',
        chapter.subject_id,
        chapter.id,
        paper.title,
        JSON.stringify(paper)
    );

    console.log("✅ Practice paper added successfully!");
    
    // Final verification
    const total = await db.get('SELECT COUNT(*) as count FROM question_papers WHERE chapter_id IS NOT NULL');
    const allChapters = await db.get('SELECT COUNT(*) as count FROM chapters');
    console.log(`\n📊 Final: ${total.count}/${allChapters.count} chapters have practice papers`);
}

addLastPracticePaper().catch(console.error);
