
import { initDatabase } from '../db/database';

const papersToRegenerate = [
    {
        title: "Biology Practice Paper - Chapter 7: Disease and Hygiene - Set A",
        content: {
            "title": "Biology Practice Paper - Chapter 7: Disease and Hygiene - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "A state of complete physical, mental, and social well-being is called:", "options": ["Disease", "Health", "Hygiene", "Fitness"], "answer": "Health", "marks": 1 },
                        { "id": 2, "question": "Diseases that spread from one person to another are called:", "options": ["Non-communicable", "Communicable", "Deficiency", "Genetic"], "answer": "Communicable", "marks": 1 },
                        { "id": 3, "question": "Night blindness is caused by the deficiency of:", "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], "answer": "Vitamin A", "marks": 1 },
                        { "id": 4, "question": "Goitre is caused by the deficiency of:", "options": ["Iron", "Calcium", "Iodine", "Phosphorus"], "answer": "Iodine", "marks": 1 },
                        { "id": 5, "question": "Which of these is a non-communicable disease?", "options": ["Flu", "Diabetes", "Cholera", "Covid-19"], "answer": "Diabetes", "marks": 1 },
                        { "id": 6, "question": "Scurvy is caused by the lack of:", "options": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], "answer": "Vitamin C", "marks": 1 },
                        { "id": 7, "question": "Which nutrient is essential for strong bones?", "options": ["Iron", "Calcium", "Iodine", "Sodium"], "answer": "Calcium", "marks": 1 },
                        { "id": 8, "question": "Anaemia is caused by the deficiency of:", "options": ["Calcium", "Iron", "Iodine", "Potassium"], "answer": "Iron", "marks": 1 },
                        { "id": 9, "question": "Rickets is associated with deficiency of:", "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], "answer": "Vitamin D", "marks": 1 },
                        { "id": 10, "question": "Beri-beri is caused by deficiency of:", "options": ["Vitamin B1", "Vitamin C", "Vitamin A", "Vitamin D"], "answer": "Vitamin B1", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define hygiene.", "marks": 1, "answer": "Practices that help to maintain health and prevent the spread of diseases." },
                        { "id": 12, "question": "Name a disease caused by a virus.", "marks": 1, "answer": "Common Cold (or Influenza/Polio/Covid-19)." },
                        { "id": 13, "question": "What are pathogens?", "marks": 1, "answer": "Disease-causing microorganisms (germs)." },
                        { "id": 14, "question": "Name a food rich in Vitamin C.", "marks": 1, "answer": "Orange (or Lemon/Amla)." },
                        { "id": 15, "question": "What is a balanced diet?", "marks": 1, "answer": "A diet containing all nutrients in right proportions." },
                        { "id": 16, "question": "Name a disease caused by bacteria.", "marks": 1, "answer": "Typhoid (or Cholera/Tuberculosis)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Communicable and Non-communicable diseases.", "marks": 6, "answer": "Communicable vs Non-communicable:\n1. Spread: Communicable spread from person to person; Non-communicable do not.\n2. Cause: Communicable caused by germs (bacteria, virus); Non-communicable caused by deficiency, lifestyle, or organ failure.\n3. Examples: Communicable - Flu, Chickenpox; Non-communicable - Diabetes, Heart disease." },
                        { "id": 18, "question": "List three ways to maintain personal hygiene.", "marks": 6, "answer": "Personal Hygiene:\n1. Bathing daily to remove sweat and dirt.\n2. Brushing teeth twice a day.\n3. Washing hands before and after meals.\n4. Trimming nails regularly.\n5. Wearing clean clothes." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the importance of Vitamins and Minerals.", "marks": 6, "answer": "Importance:\n1. Protection: They protect the body against diseases (Protective foods).\n2. Growth: Minerals like Calcium are needed for bones and teeth.\n3. Functioning: Iron is needed for blood formation; Iodine for thyroid function.\n4. Vision: Vitamin A is good for eyes.\n5. Immunity: Vitamin C boosts immunity." },
                        { "id": 20, "question": "What are deficiency diseases? Give three examples with their symptoms.", "marks": 6, "answer": "Deficiency Diseases:\nDiseases caused by the lack of specific nutrients in the diet over a long period.\nExamples:\n1. Scurvy (Vit C): Bleeding gums, loose teeth.\n2. Rickets (Vit D): Soft and bent bones (bow legs).\n3. Anaemia (Iron): Weakness, pale skin, fatigue." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 7: Disease and Hygiene - Set B",
        content: {
            "title": "Biology Practice Paper - Chapter 7: Disease and Hygiene - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Malaria is spread by:", "options": ["Housefly", "Female Anopheles Mosquito", "Cockroach", "Rat"], "answer": "Female Anopheles Mosquito", "marks": 1 },
                        { "id": 2, "question": "Cholera is caused by:", "options": ["Virus", "Bacteria", "Protozoa", "Fungi"], "answer": "Bacteria", "marks": 1 },
                        { "id": 3, "question": "Which of these is a water-borne disease?", "options": ["Typhoid", "Malaria", "Flu", "Scurvy"], "answer": "Typhoid", "marks": 1 },
                        { "id": 4, "question": "Vaccination protects us from:", "options": ["Accidents", "Deficiency diseases", "Infectious diseases", "Genetic disorders"], "answer": "Infectious diseases", "marks": 1 },
                        { "id": 5, "question": "Dengue is spread by:", "options": ["Anopheles mosquito", "Aedes mosquito", "Culex mosquito", "Housefly"], "answer": "Aedes mosquito", "marks": 1 },
                        { "id": 6, "question": "Rabies is caused by the bite of:", "options": ["Mosquito", "Infected Dog", "Snake", "Spider"], "answer": "Infected Dog", "marks": 1 },
                        { "id": 7, "question": "Ringworm is caused by:", "options": ["Worm", "Fungi", "Virus", "Bacteria"], "answer": "Fungi", "marks": 1 },
                        { "id": 8, "question": "Which of these is an air-borne disease?", "options": ["Cholera", "Tuberculosis (TB)", "Malaria", "Jaundice"], "answer": "Tuberculosis (TB)", "marks": 1 },
                        { "id": 9, "question": "ORS stands for:", "options": ["Oral Rehydration Solution", "Oral Rehydration Syrup", "Oxygen Rehydration Salt", "None"], "answer": "Oral Rehydration Solution", "marks": 1 },
                        { "id": 10, "question": "AIDS is caused by:", "options": ["Bacteria", "HIV Virus", "Protozoa", "Fungi"], "answer": "HIV Virus", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a vector?", "marks": 1, "answer": "An animal or insect that carries disease-causing germs from a sick person to a healthy person." },
                        { "id": 12, "question": "Name a disease spread by houseflies.", "marks": 1, "answer": "Cholera (or Typhoid/Dysentery)." },
                        { "id": 13, "question": "What is vaccination?", "marks": 1, "answer": "The process of administering a vaccine to produce immunity against a disease." },
                        { "id": 14, "question": "Name the protozoan that causes Malaria.", "marks": 1, "answer": "Plasmodium." },
                        { "id": 15, "question": "What is first aid?", "marks": 1, "answer": "Immediate help given to an injured person before medical help arrives." },
                        { "id": 16, "question": "Name a disease prevented by BCG vaccine.", "marks": 1, "answer": "Tuberculosis." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How do houseflies spread diseases?", "marks": 6, "answer": "Spread by Houseflies:\n1. Flies sit on garbage and faeces where germs stick to their legs.\n2. They then sit on uncovered food and water.\n3. The germs are transferred to the food.\n4. When a healthy person eats this contaminated food, they get sick." },
                        { "id": 18, "question": "What precautions should be taken to prevent Malaria and Dengue?", "marks": 6, "answer": "Prevention of Malaria/Dengue:\n1. Do not allow water to stagnate (breeding ground for mosquitoes).\n2. Use mosquito nets while sleeping.\n3. Use mosquito repellents.\n4. Wear full-sleeved clothes.\n5. Spray insecticides to kill mosquitoes." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the different modes of transmission of communicable diseases.", "marks": 6, "answer": "Modes of Transmission:\n1. Through Air: Coughing/sneezing releases germs (Flu, TB).\n2. Through Water/Food: Contaminated food/water (Cholera, Typhoid).\n3. Through Vectors: Insects like mosquitoes/flies (Malaria).\n4. Direct Contact: Touching infected person/items (Ringworm, Chickenpox).\n5. Through Cuts/Wounds: Tetanus." },
                        { "id": 20, "question": "What is immunity? How does vaccination help?", "marks": 6, "answer": "Immunity: The ability of the body to fight against disease-causing germs.\nVaccination:\n1. A vaccine contains dead or weakened germs.\n2. When injected, the body produces antibodies to fight them.\n3. These antibodies remain in the blood.\n4. If the real strong germs enter later, the antibodies kill them immediately, preventing the disease." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 7: Disease and Hygiene - Set C",
        content: {
            "title": "Biology Practice Paper - Chapter 7: Disease and Hygiene - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Obesity is an example of:", "options": ["Communicable disease", "Lifestyle disease", "Deficiency disease", "Genetic disease"], "answer": "Lifestyle disease", "marks": 1 },
                        { "id": 2, "question": "Which of these is a habit that damages health?", "options": ["Exercise", "Smoking", "Sleeping", "Bathing"], "answer": "Smoking", "marks": 1 },
                        { "id": 3, "question": "Garbage should be thrown in:", "options": ["Streets", "Drains", "Covered dustbins", "Parks"], "answer": "Covered dustbins", "marks": 1 },
                        { "id": 4, "question": "Kwashiorkor is caused by deficiency of:", "options": ["Fats", "Proteins", "Vitamins", "Carbohydrates"], "answer": "Proteins", "marks": 1 },
                        { "id": 5, "question": "Marasmus is caused by deficiency of:", "options": ["Proteins and Carbohydrates", "Vitamins", "Minerals", "Water"], "answer": "Proteins and Carbohydrates", "marks": 1 },
                        { "id": 6, "question": "Pasteurization is a method to preserve:", "options": ["Vegetables", "Milk", "Meat", "Fruits"], "answer": "Milk", "marks": 1 },
                        { "id": 7, "question": "Which of these is biodegradable waste?", "options": ["Plastic", "Glass", "Fruit peels", "Metal"], "answer": "Fruit peels", "marks": 1 },
                        { "id": 8, "question": "Allergy is a:", "options": ["Non-communicable condition", "Communicable disease", "Deficiency", "None"], "answer": "Non-communicable condition", "marks": 1 },
                        { "id": 9, "question": "Which organ is affected by Jaundice?", "options": ["Lungs", "Heart", "Liver", "Kidney"], "answer": "Liver", "marks": 1 },
                        { "id": 10, "question": "Conjunctivitis is an infection of the:", "options": ["Ear", "Eye", "Nose", "Throat"], "answer": "Eye", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a lifestyle disease?", "marks": 1, "answer": "Diseases caused by unhealthy habits like poor diet, lack of exercise, or smoking." },
                        { "id": 12, "question": "Name one protein deficiency disease.", "marks": 1, "answer": "Kwashiorkor (or Marasmus)." },
                        { "id": 13, "question": "What is composting?", "marks": 1, "answer": "Process of converting organic waste into manure." },
                        { "id": 14, "question": "What does 'prevention is better than cure' mean?", "marks": 1, "answer": "It is better to stop a disease from happening than to treat it after getting sick." },
                        { "id": 15, "question": "Name a disease caused by contaminated water.", "marks": 1, "answer": "Jaundice (or Cholera/Typhoid)." },
                        { "id": 16, "question": "What is an allergen?", "marks": 1, "answer": "A substance that causes an allergic reaction (e.g., dust, pollen)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a short note on Community Hygiene.", "marks": 6, "answer": "Community Hygiene:\n1. Keeping surroundings clean.\n2. Proper disposal of garbage in covered bins.\n3. Proper drainage system to prevent water stagnation.\n4. Providing safe drinking water.\n5. Spraying insecticides to control vectors.\nIt ensures the health of the entire society." },
                        { "id": 18, "question": "Differentiate between Kwashiorkor and Marasmus.", "marks": 6, "answer": "Kwashiorkor vs Marasmus:\n1. Kwashiorkor: Protein deficiency. Symptoms: Swollen belly (pot belly), thin legs, reddish hair. Usually affects children 1-5 years.\n2. Marasmus: Protein and Carbohydrate (Energy) deficiency. Symptoms: Extreme thinness (skin and bone), loose skin, sunken eyes. Usually affects infants under 1 year." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the methods of food preservation.", "marks": 6, "answer": "Food Preservation Methods:\n1. Refrigeration/Freezing: Low temp slows germ growth (Milk, Veg).\n2. Boiling: Kills germs (Milk, Water).\n3. Drying/Dehydration: Removing water stops germ growth (Grains, Fish).\n4. Salting/Sugaring: Draws out water (Pickles, Jams).\n5. Canning: Airtight sealing.\n6. Pasteurization: Heating and cooling milk." },
                        { "id": 20, "question": "Describe the correct method of waste disposal.", "marks": 6, "answer": "Waste Disposal:\n1. Segregation: Separate waste into Biodegradable (Wet) and Non-biodegradable (Dry).\n2. Composting: Use wet waste (peels, leaves) to make manure.\n3. Recycling: Send dry waste (paper, plastic, glass) for recycling.\n4. Landfills: Dump remaining waste in designated areas away from the city.\n5. Incineration: Burning medical waste at high temp." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 8: Habitat and Adaptation - Set A",
        content: {
            "title": "Biology Practice Paper - Chapter 8: Habitat and Adaptation - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The natural home of an organism is called its:", "options": ["House", "Habitat", "Nest", "Burrow"], "answer": "Habitat", "marks": 1 },
                        { "id": 2, "question": "Which of these is a terrestrial habitat?", "options": ["Pond", "Ocean", "Desert", "River"], "answer": "Desert", "marks": 1 },
                        { "id": 3, "question": "Fish breathe through:", "options": ["Lungs", "Gills", "Skin", "Blowholes"], "answer": "Gills", "marks": 1 },
                        { "id": 4, "question": "Camel is called the 'Ship of the Desert' because:", "options": ["It can swim", "It is adapted to desert life", "It is very fast", "It carries ships"], "answer": "It is adapted to desert life", "marks": 1 },
                        { "id": 5, "question": "Cactus is a plant found in:", "options": ["Mountains", "Deserts", "Water", "Grasslands"], "answer": "Deserts", "marks": 1 },
                        { "id": 6, "question": "Which of these is an aquatic habitat?", "options": ["Forest", "Mountain", "Ocean", "Grassland"], "answer": "Ocean", "marks": 1 },
                        { "id": 7, "question": "The ability of an organism to adjust to its environment is:", "options": ["Growth", "Adaptation", "Respiration", "Movement"], "answer": "Adaptation", "marks": 1 },
                        { "id": 8, "question": "Biotic components include:", "options": ["Soil", "Water", "Plants and Animals", "Air"], "answer": "Plants and Animals", "marks": 1 },
                        { "id": 9, "question": "Abiotic components include:", "options": ["Bacteria", "Fungi", "Sunlight and Temperature", "Insects"], "answer": "Sunlight and Temperature", "marks": 1 },
                        { "id": 10, "question": "Animals that live on trees are called:", "options": ["Aquatic", "Terrestrial", "Arboreal", "Aerial"], "answer": "Arboreal", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define habitat.", "marks": 1, "answer": "The natural surroundings where an organism lives, eats, grows, and reproduces." },
                        { "id": 12, "question": "Give two examples of terrestrial habitats.", "marks": 1, "answer": "Forests, Deserts (or Mountains/Grasslands)." },
                        { "id": 13, "question": "What are xerophytes?", "marks": 1, "answer": "Plants adapted to live in dry/desert conditions (e.g., Cactus)." },
                        { "id": 14, "question": "Name an animal found in polar regions.", "marks": 1, "answer": "Polar Bear (or Penguin)." },
                        { "id": 15, "question": "What is the function of fins in fish?", "marks": 1, "answer": "To help in swimming, balancing, and changing direction." },
                        { "id": 16, "question": "Name a plant that grows in water.", "marks": 1, "answer": "Lotus (or Hydrilla)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Biotic and Abiotic components.", "marks": 6, "answer": "Biotic vs Abiotic:\n1. Biotic: Living things in a habitat. Examples: Plants, Animals, Microorganisms.\n2. Abiotic: Non-living things in a habitat. Examples: Soil, Water, Air, Sunlight, Temperature, Rocks." },
                        { "id": 18, "question": "How is a fish adapted to live in water?", "marks": 6, "answer": "Fish Adaptations:\n1. Streamlined Body: Reduces resistance while swimming.\n2. Gills: To breathe oxygen dissolved in water.\n3. Fins and Tail: For movement and balance.\n4. Scales: Protect the body and help in easy movement.\n5. Air Bladder: Helps to float." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the adaptations of a Camel for desert life.", "marks": 6, "answer": "Camel Adaptations:\n1. Hump: Stores fat (food reserve).\n2. Long Legs: Keep body away from hot sand.\n3. Padded Feet: Prevent sinking into sand.\n4. Long Eyelashes: Protect eyes from sandstorms.\n5. Water Conservation: Drinks lots of water at once, excretes dry dung, passes little urine, does not sweat." },
                        { "id": 20, "question": "Describe the different types of habitats.", "marks": 6, "answer": "Types of Habitats:\n1. Terrestrial (Land): \n   - Deserts (Hot/Dry)\n   - Mountains (Cold/Snowy)\n   - Forests (Trees/Rain)\n   - Grasslands (Grasses)\n2. Aquatic (Water):\n   - Freshwater (Ponds, Lakes, Rivers)\n   - Marine/Saltwater (Oceans, Seas)" }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 8: Habitat and Adaptation - Set B",
        content: {
            "title": "Biology Practice Paper - Chapter 8: Habitat and Adaptation - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Plants in mountain regions are usually:", "options": ["Cone-shaped", "Flat", "Round", "Floating"], "answer": "Cone-shaped", "marks": 1 },
                        { "id": 2, "question": "Which animal has thick fur to protect from cold?", "options": ["Camel", "Yak", "Elephant", "Snake"], "answer": "Yak", "marks": 1 },
                        { "id": 3, "question": "Leaves of cactus are modified into:", "options": ["Flowers", "Spines", "Roots", "Branches"], "answer": "Spines", "marks": 1 },
                        { "id": 4, "question": "Lions live in:", "options": ["Ponds", "Forests/Grasslands", "Oceans", "Polar regions"], "answer": "Forests/Grasslands", "marks": 1 },
                        { "id": 5, "question": "The presence of specific features to survive in a habitat is:", "options": ["Acclimatization", "Adaptation", "Migration", "Hibernation"], "answer": "Adaptation", "marks": 1 },
                        { "id": 6, "question": "Snow Leopard is found in:", "options": ["Deserts", "Mountains", "Oceans", "Plains"], "answer": "Mountains", "marks": 1 },
                        { "id": 7, "question": "Which of these is a predator?", "options": ["Deer", "Lion", "Rabbit", "Zebra"], "answer": "Lion", "marks": 1 },
                        { "id": 8, "question": "Which of these is a prey?", "options": ["Tiger", "Deer", "Eagle", "Shark"], "answer": "Deer", "marks": 1 },
                        { "id": 9, "question": "Roots of desert plants are:", "options": ["Short", "Absent", "Very deep", "Floating"], "answer": "Very deep", "marks": 1 },
                        { "id": 10, "question": "Mountain goats have strong hooves for:", "options": ["Swimming", "Running on rocky slopes", "Digging", "Flying"], "answer": "Running on rocky slopes", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Why do mountain trees have needle-like leaves?", "marks": 1, "answer": "To allow snow and rain to slide off easily." },
                        { "id": 12, "question": "What is the function of spines in cactus?", "marks": 1, "answer": "To reduce water loss by transpiration and protect from animals." },
                        { "id": 13, "question": "Why do lions have eyes in front?", "marks": 1, "answer": "To have a correct idea of the location of their prey." },
                        { "id": 14, "question": "Why do deer have eyes on the sides?", "marks": 1, "answer": "To look in all directions for danger (predators)." },
                        { "id": 15, "question": "Name a plant found in mountains.", "marks": 1, "answer": "Pine (or Fir/Deodar)." },
                        { "id": 16, "question": "What is camouflage?", "marks": 1, "answer": "Blending with the surroundings to hide from predators or prey." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How are trees adapted to mountain habitats?", "marks": 6, "answer": "Mountain Tree Adaptations:\n1. Cone Shape: Helps snow slide off easily.\n2. Needle-like Leaves: Reduce water loss and prevent snow accumulation.\n3. Thick Bark: Protects from cold.\n4. Waxy Coating: Prevents damage from snow." },
                        { "id": 18, "question": "Explain the adaptations of a Lion.", "marks": 6, "answer": "Lion Adaptations:\n1. Color: Light brown color helps it hide in dry grass (Camouflage).\n2. Eyes in Front: Gives precise location of prey.\n3. Strong Claws: Can be withdrawn inside toes to walk silently.\n4. Speed: Can run fast to catch prey." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the adaptations of a Cactus plant.", "marks": 6, "answer": "Cactus Adaptations (Desert):\n1. Leaves modified to Spines: Reduces water loss.\n2. Green Stem: Performs photosynthesis (instead of leaves).\n3. Swollen Stem: Stores water.\n4. Waxy Coating: Prevents water loss.\n5. Deep Roots: Go deep to absorb water.\n6. Sunken Stomata: Open only at night to save water." },
                        { "id": 20, "question": "How are animals adapted to live in mountain regions?", "marks": 6, "answer": "Mountain Animal Adaptations (e.g., Yak, Snow Leopard):\n1. Thick Fur/Skin: Protects from extreme cold.\n2. Layer of Fat: Under skin for insulation.\n3. Strong Hooves/Paws: For running on rocky/snowy slopes.\n4. Hibernation: Some animals sleep through winter to save energy.\n5. Larger Lungs: To breathe in thin air." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 8: Habitat and Adaptation - Set C",
        content: {
            "title": "Biology Practice Paper - Chapter 8: Habitat and Adaptation - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which of these is a marine animal?", "options": ["Rohu", "Catla", "Whale", "Frog"], "answer": "Whale", "marks": 1 },
                        { "id": 2, "question": "Frogs are:", "options": ["Aquatic", "Terrestrial", "Amphibians", "Aerial"], "answer": "Amphibians", "marks": 1 },
                        { "id": 3, "question": "Dolphins breathe through:", "options": ["Gills", "Blowholes (Lungs)", "Skin", "Fins"], "answer": "Blowholes (Lungs)", "marks": 1 },
                        { "id": 4, "question": "Aquatic plants with floating leaves have stomata on:", "options": ["Lower surface", "Upper surface", "Both surfaces", "Absent"], "answer": "Upper surface", "marks": 1 },
                        { "id": 5, "question": "Submerged aquatic plants have leaves that are:", "options": ["Broad and flat", "Narrow and ribbon-like", "Thick and fleshy", "Thorny"], "answer": "Narrow and ribbon-like", "marks": 1 },
                        { "id": 6, "question": "Squids and Octopuses have a shape that is:", "options": ["Streamlined", "Not streamlined", "Flat", "Round"], "answer": "Not streamlined", "marks": 1 },
                        { "id": 7, "question": "Short term adjustment to environment is called:", "options": ["Adaptation", "Acclimatization", "Evolution", "Mutation"], "answer": "Acclimatization", "marks": 1 },
                        { "id": 8, "question": "Roots in aquatic plants are:", "options": ["Very developed", "Reduced or absent", "For storage", "For climbing"], "answer": "Reduced or absent", "marks": 1 },
                        { "id": 9, "question": "Webbed feet are found in:", "options": ["Hen", "Duck/Frog", "Eagle", "Sparrow"], "answer": "Duck/Frog", "marks": 1 },
                        { "id": 10, "question": "Saline water is found in:", "options": ["Ponds", "Rivers", "Oceans", "Lakes"], "answer": "Oceans", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is acclimatization?", "marks": 1, "answer": "Small changes in the body over a short period to adjust to surroundings (e.g., high altitude)." },
                        { "id": 12, "question": "Why do aquatic plants have a waxy coating?", "marks": 1, "answer": "To prevent rotting in water." },
                        { "id": 13, "question": "How do frogs swim?", "marks": 1, "answer": "Using their webbed feet." },
                        { "id": 14, "question": "Name a submerged plant.", "marks": 1, "answer": "Hydrilla (or Tape Grass)." },
                        { "id": 15, "question": "Name a floating plant.", "marks": 1, "answer": "Lotus (or Water Hyacinth)." },
                        { "id": 16, "question": "Do whales have gills?", "marks": 1, "answer": "No, they have lungs." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the adaptations in Aquatic Plants (Hydrophytes).", "marks": 6, "answer": "Aquatic Plant Adaptations:\n1. Roots: Reduced or absent (water is directly absorbed).\n2. Stems: Hollow, light, and flexible to bend with water current.\n3. Leaves: \n   - Floating plants: Broad with waxy coating, stomata on upper side.\n   - Submerged plants: Ribbon-like to prevent tearing by water current.\n4. Air Spaces: Present in stems to help them float." },
                        { "id": 18, "question": "How are frogs adapted to live both on land and in water?", "marks": 6, "answer": "Frog Adaptations (Amphibian):\n1. Skin: Moist skin helps in breathing in water; Lungs help in breathing on land.\n2. Feet: Webbed feet help in swimming; Strong hind legs help in jumping on land.\n3. Eyes: Bulging eyes to see above water while submerged." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the adaptations of marine animals (like Fish/Whales).", "marks": 6, "answer": "Marine Adaptations:\n1. Streamlined Body: Most fish have this for easy movement.\n2. Gills: Fish use gills to use dissolved oxygen.\n3. Blowholes: Whales/Dolphins come to surface to breathe air.\n4. Salt Regulation: Special mechanism to handle salty water.\n5. Deep Sea: Some animals (Squid/Octopus) are not streamlined but make body streamlined when moving." },
                        { "id": 20, "question": "Differentiate between Adaptation and Acclimatization with examples.", "marks": 6, "answer": "Adaptation vs Acclimatization:\n1. Adaptation: Permanent change over thousands of years. Genetic. Example: Camel's hump, Fish's gills.\n2. Acclimatization: Temporary change over a short period. Not genetic. Example: Breathing faster at high mountains, tanning of skin in sun." }
                    ]
                }
            ]
        }
    }
];

async function regeneratePapers() {
    const db = await initDatabase();
    
    for (const paperData of papersToRegenerate) {
        const title = paperData.title;
        console.log(`Processing: ${title}`);
        
        // Check if paper exists
        const paper = await db.get('SELECT * FROM question_papers WHERE title = ?', title);
        
        if (!paper) {
            console.error(`Paper with title "${title}" not found! Skipping...`);
            continue;
        }

        console.log(`Found paper ID: ${paper.id}. Updating content...`);

        await db.run(
            'UPDATE question_papers SET content = ? WHERE id = ?',
            JSON.stringify(paperData.content),
            paper.id
        );

        console.log(`Paper "${title}" updated successfully!`);
        console.log('---');
    }
}

regeneratePapers().catch(console.error);
