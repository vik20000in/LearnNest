import { initDatabase } from '../db/database';

// Pre-generated flashcards for all missing chapters
const flashcardsData: { [key: string]: Array<{ front: string; back: string }> } = {
  "ENGLISH LANGUAGE | General / Introduction": [
    { front: "What is the primary purpose of learning English language?", back: "To develop effective communication skills in reading, writing, speaking, and listening." },
    { front: "What are the four main skills in language learning?", back: "Reading, Writing, Speaking, and Listening (RWSL)." },
    { front: "Why is grammar important in English?", back: "Grammar provides the rules and structure needed to communicate clearly and correctly." },
    { front: "What is vocabulary?", back: "Vocabulary is the collection of words that a person knows and uses in a language." },
    { front: "What role does practice play in language learning?", back: "Regular practice helps reinforce learning and improves fluency in all language skills." }
  ],
  
  "ENGLISH LANGUAGE | Encouraging children to equally participate in an interactive session.": [
    { front: "Why is equal participation important in classroom discussions?", back: "It ensures all students have opportunities to learn, share ideas, and develop confidence." },
    { front: "What is an interactive session?", back: "A learning activity where students actively engage with the teacher and each other through discussion and activities." },
    { front: "How can teachers encourage shy students to participate?", back: "By creating a safe environment, asking open-ended questions, and giving positive reinforcement." },
    { front: "What are the benefits of group discussions?", back: "They develop communication skills, critical thinking, teamwork, and respect for diverse opinions." },
    { front: "What is active listening?", back: "Paying full attention to the speaker, understanding their message, and responding appropriately." }
  ],
  
  "ENGLISH LANGUAGE | Children will unleash their creativity.": [
    { front: "What is creativity?", back: "The ability to generate new ideas, approaches, or solutions using imagination." },
    { front: "How does creative writing help students?", back: "It develops imagination, self-expression, vocabulary, and storytelling abilities." },
    { front: "What are some creative activities for children?", back: "Story writing, poetry, drama, art projects, and imaginative play." },
    { front: "Why is creativity important in education?", back: "It encourages problem-solving, innovation, critical thinking, and personal expression." },
    { front: "How can teachers foster creativity?", back: "By providing open-ended tasks, encouraging experimentation, and celebrating unique ideas." }
  ],
  
  "ENGLISH LANGUAGE | Each student will develop their creative, writing, speaking skills.": [
    { front: "What are the three key skills mentioned?", back: "Creative thinking, writing skills, and speaking skills." },
    { front: "How can students improve their writing skills?", back: "Through regular practice, reading widely, learning grammar, and seeking feedback." },
    { front: "What is public speaking?", back: "The act of presenting information or ideas to an audience verbally." },
    { front: "Why is creative thinking important?", back: "It helps solve problems in unique ways and adapt to new situations effectively." },
    { front: "What makes a good speaker?", back: "Clear pronunciation, confident delivery, good body language, and engaging content." }
  ],
  
  "ENGLISH LANGUAGE | Foster cognitive development.": [
    { front: "What is cognitive development?", back: "The growth and improvement of mental abilities like thinking, learning, memory, and problem-solving." },
    { front: "How does language learning support cognitive development?", back: "It enhances memory, analytical thinking, concentration, and mental flexibility." },
    { front: "What is critical thinking?", back: "The ability to analyze information objectively and make reasoned judgments." },
    { front: "Why are puzzles and games important for cognitive development?", back: "They challenge the brain, improve problem-solving skills, and enhance logical thinking." },
    { front: "What role does reading play in cognitive development?", back: "Reading improves comprehension, expands knowledge, enhances imagination, and develops analytical skills." }
  ],
  
  "ENGLISH LITERATURE | Prose: The Mystery of a Cyber Friend- Zac O' Yeah": [
    { front: "Who is the author of 'The Mystery of a Cyber Friend'?", back: "Zac O'Yeah" },
    { front: "What is the main theme of this story?", back: "The story explores themes of online friendship, digital communication, and mystery in the cyber world." },
    { front: "What is a cyber friend?", back: "A friend met and communicated with primarily through the internet or digital platforms." },
    { front: "What literary form is this work?", back: "Prose (narrative fiction)" },
    { front: "What lesson does this story teach?", back: "It teaches about being cautious with online relationships while exploring modern forms of communication." }
  ],
  
  "ENGLISH LITERATURE | Poem: Stopping by Woods on a Snowy Evening- Robert Frost": [
    { front: "Who wrote 'Stopping by Woods on a Snowy Evening'?", back: "Robert Frost" },
    { front: "What is the setting of the poem?", back: "A dark, snowy evening in the woods during winter." },
    { front: "What is the famous last line of the poem?", back: "'And miles to go before I sleep'" },
    { front: "What does the horse represent in the poem?", back: "The practical, everyday responsibilities that call the speaker back to reality." },
    { front: "What is the main theme of the poem?", back: "The conflict between the allure of rest/escape and the obligations of life." }
  ],
  
  "ENGLISH LITERATURE | Poem: To India: My Native Land- Henry Louis Vivian Derozio": [
    { front: "Who is the poet of 'To India: My Native Land'?", back: "Henry Louis Vivian Derozio" },
    { front: "What is the main theme of this poem?", back: "Patriotism and love for India, while lamenting its fallen glory." },
    { front: "What emotion does the poet express?", back: "A mix of pride in India's past greatness and sadness at its present condition." },
    { front: "What does 'Native Land' refer to?", back: "The poet's homeland, India." },
    { front: "What message does Derozio convey?", back: "Hope for India's revival and a call to remember its glorious heritage." }
  ],
  
  "ENGLISH LITERATURE | Classic Short Story: The Lottery Ticket": [
    { front: "What is 'The Lottery Ticket' about?", back: "A story exploring how the possibility of sudden wealth affects a couple's relationship and reveals their true nature." },
    { front: "Who is the author of 'The Lottery Ticket'?", back: "Anton Chekhov" },
    { front: "What is the main conflict in the story?", back: "The internal conflict and greed that arises when the couple thinks they may have won the lottery." },
    { front: "What theme does the story explore?", back: "The theme of greed, materialism, and how money can change people and relationships." },
    { front: "What is the irony in the story?", back: "The couple's relationship deteriorates over money they don't actually have, revealing their true characters." }
  ],
  
  "Chemistry | General / Introduction": [
    { front: "What is Chemistry?", back: "Chemistry is the science that deals with the composition, structure, properties, and reactions of matter." },
    { front: "What are the three main states of matter?", back: "Solid, Liquid, and Gas" },
    { front: "What is an atom?", back: "The smallest unit of matter that retains the properties of an element." },
    { front: "What is a molecule?", back: "A group of two or more atoms bonded together." },
    { front: "Why is chemistry important in daily life?", back: "Chemistry helps us understand cooking, cleaning, medicine, and environmental processes." }
  ],
  
  "Biology | General / Introduction": [
    { front: "What is Biology?", back: "Biology is the study of living organisms and life processes." },
    { front: "What are the characteristics of living things?", back: "Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, and Nutrition (MRS GREN)." },
    { front: "What is a cell?", back: "The basic structural and functional unit of all living organisms." },
    { front: "What is the difference between plants and animals?", back: "Plants make their own food through photosynthesis; animals must consume other organisms for food." },
    { front: "What is biodiversity?", back: "The variety of different species of plants and animals in an ecosystem." }
  ],
  
  "Computer | Chapter 9: Fundamentals of QBasic : A programming Language (Full chapter) and": [
    { front: "What is QBasic?", back: "QBasic is a beginner-friendly programming language used to learn basic programming concepts." },
    { front: "What does BASIC stand for?", back: "Beginners' All-purpose Symbolic Instruction Code" },
    { front: "What is a variable in QBasic?", back: "A named storage location that holds data which can change during program execution." },
    { front: "What is the PRINT statement used for?", back: "To display output on the screen." },
    { front: "What is a loop in programming?", back: "A sequence of instructions that is repeated until a certain condition is met." }
  ],
  
  "Computer | Chapter 6: Scratch Programming": [
    { front: "What is Scratch?", back: "A visual block-based programming language designed for children to learn coding concepts." },
    { front: "What are sprites in Scratch?", back: "Objects or characters that perform actions in a Scratch project." },
    { front: "What is the stage in Scratch?", back: "The area where sprites move and interact, serving as the backdrop for projects." },
    { front: "What are blocks in Scratch?", back: "Color-coded instruction pieces that snap together to create programs." },
    { front: "Why is Scratch good for beginners?", back: "It uses visual blocks instead of text, making it easier to understand programming logic." }
  ],
  
  "Geography | Chapter 1: Mapping the Earth": [
    { front: "What is a map?", back: "A representation of Earth's surface or a part of it on a flat surface." },
    { front: "What are the four cardinal directions?", back: "North, South, East, and West" },
    { front: "What is a globe?", back: "A three-dimensional spherical model of Earth." },
    { front: "What is the difference between latitude and longitude?", back: "Latitude lines run east-west and measure distance from the Equator; longitude lines run north-south and measure distance from the Prime Meridian." },
    { front: "What is a compass?", back: "An instrument used to find directions using a magnetic needle that points north." }
  ],
  
  "Geography | Chapter 2: Landforms": [
    { front: "What is a landform?", back: "A natural physical feature of Earth's surface, such as mountains, valleys, and plains." },
    { front: "What is a mountain?", back: "A large natural elevation of Earth's surface rising high above the surrounding land." },
    { front: "What is a plateau?", back: "An elevated flat area of land with steep sides." },
    { front: "What is a plain?", back: "A large area of flat or gently rolling land with few trees." },
    { front: "How are valleys formed?", back: "Valleys are formed by erosion from rivers, glaciers, or tectonic activity." }
  ],
  
  "Geography | Chapter 5: Minerals": [
    { front: "What is a mineral?", back: "A naturally occurring inorganic substance with a definite chemical composition and physical properties." },
    { front: "Name three common minerals.", back: "Iron, copper, and gold (or salt, mica, quartz)" },
    { front: "What are metallic minerals?", back: "Minerals that contain metal elements, such as iron ore, copper, and gold." },
    { front: "What are non-metallic minerals?", back: "Minerals that do not contain metals, such as limestone, mica, and gypsum." },
    { front: "Why are minerals important?", back: "Minerals are used in construction, manufacturing, technology, and everyday products." }
  ],
  
  "Geography | Chapter 7:": [
    { front: "What is population distribution?", back: "How people are spread across an area or region." },
    { front: "What factors affect where people live?", back: "Climate, water availability, landforms, resources, and economic opportunities." },
    { front: "What is population density?", back: "The number of people living per unit area (e.g., per square kilometer)." },
    { front: "What is urbanization?", back: "The movement of people from rural areas to cities." },
    { front: "Why study geography?", back: "To understand the relationship between people and their environment and how it affects human life." }
  ],
  
  "HISTORY AND CIVICS | Later Vedic Period": [
    { front: "What time period is the Later Vedic Period?", back: "Approximately 1000 BCE to 600 BCE" },
    { front: "Which Vedas were composed during the Later Vedic Period?", back: "Sama Veda, Yajur Veda, and Atharva Veda" },
    { front: "What was the main occupation during this period?", back: "Agriculture became the primary occupation, replacing cattle-rearing." },
    { front: "What was the social structure like?", back: "The caste system became more rigid with four main varnas: Brahmins, Kshatriyas, Vaishyas, and Shudras." },
    { front: "Where did people settle during the Later Vedic Period?", back: "They moved eastward from Punjab to the Gangetic plains." }
  ],
  
  "HISTORY AND CIVICS | Buddhism and Jainism": [
    { front: "Who founded Buddhism?", back: "Gautama Buddha (Siddhartha Gautama)" },
    { front: "Who founded Jainism?", back: "Mahavira (Vardhamana)" },
    { front: "What are the Four Noble Truths in Buddhism?", back: "Life is suffering, suffering has a cause, suffering can end, and there is a path to end suffering." },
    { front: "What are the main principles of Jainism?", back: "Non-violence (Ahimsa), truthfulness, non-stealing, celibacy, and non-possession." },
    { front: "Why did Buddhism and Jainism emerge?", back: "As reform movements against the rigid rituals and caste system of Vedic religion." }
  ],
  
  "HISTORY AND CIVICS | The Rise of Magadha": [
    { front: "Where was Magadha located?", back: "In present-day Bihar, in the Gangetic plains of northern India." },
    { front: "Who was the first important ruler of Magadha?", back: "Bimbisara of the Haryanka dynasty" },
    { front: "Why did Magadha become powerful?", back: "Due to its strategic location, fertile land, mineral resources, and strong rulers." },
    { front: "What was the capital of Magadha?", back: "First Rajagriha (Rajgir), later moved to Pataliputra (Patna)" },
    { front: "Which empire rose from Magadha?", back: "The Mauryan Empire under Chandragupta Maurya" }
  ],
  
  "HISTORY AND CIVICS | The Early Vedic": [
    { front: "What time period is the Early Vedic Age?", back: "Approximately 1500 BCE to 1000 BCE" },
    { front: "Which was the earliest Veda?", back: "The Rig Veda" },
    { front: "What was the main occupation of Early Vedic people?", back: "Cattle-rearing and pastoralism" },
    { front: "What was the political unit in Early Vedic society?", back: "The tribe (jana) led by a chief (rajan)" },
    { front: "Where did the Early Vedic people settle?", back: "Primarily in the northwestern region of the Indian subcontinent, in Punjab and adjoining areas." }
  ],
  
  "2ND LANGUAGE-BENGALI | ছছোটদে দে র সবুজ পাতা (ষষ্ঠ) : গদ্য – কে কে লে লে , সর্ব র্বনে নে শে শে মাদুলি লি": [
    { front: "এই পাঠ্য বইয়ের নাম কী?", back: "ছোটদের সবুজ পাতা (ষষ্ঠ শ্রেণী)" },
    { front: "এই অধ্যায়ের সাহিত্যের ধরন কী?", back: "গদ্য (Prose)" },
    { front: "গদ্য কাকে বলে?", back: "যে রচনায় ছন্দ থাকে না এবং স্বাভাবিক ভাষায় লেখা হয়, তাকে গদ্য বলে।" },
    { front: "বাংলা সাহিত্যে গদ্যের গুরুত্ব কী?", back: "গদ্য বাস্তব জীবনের গল্প, তথ্য এবং ভাব প্রকাশের সহজ মাধ্যম।" },
    { front: "ভাষা শিক্ষায় পাঠ্যবইয়ের ভূমিকা কী?", back: "পাঠ্যবই শিক্ষার্থীদের ভাষা দক্ষতা, সাহিত্য জ্ঞান এবং মূল্যবোধ শেখায়।" }
  ],
  
  "2ND LANGUAGE-BENGALI | পদ্য – পাছে ছে ললোকে কে কি কি ছু বলে লে": [
    { front: "পদ্য কাকে বলে?", back: "ছন্দ ও মাত্রা মিলিয়ে লেখা কবিতাকে পদ্য বলে।" },
    { front: "এই কবিতার মূল বিষয় কী?", back: "সমাজের মানুষের মতামত এবং সামাজিক চাপের প্রতি দৃষ্টিভঙ্গি।" },
    { front: "কবিতায় ছন্দের গুরুত্ব কী?", back: "ছন্দ কবিতাকে সুন্দর, মধুর এবং সহজে মনে রাখার যোগ্য করে তোলে।" },
    { front: "'পাছে লোকে কিছু বলে' - এর অর্থ কী?", back: "ভয় যে লোকে কিছু বলবে বা সমালোচনা করবে।" },
    { front: "কবিতা পড়ার উপকারিতা কী?", back: "কবিতা ভাষার সৌন্দর্য উপলব্ধি, কল্পনাশক্তি ও আবেগ বিকাশে সহায়তা করে।" }
  ],
  
  "2ND LANGUAGE-BENGALI | গল্পে ল্পে র রংমশাল – দশরথে থে র পুত্রলাভ, মি মি নুর বাহাদুরি রি ( দ্রুতপঠন )": [
    { front: "দশরথ কে ছিলেন?", back: "দশরথ ছিলেন অযোধ্যার রাজা এবং রামচন্দ্রের পিতা।" },
    { front: "রামায়ণে দশরথের কতজন পুত্র ছিল?", back: "চারজন - রাম, লক্ষ্মণ, ভরত এবং শত্রুঘ্ন।" },
    { front: "'পুত্রলাভ' শব্দের অর্থ কী?", back: "সন্তান (পুত্র) লাভ করা বা সন্তান জন্ম নেওয়া।" },
    { front: "দ্রুতপঠন কাকে বলে?", back: "দ্রুত গতিতে পড়ে মূল বিষয় বুঝে নেওয়ার দক্ষতাকে দ্রুতপঠন বলে।" },
    { front: "'বাহাদুরি' শব্দের অর্থ কী?", back: "সাহস, বীরত্ব বা বাহাদুরির কাজ।" }
  ],
  
  "2ND LANGUAGE-BENGALI | ভাষা প্রসঙ্গ – সমার্থ র্থক শব্দ, পদ পরি রি বর্ত র্ত ন, পুরুষ, রচনা, পত্ররচনা,": [
    { front: "সমার্থক শব্দ কাকে বলে?", back: "যে শব্দগুলির অর্থ একই বা প্রায় একই, তাদের সমার্থক শব্দ বলে। যেমন: সূর্য, রবি, দিনকর।" },
    { front: "পদ পরিবর্তন কী?", back: "ব্যাকরণে এক পদ থেকে অন্য পদে রূপান্তরিত হওয়াকে পদ পরিবর্তন বলে।" },
    { front: "বাংলা ব্যাকরণে পুরুষ কত প্রকার?", back: "তিন প্রকার - উত্তম পুরুষ, মধ্যম পুরুষ এবং প্রথম পুরুষ।" },
    { front: "রচনা লেখার উদ্দেশ্য কী?", back: "চিন্তাভাবনা প্রকাশ, লেখার দক্ষতা এবং ভাষার সঠিক ব্যবহার শেখা।" },
    { front: "পত্র কত প্রকার?", back: "দুই প্রকার - ব্যক্তিগত পত্র এবং ব্যবসায়িক/সরকারি পত্র।" }
  ],
  
  "2ND LANGUAGE - HINDI | General / Introduction": [
    { front: "हिंदी भाषा क्यों महत्वपूर्ण है?", back: "हिंदी भारत की राष्ट्रभाषा है और देश की सांस्कृतिक एकता का प्रतीक है।" },
    { front: "हिंदी की लिपि क्या है?", back: "देवनागरी लिपि" },
    { front: "हिंदी में कितने स्वर होते हैं?", back: "11 स्वर - अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ" },
    { front: "व्याकरण क्या है?", back: "व्याकरण भाषा के नियमों का विज्ञान है जो सही बोलने और लिखने में मदद करता है।" },
    { front: "भाषा सीखने के चार कौशल कौन से हैं?", back: "सुनना, बोलना, पढ़ना और लिखना" }
  ],
  
  "3RD LANGUAGE - HINDI | General / Introduction": [
    { front: "तीसरी भाषा के रूप में हिंदी सीखने का लाभ क्या है?", back: "यह भारत के विभिन्न क्षेत्रों के लोगों से संवाद करने में मदद करती है।" },
    { front: "हिंदी वर्णमाला में कितने वर्ण हैं?", back: "कुल 52 वर्ण - 11 स्वर और 41 व्यंजन" },
    { front: "शब्द किसे कहते हैं?", back: "एक या एक से अधिक अक्षरों के मेल से बने सार्थक ध्वनि समूह को शब्द कहते हैं।" },
    { front: "वाक्य क्या है?", back: "शब्दों का ऐसा समूह जो पूरा अर्थ प्रकट करे, वाक्य कहलाता है।" },
    { front: "हिंदी साहित्य क्यों पढ़ें?", back: "यह भारतीय संस्कृति, मूल्यों और सोच को समझने में मदद करता है।" }
  ],
  
  "3RD LANGUAGE -BENGALI | Lets Learn বাংলা : ক ) গদ্য:- বর্ষ র্ষায় দুর্গ র্গতি তি": [
    { front: "বর্ষা ঋতু কখন হয়?", back: "আষাঢ় ও শ্রাবণ মাসে (জুন-জুলাই)" },
    { front: "'বর্ষায় দুর্গতি' কথার অর্থ কী?", back: "বর্ষাকালে বৃষ্টির কারণে যে সমস্যা বা কষ্ট হয়।" },
    { front: "বর্ষাকালের বৈশিষ্ট্য কী?", back: "প্রচুর বৃষ্টিপাত, মেঘলা আকাশ, সবুজ প্রকৃতি এবং শীতল আবহাওয়া।" },
    { front: "বাংলায় ঋতু কয়টি?", back: "ছয়টি - গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত ও বসন্ত।" },
    { front: "তৃতীয় ভাষা হিসেবে বাংলা শেখার সুবিধা কী?", back: "বাংলা সাহিত্য ও সংস্কৃতি বোঝা এবং পশ্চিমবঙ্গের মানুষের সাথে যোগাযোগ।" }
  ],
  
  "3RD LANGUAGE -BENGALI | ব্যাকরণ :- রে রে ফ, বাংলার ছয় টি ঋতু ও বাররোমাসে সে র নাম": [
    { front: "রেফ কাকে বলে?", back: "র-এর সংক্ষিপ্ত রূপকে রেফ বলে যা ব্যঞ্জনবর্ণের উপরে বসে (্র)।" },
    { front: "বাংলার ছয়টি ঋতুর নাম লেখো।", back: "গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত এবং বসন্ত" },
    { front: "বাংলা বারো মাসের প্রথম মাস কোনটি?", back: "বৈশাখ (এপ্রিল-মে)" },
    { front: "ব্যাকরণ কেন শিখতে হয়?", back: "সঠিক ভাষা ব্যবহার, বানান এবং বাক্য গঠনের জন্য।" },
    { front: "বসন্ত ঋতু কোন মাসে?", back: "ফাল্গুন ও চৈত্র মাসে (ফেব্রুয়ারি-মার্চ)" }
  ],
  
  "3RD LANGUAGE -GERMAN | Lektion 2.1 Was hast du am Montag?": [
    { front: "Was bedeutet 'Was hast du am Montag?'", back: "It means 'What do you have on Monday?' (asking about schedule)" },
    { front: "Wie sagt man 'Montag' auf Englisch?", back: "Monday" },
    { front: "Nenne die Wochentage auf Deutsch.", back: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag" },
    { front: "Was ist ein Stundenplan?", back: "A timetable or schedule showing classes/activities for each day" },
    { front: "Wie fragt man nach dem Tag auf Deutsch?", back: "'Welcher Tag ist heute?' (What day is today?)" }
  ],
  
  "3RD LANGUAGE -GERMAN | Lektion 2.2 Was brauchst du heute?": [
    { front: "Was bedeutet 'Was brauchst du heute?'", back: "It means 'What do you need today?'" },
    { front: "Was ist 'brauchen'?", back: "It is the German verb meaning 'to need'" },
    { front: "Nenne drei Schulsachen auf Deutsch.", back: "das Buch (book), der Stift (pen), das Heft (notebook)" },
    { front: "Wie sagt man 'heute' auf Englisch?", back: "Today" },
    { front: "Was ist der Unterschied zwischen 'haben' und 'brauchen'?", back: "'Haben' means 'to have' while 'brauchen' means 'to need'" }
  ],
  
  "3RD LANGUAGE -GERMAN | Lektion 2.3 Schon wieder Eintopf ( All Grammar and vocabulary of all the chapters included)": [
    { front: "Was ist ein 'Eintopf'?", back: "A one-pot stew or dish (all ingredients cooked together in one pot)" },
    { front: "Was bedeutet 'schon wieder'?", back: "It means 'again' or 'once more' (expressing repetition)" },
    { front: "Wie bildet man das Präsens in Deutsch?", back: "By conjugating the verb stem with personal endings: -e, -st, -t, -en, -t, -en" },
    { front: "Was sind Artikel im Deutschen?", back: "der (masculine), die (feminine), das (neuter), and die (plural)" },
    { front: "Warum ist Wortschatz wichtig?", back: "Vocabulary is essential for understanding and communicating effectively in any language" }
  ],
  
  "History | The Vedic Civilization": [
    { front: "What was the Vedic Civilization?", back: "An ancient Indian civilization that developed around 1500 BCE, known for composing the Vedas." },
    { front: "What are the Vedas?", back: "Ancient Sanskrit texts that are the oldest scriptures of Hinduism." },
    { front: "Name the four Vedas.", back: "Rig Veda, Sama Veda, Yajur Veda, and Atharva Veda" },
    { front: "What was the main occupation in Vedic times?", back: "Initially cattle-rearing, later agriculture" },
    { front: "What was the social structure?", back: "The Varna system with four main groups: Brahmins, Kshatriyas, Vaishyas, and Shudras" }
  ],
  
  "English | Nouns": [
    { front: "What is a noun?", back: "A word that names a person, place, thing, or idea." },
    { front: "What are the types of nouns?", back: "Common, Proper, Collective, Abstract, and Concrete nouns" },
    { front: "What is a proper noun?", back: "A noun that names a specific person, place, or thing and is always capitalized. Example: London, Mary" },
    { front: "What is a collective noun?", back: "A noun that refers to a group of people or things. Example: team, flock, class" },
    { front: "What is an abstract noun?", back: "A noun that names an idea, quality, or state that cannot be seen or touched. Example: happiness, courage" }
  ]
};

async function generateAllFlashcards() {
    console.log("Generating flashcards for all missing chapters...\n");
    const db = await initDatabase();
    
    // Get all chapters
    const chapters = await db.all(`
        SELECT c.id, s.name as subject, c.name as chapter,
               (SELECT COUNT(*) FROM flashcards WHERE chapter_id = c.id) as count 
        FROM chapters c 
        JOIN subjects s ON c.subject_id = s.id
    `);

    let inserted = 0;
    let skipped = 0;

    for (const chapter of chapters) {
        const key = `${chapter.subject} | ${chapter.chapter}`;
        
        if (chapter.count > 0) {
            skipped++;
            continue;
        }

        const flashcards = flashcardsData[key];
        
        if (!flashcards) {
            console.log(`⚠️  No flashcards defined for: ${key}`);
            console.log(`   Available keys containing "Lets Learn":`);
            Object.keys(flashcardsData).filter(k => k.includes("Lets Learn")).forEach(k => console.log(`     "${k}"`));
            continue;
        }

        console.log(`✅ Inserting ${flashcards.length} flashcards for: ${key}`);
        
        for (const card of flashcards) {
            await db.run(
                'INSERT INTO flashcards (chapter_id, front, back) VALUES (?, ?, ?)',
                chapter.id,
                card.front,
                card.back
            );
            inserted++;
        }
    }

    console.log(`\n✨ Done!`);
    console.log(`   Inserted: ${inserted} flashcards`);
    console.log(`   Skipped: ${skipped} chapters (already have flashcards)`);
}

generateAllFlashcards().catch(console.error);
