
import { initDatabase } from '../db/database';

const papersToRegenerate = [
    // 1. Children will unleash their creativity
    {
        title: "ENGLISH LANGUAGE Practice Paper - Children will unleash their creativity. - Set A",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Children will unleash their creativity. - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar - MCQs (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Choose the correct collective noun: A ______ of bees.", "options": ["swarm", "herd", "pack", "flock"], "answer": "swarm", "marks": 1 },
                        { "id": 2, "question": "Identify the adjective: The *brave* soldier fought well.", "options": ["soldier", "fought", "brave", "well"], "answer": "brave", "marks": 1 },
                        { "id": 3, "question": "Choose the correct preposition: The cat jumped ______ the table.", "options": ["in", "on", "at", "with"], "answer": "on", "marks": 1 },
                        { "id": 4, "question": "Which sentence is in the Future Continuous Tense?", "options": ["I will play.", "I am playing.", "I will be playing.", "I played."], "answer": "I will be playing.", "marks": 1 },
                        { "id": 5, "question": "Choose the correct synonym for 'Happy'.", "options": ["Sad", "Joyful", "Angry", "Tired"], "answer": "Joyful", "marks": 1 },
                        { "id": 6, "question": "Identify the subject: 'The sun rises in the east.'", "options": ["The sun", "rises", "in the east", "east"], "answer": "The sun", "marks": 1 },
                        { "id": 7, "question": "Choose the correct article: He is ______ honest man.", "options": ["a", "an", "the", "no article"], "answer": "an", "marks": 1 },
                        { "id": 8, "question": "Plural of 'Child' is:", "options": ["Childs", "Children", "Childrens", "Childes"], "answer": "Children", "marks": 1 },
                        { "id": 9, "question": "Identify the verb: She *sings* beautifully.", "options": ["She", "sings", "beautifully", "none"], "answer": "sings", "marks": 1 },
                        { "id": 10, "question": "Choose the correct conjunction: I like tea ______ coffee.", "options": ["but", "and", "so", "because"], "answer": "and", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary & Grammar (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Give the antonym of 'Ancient'.", "marks": 1, "answer": "Modern" },
                        { "id": 12, "question": "Fill in the blank: She ______ (go) to school yesterday.", "marks": 1, "answer": "went" },
                        { "id": 13, "question": "Change the gender: 'King'.", "marks": 1, "answer": "Queen" },
                        { "id": 14, "question": "Make a sentence with 'Beautiful'.", "marks": 1, "answer": "The garden is very beautiful." },
                        { "id": 15, "question": "Identify the adverb: He ran quickly.", "marks": 1, "answer": "quickly" },
                        { "id": 16, "question": "Correct the sentence: He do not like apples.", "marks": 1, "answer": "He does not like apples." }
                    ]
                },
                {
                    "name": "Section C: Creative Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a short paragraph on 'My Favourite Hobby'. (60-80 words)", "marks": 6, "answer": "My favourite hobby is reading books. I love reading adventure stories and fairy tales. Reading helps me improve my vocabulary and imagination. I usually read before going to bed. It relaxes my mind. I also exchange books with my friends. Books are my best friends." },
                        { "id": 18, "question": "Complete the story: 'One day, I found a magic key in my garden...'", "marks": 6, "answer": "One day, I found a magic key in my garden. It was glowing with a golden light. I looked around and saw a small, old box buried under a rose bush. I used the key to open it. Inside, there was a map to a hidden treasure! I was so excited and decided to go on an adventure to find it." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'Trees are our best friends. They give us oxygen, wood, and fruits. We should not cut trees. We must plant more trees to save our earth.'\nQ1. Who are our best friends?\nQ2. What do trees give us?\nQ3. What should we do to save our earth?", "marks": 6, "answer": "1. Trees are our best friends.\n2. Trees give us oxygen, wood, and fruits.\n3. We must plant more trees to save our earth." },
                        { "id": 20, "question": "Write a letter to your friend inviting him/her to your birthday party.", "marks": 6, "answer": "Dear [Friend's Name],\nI hope you are doing well. I am writing to invite you to my birthday party on [Date] at my home. The party will start at 5 PM. We will have games, music, and delicious food. I would be very happy if you come. Please let me know if you can make it.\nYour friend,\n[Your Name]" }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Children will unleash their creativity. - Set B",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Children will unleash their creativity. - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar - MCQs (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Choose the correct abstract noun from: 'Honesty is the best policy.'", "options": ["Honesty", "Policy", "Best", "Is"], "answer": "Honesty", "marks": 1 },
                        { "id": 2, "question": "Identify the pronoun: *They* are playing football.", "options": ["They", "are", "playing", "football"], "answer": "They", "marks": 1 },
                        { "id": 3, "question": "Choose the correct preposition: The book is ______ the table.", "options": ["under", "between", "into", "of"], "answer": "under", "marks": 1 },
                        { "id": 4, "question": "Past tense of 'Run' is:", "options": ["Runned", "Ran", "Running", "Runs"], "answer": "Ran", "marks": 1 },
                        { "id": 5, "question": "Choose the correct homophone: I ______ a letter.", "options": ["wrote", "rote", "root", "route"], "answer": "wrote", "marks": 1 },
                        { "id": 6, "question": "Identify the predicate: 'Birds fly in the sky.'", "options": ["Birds", "fly", "fly in the sky", "sky"], "answer": "fly in the sky", "marks": 1 },
                        { "id": 7, "question": "Choose the correct article: I saw ______ elephant.", "options": ["a", "an", "the", "none"], "answer": "an", "marks": 1 },
                        { "id": 8, "question": "Plural of 'Tooth' is:", "options": ["Tooths", "Teeth", "Teeths", "Tooth"], "answer": "Teeth", "marks": 1 },
                        { "id": 9, "question": "Identify the adjective: It is a *sunny* day.", "options": ["It", "is", "sunny", "day"], "answer": "sunny", "marks": 1 },
                        { "id": 10, "question": "Choose the correct conjunction: He is poor ______ happy.", "options": ["but", "or", "so", "because"], "answer": "but", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary & Grammar (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Give the synonym of 'Big'.", "marks": 1, "answer": "Huge / Large" },
                        { "id": 12, "question": "Fill in the blank: They ______ (play) cricket now.", "marks": 1, "answer": "are playing" },
                        { "id": 13, "question": "Change the gender: 'Uncle'.", "marks": 1, "answer": "Aunt" },
                        { "id": 14, "question": "Make a sentence with 'School'.", "marks": 1, "answer": "I go to school by bus." },
                        { "id": 15, "question": "Identify the adverb: She spoke softly.", "marks": 1, "answer": "softly" },
                        { "id": 16, "question": "Correct the sentence: She go to the market.", "marks": 1, "answer": "She goes to the market." }
                    ]
                },
                {
                    "name": "Section C: Creative Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a short paragraph on 'A Visit to the Zoo'. (60-80 words)", "marks": 6, "answer": "Last Sunday, I visited the zoo with my parents. We saw many animals like lions, tigers, elephants, and monkeys. The monkeys were jumping from tree to tree. I also saw colourful birds and a big snake. We had a picnic lunch in the park. It was a fun day and I learnt a lot about animals." },
                        { "id": 18, "question": "Imagine you are a bird. Write 5 lines about your life.", "marks": 6, "answer": "1. I am a little sparrow.\n2. I live in a nest on a big banyan tree.\n3. I fly high in the sky every morning.\n4. I eat grains and small insects.\n5. I love singing songs with my friends." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'The camel is called the ship of the desert. It can live without water for many days. It has a hump on its back where it stores fat. Camels are used to carry people and goods across the desert.'\nQ1. What is the camel called?\nQ2. Where does the camel store fat?\nQ3. Why are camels useful?", "marks": 6, "answer": "1. The camel is called the ship of the desert.\n2. The camel stores fat in its hump.\n3. Camels are useful because they carry people and goods across the desert." },
                        { "id": 20, "question": "Write an application to your Principal asking for 2 days leave due to fever.", "marks": 6, "answer": "To,\nThe Principal,\n[School Name],\n[City].\nSubject: Application for leave.\nRespected Sir/Madam,\nI beg to state that I am suffering from fever since last night. The doctor has advised me to take rest. Therefore, I cannot attend school for two days (Dates). Kindly grant me leave.\nThanking you,\nYours obediently,\n[Your Name]\nClass 6" }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Children will unleash their creativity. - Set C",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Children will unleash their creativity. - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar - MCQs (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Choose the correct material noun: The chair is made of ______.", "options": ["wood", "chair", "made", "is"], "answer": "wood", "marks": 1 },
                        { "id": 2, "question": "Identify the possessive pronoun: This book is *mine*.", "options": ["This", "book", "is", "mine"], "answer": "mine", "marks": 1 },
                        { "id": 3, "question": "Choose the correct preposition: The bird flew ______ the tree.", "options": ["over", "in", "at", "on"], "answer": "over", "marks": 1 },
                        { "id": 4, "question": "Which sentence is in the Present Perfect Tense?", "options": ["I have eaten.", "I ate.", "I am eating.", "I will eat."], "answer": "I have eaten.", "marks": 1 },
                        { "id": 5, "question": "Choose the correct antonym for 'Hard'.", "options": ["Soft", "Difficult", "Strong", "Heavy"], "answer": "Soft", "marks": 1 },
                        { "id": 6, "question": "Identify the subject: 'My mother cooks delicious food.'", "options": ["My mother", "cooks", "delicious", "food"], "answer": "My mother", "marks": 1 },
                        { "id": 7, "question": "Choose the correct article: She is ______ best student.", "options": ["a", "an", "the", "none"], "answer": "the", "marks": 1 },
                        { "id": 8, "question": "Plural of 'Mouse' is:", "options": ["Mouses", "Mice", "Mouse", "Mices"], "answer": "Mice", "marks": 1 },
                        { "id": 9, "question": "Identify the verb: The dog *barked* loudly.", "options": ["The", "dog", "barked", "loudly"], "answer": "barked", "marks": 1 },
                        { "id": 10, "question": "Choose the correct conjunction: Run fast ______ you will miss the bus.", "options": ["or", "and", "but", "so"], "answer": "or", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary & Grammar (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Give the synonym of 'Start'.", "marks": 1, "answer": "Begin" },
                        { "id": 12, "question": "Fill in the blank: We ______ (watch) a movie last night.", "marks": 1, "answer": "watched" },
                        { "id": 13, "question": "Change the gender: 'Lion'.", "marks": 1, "answer": "Lioness" },
                        { "id": 14, "question": "Make a sentence with 'Friend'.", "marks": 1, "answer": "Rahul is my best friend." },
                        { "id": 15, "question": "Identify the adverb: He writes neatly.", "marks": 1, "answer": "neatly" },
                        { "id": 16, "question": "Correct the sentence: I has a pen.", "marks": 1, "answer": "I have a pen." }
                    ]
                },
                {
                    "name": "Section C: Creative Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a short paragraph on 'My Pet Dog'. (60-80 words)", "marks": 6, "answer": "I have a pet dog named Bruno. He is a Golden Retriever. He has soft golden fur and big brown eyes. Bruno loves to play with a ball. He guards our house at night. He is very friendly and loves to eat biscuits. I take him for a walk every evening. I love my dog very much." },
                        { "id": 18, "question": "Describe your favourite festival in 5 sentences.", "marks": 6, "answer": "1. My favourite festival is Diwali.\n2. It is the festival of lights.\n3. We decorate our house with diyas and rangoli.\n4. We wear new clothes and eat sweets.\n5. I love bursting crackers with my friends." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'Ants are very hardworking insects. They live in colonies. There are three types of ants: the queen, the workers, and the soldiers. The queen lays eggs. The workers collect food. The soldiers protect the colony.'\nQ1. What kind of insects are ants?\nQ2. Name the three types of ants.\nQ3. What is the work of the queen ant?", "marks": 6, "answer": "1. Ants are very hardworking insects.\n2. The three types are queen, workers, and soldiers.\n3. The queen ant lays eggs." },
                        { "id": 20, "question": "Write a letter to your uncle thanking him for the birthday gift.", "marks": 6, "answer": "Dear Uncle,\nI hope you are fine. I received the wristwatch you sent for my birthday. It is very beautiful and useful. I really needed a watch for my exams. Thank you so much for this wonderful gift. I miss you and aunt.\nYours lovingly,\n[Your Name]" }
                    ]
                }
            ]
        }
    },
    // 2. Each student will develop their creative, writing, speaking skills.
    {
        title: "ENGLISH LANGUAGE Practice Paper - Each student will develop their creative, writing, speaking skills. - Set A",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Each student will develop their creative, writing, speaking skills. - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Identify the type of sentence: 'Please shut the door.'", "options": ["Declarative", "Interrogative", "Imperative", "Exclamatory"], "answer": "Imperative", "marks": 1 },
                        { "id": 2, "question": "Choose the correct degree of comparison: This box is ______ than that one.", "options": ["heavy", "heavier", "heaviest", "more heavy"], "answer": "heavier", "marks": 1 },
                        { "id": 3, "question": "Fill in with a suitable article: ______ sun shines brightly.", "options": ["A", "An", "The", "None"], "answer": "The", "marks": 1 },
                        { "id": 4, "question": "Choose the correct verb form: She ______ to the market daily.", "options": ["go", "goes", "going", "gone"], "answer": "goes", "marks": 1 },
                        { "id": 5, "question": "Identify the adverb of time: 'I will come tomorrow.'", "options": ["I", "will", "come", "tomorrow"], "answer": "tomorrow", "marks": 1 },
                        { "id": 6, "question": "Choose the correct preposition: The cat is hiding ______ the bed.", "options": ["on", "under", "at", "in"], "answer": "under", "marks": 1 },
                        { "id": 7, "question": "Plural of 'Leaf' is:", "options": ["Leafs", "Leaves", "Leaveses", "Leafes"], "answer": "Leaves", "marks": 1 },
                        { "id": 8, "question": "Identify the conjunction: 'He is rich but humble.'", "options": ["He", "is", "rich", "but"], "answer": "but", "marks": 1 },
                        { "id": 9, "question": "Choose the correct pronoun: ______ are my friends.", "options": ["This", "That", "These", "It"], "answer": "These", "marks": 1 },
                        { "id": 10, "question": "Opposite of 'Victory' is:", "options": ["Win", "Defeat", "Success", "Triumph"], "answer": "Defeat", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Write the synonym of 'Beautiful'.", "marks": 1, "answer": "Pretty / Lovely" },
                        { "id": 12, "question": "Write the antonym of 'Strong'.", "marks": 1, "answer": "Weak" },
                        { "id": 13, "question": "One word for: 'A person who teaches'.", "marks": 1, "answer": "Teacher" },
                        { "id": 14, "question": "Make a sentence with 'Happy'.", "marks": 1, "answer": "I am very happy today." },
                        { "id": 15, "question": "Correct the spelling: 'Grammer'.", "marks": 1, "answer": "Grammar" },
                        { "id": 16, "question": "Give the past tense of 'Buy'.", "marks": 1, "answer": "Bought" }
                    ]
                },
                {
                    "name": "Section C: Writing Skills (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a paragraph on 'The Importance of Sports'.", "marks": 6, "answer": "Sports are very important for our health. They keep us fit and active. Playing sports teaches us teamwork and discipline. It also helps us make new friends. Sports like cricket, football, and swimming are good for the body and mind. Every student should play at least one sport." },
                        { "id": 18, "question": "Write a dialogue between two friends discussing their holiday plans.", "marks": 6, "answer": "Rahul: Hi Raj, where are you going for the holidays?\nRaj: I am going to my grandmother's village. What about you?\nRahul: I am going to Shimla with my family.\nRaj: That sounds exciting! Will you see snow?\nRahul: Yes, I hope so. Have a great trip!\nRaj: You too, Rahul." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'Gold is a precious metal. It is yellow in colour. It is used to make jewellery and coins. Gold is found deep inside the earth. South Africa produces a lot of gold.'\nQ1. What is the colour of gold?\nQ2. What is gold used for?\nQ3. Where is gold found?", "marks": 6, "answer": "1. Gold is yellow in colour.\n2. Gold is used to make jewellery and coins.\n3. Gold is found deep inside the earth." },
                        { "id": 20, "question": "Write a letter to your friend describing your new school.", "marks": 6, "answer": "Dear [Friend],\nI hope you are well. I want to tell you about my new school. It is very big and has a huge playground. The teachers are very kind and helpful. I have made some new friends here. The library has many interesting books. I like my new school very much.\nYour friend,\n[Name]" }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Each student will develop their creative, writing, speaking skills. - Set B",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Each student will develop their creative, writing, speaking skills. - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Identify the type of sentence: 'What a beautiful painting!'", "options": ["Declarative", "Interrogative", "Imperative", "Exclamatory"], "answer": "Exclamatory", "marks": 1 },
                        { "id": 2, "question": "Choose the correct degree: He is the ______ boy in the class.", "options": ["tall", "taller", "tallest", "more tall"], "answer": "tallest", "marks": 1 },
                        { "id": 3, "question": "Fill in with a suitable article: I have ______ apple.", "options": ["a", "an", "the", "none"], "answer": "an", "marks": 1 },
                        { "id": 4, "question": "Choose the correct verb form: They ______ football yesterday.", "options": ["play", "plays", "played", "playing"], "answer": "played", "marks": 1 },
                        { "id": 5, "question": "Identify the adverb of place: 'Go outside.'", "options": ["Go", "outside", "Go outside", "None"], "answer": "outside", "marks": 1 },
                        { "id": 6, "question": "Choose the correct preposition: The book is ______ the bag.", "options": ["in", "on", "at", "over"], "answer": "in", "marks": 1 },
                        { "id": 7, "question": "Plural of 'City' is:", "options": ["Citys", "Cities", "Cityes", "Cites"], "answer": "Cities", "marks": 1 },
                        { "id": 8, "question": "Identify the conjunction: 'I wanted to go, but I was tired.'", "options": ["I", "to", "but", "was"], "answer": "but", "marks": 1 },
                        { "id": 9, "question": "Choose the correct pronoun: ______ is my sister.", "options": ["He", "She", "It", "They"], "answer": "She", "marks": 1 },
                        { "id": 10, "question": "Opposite of 'Friend' is:", "options": ["Enemy", "Buddy", "Pal", "Mate"], "answer": "Enemy", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Write the synonym of 'Fast'.", "marks": 1, "answer": "Quick / Rapid" },
                        { "id": 12, "question": "Write the antonym of 'Rich'.", "marks": 1, "answer": "Poor" },
                        { "id": 13, "question": "One word for: 'A place where books are kept'.", "marks": 1, "answer": "Library" },
                        { "id": 14, "question": "Make a sentence with 'Garden'.", "marks": 1, "answer": "My garden has many flowers." },
                        { "id": 15, "question": "Correct the spelling: 'Recieve'.", "marks": 1, "answer": "Receive" },
                        { "id": 16, "question": "Give the past tense of 'Catch'.", "marks": 1, "answer": "Caught" }
                    ]
                },
                {
                    "name": "Section C: Writing Skills (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a paragraph on 'My Best Friend'.", "marks": 6, "answer": "My best friend is Rohan. We study in the same class. He is very kind and helpful. We sit together in class and share our lunch. Rohan is good at studies and sports. We play cricket in the evening. I am lucky to have a friend like him." },
                        { "id": 18, "question": "Write a short story using these words: Forest, Lion, Mouse, Net, Help.", "marks": 6, "answer": "Once a lion was sleeping in a forest. A mouse started playing on him. The lion woke up and caught the mouse. The mouse begged for mercy. The lion let him go. Later, the lion was caught in a hunter's net. The mouse saw him and cut the net with his teeth. The lion was free. They became friends." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'Water is essential for life. We need water for drinking, cooking, and cleaning. Plants and animals also need water to survive. We should not waste water. We must save every drop of water.'\nQ1. Why is water essential?\nQ2. List two uses of water.\nQ3. What should we not do?", "marks": 6, "answer": "1. Water is essential for life.\n2. Drinking and cooking.\n3. We should not waste water." },
                        { "id": 20, "question": "Write a letter to your father asking for money to buy books.", "marks": 6, "answer": "Dear Father,\nI hope you are fine. My exams are coming near and I need to buy some reference books for Science and Maths. The cost of the books is Rs. 500. Please send me the money soon so I can prepare well. Give my regards to mother.\nYour loving son,\n[Name]" }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Each student will develop their creative, writing, speaking skills. - Set C",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Each student will develop their creative, writing, speaking skills. - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Identify the type of sentence: 'Where do you live?'", "options": ["Declarative", "Interrogative", "Imperative", "Exclamatory"], "answer": "Interrogative", "marks": 1 },
                        { "id": 2, "question": "Choose the correct degree: Iron is ______ than wood.", "options": ["heavy", "heavier", "heaviest", "more heavy"], "answer": "heavier", "marks": 1 },
                        { "id": 3, "question": "Fill in with a suitable article: He is ______ honest boy.", "options": ["a", "an", "the", "none"], "answer": "an", "marks": 1 },
                        { "id": 4, "question": "Choose the correct verb form: The sun ______ in the east.", "options": ["rise", "rises", "rising", "rose"], "answer": "rises", "marks": 1 },
                        { "id": 5, "question": "Identify the adverb of manner: 'She sings sweetly.'", "options": ["She", "sings", "sweetly", "None"], "answer": "sweetly", "marks": 1 },
                        { "id": 6, "question": "Choose the correct preposition: The dog jumped ______ the fence.", "options": ["over", "in", "at", "on"], "answer": "over", "marks": 1 },
                        { "id": 7, "question": "Plural of 'Knife' is:", "options": ["Knifes", "Knives", "Knive", "Knifves"], "answer": "Knives", "marks": 1 },
                        { "id": 8, "question": "Identify the conjunction: 'Do you want tea or coffee?'", "options": ["Do", "want", "or", "coffee"], "answer": "or", "marks": 1 },
                        { "id": 9, "question": "Choose the correct pronoun: ______ is a doctor.", "options": ["He", "They", "We", "Us"], "answer": "He", "marks": 1 },
                        { "id": 10, "question": "Opposite of 'Day' is:", "options": ["Night", "Morning", "Evening", "Noon"], "answer": "Night", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Write the synonym of 'Small'.", "marks": 1, "answer": "Tiny / Little" },
                        { "id": 12, "question": "Write the antonym of 'Up'.", "marks": 1, "answer": "Down" },
                        { "id": 13, "question": "One word for: 'A person who treats patients'.", "marks": 1, "answer": "Doctor" },
                        { "id": 14, "question": "Make a sentence with 'Book'.", "marks": 1, "answer": "I am reading a story book." },
                        { "id": 15, "question": "Correct the spelling: 'Beleive'.", "marks": 1, "answer": "Believe" },
                        { "id": 16, "question": "Give the past tense of 'Teach'.", "marks": 1, "answer": "Taught" }
                    ]
                },
                {
                    "name": "Section C: Writing Skills (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a paragraph on 'My School'.", "marks": 6, "answer": "The name of my school is LearnNest School. It is one of the best schools in the city. It has a big building with many classrooms. We have a library, a computer lab, and a playground. The teachers are very good and teach us with care. I love my school very much." },
                        { "id": 18, "question": "Write a notice for the school notice board about a 'Lost Pencil Box'.", "marks": 6, "answer": "NOTICE\nLOST! LOST! LOST!\nDate: [Today's Date]\nThis is to inform that I have lost my red pencil box in the playground during recess. It has a Spiderman sticker on it. If anyone finds it, please return it to me or submit it to the class teacher.\n[Your Name]\nClass 6" }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'The peacock is a beautiful bird. It is the national bird of India. It has long, colourful feathers. When it rains, the peacock dances. It eats seeds, insects, and small snakes.'\nQ1. Which is the national bird of India?\nQ2. When does the peacock dance?\nQ3. What does the peacock eat?", "marks": 6, "answer": "1. The peacock is the national bird of India.\n2. The peacock dances when it rains.\n3. It eats seeds, insects, and small snakes." },
                        { "id": 20, "question": "Write a letter to your friend inviting him to spend summer holidays with you.", "marks": 6, "answer": "Dear [Friend],\nI hope you are doing well. My summer holidays are starting next week. I invite you to come to my house and spend a few days with me. We will play games, watch movies, and have a lot of fun. My mother will make delicious food for us. Please come.\nYour friend,\n[Name]" }
                    ]
                }
            ]
        }
    },
    // 3. Foster cognitive development
    {
        title: "ENGLISH LANGUAGE Practice Paper - Foster cognitive development. - Set A",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Foster cognitive development. - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar & Logic (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Rearrange the words: 'is / a / boy / good / He'", "options": ["He is a good boy", "A good boy is He", "Boy is a good He", "He good is a boy"], "answer": "He is a good boy", "marks": 1 },
                        { "id": 2, "question": "Find the odd one out:", "options": ["Apple", "Banana", "Carrot", "Mango"], "answer": "Carrot", "marks": 1 },
                        { "id": 3, "question": "Complete the analogy: Day : Night :: Hot : ______", "options": ["Cold", "Warm", "Sun", "Summer"], "answer": "Cold", "marks": 1 },
                        { "id": 4, "question": "Which word is spelled correctly?", "options": ["Neccessary", "Necessary", "Necesary", "Neccesary"], "answer": "Necessary", "marks": 1 },
                        { "id": 5, "question": "Identify the tense: 'I have finished my work.'", "options": ["Simple Past", "Present Perfect", "Past Perfect", "Simple Present"], "answer": "Present Perfect", "marks": 1 },
                        { "id": 6, "question": "Choose the correct prefix for 'Happy':", "options": ["Un", "Dis", "Im", "In"], "answer": "Un", "marks": 1 },
                        { "id": 7, "question": "Choose the correct suffix for 'Care':", "options": ["ful", "ment", "tion", "ness"], "answer": "ful", "marks": 1 },
                        { "id": 8, "question": "A person who writes poems is a:", "options": ["Author", "Poet", "Artist", "Singer"], "answer": "Poet", "marks": 1 },
                        { "id": 9, "question": "The young one of a Cat is:", "options": ["Puppy", "Kitten", "Calf", "Cub"], "answer": "Kitten", "marks": 1 },
                        { "id": 10, "question": "Which is a compound word?", "options": ["Sun", "Flower", "Sunflower", "Flow"], "answer": "Sunflower", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary & Usage (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Give one word for: 'A period of 100 years'.", "marks": 1, "answer": "Century" },
                        { "id": 12, "question": "Use 'Bear' in a sentence as an animal.", "marks": 1, "answer": "I saw a bear in the zoo." },
                        { "id": 13, "question": "Use 'Bear' in a sentence meaning 'to tolerate'.", "marks": 1, "answer": "I cannot bear this pain." },
                        { "id": 14, "question": "Correct the sentence: 'Me and my friend went out.'", "marks": 1, "answer": "My friend and I went out." },
                        { "id": 15, "question": "What is the homophone of 'See'?", "marks": 1, "answer": "Sea" },
                        { "id": 16, "question": "Give the plural of 'Ox'.", "marks": 1, "answer": "Oxen" }
                    ]
                },
                {
                    "name": "Section C: Creative Thinking (12 marks)",
                    "questions": [
                        { "id": 17, "question": "If you could fly like a bird, where would you go? Write 5 lines.", "marks": 6, "answer": "1. If I could fly, I would go to the top of the mountains.\n2. I would fly over the oceans and see the blue water.\n3. I would visit different countries without a ticket.\n4. I would sit on the clouds and watch the world below.\n5. I would race with other birds in the sky." },
                        { "id": 18, "question": "Look at the picture (Imagine a park scene) and describe it.", "marks": 6, "answer": "This is a picture of a beautiful park. Children are playing on the swings and slides. Some people are walking on the path. There are many green trees and colourful flowers. A dog is chasing a ball. Everyone looks happy and is enjoying the fresh air." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the riddle: 'I have a face but no eyes. I have hands but no arms. I tell you something but I cannot speak. What am I?'\nQ1. What does the object have?\nQ2. What does it not have?\nQ3. What is the answer to the riddle?", "marks": 6, "answer": "1. It has a face and hands.\n2. It does not have eyes and arms.\n3. A Clock." },
                        { "id": 20, "question": "Write a short story with the moral 'Slow and steady wins the race'.", "marks": 6, "answer": "Once a hare and a tortoise had a race. The hare ran fast and slept under a tree. The tortoise walked slowly but did not stop. When the hare woke up, he saw the tortoise had already reached the finish line. The tortoise won the race. Moral: Slow and steady wins the race." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Foster cognitive development. - Set B",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Foster cognitive development. - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar & Logic (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Rearrange: 'milk / gives / cow / The / us'", "options": ["The cow gives us milk", "Cow gives us milk The", "The milk gives us cow", "Us gives cow milk The"], "answer": "The cow gives us milk", "marks": 1 },
                        { "id": 2, "question": "Find the odd one out:", "options": ["Car", "Bus", "Truck", "Ship"], "answer": "Ship", "marks": 1 },
                        { "id": 3, "question": "Complete: Pen : Write :: Knife : ______", "options": ["Cut", "Eat", "Sharp", "Steel"], "answer": "Cut", "marks": 1 },
                        { "id": 4, "question": "Which word is spelled correctly?", "options": ["Tommorow", "Tomorrow", "Tommorrow", "Tumorrow"], "answer": "Tomorrow", "marks": 1 },
                        { "id": 5, "question": "Identify the tense: 'She was dancing.'", "options": ["Simple Past", "Past Continuous", "Past Perfect", "Present Continuous"], "answer": "Past Continuous", "marks": 1 },
                        { "id": 6, "question": "Choose the correct prefix for 'Possible':", "options": ["Un", "Im", "Dis", "In"], "answer": "Im", "marks": 1 },
                        { "id": 7, "question": "Choose the correct suffix for 'Teach':", "options": ["er", "ment", "ness", "ful"], "answer": "er", "marks": 1 },
                        { "id": 8, "question": "A place where coins are made is called:", "options": ["Bank", "Mint", "Factory", "Press"], "answer": "Mint", "marks": 1 },
                        { "id": 9, "question": "The sound made by a Lion is:", "options": ["Bark", "Roar", "Mew", "Trumpet"], "answer": "Roar", "marks": 1 },
                        { "id": 10, "question": "Which is a proper noun?", "options": ["City", "London", "Country", "Village"], "answer": "London", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary & Usage (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Give one word for: 'A book of maps'.", "marks": 1, "answer": "Atlas" },
                        { "id": 12, "question": "Use 'Watch' in a sentence as a noun.", "marks": 1, "answer": "I have a new watch." },
                        { "id": 13, "question": "Use 'Watch' in a sentence as a verb.", "marks": 1, "answer": "I watch TV every evening." },
                        { "id": 14, "question": "Correct the sentence: 'He run fastly.'", "marks": 1, "answer": "He runs fast." },
                        { "id": 15, "question": "What is the homophone of 'Sun'?", "marks": 1, "answer": "Son" },
                        { "id": 16, "question": "Give the plural of 'Woman'.", "marks": 1, "answer": "Women" }
                    ]
                },
                {
                    "name": "Section C: Creative Thinking (12 marks)",
                    "questions": [
                        { "id": 17, "question": "If you were the Principal of your school for one day, what would you do?", "marks": 6, "answer": "If I were the Principal for one day, I would make the library period longer so everyone can read more stories. I would organize a sports competition for all classes. I would ensure that the canteen serves healthy and tasty food. I would also plant more trees in the school garden." },
                        { "id": 18, "question": "Describe your favourite toy.", "marks": 6, "answer": "My favourite toy is a remote-controlled car. It is red in colour and runs very fast. It has lights that glow when it moves. I play with it in the evening. I take good care of it and keep it in a box. It was a gift from my father." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the riddle: 'I am tall when I am young, and I am short when I am old. I give light. What am I?'\nQ1. When is it tall?\nQ2. When is it short?\nQ3. What is the answer?", "marks": 6, "answer": "1. It is tall when it is young.\n2. It is short when it is old.\n3. A Candle." },
                        { "id": 20, "question": "Write a short story about 'The Thirsty Crow'.", "marks": 6, "answer": "A thirsty crow found a pot with very little water. He could not reach it. He saw some pebbles nearby. He picked them up one by one and dropped them into the pot. The water level rose up. The crow drank the water and flew away happily. Moral: Where there is a will, there is a way." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Foster cognitive development. - Set C",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Foster cognitive development. - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Grammar & Logic (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Rearrange: 'blue / sky / The / is'", "options": ["The sky is blue", "Blue is the sky", "Sky is the blue", "The blue is sky"], "answer": "The sky is blue", "marks": 1 },
                        { "id": 2, "question": "Find the odd one out:", "options": ["Table", "Chair", "Bed", "Spoon"], "answer": "Spoon", "marks": 1 },
                        { "id": 3, "question": "Complete: Eye : See :: Ear : ______", "options": ["Hear", "Smell", "Taste", "Touch"], "answer": "Hear", "marks": 1 },
                        { "id": 4, "question": "Which word is spelled correctly?", "options": ["Vacation", "Vacaition", "Vacasion", "Vaction"], "answer": "Vacation", "marks": 1 },
                        { "id": 5, "question": "Identify the tense: 'He will be sleeping.'", "options": ["Future Continuous", "Simple Future", "Future Perfect", "Present Continuous"], "answer": "Future Continuous", "marks": 1 },
                        { "id": 6, "question": "Choose the correct prefix for 'Agree':", "options": ["Dis", "Un", "Im", "In"], "answer": "Dis", "marks": 1 },
                        { "id": 7, "question": "Choose the correct suffix for 'Friend':", "options": ["ship", "ment", "tion", "ness"], "answer": "ship", "marks": 1 },
                        { "id": 8, "question": "A person who flies an aeroplane is a:", "options": ["Driver", "Pilot", "Captain", "Sailor"], "answer": "Pilot", "marks": 1 },
                        { "id": 9, "question": "The home of a Dog is called:", "options": ["Den", "Kennel", "Shed", "Stable"], "answer": "Kennel", "marks": 1 },
                        { "id": 10, "question": "Which is a collective noun?", "options": ["Army", "Soldier", "Gun", "War"], "answer": "Army", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary & Usage (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Give one word for: 'A person who paints'.", "marks": 1, "answer": "Painter / Artist" },
                        { "id": 12, "question": "Use 'Bat' in a sentence as a bird/animal.", "marks": 1, "answer": "The bat hangs upside down." },
                        { "id": 13, "question": "Use 'Bat' in a sentence as a sports equipment.", "marks": 1, "answer": "I play cricket with my new bat." },
                        { "id": 14, "question": "Correct the sentence: 'She is my cousin sister.'", "marks": 1, "answer": "She is my cousin." },
                        { "id": 15, "question": "What is the homophone of 'Two'?", "marks": 1, "answer": "To / Too" },
                        { "id": 16, "question": "Give the plural of 'Foot'.", "marks": 1, "answer": "Feet" }
                    ]
                },
                {
                    "name": "Section C: Creative Thinking (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Imagine you found a talking parrot. Write a dialogue between you and the parrot.", "marks": 6, "answer": "Me: Hello! Can you really talk?\nParrot: Yes, I can talk just like you.\nMe: That is amazing! What is your name?\nParrot: My name is Mithu. Do you have a green chilly?\nMe: Yes, I will get one for you. Will you be my friend?\nParrot: Yes, I would love to be your friend." },
                        { "id": 18, "question": "Write 5 sentences about 'My Mother'.", "marks": 6, "answer": "1. My mother is the most important person in my life.\n2. She takes care of everyone in the family.\n3. She cooks delicious food for us.\n4. She helps me with my homework.\n5. I love my mother very much." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the riddle: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?'\nQ1. What does it have?\nQ2. What does it not have?\nQ3. What is the answer?", "marks": 6, "answer": "1. It has cities, mountains, and water.\n2. It does not have houses, trees, and fish.\n3. A Map." },
                        { "id": 20, "question": "Write a short story about 'The Lion and the Mouse'.", "marks": 6, "answer": "A lion caught a mouse but let it go. Later, the lion got trapped in a net. The mouse heard the lion's roar and came to help. The mouse cut the net with its sharp teeth. The lion was free. They became good friends. Moral: Even a small friend can be a great help." }
                    ]
                }
            ]
        }
    },
    // 4. Encouraging children to equally participate in an interactive session.
    {
        title: "ENGLISH LANGUAGE Practice Paper - Encouraging children to equally participate in an interactive session. - Set A",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Encouraging children to equally participate in an interactive session. - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Interactive Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which question is correct?", "options": ["Where you are going?", "Where are you going?", "Where going you are?", "You are going where?"], "answer": "Where are you going?", "marks": 1 },
                        { "id": 2, "question": "Complete the dialogue: A: How are you? B: ______", "options": ["I am fine, thank you.", "I am going.", "Yes.", "No."], "answer": "I am fine, thank you.", "marks": 1 },
                        { "id": 3, "question": "Choose the correct tag: He is happy, ______?", "options": ["isn't he", "is he", "was he", "doesn't he"], "answer": "isn't he", "marks": 1 },
                        { "id": 4, "question": "Which is a polite request?", "options": ["Give me water.", "I want water.", "Please give me a glass of water.", "Water give me."], "answer": "Please give me a glass of water.", "marks": 1 },
                        { "id": 5, "question": "Choose the correct response: 'Thank you.'", "options": ["Welcome.", "You're welcome.", "Yes.", "Bye."], "answer": "You're welcome.", "marks": 1 },
                        { "id": 6, "question": "Identify the subject: 'Who is knocking at the door?'", "options": ["Who", "is", "knocking", "door"], "answer": "Who", "marks": 1 },
                        { "id": 7, "question": "Choose the correct modal: I ______ swim.", "options": ["can", "should", "must", "ought"], "answer": "can", "marks": 1 },
                        { "id": 8, "question": "Which sentence shows surprise?", "options": ["What is your name?", "Wow! What a beautiful flower!", "Sit down.", "I am eating."], "answer": "Wow! What a beautiful flower!", "marks": 1 },
                        { "id": 9, "question": "Choose the correct greeting for morning:", "options": ["Good Night", "Good Evening", "Good Morning", "Bye"], "answer": "Good Morning", "marks": 1 },
                        { "id": 10, "question": "Complete: 'May I ______ in?'", "options": ["come", "came", "coming", "comes"], "answer": "come", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Communication Skills (6 marks)",
                    "questions": [
                        { "id": 11, "question": "How do you ask for permission to leave the class?", "marks": 1, "answer": "May I leave the class, please?" },
                        { "id": 12, "question": "What do you say when you hurt someone by mistake?", "marks": 1, "answer": "I am sorry." },
                        { "id": 13, "question": "How do you introduce yourself?", "marks": 1, "answer": "Hello, my name is [Name]." },
                        { "id": 14, "question": "What do you say when someone helps you?", "marks": 1, "answer": "Thank you." },
                        { "id": 15, "question": "Correct the sentence: 'I am agree with you.'", "marks": 1, "answer": "I agree with you." },
                        { "id": 16, "question": "Make a question for: 'My name is Raj.'", "marks": 1, "answer": "What is your name?" }
                    ]
                },
                {
                    "name": "Section C: Interactive Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a dialogue between a shopkeeper and a customer buying a pen.", "marks": 6, "answer": "Customer: Hello, do you have a blue pen?\nShopkeeper: Yes, I have many. Which one would you like?\nCustomer: Show me that Parker pen.\nShopkeeper: Here it is. It costs Rs. 50.\nCustomer: Okay, I will take it. Here is the money.\nShopkeeper: Thank you. Visit again." },
                        { "id": 18, "question": "Write a speech (5-6 lines) on 'Save Water' for your school assembly.", "marks": 6, "answer": "Good morning everyone. Today I want to talk about saving water. Water is very precious. We cannot live without it. We should not waste water while brushing or bathing. We must fix leaking taps. Let us pledge to save every drop of water. Thank you." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the conversation:\nTeacher: Why are you late, Tom?\nTom: I missed the bus, Ma'am.\nTeacher: Try to be on time from tomorrow.\nTom: Yes Ma'am, I am sorry.\nQ1. Who is late?\nQ2. Why was he late?\nQ3. What did the teacher say?", "marks": 6, "answer": "1. Tom is late.\n2. He missed the bus.\n3. The teacher told him to be on time from tomorrow." },
                        { "id": 20, "question": "Write a paragraph on 'My Favourite Teacher'.", "marks": 6, "answer": "My favourite teacher is Mrs. Sharma. She teaches us English. She is very kind and explains everything clearly. She tells us interesting stories. She helps us when we have doubts. All students love and respect her very much." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Encouraging children to equally participate in an interactive session. - Set B",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Encouraging children to equally participate in an interactive session. - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Interactive Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which question is correct?", "options": ["What you are doing?", "What are you doing?", "What doing you are?", "You are doing what?"], "answer": "What are you doing?", "marks": 1 },
                        { "id": 2, "question": "Complete the dialogue: A: Can you help me? B: ______", "options": ["Yes, sure.", "I don't know.", "Bye.", "No help."], "answer": "Yes, sure.", "marks": 1 },
                        { "id": 3, "question": "Choose the correct tag: She can dance, ______?", "options": ["can't she", "can she", "is she", "does she"], "answer": "can't she", "marks": 1 },
                        { "id": 4, "question": "Which is a command?", "options": ["Please sit down.", "Sit down.", "May I sit?", "I am sitting."], "answer": "Sit down.", "marks": 1 },
                        { "id": 5, "question": "Choose the correct response: 'Happy Birthday!'", "options": ["Same to you.", "Thank you.", "Welcome.", "Good."], "answer": "Thank you.", "marks": 1 },
                        { "id": 6, "question": "Identify the object: 'He kicked the ball.'", "options": ["He", "kicked", "ball", "the"], "answer": "ball", "marks": 1 },
                        { "id": 7, "question": "Choose the correct modal: You ______ respect elders.", "options": ["should", "can", "might", "may"], "answer": "should", "marks": 1 },
                        { "id": 8, "question": "Which sentence shows happiness?", "options": ["Hurrah! We won.", "Alas! He died.", "Oh no.", "Sit here."], "answer": "Hurrah! We won.", "marks": 1 },
                        { "id": 9, "question": "Choose the correct greeting for night:", "options": ["Good Morning", "Good Night", "Hello", "Hi"], "answer": "Good Night", "marks": 1 },
                        { "id": 10, "question": "Complete: 'Could you ______ pass the salt?'", "options": ["please", "kindly", "sure", "yes"], "answer": "please", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Communication Skills (6 marks)",
                    "questions": [
                        { "id": 11, "question": "How do you ask for the time?", "marks": 1, "answer": "What is the time, please?" },
                        { "id": 12, "question": "What do you say when you meet someone for the first time?", "marks": 1, "answer": "Nice to meet you." },
                        { "id": 13, "question": "How do you apologize?", "marks": 1, "answer": "I am sorry." },
                        { "id": 14, "question": "What do you say when you want to enter a room?", "marks": 1, "answer": "May I come in?" },
                        { "id": 15, "question": "Correct the sentence: 'I am going to home.'", "marks": 1, "answer": "I am going home." },
                        { "id": 16, "question": "Make a question for: 'I live in Delhi.'", "marks": 1, "answer": "Where do you live?" }
                    ]
                },
                {
                    "name": "Section C: Interactive Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a dialogue between a doctor and a patient.", "marks": 6, "answer": "Patient: Good morning, Doctor.\nDoctor: Good morning. What is the problem?\nPatient: I have a headache and fever.\nDoctor: Let me check your temperature. Yes, you have a fever. Take this medicine twice a day.\nPatient: Thank you, Doctor.\nDoctor: Get well soon." },
                        { "id": 18, "question": "Write a short speech on 'Health is Wealth'.", "marks": 6, "answer": "Respected teachers and friends, today I will speak on 'Health is Wealth'. Good health is the most precious gift. If we are healthy, we can do anything. To stay healthy, we must eat good food, exercise daily, and sleep well. We should avoid junk food. Thank you." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the conversation:\nMother: Did you finish your homework?\nRahul: No Mom, I was playing.\nMother: That is not good. Finish it now before dinner.\nRahul: Okay Mom, I will do it right away.\nQ1. What did Rahul not finish?\nQ2. What was he doing?\nQ3. When does he have to finish it?", "marks": 6, "answer": "1. Rahul did not finish his homework.\n2. He was playing.\n3. He has to finish it before dinner." },
                        { "id": 20, "question": "Write a paragraph on 'My Family'.", "marks": 6, "answer": "I have a small and happy family. There are four members in my family: my father, mother, sister, and me. My father is a doctor and my mother is a teacher. We eat dinner together every night. We help each other and love each other very much." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - Encouraging children to equally participate in an interactive session. - Set C",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - Encouraging children to equally participate in an interactive session. - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Interactive Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which question is correct?", "options": ["When you will come?", "When will you come?", "When come you will?", "You will come when?"], "answer": "When will you come?", "marks": 1 },
                        { "id": 2, "question": "Complete the dialogue: A: Where is the library? B: ______", "options": ["It is on the second floor.", "Yes.", "I like books.", "Library is good."], "answer": "It is on the second floor.", "marks": 1 },
                        { "id": 3, "question": "Choose the correct tag: They are playing, ______?", "options": ["aren't they", "are they", "do they", "did they"], "answer": "aren't they", "marks": 1 },
                        { "id": 4, "question": "Which is a suggestion?", "options": ["Let's go for a walk.", "Go for a walk.", "I am walking.", "Walk."], "answer": "Let's go for a walk.", "marks": 1 },
                        { "id": 5, "question": "Choose the correct response: 'I am sorry.'", "options": ["It's okay.", "Thank you.", "Yes.", "Good."], "answer": "It's okay.", "marks": 1 },
                        { "id": 6, "question": "Identify the predicate: 'The stars twinkle at night.'", "options": ["The stars", "twinkle at night", "twinkle", "night"], "answer": "twinkle at night", "marks": 1 },
                        { "id": 7, "question": "Choose the correct modal: It ______ rain today.", "options": ["may", "should", "must", "can"], "answer": "may", "marks": 1 },
                        { "id": 8, "question": "Which sentence shows sadness?", "options": ["Alas! I lost my pen.", "Hurrah!", "Wow!", "Hello."], "answer": "Alas! I lost my pen.", "marks": 1 },
                        { "id": 9, "question": "Choose the correct greeting for afternoon:", "options": ["Good Afternoon", "Good Morning", "Good Night", "Bye"], "answer": "Good Afternoon", "marks": 1 },
                        { "id": 10, "question": "Complete: 'Would you like ______ tea?'", "options": ["some", "any", "many", "few"], "answer": "some", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Communication Skills (6 marks)",
                    "questions": [
                        { "id": 11, "question": "How do you ask for a pen?", "marks": 1, "answer": "Can I borrow your pen, please?" },
                        { "id": 12, "question": "What do you say when you are leaving?", "marks": 1, "answer": "Goodbye / See you later." },
                        { "id": 13, "question": "How do you wish someone on their birthday?", "marks": 1, "answer": "Happy Birthday!" },
                        { "id": 14, "question": "What do you say when you don't understand something?", "marks": 1, "answer": "Could you please repeat that?" },
                        { "id": 15, "question": "Correct the sentence: 'She don't know.'", "marks": 1, "answer": "She doesn't know." },
                        { "id": 16, "question": "Make a question for: 'I am 12 years old.'", "marks": 1, "answer": "How old are you?" }
                    ]
                },
                {
                    "name": "Section C: Interactive Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write a dialogue between two friends planning a picnic.", "marks": 6, "answer": "Amit: Let's go for a picnic this Sunday.\nSumit: That's a great idea! Where should we go?\nAmit: How about the City Park?\nSumit: Yes, it is a nice place. I will bring sandwiches.\nAmit: I will bring fruits and juice. Let's invite Rahul too.\nSumit: Okay, I will call him." },
                        { "id": 18, "question": "Write a short speech on 'My Country'.", "marks": 6, "answer": "Hello everyone. I love my country, India. It is a beautiful land with many cultures and languages. We have great mountains, rivers, and forests. People of different religions live here together in peace. I am proud to be an Indian. Jai Hind." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the conversation:\nPassenger: Does this train go to Mumbai?\nTicket Collector: Yes, it does.\nPassenger: When will it leave?\nTicket Collector: It will leave at 10:00 AM.\nQ1. Where does the train go?\nQ2. Who is asking the questions?\nQ3. When will the train leave?", "marks": 6, "answer": "1. The train goes to Mumbai.\n2. The passenger is asking the questions.\n3. It will leave at 10:00 AM." },
                        { "id": 20, "question": "Write a paragraph on 'A Rainy Day'.", "marks": 6, "answer": "Yesterday was a rainy day. The sky was covered with dark clouds. It started raining heavily in the morning. I could not go to play outside. I sat by the window and watched the rain. My mother made hot pakoras for us. I made paper boats and sailed them in the puddles." }
                    ]
                }
            ]
        }
    },
    // 5. General / Introduction
    {
        title: "ENGLISH LANGUAGE Practice Paper - General / Introduction - Set A",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - General / Introduction - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Basic Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "There are ______ vowels in English alphabet.", "options": ["3", "4", "5", "6"], "answer": "5", "marks": 1 },
                        { "id": 2, "question": "Which is a noun?", "options": ["Run", "Fast", "Boy", "Blue"], "answer": "Boy", "marks": 1 },
                        { "id": 3, "question": "Which is a verb?", "options": ["Table", "Eat", "Good", "She"], "answer": "Eat", "marks": 1 },
                        { "id": 4, "question": "Which is an adjective?", "options": ["Red", "Car", "Drive", "Man"], "answer": "Red", "marks": 1 },
                        { "id": 5, "question": "Which is a pronoun?", "options": ["Rahul", "He", "Book", "Pen"], "answer": "He", "marks": 1 },
                        { "id": 6, "question": "Opposite of 'Good' is:", "options": ["Bad", "Nice", "Fine", "Well"], "answer": "Bad", "marks": 1 },
                        { "id": 7, "question": "Plural of 'Cat' is:", "options": ["Cats", "Cates", "Cat", "Kitten"], "answer": "Cats", "marks": 1 },
                        { "id": 8, "question": "Past tense of 'Go' is:", "options": ["Goed", "Gone", "Went", "Going"], "answer": "Went", "marks": 1 },
                        { "id": 9, "question": "A sentence always starts with a:", "options": ["Small letter", "Capital letter", "Number", "Symbol"], "answer": "Capital letter", "marks": 1 },
                        { "id": 10, "question": "A sentence ends with a:", "options": ["Comma", "Full stop", "Hyphen", "Dash"], "answer": "Full stop", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Name a fruit that is red.", "marks": 1, "answer": "Apple" },
                        { "id": 12, "question": "Name an animal that barks.", "marks": 1, "answer": "Dog" },
                        { "id": 13, "question": "What is the colour of the sky?", "marks": 1, "answer": "Blue" },
                        { "id": 14, "question": "How many days are there in a week?", "marks": 1, "answer": "7" },
                        { "id": 15, "question": "Write the number name for 10.", "marks": 1, "answer": "Ten" },
                        { "id": 16, "question": "What do you use to write?", "marks": 1, "answer": "Pen / Pencil" }
                    ]
                },
                {
                    "name": "Section C: Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write 5 lines about yourself.", "marks": 6, "answer": "1. My name is [Name].\n2. I am [Age] years old.\n3. I study in Class 6.\n4. I live in [City].\n5. I like to play cricket." },
                        { "id": 18, "question": "Write 5 lines about your favourite fruit.", "marks": 6, "answer": "1. My favourite fruit is Mango.\n2. It is yellow in colour.\n3. It is very sweet and juicy.\n4. It is called the king of fruits.\n5. It comes in summer season." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'Tom has a red ball. He plays with it in the park. His dog, Spot, runs after the ball. They have fun together.'\nQ1. What does Tom have?\nQ2. Where does he play?\nQ3. Who is Spot?", "marks": 6, "answer": "1. Tom has a red ball.\n2. He plays in the park.\n3. Spot is his dog." },
                        { "id": 20, "question": "Write the days of the week in order.", "marks": 6, "answer": "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - General / Introduction - Set B",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - General / Introduction - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Basic Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which letter is a vowel?", "options": ["B", "C", "E", "F"], "answer": "E", "marks": 1 },
                        { "id": 2, "question": "Which is a proper noun?", "options": ["City", "India", "Country", "Place"], "answer": "India", "marks": 1 },
                        { "id": 3, "question": "Which is an action word?", "options": ["Sleep", "Bed", "Pillow", "Night"], "answer": "Sleep", "marks": 1 },
                        { "id": 4, "question": "Which is a describing word?", "options": ["Tall", "Boy", "Girl", "Man"], "answer": "Tall", "marks": 1 },
                        { "id": 5, "question": "Which is a preposition?", "options": ["On", "Table", "Chair", "Sit"], "answer": "On", "marks": 1 },
                        { "id": 6, "question": "Opposite of 'Big' is:", "options": ["Large", "Small", "Huge", "Tall"], "answer": "Small", "marks": 1 },
                        { "id": 7, "question": "Plural of 'Box' is:", "options": ["Boxs", "Boxes", "Boxies", "Boxe"], "answer": "Boxes", "marks": 1 },
                        { "id": 8, "question": "Past tense of 'Come' is:", "options": ["Comed", "Came", "Coming", "Comes"], "answer": "Came", "marks": 1 },
                        { "id": 9, "question": "We use 'An' before words starting with:", "options": ["Vowel sound", "Consonant sound", "Any letter", "Numbers"], "answer": "Vowel sound", "marks": 1 },
                        { "id": 10, "question": "A question ends with a:", "options": ["Full stop", "Question mark", "Comma", "Dash"], "answer": "Question mark", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Name a vegetable that is orange.", "marks": 1, "answer": "Carrot" },
                        { "id": 12, "question": "Name an animal that gives milk.", "marks": 1, "answer": "Cow" },
                        { "id": 13, "question": "What is the colour of grass?", "marks": 1, "answer": "Green" },
                        { "id": 14, "question": "How many months are there in a year?", "marks": 1, "answer": "12" },
                        { "id": 15, "question": "Write the number name for 5.", "marks": 1, "answer": "Five" },
                        { "id": 16, "question": "What do you use to cut paper?", "marks": 1, "answer": "Scissors" }
                    ]
                },
                {
                    "name": "Section C: Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write 5 lines about your best friend.", "marks": 6, "answer": "1. My best friend is [Name].\n2. He/She is very kind.\n3. We play together.\n4. We share our lunch.\n5. I like him/her very much." },
                        { "id": 18, "question": "Write 5 lines about your favourite animal.", "marks": 6, "answer": "1. My favourite animal is the Elephant.\n2. It is very big and strong.\n3. It has a long trunk.\n4. It eats leaves and bananas.\n5. It lives in the forest." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'Mary has a little lamb. Its fleece is white as snow. Everywhere that Mary goes, the lamb is sure to go.'\nQ1. What does Mary have?\nQ2. What is the colour of its fleece?\nQ3. Does the lamb follow Mary?", "marks": 6, "answer": "1. Mary has a little lamb.\n2. Its fleece is white as snow.\n3. Yes, the lamb follows Mary everywhere." },
                        { "id": 20, "question": "Write the names of 6 colours.", "marks": 6, "answer": "Red, Blue, Green, Yellow, Orange, Purple." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LANGUAGE Practice Paper - General / Introduction - Set C",
        content: {
            "title": "ENGLISH LANGUAGE Practice Paper - General / Introduction - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LANGUAGE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Basic Grammar (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Which letter is a consonant?", "options": ["A", "I", "O", "B"], "answer": "B", "marks": 1 },
                        { "id": 2, "question": "Which is a common noun?", "options": ["Delhi", "City", "Rohan", "Sunday"], "answer": "City", "marks": 1 },
                        { "id": 3, "question": "Which is a helping verb?", "options": ["Is", "Run", "Play", "Sing"], "answer": "Is", "marks": 1 },
                        { "id": 4, "question": "Which is an adverb?", "options": ["Slow", "Slowly", "Man", "Run"], "answer": "Slowly", "marks": 1 },
                        { "id": 5, "question": "Which is a conjunction?", "options": ["And", "Table", "Big", "She"], "answer": "And", "marks": 1 },
                        { "id": 6, "question": "Opposite of 'Hot' is:", "options": ["Cold", "Warm", "Fire", "Sun"], "answer": "Cold", "marks": 1 },
                        { "id": 7, "question": "Plural of 'Man' is:", "options": ["Mans", "Men", "Manes", "Mens"], "answer": "Men", "marks": 1 },
                        { "id": 8, "question": "Past tense of 'See' is:", "options": ["Seed", "Saw", "Seeing", "Seen"], "answer": "Saw", "marks": 1 },
                        { "id": 9, "question": "We use 'The' for:", "options": ["Specific things", "Any thing", "Names", "Verbs"], "answer": "Specific things", "marks": 1 },
                        { "id": 10, "question": "We use '!' for:", "options": ["Questions", "Strong feelings", "Pauses", "Ending sentences"], "answer": "Strong feelings", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Vocabulary (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Name a flower that is yellow.", "marks": 1, "answer": "Sunflower" },
                        { "id": 12, "question": "Name a bird that swims.", "marks": 1, "answer": "Duck" },
                        { "id": 13, "question": "What is the colour of milk?", "marks": 1, "answer": "White" },
                        { "id": 14, "question": "How many fingers do you have on one hand?", "marks": 1, "answer": "5" },
                        { "id": 15, "question": "Write the number name for 1.", "marks": 1, "answer": "One" },
                        { "id": 16, "question": "What do you use to brush your teeth?", "marks": 1, "answer": "Toothbrush" }
                    ]
                },
                {
                    "name": "Section C: Writing (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Write 5 lines about your house.", "marks": 6, "answer": "1. I live in a small house.\n2. It has two bedrooms and a kitchen.\n3. It has a small garden.\n4. It is painted white.\n5. I love my house." },
                        { "id": 18, "question": "Write 5 lines about your favourite game.", "marks": 6, "answer": "1. My favourite game is Cricket.\n2. I play it with my friends.\n3. We need a bat and a ball.\n4. I like batting.\n5. It is a very exciting game." }
                    ]
                },
                {
                    "name": "Section D: Comprehension (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Read the passage: 'The sun rises in the east. It gives us light and heat. Plants need sunlight to grow. The sun sets in the west.'\nQ1. Where does the sun rise?\nQ2. What does the sun give us?\nQ3. Why do plants need sunlight?", "marks": 6, "answer": "1. The sun rises in the east.\n2. It gives us light and heat.\n3. Plants need sunlight to grow." },
                        { "id": 20, "question": "Write the names of 6 animals.", "marks": 6, "answer": "Lion, Tiger, Dog, Cat, Elephant, Monkey." }
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
