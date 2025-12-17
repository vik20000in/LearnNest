
import { initDatabase } from '../db/database';

const newPaperContent = {
  "title": "Geography Practice Paper - Map of South America - Set C",
  "school": "LearnNest School",
  "class": "Class 6 ICSE",
  "subject": "GEOGRAPHY",
  "duration": "1 hour 30 minutes",
  "totalMarks": 40,
  "sections": [
    {
      "name": "Section A: Multiple Choice Questions (10 marks)",
      "questions": [
        { "id": 1, "question": "Which ocean lies to the west of South America?", "options": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], "answer": "Pacific Ocean", "marks": 1 },
        { "id": 2, "question": "Which is the largest country in South America?", "options": ["Argentina", "Brazil", "Peru", "Colombia"], "answer": "Brazil", "marks": 1 },
        { "id": 3, "question": "The longest mountain range in the world, located in South America, is:", "options": ["Rockies", "Himalayas", "Andes", "Alps"], "answer": "Andes", "marks": 1 },
        { "id": 4, "question": "Which major latitude passes through the mouth of the Amazon River?", "options": ["Tropic of Cancer", "Tropic of Capricorn", "Equator", "Arctic Circle"], "answer": "Equator", "marks": 1 },
        { "id": 5, "question": "The Atacama Desert is located in which country?", "options": ["Brazil", "Chile", "Argentina", "Venezuela"], "answer": "Chile", "marks": 1 },
        { "id": 6, "question": "Which of the following is a landlocked country?", "options": ["Peru", "Uruguay", "Bolivia", "Ecuador"], "answer": "Bolivia", "marks": 1 },
        { "id": 7, "question": "The capital city of Peru is:", "options": ["Lima", "Quito", "Bogota", "Santiago"], "answer": "Lima", "marks": 1 },
        { "id": 8, "question": "The grasslands of Argentina are called:", "options": ["Prairies", "Steppes", "Pampas", "Veld"], "answer": "Pampas", "marks": 1 },
        { "id": 9, "question": "Which is the highest navigable lake in the world?", "options": ["Lake Maracaibo", "Lake Titicaca", "Lake Poopo", "Lake Superior"], "answer": "Lake Titicaca", "marks": 1 },
        { "id": 10, "question": "Angel Falls, the world's highest waterfall, is in:", "options": ["Brazil", "Venezuela", "Colombia", "Guyana"], "answer": "Venezuela", "marks": 1 }
      ]
    },
    {
      "name": "Section B: Very Short Answer Questions (6 marks)",
      "questions": [
        { "id": 11, "question": "Name the strait that separates South America from Tierra del Fuego.", "marks": 1, "answer": "Strait of Magellan" },
        { "id": 12, "question": "Which is the highest peak in the Andes Mountains?", "marks": 1, "answer": "Mount Aconcagua" },
        { "id": 13, "question": "Name the two landlocked countries of South America.", "marks": 1, "answer": "Bolivia and Paraguay" },
        { "id": 14, "question": "What is the name of the temperate grasslands found in Argentina and Uruguay?", "marks": 1, "answer": "Pampas" },
        { "id": 15, "question": "Which river is the largest in the world by volume of water?", "marks": 1, "answer": "Amazon River" },
        { "id": 16, "question": "Name the desert located along the coast of Northern Chile.", "marks": 1, "answer": "Atacama Desert" }
      ]
    },
    {
      "name": "Section C: Short Answer Questions (12 marks)",
      "questions": [
        { "id": 17, "question": "Describe the Amazon Basin.", "marks": 6, "answer": "The Amazon Basin is the part of South America drained by the Amazon River and its tributaries. It covers about 40% of the continent. It is located mainly in Brazil but extends into other countries. It contains the Amazon Rainforest, the largest tropical rainforest in the world, known for its immense biodiversity. The climate is hot and wet throughout the year (Equatorial climate)." },
        { "id": 18, "question": "Write a short note on the Andes Mountains.", "marks": 6, "answer": "The Andes Mountains are the longest continental mountain range in the world, stretching along the western coast of South America. They pass through seven countries: Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile, and Argentina. They are young fold mountains and contain many high peaks like Mt. Aconcagua and active volcanoes like Mt. Cotopaxi. They act as a major climatic barrier." }
      ]
    },
    {
      "name": "Section D: Long Answer Questions (12 marks)",
      "questions": [
        { "id": 19, "question": "Explain the climatic conditions of South America.", "marks": 6, "answer": "South America has a diverse climate due to its vast latitudinal extent and physical features.\n1. Equatorial Climate: Found in the Amazon basin, hot and wet all year.\n2. Tropical Climate: Found in the Brazilian Highlands and Guiana Highlands, with distinct wet and dry seasons.\n3. Desert Climate: The Atacama Desert is hot and dry.\n4. Mediterranean Climate: Found in Central Chile, with warm dry summers and mild wet winters.\n5. Temperate Grassland: The Pampas have a moderate climate.\n6. Mountain Climate: In the Andes, temperature decreases with altitude." },
        { "id": 20, "question": "Discuss the importance of the Amazon Rainforest.", "marks": 6, "answer": "The Amazon Rainforest is vital for the planet:\n1. Oxygen Production: Often called the 'Lungs of the Earth', producing 20% of the world's oxygen.\n2. Biodiversity: Home to millions of species of plants, insects, birds, and animals.\n3. Climate Regulation: Absorbs vast amounts of carbon dioxide, helping to fight global warming.\n4. Water Cycle: Plays a crucial role in the global water cycle through transpiration.\n5. Resources: Provides timber, rubber, medicinal plants, and fruits.\nHowever, it faces threats from deforestation." }
      ]
    }
  ]
};

async function regeneratePaper() {
    const db = await initDatabase();
    const title = "Geography Practice Paper - Map of South America - Set C";
    
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
