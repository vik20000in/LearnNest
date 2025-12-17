
import { initDatabase } from '../db/database';

const papersToRegenerate = [
    // Prose: The Remarkable Rocket
    {
        title: "ENGLISH LITERATURE Practice Paper - Prose: The Remarkable Rocket-Oscar Wilde - Set A",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Prose: The Remarkable Rocket-Oscar Wilde - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Who is the author of 'The Remarkable Rocket'?", "options": ["Ruskin Bond", "Oscar Wilde", "Charles Dickens", "Mark Twain"], "answer": "Oscar Wilde", "marks": 1 },
                        { "id": 2, "question": "The King's son was going to marry a:", "options": ["French Princess", "Russian Princess", "Spanish Princess", "Italian Princess"], "answer": "Russian Princess", "marks": 1 },
                        { "id": 3, "question": "The Rocket believed he was:", "options": ["Ordinary", "Remarkable", "Useless", "Common"], "answer": "Remarkable", "marks": 1 },
                        { "id": 4, "question": "What did the Rocket do before the display?", "options": ["He slept", "He cried", "He laughed", "He danced"], "answer": "He cried", "marks": 1 },
                        { "id": 5, "question": "Why did the Rocket not go off with the others?", "options": ["He was broken", "He was damp", "He was forgotten", "He was too heavy"], "answer": "He was damp", "marks": 1 },
                        { "id": 6, "question": "Who found the Rocket in the mud?", "options": ["A dog", "A frog", "A duck", "A boy"], "answer": "A frog", "marks": 1 },
                        { "id": 7, "question": "The Rocket claimed his father was a:", "options": ["Catherine Wheel", "Roman Candle", "Rocket", "Cracker"], "answer": "Catherine Wheel", "marks": 1 },
                        { "id": 8, "question": "Where did the workmen throw the Rocket?", "options": ["In the river", "In a ditch", "Over the wall", "In the fire"], "answer": "Over the wall", "marks": 1 },
                        { "id": 9, "question": "Who finally set the Rocket on fire?", "options": ["The King", "Two little boys", "The Frog", "The Duck"], "answer": "Two little boys", "marks": 1 },
                        { "id": 10, "question": "Did anyone see the Rocket go off?", "options": ["Everyone", "The King", "Nobody", "The Princess"], "answer": "Nobody", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What was the occasion for the fireworks?", "marks": 1, "answer": "The marriage of the King's son." },
                        { "id": 12, "question": "How did the Russian Princess travel?", "marks": 1, "answer": "In a sledge drawn by six reindeer." },
                        { "id": 13, "question": "What did the Rocket say about himself?", "marks": 1, "answer": "That he was a very remarkable Rocket." },
                        { "id": 14, "question": "Why was the Rocket crying?", "marks": 1, "answer": "Because he was sensitive (or so he claimed)." },
                        { "id": 15, "question": "What did the Frog talk about?", "marks": 1, "answer": "The weather and himself." },
                        { "id": 16, "question": "What happened when the Rocket finally went off?", "marks": 1, "answer": "The boys were asleep and no one saw him." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Describe the character of the Remarkable Rocket.", "marks": 6, "answer": "The Rocket is arrogant, self-centered, and delusional. He believes he is superior to everyone else and that the world revolves around him. He mistakes his faults for virtues (e.g., his 'sensitivity' which ruins him)." },
                        { "id": 18, "question": "Why did the Rocket fail to perform at the wedding?", "marks": 6, "answer": "The Rocket failed to perform because he had made himself damp by crying tears of self-pity before the display. When the pyrotechnic tried to light him, the gunpowder was too wet to ignite." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "What is the moral of the story 'The Remarkable Rocket'?", "marks": 6, "answer": "The story teaches us about the dangers of arrogance and vanity. The Rocket's inflated ego leads to his downfall. He believes he is destined for greatness but ends up unnoticed and unappreciated because of his own foolish actions. It highlights that true worth is proven by actions, not boastful words." },
                        { "id": 20, "question": "Contrast the Rocket's opinion of himself with reality.", "marks": 6, "answer": "Opinion: The Rocket thought he was the highlight of the event, that he came from remarkable parents, and that his 'sensitivity' showed his superior nature. He believed his final explosion would be magnificent.\nReality: He was just one of many fireworks. His 'sensitivity' (crying) made him useless. He was thrown away as rubbish. His final explosion was small and unseen by anyone." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Prose: The Remarkable Rocket-Oscar Wilde - Set B",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Prose: The Remarkable Rocket-Oscar Wilde - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The Russian Princess had never seen ______ before.", "options": ["Snow", "Fireworks", "A King", "A Sledge"], "answer": "Fireworks", "marks": 1 },
                        { "id": 2, "question": "Who said 'Romance is dead'?", "options": ["The Rocket", "The King", "The Catherine Wheel", "The Roman Candle"], "answer": "The King", "marks": 1 },
                        { "id": 3, "question": "The Rocket called the Frog:", "options": ["Intelligent", "Ill-bred", "Handsome", "Quiet"], "answer": "Ill-bred", "marks": 1 },
                        { "id": 4, "question": "What did the boys use the Rocket for?", "options": ["To play catch", "To boil a kettle", "To build a house", "To scare a dog"], "answer": "To boil a kettle", "marks": 1 },
                        { "id": 5, "question": "The Rocket thought the King's son was:", "options": ["Lucky", "Unlucky", "Handsome", "Brave"], "answer": "Lucky", "marks": 1 },
                        { "id": 6, "question": "Who was the Rocket's mother?", "options": ["A Roman Candle", "A Catherine Wheel", "A Squib", "A Cracker"], "answer": "A Roman Candle", "marks": 1 },
                        { "id": 7, "question": "The Duck said that she had a ______ disposition.", "options": ["Middle-class", "Royal", "Wild", "Sad"], "answer": "Middle-class", "marks": 1 },
                        { "id": 8, "question": "What did the Rocket think when he was thrown in the ditch?", "options": ["It was a mistake", "He was being punished", "It was a holiday resort", "He was lost"], "answer": "It was a holiday resort", "marks": 1 },
                        { "id": 9, "question": "The Rocket went out with a:", "options": ["Bang", "Fizz", "Whimper", "Roar"], "answer": "Fizz", "marks": 1 },
                        { "id": 10, "question": "The stick of the Rocket fell on a:", "options": ["Dog", "Goose", "Frog", "Boy"], "answer": "Goose", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What did the King play?", "marks": 1, "answer": "The flute." },
                        { "id": 12, "question": "Why did the Rocket think the King was fortunate?", "marks": 1, "answer": "Because he was getting married on the day the Rocket was to be let off." },
                        { "id": 13, "question": "What did the workmen call the Rocket?", "marks": 1, "answer": "A bad rocket." },
                        { "id": 14, "question": "Who did the Rocket meet in the mud?", "marks": 1, "answer": "A Frog." },
                        { "id": 15, "question": "What did the Dragonfly tell the Rocket?", "marks": 1, "answer": "To look at the beautiful stars." },
                        { "id": 16, "question": "How did the Rocket feel when he finally exploded?", "marks": 1, "answer": "He felt delightful and thought he would set the world on fire." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How did the other fireworks react to the Rocket?", "marks": 6, "answer": "The other fireworks (Roman Candle, Catherine Wheel, Fire-balloon) were annoyed by the Rocket's arrogance. They tried to talk sense into him, telling him to keep himself dry, but he ignored them and called them common." },
                        { "id": 18, "question": "Explain the irony in the Rocket's end.", "marks": 6, "answer": "The irony is that the Rocket believed he would create a magnificent sensation that everyone would talk about. However, when he finally went off, it was in the daytime, nobody saw him, and the stick fell on a goose who just thought it was raining sticks. His 'grand moment' was completely unnoticed." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Discuss the theme of 'Self-Deception' in the story.", "marks": 6, "answer": "Self-deception is a central theme. The Rocket constantly lies to himself to maintain his ego. When he fails to go off, he convinces himself he is being saved for a special occasion. When thrown in the mud, he calls it a 'resort'. He refuses to accept reality, preferring his own twisted version where he is always the hero." },
                        { "id": 20, "question": "Compare the Rocket's attitude with that of the Duck.", "marks": 6, "answer": "Rocket: Arrogant, impractical, believes he is superior, lives in a fantasy world, looks down on others.\nDuck: Practical, down-to-earth, has a 'middle-class' disposition, focuses on simple things like food and family. The Duck represents common sense, which the Rocket completely lacks." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Prose: The Remarkable Rocket-Oscar Wilde - Set C",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Prose: The Remarkable Rocket-Oscar Wilde - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The fireworks were to be let off at:", "options": ["Noon", "Midnight", "Sunset", "Dawn"], "answer": "Midnight", "marks": 1 },
                        { "id": 2, "question": "The Rocket said he liked to do all the:", "options": ["Talking", "Listening", "Working", "Sleeping"], "answer": "Talking", "marks": 1 },
                        { "id": 3, "question": "Who said 'Bad Rocket! Bad Rocket!'?", "options": ["The Princess", "The Workmen", "The Frog", "The Boys"], "answer": "The Workmen", "marks": 1 },
                        { "id": 4, "question": "The Rocket thought the Frog was:", "options": ["A philosopher", "Extremely common", "A prince", "A singer"], "answer": "Extremely common", "marks": 1 },
                        { "id": 5, "question": "What did the Rocket think the boys were?", "options": ["Princes", "The Court Astronomer", "Servants", "Giants"], "answer": "The Court Astronomer", "marks": 1 },
                        { "id": 6, "question": "The Rocket believed he possessed:", "options": ["Imagination", "Wealth", "Power", "Magic"], "answer": "Imagination", "marks": 1 },
                        { "id": 7, "question": "The Princess was described as:", "options": ["A white rose", "A red rose", "A yellow tulip", "A bluebell"], "answer": "A white rose", "marks": 1 },
                        { "id": 8, "question": "The Rocket said 'I am not ______'.", "options": ["Happy", "Common", "Ready", "Wet"], "answer": "Common", "marks": 1 },
                        { "id": 9, "question": "What happened to the Rocket's gunpowder?", "options": ["It got wet", "It was stolen", "It exploded early", "It dried up"], "answer": "It got wet", "marks": 1 },
                        { "id": 10, "question": "The story is a:", "options": ["Fairy Tale", "Satire", "Mystery", "Biography"], "answer": "Satire", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What did the Rocket say about his tears?", "marks": 1, "answer": "He didn't care about them (even though they ruined him)." },
                        { "id": 12, "question": "Who swam away from the Rocket?", "marks": 1, "answer": "The Duck." },
                        { "id": 13, "question": "What did the boys use to light the fire?", "marks": 1, "answer": "The Rocket." },
                        { "id": 14, "question": "Did the Rocket realize he was a failure?", "marks": 1, "answer": "No, never." },
                        { "id": 15, "question": "What is a 'Court Astronomer'?", "marks": 1, "answer": "An official who studies stars for the King." },
                        { "id": 16, "question": "Why did the Rocket think he was being reserved?", "marks": 1, "answer": "Because he was left behind when others were fired." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Why did the Rocket call the Frog and the Duck 'common'?", "marks": 6, "answer": "He called them common because they talked about everyday things like the weather, food, and swimming. The Rocket considered himself an aristocrat with 'higher' thoughts and feelings, and he looked down on anyone who was practical or content with ordinary life." },
                        { "id": 18, "question": "What does the story tell us about 'Sensitivity'?", "marks": 6, "answer": "The story mocks false sensitivity. The Rocket claims to be very sensitive, but he is only sensitive about himself. He doesn't care about others' feelings. His 'sensitivity' (crying) is actually self-indulgence that leads to his own destruction." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the conversation between the Rocket and the Frog.", "marks": 6, "answer": "The Frog starts talking about the weather and croaking, saying it's delightful. The Rocket gets annoyed and says he wants to talk about himself. The Frog ignores him and keeps talking. The Rocket calls him ill-bred for not listening. The Frog says 'Good-bye' and leaves. The conversation highlights the Rocket's need for attention and the Frog's indifference." },
                        { "id": 20, "question": "Is 'The Remarkable Rocket' a funny story or a sad one? Give reasons.", "marks": 6, "answer": "It is a satirical comedy (funny) but with a tragic undertone. It is funny because of the Rocket's ridiculous statements and his delusion. We laugh at his arrogance. However, it is also slightly sad because he wastes his potential and dies alone and unnoticed, never realizing his own folly. Oscar Wilde uses humour to criticize vanity." }
                    ]
                }
            ]
        }
    },

    // Prose: The Mystery of a Cyber Friend
    {
        title: "ENGLISH LITERATURE Practice Paper - Prose: The Mystery of a Cyber Friend- Zac O' Yeah - Set A",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Prose: The Mystery of a Cyber Friend- Zac O' Yeah - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Who is the main character of the story?", "options": ["Shree", "Chaitra", "Akka", "Appa"], "answer": "Shree", "marks": 1 },
                        { "id": 2, "question": "What does Shree use to chat with friends?", "options": ["Telephone", "Computer", "Letter", "Radio"], "answer": "Computer", "marks": 1 },
                        { "id": 3, "question": "Who is Shree's cyber friend?", "options": ["Chaitra", "Akka", "A film star", "A stranger"], "answer": "Chaitra", "marks": 1 },
                        { "id": 4, "question": "How old does Chaitra claim to be?", "options": ["10", "12", "13", "15"], "answer": "13", "marks": 1 },
                        { "id": 5, "question": "Where does Shree decide to meet Chaitra?", "options": ["Park", "School", "Railway Station", "Cinema"], "answer": "Railway Station", "marks": 1 },
                        { "id": 6, "question": "Who saves Shree from the imposter?", "options": ["Her father", "Her teacher", "Akka", "Station Master"], "answer": "Akka", "marks": 1 },
                        { "id": 7, "question": "What was the real identity of 'Chaitra'?", "options": ["A young girl", "An old woman", "A middle-aged man", "A boy"], "answer": "A middle-aged man", "marks": 1 },
                        { "id": 8, "question": "Shree lives in:", "options": ["Mumbai", "Delhi", "Bangalore", "Chennai"], "answer": "Bangalore", "marks": 1 },
                        { "id": 9, "question": "Akka is Shree's:", "options": ["Mother", "Aunt", "Sister", "Friend"], "answer": "Aunt", "marks": 1 },
                        { "id": 10, "question": "The story warns us about:", "options": ["Cyber crime", "Traffic rules", "Exam stress", "Food habits"], "answer": "Cyber crime", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is Shree's full name?", "marks": 1, "answer": "Shree." },
                        { "id": 12, "question": "What profile picture did Chaitra use?", "marks": 1, "answer": "A picture of a film star (Madhuri Dixit)." },
                        { "id": 13, "question": "Why did Shree lie to her parents?", "marks": 1, "answer": "To go and meet her cyber friend." },
                        { "id": 14, "question": "Who accompanied Shree to the station?", "marks": 1, "answer": "Akka (secretly followed her)." },
                        { "id": 15, "question": "What did the man offer Shree?", "marks": 1, "answer": "Nothing mentioned, he just tried to approach her." },
                        { "id": 16, "question": "Did Shree delete her account later?", "marks": 1, "answer": "Yes (implied she stopped chatting with strangers)." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Why did Shree trust Chaitra?", "marks": 6, "answer": "Shree trusted Chaitra because they had been chatting for a long time. Chaitra seemed friendly, shared similar interests, and claimed to be a girl of her age. Shree was naive and didn't realize people can lie online." },
                        { "id": 18, "question": "How did Akka find out about Shree's plan?", "marks": 6, "answer": "Akka noticed Shree behaving suspiciously. She might have seen the messages on the computer or noticed Shree getting ready to go out alone. Being a responsible adult, she followed Shree to ensure her safety." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Describe the meeting at the railway station.", "marks": 6, "answer": "Shree waited at the station expecting a 13-year-old girl. Instead, a middle-aged man approached her, claiming to be Chaitra. Shree was shocked and terrified. The man tried to talk to her, but Akka intervened just in time and confronted the man, who then ran away." },
                        { "id": 20, "question": "What lesson does the story 'The Mystery of a Cyber Friend' teach us?", "marks": 6, "answer": "The story teaches a crucial lesson about internet safety. It warns children not to trust strangers online, as people can fake their identity. It highlights the dangers of sharing personal information or agreeing to meet online friends in real life without adult supervision. It emphasizes the importance of being open with parents/guardians." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Prose: The Mystery of a Cyber Friend- Zac O' Yeah - Set B",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Prose: The Mystery of a Cyber Friend- Zac O' Yeah - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Shree's parents wanted her to learn:", "options": ["Cooking", "Computer", "Singing", "Dancing"], "answer": "Computer", "marks": 1 },
                        { "id": 2, "question": "Chaitra said she studied in:", "options": ["Delhi Public School", "A boarding school", "Same school as Shree", "College"], "answer": "A boarding school", "marks": 1 },
                        { "id": 3, "question": "What did Shree tell her parents she was doing?", "options": ["Going to a friend's house", "Going to school", "Going to play", "Going to library"], "answer": "Going to a friend's house", "marks": 1 },
                        { "id": 4, "question": "The man at the station was wearing:", "options": ["A suit", "Jeans and T-shirt", "A uniform", "Not specified"], "answer": "Not specified", "marks": 1 },
                        { "id": 5, "question": "Shree felt ______ when she saw the man.", "options": ["Happy", "Scared", "Excited", "Angry"], "answer": "Scared", "marks": 1 },
                        { "id": 6, "question": "Akka is described as:", "options": ["Strict", "Smart and protective", "Careless", "Funny"], "answer": "Smart and protective", "marks": 1 },
                        { "id": 7, "question": "Cyber friends are:", "options": ["Always real", "Always fake", "Strangers on internet", "Best friends"], "answer": "Strangers on internet", "marks": 1 },
                        { "id": 8, "question": "Shree's computer was a gift for her:", "options": ["Birthday", "Exam results", "Festival", "None"], "answer": "Birthday", "marks": 1 },
                        { "id": 9, "question": "The imposter used a fake:", "options": ["Name and Photo", "Address", "Phone number", "All of these"], "answer": "All of these", "marks": 1 },
                        { "id": 10, "question": "Who called the police?", "options": ["Shree", "Akka", "Station Master", "Nobody"], "answer": "Nobody (Akka scared him away)", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What does 'Cyber Friend' mean?", "marks": 1, "answer": "A friend made on the internet." },
                        { "id": 12, "question": "Why was Shree excited?", "marks": 1, "answer": "She was going to meet her best friend Chaitra." },
                        { "id": 13, "question": "Did Chaitra really exist?", "marks": 1, "answer": "No, it was a fake identity." },
                        { "id": 14, "question": "How did the man react when he saw Akka?", "marks": 1, "answer": "He got scared and ran away." },
                        { "id": 15, "question": "What did Shree learn from this incident?", "marks": 1, "answer": "Never to trust strangers online." },
                        { "id": 16, "question": "Who is the author of the story?", "marks": 1, "answer": "Zac O' Yeah." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Why is it dangerous to share personal details online?", "marks": 6, "answer": "Sharing personal details like address, phone number, or school name allows strangers to locate you in real life. Criminals can use this information to harm, kidnap, or cheat children. The internet provides anonymity, so you never know who is really on the other side." },
                        { "id": 18, "question": "Describe Shree's relationship with her computer.", "marks": 6, "answer": "Shree was obsessed with her computer. She spent most of her time chatting online, making friends, and exploring the internet. It was her window to the world, but her addiction made her isolate herself from real family and friends, making her vulnerable." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "How did Akka save Shree? What does this show about her?", "marks": 6, "answer": "Akka followed Shree to the station. When the man approached Shree, Akka stepped in and hit him with her handbag (or confronted him boldly), threatening to call the police. This shows that Akka is observant, brave, and cares deeply for Shree. She acted as a guardian angel." },
                        { "id": 20, "question": "Write a character sketch of Shree.", "marks": 6, "answer": "Shree is a young, innocent, and naive girl. She is tech-savvy but lacks worldly wisdom. She is trusting and easily manipulated by the imposter. However, she is also lucky to have a protective aunt. The incident serves as a coming-of-age moment where she loses her innocence about the online world." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Prose: The Mystery of a Cyber Friend- Zac O' Yeah - Set C",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Prose: The Mystery of a Cyber Friend- Zac O' Yeah - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The genre of this story is:", "options": ["Comedy", "Thriller/Suspense", "Fantasy", "History"], "answer": "Thriller/Suspense", "marks": 1 },
                        { "id": 2, "question": "Shree's parents were:", "options": ["Strict", "Loving but busy", "Absent", "Cruel"], "answer": "Loving but busy", "marks": 1 },
                        { "id": 3, "question": "The man tried to lure Shree with:", "options": ["Chocolates", "Friendship", "Money", "Toys"], "answer": "Friendship", "marks": 1 },
                        { "id": 4, "question": "What time did they agree to meet?", "options": ["Morning", "Afternoon", "Evening", "Night"], "answer": "Not specified (usually day)", "marks": 1 },
                        { "id": 5, "question": "Shree realized her mistake:", "options": ["Before leaving home", "At the station", "Next day", "Never"], "answer": "At the station", "marks": 1 },
                        { "id": 6, "question": "The story advises children to be:", "options": ["Cyber smart", "Rude", "Silent", "Fearful"], "answer": "Cyber smart", "marks": 1 },
                        { "id": 7, "question": "Who is the antagonist (villain)?", "options": ["Shree", "Akka", "The Imposter", "The Computer"], "answer": "The Imposter", "marks": 1 },
                        { "id": 8, "question": "Shree's username was:", "options": ["Shree123", "SmartGirl", "Not mentioned", "Angel"], "answer": "Not mentioned", "marks": 1 },
                        { "id": 9, "question": "The station was:", "options": ["Crowded", "Empty", "Dark", "Noisy"], "answer": "Crowded", "marks": 1 },
                        { "id": 10, "question": "Akka used her ______ to hit the man.", "options": ["Umbrella", "Handbag", "Stick", "Shoe"], "answer": "Handbag", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is an 'Imposter'?", "marks": 1, "answer": "A person who pretends to be someone else." },
                        { "id": 12, "question": "Why did Shree go to the station alone?", "marks": 1, "answer": "Because it was a secret meeting." },
                        { "id": 13, "question": "What did the man look like?", "marks": 1, "answer": "Older, not like a 13-year-old girl." },
                        { "id": 14, "question": "Did Shree tell her parents later?", "marks": 1, "answer": "Yes (implied)." },
                        { "id": 15, "question": "Is chatting online safe?", "marks": 1, "answer": "Only with people you know in real life." },
                        { "id": 16, "question": "What is the moral?", "marks": 1, "answer": "Stranger Danger applies online too." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "What signs showed that Chaitra might be fake?", "marks": 6, "answer": "Retrospectively, Chaitra might have asked too many personal questions, agreed with everything Shree said to gain trust, and was too eager to meet in person. Using a film star's photo is also a red flag." },
                        { "id": 18, "question": "How did the incident change Shree?", "marks": 6, "answer": "The incident traumatized Shree but also made her wiser. She realized that the virtual world is not always safe. She likely became more cautious, spent less time on the computer, and valued her real-life relationships with Akka and her parents more." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Imagine you are Shree. Write a diary entry about the day at the station.", "marks": 6, "answer": "Dear Diary, Today was the scariest day of my life. I went to meet Chaitra, thinking she was my best friend. But 'she' was a man! A grown man! I froze with fear. If Akka hadn't been there, I don't know what would have happened. I was so foolish to trust a stranger. I will never lie to my parents again. The internet is a scary place." },
                        { "id": 20, "question": "What advice would you give to someone who wants to meet an online friend?", "marks": 6, "answer": "Advice:\n1. Don't do it. It's rarely safe.\n2. If you must, tell your parents.\n3. Take an adult with you.\n4. Meet in a very public place.\n5. Verify their identity through video call first (though even that can be faked).\n6. Ideally, keep online friends online." }
                    ]
                }
            ]
        }
    },

    // Poem: Stopping by Woods on a Snowy Evening
    {
        title: "ENGLISH LITERATURE Practice Paper - Poem: Stopping by Woods on a Snowy Evening- Robert Frost - Set A",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Poem: Stopping by Woods on a Snowy Evening- Robert Frost - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Who is the poet?", "options": ["William Wordsworth", "Robert Frost", "John Keats", "Ruskin Bond"], "answer": "Robert Frost", "marks": 1 },
                        { "id": 2, "question": "The woods belong to a man who lives in the:", "options": ["City", "Village", "Forest", "Hut"], "answer": "Village", "marks": 1 },
                        { "id": 3, "question": "The horse thinks it is ______ to stop.", "options": ["Good", "Queer", "Bad", "Tiring"], "answer": "Queer", "marks": 1 },
                        { "id": 4, "question": "The season described is:", "options": ["Summer", "Winter", "Autumn", "Spring"], "answer": "Winter", "marks": 1 },
                        { "id": 5, "question": "The horse gives his ______ bells a shake.", "options": ["Neck", "Harness", "Foot", "Tail"], "answer": "Harness", "marks": 1 },
                        { "id": 6, "question": "The woods are lovely, dark and:", "options": ["Deep", "Scary", "Green", "Cold"], "answer": "Deep", "marks": 1 },
                        { "id": 7, "question": "The poet has ______ to keep.", "options": ["Secrets", "Promises", "Money", "Time"], "answer": "Promises", "marks": 1 },
                        { "id": 8, "question": "How many miles to go before he sleeps?", "options": ["Ten", "Miles", "Hundred", "Few"], "answer": "Miles", "marks": 1 },
                        { "id": 9, "question": "The evening is the ______ of the year.", "options": ["Brightest", "Darkest", "Coldest", "Warmest"], "answer": "Darkest", "marks": 1 },
                        { "id": 10, "question": "The only other sound is the sweep of:", "options": ["Wind", "Birds", "River", "Cars"], "answer": "Wind", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "Where does the owner of the woods live?", "marks": 1, "answer": "In the village." },
                        { "id": 12, "question": "Why does the horse shake his bells?", "marks": 1, "answer": "To ask if there is some mistake." },
                        { "id": 13, "question": "What is filling up the woods?", "marks": 1, "answer": "Snow." },
                        { "id": 14, "question": "Is there a farmhouse nearby?", "marks": 1, "answer": "No." },
                        { "id": 15, "question": "What does 'sleep' symbolize?", "marks": 1, "answer": "Rest or Death." },
                        { "id": 16, "question": "What is 'downy flake'?", "marks": 1, "answer": "Soft feather-like snow." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Why does the poet stop by the woods?", "marks": 6, "answer": "The poet stops to watch the woods fill up with snow. He is captivated by the beauty, silence, and solitude of the scene. It offers him a moment of peace away from his journey." },
                        { "id": 18, "question": "Explain the significance of the horse's reaction.", "marks": 6, "answer": "The horse represents common sense or duty. It finds it strange ('queer') to stop in the middle of nowhere on a cold, dark night without a farmhouse nearby. The horse reminds the poet of reality and the journey ahead." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Explain the last stanza: 'The woods are lovely, dark and deep...'", "marks": 6, "answer": "The poet acknowledges the beauty and attraction of the woods (nature/rest/death). However, he remembers he has 'promises to keep' (responsibilities/duties) and 'miles to go' (life to live) before he can 'sleep' (rest/die). It is a conflict between the desire for rest and the call of duty." },
                        { "id": 20, "question": "What is the central theme of the poem?", "marks": 6, "answer": "The central theme is the journey of life and the conflict between the allure of nature/rest and the demands of worldly duties. The poem suggests that while we may pause to admire beauty, we must continue our journey and fulfill our obligations before we reach the end." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Poem: Stopping by Woods on a Snowy Evening- Robert Frost - Set B",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Poem: Stopping by Woods on a Snowy Evening- Robert Frost - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The poet stops between the woods and:", "options": ["The river", "The frozen lake", "The mountain", "The village"], "answer": "The frozen lake", "marks": 1 },
                        { "id": 2, "question": "The owner will not see the poet:", "options": ["Stopping here", "Running", "Sleeping", "Singing"], "answer": "Stopping here", "marks": 1 },
                        { "id": 3, "question": "The wind is described as:", "options": ["Easy", "Hard", "Fast", "Slow"], "answer": "Easy", "marks": 1 },
                        { "id": 4, "question": "The poem is written in:", "options": ["First person", "Third person", "Second person", "None"], "answer": "First person", "marks": 1 },
                        { "id": 5, "question": "The mood of the poem is:", "options": ["Happy", "Reflective/Quiet", "Angry", "Funny"], "answer": "Reflective/Quiet", "marks": 1 },
                        { "id": 6, "question": "The repetition of the last two lines emphasizes:", "options": ["The distance", "The determination", "The sleep", "The snow"], "answer": "The determination", "marks": 1 },
                        { "id": 7, "question": "Robert Frost is an ______ poet.", "options": ["Indian", "American", "British", "African"], "answer": "American", "marks": 1 },
                        { "id": 8, "question": "The horse is:", "options": ["Little", "Big", "White", "Black"], "answer": "Little", "marks": 1 },
                        { "id": 9, "question": "The snow is:", "options": ["Hard", "Soft (Downy)", "Wet", "Dirty"], "answer": "Soft (Downy)", "marks": 1 },
                        { "id": 10, "question": "The poet decides to:", "options": ["Stay", "Move on", "Sleep", "Build a house"], "answer": "Move on", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What time of day is it?", "marks": 1, "answer": "Evening." },
                        { "id": 12, "question": "Does the horse speak?", "marks": 1, "answer": "No, he shakes his bells." },
                        { "id": 13, "question": "What are the 'promises'?", "marks": 1, "answer": "Duties and obligations." },
                        { "id": 14, "question": "Is the lake frozen?", "marks": 1, "answer": "Yes." },
                        { "id": 15, "question": "Who is 'He' in the first line?", "marks": 1, "answer": "The owner of the woods." },
                        { "id": 16, "question": "What is the rhyme scheme of the first stanza?", "marks": 1, "answer": "AABA." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Describe the setting of the poem.", "marks": 6, "answer": "The setting is a lonely spot by the woods on a snowy winter evening. It is the 'darkest evening of the year' (possibly winter solstice). There is a frozen lake nearby. It is silent except for the wind and harness bells." },
                        { "id": 18, "question": "Why does the poet say 'He will not see me stopping here'?", "marks": 6, "answer": "The poet feels a bit like an intruder or trespasser watching someone else's woods. He is relieved that the owner is in the village and won't question why he is standing there in the cold staring at the snow." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "What does the poem tell us about nature?", "marks": 6, "answer": "Nature is portrayed as beautiful ('lovely'), mysterious ('dark and deep'), and peaceful. It has a hypnotic power that can make a person want to stay and forget the world. However, nature is also cold and indifferent to human affairs." },
                        { "id": 20, "question": "Explain the metaphorical meaning of 'Miles to go before I sleep'.", "marks": 6, "answer": "Literally, it means he has a long distance to travel before he can rest for the night. Metaphorically, 'miles to go' refers to the long life ahead with many tasks to complete, and 'sleep' refers to the final rest of death. It signifies perseverance." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Poem: Stopping by Woods on a Snowy Evening- Robert Frost - Set C",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Poem: Stopping by Woods on a Snowy Evening- Robert Frost - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The poem explores the conflict between:", "options": ["Man and Animal", "Duty and Desire", "Winter and Summer", "Rich and Poor"], "answer": "Duty and Desire", "marks": 1 },
                        { "id": 2, "question": "The sound of the wind is called:", "options": ["Roar", "Sweep", "Whistle", "Cry"], "answer": "Sweep", "marks": 1 },
                        { "id": 3, "question": "The poet is riding a:", "options": ["Horse", "Donkey", "Car", "Sledge"], "answer": "Horse (or horse-drawn sleigh)", "marks": 1 },
                        { "id": 4, "question": "The woods are filled with:", "options": ["Animals", "Snow", "People", "Houses"], "answer": "Snow", "marks": 1 },
                        { "id": 5, "question": "The poet feels ______ by the scene.", "options": ["Bored", "Frightened", "Enchanted", "Sad"], "answer": "Enchanted", "marks": 1 },
                        { "id": 6, "question": "The phrase 'dark and deep' suggests:", "options": ["Danger", "Mystery", "Ugliness", "Noise"], "answer": "Mystery", "marks": 1 },
                        { "id": 7, "question": "The poem has ______ stanzas.", "options": ["3", "4", "5", "6"], "answer": "4", "marks": 1 },
                        { "id": 8, "question": "The harness bells shake to ask if there is a:", "options": ["Danger", "Mistake", "Food", "Shelter"], "answer": "Mistake", "marks": 1 },
                        { "id": 9, "question": "The poet cannot stay because:", "options": ["It is too cold", "He has promises to keep", "The horse is tired", "He is afraid"], "answer": "He has promises to keep", "marks": 1 },
                        { "id": 10, "question": "The poem ends on a note of:", "options": ["Despair", "Resolution", "Joy", "Anger"], "answer": "Resolution", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What does 'queer' mean in the poem?", "marks": 1, "answer": "Strange or odd." },
                        { "id": 12, "question": "Name the two sounds mentioned.", "marks": 1, "answer": "Harness bells and wind." },
                        { "id": 13, "question": "Is the poet alone?", "marks": 1, "answer": "Yes (except for his horse)." },
                        { "id": 14, "question": "What season is it?", "marks": 1, "answer": "Winter." },
                        { "id": 15, "question": "Does the poet know the owner?", "marks": 1, "answer": "Yes (he thinks he knows who it is)." },
                        { "id": 16, "question": "What is the tone of the poem?", "marks": 1, "answer": "Calm, contemplative." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Why is the evening called the 'darkest evening of the year'?", "marks": 6, "answer": "It could refer to the winter solstice (December 21st), which has the longest night. It also sets a mood of gloom, coldness, and isolation, enhancing the contrast with the 'lovely' woods." },
                        { "id": 18, "question": "How does the horse serve as a foil to the poet?", "marks": 6, "answer": "The poet is lost in the beauty and dreaminess of the moment. The horse is practical, impatient, and focused on the destination (food/shelter). The horse pulls the poet back to reality." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Discuss the imagery used in the poem.", "marks": 6, "answer": "Visual Imagery: Woods filling with snow, frozen lake, dark evening. Auditory Imagery: Shake of harness bells, sweep of easy wind. Tactile Imagery: Cold, downy flake. These images create a vivid picture of a silent, snowy winter night." },
                        { "id": 20, "question": "Why is this poem considered a classic?", "marks": 6, "answer": "It is simple in language but deep in meaning. It speaks to a universal human experience: the struggle between taking a break to enjoy beauty and the pressure of responsibilities. The rhythm and rhyme are musical, and the ending lines are unforgettable." }
                    ]
                }
            ]
        }
    },

    // Poem: To India: My Native Land
    {
        title: "ENGLISH LITERATURE Practice Paper - Poem: To India: My Native Land- Henry Louis Vivian Derozio - Set A",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Poem: To India: My Native Land- Henry Louis Vivian Derozio - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Who is the poet?", "options": ["Rabindranath Tagore", "Henry Louis Vivian Derozio", "Sarojini Naidu", "Toru Dutt"], "answer": "Henry Louis Vivian Derozio", "marks": 1 },
                        { "id": 2, "question": "The poet addresses India as:", "options": ["Mother", "My Native Land", "Queen", "Goddess"], "answer": "My Native Land", "marks": 1 },
                        { "id": 3, "question": "In the past, India wore a:", "options": ["Crown", "Halo", "Beauteous Halo", "Garland"], "answer": "Beauteous Halo", "marks": 1 },
                        { "id": 4, "question": "Now, India is compared to a:", "options": ["Lion", "Eagle", "Slave", "King"], "answer": "Slave (implied by 'grovelling in the dust')", "marks": 1 },
                        { "id": 5, "question": "The eagle's pinion (wing) is:", "options": ["Strong", "Chained", "Broken", "Free"], "answer": "Chained", "marks": 1 },
                        { "id": 6, "question": "The poet wants to dive into the:", "options": ["Ocean", "Depths of time", "Future", "Sky"], "answer": "Depths of time", "marks": 1 },
                        { "id": 7, "question": "The poet seeks to bring back:", "options": ["Gold", "Glory", "Diamonds", "Spices"], "answer": "Glory", "marks": 1 },
                        { "id": 8, "question": "The poem is a:", "options": ["Sonnet", "Ballad", "Epic", "Haiku"], "answer": "Sonnet", "marks": 1 },
                        { "id": 9, "question": "The poet feels ______ about India's current state.", "options": ["Happy", "Sad/Ashamed", "Indifferent", "Proud"], "answer": "Sad/Ashamed", "marks": 1 },
                        { "id": 10, "question": "The 'minstrels' mentioned are:", "options": ["Soldiers", "Poets/Singers", "Kings", "Priests"], "answer": "Poets/Singers", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What does 'halo' signify?", "marks": 1, "answer": "Divinity, glory, and reverence." },
                        { "id": 12, "question": "Why is the eagle chained?", "marks": 1, "answer": "To show India's loss of freedom." },
                        { "id": 13, "question": "What is 'grovelling in the dust'?", "marks": 1, "answer": "Lying low in humiliation and defeat." },
                        { "id": 14, "question": "What reward does the poet ask for?", "marks": 1, "answer": "A kind wish from his country." },
                        { "id": 15, "question": "Who worshipped India's feet?", "marks": 1, "answer": "The world (Deity)." },
                        { "id": 16, "question": "What is the theme?", "marks": 1, "answer": "Patriotism and loss of past glory." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain the comparison of India to an Eagle.", "marks": 6, "answer": "The poet compares India to an eagle, a majestic and powerful bird that rules the skies. However, now the eagle is 'chained down at last', meaning India has lost its freedom and power under British rule. It can no longer fly high." },
                        { "id": 18, "question": "What does the poet mean by 'My country! in thy day of glory past'?", "marks": 6, "answer": "He is recalling the ancient times when India was rich, culturally advanced, and respected worldwide. He contrasts this 'day of glory' with the present miserable state of slavery." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "How does the poet plan to restore India's glory?", "marks": 6, "answer": "The poet plans to 'dive into the depths of time' and bring out the 'small fragments' of past glory that have been forgotten. Through his poetry ('labour'), he wants to remind the people of their great heritage and inspire them." },
                        { "id": 20, "question": "Discuss the patriotic feelings in the poem.", "marks": 6, "answer": "The poem is full of deep love and pain for the motherland. The poet is heartbroken to see India 'grovelling in the dust'. He reveres the past and is desperate to salvage some pride. He dedicates his work to his country, asking only for a 'kind wish' in return. It is a call to remember and rise." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Poem: To India: My Native Land- Henry Louis Vivian Derozio - Set B",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Poem: To India: My Native Land- Henry Louis Vivian Derozio - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The poet says India has no ______ now.", "options": ["Money", "Reverence", "People", "Land"], "answer": "Reverence", "marks": 1 },
                        { "id": 2, "question": "The 'wreath' refers to:", "options": ["Flowers", "Fame/Glory", "Chains", "Crown"], "answer": "Fame/Glory", "marks": 1 },
                        { "id": 3, "question": "The poet wants to save a few ______ from the wreck.", "options": ["Fragments", "Coins", "Stones", "Books"], "answer": "Fragments", "marks": 1 },
                        { "id": 4, "question": "The poem expresses:", "options": ["Joy", "Lament/Sorrow", "Anger", "Fear"], "answer": "Lament/Sorrow", "marks": 1 },
                        { "id": 5, "question": "Derozio is considered the first:", "options": ["Modern Indian Poet", "King", "Soldier", "Teacher"], "answer": "Modern Indian Poet", "marks": 1 },
                        { "id": 6, "question": "The 'minstrel' has no:", "options": ["Song", "Wreath", "Harp", "Voice"], "answer": "Wreath", "marks": 1 },
                        { "id": 7, "question": "The poet calls his effort:", "options": ["Play", "Labour", "Duty", "Magic"], "answer": "Labour", "marks": 1 },
                        { "id": 8, "question": "India is personified as a:", "options": ["Fallen Deity", "Warrior", "Child", "Bird"], "answer": "Fallen Deity", "marks": 1 },
                        { "id": 9, "question": "The tone changes from ______ to ______.", "options": ["Sad to Hopeful", "Happy to Sad", "Angry to Calm", "None"], "answer": "Sad to Hopeful (determination)", "marks": 1 },
                        { "id": 10, "question": "The poem is addressed to:", "options": ["The British", "The Indians", "India", "God"], "answer": "India", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is a 'Sonnet'?", "marks": 1, "answer": "A poem of 14 lines." },
                        { "id": 12, "question": "What does 'pinion' mean?", "marks": 1, "answer": "Wing." },
                        { "id": 13, "question": "Why is the minstrel silent?", "marks": 1, "answer": "Because there is no glory left to sing about." },
                        { "id": 14, "question": "What is 'wreck' referring to?", "marks": 1, "answer": "The ruined state of India." },
                        { "id": 15, "question": "What does the poet want to weave?", "marks": 1, "answer": "A wreath (of glory)." },
                        { "id": 16, "question": "Is the poet optimistic?", "marks": 1, "answer": "He is determined to revive the past." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Explain: 'Where is that glory, where that reverence now?'", "marks": 6, "answer": "This is a rhetorical question. The poet is lamenting the loss of India's ancient greatness. He asks where the respect and honor that India once commanded have gone, highlighting the contrast between the glorious past and the degraded present." },
                        { "id": 18, "question": "What is the 'wreck' mentioned in the poem?", "marks": 6, "answer": "The 'wreck' refers to the destruction of Indian culture, pride, and independence caused by colonization. The poet sees the current state of the country as a shipwreck from which he tries to salvage pieces." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Analyze the imagery of the 'Eagle' and the 'Halo'.", "marks": 6, "answer": "Halo: Represents holiness, light, and spiritual superiority. India was once seen as a goddess.\nEagle: Represents strength, freedom, and majesty. The chaining of the eagle is a powerful image of enslavement. These images vividly portray the fall from grace." },
                        { "id": 20, "question": "Why does the poet want to 'dive into the depths of time'?", "marks": 6, "answer": "He believes that the true history and glory of India are buried in the past ('depths of time'), forgotten by the current generation. He wants to act like a diver to retrieve these lost treasures (memories/glory) to restore national pride and inspire his countrymen." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Poem: To India: My Native Land- Henry Louis Vivian Derozio - Set C",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Poem: To India: My Native Land- Henry Louis Vivian Derozio - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "The poet refers to his country as:", "options": ["My Native Land", "My Home", "My Kingdom", "My Earth"], "answer": "My Native Land", "marks": 1 },
                        { "id": 2, "question": "The poem reflects the poet's:", "options": ["Greed", "Nationalism", "Hatred", "Joy"], "answer": "Nationalism", "marks": 1 },
                        { "id": 3, "question": "The 'beauteous halo' circled India's:", "options": ["Brow", "Feet", "Hands", "Heart"], "answer": "Brow", "marks": 1 },
                        { "id": 4, "question": "The poet asks for ______ reward.", "options": ["No", "One", "Many", "Gold"], "answer": "One", "marks": 1 },
                        { "id": 5, "question": "The 'monuments' of glory are:", "options": ["Built", "Destroyed", "Wasted", "Hidden"], "answer": "Wasted (implied)", "marks": 1 },
                        { "id": 6, "question": "The poet wants to bring the glory from:", "options": ["The sky", "The dark oblivion", "The British", "The future"], "answer": "The dark oblivion", "marks": 1 },
                        { "id": 7, "question": "The rhyme scheme of the sonnet is:", "options": ["ABAB...", "AABB...", "ABCD...", "Free verse"], "answer": "ABAB...", "marks": 1 },
                        { "id": 8, "question": "The poet is speaking to:", "options": ["His mother", "His country", "His friend", "The King"], "answer": "His country", "marks": 1 },
                        { "id": 9, "question": "The eagle is a symbol of:", "options": ["Weakness", "Power", "Peace", "Love"], "answer": "Power", "marks": 1 },
                        { "id": 10, "question": "The poet feels his country is:", "options": ["Rising", "Falling", "Misery", "Rich"], "answer": "Misery", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What is 'oblivion'?", "marks": 1, "answer": "State of being forgotten." },
                        { "id": 12, "question": "What does 'grovelling' mean?", "marks": 1, "answer": "Crawling on the ground in submission." },
                        { "id": 13, "question": "Who is the 'Deity'?", "marks": 1, "answer": "India (personified)." },
                        { "id": 14, "question": "What is the 'kind wish'?", "marks": 1, "answer": "The poet's only desired reward." },
                        { "id": 15, "question": "Why is the halo gone?", "marks": 1, "answer": "Because India is enslaved." },
                        { "id": 16, "question": "What emotion dominates the first part of the poem?", "marks": 1, "answer": "Sorrow/Grief." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "What is the significance of the title 'To India: My Native Land'?", "marks": 6, "answer": "The title establishes a personal and emotional connection. 'Native Land' suggests belonging and birthright. It is an ode or address to his motherland, setting the tone for a patriotic poem." },
                        { "id": 18, "question": "Explain: 'And let the guerdon of my labour be / My fallen country! one kind wish from thee!'", "marks": 6, "answer": "The poet says that the only reward ('guerdon') he wants for his hard work ('labour') of reviving the past glory is a single kind wish or blessing from his country. He seeks no money or fame, only the gratitude of his nation." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "How does the poem bridge the past and the present?", "marks": 6, "answer": "The poem constantly shifts between the glorious past (halo, eagle, worship) and the miserable present (chained, grovelling, misery). The poet uses the past to highlight the tragedy of the present and uses his poetry as a bridge to bring the values of the past into the present." },
                        { "id": 20, "question": "Write a summary of the poem.", "marks": 6, "answer": "The poet laments the loss of India's ancient glory and freedom. He compares India to a chained eagle and a fallen deity. He is sad that the country is now humiliated. However, he is determined to dig into the past to retrieve the forgotten tales of greatness. He dedicates his poetry to his country, asking only for a kind wish in return." }
                    ]
                }
            ]
        }
    },

    // Classic Short Story: The Lottery Ticket
    {
        title: "ENGLISH LITERATURE Practice Paper - Classic Short Story: The Lottery Ticket - Set A",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Classic Short Story: The Lottery Ticket - Set A",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Who is the author of 'The Lottery Ticket'?", "options": ["Anton Chekhov", "Leo Tolstoy", "O. Henry", "Guy de Maupassant"], "answer": "Anton Chekhov", "marks": 1 },
                        { "id": 2, "question": "Ivan Dmitritch was a:", "options": ["Rich man", "Middle-class man", "Poor man", "Beggar"], "answer": "Middle-class man", "marks": 1 },
                        { "id": 3, "question": "The lottery ticket belonged to:", "options": ["Ivan", "Masha (his wife)", "His neighbour", "His friend"], "answer": "Masha (his wife)", "marks": 1 },
                        { "id": 4, "question": "The prize money was:", "options": ["75,000", "50,000", "100,000", "25,000"], "answer": "75,000", "marks": 1 },
                        { "id": 5, "question": "The series number of the ticket was:", "options": ["9499", "9999", "4999", "9409"], "answer": "9499", "marks": 1 },
                        { "id": 6, "question": "Ivan wanted to buy an:", "options": ["Estate", "Island", "Airplane", "Hotel"], "answer": "Estate", "marks": 1 },
                        { "id": 7, "question": "Ivan thought his wife would become:", "options": ["Generous", "Stingy", "Beautiful", "Young"], "answer": "Stingy", "marks": 1 },
                        { "id": 8, "question": "Masha thought Ivan would:", "options": ["Take all her money", "Leave her", "Buy her gifts", "Be happy"], "answer": "Take all her money", "marks": 1 },
                        { "id": 9, "question": "The actual winning number was:", "options": ["26", "46", "56", "36"], "answer": "46", "marks": 1 },
                        { "id": 10, "question": "At the end, Ivan decided to:", "options": ["Buy another ticket", "Go hang himself", "Divorce Masha", "Sleep"], "answer": "Go hang himself (figuratively/out of frustration)", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What was Ivan doing after supper?", "marks": 1, "answer": "Reading the newspaper." },
                        { "id": 12, "question": "Did they check the number immediately?", "marks": 1, "answer": "No, they started daydreaming first." },
                        { "id": 13, "question": "What season did Ivan imagine on the estate?", "marks": 1, "answer": "Summer and Winter." },
                        { "id": 14, "question": "How did their mood change?", "marks": 1, "answer": "From happy dreaming to hatred and suspicion." },
                        { "id": 15, "question": "What was Masha's ticket number?", "marks": 1, "answer": "26." },
                        { "id": 16, "question": "Did they win?", "marks": 1, "answer": "No." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Describe Ivan's dream about the estate.", "marks": 6, "answer": "Ivan imagined buying a real estate with a river, garden, and mill. He pictured himself lying on the sand, drinking tea, and watching his children play. He thought about living a lazy, well-fed life." },
                        { "id": 18, "question": "How did the possibility of winning affect their relationship?", "marks": 6, "answer": "It destroyed their peace. They began to see each other as enemies. Ivan thought Masha would be stingy and control the money. Masha thought Ivan would grab her money. They looked at each other with hatred and suspicion." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "What is the theme of 'The Lottery Ticket'?", "marks": 6, "answer": "The theme is the corrupting power of money (greed). Even the *thought* of money can ruin relationships and happiness. It shows how quickly human nature changes from contentment to dissatisfaction and anger when wealth is involved." },
                        { "id": 20, "question": "Explain the ending of the story.", "marks": 6, "answer": "When they realized they hadn't won (series matched, number didn't), their dreams shattered instantly. The room looked dark and small again. They felt angry at their poverty and at each other. Ivan's final comment about hanging himself shows his extreme frustration and return to a miserable reality." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Classic Short Story: The Lottery Ticket - Set B",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Classic Short Story: The Lottery Ticket - Set B",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Ivan's income was:", "options": ["1200 a year", "5000 a year", "Very high", "Zero"], "answer": "1200 a year", "marks": 1 },
                        { "id": 2, "question": "Masha asked Ivan to check the:", "options": ["Weather", "Lottery list", "News", "Time"], "answer": "Lottery list", "marks": 1 },
                        { "id": 3, "question": "Ivan felt that the prize money was:", "options": ["Small", "Huge/Power", "Useless", "Dirty"], "answer": "Huge/Power", "marks": 1 },
                        { "id": 4, "question": "Ivan imagined travelling to:", "options": ["Paris", "India", "Mars", "London"], "answer": "Abroad (South of France/Italy etc.)", "marks": 1 },
                        { "id": 5, "question": "Masha's eyes looked ______ in Ivan's imagination.", "options": ["Kind", "Witch-like/Hateful", "Sad", "Blue"], "answer": "Witch-like/Hateful", "marks": 1 },
                        { "id": 6, "question": "Ivan thought his relatives would:", "options": ["Congratulate him", "Whine and beg", "Ignore him", "Kill him"], "answer": "Whine and beg", "marks": 1 },
                        { "id": 7, "question": "The room suddenly seemed:", "options": ["Bright", "Dark and small", "Large", "Beautiful"], "answer": "Dark and small", "marks": 1 },
                        { "id": 8, "question": "Ivan complained that the supper lay heavy on his:", "options": ["Mind", "Stomach", "Heart", "Legs"], "answer": "Stomach", "marks": 1 },
                        { "id": 9, "question": "The story takes place in:", "options": ["Russia", "America", "England", "India"], "answer": "Russia", "marks": 1 },
                        { "id": 10, "question": "The genre is:", "options": ["Romance", "Realism/Satire", "Fantasy", "Horror"], "answer": "Realism/Satire", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What was the series number?", "marks": 1, "answer": "9499." },
                        { "id": 12, "question": "Did Ivan have faith in the lottery?", "marks": 1, "answer": "No, usually not." },
                        { "id": 13, "question": "What did Ivan want to do in autumn?", "marks": 1, "answer": "Stay indoors, drink vodka, look at the rain." },
                        { "id": 14, "question": "Who bought the ticket?", "marks": 1, "answer": "Masha." },
                        { "id": 15, "question": "Why did Ivan get angry at the end?", "marks": 1, "answer": "Because he didn't win and felt his life was miserable." },
                        { "id": 16, "question": "What does the ticket symbolize?", "marks": 1, "answer": "False hope / Greed." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "How did Ivan view his wife before and after checking the number?", "marks": 6, "answer": "Before: He was content with her. They were a normal couple.\nAfter (thinking they won): He saw her as old, plain, and smelling of cooking. He thought she didn't deserve the money and would waste it. He resented her." },
                        { "id": 18, "question": "What were Masha's thoughts about Ivan?", "marks": 6, "answer": "Though not explicitly detailed as much as Ivan's, it is implied she looked at him with hatred too. She likely thought he would try to control her fortune and spend it on his own dreams, leaving her nothing." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "Discuss the psychological changes in Ivan Dmitritch.", "marks": 6, "answer": "Ivan goes through a rollercoaster of emotions. 1. Indifference. 2. Excitement/Hope (seeing the series). 3. Euphoria (dreaming of luxury). 4. Greed/Selfishness (planning to spend alone). 5. Hatred (towards his wife). 6. Disappointment/Despair (losing). It shows how money reveals hidden selfishness." },
                        { "id": 20, "question": "Is money the root of all evil in this story? Discuss.", "marks": 6, "answer": "Yes, the potential of money brings out the worst in the characters. It destroys their contentment. They were happy enough before, but the *idea* of wealth made them dissatisfied with their reality and hateful towards each other. The story suggests that greed is the true evil." }
                    ]
                }
            ]
        }
    },
    {
        title: "ENGLISH LITERATURE Practice Paper - Classic Short Story: The Lottery Ticket - Set C",
        content: {
            "title": "ENGLISH LITERATURE Practice Paper - Classic Short Story: The Lottery Ticket - Set C",
            "school": "LearnNest School",
            "class": "Class 6 ICSE",
            "subject": "ENGLISH LITERATURE",
            "duration": "1 hour 30 minutes",
            "totalMarks": 40,
            "sections": [
                {
                    "name": "Section A: Multiple Choice Questions (10 marks)",
                    "questions": [
                        { "id": 1, "question": "Ivan was very well ______ with his lot.", "options": ["Satisfied", "Angry", "Sad", "Bored"], "answer": "Satisfied", "marks": 1 },
                        { "id": 2, "question": "The first thought Ivan had was to:", "options": ["Buy a car", "Buy an estate", "Pay debts", "Travel"], "answer": "Buy an estate", "marks": 1 },
                        { "id": 3, "question": "Ivan imagined his children:", "options": ["Studying", "Playing in the garden", "Crying", "Sleeping"], "answer": "Playing in the garden", "marks": 1 },
                        { "id": 4, "question": "Ivan thought Masha would lock the money:", "options": ["In the bank", "Under lock and key", "In a box", "In the kitchen"], "answer": "Under lock and key", "marks": 1 },
                        { "id": 5, "question": "The number 9499 was found in the:", "options": ["Newspaper", "Book", "Letter", "TV"], "answer": "Newspaper", "marks": 1 },
                        { "id": 6, "question": "Ivan felt ______ towards his relatives.", "options": ["Love", "Repulsion", "Pity", "Respect"], "answer": "Repulsion", "marks": 1 },
                        { "id": 7, "question": "The story ends with:", "options": ["A party", "A fight", "A gloomy atmosphere", "A divorce"], "answer": "A gloomy atmosphere", "marks": 1 },
                        { "id": 8, "question": "Chekhov is a ______ writer.", "options": ["Russian", "French", "German", "Indian"], "answer": "Russian", "marks": 1 },
                        { "id": 9, "question": "The ticket number was:", "options": ["26", "46", "9499", "75000"], "answer": "26 (Series 9499)", "marks": 1 },
                        { "id": 10, "question": "The story shows the ______ of human nature.", "options": ["Kindness", "Fickleness/Greed", "Bravery", "Wisdom"], "answer": "Fickleness/Greed", "marks": 1 }
                    ]
                },
                {
                    "name": "Section B: Very Short Answer Questions (6 marks)",
                    "questions": [
                        { "id": 11, "question": "What did Ivan want to do abroad?", "marks": 1, "answer": "Go to art galleries, sleep, drink wine." },
                        { "id": 12, "question": "Why did they not check the number immediately?", "marks": 1, "answer": "To prolong the suspense and dream." },
                        { "id": 13, "question": "What did the house look like at the end?", "marks": 1, "answer": "Villainous, dark, low-pitched." },
                        { "id": 14, "question": "What did Ivan say about the damson trees?", "marks": 1, "answer": "That they should be cut down (in his bad mood)." },
                        { "id": 15, "question": "Who is the protagonist?", "marks": 1, "answer": "Ivan Dmitritch." },
                        { "id": 16, "question": "What is the irony?", "marks": 1, "answer": "They fought over money they didn't have." }
                    ]
                },
                {
                    "name": "Section C: Short Answer Questions (12 marks)",
                    "questions": [
                        { "id": 17, "question": "Describe the 'Summer' imagination of Ivan.", "marks": 6, "answer": "He imagined warm days, his little boy crawling, his daughter singing, himself lying on the sand or under a tree, drinking tea or vodka, and watching people. It was a picture of perfect idleness and comfort." },
                        { "id": 18, "question": "Why did Ivan want to go hang himself?", "marks": 6, "answer": "It was an expression of extreme frustration. The contrast between his beautiful dream and his mundane reality was too painful. He felt trapped in his middle-class life and blamed fate." }
                    ]
                },
                {
                    "name": "Section D: Long Answer Questions (12 marks)",
                    "questions": [
                        { "id": 19, "question": "How does the author use 'Suspense' in the story?", "marks": 6, "answer": "Chekhov builds suspense by having the characters pause after seeing the series number (9499). They don't look at the ticket number (26) immediately. This gap allows them (and the reader) to explore their fantasies and true natures. The climax is the revelation of the number, followed by the anti-climax." },
                        { "id": 20, "question": "Do you think the couple would have been happy if they won? Why/Why not?", "marks": 6, "answer": "Likely not. The story reveals that their desires were selfish. Ivan wanted to travel alone or control the money; Masha wanted to hoard it. They already started hating each other in their imagination. Real money would likely have led to separation or constant fighting, proving that money doesn't buy happiness." }
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
