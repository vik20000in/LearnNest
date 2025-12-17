
import { initDatabase } from '../db/database';

const newPaperContent = {
  "title": "Geography Practice Paper - Map of South America - Set B",
  "school": "LearnNest School",
  "class": "Class 6 ICSE",
  "subject": "GEOGRAPHY",
  "duration": "1 hour 30 minutes",
  "totalMarks": 40,
  "sections": [
    {
      "name": "Section A: Multiple Choice Questions (10 marks)",
      "questions": [
        { "id": 1, "question": "Which ocean lies to the east of South America?", "options": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"], "answer": "Atlantic Ocean", "marks": 1 },
        { "id": 2, "question": "The capital city of Argentina is:", "options": ["Santiago", "Buenos Aires", "Brasilia", "Montevideo"], "answer": "Buenos Aires", "marks": 1 },
        { "id": 3, "question": "Which country is the largest producer of coffee in the world?", "options": ["Colombia", "Brazil", "Peru", "Venezuela"], "answer": "Brazil", "marks": 1 },
        { "id": 4, "question": "The Galapagos Islands belong to which country?", "options": ["Ecuador", "Peru", "Chile", "Colombia"], "answer": "Ecuador", "marks": 1 },
        { "id": 5, "question": "Which is the world's highest active volcano found in South America?", "options": ["Mt. Aconcagua", "Mt. Cotopaxi", "Mt. Chimborazo", "Mt. St. Helens"], "answer": "Mt. Cotopaxi", "marks": 1 },
        { "id": 6, "question": "The Strait of Magellan separates South America from:", "options": ["Antarctica", "Tierra del Fuego", "Falkland Islands", "Galapagos Islands"], "answer": "Tierra del Fuego", "marks": 1 },
        { "id": 7, "question": "Which country is famous for the production of Emeralds?", "options": ["Brazil", "Colombia", "Argentina", "Chile"], "answer": "Colombia", "marks": 1 },
        { "id": 8, "question": "The tropical rainforests of the Amazon basin are also known as:", "options": ["Pampas", "Llanos", "Selvas", "Campos"], "answer": "Selvas", "marks": 1 },
        { "id": 9, "question": "Which river forms the border between Argentina and Uruguay?", "options": ["Amazon", "Orinoco", "Rio de la Plata", "Parana"], "answer": "Rio de la Plata", "marks": 1 },
        { "id": 10, "question": "Chile is the world's largest producer of:", "options": ["Gold", "Silver", "Copper", "Iron"], "answer": "Copper", "marks": 1 }
      ]
    },
    {
      "name": "Section B: Very Short Answer Questions (6 marks)",
      "questions": [
        { "id": 11, "question": "What connects South America to North America?", "marks": 1, "answer": "Isthmus of Panama" },
        { "id": 12, "question": "Name the southernmost tip of South America.", "marks": 1, "answer": "Cape Horn" },
        { "id": 13, "question": "What are the tropical grasslands of Venezuela called?", "marks": 1, "answer": "Llanos" },
        { "id": 14, "question": "Name the second longest river in South America.", "marks": 1, "answer": "Parana River" },
        { "id": 15, "question": "Which country is known as the 'Land of Poets'?", "marks": 1, "answer": "Chile" },
        { "id": 16, "question": "Name the plateau located between the Andes mountains in Bolivia.", "marks": 1, "answer": "Bolivian Plateau (Altiplano)" }
      ]
    },
    {
      "name": "Section C: Short Answer Questions (12 marks)",
      "questions": [
        { "id": 17, "question": "Describe the La Plata River System.", "marks": 6, "answer": "The La Plata River System is the second-largest drainage system in South America. It is formed by the confluence of three main rivers: the Parana, the Paraguay, and the Uruguay. These rivers drain the southern part of the continent and flow into the Atlantic Ocean through a wide estuary known as the Rio de la Plata. It is economically important for navigation and hydroelectric power (e.g., Itaipu Dam)." },
        { "id": 18, "question": "What are the characteristics of the Atacama Desert?", "marks": 6, "answer": "The Atacama Desert is located in Northern Chile, between the Andes Mountains and the Pacific Ocean. It is considered one of the driest places on Earth. Some parts have not received rain for centuries. The dryness is caused by the cold Humboldt Current flowing along the coast, which prevents the formation of rain clouds. Despite the aridity, it is rich in mineral deposits like nitrates and copper." }
      ]
    },
    {
      "name": "Section D: Long Answer Questions (12 marks)",
      "questions": [
        { "id": 19, "question": "Describe the natural vegetation zones of South America.", "marks": 6, "answer": "South America has diverse vegetation zones corresponding to its climates:\n1. Selvas: Dense tropical rainforests in the Amazon basin.\n2. Llanos & Campos: Tropical grasslands in Venezuela and Brazil.\n3. Pampas: Temperate grasslands in Argentina and Uruguay, suitable for cattle rearing and wheat cultivation.\n4. Desert Vegetation: Cacti and thorny bushes in the Atacama and Patagonian deserts.\n5. Mediterranean Vegetation: Shrubs and fruit trees in Central Chile.\n6. Mountain Vegetation: Varies with altitude in the Andes." },
        { "id": 20, "question": "Write about the wildlife found in South America.", "marks": 6, "answer": "South America is home to unique and diverse wildlife, especially in the Amazon Rainforest:\n1. Animals: Jaguar, tapir, sloth, armadillo, anteater, and various species of monkeys (e.g., spider monkey).\n2. Birds: Macaws, toucans, hummingbirds, and the Andean Condor (largest flying bird).\n3. Reptiles & Amphibians: Anaconda (largest snake), caimans, and poison dart frogs.\n4. Aquatic Life: Piranhas and pink river dolphins in the Amazon river.\n5. Camelids: Llamas, alpacas, and vicuñas in the Andes mountains, used for wool and transport." }
      ]
    }
  ]
};

async function regeneratePaper() {
    const db = await initDatabase();
    const title = "Geography Practice Paper - Map of South America - Set B";
    
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
