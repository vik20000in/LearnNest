import { initDatabase } from '../db/database';

async function addLastFlashcard() {
    const db = await initDatabase();
    
    // Find the chapter
    const chapter = await db.get(`
        SELECT c.id, s.name as subject, c.name as chapter
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
        WHERE c.id NOT IN (SELECT DISTINCT chapter_id FROM flashcards)
    `);

    if (!chapter) {
        console.log("All chapters have flashcards!");
        return;
    }

    console.log(`Adding flashcards for: ${chapter.subject} | ${chapter.chapter}`);

    const flashcards = [
        { front: "বর্ষা ঋতু কখন হয়?", back: "আষাঢ় ও শ্রাবণ মাসে (জুন-জুলাই)" },
        { front: "'বর্ষায় দুর্গতি' কথার অর্থ কী?", back: "বর্ষাকালে বৃষ্টির কারণে যে সমস্যা বা কষ্ট হয়।" },
        { front: "বর্ষাকালের বৈশিষ্ট্য কী?", back: "প্রচুর বৃষ্টিপাত, মেঘলা আকাশ, সবুজ প্রকৃতি এবং শীতল আবহাওয়া।" },
        { front: "বাংলায় ঋতু কয়টি?", back: "ছয়টি - গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত ও বসন্ত।" },
        { front: "তৃতীয় ভাষা হিসেবে বাংলা শেখার সুবিধা কী?", back: "বাংলা সাহিত্য ও সংস্কৃতি বোঝা এবং পশ্চিমবঙ্গের মানুষের সাথে যোগাযোগ।" }
    ];

    for (const card of flashcards) {
        await db.run(
            'INSERT INTO flashcards (chapter_id, front, back) VALUES (?, ?, ?)',
            chapter.id,
            card.front,
            card.back
        );
    }

    console.log(`✅ Inserted ${flashcards.length} flashcards!`);
}

addLastFlashcard().catch(console.error);
