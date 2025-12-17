
import { initDatabase } from '../db/database';

const papersToRegenerate = [
    {
        title: "Biology Practice Paper - Chapter 4: Human Body: Digestive System - Set B",
        content: {
            "title": "Biology Practice Paper - Chapter 4: Human Body: Digestive System - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Bile juice is produced by the:", "options": ["Stomach", "Liver", "Pancreas", "Small Intestine"], "answer": "Liver", "marks": 1 },
                        { "id": 2, "question": "The digestion of proteins begins in the:", "options": ["Mouth", "Stomach", "Small Intestine", "Large Intestine"], "answer": "Stomach", "marks": 1 },
                        { "id": 3, "question": "The total number of milk teeth in a child is:", "options": ["20", "28", "32", "16"], "answer": "20", "marks": 1 },
                        { "id": 4, "question": "Which teeth are used for tearing food?", "options": ["Incisors", "Canines", "Premolars", "Molars"], "answer": "Canines", "marks": 1 },
                        { "id": 5, "question": "The finger-like projections in the small intestine are called:", "options": ["Villi", "Cilia", "Flagella", "Tentacles"], "answer": "Villi", "marks": 1 },
                        { "id": 6, "question": "The acid produced in the stomach is:", "options": ["Sulphuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"], "answer": "Hydrochloric acid", "marks": 1 },
                        { "id": 7, "question": "The largest gland in the human body is:", "options": ["Pancreas", "Liver", "Salivary gland", "Thyroid"], "answer": "Liver", "marks": 1 },
                        { "id": 8, "question": "Saliva contains an enzyme called:", "options": ["Pepsin", "Amylase (Ptyalin)", "Trypsin", "Lipase"], "answer": "Amylase (Ptyalin)", "marks": 1 },
                        { "id": 9, "question": "The undigested food is stored temporarily in the:", "options": ["Rectum", "Anus", "Colon", "Caecum"], "answer": "Rectum", "marks": 1 },
                        { "id": 10, "question": "Which of these is NOT a part of the alimentary canal?", "options": ["Oesophagus", "Stomach", "Liver", "Intestine"], "answer": "Liver", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the function of the tongue?", "marks": 1, "answer": "It helps in mixing saliva with food, tasting, and swallowing." },
                        { "id": 12, "question": "Define peristalsis.", "marks": 1, "answer": "The wave-like movement of the oesophagus walls to push food down." },
                        { "id": 13, "question": "Name the hardest substance in the human body.", "marks": 1, "answer": "Enamel." },
                        { "id": 14, "question": "What is the function of the gall bladder?", "marks": 1, "answer": "To store bile juice." },
                        { "id": 15, "question": "Name the four types of teeth.", "marks": 1, "answer": "Incisors, Canines, Premolars, Molars." },
                        { "id": 16, "question": "What is chyme?", "marks": 1, "answer": "The semi-solid, partially digested food in the stomach." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Milk teeth and Permanent teeth.", "marks": 6, "answer": "Milk Teeth vs Permanent Teeth:\n1. Milk teeth appear in childhood (6 months to 2 years); Permanent teeth replace them from age 6 onwards.\n2. Milk teeth are 20 in number; Permanent teeth are 32 in number.\n3. Milk teeth are smaller and weaker; Permanent teeth are larger and stronger.\n4. Milk teeth do not have premolars; Permanent teeth include premolars." },
                        { "id": 18, "question": "What happens to the food in the small intestine?", "marks": 6, "answer": "In the small intestine:\n1. Digestion is completed: Bile (from liver) breaks down fats. Pancreatic juice breaks down carbohydrates, fats, and proteins. Intestinal juice completes the process.\n2. Absorption: The digested food (glucose, amino acids, fatty acids) is absorbed by the villi into the blood." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the structure and function of the stomach.", "marks": 6, "answer": "Stomach:\nStructure: It is a J-shaped muscular bag located on the left side of the abdomen.\nFunctions:\n1. Storage: It stores food for a few hours.\n2. Churning: It churns food to mix it with digestive juices.\n3. Digestion: Gastric juice contains Hydrochloric Acid (kills germs) and Pepsin (breaks down proteins).\n4. It turns food into a semi-solid paste called chyme." },
                        { "id": 20, "question": "Explain the process of digestion in the mouth.", "marks": 6, "answer": "Digestion in the mouth (Buccal Cavity):\n1. Ingestion: Food is taken in.\n2. Mastication: Teeth chew and grind the food into smaller pieces.\n3. Mixing: Tongue mixes food with saliva.\n4. Chemical Digestion: Saliva contains the enzyme Amylase which converts starch (complex sugar) into maltose (simple sugar).\n5. Swallowing: The tongue pushes the bolus of food into the oesophagus." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 4: Human Body: Digestive System - Set C",
        content: {
            "title": "Biology Practice Paper - Chapter 4: Human Body: Digestive System - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Absorption of water takes place in the:", "options": ["Stomach", "Small Intestine", "Large Intestine", "Oesophagus"], "answer": "Large Intestine", "marks": 1 },
                        { "id": 2, "question": "The process of utilizing absorbed food for growth and energy is:", "options": ["Digestion", "Absorption", "Assimilation", "Egestion"], "answer": "Assimilation", "marks": 1 },
                        { "id": 3, "question": "Which of these causes tooth decay?", "options": ["Eating raw vegetables", "Brushing twice a day", "Eating too many sweets", "Drinking milk"], "answer": "Eating too many sweets", "marks": 1 },
                        { "id": 4, "question": "The sticky yellow layer formed on teeth is called:", "options": ["Enamel", "Plaque", "Dentine", "Pulp"], "answer": "Plaque", "marks": 1 },
                        { "id": 5, "question": "Which part of the tooth contains nerves and blood vessels?", "options": ["Enamel", "Dentine", "Pulp", "Gum"], "answer": "Pulp", "marks": 1 },
                        { "id": 6, "question": "Ruminants like cows have a special stomach part called:", "options": ["Rumen", "Reticulum", "Omasum", "Abomasum"], "answer": "Rumen", "marks": 1 },
                        { "id": 7, "question": "The length of the small intestine is approximately:", "options": ["1.5 meters", "7 meters", "10 meters", "2 meters"], "answer": "7 meters", "marks": 1 },
                        { "id": 8, "question": "Which vitamin is produced in the large intestine by bacteria?", "options": ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"], "answer": "Vitamin K", "marks": 1 },
                        { "id": 9, "question": "The opening through which waste is eliminated is:", "options": ["Rectum", "Anus", "Urethra", "Ureter"], "answer": "Anus", "marks": 1 },
                        { "id": 10, "question": "Digestion of fats produces:", "options": ["Amino acids", "Glucose", "Fatty acids and Glycerol", "Starch"], "answer": "Fatty acids and Glycerol", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is egestion?", "marks": 1, "answer": "The process of removing undigested food waste (faeces) from the body." },
                        { "id": 12, "question": "Name the enzyme that digests fats.", "marks": 1, "answer": "Lipase." },
                        { "id": 13, "question": "What is the function of the epiglottis?", "marks": 1, "answer": "It prevents food from entering the windpipe while swallowing." },
                        { "id": 14, "question": "What is dental caries?", "marks": 1, "answer": "Tooth decay or cavities caused by acid-producing bacteria." },
                        { "id": 15, "question": "Name the three parts of the small intestine.", "marks": 1, "answer": "Duodenum, Jejunum, Ileum." },
                        { "id": 16, "question": "What is the role of mucus in the stomach?", "marks": 1, "answer": "It protects the stomach lining from the action of hydrochloric acid." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How can we take care of our teeth?", "marks": 6, "answer": "Dental Care:\n1. Brush teeth twice a day (morning and night).\n2. Rinse mouth after every meal.\n3. Avoid too many sweets, chocolates, and sticky food.\n4. Floss regularly to remove food particles between teeth.\n5. Visit a dentist regularly for check-ups.\n6. Eat calcium-rich food like milk." },
                        { "id": 18, "question": "Explain the process of Rumination.", "marks": 6, "answer": "Rumination in grass-eating animals (Ruminants):\n1. They quickly swallow grass and store it in the Rumen (first stomach chamber).\n2. Here, bacteria partially digest the cellulose.\n3. Later, the partially digested food (cud) returns to the mouth in small lumps.\n4. The animal chews it thoroughly (chewing the cud).\n5. This helps in complete digestion of cellulose." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "List the five steps of Nutrition in humans.", "marks": 6, "answer": "Steps of Nutrition:\n1. Ingestion: Taking food into the body (Mouth).\n2. Digestion: Breaking down complex food into simple soluble forms (Stomach, Intestines).\n3. Absorption: Taking up the digested food into the blood (Small Intestine).\n4. Assimilation: Using the absorbed food for energy, growth, and repair (Cells).\n5. Egestion: Removing undigested waste from the body (Anus)." },
                        { "id": 20, "question": "Draw a labeled diagram of the Human Digestive System (Description).", "marks": 6, "answer": "[Diagram Question - Student should draw]\nKey labels to include:\n- Mouth/Buccal Cavity\n- Oesophagus (Food pipe)\n- Stomach (J-shaped)\n- Liver (Right side, large)\n- Pancreas (Leaf-like, below stomach)\n- Small Intestine (Coiled)\n- Large Intestine (Surrounding small intestine)\n- Anus" }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 5: Human Body: Respiratory System - Set A",
        content: {
            "title": "Biology Practice Paper - Chapter 5: Human Body: Respiratory System - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The main organs of the respiratory system are:", "options": ["Kidneys", "Lungs", "Heart", "Stomach"], "answer": "Lungs", "marks": 1 },
                        { "id": 2, "question": "The windpipe is also known as:", "options": ["Oesophagus", "Trachea", "Larynx", "Pharynx"], "answer": "Trachea", "marks": 1 },
                        { "id": 3, "question": "The gas we inhale in larger amounts is:", "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], "answer": "Nitrogen", "marks": 1 },
                        { "id": 4, "question": "The gas essential for respiration is:", "options": ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"], "answer": "Oxygen", "marks": 1 },
                        { "id": 5, "question": "The openings of the nose are called:", "options": ["Nostrils", "Nasal cavity", "Bronchi", "Alveoli"], "answer": "Nostrils", "marks": 1 },
                        { "id": 6, "question": "The muscular sheet below the lungs is called:", "options": ["Ribcage", "Diaphragm", "Sternum", "Pleura"], "answer": "Diaphragm", "marks": 1 },
                        { "id": 7, "question": "Exchange of gases takes place in:", "options": ["Trachea", "Bronchi", "Alveoli", "Nose"], "answer": "Alveoli", "marks": 1 },
                        { "id": 8, "question": "Respiration releases:", "options": ["Energy", "Oxygen", "Glucose", "Starch"], "answer": "Energy", "marks": 1 },
                        { "id": 9, "question": "The voice box is called:", "options": ["Pharynx", "Larynx", "Trachea", "Glottis"], "answer": "Larynx", "marks": 1 },
                        { "id": 10, "question": "Which of these protects the lungs?", "options": ["Skull", "Ribcage", "Backbone", "Hip bone"], "answer": "Ribcage", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define respiration.", "marks": 1, "answer": "The process of breaking down food to release energy using oxygen." },
                        { "id": 12, "question": "What is inhalation?", "marks": 1, "answer": "Taking in air rich in oxygen." },
                        { "id": 13, "question": "What is exhalation?", "marks": 1, "answer": "Giving out air rich in carbon dioxide." },
                        { "id": 14, "question": "Name the hair-like structures in the nose.", "marks": 1, "answer": "Cilia." },
                        { "id": 15, "question": "What is the function of mucus in the nose?", "marks": 1, "answer": "To trap dust and germs." },
                        { "id": 16, "question": "Name the two branches of the trachea.", "marks": 1, "answer": "Bronchi." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Breathing and Respiration.", "marks": 6, "answer": "Breathing vs Respiration:\n1. Breathing is a physical process (exchange of gases); Respiration is a chemical process (breakdown of food).\n2. Breathing takes place outside cells (lungs); Respiration takes place inside cells.\n3. No energy is released in breathing; Energy is released in respiration.\n4. No enzymes involved in breathing; Enzymes are involved in respiration." },
                        { "id": 18, "question": "Why should we breathe through the nose and not the mouth?", "marks": 6, "answer": "Breathing through the nose is better because:\n1. Hairs (cilia) in the nose trap dust particles.\n2. Mucus traps germs.\n3. Blood vessels in the nose warm the air to body temperature.\n4. It moistens the air.\nMouth breathing allows cold, dirty air to enter the lungs directly." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the path of air through the respiratory system.", "marks": 6, "answer": "Path of Air:\n1. Nostrils: Air enters here.\n2. Nasal Cavity: Air is filtered, warmed, and moistened.\n3. Pharynx: Common passage for food and air.\n4. Larynx: Voice box.\n5. Trachea: Windpipe.\n6. Bronchi: Two branches entering lungs.\n7. Bronchioles: Smaller branches.\n8. Alveoli: Air sacs where gas exchange happens." },
                        { "id": 20, "question": "Write the word equation for Aerobic Respiration and explain it.", "marks": 6, "answer": "Equation:\nGlucose + Oxygen -> Carbon Dioxide + Water + Energy\n\nExplanation:\nIn aerobic respiration, food (glucose) is completely broken down in the presence of oxygen. This process releases a large amount of energy along with carbon dioxide and water as waste products. This happens in the cells (mitochondria)." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 5: Human Body: Respiratory System - Set B",
        content: {
            "title": "Biology Practice Paper - Chapter 5: Human Body: Respiratory System - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "During inhalation, the diaphragm moves:", "options": ["Upwards", "Downwards", "Sideways", "Does not move"], "answer": "Downwards", "marks": 1 },
                        { "id": 2, "question": "During exhalation, the ribs move:", "options": ["Outwards and Up", "Inwards and Down", "Backwards", "Stationary"], "answer": "Inwards and Down", "marks": 1 },
                        { "id": 3, "question": "The percentage of Oxygen in inhaled air is:", "options": ["21%", "0.04%", "78%", "16%"], "answer": "21%", "marks": 1 },
                        { "id": 4, "question": "The percentage of Carbon Dioxide in exhaled air is:", "options": ["0.04%", "4%", "21%", "78%"], "answer": "4%", "marks": 1 },
                        { "id": 5, "question": "Lime water turns milky in the presence of:", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": "Carbon Dioxide", "marks": 1 },
                        { "id": 6, "question": "Anaerobic respiration takes place in the absence of:", "options": ["Food", "Water", "Oxygen", "Light"], "answer": "Oxygen", "marks": 1 },
                        { "id": 7, "question": "Yeast is used to make:", "options": ["Curd", "Bread and Wine", "Juice", "Oil"], "answer": "Bread and Wine", "marks": 1 },
                        { "id": 8, "question": "Cramps in muscles during heavy exercise are due to accumulation of:", "options": ["Alcohol", "Lactic Acid", "Citric Acid", "Glucose"], "answer": "Lactic Acid", "marks": 1 },
                        { "id": 9, "question": "The covering of the lungs is called:", "options": ["Pericardium", "Pleura", "Meninges", "Cornea"], "answer": "Pleura", "marks": 1 },
                        { "id": 10, "question": "Which organism breathes through skin?", "options": ["Fish", "Human", "Earthworm", "Cockroach"], "answer": "Earthworm", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the function of the ribcage?", "marks": 1, "answer": "To protect the lungs and heart and help in breathing movements." },
                        { "id": 12, "question": "Name the product of anaerobic respiration in yeast.", "marks": 1, "answer": "Ethyl Alcohol (Ethanol) and Carbon Dioxide." },
                        { "id": 13, "question": "What are alveoli?", "marks": 1, "answer": "Tiny balloon-like air sacs in lungs where gas exchange occurs." },
                        { "id": 14, "question": "What is the normal breathing rate of an adult at rest?", "marks": 1, "answer": "15-18 times per minute." },
                        { "id": 15, "question": "Why do we yawn?", "marks": 1, "answer": "To take in more oxygen when we are tired or drowsy." },
                        { "id": 16, "question": "Name the flap that covers the windpipe.", "marks": 1, "answer": "Epiglottis." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the mechanism of Inhalation.", "marks": 6, "answer": "Mechanism of Inhalation:\n1. The diaphragm contracts and moves downwards (flattens).\n2. The intercostal muscles contract, pulling the ribs upwards and outwards.\n3. This increases the volume of the chest cavity.\n4. The pressure inside the lungs decreases.\n5. Air rushes into the lungs from outside." },
                        { "id": 18, "question": "Differentiate between Aerobic and Anaerobic Respiration.", "marks": 6, "answer": "Aerobic vs Anaerobic:\n1. Aerobic uses Oxygen; Anaerobic does not.\n2. Aerobic breaks down food completely; Anaerobic breaks it down partially.\n3. Aerobic releases large energy; Anaerobic releases small energy.\n4. End products of Aerobic: CO2 + Water; End products of Anaerobic: Alcohol/Lactic Acid + CO2." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe an experiment to show that we exhale Carbon Dioxide.", "marks": 6, "answer": "Experiment:\n1. Take some freshly prepared lime water in a test tube.\n2. Take a straw and blow air from your mouth into the lime water.\n3. Observation: The lime water turns milky.\n4. Conclusion: Carbon dioxide turns lime water milky. Since exhaled air turned it milky, it proves that we exhale carbon dioxide." },
                        { "id": 20, "question": "How does gas exchange occur in the lungs?", "marks": 6, "answer": "Gas Exchange:\n1. It happens in the alveoli.\n2. Alveoli are surrounded by a network of blood capillaries.\n3. Oxygen from the air in alveoli passes into the blood.\n4. Carbon dioxide from the blood passes into the alveoli.\n5. This happens by diffusion (movement from high concentration to low concentration).\n6. The blood becomes oxygenated and goes to the heart." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 5: Human Body: Respiratory System - Set C",
        content: {
            "title": "Biology Practice Paper - Chapter 5: Human Body: Respiratory System - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Inflammation of the bronchi is called:", "options": ["Asthma", "Bronchitis", "Pneumonia", "Tuberculosis"], "answer": "Bronchitis", "marks": 1 },
                        { "id": 2, "question": "Which habit is most harmful to the lungs?", "options": ["Exercise", "Smoking", "Sleeping", "Eating"], "answer": "Smoking", "marks": 1 },
                        { "id": 3, "question": "Fish breathe through:", "options": ["Lungs", "Skin", "Gills", "Trachea"], "answer": "Gills", "marks": 1 },
                        { "id": 4, "question": "Insects breathe through tiny holes called:", "options": ["Spiracles", "Nostrils", "Stomata", "Gills"], "answer": "Spiracles", "marks": 1 },
                        { "id": 5, "question": "Plants breathe through:", "options": ["Lenticels and Stomata", "Roots only", "Flowers", "Bark only"], "answer": "Lenticels and Stomata", "marks": 1 },
                        { "id": 6, "question": "The C-shaped rings in the trachea are made of:", "options": ["Bone", "Cartilage", "Muscle", "Skin"], "answer": "Cartilage", "marks": 1 },
                        { "id": 7, "question": "Pneumonia is an infection of the:", "options": ["Nose", "Throat", "Lungs", "Heart"], "answer": "Lungs", "marks": 1 },
                        { "id": 8, "question": "The sticky substance in cigarette smoke that damages lungs is:", "options": ["Nicotine", "Tar", "Carbon Monoxide", "Oxygen"], "answer": "Tar", "marks": 1 },
                        { "id": 9, "question": "Sneezing helps to:", "options": ["Take in oxygen", "Expel irritants from nose", "Cool the body", "Digest food"], "answer": "Expel irritants from nose", "marks": 1 },
                        { "id": 10, "question": "Frogs breathe through:", "options": ["Lungs only", "Skin only", "Lungs and Skin", "Gills only"], "answer": "Lungs and Skin", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the function of cartilage rings in the trachea?", "marks": 1, "answer": "To prevent the windpipe from collapsing." },
                        { "id": 12, "question": "Name a respiratory disease caused by air pollution.", "marks": 1, "answer": "Asthma." },
                        { "id": 13, "question": "What are lenticels?", "marks": 1, "answer": "Tiny pores on the stems of woody plants for gas exchange." },
                        { "id": 14, "question": "What is passive smoking?", "marks": 1, "answer": "Inhaling smoke from other people's cigarettes." },
                        { "id": 15, "question": "Name the addictive drug in tobacco.", "marks": 1, "answer": "Nicotine." },
                        { "id": 16, "question": "How do whales breathe?", "marks": 1, "answer": "Through blowholes (lungs) by coming to the surface." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a short note on Asthma.", "marks": 6, "answer": "Asthma:\n1. It is a chronic respiratory disease.\n2. The airways (bronchi) become narrow and swollen.\n3. It causes difficulty in breathing, wheezing, and coughing.\n4. It is often triggered by allergies (dust, pollen, smoke).\n5. Inhalers are used to relieve symptoms." },
                        { "id": 18, "question": "How does respiration occur in plants?", "marks": 6, "answer": "Respiration in Plants:\n1. Plants respire day and night.\n2. They take in Oxygen and give out Carbon Dioxide.\n3. In leaves, exchange happens through Stomata.\n4. In stems, it happens through Lenticels.\n5. In roots, root hairs take oxygen from air spaces in the soil." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the harmful effects of smoking.", "marks": 6, "answer": "Harmful effects of Smoking:\n1. Lung Cancer: Tar deposits in lungs cause cancer.\n2. Bronchitis: Damages cilia, leading to chronic cough.\n3. Emphysema: Alveoli walls are damaged, reducing surface area for gas exchange.\n4. Heart Disease: Nicotine increases blood pressure and heart rate.\n5. Carbon Monoxide: Reduces oxygen-carrying capacity of blood." },
                        { "id": 20, "question": "Draw a labeled diagram of the Human Respiratory System (Description).", "marks": 6, "answer": "[Diagram Question - Student should draw]\nKey labels to include:\n- Nostrils\n- Pharynx\n- Larynx\n- Trachea (with rings)\n- Bronchi\n- Lungs (Right and Left)\n- Diaphragm\n- Bronchioles/Alveoli (can be shown in inset)" }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 6: Human Body: Circulatory System - Set A",
        content: {
            "title": "Biology Practice Paper - Chapter 6: Human Body: Circulatory System - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The pumping organ of the circulatory system is:", "options": ["Lungs", "Heart", "Kidney", "Brain"], "answer": "Heart", "marks": 1 },
                        { "id": 2, "question": "The fluid part of the blood is called:", "options": ["Plasma", "RBC", "WBC", "Platelets"], "answer": "Plasma", "marks": 1 },
                        { "id": 3, "question": "Red blood cells contain a red pigment called:", "options": ["Chlorophyll", "Hemoglobin", "Melanin", "Bile"], "answer": "Hemoglobin", "marks": 1 },
                        { "id": 4, "question": "Blood vessels that carry blood away from the heart are:", "options": ["Veins", "Arteries", "Capillaries", "Nerves"], "answer": "Arteries", "marks": 1 },
                        { "id": 5, "question": "The heart has how many chambers?", "options": ["Two", "Three", "Four", "Five"], "answer": "Four", "marks": 1 },
                        { "id": 6, "question": "Which cells help in clotting of blood?", "options": ["RBC", "WBC", "Platelets", "Plasma"], "answer": "Platelets", "marks": 1 },
                        { "id": 7, "question": "The upper chambers of the heart are called:", "options": ["Ventricles", "Auricles (Atria)", "Valves", "Septum"], "answer": "Auricles (Atria)", "marks": 1 },
                        { "id": 8, "question": "Which blood vessel carries deoxygenated blood to the lungs?", "options": ["Aorta", "Pulmonary Artery", "Pulmonary Vein", "Vena Cava"], "answer": "Pulmonary Artery", "marks": 1 },
                        { "id": 9, "question": "The rhythmic throbbing of arteries is called:", "options": ["Heartbeat", "Pulse", "Breathing", "Digestion"], "answer": "Pulse", "marks": 1 },
                        { "id": 10, "question": "Which cells fight against germs?", "options": ["RBC", "WBC", "Platelets", "Skin cells"], "answer": "WBC", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is the function of Hemoglobin?", "marks": 1, "answer": "To carry oxygen from lungs to body parts." },
                        { "id": 12, "question": "Name the largest artery in the body.", "marks": 1, "answer": "Aorta." },
                        { "id": 13, "question": "What is the normal pulse rate of an adult?", "marks": 1, "answer": "72 times per minute." },
                        { "id": 14, "question": "Name the instrument used to hear heartbeat.", "marks": 1, "answer": "Stethoscope." },
                        { "id": 15, "question": "What separates the left and right sides of the heart?", "marks": 1, "answer": "Septum." },
                        { "id": 16, "question": "Which blood vessels have valves?", "marks": 1, "answer": "Veins." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Arteries and Veins.", "marks": 6, "answer": "Arteries vs Veins:\n1. Arteries carry blood AWAY from heart; Veins carry blood TOWARDS heart.\n2. Arteries usually carry Oxygenated blood (except Pulmonary Artery); Veins usually carry Deoxygenated blood (except Pulmonary Vein).\n3. Arteries have thick, elastic walls; Veins have thin walls.\n4. Arteries do not have valves; Veins have valves to prevent backflow.\n5. Arteries are deep-seated; Veins are superficial." },
                        { "id": 18, "question": "What are the functions of blood?", "marks": 6, "answer": "Functions of Blood:\n1. Transport of Oxygen and Carbon Dioxide.\n2. Transport of digested food (nutrients).\n3. Transport of waste products to kidneys.\n4. Protection against germs (WBCs).\n5. Clotting to prevent blood loss (Platelets).\n6. Regulation of body temperature." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the structure of the Human Heart.", "marks": 6, "answer": "Structure of Heart:\n1. It is a muscular organ located in the chest cavity.\n2. It has four chambers.\n3. Upper two chambers are Auricles (Atria) - Receiving chambers.\n4. Lower two chambers are Ventricles - Pumping chambers.\n5. A muscular wall called Septum separates left (oxygenated) and right (deoxygenated) sides.\n6. Valves are present between auricles and ventricles to ensure one-way flow." },
                        { "id": 20, "question": "Explain the circulation of blood in the human body.", "marks": 6, "answer": "Circulation:\n1. Deoxygenated blood from body enters Right Auricle via Vena Cava.\n2. It goes to Right Ventricle, which pumps it to Lungs via Pulmonary Artery.\n3. In lungs, blood gets oxygenated.\n4. Oxygenated blood returns to Left Auricle via Pulmonary Vein.\n5. It goes to Left Ventricle, which pumps it to the whole body via Aorta.\nThis is called Double Circulation." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 6: Human Body: Circulatory System - Set B",
        content: {
            "title": "Biology Practice Paper - Chapter 6: Human Body: Circulatory System - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The life span of RBC is about:", "options": ["120 days", "2-3 days", "10 days", "1 year"], "answer": "120 days", "marks": 1 },
                        { "id": 2, "question": "Which blood cells are amoeboid in shape?", "options": ["RBC", "WBC", "Platelets", "Muscle cells"], "answer": "WBC", "marks": 1 },
                        { "id": 3, "question": "The thinnest blood vessels are:", "options": ["Arteries", "Veins", "Capillaries", "Aorta"], "answer": "Capillaries", "marks": 1 },
                        { "id": 4, "question": "The contraction phase of the heart is called:", "options": ["Diastole", "Systole", "Pulse", "Pause"], "answer": "Systole", "marks": 1 },
                        { "id": 5, "question": "The relaxation phase of the heart is called:", "options": ["Diastole", "Systole", "Beat", "Rest"], "answer": "Diastole", "marks": 1 },
                        { "id": 6, "question": "Which vitamin helps in blood clotting?", "options": ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"], "answer": "Vitamin K", "marks": 1 },
                        { "id": 7, "question": "The largest vein in the body is:", "options": ["Aorta", "Vena Cava", "Pulmonary Vein", "Jugular Vein"], "answer": "Vena Cava", "marks": 1 },
                        { "id": 8, "question": "Heart sounds (Lub-Dub) are caused by:", "options": ["Flow of blood", "Closing of valves", "Contraction of muscles", "Breathing"], "answer": "Closing of valves", "marks": 1 },
                        { "id": 9, "question": "Iron is needed for the formation of:", "options": ["Bone", "Hemoglobin", "Teeth", "Hair"], "answer": "Hemoglobin", "marks": 1 },
                        { "id": 10, "question": "Which side of the heart carries oxygenated blood?", "options": ["Right side", "Left side", "Both sides", "None"], "answer": "Left side", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What are capillaries?", "marks": 1, "answer": "Microscopic vessels connecting arteries and veins where exchange occurs." },
                        { "id": 12, "question": "Name the protective covering of the heart.", "marks": 1, "answer": "Pericardium." },
                        { "id": 13, "question": "What is the function of valves in the heart?", "marks": 1, "answer": "To prevent the backflow of blood." },
                        { "id": 14, "question": "Where are RBCs produced?", "marks": 1, "answer": "Bone Marrow." },
                        { "id": 15, "question": "What is the main function of WBCs?", "marks": 1, "answer": "To fight infection (Immunity)." },
                        { "id": 16, "question": "Name the blood vessel that brings blood from lungs to heart.", "marks": 1, "answer": "Pulmonary Vein." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the composition of blood.", "marks": 6, "answer": "Blood consists of:\n1. Plasma (55%): Liquid part, mostly water, carries nutrients and waste.\n2. Cellular Elements (45%):\n   - RBC (Erythrocytes): Carry oxygen.\n   - WBC (Leukocytes): Fight germs.\n   - Platelets (Thrombocytes): Help in clotting." },
                        { "id": 18, "question": "What is a heartbeat? How is it related to pulse?", "marks": 6, "answer": "Heartbeat:\n- One complete contraction (Systole) and relaxation (Diastole) of the heart chambers is called a heartbeat.\n- Normal rate: 72 beats/min.\n\nRelation to Pulse:\n- When the heart beats, it pumps blood into arteries, causing a rhythmic throbbing in the artery walls.\n- This throbbing is the pulse.\n- Pulse rate is equal to the heartbeat rate." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Draw a schematic diagram of Double Circulation.", "marks": 6, "answer": "[Diagram Question - Student should draw]\nScheme:\nBody -> Vena Cava -> Right Auricle -> Right Ventricle -> Pulmonary Artery -> Lungs -> Pulmonary Vein -> Left Auricle -> Left Ventricle -> Aorta -> Body.\n(Arrows showing direction of flow)" },
                        { "id": 20, "question": "Write a short note on Blood Vessels.", "marks": 6, "answer": "There are three types of blood vessels:\n1. Arteries: Thick-walled, carry oxygenated blood from heart to body (except Pulmonary Artery). Deeply situated.\n2. Veins: Thin-walled, carry deoxygenated blood from body to heart (except Pulmonary Vein). Have valves. Superficially situated.\n3. Capillaries: Very thin (one cell thick) vessels connecting arteries and veins. Site of exchange of gases and nutrients with tissues." }
                    ]
                }
            ]
        }
    },
    {
        title: "Biology Practice Paper - Chapter 6: Human Body: Circulatory System - Set C",
        content: {
            "title": "Biology Practice Paper - Chapter 6: Human Body: Circulatory System - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "BIOLOGY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The Universal Donor blood group is:", "options": ["A", "B", "AB", "O"], "answer": "O", "marks": 1 },
                        { "id": 2, "question": "The Universal Recipient blood group is:", "options": ["A", "B", "AB", "O"], "answer": "AB", "marks": 1 },
                        { "id": 3, "question": "Who discovered blood groups?", "options": ["Karl Landsteiner", "William Harvey", "Robert Hooke", "Darwin"], "answer": "Karl Landsteiner", "marks": 1 },
                        { "id": 4, "question": "High blood pressure is also called:", "options": ["Hypotension", "Hypertension", "Diabetes", "Anemia"], "answer": "Hypertension", "marks": 1 },
                        { "id": 5, "question": "A person with blood group A has antigen:", "options": ["A", "B", "Both A and B", "None"], "answer": "A", "marks": 1 },
                        { "id": 6, "question": "The device used to measure blood pressure is:", "options": ["Thermometer", "Barometer", "Sphygmomanometer", "Stethoscope"], "answer": "Sphygmomanometer", "marks": 1 },
                        { "id": 7, "question": "Heart attack is caused due to blockage in:", "options": ["Pulmonary artery", "Coronary artery", "Aorta", "Vena Cava"], "answer": "Coronary artery", "marks": 1 },
                        { "id": 8, "question": "Which mineral is essential for heart beat regulation?", "options": ["Iron", "Calcium", "Potassium", "Iodine"], "answer": "Potassium", "marks": 1 },
                        { "id": 9, "question": "Lymph is similar to blood plasma but lacks:", "options": ["WBC", "RBC", "Water", "Proteins"], "answer": "RBC", "marks": 1 },
                        { "id": 10, "question": "The average volume of blood in an adult human is:", "options": ["1-2 liters", "4-5 liters", "8-10 liters", "15 liters"], "answer": "4-5 liters", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What are antigens?", "marks": 1, "answer": "Proteins found on the surface of RBCs that determine blood group." },
                        { "id": 12, "question": "What is blood transfusion?", "marks": 1, "answer": "Transfer of blood from a healthy person (donor) to a patient (recipient)." },
                        { "id": 13, "question": "Name the four main blood groups.", "marks": 1, "answer": "A, B, AB, O." },
                        { "id": 14, "question": "What is the Rh factor?", "marks": 1, "answer": "An antigen (Rhesus factor) found on RBCs; presence makes blood Rh+." },
                        { "id": 15, "question": "What is a pacemaker?", "marks": 1, "answer": "A natural or artificial device that regulates heart beat (SA Node)." },
                        { "id": 16, "question": "Define cardiac cycle.", "marks": 1, "answer": "The sequence of events in one heartbeat." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Why is Blood Group O called Universal Donor and AB Universal Recipient?", "marks": 6, "answer": "1. Universal Donor (O): Group O has no antigens on RBCs. So, it can be given to any blood group without causing clumping.\n2. Universal Recipient (AB): Group AB has no antibodies in plasma. So, it can receive blood from any group without fighting against it." },
                        { "id": 18, "question": "How can we keep our heart healthy?", "marks": 6, "answer": "Heart Care:\n1. Balanced Diet: Low fat, low salt, more fruits/vegetables.\n2. Exercise: Regular physical activity strengthens heart muscles.\n3. Avoid Smoking/Alcohol: They damage blood vessels.\n4. Stress Management: Yoga and meditation.\n5. Regular Checkups: Monitor BP and cholesterol." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the importance of Blood Donation.", "marks": 6, "answer": "Blood Donation:\n1. Saves Lives: Essential for accident victims, surgery patients, and those with blood diseases.\n2. No Substitute: Blood cannot be manufactured artificially.\n3. Health Benefits for Donor: Stimulates production of new blood cells.\n4. Social Duty: It is a noble act of humanity.\n5. Safe Process: It is simple, safe, and takes little time." },
                        { "id": 20, "question": "Describe the Lymphatic System briefly.", "marks": 6, "answer": "Lymphatic System:\n1. It is a parallel system to the circulatory system.\n2. Fluid: Lymph (straw-colored fluid similar to plasma but without RBCs).\n3. Vessels: Lymph vessels carry lymph.\n4. Nodes: Lymph nodes filter germs (e.g., tonsils).\n5. Function: It returns leaked tissue fluid back to blood, fights infection (contains lymphocytes), and absorbs fats from intestine." }
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
