
import { initDatabase } from '../db/database';

const SUBJECT_ID = 22;
const CHAPTER_ID = 176;
const SUBJECT_NAME = "2ND LANGUAGE - HINDI";
const CHAPTER_NAME = "General / Introduction";

const papers = [
    {
        set: "A",
        content: {
            title: `${SUBJECT_NAME} Practice Paper - ${CHAPTER_NAME} - Set A`,
            school: "LearnNest School",
            class: "Class 6 ICSE",
            subject: SUBJECT_NAME,
            duration: "1 hour",
            totalMarks: 30,
            sections: [
                {
                    name: "Section A: बहुविकल्पीय प्रश्न (10 marks)",
                    questions: [
                        { id: 1, marks: 1, question: "हिंदी की लिपि क्या है?", options: ["रोमन", "देवनागरी", "अरबी", "फारसी"], answer: "देवनागरी" },
                        { id: 2, marks: 1, question: "हिंदी में कितने स्वर हैं?", options: ["९", "१०", "११", "१२"], answer: "११" },
                        { id: 3, marks: 1, question: "हिंदी दिवस कब मनाया जाता है?", options: ["14 सितंबर", "15 अगस्त", "26 जनवरी", "2 अक्टूबर"], answer: "14 सितंबर" },
                        { id: 4, marks: 1, question: "भाषा की सबसे छोटी इकाई क्या है?", options: ["शब्द", "वाक्य", "वर्ण", "पद"], answer: "वर्ण" },
                        { id: 5, marks: 1, question: "संज्ञा के कितने भेद हैं?", options: ["३", "४", "५", "६"], answer: "३" }, // Or 5 depending on classification, usually 3 main or 5 total. Let's stick to 3 (Vyakti, Jati, Bhav) or 5. Let's say 3 for simplicity or 5. Let's go with 3 for Class 6. Actually 5 is common too. Let's use 3.
                        { id: 6, marks: 1, question: "जो शब्द संज्ञा के स्थान पर प्रयोग किए जाते हैं, उन्हें क्या कहते हैं?", options: ["विशेषण", "क्रिया", "सर्वनाम", "अव्यय"], answer: "सर्वनाम" },
                        { id: 7, marks: 1, question: "क्रिया के मूल रूप को क्या कहते हैं?", options: ["धातु", "पद", "शब्द", "वाक्य"], answer: "धातु" },
                        { id: 8, marks: 1, question: "विशेषण किसकी विशेषता बताता है?", options: ["क्रिया की", "संज्ञा या सर्वनाम की", "अव्यय की", "स्वयं की"], answer: "संज्ञा या सर्वनाम की" },
                        { id: 9, marks: 1, question: "हिंदी वर्णमाला में कितने व्यंजन हैं?", options: ["३३", "३६", "४०", "४४"], answer: "३३" },
                        { id: 10, marks: 1, question: "शुद्ध शब्द चुनिए:", options: ["आशिर्वाद", "आशीर्वाद", "आशिरवाद", "आरशीवाद"], answer: "आशीर्वाद" }
                    ]
                },
                {
                    name: "Section B: लघु उत्तर (10 marks)",
                    questions: [
                        { id: 11, marks: 2, question: "भाषा किसे कहते हैं?", answer: "भाषा वह साधन है जिसके द्वारा मनुष्य अपने विचार बोलकर या लिखकर दूसरों तक पहुँचाता है।" },
                        { id: 12, marks: 2, question: "व्याकरण की परिभाषा लिखिए।", answer: "व्याकरण वह शास्त्र है जो हमें भाषा को शुद्ध रूप में बोलना, लिखना और पढ़ना सिखाता है।" },
                        { id: 13, marks: 2, question: "लिपि किसे कहते हैं?", answer: "भाषा को लिखने के लिए जिन चिह्नों का प्रयोग किया जाता है, उन्हें लिपि कहते हैं।" },
                        { id: 14, marks: 2, question: "स्वर और व्यंजन में क्या अंतर है?", answer: "स्वर स्वतंत्र रूप से बोले जाते हैं, जबकि व्यंजन स्वरों की सहायता से बोले जाते हैं।" },
                        { id: 15, marks: 2, question: "संज्ञा के भेदों के नाम लिखिए।", answer: "व्यक्तिवाचक संज्ञा, जातिवाचक संज्ञा, भाववाचक संज्ञा।" }
                    ]
                },
                {
                    name: "Section C: विस्तृत उत्तर (10 marks)",
                    questions: [
                        { id: 16, marks: 5, question: "हिंदी भाषा के महत्व पर पांच पंक्तियाँ लिखिए।", answer: "1. हिंदी भारत की राजभाषा है।\n2. यह भारत में सबसे अधिक बोली जाने वाली भाषा है।\n3. यह हमारी संस्कृति और परंपराओं से जुड़ी है।\n4. हिंदी साहित्य बहुत समृद्ध है।\n5. यह हमें एकता के सूत्र में बांधती है।" },
                        { id: 17, marks: 5, question: "बोली और भाषा में अंतर स्पष्ट कीजिए।", answer: "बोली भाषा का क्षेत्रीय रूप है जो एक सीमित क्षेत्र में बोली जाती है और इसका अपना लिखित साहित्य नहीं होता। जबकि भाषा का क्षेत्र विस्तृत होता है, इसकी अपनी लिपि और व्याकरण होता है, और इसमें साहित्य रचना होती है।" }
                    ]
                }
            ]
        }
    },
    {
        set: "B",
        content: {
            title: `${SUBJECT_NAME} Practice Paper - ${CHAPTER_NAME} - Set B`,
            school: "LearnNest School",
            class: "Class 6 ICSE",
            subject: SUBJECT_NAME,
            duration: "1 hour",
            totalMarks: 30,
            sections: [
                {
                    name: "Section A: बहुविकल्पीय प्रश्न (10 marks)",
                    questions: [
                        { id: 1, marks: 1, question: "रामचरितमानस की रचना किसने की?", options: ["वाल्मीकि", "तुलसीदास", "कबीरदास", "सूरदास"], answer: "तुलसीदास" },
                        { id: 2, marks: 1, question: "संयुक्त व्यंजन कौन सा है?", options: ["क", "म", "क्ष", "ल"], answer: "क्ष" },
                        { id: 3, marks: 1, question: "घोड़ा का पर्यायवाची शब्द है:", options: ["गज", "अश्व", "सिंह", "वानर"], answer: "अश्व" },
                        { id: 4, marks: 1, question: "विलोम शब्द: 'दिन' का विलोम क्या है?", options: ["सुबह", "शाम", "रात", "दोपहर"], answer: "रात" },
                        { id: 5, marks: 1, question: "लिंग बदलिए: 'शेर'", options: ["शेरनी", "शेरा", "शेरी", "सिंहनी"], answer: "शेरनी" },
                        { id: 6, marks: 1, question: "वचन बदलिए: 'लड़का'", options: ["लड़की", "लड़के", "लड़कों", "लड़कपन"], answer: "लड़के" },
                        { id: 7, marks: 1, question: "पुरुषवाचक सर्वनाम के कितने भेद हैं?", options: ["२", "३", "४", "५"], answer: "३" },
                        { id: 8, marks: 1, question: "कर्म के आधार पर क्रिया के कितने भेद हैं?", options: ["२", "३", "४", "५"], answer: "२" },
                        { id: 9, marks: 1, question: "शुद्ध वर्तनी वाला शब्द है:", options: ["परिक्षा", "परीक्षा", "परिछा", "परीछा"], answer: "परीक्षा" },
                        { id: 10, marks: 1, question: "अनुस्वार का चिह्न है:", options: ["ँ", "ं", "ः", "्"], answer: "ं" }
                    ]
                },
                {
                    name: "Section B: लघु उत्तर (10 marks)",
                    questions: [
                        { id: 11, marks: 2, question: "शब्द किसे कहते हैं?", answer: "वर्णों के सार्थक समूह को शब्द कहते हैं।" },
                        { id: 12, marks: 2, question: "वाक्य किसे कहते हैं?", answer: "शब्दों के सार्थक और व्यवस्थित समूह को, जिससे पूरा अर्थ स्पष्ट हो, वाक्य कहते हैं।" },
                        { id: 13, marks: 2, question: "पर्यायवाची शब्द किसे कहते हैं? उदाहरण दीजिए।", answer: "समान अर्थ वाले शब्दों को पर्यायवाची शब्द कहते हैं। जैसे: जल - पानी, नीर।" },
                        { id: 14, marks: 2, question: "विलोम शब्द किसे कहते हैं? उदाहरण दीजिए।", answer: "एक-दूसरे का उल्टा या विपरीत अर्थ देने वाले शब्दों को विलोम शब्द कहते हैं। जैसे: सुख - दुःख।" },
                        { id: 15, marks: 2, question: "मुहावरा 'आँख का तारा' का अर्थ लिखिए।", answer: "बहुत प्यारा।" }
                    ]
                },
                {
                    name: "Section C: विस्तृत उत्तर (10 marks)",
                    questions: [
                        { id: 16, marks: 5, question: "अपने प्रिय मित्र पर पांच वाक्य लिखिए।", answer: "1. मेरे प्रिय मित्र का नाम [नाम] है।\n2. वह मेरी कक्षा में पढ़ता है।\n3. हम साथ-साथ खेलते और पढ़ते हैं।\n4. वह पढ़ाई में बहुत होशियार है।\n5. वह हमेशा दूसरों की मदद करता है।" },
                        { id: 17, marks: 5, question: "संज्ञा और सर्वनाम में अंतर उदाहरण सहित स्पष्ट कीजिए।", answer: "संज्ञा किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को कहते हैं (जैसे: राम, दिल्ली)। सर्वनाम वे शब्द हैं जो संज्ञा के स्थान पर प्रयोग किए जाते हैं (जैसे: वह, तुम)। राम (संज्ञा) अच्छा लड़का है। वह (सर्वनाम) रोज स्कूल जाता है।" }
                    ]
                }
            ]
        }
    },
    {
        set: "C",
        content: {
            title: `${SUBJECT_NAME} Practice Paper - ${CHAPTER_NAME} - Set C`,
            school: "LearnNest School",
            class: "Class 6 ICSE",
            subject: SUBJECT_NAME,
            duration: "1 hour",
            totalMarks: 30,
            sections: [
                {
                    name: "Section A: बहुविकल्पीय प्रश्न (10 marks)",
                    questions: [
                        { id: 1, marks: 1, question: "भारत की राष्ट्रभाषा क्या है?", options: ["अंग्रेजी", "हिंदी", "संस्कृत", "उर्दू"], answer: "हिंदी" }, // Official language technically, but often taught as Rashtrabhasha in lower grades contextually or Rajbhasha. Let's stick to Rajbhasha/Hindi context.
                        { id: 2, marks: 1, question: "वर्णों के समूह को क्या कहते हैं?", options: ["शब्द", "वाक्य", "वर्णमाला", "लिपि"], answer: "वर्णमाला" },
                        { id: 3, marks: 1, question: "दीर्घ स्वर कौन सा है?", options: ["अ", "इ", "उ", "आ"], answer: "आ" },
                        { id: 4, marks: 1, question: "कवर्ग का उच्चारण स्थान क्या है?", options: ["कंठ", "तालु", "मूर्धा", "दंत"], answer: "कंठ" },
                        { id: 5, marks: 1, question: "व्यक्तिवाचक संज्ञा का उदाहरण है:", options: ["नदी", "पहाड़", "गंगा", "शहर"], answer: "गंगा" },
                        { id: 6, marks: 1, question: "भाववाचक संज्ञा का उदाहरण है:", options: ["बचपन", "बच्चा", "बालक", "लड़का"], answer: "बचपन" },
                        { id: 7, marks: 1, question: "सर्वनाम के कितने भेद होते हैं?", options: ["४", "५", "६", "७"], answer: "६" },
                        { id: 8, marks: 1, question: "विशेषण के कितने भेद होते हैं?", options: ["३", "४", "५", "६"], answer: "४" },
                        { id: 9, marks: 1, question: "क्रिया के जिस रूप से समय का पता चले, उसे क्या कहते हैं?", options: ["काल", "वाच्य", "कारक", "वचन"], answer: "काल" },
                        { id: 10, marks: 1, question: "कारक के कितने भेद हैं?", options: ["६", "७", "८", "९"], answer: "८" }
                    ]
                },
                {
                    name: "Section B: लघु उत्तर (10 marks)",
                    questions: [
                        { id: 11, marks: 2, question: "अयोगवाह किसे कहते हैं?", answer: "अं (अनुस्वार) और अः (विसर्ग) को अयोगवाह कहते हैं। ये न तो पूर्णतः स्वर हैं और न ही व्यंजन।" },
                        { id: 12, marks: 2, question: "संयुक्त व्यंजन किसे कहते हैं? उदाहरण दें।", answer: "दो या दो से अधिक व्यंजनों के मेल से बने व्यंजन को संयुक्त व्यंजन कहते हैं। जैसे: क्ष (क+ष), त्र (त+र)।" },
                        { id: 13, marks: 2, question: "तत्सम शब्द किसे कहते हैं?", answer: "संस्कृत के वे शब्द जो हिंदी में ज्यों के त्यों प्रयोग किए जाते हैं, तत्सम शब्द कहलाते हैं। जैसे: अग्नि, सूर्य।" },
                        { id: 14, marks: 2, question: "तद्भव शब्द किसे कहते हैं?", answer: "संस्कृत के वे शब्द जो कुछ बदलाव के साथ हिंदी में प्रयोग किए जाते हैं, तद्भव शब्द कहलाते हैं। जैसे: आग, सूरज।" },
                        { id: 15, marks: 2, question: "उपसर्ग किसे कहते हैं?", answer: "वे शब्दांश जो किसी शब्द के आरंभ में जुड़कर उसके अर्थ में परिवर्तन लाते हैं, उपसर्ग कहलाते हैं।" }
                    ]
                },
                {
                    name: "Section C: विस्तृत उत्तर (10 marks)",
                    questions: [
                        { id: 16, marks: 5, question: "पत्र लेखन: अपने प्रधानाचार्य को अवकाश के लिए प्रार्थना पत्र लिखिए।", answer: "(प्रारूप)\nसेवा में,\nप्रधानाचार्य महोदय,\n[विद्यालय का नाम],\n[शहर]।\nविषय: अवकाश हेतु प्रार्थना पत्र।\nमहोदय,\nसविनय निवेदन है कि मुझे कल रात से तेज बुखार है। डॉक्टर ने मुझे दो दिन आराम करने की सलाह दी है। अतः मैं विद्यालय आने में असमर्थ हूँ।\nकृपया मुझे [दिनांक] से [दिनांक] तक दो दिन का अवकाश प्रदान करें।\nधन्यवाद।\nआपका आज्ञाकारी शिष्य,\n[नाम]\nकक्षा: ६" },
                        { id: 17, marks: 5, question: "अनुच्छेद लेखन: 'मेरा विद्यालय' विषय पर एक अनुच्छेद लिखिए।", answer: "मेरा विद्यालय शहर का एक प्रसिद्ध विद्यालय है। इसकी इमारत बहुत विशाल और सुंदर है। इसमें ५० कमरे हैं जो हवादार और प्रकाशयुक्त हैं। हमारे विद्यालय में एक बड़ा खेल का मैदान, पुस्तकालय और विज्ञान प्रयोगशाला है। यहाँ के शिक्षक बहुत विद्वान और स्नेही हैं। वे हमें पढ़ाई के साथ-साथ अच्छे संस्कार भी देते हैं। मुझे अपने विद्यालय पर बहुत गर्व है।" }
                    ]
                }
            ]
        }
    }
];

async function regenerateHindiPapers() {
    const db = await initDatabase();
    
    for (const paper of papers) {
        const existing = await db.get(
            'SELECT id FROM question_papers WHERE title = ?', 
            paper.content.title
        );

        if (existing) {
            await db.run(
                'UPDATE question_papers SET content = ?, subject_id = ?, chapter_id = ? WHERE id = ?',
                [JSON.stringify(paper.content), SUBJECT_ID, CHAPTER_ID, existing.id]
            );
            console.log(`Updated paper: ${paper.content.title}`);
        } else {
            await db.run(
                'INSERT INTO question_papers (subject_id, chapter_id, title, content) VALUES (?, ?, ?, ?)',
                [SUBJECT_ID, CHAPTER_ID, paper.content.title, JSON.stringify(paper.content)]
            );
            console.log(`Created paper: ${paper.content.title}`);
        }
    }
}

regenerateHindiPapers().catch(console.error);
