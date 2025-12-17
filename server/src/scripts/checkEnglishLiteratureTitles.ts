
import { initDatabase } from '../db/database';

async function checkTitles() {
    const db = await initDatabase();
    const papers = await db.all("SELECT title FROM question_papers WHERE title LIKE '%ENGLISH LITERATURE%'");
    
    const keywords = [
        "ROCKET",
        "CYBER FRIEND",
        "STOPPING BY WOODS",
        "TO INDIA",
        "LOTTERY TICKET"
    ];

    const foundTitles = papers.map(p => p.title).filter(title => 
        keywords.some(k => title.toUpperCase().includes(k))
    );

    console.log(JSON.stringify(foundTitles, null, 2));
}

checkTitles().catch(console.error);
