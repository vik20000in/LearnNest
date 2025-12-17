
import { initDatabase } from '../db/database';

const newPaperContent = {
  "title": "Biology Practice Paper - General / Introduction - Set A",
  "school": "LearnNest School",
  "class": "Class 6 ICSE",
  "subject": "BIOLOGY",
  "duration": "1 hour 30 minutes",
  "totalMarks": 40,
  "sections": [
    {
      "name": "Section A: Multiple Choice Questions (10 marks)",
      "questions": [
        { "id": 1, "question": "The branch of biology that deals with the study of plants is called:", "options": ["Zoology", "Botany", "Microbiology", "Anatomy"], "answer": "Botany", "marks": 1 },
        { "id": 2, "question": "Which of the following is a characteristic of living things?", "options": ["They do not grow", "They do not need food", "They respond to stimuli", "They do not respire"], "answer": "They respond to stimuli", "marks": 1 },
        { "id": 3, "question": "The basic structural and functional unit of life is:", "options": ["Tissue", "Organ", "Cell", "System"], "answer": "Cell", "marks": 1 },
        { "id": 4, "question": "Who is known as the 'Father of Biology'?", "options": ["Aristotle", "Theophrastus", "Robert Hooke", "Darwin"], "answer": "Aristotle", "marks": 1 },
        { "id": 5, "question": "Which of these is a non-living thing?", "options": ["Mushroom", "Bacteria", "Cloud", "Mango tree"], "answer": "Cloud", "marks": 1 },
        { "id": 6, "question": "The process by which green plants make their own food is called:", "options": ["Respiration", "Digestion", "Photosynthesis", "Excretion"], "answer": "Photosynthesis", "marks": 1 },
        { "id": 7, "question": "Animals that eat only plants are called:", "options": ["Carnivores", "Herbivores", "Omnivores", "Scavengers"], "answer": "Herbivores", "marks": 1 },
        { "id": 8, "question": "The study of animals is known as:", "options": ["Botany", "Zoology", "Physics", "Chemistry"], "answer": "Zoology", "marks": 1 },
        { "id": 9, "question": "Which of the following is NOT a characteristic of life?", "options": ["Reproduction", "Growth", "Crystallization", "Movement"], "answer": "Crystallization", "marks": 1 },
        { "id": 10, "question": "The period of life from birth to natural death is called:", "options": ["Life cycle", "Life span", "Growth curve", "Ageing"], "answer": "Life span", "marks": 1 }
      ]
    },
    {
      "name": "Section B: Very Short Answer Questions (6 marks)",
      "questions": [
        { "id": 11, "question": "Define Biology.", "marks": 1, "answer": "Biology is the branch of science that deals with the study of living organisms and their life processes." },
        { "id": 12, "question": "Name the two main branches of Biology.", "marks": 1, "answer": "Botany (study of plants) and Zoology (study of animals)." },
        { "id": 13, "question": "What is a stimulus?", "marks": 1, "answer": "A stimulus is any change in the environment that causes an organism to react or respond." },
        { "id": 14, "question": "Give one example of a unicellular organism.", "marks": 1, "answer": "Amoeba (or Paramecium/Bacteria)." },
        { "id": 15, "question": "What is reproduction?", "marks": 1, "answer": "Reproduction is the process by which living organisms produce young ones of their own kind." },
        { "id": 16, "question": "Name the gas taken in by animals during respiration.", "marks": 1, "answer": "Oxygen." }
      ]
    },
    {
      "name": "Section C: Short Answer Questions (12 marks)",
      "questions": [
        { "id": 17, "question": "Differentiate between living and non-living things.", "marks": 6, "answer": "Living Things vs Non-living Things:\n1. Living things need food, air, and water; Non-living things do not.\n2. Living things grow and develop; Non-living things do not grow (except by accumulation).\n3. Living things respire and excrete; Non-living things do not.\n4. Living things reproduce; Non-living things do not.\n5. Living things have a definite life span; Non-living things do not die." },
        { "id": 18, "question": "Why is Biology important for us?", "marks": 6, "answer": "Importance of Biology:\n1. Health: Helps us understand diseases and their cures.\n2. Food: Helps in improving crop production and animal husbandry.\n3. Environment: Helps us understand the balance of nature and conservation.\n4. Understanding Self: Helps us know about our own body structure and functions.\n5. Industry: Useful in making medicines, leather, jute, etc." }
      ]
    },
    {
      "name": "Section D: Long Answer Questions (12 marks)",
      "questions": [
        { "id": 19, "question": "Explain the characteristics of living organisms.", "marks": 6, "answer": "Characteristics of Living Organisms:\n1. Cellular Organization: All living things are made of cells.\n2. Nutrition: They need food for energy.\n3. Respiration: They break down food to release energy.\n4. Growth: They increase in size and complexity.\n5. Excretion: They remove waste products from the body.\n6. Reproduction: They produce offspring.\n7. Response to Stimuli: They react to changes in their surroundings.\n8. Movement: They show movement (animals move, plants move parts)." },
        { "id": 20, "question": "Write a short note on the branches of Biology.", "marks": 6, "answer": "Biology is divided into several branches:\n1. Botany: Study of plants.\n2. Zoology: Study of animals.\n3. Microbiology: Study of microorganisms like bacteria and viruses.\n4. Anatomy: Study of internal structure of organisms.\n5. Physiology: Study of functions of body parts.\n6. Ecology: Study of relationship between organisms and their environment.\n7. Genetics: Study of heredity and variation." }
      ]
    }
  ]
};

async function regeneratePaper() {
    const db = await initDatabase();
    const title = "Biology Practice Paper - General / Introduction - Set A";
    
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
