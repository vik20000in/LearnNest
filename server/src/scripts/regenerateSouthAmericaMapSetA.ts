
import { initDatabase } from '../db/database';

const newPaperContent = {
  "title": "Geography Practice Paper - Map of South America - Set A",
  "school": "LearnNest School",
  "class": "Class 6 ICSE",
  "subject": "GEOGRAPHY",
  "duration": "1 hour 30 minutes",
  "totalMarks": 40,
  "sections": [
    {
      "name": "Section A: Multiple Choice Questions (10 marks)",
      "questions": [
        { "id": 1, "question": "Which important line of latitude passes through the middle of South America?", "options": ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle"], "answer": "Tropic of Capricorn", "marks": 1 },
        { "id": 2, "question": "Which sea lies to the north of South America?", "options": ["Red Sea", "Caribbean Sea", "Mediterranean Sea", "Tasman Sea"], "answer": "Caribbean Sea", "marks": 1 },
        { "id": 3, "question": "Which country is the largest producer of oil in South America?", "options": ["Brazil", "Argentina", "Venezuela", "Peru"], "answer": "Venezuela", "marks": 1 },
        { "id": 4, "question": "The Guiana Highlands are located in the ________ part of the continent.", "options": ["Northern", "Southern", "Eastern", "Western"], "answer": "Northern", "marks": 1 },
        { "id": 5, "question": "Which river flows into the Caribbean Sea?", "options": ["Amazon", "Orinoco", "Magdalena", "Parana"], "answer": "Magdalena", "marks": 1 },
        { "id": 6, "question": "The Patagonian Desert is located in which country?", "options": ["Chile", "Argentina", "Brazil", "Bolivia"], "answer": "Argentina", "marks": 1 },
        { "id": 7, "question": "Which is the largest lake in South America?", "options": ["Lake Titicaca", "Lake Maracaibo", "Lake Poopo", "Lake Superior"], "answer": "Lake Maracaibo", "marks": 1 },
        { "id": 8, "question": "The tropical grasslands of Brazil are called:", "options": ["Llanos", "Pampas", "Campos", "Veld"], "answer": "Campos", "marks": 1 },
        { "id": 9, "question": "Which country is the world's largest producer of nitrates?", "options": ["Peru", "Chile", "Colombia", "Ecuador"], "answer": "Chile", "marks": 1 },
        { "id": 10, "question": "The beast of burden used in the Andes mountains is:", "options": ["Camel", "Yak", "Llama", "Horse"], "answer": "Llama", "marks": 1 }
      ]
    },
    {
      "name": "Section B: Very Short Answer Questions (6 marks)",
      "questions": [
        { "id": 11, "question": "Name the island located at the southern tip of South America.", "marks": 1, "answer": "Tierra del Fuego" },
        { "id": 12, "question": "Which is the highest waterfall in the world?", "marks": 1, "answer": "Angel Falls" },
        { "id": 13, "question": "Name the largest snake found in the Amazon basin.", "marks": 1, "answer": "Anaconda" },
        { "id": 14, "question": "Which country is known as the 'Coffee Pot of the World'?", "marks": 1, "answer": "Brazil" },
        { "id": 15, "question": "What is the Gran Chaco?", "marks": 1, "answer": "It is a vast lowland alluvial plain with warm temperate forest and grasslands." },
        { "id": 16, "question": "Name an active volcano in Ecuador.", "marks": 1, "answer": "Mt. Cotopaxi" }
      ]
    },
    {
      "name": "Section C: Short Answer Questions (12 marks)",
      "questions": [
        { "id": 17, "question": "Describe the location of South America.", "marks": 6, "answer": "South America is located mostly in the Southern Hemisphere. It is situated between the Atlantic Ocean in the east and the Pacific Ocean in the west. To the north lies the Caribbean Sea, and to the south is the Southern Ocean. The Equator passes through the northern part, and the Tropic of Capricorn passes through the middle." },
        { "id": 18, "question": "Write a short note on the Central Lowlands of South America.", "marks": 6, "answer": "The Central Lowlands lie between the Andes Mountains in the west and the Eastern Highlands. They are drained by three major river systems: the Orinoco, the Amazon, and the La Plata. These lowlands are vast, fertile plains. The Amazon basin is the largest part, covered with dense rainforests." }
      ]
    },
    {
      "name": "Section D: Long Answer Questions (12 marks)",
      "questions": [
        { "id": 19, "question": "Explain the factors affecting the climate of South America.", "marks": 6, "answer": "The climate of South America is affected by:\n1. Latitude: The continent stretches from the Torrid Zone to the Temperate Zone.\n2. Altitude: The Andes mountains have a cold climate due to high altitude.\n3. Ocean Currents: The cold Humboldt Current cools the western coast, while warm currents affect the eastern coast.\n4. Winds: The Trade Winds bring rainfall to the eastern parts.\n5. Physical Features: The Andes act as a barrier to winds." },
        { "id": 20, "question": "Describe the life of the people in the Amazon basin.", "marks": 6, "answer": "The Amazon basin is sparsely populated due to the dense forests and hot-wet climate. Indigenous tribes live here, practicing shifting cultivation, hunting, and gathering. They live in special houses called 'Malocas'. With modern development, activities like rubber tapping, mining, and logging have increased, leading to changes in their traditional lifestyle and deforestation." }
      ]
    }
  ]
};

async function regeneratePaper() {
    const db = await initDatabase();
    const title = "Geography Practice Paper - Map of South America - Set A";
    
    // Check if paper exists
    const paper = await db.get('SELECT * FROM question_papers WHERE title = ?', title);
    
    if (!paper) {
        console.error(`Paper with title "${title}" not found!`);
        return;
    }

    console.log(`Found paper ID: ${paper.id}. Updating content...`);

    await db.run(
        'UPDATE question_papers SET content = ? WHERE id = ?',
        JSON.stringify(newPaperContent),
        paper.id
    );

    console.log("Paper updated successfully!");
}

regeneratePaper().catch(console.error);
