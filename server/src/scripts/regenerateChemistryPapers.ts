
import { initDatabase } from '../db/database';

const papersToRegenerate = [
    // Chapter 7: Water
    {
        title: "Chemistry Practice Paper - Chapter 7: Water - Set A",
        content: {
            "title": "Chemistry Practice Paper - Chapter 7: Water - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Water is a compound made up of:", "options": ["Hydrogen and Oxygen", "Hydrogen and Nitrogen", "Oxygen and Carbon", "Hydrogen and Helium"], "answer": "Hydrogen and Oxygen", "marks": 1 },
                        { "id": 2, "question": "The chemical formula of water is:", "options": ["HO", "H2O", "H2O2", "HO2"], "answer": "H2O", "marks": 1 },
                        { "id": 3, "question": "Water freezes at:", "options": ["100°C", "0°C", "50°C", "10°C"], "answer": "0°C", "marks": 1 },
                        { "id": 4, "question": "Which of these is a universal solvent?", "options": ["Alcohol", "Petrol", "Water", "Oil"], "answer": "Water", "marks": 1 },
                        { "id": 5, "question": "The process of changing water into water vapour is called:", "options": ["Condensation", "Evaporation", "Freezing", "Melting"], "answer": "Evaporation", "marks": 1 },
                        { "id": 6, "question": "Potable water means:", "options": ["Salty water", "Fit for drinking", "Dirty water", "Distilled water"], "answer": "Fit for drinking", "marks": 1 },
                        { "id": 7, "question": "Water boils at:", "options": ["0°C", "100°C", "50°C", "200°C"], "answer": "100°C", "marks": 1 },
                        { "id": 8, "question": "Which method is used to kill germs in water?", "options": ["Filtration", "Boiling", "Sedimentation", "Decantation"], "answer": "Boiling", "marks": 1 },
                        { "id": 9, "question": "The purest form of natural water is:", "options": ["River water", "Sea water", "Rain water", "Well water"], "answer": "Rain water", "marks": 1 },
                        { "id": 10, "question": "Water covers about ______ of the Earth's surface.", "options": ["50%", "71%", "30%", "90%"], "answer": "71%", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define Solvent.", "marks": 1, "answer": "A substance that dissolves a solute (e.g., water)." },
                        { "id": 12, "question": "What is the freezing point of water?", "marks": 1, "answer": "0°C." },
                        { "id": 13, "question": "Name one disease caused by polluted water.", "marks": 1, "answer": "Cholera / Typhoid." },
                        { "id": 14, "question": "What is condensation?", "marks": 1, "answer": "The process of changing water vapour into liquid water." },
                        { "id": 15, "question": "Why is sea water not fit for drinking?", "marks": 1, "answer": "Because it contains a lot of dissolved salts." },
                        { "id": 16, "question": "What is the chemical name of water?", "marks": 1, "answer": "Dihydrogen Oxide." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the Water Cycle with a simple diagram description.", "marks": 6, "answer": "Water Cycle:\n1. Evaporation: Sun's heat turns water from oceans/rivers into vapour.\n2. Condensation: Vapour rises, cools, and forms clouds.\n3. Precipitation: Clouds release water as rain or snow.\n4. Collection: Rainwater flows back into rivers and oceans." },
                        { "id": 18, "question": "Differentiate between Solute and Solvent.", "marks": 6, "answer": "1. Solute: The substance that dissolves in a liquid (e.g., Salt, Sugar).\n2. Solvent: The liquid in which the solute dissolves (e.g., Water, Milk).\n- Solute + Solvent = Solution." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe three methods to purify water at home.", "marks": 6, "answer": "Methods:\n1. Boiling: Kills germs and bacteria. Boil for 10-15 minutes.\n2. Filtration: Using a water filter or clean cloth to remove solid impurities.\n3. Chlorination: Adding chlorine tablets to kill germs." },
                        { "id": 20, "question": "Why is water called a Universal Solvent? Explain its importance.", "marks": 6, "answer": "Universal Solvent:\n- Water can dissolve a large number of substances (solids, liquids, gases) more than any other liquid.\nImportance:\n- Essential for digestion and transport of nutrients in the body.\n- Used in industries and agriculture.\n- Dissolves oxygen for aquatic life." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 7: Water - Set B",
        content: {
            "title": "Chemistry Practice Paper - Chapter 7: Water - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The continuous movement of water in nature is called:", "options": ["Water Cycle", "Life Cycle", "Rain Cycle", "Cloud Cycle"], "answer": "Water Cycle", "marks": 1 },
                        { "id": 2, "question": "Which gas is dissolved in water that helps fish breathe?", "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], "answer": "Oxygen", "marks": 1 },
                        { "id": 3, "question": "Water exists in how many states?", "options": ["1", "2", "3", "4"], "answer": "3", "marks": 1 },
                        { "id": 4, "question": "Ice is the ______ form of water.", "options": ["Liquid", "Solid", "Gas", "Vapour"], "answer": "Solid", "marks": 1 },
                        { "id": 5, "question": "Which of these is NOT a source of surface water?", "options": ["River", "Lake", "Well", "Pond"], "answer": "Well", "marks": 1 },
                        { "id": 6, "question": "The removal of insoluble impurities by settling is called:", "options": ["Filtration", "Sedimentation", "Decantation", "Loading"], "answer": "Sedimentation", "marks": 1 },
                        { "id": 7, "question": "Chlorine is added to water to:", "options": ["Make it sweet", "Kill germs", "Change colour", "Cool it"], "answer": "Kill germs", "marks": 1 },
                        { "id": 8, "question": "Drought is caused by:", "options": ["Heavy rain", "No rain", "Flood", "Storm"], "answer": "No rain", "marks": 1 },
                        { "id": 9, "question": "Which property of water helps in cooling car engines?", "options": ["High specific heat", "Colourless", "Tasteless", "Odourless"], "answer": "High specific heat", "marks": 1 },
                        { "id": 10, "question": "Saline water contains:", "options": ["Sugar", "Salt", "Sand", "Mud"], "answer": "Salt", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a Solution?", "marks": 1, "answer": "A homogeneous mixture of a solute and a solvent." },
                        { "id": 12, "question": "Name the three states of water.", "marks": 1, "answer": "Ice (Solid), Water (Liquid), Water Vapour (Gas)." },
                        { "id": 13, "question": "What is Groundwater?", "marks": 1, "answer": "Water found below the earth's surface in soil and rock pores." },
                        { "id": 14, "question": "Define Transpiration.", "marks": 1, "answer": "Loss of water vapour from the leaves of plants." },
                        { "id": 15, "question": "What is the boiling point of water?", "marks": 1, "answer": "100°C." },
                        { "id": 16, "question": "Name a chemical used to purify water.", "marks": 1, "answer": "Chlorine / Bleaching Powder." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the process of Sedimentation and Decantation.", "marks": 6, "answer": "1. Sedimentation: The process of allowing insoluble heavy particles to settle down at the bottom of a liquid. The solid layer is called sediment.\n2. Decantation: Pouring out the clear liquid (supernatant) without disturbing the sediment." },
                        { "id": 18, "question": "How does water help in regulating body temperature?", "marks": 6, "answer": "Regulation of Body Temperature:\n- Water has a high heat capacity.\n- When we sweat, the water evaporates from our skin.\n- Evaporation causes cooling, which helps lower body temperature during hot weather or exercise." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "What is Water Pollution? List three causes.", "marks": 6, "answer": "Water Pollution:\n- Contamination of water bodies by harmful substances.\nCauses:\n1. Industrial Waste: Dumping chemicals into rivers.\n2. Sewage: Discharge of untreated household waste.\n3. Agricultural Runoff: Fertilizers and pesticides washing into water bodies." },
                        { "id": 20, "question": "Describe an experiment to show that tap water contains dissolved salts.", "marks": 6, "answer": "Experiment:\n1. Take some tap water in a watch glass.\n2. Place it over a beaker of boiling water (steam bath) to evaporate it slowly.\n3. When all water evaporates, observe the watch glass against light.\n4. Observation: Concentric rings of solid residue are seen.\n5. Conclusion: Tap water contains dissolved salts." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 7: Water - Set C",
        content: {
            "title": "Chemistry Practice Paper - Chapter 7: Water - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The process of collecting rainwater for future use is:", "options": ["Water Harvesting", "Water Cycle", "Water Pollution", "Water Table"], "answer": "Water Harvesting", "marks": 1 },
                        { "id": 2, "question": "Which of these is soluble in water?", "options": ["Sand", "Chalk powder", "Sugar", "Oil"], "answer": "Sugar", "marks": 1 },
                        { "id": 3, "question": "Heavy rain causes:", "options": ["Drought", "Flood", "Earthquake", "Fire"], "answer": "Flood", "marks": 1 },
                        { "id": 4, "question": "The level of groundwater is called:", "options": ["Sea level", "Water table", "River bed", "Aquifer"], "answer": "Water table", "marks": 1 },
                        { "id": 5, "question": "Distilled water is used in:", "options": ["Drinking", "Car batteries", "Cooking", "Washing"], "answer": "Car batteries", "marks": 1 },
                        { "id": 6, "question": "Water has maximum density at:", "options": ["0°C", "100°C", "4°C", "-4°C"], "answer": "4°C", "marks": 1 },
                        { "id": 7, "question": "Which is an example of precipitation?", "options": ["Dew", "Fog", "Rain", "Mist"], "answer": "Rain", "marks": 1 },
                        { "id": 8, "question": "The percentage of fresh water available on Earth is about:", "options": ["97%", "3%", "50%", "10%"], "answer": "3%", "marks": 1 },
                        { "id": 9, "question": "Loading is done using:", "options": ["Salt", "Sugar", "Alum", "Sand"], "answer": "Alum", "marks": 1 },
                        { "id": 10, "question": "Water vapour in the air is called:", "options": ["Humidity", "Rain", "Cloud", "Fog"], "answer": "Humidity", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Saturated Solution?", "marks": 1, "answer": "A solution in which no more solute can be dissolved at a given temperature." },
                        { "id": 12, "question": "Define Precipitation.", "marks": 1, "answer": "Falling of water from clouds in the form of rain, snow, or hail." },
                        { "id": 13, "question": "What is the use of Alum in water purification?", "marks": 1, "answer": "It helps in settling down suspended impurities (Loading)." },
                        { "id": 14, "question": "Name two sources of fresh water.", "marks": 1, "answer": "Rivers, Glaciers (or Lakes/Groundwater)." },
                        { "id": 15, "question": "What is Conservation of Water?", "marks": 1, "answer": "Wise and careful use of water to avoid wastage." },
                        { "id": 16, "question": "Why does ice float on water?", "marks": 1, "answer": "Because ice is less dense than liquid water." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the importance of Rainwater Harvesting.", "marks": 6, "answer": "Importance:\n1. Raises the groundwater level.\n2. Reduces soil erosion.\n3. Provides water during dry seasons.\n4. Reduces flood risks in urban areas.\n5. Saves money on water bills." },
                        { "id": 18, "question": "How can we conserve water at home? (3 points)", "marks": 6, "answer": "1. Turn off the tap while brushing teeth.\n2. Fix leaking taps and pipes immediately.\n3. Use a bucket for bathing instead of a shower.\n4. Reuse water used for washing vegetables to water plants." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the factors affecting the rate of evaporation.", "marks": 6, "answer": "Factors:\n1. Temperature: Higher temperature increases evaporation.\n2. Surface Area: Larger surface area increases evaporation.\n3. Humidity: Lower humidity (dry air) increases evaporation.\n4. Wind Speed: Higher wind speed increases evaporation." },
                        { "id": 20, "question": "What are the physical properties of water?", "marks": 6, "answer": "Physical Properties:\n1. State: Liquid at room temperature.\n2. Colour/Odour/Taste: Colourless, odourless, and tasteless.\n3. Freezing Point: 0°C.\n4. Boiling Point: 100°C.\n5. Density: Maximum at 4°C (1 g/cm³).\n6. Solvent: Universal solvent." }
                    ]
                }
            ]
        }
    },
    // Chapter 3: Matter
    {
        title: "Chemistry Practice Paper - Chapter 3: Matter - Set A",
        content: {
            "title": "Chemistry Practice Paper - Chapter 3: Matter - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Anything that has mass and occupies space is called:", "options": ["Energy", "Matter", "Force", "Light"], "answer": "Matter", "marks": 1 },
                        { "id": 2, "question": "Which state of matter has a fixed shape and volume?", "options": ["Solid", "Liquid", "Gas", "Plasma"], "answer": "Solid", "marks": 1 },
                        { "id": 3, "question": "The space between particles of matter is called:", "options": ["Intermolecular force", "Intermolecular space", "Volume", "Density"], "answer": "Intermolecular space", "marks": 1 },
                        { "id": 4, "question": "Which state of matter can flow but has a fixed volume?", "options": ["Solid", "Liquid", "Gas", "None"], "answer": "Liquid", "marks": 1 },
                        { "id": 5, "question": "Gases have:", "options": ["Fixed shape", "Fixed volume", "Neither fixed shape nor volume", "Fixed mass only"], "answer": "Neither fixed shape nor volume", "marks": 1 },
                        { "id": 6, "question": "The smallest particle of matter is:", "options": ["Molecule", "Atom", "Cell", "Grain"], "answer": "Atom", "marks": 1 },
                        { "id": 7, "question": "Intermolecular force is strongest in:", "options": ["Solids", "Liquids", "Gases", "Vacuum"], "answer": "Solids", "marks": 1 },
                        { "id": 8, "question": "Which of these is NOT matter?", "options": ["Air", "Water", "Sound", "Sand"], "answer": "Sound", "marks": 1 },
                        { "id": 9, "question": "Liquids take the shape of:", "options": ["The container", "A sphere", "A cube", "Nothing"], "answer": "The container", "marks": 1 },
                        { "id": 10, "question": "Compressibility is maximum in:", "options": ["Solids", "Liquids", "Gases", "Metals"], "answer": "Gases", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define Mass.", "marks": 1, "answer": "The quantity of matter contained in a body." },
                        { "id": 12, "question": "Name the three states of matter.", "marks": 1, "answer": "Solid, Liquid, Gas." },
                        { "id": 13, "question": "Give an example of a solid.", "marks": 1, "answer": "Wood / Stone / Ice." },
                        { "id": 14, "question": "What holds the particles of matter together?", "marks": 1, "answer": "Intermolecular force of attraction." },
                        { "id": 15, "question": "Can gases be compressed?", "marks": 1, "answer": "Yes, easily." },
                        { "id": 16, "question": "Do liquids have a fixed shape?", "marks": 1, "answer": "No." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Solids and Liquids based on Shape and Volume.", "marks": 6, "answer": "1. Solids: Have a fixed shape and fixed volume. They do not flow.\n2. Liquids: Have a fixed volume but no fixed shape. They take the shape of the container and can flow." },
                        { "id": 18, "question": "Why do gases fill the entire container?", "marks": 6, "answer": "Reason:\n- In gases, the intermolecular force of attraction is negligible (very weak).\n- The intermolecular space is very large.\n- Particles move randomly at high speeds in all directions, filling the available space." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the arrangement of molecules in Solids, Liquids, and Gases.", "marks": 6, "answer": "1. Solids: Molecules are tightly packed. Intermolecular space is minimum. Force of attraction is maximum. They vibrate at fixed positions.\n2. Liquids: Molecules are loosely packed. Space is more than solids. Force is less than solids. They can slide over each other.\n3. Gases: Molecules are very far apart. Space is maximum. Force is negligible. They move freely." },
                        { "id": 20, "question": "Describe an experiment to show that air occupies space.", "marks": 6, "answer": "Experiment:\n1. Take an empty glass tumbler and a bucket of water.\n2. Invert the glass and push it straight into the water.\n3. Water does not enter the glass because air is inside it.\n4. Tilt the glass slightly. Air bubbles come out, and water enters.\n5. Conclusion: Air occupies space." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 3: Matter - Set B",
        content: {
            "title": "Chemistry Practice Paper - Chapter 3: Matter - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The change of state from Solid to Liquid is called:", "options": ["Freezing", "Melting", "Boiling", "Condensation"], "answer": "Melting", "marks": 1 },
                        { "id": 2, "question": "The change of state from Liquid to Gas is called:", "options": ["Evaporation", "Melting", "Freezing", "Sublimation"], "answer": "Evaporation", "marks": 1 },
                        { "id": 3, "question": "Which of these substances sublimes?", "options": ["Ice", "Camphor", "Wax", "Butter"], "answer": "Camphor", "marks": 1 },
                        { "id": 4, "question": "Matter is made up of tiny particles called:", "options": ["Blocks", "Molecules/Atoms", "Cells", "Units"], "answer": "Molecules/Atoms", "marks": 1 },
                        { "id": 5, "question": "Which state has the highest kinetic energy?", "options": ["Solid", "Liquid", "Gas", "All equal"], "answer": "Gas", "marks": 1 },
                        { "id": 6, "question": "The temperature at which a liquid boils is called:", "options": ["Melting point", "Boiling point", "Freezing point", "Dew point"], "answer": "Boiling point", "marks": 1 },
                        { "id": 7, "question": "Condensation is the reverse of:", "options": ["Melting", "Freezing", "Evaporation", "Sublimation"], "answer": "Evaporation", "marks": 1 },
                        { "id": 8, "question": "Solids are:", "options": ["Rigid", "Fluid", "Compressible", "Invisible"], "answer": "Rigid", "marks": 1 },
                        { "id": 9, "question": "Which has the least density?", "options": ["Solid", "Liquid", "Gas", "Water"], "answer": "Gas", "marks": 1 },
                        { "id": 10, "question": "Water vapour changing to ice directly is called:", "options": ["Sublimation", "Deposition", "Melting", "Boiling"], "answer": "Deposition", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define Volume.", "marks": 1, "answer": "The space occupied by an object." },
                        { "id": 12, "question": "What is Sublimation?", "marks": 1, "answer": "The process where a solid changes directly into gas on heating." },
                        { "id": 13, "question": "Give an example of a liquid.", "marks": 1, "answer": "Water / Milk / Oil." },
                        { "id": 14, "question": "What happens to particles when heated?", "marks": 1, "answer": "They gain energy and move faster." },
                        { "id": 15, "question": "Name a substance that exists in all three states.", "marks": 1, "answer": "Water." },
                        { "id": 16, "question": "Is light matter?", "marks": 1, "answer": "No (It is energy)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the process of Freezing with an example.", "marks": 6, "answer": "Freezing:\n- The process in which a liquid changes into a solid on cooling.\n- Example: Water kept in a freezer turns into Ice at 0°C.\n- During freezing, particles lose energy and come closer." },
                        { "id": 18, "question": "Why are solids rigid?", "marks": 6, "answer": "Reason:\n- In solids, the intermolecular force of attraction is very strong.\n- The particles are tightly packed and cannot move from their positions.\n- They can only vibrate.\n- This makes solids rigid and hard." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the Kinetic Theory of Matter.", "marks": 6, "answer": "Kinetic Theory:\n1. Matter is made of tiny particles (atoms/molecules).\n2. These particles are in continuous motion.\n3. There are spaces between particles (Intermolecular space).\n4. There are forces of attraction between particles (Intermolecular force).\n5. Heating increases the kinetic energy (motion) of particles." },
                        { "id": 20, "question": "Differentiate between Evaporation and Boiling.", "marks": 6, "answer": "1. Evaporation:\n   - Occurs at any temperature below boiling point.\n   - Surface phenomenon (happens only at the surface).\n   - Slow process.\n2. Boiling:\n   - Occurs at a fixed temperature (Boiling point).\n   - Bulk phenomenon (happens throughout the liquid).\n   - Rapid process." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 3: Matter - Set C",
        content: {
            "title": "Chemistry Practice Paper - Chapter 3: Matter - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which of these is a property of matter?", "options": ["Has mass", "Occupies space", "Can be felt", "All of these"], "answer": "All of these", "marks": 1 },
                        { "id": 2, "question": "Fluids include:", "options": ["Solids only", "Liquids only", "Gases only", "Liquids and Gases"], "answer": "Liquids and Gases", "marks": 1 },
                        { "id": 3, "question": "The force of attraction between similar molecules is called:", "options": ["Cohesion", "Adhesion", "Gravity", "Friction"], "answer": "Cohesion", "marks": 1 },
                        { "id": 4, "question": "The force of attraction between different molecules is called:", "options": ["Cohesion", "Adhesion", "Magnetic", "Electric"], "answer": "Adhesion", "marks": 1 },
                        { "id": 5, "question": "Brownian motion is observed in:", "options": ["Solids", "Fluids (Liquids/Gases)", "Vacuum", "None"], "answer": "Fluids (Liquids/Gases)", "marks": 1 },
                        { "id": 6, "question": "On heating, intermolecular space:", "options": ["Increases", "Decreases", "Remains same", "Vanishes"], "answer": "Increases", "marks": 1 },
                        { "id": 7, "question": "On cooling, intermolecular force:", "options": ["Increases", "Decreases", "Remains same", "Becomes zero"], "answer": "Increases", "marks": 1 },
                        { "id": 8, "question": "Naphthalene balls disappear due to:", "options": ["Melting", "Sublimation", "Evaporation", "Freezing"], "answer": "Sublimation", "marks": 1 },
                        { "id": 9, "question": "Which state has only one free surface?", "options": ["Solid", "Liquid", "Gas", "None"], "answer": "Liquid", "marks": 1 },
                        { "id": 10, "question": "Solids have ______ density.", "options": ["High", "Low", "Zero", "Variable"], "answer": "High", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Brownian Motion?", "marks": 1, "answer": "The zig-zag random movement of particles suspended in a fluid." },
                        { "id": 12, "question": "Define Diffusion.", "marks": 1, "answer": "The intermixing of particles of two different substances on their own." },
                        { "id": 13, "question": "Give an example of diffusion in gases.", "marks": 1, "answer": "Smell of perfume spreading in a room." },
                        { "id": 14, "question": "What is Cohesive Force?", "marks": 1, "answer": "Force of attraction between molecules of the same substance." },
                        { "id": 15, "question": "What is Adhesive Force?", "marks": 1, "answer": "Force of attraction between molecules of different substances." },
                        { "id": 16, "question": "Why can we cut through water?", "marks": 1, "answer": "Because the intermolecular force in liquids is weak." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain why solids do not diffuse easily.", "marks": 6, "answer": "Reason:\n- In solids, particles are tightly packed.\n- Intermolecular forces are very strong.\n- Particles cannot move from their positions, they only vibrate.\n- Therefore, they cannot mix with other particles easily." },
                        { "id": 18, "question": "Why does the smell of hot food reach us from a distance?", "marks": 6, "answer": "Reason:\n- Hot food releases vapours (gas).\n- At higher temperatures, the kinetic energy of particles increases.\n- The particles move faster and diffuse rapidly into the air.\n- Thus, the smell reaches us quickly." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Compare the properties of Solids, Liquids, and Gases in a tabular form (Shape, Volume, Compressibility, Fluidity).", "marks": 6, "answer": "| Property | Solid | Liquid | Gas |\n|---|---|---|---|\n| Shape | Fixed | Not Fixed | Not Fixed |\n| Volume | Fixed | Fixed | Not Fixed |\n| Compressibility | Negligible | Low | High |\n| Fluidity | Cannot flow | Can flow | Can flow |" },
                        { "id": 20, "question": "Explain the change of state of matter using the Kinetic Theory.", "marks": 6, "answer": "Explanation:\n- When a solid is heated, particles gain energy and vibrate faster.\n- At melting point, they overcome the strong forces and become liquid (Melting).\n- On further heating, liquid particles move even faster.\n- At boiling point, they break free completely and become gas (Boiling).\n- Cooling reverses this process (Condensation/Freezing)." }
                    ]
                }
            ]
        }
    },
    // Chapter 4: Elements, Compounds, Symbol & Formulae
    {
        title: "Chemistry Practice Paper - Chapter 4: Elements, Compounds, Symbol & Formulae - Set A",
        content: {
            "title": "Chemistry Practice Paper - Chapter 4: Elements, Compounds, Symbol & Formulae - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "A pure substance made of only one kind of atoms is called:", "options": ["Element", "Compound", "Mixture", "Solution"], "answer": "Element", "marks": 1 },
                        { "id": 2, "question": "The symbol for Hydrogen is:", "options": ["Hy", "H", "He", "Ho"], "answer": "H", "marks": 1 },
                        { "id": 3, "question": "Which of these is a metal?", "options": ["Oxygen", "Sulphur", "Iron", "Nitrogen"], "answer": "Iron", "marks": 1 },
                        { "id": 4, "question": "The symbol 'Na' stands for:", "options": ["Nitrogen", "Sodium", "Nickel", "Neon"], "answer": "Sodium", "marks": 1 },
                        { "id": 5, "question": "Water (H2O) is a:", "options": ["Element", "Compound", "Mixture", "Atom"], "answer": "Compound", "marks": 1 },
                        { "id": 6, "question": "The smallest particle of an element is:", "options": ["Molecule", "Atom", "Compound", "Ion"], "answer": "Atom", "marks": 1 },
                        { "id": 7, "question": "Which non-metal is a liquid at room temperature?", "options": ["Carbon", "Bromine", "Sulphur", "Phosphorus"], "answer": "Bromine", "marks": 1 },
                        { "id": 8, "question": "The symbol for Gold is:", "options": ["Go", "Gd", "Au", "Ag"], "answer": "Au", "marks": 1 },
                        { "id": 9, "question": "Compounds have a ______ composition.", "options": ["Fixed", "Variable", "Random", "None"], "answer": "Fixed", "marks": 1 },
                        { "id": 10, "question": "Atomicity of Oxygen (O2) is:", "options": ["1", "2", "3", "4"], "answer": "2", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define Element.", "marks": 1, "answer": "A substance that cannot be broken down into simpler substances by chemical means." },
                        { "id": 12, "question": "Write the symbol for Carbon.", "marks": 1, "answer": "C." },
                        { "id": 13, "question": "What is a Compound?", "marks": 1, "answer": "A substance formed by the chemical combination of two or more elements in a fixed ratio." },
                        { "id": 14, "question": "Name the metal which is liquid at room temperature.", "marks": 1, "answer": "Mercury." },
                        { "id": 15, "question": "What does the formula CO2 represent?", "marks": 1, "answer": "Carbon Dioxide." },
                        { "id": 16, "question": "Write the Latin name of Iron.", "marks": 1, "answer": "Ferrum." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Elements and Compounds.", "marks": 6, "answer": "1. Element: Made of same kind of atoms. Cannot be broken down. Ex: Iron, Oxygen.\n2. Compound: Made of different elements combined chemically. Can be broken down. Ex: Water, Salt." },
                        { "id": 18, "question": "Write the symbols for: Calcium, Chlorine, Potassium, Silver, Copper, Lead.", "marks": 6, "answer": "Calcium: Ca\nChlorine: Cl\nPotassium: K\nSilver: Ag\nCopper: Cu\nLead: Pb" }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the characteristics of Compounds.", "marks": 6, "answer": "Characteristics:\n1. Components are present in a fixed ratio by mass.\n2. Properties are different from its constituent elements.\n3. Cannot be separated by physical methods.\n4. Formation involves energy change (heat/light).\n5. Homogeneous in nature." },
                        { "id": 20, "question": "What is Atomicity? Give examples of Monoatomic, Diatomic, and Triatomic molecules.", "marks": 6, "answer": "Atomicity: The number of atoms present in one molecule of an element.\nExamples:\n1. Monoatomic: Helium (He), Neon (Ne) - 1 atom.\n2. Diatomic: Oxygen (O2), Hydrogen (H2) - 2 atoms.\n3. Triatomic: Ozone (O3) - 3 atoms." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 4: Elements, Compounds, Symbol & Formulae - Set B",
        content: {
            "title": "Chemistry Practice Paper - Chapter 4: Elements, Compounds, Symbol & Formulae - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which of these is a metalloid?", "options": ["Iron", "Sulphur", "Silicon", "Oxygen"], "answer": "Silicon", "marks": 1 },
                        { "id": 2, "question": "The symbol 'K' stands for:", "options": ["Krypton", "Potassium", "Kelvin", "Calcium"], "answer": "Potassium", "marks": 1 },
                        { "id": 3, "question": "The formula of Common Salt is:", "options": ["H2O", "NaCl", "CO2", "HCl"], "answer": "NaCl", "marks": 1 },
                        { "id": 4, "question": "Metals are generally:", "options": ["Good conductors", "Bad conductors", "Brittle", "Gases"], "answer": "Good conductors", "marks": 1 },
                        { "id": 5, "question": "Non-metals are generally:", "options": ["Lustrous", "Ductile", "Bad conductors", "Malleable"], "answer": "Bad conductors", "marks": 1 },
                        { "id": 6, "question": "The symbol for Silver is:", "options": ["Si", "S", "Ag", "Au"], "answer": "Ag", "marks": 1 },
                        { "id": 7, "question": "A molecule of Phosphorus is:", "options": ["P", "P2", "P4", "P8"], "answer": "P4", "marks": 1 },
                        { "id": 8, "question": "Which is a noble gas?", "options": ["Oxygen", "Nitrogen", "Helium", "Chlorine"], "answer": "Helium", "marks": 1 },
                        { "id": 9, "question": "The Latin name for Copper is:", "options": ["Cuprum", "Argentum", "Ferrum", "Natrium"], "answer": "Cuprum", "marks": 1 },
                        { "id": 10, "question": "Sugar is a:", "options": ["Element", "Compound", "Mixture", "Atom"], "answer": "Compound", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a Molecule?", "marks": 1, "answer": "The smallest particle of a substance that can exist independently." },
                        { "id": 12, "question": "Write the formula of Sulphuric Acid.", "marks": 1, "answer": "H2SO4." },
                        { "id": 13, "question": "Name a lustrous non-metal.", "marks": 1, "answer": "Iodine / Graphite." },
                        { "id": 14, "question": "What is the symbol for Mercury?", "marks": 1, "answer": "Hg." },
                        { "id": 15, "question": "Define Metalloids.", "marks": 1, "answer": "Elements that show properties of both metals and non-metals." },
                        { "id": 16, "question": "Write the Latin name of Sodium.", "marks": 1, "answer": "Natrium." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Metals and Non-metals (3 points).", "marks": 6, "answer": "1. Metals: Lustrous (shiny), Malleable (sheets), Good conductors. Ex: Iron, Gold.\n2. Non-metals: Non-lustrous (dull), Brittle, Bad conductors. Ex: Carbon, Sulphur." },
                        { "id": 18, "question": "Write the names of elements present in: Water, Common Salt, Carbon Dioxide.", "marks": 6, "answer": "1. Water (H2O): Hydrogen, Oxygen.\n2. Common Salt (NaCl): Sodium, Chlorine.\n3. Carbon Dioxide (CO2): Carbon, Oxygen." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "What is a Chemical Formula? What information does it convey?", "marks": 6, "answer": "Chemical Formula:\n- Symbolic representation of a molecule of a substance.\nInformation Conveyed:\n1. Name of the substance.\n2. Elements present in it.\n3. Number of atoms of each element.\n4. Mass of the molecule." },
                        { "id": 20, "question": "Classify the following as Element or Compound: Iron, Water, Air, Gold, Sugar, Oxygen.", "marks": 6, "answer": "Elements: Iron, Gold, Oxygen.\nCompounds: Water, Sugar.\n(Note: Air is a Mixture, but if asked to choose between E/C, it fits neither, but usually classified separately. Here strictly E/C: Iron-E, Water-C, Gold-E, Sugar-C, Oxygen-E)." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 4: Elements, Compounds, Symbol & Formulae - Set C",
        content: {
            "title": "Chemistry Practice Paper - Chapter 4: Elements, Compounds, Symbol & Formulae - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The symbol 'Fe' stands for:", "options": ["Fluorine", "Iron", "Francium", "Fermium"], "answer": "Iron", "marks": 1 },
                        { "id": 2, "question": "Which of these is a mixture?", "options": ["Water", "Air", "Salt", "Iron"], "answer": "Air", "marks": 1 },
                        { "id": 3, "question": "The valency of Hydrogen is:", "options": ["1", "2", "3", "0"], "answer": "1", "marks": 1 },
                        { "id": 4, "question": "Which element is used in thermometers?", "options": ["Iron", "Mercury", "Silver", "Copper"], "answer": "Mercury", "marks": 1 },
                        { "id": 5, "question": "Graphite is a form of:", "options": ["Iron", "Carbon", "Gold", "Silver"], "answer": "Carbon", "marks": 1 },
                        { "id": 6, "question": "The symbol for Lead is:", "options": ["Ld", "Le", "Pb", "Pd"], "answer": "Pb", "marks": 1 },
                        { "id": 7, "question": "Ozone is:", "options": ["O", "O2", "O3", "O4"], "answer": "O3", "marks": 1 },
                        { "id": 8, "question": "Which is the most abundant gas in air?", "options": ["Oxygen", "Nitrogen", "Argon", "CO2"], "answer": "Nitrogen", "marks": 1 },
                        { "id": 9, "question": "The Latin name for Potassium is:", "options": ["Kalium", "Natrium", "Ferrum", "Argentum"], "answer": "Kalium", "marks": 1 },
                        { "id": 10, "question": "Ammonia formula is:", "options": ["NH3", "NH4", "N2", "HNO3"], "answer": "NH3", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Valency?", "marks": 1, "answer": "The combining capacity of an element." },
                        { "id": 12, "question": "Write the formula of Hydrochloric Acid.", "marks": 1, "answer": "HCl." },
                        { "id": 13, "question": "Name a non-metal that conducts electricity.", "marks": 1, "answer": "Graphite." },
                        { "id": 14, "question": "What is the symbol for Tin?", "marks": 1, "answer": "Sn." },
                        { "id": 15, "question": "Define Mixture.", "marks": 1, "answer": "Impure substance made of two or more substances mixed in any ratio." },
                        { "id": 16, "question": "Write the Latin name of Gold.", "marks": 1, "answer": "Aurum." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the significance of a Symbol.", "marks": 6, "answer": "Significance:\n1. Represents the name of the element.\n2. Represents one atom of the element.\n3. Represents a definite mass of the element (atomic mass).\nExample: 'O' represents Oxygen, one atom of Oxygen." },
                        { "id": 18, "question": "How are symbols derived? Give examples.", "marks": 6, "answer": "Methods:\n1. First letter of English name: Carbon (C), Hydrogen (H).\n2. First two letters: Calcium (Ca), Cobalt (Co).\n3. From Latin names: Sodium (Natrium - Na), Iron (Ferrum - Fe)." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Differentiate between Mixtures and Compounds.", "marks": 6, "answer": "1. Mixture: Variable composition. Components retain properties. Separated by physical methods. No new substance formed.\n2. Compound: Fixed composition. Properties different from components. Separated by chemical methods. New substance formed." },
                        { "id": 20, "question": "Write the chemical formulae for: Nitric Acid, Calcium Carbonate, Sodium Hydroxide, Methane, Glucose, Zinc Sulphate.", "marks": 6, "answer": "Nitric Acid: HNO3\nCalcium Carbonate: CaCO3\nSodium Hydroxide: NaOH\nMethane: CH4\nGlucose: C6H12O6\nZinc Sulphate: ZnSO4" }
                    ]
                }
            ]
        }
    },
    // Chapter 5: Pure Substances and Mixtures; Separation of Mixtures
    {
        title: "Chemistry Practice Paper - Chapter 5: Pure Substances and Mixtures; Separation of Mixtures - Set A",
        content: {
            "title": "Chemistry Practice Paper - Chapter 5: Pure Substances and Mixtures; Separation of Mixtures - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "A substance containing only one type of particles is:", "options": ["Pure substance", "Mixture", "Solution", "Alloy"], "answer": "Pure substance", "marks": 1 },
                        { "id": 2, "question": "Air is a:", "options": ["Element", "Compound", "Mixture", "Pure substance"], "answer": "Mixture", "marks": 1 },
                        { "id": 3, "question": "The method to separate stones from rice is:", "options": ["Winnowing", "Handpicking", "Sieving", "Threshing"], "answer": "Handpicking", "marks": 1 },
                        { "id": 4, "question": "Filtration is used to separate:", "options": ["Solid from liquid", "Liquid from liquid", "Gas from gas", "Solid from solid"], "answer": "Solid from liquid", "marks": 1 },
                        { "id": 5, "question": "Salt is obtained from sea water by:", "options": ["Filtration", "Evaporation", "Decantation", "Sedimentation"], "answer": "Evaporation", "marks": 1 },
                        { "id": 6, "question": "Which method is used to separate cream from milk?", "options": ["Churning/Centrifugation", "Filtration", "Sieving", "Magnetic separation"], "answer": "Churning/Centrifugation", "marks": 1 },
                        { "id": 7, "question": "Iron filings can be separated from sand by:", "options": ["Handpicking", "Magnetic separation", "Sieving", "Winnowing"], "answer": "Magnetic separation", "marks": 1 },
                        { "id": 8, "question": "A mixture of sand and water can be separated by:", "options": ["Sedimentation & Decantation", "Evaporation", "Magnetic separation", "Churning"], "answer": "Sedimentation & Decantation", "marks": 1 },
                        { "id": 9, "question": "Sieving is used when components have:", "options": ["Different sizes", "Different weights", "Different colours", "Magnetic properties"], "answer": "Different sizes", "marks": 1 },
                        { "id": 10, "question": "Winnowing is used to separate:", "options": ["Heavy and light components", "Magnetic components", "Liquids", "Solids of same size"], "answer": "Heavy and light components", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Define Mixture.", "marks": 1, "answer": "A substance made by mixing two or more substances in any ratio." },
                        { "id": 12, "question": "Name the method to separate tea leaves from tea.", "marks": 1, "answer": "Filtration (using a strainer)." },
                        { "id": 13, "question": "What is Threshing?", "marks": 1, "answer": "Process of beating stalks to separate grains." },
                        { "id": 14, "question": "Give an example of a homogeneous mixture.", "marks": 1, "answer": "Salt solution / Air." },
                        { "id": 15, "question": "What is the principle of Magnetic Separation?", "marks": 1, "answer": "One component is magnetic (like iron) and the other is non-magnetic." },
                        { "id": 16, "question": "Name a heterogeneous mixture.", "marks": 1, "answer": "Sand and water / Oil and water." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Homogeneous and Heterogeneous mixtures.", "marks": 6, "answer": "1. Homogeneous: Components are uniformly distributed. Cannot see boundaries. Ex: Sugar solution.\n2. Heterogeneous: Components are not uniformly distributed. Can see boundaries. Ex: Sand and Salt." },
                        { "id": 18, "question": "Explain the process of Winnowing.", "marks": 6, "answer": "Winnowing:\n- Used to separate heavier and lighter components of a mixture by wind or blowing air.\n- Example: Separating husk (lighter) from grains (heavier).\n- The mixture is dropped from a height; wind blows away the lighter husk." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the method of Filtration with a diagram description.", "marks": 6, "answer": "Filtration:\n- Used to separate insoluble solids from a liquid.\n- Apparatus: Funnel, Filter paper, Beaker, Stand.\n- Process: The mixture is poured into the funnel lined with filter paper. The liquid (filtrate) passes through, while the solid (residue) remains on the paper.\n- Example: Sand and water." },
                        { "id": 20, "question": "How will you separate a mixture of Sand, Salt, and Iron filings?", "marks": 6, "answer": "Steps:\n1. Magnetic Separation: Move a magnet over the mixture to remove Iron filings.\n2. Dissolution: Add water to the remaining mixture (Sand + Salt). Salt dissolves, Sand does not.\n3. Filtration: Filter the mixture. Sand remains as residue. Salt water is the filtrate.\n4. Evaporation: Heat the filtrate to evaporate water. Salt is left behind." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 5: Pure Substances and Mixtures; Separation of Mixtures - Set B",
        content: {
            "title": "Chemistry Practice Paper - Chapter 5: Pure Substances and Mixtures; Separation of Mixtures - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which of these is a pure substance?", "options": ["Milk", "Gold", "Soil", "Air"], "answer": "Gold", "marks": 1 },
                        { "id": 2, "question": "The clear liquid obtained after filtration is called:", "options": ["Residue", "Filtrate", "Sediment", "Solution"], "answer": "Filtrate", "marks": 1 },
                        { "id": 3, "question": "The solid left on the filter paper is called:", "options": ["Residue", "Filtrate", "Solute", "Solvent"], "answer": "Residue", "marks": 1 },
                        { "id": 4, "question": "Distillation is used to separate:", "options": ["Solid from liquid", "Liquid from liquid (miscible)", "Soluble solid from liquid", "Gas from gas"], "answer": "Soluble solid from liquid", "marks": 1 },
                        { "id": 5, "question": "Immiscible liquids are separated by:", "options": ["Separating funnel", "Filtration", "Evaporation", "Sieving"], "answer": "Separating funnel", "marks": 1 },
                        { "id": 6, "question": "Which method is used to obtain pure water from salt water?", "options": ["Evaporation", "Distillation", "Filtration", "Decantation"], "answer": "Distillation", "marks": 1 },
                        { "id": 7, "question": "Alloys are:", "options": ["Elements", "Compounds", "Mixtures", "Gases"], "answer": "Mixtures", "marks": 1 },
                        { "id": 8, "question": "Loading helps in:", "options": ["Faster sedimentation", "Filtration", "Evaporation", "Decantation"], "answer": "Faster sedimentation", "marks": 1 },
                        { "id": 9, "question": "Camphor and salt can be separated by:", "options": ["Sublimation", "Filtration", "Evaporation", "Magnetic separation"], "answer": "Sublimation", "marks": 1 },
                        { "id": 10, "question": "Brass is a mixture of:", "options": ["Copper and Zinc", "Iron and Carbon", "Gold and Silver", "Copper and Tin"], "answer": "Copper and Zinc", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Handpicking?", "marks": 1, "answer": "Picking out impurities by hand." },
                        { "id": 12, "question": "Define Saturated Solution.", "marks": 1, "answer": "A solution in which no more solute can be dissolved." },
                        { "id": 13, "question": "Name the apparatus used to separate oil and water.", "marks": 1, "answer": "Separating Funnel." },
                        { "id": 14, "question": "What is the principle of Sieving?", "marks": 1, "answer": "Difference in size of particles." },
                        { "id": 15, "question": "Give an example of sublimation.", "marks": 1, "answer": "Iodine / Naphthalene / Camphor." },
                        { "id": 16, "question": "Is milk a pure substance?", "marks": 1, "answer": "No (It is a mixture)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the process of Distillation.", "marks": 6, "answer": "Distillation:\n- Used to separate a soluble solid from a liquid or two miscible liquids with different boiling points.\n- Involves Evaporation followed by Condensation.\n- The liquid boils, turns to vapour, passes through a condenser, cools down, and is collected as pure liquid (distillate)." },
                        { "id": 18, "question": "Why do we need to separate mixtures?", "marks": 6, "answer": "Reasons:\n1. To remove harmful impurities (e.g., stones from rice).\n2. To obtain useful components (e.g., butter from milk).\n3. To obtain pure substances for research/medical use." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe how to separate a mixture of Oil and Water.", "marks": 6, "answer": "Method: Using a Separating Funnel.\n1. Pour the mixture into the separating funnel.\n2. Let it stand undisturbed.\n3. Oil (lighter) floats on top; Water (heavier) settles at the bottom.\n4. Open the stopcock to let water flow out into a beaker.\n5. Close the stopcock when oil reaches the bottom." },
                        { "id": 20, "question": "Explain Sedimentation, Decantation, and Loading.", "marks": 6, "answer": "1. Sedimentation: Settling down of heavy insoluble impurities.\n2. Decantation: Pouring out the clear liquid without disturbing the sediment.\n3. Loading: Adding chemicals like Alum to speed up sedimentation of fine particles." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 5: Pure Substances and Mixtures; Separation of Mixtures - Set C",
        content: {
            "title": "Chemistry Practice Paper - Chapter 5: Pure Substances and Mixtures; Separation of Mixtures - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which is NOT a method of separation?", "options": ["Filtration", "Combustion", "Evaporation", "Sieving"], "answer": "Combustion", "marks": 1 },
                        { "id": 2, "question": "Solution of sugar in water is:", "options": ["Heterogeneous", "Homogeneous", "Suspension", "Colloid"], "answer": "Homogeneous", "marks": 1 },
                        { "id": 3, "question": "Chalk powder in water is:", "options": ["Heterogeneous", "Homogeneous", "Solution", "Alloy"], "answer": "Heterogeneous", "marks": 1 },
                        { "id": 4, "question": "The component present in larger amount in a solution is:", "options": ["Solute", "Solvent", "Residue", "Filtrate"], "answer": "Solvent", "marks": 1 },
                        { "id": 5, "question": "The component present in smaller amount in a solution is:", "options": ["Solute", "Solvent", "Mixture", "None"], "answer": "Solute", "marks": 1 },
                        { "id": 6, "question": "Separation of wheat from chaff is done by:", "options": ["Winnowing", "Sieving", "Magnetic separation", "Filtration"], "answer": "Winnowing", "marks": 1 },
                        { "id": 7, "question": "Which property is used in Centrifugation?", "options": ["Density", "Size", "Colour", "Magnetism"], "answer": "Density", "marks": 1 },
                        { "id": 8, "question": "Common salt is purified by:", "options": ["Crystallization", "Filtration", "Decantation", "Sieving"], "answer": "Crystallization", "marks": 1 },
                        { "id": 9, "question": "A mixture of alcohol and water is separated by:", "options": ["Fractional Distillation", "Filtration", "Evaporation", "Separating funnel"], "answer": "Fractional Distillation", "marks": 1 },
                        { "id": 10, "question": "Mist is a mixture of:", "options": ["Liquid in gas", "Solid in gas", "Gas in liquid", "Solid in liquid"], "answer": "Liquid in gas", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Solubility?", "marks": 1, "answer": "The maximum amount of solute that can dissolve in 100g of solvent at a given temperature." },
                        { "id": 12, "question": "Name the solvent in aerated drinks.", "marks": 1, "answer": "Water." },
                        { "id": 13, "question": "What is the solute in salt water?", "marks": 1, "answer": "Salt." },
                        { "id": 14, "question": "Can we separate salt from water by filtration?", "marks": 1, "answer": "No." },
                        { "id": 15, "question": "What is Evaporation?", "marks": 1, "answer": "Process of changing liquid into vapour." },
                        { "id": 16, "question": "Name a mixture used in construction.", "marks": 1, "answer": "Cement/Concrete." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the principle of Sublimation with an example.", "marks": 6, "answer": "Sublimation:\n- Some solids directly change into gas on heating without becoming liquid.\n- Used to separate such sublimable solids from non-sublimable ones.\n- Example: Mixture of Ammonium Chloride (sublimes) and Salt (does not)." },
                        { "id": 18, "question": "What is Fractional Distillation? When is it used?", "marks": 6, "answer": "Fractional Distillation:\n- A method to separate two or more miscible liquids.\n- Used when the difference in boiling points is less than 25°C.\n- Example: Separating components of crude oil or alcohol and water." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the steps to separate a mixture of Sand, Sawdust, and Salt.", "marks": 6, "answer": "Steps:\n1. Add water: Salt dissolves. Sand and Sawdust do not.\n2. Filtration: Filter the mixture. Salt water passes through. Sand and Sawdust remain on paper.\n3. Flotation (for residue): Put residue in water. Sawdust floats, Sand sinks. Decant/skim off sawdust.\n4. Evaporation (for filtrate): Heat salt water to get Salt." },
                        { "id": 20, "question": "What is a Solution? Explain its components and types (Saturated/Unsaturated).", "marks": 6, "answer": "Solution: Homogeneous mixture of two or more substances.\nComponents: Solute (dissolved) + Solvent (dissolving medium).\nTypes:\n1. Unsaturated: More solute can be dissolved at that temperature.\n2. Saturated: No more solute can be dissolved at that temperature." }
                    ]
                }
            ]
        }
    },
    // Chapter 6: Air and Atmosphere
    {
        title: "Chemistry Practice Paper - Chapter 6: Air and Atmosphere - Set A",
        content: {
            "title": "Chemistry Practice Paper - Chapter 6: Air and Atmosphere - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The blanket of air surrounding the earth is called:", "options": ["Atmosphere", "Lithosphere", "Hydrosphere", "Biosphere"], "answer": "Atmosphere", "marks": 1 },
                        { "id": 2, "question": "The major component of air is:", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], "answer": "Nitrogen", "marks": 1 },
                        { "id": 3, "question": "Which gas supports combustion?", "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"], "answer": "Oxygen", "marks": 1 },
                        { "id": 4, "question": "Percentage of Oxygen in air is about:", "options": ["78%", "21%", "0.03%", "1%"], "answer": "21%", "marks": 1 },
                        { "id": 5, "question": "Plants use which gas for photosynthesis?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], "answer": "Carbon Dioxide", "marks": 1 },
                        { "id": 6, "question": "Which gas turns lime water milky?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": "Carbon Dioxide", "marks": 1 },
                        { "id": 7, "question": "The layer of atmosphere closest to earth is:", "options": ["Stratosphere", "Troposphere", "Mesosphere", "Exosphere"], "answer": "Troposphere", "marks": 1 },
                        { "id": 8, "question": "Air is a:", "options": ["Element", "Compound", "Mixture", "None"], "answer": "Mixture", "marks": 1 },
                        { "id": 9, "question": "Rusting of iron requires:", "options": ["Nitrogen", "Oxygen and Moisture", "Carbon Dioxide", "Hydrogen"], "answer": "Oxygen and Moisture", "marks": 1 },
                        { "id": 10, "question": "Which gas is used in fire extinguishers?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": "Carbon Dioxide", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Atmosphere?", "marks": 1, "answer": "The thick layer of air surrounding the earth." },
                        { "id": 12, "question": "Name the gas used for respiration.", "marks": 1, "answer": "Oxygen." },
                        { "id": 13, "question": "What is the percentage of Nitrogen in air?", "marks": 1, "answer": "78%." },
                        { "id": 14, "question": "Name a noble gas present in air.", "marks": 1, "answer": "Argon / Helium." },
                        { "id": 15, "question": "What is Humidity?", "marks": 1, "answer": "Amount of water vapour present in the air." },
                        { "id": 16, "question": "Which gas is produced during burning?", "marks": 1, "answer": "Carbon Dioxide." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "List the components of Air.", "marks": 6, "answer": "Components:\n1. Nitrogen (78%)\n2. Oxygen (21%)\n3. Carbon Dioxide (0.03%)\n4. Inert Gases (Argon, etc.)\n5. Water Vapour\n6. Dust particles" },
                        { "id": 18, "question": "Why is Air considered a mixture?", "marks": 6, "answer": "Reasons:\n1. Composition is not fixed (varies place to place).\n2. Components retain their individual properties.\n3. Components can be separated by physical methods.\n4. No energy change during mixing." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe an experiment to show that air contains Oxygen.", "marks": 6, "answer": "Experiment:\n1. Fix a candle in a trough containing water.\n2. Light the candle.\n3. Invert a glass jar over it.\n4. Observation: Candle burns for a while then goes out. Water level rises in the jar.\n5. Conclusion: Oxygen (which supports burning) was used up, and water rose to take its place." },
                        { "id": 20, "question": "Explain the uses of Oxygen and Nitrogen.", "marks": 6, "answer": "Oxygen:\n1. Respiration (Breathing).\n2. Combustion (Burning).\n3. Welding (Oxy-acetylene flame).\nNitrogen:\n1. Dilutes activity of Oxygen (prevents rapid burning).\n2. Required for plant growth (Proteins).\n3. Food packaging (prevents spoilage)." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 6: Air and Atmosphere - Set B",
        content: {
            "title": "Chemistry Practice Paper - Chapter 6: Air and Atmosphere - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which gas protects us from UV rays?", "options": ["Oxygen", "Ozone", "Nitrogen", "CO2"], "answer": "Ozone", "marks": 1 },
                        { "id": 2, "question": "The process of burning is called:", "options": ["Respiration", "Combustion", "Digestion", "Photosynthesis"], "answer": "Combustion", "marks": 1 },
                        { "id": 3, "question": "Aquatic animals breathe oxygen dissolved in:", "options": ["Air", "Water", "Soil", "Sand"], "answer": "Water", "marks": 1 },
                        { "id": 4, "question": "Which gas is filled in electric bulbs?", "options": ["Oxygen", "Nitrogen/Argon", "Hydrogen", "CO2"], "answer": "Nitrogen/Argon", "marks": 1 },
                        { "id": 5, "question": "Mountaineers carry cylinders of:", "options": ["Nitrogen", "Oxygen", "CO2", "Helium"], "answer": "Oxygen", "marks": 1 },
                        { "id": 6, "question": "Smoke is a mixture of:", "options": ["Gas and Solid", "Liquid and Gas", "Solid and Liquid", "Gas and Gas"], "answer": "Gas and Solid", "marks": 1 },
                        { "id": 7, "question": "Which gas causes Global Warming?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], "answer": "Carbon Dioxide", "marks": 1 },
                        { "id": 8, "question": "Moving air is called:", "options": ["Storm", "Wind", "Breeze", "Cyclone"], "answer": "Wind", "marks": 1 },
                        { "id": 9, "question": "Which component of air varies from place to place?", "options": ["Nitrogen", "Oxygen", "Water Vapour", "Argon"], "answer": "Water Vapour", "marks": 1 },
                        { "id": 10, "question": "Respiration produces:", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide + Energy", "Hydrogen"], "answer": "Carbon Dioxide + Energy", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Rusting?", "marks": 1, "answer": "Slow oxidation of iron in presence of moisture and air." },
                        { "id": 12, "question": "Name the gas used in photosynthesis.", "marks": 1, "answer": "Carbon Dioxide." },
                        { "id": 13, "question": "What is the role of hair in nostrils?", "marks": 1, "answer": "To filter dust particles from air." },
                        { "id": 14, "question": "Name a pollutant in air.", "marks": 1, "answer": "Smoke / Dust / Sulphur Dioxide." },
                        { "id": 15, "question": "Which gas is used to make fertilizers?", "marks": 1, "answer": "Nitrogen." },
                        { "id": 16, "question": "Is air matter?", "marks": 1, "answer": "Yes." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How does nature maintain the balance of Oxygen and Carbon Dioxide?", "marks": 6, "answer": "Balance:\n1. Animals/Humans inhale Oxygen and exhale Carbon Dioxide (Respiration).\n2. Plants take in Carbon Dioxide and release Oxygen (Photosynthesis).\n3. This cycle maintains the balance of gases in the atmosphere." },
                        { "id": 18, "question": "What is Air Pollution? Name two causes.", "marks": 6, "answer": "Air Pollution: Contamination of air with harmful substances.\nCauses:\n1. Smoke from vehicles and factories.\n2. Burning of fossil fuels (coal, wood).\n3. Deforestation." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe an experiment to show that air contains water vapour.", "marks": 6, "answer": "Experiment:\n1. Take a clean, dry glass tumbler.\n2. Put some ice cubes in it.\n3. Keep it for some time.\n4. Observation: Tiny water droplets appear on the outer surface of the glass.\n5. Conclusion: Water vapour in the air condenses on the cold surface of the glass." },
                        { "id": 20, "question": "Explain the importance of the Atmosphere.", "marks": 6, "answer": "Importance:\n1. Provides Oxygen for breathing.\n2. Protects from harmful UV rays (Ozone layer).\n3. Maintains earth's temperature (Greenhouse effect).\n4. Helps in weather changes (Rain, Wind).\n5. Protects from meteors (burn up in Mesosphere)." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - Chapter 6: Air and Atmosphere - Set C",
        content: {
            "title": "Chemistry Practice Paper - Chapter 6: Air and Atmosphere - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which gas is used in balloons?", "options": ["Oxygen", "Helium", "Nitrogen", "CO2"], "answer": "Helium", "marks": 1 },
                        { "id": 2, "question": "The process of coating iron with zinc is:", "options": ["Rusting", "Galvanization", "Painting", "Oiling"], "answer": "Galvanization", "marks": 1 },
                        { "id": 3, "question": "Which gas is evolved during photosynthesis?", "options": ["CO2", "Oxygen", "Nitrogen", "Hydrogen"], "answer": "Oxygen", "marks": 1 },
                        { "id": 4, "question": "Air pollution causes:", "options": ["Respiratory diseases", "Healthy life", "Clean water", "None"], "answer": "Respiratory diseases", "marks": 1 },
                        { "id": 5, "question": "Acid rain is caused by:", "options": ["Oxygen", "Nitrogen", "Sulphur Dioxide & Nitrogen Oxides", "Helium"], "answer": "Sulphur Dioxide & Nitrogen Oxides", "marks": 1 },
                        { "id": 6, "question": "Which gas is used in soft drinks?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], "answer": "Carbon Dioxide", "marks": 1 },
                        { "id": 7, "question": "The presence of dust in air can be seen in:", "options": ["Dark room", "Sunlight beam (Tyndall effect)", "Water", "Vacuum"], "answer": "Sunlight beam (Tyndall effect)", "marks": 1 },
                        { "id": 8, "question": "Nitrogen is fixed in soil by:", "options": ["Viruses", "Bacteria (Rhizobium)", "Fungi", "Worms"], "answer": "Bacteria (Rhizobium)", "marks": 1 },
                        { "id": 9, "question": "Which is an inert gas?", "options": ["Oxygen", "Neon", "Hydrogen", "Chlorine"], "answer": "Neon", "marks": 1 },
                        { "id": 10, "question": "Ventilation helps in:", "options": ["Circulation of fresh air", "Increasing heat", "Stopping wind", "None"], "answer": "Circulation of fresh air", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Galvanization?", "marks": 1, "answer": "Coating iron with a layer of zinc to prevent rusting." },
                        { "id": 12, "question": "Name the gas that turns lime water milky.", "marks": 1, "answer": "Carbon Dioxide." },
                        { "id": 13, "question": "What is Smog?", "marks": 1, "answer": "Smoke + Fog." },
                        { "id": 14, "question": "Name a method to prevent rusting.", "marks": 1, "answer": "Painting / Oiling / Galvanization." },
                        { "id": 15, "question": "What is the colour of rust?", "marks": 1, "answer": "Reddish-brown." },
                        { "id": 16, "question": "Which gas is essential for burning?", "marks": 1, "answer": "Oxygen." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How does soil contain air? Explain.", "marks": 6, "answer": "Explanation:\n- Soil particles have spaces (pores) between them.\n- These spaces are filled with air.\n- Experiment: Add water to dry soil in a beaker. Bubbles come out. This shows air was trapped in the soil." },
                        { "id": 18, "question": "List three ways to reduce air pollution.", "marks": 6, "answer": "Ways:\n1. Plant more trees (Afforestation).\n2. Use public transport or carpool.\n3. Use cleaner fuels like CNG/LPG.\n4. Avoid burning garbage and leaves." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the composition of air with a pie chart description.", "marks": 6, "answer": "Composition:\n- Nitrogen: 78% (Largest portion)\n- Oxygen: 21% (Second largest)\n- Argon: 0.9%\n- Carbon Dioxide: 0.03%\n- Others (Water vapour, dust, other gases): Traces.\n(Imagine a circle divided: ~3/4 is N2, ~1/5 is O2, sliver is others)." },
                        { "id": 20, "question": "What is Rusting? Give the conditions necessary for it and the chemical reaction.", "marks": 6, "answer": "Rusting: The process where iron reacts with oxygen and moisture to form a reddish-brown substance called Rust (Hydrated Iron Oxide).\nConditions: Presence of Air (Oxygen) and Water (Moisture).\nReaction: Iron + Oxygen + Water -> Rust (Hydrated Iron Oxide)." }
                    ]
                }
            ]
        }
    },
    // General / Introduction
    {
        title: "Chemistry Practice Paper - General / Introduction - Set A",
        content: {
            "title": "Chemistry Practice Paper - General / Introduction - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Basic Concepts (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Chemistry is the study of:", "options": ["Plants", "Matter", "Stars", "Numbers"], "answer": "Matter", "marks": 1 },
                        { "id": 2, "question": "Who is known as the Father of Modern Chemistry?", "options": ["Newton", "Einstein", "Lavoisier", "Dalton"], "answer": "Lavoisier", "marks": 1 },
                        { "id": 3, "question": "Apparatus used to measure volume of liquid:", "options": ["Test tube", "Measuring cylinder", "Funnel", "Tripod stand"], "answer": "Measuring cylinder", "marks": 1 },
                        { "id": 4, "question": "Glassware used for heating:", "options": ["Beaker", "Test tube", "Boiling tube", "Funnel"], "answer": "Boiling tube", "marks": 1 },
                        { "id": 5, "question": "Bunsen burner is used for:", "options": ["Measuring", "Heating", "Filtering", "Weighing"], "answer": "Heating", "marks": 1 },
                        { "id": 6, "question": "A substance that speeds up a reaction is:", "options": ["Catalyst", "Reactant", "Product", "Residue"], "answer": "Catalyst", "marks": 1 },
                        { "id": 7, "question": "The change of milk to curd is:", "options": ["Physical change", "Chemical change", "Reversible change", "None"], "answer": "Chemical change", "marks": 1 },
                        { "id": 8, "question": "Melting of ice is:", "options": ["Physical change", "Chemical change", "Irreversible change", "Permanent change"], "answer": "Physical change", "marks": 1 },
                        { "id": 9, "question": "Which is a laboratory safety rule?", "options": ["Taste chemicals", "Run in lab", "Wear lab coat", "Touch with bare hands"], "answer": "Wear lab coat", "marks": 1 },
                        { "id": 10, "question": "Mortar and Pestle is used for:", "options": ["Heating", "Grinding/Crushing", "Filtering", "Measuring"], "answer": "Grinding/Crushing", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Science?", "marks": 1, "answer": "Systematic knowledge gained through observation and experimentation." },
                        { "id": 12, "question": "Name a common preservative.", "marks": 1, "answer": "Salt / Sugar / Vinegar." },
                        { "id": 13, "question": "What is Alchemy?", "marks": 1, "answer": "An ancient practice considered a precursor to chemistry (trying to turn metals to gold)." },
                        { "id": 14, "question": "Name the apparatus used to hold a hot test tube.", "marks": 1, "answer": "Test tube holder." },
                        { "id": 15, "question": "What is a Physical Change?", "marks": 1, "answer": "A change where no new substance is formed." },
                        { "id": 16, "question": "Give an example of a chemical change.", "marks": 1, "answer": "Burning of paper / Rusting of iron." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Differentiate between Physical and Chemical Changes.", "marks": 6, "answer": "1. Physical: Temporary, Reversible, No new substance formed, Mass remains same. Ex: Melting ice.\n2. Chemical: Permanent, Irreversible, New substance formed, Mass changes. Ex: Burning wood." },
                        { "id": 18, "question": "List three uses of Chemistry in daily life.", "marks": 6, "answer": "Uses:\n1. Medicines (Drugs/Antibiotics).\n2. Food Preservatives.\n3. Cleaning agents (Soaps/Detergents).\n4. Textiles (Synthetic fibres).\n5. Fertilizers for agriculture." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Draw and explain the use of: Beaker, Flask, Funnel.", "marks": 6, "answer": "1. Beaker: Cylindrical glass container. Used for holding/mixing liquids.\n2. Flask (Conical/Round bottom): Used for heating or mixing chemicals.\n3. Funnel: Cone-shaped. Used for pouring liquids into narrow containers or for filtration." },
                        { "id": 20, "question": "What are the safety precautions to be followed in a Chemistry Laboratory?", "marks": 6, "answer": "Precautions:\n1. Do not touch or taste chemicals.\n2. Wear a lab coat and safety goggles.\n3. Do not run or play in the lab.\n4. Handle glass apparatus carefully.\n5. Wash hands after experiments.\n6. Follow teacher's instructions." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - General / Introduction - Set B",
        content: {
            "title": "Chemistry Practice Paper - General / Introduction - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Basic Concepts (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The philosopher's stone was believed to turn metals into:", "options": ["Silver", "Gold", "Iron", "Copper"], "answer": "Gold", "marks": 1 },
                        { "id": 2, "question": "Which apparatus is used to support a beaker during heating?", "options": ["Tripod stand", "Test tube holder", "Funnel", "Pipette"], "answer": "Tripod stand", "marks": 1 },
                        { "id": 3, "question": "Wire gauze is used to:", "options": ["Filter", "Spread heat evenly", "Hold test tube", "Measure"], "answer": "Spread heat evenly", "marks": 1 },
                        { "id": 4, "question": "Pipette is used to:", "options": ["Measure fixed volume of liquid", "Heat liquid", "Store liquid", "Crush solid"], "answer": "Measure fixed volume of liquid", "marks": 1 },
                        { "id": 5, "question": "Burning of candle is:", "options": ["Physical change", "Chemical change", "Both", "None"], "answer": "Both", "marks": 1 },
                        { "id": 6, "question": "Tearing of paper is:", "options": ["Physical change", "Chemical change", "Reversible", "None"], "answer": "Physical change", "marks": 1 },
                        { "id": 7, "question": "Fertilizers are used to:", "options": ["Kill insects", "Increase soil fertility", "Preserve food", "Clean clothes"], "answer": "Increase soil fertility", "marks": 1 },
                        { "id": 8, "question": "Pesticides are used to:", "options": ["Kill pests", "Grow plants", "Make medicines", "None"], "answer": "Kill pests", "marks": 1 },
                        { "id": 9, "question": "Which scientist proposed the Atomic Theory?", "options": ["Dalton", "Newton", "Einstein", "Darwin"], "answer": "Dalton", "marks": 1 },
                        { "id": 10, "question": "China dish is made of:", "options": ["Glass", "Porcelain", "Metal", "Plastic"], "answer": "Porcelain", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a Test Tube?", "marks": 1, "answer": "A small glass tube used to hold chemicals." },
                        { "id": 12, "question": "Name a synthetic fibre.", "marks": 1, "answer": "Nylon / Polyester." },
                        { "id": 13, "question": "What is the use of a Dropper?", "marks": 1, "answer": "To add liquid drop by drop." },
                        { "id": 14, "question": "Define Chemical Reaction.", "marks": 1, "answer": "Process in which new substances are formed." },
                        { "id": 15, "question": "Name a fuel.", "marks": 1, "answer": "Petrol / Coal / LPG." },
                        { "id": 16, "question": "What is the colour of Copper Sulphate?", "marks": 1, "answer": "Blue." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the contribution of Chemistry in Agriculture.", "marks": 6, "answer": "Contribution:\n1. Fertilizers: Urea, NPK increase crop yield.\n2. Pesticides/Insecticides: Kill harmful pests and insects.\n3. Fungicides: Protect crops from fungal diseases.\n4. Preservatives: Help in storing food grains." },
                        { "id": 18, "question": "Why is the burning of a candle considered both physical and chemical change?", "marks": 6, "answer": "Reason:\n1. Physical Change: Melting of wax. Solid wax turns to liquid wax (reversible).\n2. Chemical Change: Burning of wax vapour. Wax reacts with oxygen to give CO2, heat, and light (irreversible)." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the structure and use of a Bunsen Burner.", "marks": 6, "answer": "Bunsen Burner:\n- A gas burner used in labs for heating.\n- Parts: Base, Gas inlet, Air hole (collar), Barrel (tube).\n- Working: Gas enters base, mixes with air from air hole, burns at top of barrel.\n- Flame: Blue (hot, non-luminous) when air hole open; Yellow (luminous) when closed." },
                        { "id": 20, "question": "Classify as Physical or Chemical Change: Boiling water, Cooking food, Breaking glass, Rusting iron, Digestion, Freezing water.", "marks": 6, "answer": "Physical: Boiling water, Breaking glass, Freezing water.\nChemical: Cooking food, Rusting iron, Digestion." }
                    ]
                }
            ]
        }
    },
    {
        title: "Chemistry Practice Paper - General / Introduction - Set C",
        content: {
            "title": "Chemistry Practice Paper - General / Introduction - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "CHEMISTRY",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Basic Concepts (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which of these is a cosmetic?", "options": ["Soap", "Talcum powder", "Detergent", "Medicine"], "answer": "Talcum powder", "marks": 1 },
                        { "id": 2, "question": "DDT is a:", "options": ["Fertilizer", "Pesticide", "Medicine", "Food"], "answer": "Pesticide", "marks": 1 },
                        { "id": 3, "question": "Which apparatus is used for filtration?", "options": ["Funnel", "Beaker", "Test tube", "Burner"], "answer": "Funnel", "marks": 1 },
                        { "id": 4, "question": "Spirit lamp uses ______ as fuel.", "options": ["Petrol", "Spirit/Alcohol", "Kerosene", "Oil"], "answer": "Spirit/Alcohol", "marks": 1 },
                        { "id": 5, "question": "Formation of clouds is:", "options": ["Physical change", "Chemical change", "Man-made change", "None"], "answer": "Physical change", "marks": 1 },
                        { "id": 6, "question": "Spoiling of food is:", "options": ["Physical change", "Chemical change", "Desirable change", "Reversible"], "answer": "Chemical change", "marks": 1 },
                        { "id": 7, "question": "Mendeleev is famous for:", "options": ["Atomic Theory", "Periodic Table", "Gravity", "Bulb"], "answer": "Periodic Table", "marks": 1 },
                        { "id": 8, "question": "Which glass is used to make lab apparatus?", "options": ["Soft glass", "Hard glass (Pyrex)", "Window glass", "Coloured glass"], "answer": "Hard glass (Pyrex)", "marks": 1 },
                        { "id": 9, "question": "Spatula is used to:", "options": ["Take small quantity of solid", "Stir liquid", "Heat", "Filter"], "answer": "Take small quantity of solid", "marks": 1 },
                        { "id": 10, "question": "Wash bottle contains:", "options": ["Acid", "Distilled water", "Oil", "Soap"], "answer": "Distilled water", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a Reagent bottle?", "marks": 1, "answer": "Bottle used to store chemicals." },
                        { "id": 12, "question": "Name a medicine used to cure fever.", "marks": 1, "answer": "Paracetamol / Aspirin." },
                        { "id": 13, "question": "What is the use of a Glass Rod?", "marks": 1, "answer": "To stir solutions." },
                        { "id": 14, "question": "Define Reactants.", "marks": 1, "answer": "Substances that take part in a chemical reaction." },
                        { "id": 15, "question": "Define Products.", "marks": 1, "answer": "New substances formed after a chemical reaction." },
                        { "id": 16, "question": "What is the full form of LPG?", "marks": 1, "answer": "Liquefied Petroleum Gas." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How has Chemistry helped in the field of Industry?", "marks": 6, "answer": "Industry:\n1. Production of metals (Steel, Aluminium).\n2. Manufacturing of plastics, paints, dyes.\n3. Production of cement, glass, paper.\n4. Petroleum refining (Petrol, Diesel)." },
                        { "id": 18, "question": "Explain the difference between Reversible and Irreversible changes.", "marks": 6, "answer": "1. Reversible: Can be reversed to original state. Temporary. Ex: Stretching rubber band, Melting ice.\n2. Irreversible: Cannot be reversed. Permanent. Ex: Burning paper, Curdling milk." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Name 5 common laboratory apparatus and their uses.", "marks": 6, "answer": "1. Test Tube: Heating/mixing small amounts.\n2. Beaker: Holding liquids.\n3. Measuring Cylinder: Measuring volume.\n4. Funnel: Filtration/Pouring.\n5. Tripod Stand: Supporting apparatus during heating." },
                        { "id": 20, "question": "Discuss the negative effects of Chemistry (Chemicals).", "marks": 6, "answer": "Negative Effects:\n1. Pollution: Industrial waste pollutes air and water.\n2. Global Warming: Greenhouse gases.\n3. Ozone Depletion: CFCs.\n4. Harmful Weapons: Chemical weapons, explosives.\n5. Health Hazards: Excessive use of pesticides/drugs." }
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
