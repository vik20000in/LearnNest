import { initDatabase } from '../db/database';

async function regenerateHistory() {
  console.log('📚 Regenerating History and Civics papers with unique variants...\n');
  
  const db = await initDatabase();
  
  // First, delete all existing History papers
  await db.run(`DELETE FROM question_papers WHERE title LIKE '%History%' OR title LIKE '%Civics%'`);
  console.log('✅ Deleted old History and Civics papers\n');
  
  // Get History subject ID
  const subject = await db.get('SELECT id FROM subjects WHERE name LIKE "%History%"');
  if (!subject) {
    console.log('❌ History subject not found');
    return;
  }
  
  const chapters = [
    { name: 'The Vedic Civilization', topics: ['Aryans', 'Vedas', 'Vedic literature', 'Social structure', 'Economy', 'Religion'] },
    { name: 'The Early Vedic', topics: ['Rigvedic period', 'Settlement', 'Society', 'Polity', 'Lifestyle', 'Culture'] },
    { name: 'Later Vedic Period', topics: ['Expansion', 'Agriculture', 'Iron age', 'Rituals', 'Kingdoms', 'Varna system'] },
    { name: 'Buddhism and Jainism', topics: ['Buddha', 'Mahavira', 'Four Noble Truths', 'Eightfold Path', 'Tirthankaras', 'Nirvana'] },
    { name: 'The Rise of Magadha', topics: ['Bimbisara', 'Ajatashatru', 'Capital cities', 'Military', 'Trade routes', 'Expansion'] },
    { name: 'The Mauryan Empire and Administration', topics: ['Chandragupta', 'Ashoka', 'Administration', 'Military', 'Dhamma', 'Edicts'] },
    { name: 'The Gupta Empire', topics: ['Samudragupta', 'Chandragupta II', 'Golden Age', 'Literature', 'Science', 'Art'] }
  ];
  
  for (const chapter of chapters) {
    console.log(`\n📖 ${chapter.name}`);
    
    for (const variant of ['A', 'B', 'C']) {
      const paper = generateHistoryPaper(chapter.name, chapter.topics, variant, subject.id);
      
      await db.run(
        `INSERT INTO question_papers (subject_id, title, content, variant_set_id, variant_label) 
         VALUES (?, ?, ?, ?, ?)`,
        subject.id,
        paper.title,
        JSON.stringify(paper),
        `${subject.id}-${chapter.name}`,
        variant
      );
      
      console.log(`   ✅ Created Set ${variant} - ${chapter.name}`);
    }
  }
  
  await db.close();
  console.log('\n✨ Successfully regenerated all History and Civics papers!');
}

function generateHistoryPaper(chapterName: string, topics: string[], variant: string, subjectId: number) {
  const paper = {
    title: `HISTORY AND CIVICS Practice Paper - ${chapterName} - Set ${variant}`,
    school: 'LearnNest School',
    class: 'Class 6 ICSE',
    subject: 'HISTORY AND CIVICS',
    duration: '1 hour 30 minutes',
    totalMarks: 40,
    sections: [] as any[]
  };
  
  // Section A: MCQs (10 marks)
  const mcqSection = {
    name: 'Section A: Multiple Choice Questions (10 marks)',
    questions: getMCQsByVariant(chapterName, topics, variant)
  };
  
  // Section B: Very Short Answers (6 marks)
  const veryShortSection = {
    name: 'Section B: Very Short Answer Questions (6 marks)',
    questions: getVeryShortByVariant(chapterName, topics, variant)
  };
  
  // Section C: Short Answers (12 marks)
  const shortSection = {
    name: 'Section C: Short Answer Questions (12 marks)',
    questions: getShortByVariant(chapterName, topics, variant)
  };
  
  // Section D: Long Answers (12 marks)
  const longSection = {
    name: 'Section D: Long Answer Questions (12 marks)',
    questions: getLongByVariant(chapterName, topics, variant)
  };
  
  paper.sections = [mcqSection, veryShortSection, shortSection, longSection];
  return paper;
}

function getMCQsByVariant(chapter: string, topics: string[], variant: string): any[] {
  const mcqs: any = {
    'The Vedic Civilization': {
      A: [
        { q: 'Who composed the Vedas?', opts: ['Aryans', 'Dravidians', 'Greeks', 'Egyptians'], ans: 'Aryans' },
        { q: 'Which is the oldest Veda?', opts: ['Yajur Veda', 'Sama Veda', 'Rig Veda', 'Atharva Veda'], ans: 'Rig Veda' },
        { q: 'How many Vedas are there?', opts: ['2', '3', '4', '5'], ans: '4' },
        { q: 'What language are the Vedas written in?', opts: ['Hindi', 'Sanskrit', 'Prakrit', 'Pali'], ans: 'Sanskrit' },
        { q: 'What was the main occupation of Vedic people?', opts: ['Trade', 'Agriculture and cattle rearing', 'Mining', 'Fishing'], ans: 'Agriculture and cattle rearing' },
        { q: 'Which river is most mentioned in Rig Veda?', opts: ['Ganga', 'Yamuna', 'Saraswati', 'Narmada'], ans: 'Saraswati' },
        { q: 'What were the Vedic priests called?', opts: ['Brahmins', 'Kshatriyas', 'Vaishyas', 'Shudras'], ans: 'Brahmins' },
        { q: 'Which Veda contains musical hymns?', opts: ['Rig Veda', 'Yajur Veda', 'Sama Veda', 'Atharva Veda'], ans: 'Sama Veda' },
        { q: 'What was the unit of exchange in Vedic times?', opts: ['Gold coins', 'Silver coins', 'Cattle', 'Rice'], ans: 'Cattle' },
        { q: 'Which metal was unknown to early Vedic people?', opts: ['Copper', 'Bronze', 'Iron', 'Gold'], ans: 'Iron' }
      ],
      B: [
        { q: 'Which Veda deals with sacrificial formulas?', opts: ['Rig Veda', 'Yajur Veda', 'Sama Veda', 'Atharva Veda'], ans: 'Yajur Veda' },
        { q: 'What was the basic unit of Vedic society?', opts: ['Village', 'Town', 'Family', 'Kingdom'], ans: 'Family' },
        { q: 'Which Veda contains magic spells and charms?', opts: ['Rig Veda', 'Yajur Veda', 'Sama Veda', 'Atharva Veda'], ans: 'Atharva Veda' },
        { q: 'What were the hymns in Rig Veda called?', opts: ['Suktas', 'Shlokas', 'Mantras', 'Upanishads'], ans: 'Suktas' },
        { q: 'Which animal was most sacred to Vedic people?', opts: ['Horse', 'Cow', 'Elephant', 'Lion'], ans: 'Cow' },
        { q: 'How many hymns are there in Rig Veda?', opts: ['500', '1028', '1500', '2000'], ans: '1028' },
        { q: 'What was the Vedic god of fire called?', opts: ['Indra', 'Varuna', 'Agni', 'Surya'], ans: 'Agni' },
        { q: 'Which assembly dealt with judicial matters?', opts: ['Sabha', 'Samiti', 'Vidatha', 'Grama'], ans: 'Sabha' },
        { q: 'What were warriors called in Vedic society?', opts: ['Brahmins', 'Kshatriyas', 'Vaishyas', 'Shudras'], ans: 'Kshatriyas' },
        { q: 'Which river region did early Aryans settle in?', opts: ['Ganga valley', 'Sapta Sindhu region', 'Narmada valley', 'Kaveri delta'], ans: 'Sapta Sindhu region' }
      ],
      C: [
        { q: 'What does "Veda" mean?', opts: ['Knowledge', 'Religion', 'Prayer', 'Ritual'], ans: 'Knowledge' },
        { q: 'Which was the largest Vedic tribal assembly?', opts: ['Sabha', 'Samiti', 'Vidatha', 'Grama'], ans: 'Samiti' },
        { q: 'What was the Vedic tribal chief called?', opts: ['Raja', 'Rajan', 'Samrat', 'Maharaja'], ans: 'Rajan' },
        { q: 'Which god was the king of gods in Vedic times?', opts: ['Agni', 'Indra', 'Varuna', 'Surya'], ans: 'Indra' },
        { q: 'What was the term for a pastoral community?', opts: ['Grama', 'Jana', 'Vis', 'Kula'], ans: 'Jana' },
        { q: 'Which animal sacrifice was most prestigious?', opts: ['Cow sacrifice', 'Horse sacrifice', 'Goat sacrifice', 'Bull sacrifice'], ans: 'Horse sacrifice' },
        { q: 'What were merchants called?', opts: ['Brahmins', 'Kshatriyas', 'Vaishyas', 'Shudras'], ans: 'Vaishyas' },
        { q: 'Which book contains philosophical discussions?', opts: ['Vedas', 'Upanishads', 'Puranas', 'Epics'], ans: 'Upanishads' },
        { q: 'What was a group of villages called?', opts: ['Jana', 'Vis', 'Grama', 'Janapada'], ans: 'Vis' },
        { q: 'Which Veda is primarily in prose?', opts: ['Rig Veda', 'Yajur Veda', 'Sama Veda', 'Atharva Veda'], ans: 'Yajur Veda' }
      ]
    },
    'The Early Vedic': {
      A: [
        { q: 'Early Vedic period is also called:', opts: ['Later Vedic', 'Rigvedic', 'Post-Vedic', 'Epic period'], ans: 'Rigvedic' },
        { q: 'Where did early Vedic people settle?', opts: ['Ganga valley', 'Punjab and surrounding areas', 'Deccan', 'South India'], ans: 'Punjab and surrounding areas' },
        { q: 'What was the main drink in Vedic times?', opts: ['Tea', 'Soma', 'Coffee', 'Milk'], ans: 'Soma' },
        { q: 'The family in early Vedic period was:', opts: ['Matriarchal', 'Patriarchal', 'Joint', 'Nuclear'], ans: 'Patriarchal' },
        { q: 'Early Vedic women had the right to:', opts: ['Vote', 'Property', 'Education', 'All of these'], ans: 'Education' },
        { q: 'Which metal was widely used?', opts: ['Iron', 'Steel', 'Copper and bronze', 'Silver'], ans: 'Copper and bronze' },
        { q: 'Early Vedic society was divided into:', opts: ['Two classes', 'Three classes', 'Four classes', 'Five classes'], ans: 'Four classes' },
        { q: 'Gambling was popular using:', opts: ['Cards', 'Dice', 'Stones', 'Coins'], ans: 'Dice' },
        { q: 'The early Vedic economy was based on:', opts: ['Industry', 'Pastoralism', 'Trade', 'Fishing'], ans: 'Pastoralism' },
        { q: 'Which god was worshipped for rain?', opts: ['Agni', 'Surya', 'Indra', 'Vayu'], ans: 'Indra' }
      ],
      B: [
        { q: 'What was the term for king in early Vedic?', opts: ['Raja', 'Samrat', 'Rajan', 'Maharaja'], ans: 'Rajan' },
        { q: 'The early Vedic polity was:', opts: ['Monarchy', 'Democracy', 'Tribal', 'Republic'], ans: 'Tribal' },
        { q: 'Which animal was used in battles?', opts: ['Elephant', 'Horse and chariot', 'Camel', 'Bull'], ans: 'Horse and chariot' },
        { q: 'The king was chosen by:', opts: ['Birth', 'Election', 'Combat', 'Lottery'], ans: 'Election' },
        { q: 'What was the priests main duty?', opts: ['Fighting', 'Performing rituals', 'Trading', 'Farming'], ans: 'Performing rituals' },
        { q: 'Early Vedic people wore:', opts: ['Cotton', 'Silk', 'Wool', 'Leather'], ans: 'Wool' },
        { q: 'Which river is called Shutudri?', opts: ['Ganga', 'Yamuna', 'Sutlej', 'Indus'], ans: 'Sutlej' },
        { q: 'The assemblies controlled the:', opts: ['Army', 'King', 'Trade', 'Temples'], ans: 'King' },
        { q: 'Cattle raids were called:', opts: ['Yuddha', 'Gavishti', 'Sangrama', 'Kalaha'], ans: 'Gavishti' },
        { q: 'Which food was staple?', opts: ['Rice', 'Wheat', 'Barley', 'Millet'], ans: 'Barley' }
      ],
      C: [
        { q: 'The term for unmarried girls was:', opts: ['Kumari', 'Amajur', 'Kanya', 'Balika'], ans: 'Amajur' },
        { q: 'Child marriage was:', opts: ['Common', 'Rare', 'Mandatory', 'Forbidden'], ans: 'Rare' },
        { q: 'The main form of worship was:', opts: ['Temple worship', 'Sacrifice (Yajna)', 'Meditation', 'Idol worship'], ans: 'Sacrifice (Yajna)' },
        { q: 'Gods were believed to be:', opts: ['Invisible', 'Human-like', 'Natural forces', 'Animals'], ans: 'Natural forces' },
        { q: 'The purohit was the kings:', opts: ['Minister', 'Priest', 'Commander', 'Treasurer'], ans: 'Priest' },
        { q: 'Which weapon was common?', opts: ['Sword', 'Bow and arrow', 'Spear', 'Axe'], ans: 'Bow and arrow' },
        { q: 'The Vedic god of water was:', opts: ['Indra', 'Varuna', 'Agni', 'Vayu'], ans: 'Varuna' },
        { q: 'Houses were made of:', opts: ['Stone', 'Brick', 'Wood and bamboo', 'Mud'], ans: 'Wood and bamboo' },
        { q: 'Music was played on:', opts: ['Veena', 'Tabla', 'Flute', 'All of these'], ans: 'All of these' },
        { q: 'The term for battle was:', opts: ['Yuddha', 'Sangrama', 'Gavishti', 'Both A and B'], ans: 'Both A and B' }
      ]
    },
    'Later Vedic Period': {
      A: [
        { q: 'Later Vedic period spans which centuries?', opts: ['1500-1000 BCE', '1000-600 BCE', '600-400 BCE', '400-200 BCE'], ans: '1000-600 BCE' },
        { q: 'People expanded to which region?', opts: ['Punjab', 'Ganga valley', 'Deccan', 'South India'], ans: 'Ganga valley' },
        { q: 'Which metal came into use?', opts: ['Copper', 'Bronze', 'Iron', 'Steel'], ans: 'Iron' },
        { q: 'Iron helped in:', opts: ['Making weapons', 'Clearing forests', 'Making tools', 'All of these'], ans: 'All of these' },
        { q: 'Agriculture became:', opts: ['Less important', 'More important', 'Same', 'Ended'], ans: 'More important' },
        { q: 'The varna system became:', opts: ['Flexible', 'Rigid', 'Ended', 'Simpler'], ans: 'Rigid' },
        { q: 'The status of women:', opts: ['Improved', 'Declined', 'Same', 'Unknown'], ans: 'Declined' },
        { q: 'Which sacrifice became important?', opts: ['Ashvamedha', 'Rajasuya', 'Both A and B', 'None'], ans: 'Both A and B' },
        { q: 'Kingdoms became:', opts: ['Smaller', 'Larger', 'Tribal', 'Democratic'], ans: 'Larger' },
        { q: 'The king became:', opts: ['Less powerful', 'More powerful', 'Elected', 'Temporary'], ans: 'More powerful' }
      ],
      B: [
        { q: 'Which was the most powerful kingdom?', opts: ['Kuru', 'Panchala', 'Kashi', 'Kosala'], ans: 'Kuru' },
        { q: 'The capital of Kuru was:', opts: ['Hastinapura', 'Kashi', 'Ayodhya', 'Pataliputra'], ans: 'Hastinapura' },
        { q: 'Society was divided into:', opts: ['Two varnas', 'Three varnas', 'Four varnas', 'Five varnas'], ans: 'Four varnas' },
        { q: 'Which varna was at top?', opts: ['Kshatriya', 'Brahmin', 'Vaishya', 'Shudra'], ans: 'Brahmin' },
        { q: 'Women could no longer:', opts: ['Study', 'Marry', 'Own property', 'Work'], ans: 'Study' },
        { q: 'Child marriage became:', opts: ['Rare', 'Common', 'Illegal', 'Unknown'], ans: 'Common' },
        { q: 'Gotra system was based on:', opts: ['Occupation', 'Birth', 'Wealth', 'Merit'], ans: 'Birth' },
        { q: 'Rice cultivation spread in:', opts: ['Punjab', 'Ganga valley', 'Rajasthan', 'Gujarat'], ans: 'Ganga valley' },
        { q: 'New crafts included:', opts: ['Pottery', 'Carpentry', 'Metallurgy', 'All of these'], ans: 'All of these' },
        { q: 'Trade was conducted by:', opts: ['Brahmins', 'Kshatriyas', 'Vaishyas', 'Shudras'], ans: 'Vaishyas' }
      ],
      C: [
        { q: 'The Sabha became:', opts: ['More powerful', 'Less powerful', 'Same', 'Abolished'], ans: 'Less powerful' },
        { q: 'The Samiti became:', opts: ['Larger', 'Smaller', 'More exclusive', 'Democratic'], ans: 'More exclusive' },
        { q: 'Taxes were paid in:', opts: ['Money', 'Cattle', 'Grain', 'All of these'], ans: 'Grain' },
        { q: 'The tax was called:', opts: ['Bali', 'Bhaga', 'Kara', 'All of these'], ans: 'All of these' },
        { q: 'Which god became supreme?', opts: ['Indra', 'Prajapati', 'Agni', 'Varuna'], ans: 'Prajapati' },
        { q: 'Rituals became:', opts: ['Simpler', 'More complex', 'Less important', 'Rare'], ans: 'More complex' },
        { q: 'The Upanishads emphasized:', opts: ['Rituals', 'Knowledge', 'Wealth', 'Power'], ans: 'Knowledge' },
        { q: 'Ashrams in life were:', opts: ['Two', 'Three', 'Four', 'Five'], ans: 'Four' },
        { q: 'The first ashram was:', opts: ['Grihastha', 'Brahmacharya', 'Vanaprastha', 'Sannyasa'], ans: 'Brahmacharya' },
        { q: 'Moksha means:', opts: ['Wealth', 'Power', 'Liberation', 'Duty'], ans: 'Liberation' }
      ]
    },
    'Buddhism and Jainism': {
      A: [
        { q: 'Who founded Buddhism?', opts: ['Mahavira', 'Gautama Buddha', 'Ashoka', 'Chandragupta'], ans: 'Gautama Buddha' },
        { q: 'Buddha was born in:', opts: ['Varanasi', 'Lumbini', 'Bodh Gaya', 'Sarnath'], ans: 'Lumbini' },
        { q: 'Buddha attained enlightenment at:', opts: ['Lumbini', 'Bodh Gaya', 'Sarnath', 'Kushinagar'], ans: 'Bodh Gaya' },
        { q: 'First sermon was at:', opts: ['Lumbini', 'Bodh Gaya', 'Sarnath', 'Kushinagar'], ans: 'Sarnath' },
        { q: 'How many Noble Truths?', opts: ['Two', 'Three', 'Four', 'Eight'], ans: 'Four' },
        { q: 'The Eightfold Path has:', opts: ['Four steps', 'Six steps', 'Eight steps', 'Ten steps'], ans: 'Eight steps' },
        { q: 'Buddhism rejects:', opts: ['God', 'Caste system', 'Violence', 'All of these'], ans: 'All of these' },
        { q: 'Nirvana means:', opts: ['Heaven', 'Liberation', 'Rebirth', 'Hell'], ans: 'Liberation' },
        { q: 'Who founded Jainism?', opts: ['Buddha', 'Mahavira', 'Ashoka', 'Nanak'], ans: 'Mahavira' },
        { q: 'Mahavira was born in:', opts: ['Vaishali', 'Patna', 'Delhi', 'Agra'], ans: 'Vaishali' }
      ],
      B: [
        { q: 'Jain monks took how many vows?', opts: ['Three', 'Four', 'Five', 'Six'], ans: 'Five' },
        { q: 'The most important Jain principle:', opts: ['Ahimsa', 'Truth', 'Non-stealing', 'Celibacy'], ans: 'Ahimsa' },
        { q: 'Jain teachers were called:', opts: ['Buddha', 'Tirthankara', 'Guru', 'Swami'], ans: 'Tirthankara' },
        { q: 'How many Tirthankaras?', opts: ['12', '18', '24', '36'], ans: '24' },
        { q: 'Buddhism spread under which emperor?', opts: ['Chandragupta', 'Ashoka', 'Kanishka', 'Harsha'], ans: 'Ashoka' },
        { q: 'Buddhist texts are in:', opts: ['Sanskrit', 'Pali', 'Prakrit', 'Hindi'], ans: 'Pali' },
        { q: 'The Buddhist community is called:', opts: ['Sabha', 'Sangha', 'Samaj', 'Samiti'], ans: 'Sangha' },
        { q: 'Buddha died at:', opts: ['Lumbini', 'Bodh Gaya', 'Sarnath', 'Kushinagar'], ans: 'Kushinagar' },
        { q: 'Buddhas birth name was:', opts: ['Gautama', 'Siddhartha', 'Shakyamuni', 'Tathagata'], ans: 'Siddhartha' },
        { q: 'Buddhism emphasizes:', opts: ['Rituals', 'Compassion', 'Wealth', 'Power'], ans: 'Compassion' }
      ],
      C: [
        { q: 'Jainism believes in:', opts: ['One God', 'Many Gods', 'No God', 'Unknown'], ans: 'No God' },
        { q: 'Jains practice:', opts: ['Vegetarianism', 'Non-violence', 'Truthfulness', 'All of these'], ans: 'All of these' },
        { q: 'The first Tirthankara was:', opts: ['Mahavira', 'Parshvanatha', 'Rishabhadeva', 'Neminatha'], ans: 'Rishabhadeva' },
        { q: 'Jain scriptures are called:', opts: ['Vedas', 'Agamas', 'Upanishads', 'Puranas'], ans: 'Agamas' },
        { q: 'Mahavira attained moksha at:', opts: ['Vaishali', 'Pavapuri', 'Patna', 'Rajgir'], ans: 'Pavapuri' },
        { q: 'Buddhist monastery is called:', opts: ['Temple', 'Vihara', 'Math', 'Ashram'], ans: 'Vihara' },
        { q: 'The Middle Path avoids:', opts: ['Luxury', 'Severe penance', 'Both A and B', 'Neither'], ans: 'Both A and B' },
        { q: 'Buddha belonged to which clan?', opts: ['Maurya', 'Shakya', 'Gupta', 'Licchavi'], ans: 'Shakya' },
        { q: 'Three Jewels of Jainism are:', opts: ['Right faith, knowledge, conduct', 'Wealth, health, happiness', 'Power, glory, fame', 'None'], ans: 'Right faith, knowledge, conduct' },
        { q: 'Buddhism was preached in:', opts: ['Sanskrit', 'Pali', 'Common language', 'Both B and C'], ans: 'Both B and C' }
      ]
    },
    'The Rise of Magadha': {
      A: [
        { q: 'Magadha was located in:', opts: ['Punjab', 'Modern Bihar', 'Bengal', 'Gujarat'], ans: 'Modern Bihar' },
        { q: 'First powerful king of Magadha:', opts: ['Ajatashatru', 'Bimbisara', 'Ashoka', 'Chandragupta'], ans: 'Bimbisara' },
        { q: 'Bimbisara ruled from:', opts: ['Pataliputra', 'Rajgir', 'Vaishali', 'Ujjain'], ans: 'Rajgir' },
        { q: 'Bimbisara belonged to which dynasty?', opts: ['Maurya', 'Haryanka', 'Gupta', 'Nanda'], ans: 'Haryanka' },
        { q: 'Who succeeded Bimbisara?', opts: ['Ashoka', 'Ajatashatru', 'Chandragupta', 'Udayin'], ans: 'Ajatashatru' },
        { q: 'Ajatashatru fortified:', opts: ['Rajgir', 'Pataliputra', 'Vaishali', 'Ujjain'], ans: 'Pataliputra' },
        { q: 'Magadhas location had:', opts: ['Rivers', 'Forests', 'Iron ore', 'All of these'], ans: 'All of these' },
        { q: 'Which river protected Magadha?', opts: ['Ganga', 'Yamuna', 'Son and Ganga', 'Narmada'], ans: 'Son and Ganga' },
        { q: 'Magadha had a strong:', opts: ['Navy', 'Army', 'Trade network', 'All of these'], ans: 'All of these' },
        { q: 'Elephants were used in:', opts: ['Agriculture', 'Battle', 'Transport', 'Rituals'], ans: 'Battle' }
      ],
      B: [
        { q: 'Bimbisara expanded through:', opts: ['War', 'Diplomacy', 'Marriage', 'All of these'], ans: 'All of these' },
        { q: 'He married princess of:', opts: ['Kosala', 'Vaishali', 'Kashi', 'All of these'], ans: 'All of these' },
        { q: 'Bimbisara was a patron of:', opts: ['Buddhism', 'Jainism', 'Both A and B', 'Neither'], ans: 'Both A and B' },
        { q: 'Ajatashatru conquered:', opts: ['Kosala', 'Vaishali', 'Both A and B', 'Neither'], ans: 'Both A and B' },
        { q: 'He used new weapons like:', opts: ['Rathamusala', 'Mahashilakantaka', 'Both A and B', 'Neither'], ans: 'Both A and B' },
        { q: 'Capital shifted to Pataliputra under:', opts: ['Bimbisara', 'Ajatashatru', 'Udayin', 'Mahapadma Nanda'], ans: 'Udayin' },
        { q: 'The Nanda dynasty was founded by:', opts: ['Bimbisara', 'Ajatashatru', 'Mahapadma Nanda', 'Dhana Nanda'], ans: 'Mahapadma Nanda' },
        { q: 'Nandas had a huge:', opts: ['Navy', 'Army', 'Treasury', 'All of these'], ans: 'All of these' },
        { q: 'Last Nanda ruler was:', opts: ['Mahapadma', 'Dhana Nanda', 'Chandragupta', 'Ashoka'], ans: 'Dhana Nanda' },
        { q: 'Nandas were overthrown by:', opts: ['Mauryas', 'Guptas', 'Kushanas', 'Harsha'], ans: 'Mauryas' }
      ],
      C: [
        { q: 'Magadhas rise was due to:', opts: ['Strategic location', 'Natural resources', 'Strong rulers', 'All of these'], ans: 'All of these' },
        { q: 'Iron helped in making:', opts: ['Weapons', 'Tools', 'Both A and B', 'Neither'], ans: 'Both A and B' },
        { q: 'Forests provided:', opts: ['Timber', 'Elephants', 'Both A and B', 'Neither'], ans: 'Both A and B' },
        { q: 'Rivers helped in:', opts: ['Trade', 'Defense', 'Agriculture', 'All of these'], ans: 'All of these' },
        { q: 'Bimbisara reigned for:', opts: ['28 years', '38 years', '48 years', '52 years'], ans: '52 years' },
        { q: 'He maintained friendly relations with:', opts: ['Avanti', 'Gandhara', 'Both A and B', 'Neither'], ans: 'Both A and B' },
        { q: 'First Buddhist council was held under:', opts: ['Bimbisara', 'Ajatashatru', 'Ashoka', 'Kanishka'], ans: 'Ajatashatru' },
        { q: 'Pataliputra was at confluence of:', opts: ['Ganga-Yamuna', 'Ganga-Son', 'Ganga-Gandak', 'All of these'], ans: 'Ganga-Son' },
        { q: 'Magadha controlled important:', opts: ['Trade routes', 'Iron mines', 'Fertile land', 'All of these'], ans: 'All of these' },
        { q: 'Nandas ruled for about:', opts: ['50 years', '100 years', '150 years', '200 years'], ans: '100 years' }
      ]
    },
    'The Mauryan Empire and Administration': {
      A: [
        { q: 'Mauryan Empire was founded by:', opts: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Bimbisara'], ans: 'Chandragupta Maurya' },
        { q: 'Chandragupta was helped by:', opts: ['Kautilya', 'Ashoka', 'Megasthenes', 'Patanjali'], ans: 'Kautilya' },
        { q: 'Capital of Mauryan Empire:', opts: ['Taxila', 'Pataliputra', 'Ujjain', 'Varanasi'], ans: 'Pataliputra' },
        { q: 'Chandragupta defeated:', opts: ['Alexander', 'Seleucus', 'Darius', 'Xerxes'], ans: 'Seleucus' },
        { q: 'Greek ambassador to Mauryan court:', opts: ['Alexander', 'Megasthenes', 'Herodotus', 'Strabo'], ans: 'Megasthenes' },
        { q: 'Who succeeded Chandragupta?', opts: ['Ashoka', 'Bindusara', 'Dasharatha', 'Brihadratha'], ans: 'Bindusara' },
        { q: 'Most famous Mauryan ruler:', opts: ['Chandragupta', 'Bindusara', 'Ashoka', 'Dasharatha'], ans: 'Ashoka' },
        { q: 'Ashoka became Buddhist after:', opts: ['Coronation', 'Kalinga war', 'Pilgrimage', 'Dream'], ans: 'Kalinga war' },
        { q: 'Ashokas policy was called:', opts: ['Rajdharma', 'Dhamma', 'Dharma', 'Righteousness'], ans: 'Dhamma' },
        { q: 'Ashoka sent missions to:', opts: ['Sri Lanka', 'Myanmar', 'Central Asia', 'All of these'], ans: 'All of these' }
      ],
      B: [
        { q: 'Arthashastra was written by:', opts: ['Ashoka', 'Chandragupta', 'Kautilya', 'Megasthenes'], ans: 'Kautilya' },
        { q: 'Indica was written by:', opts: ['Kautilya', 'Megasthenes', 'Ashoka', 'Patanjali'], ans: 'Megasthenes' },
        { q: 'Empire was divided into:', opts: ['Provinces', 'Districts', 'Villages', 'All of these'], ans: 'All of these' },
        { q: 'Provinces were ruled by:', opts: ['King', 'Princes', 'Ministers', 'Governors'], ans: 'Princes' },
        { q: 'Villages were headed by:', opts: ['King', 'Minister', 'Gramani', 'Samaharta'], ans: 'Gramani' },
        { q: 'Royal highway connected:', opts: ['Pataliputra to Taxila', 'Delhi to Agra', 'Varanasi to Rajgir', 'Ujjain to Sanchi'], ans: 'Pataliputra to Taxila' },
        { q: 'Army had how many parts?', opts: ['Two', 'Four', 'Six', 'Eight'], ans: 'Six' },
        { q: 'Spies were called:', opts: ['Gupta', 'Mahamatya', 'Yukta', 'All of these'], ans: 'All of these' },
        { q: 'Main source of revenue:', opts: ['Trade', 'Land tax', 'Tribute', 'Gifts'], ans: 'Land tax' },
        { q: 'Tax on land was about:', opts: ['1/6th', '1/4th', '1/3rd', '1/2'], ans: '1/6th' }
      ],
      C: [
        { q: 'Ashokas edicts are in:', opts: ['Sanskrit', 'Pali', 'Prakrit', 'Both B and C'], ans: 'Both B and C' },
        { q: 'Most edicts are on:', opts: ['Gold plates', 'Rock pillars', 'Palm leaves', 'Copper plates'], ans: 'Rock pillars' },
        { q: 'Lion capital is from:', opts: ['Sanchi', 'Sarnath', 'Bodh Gaya', 'Lumbini'], ans: 'Sarnath' },
        { q: 'Dhamma emphasized:', opts: ['Non-violence', 'Respect to elders', 'Religious tolerance', 'All of these'], ans: 'All of these' },
        { q: 'Officers called Dhamma Mahamatras:', opts: ['Collected tax', 'Judged cases', 'Spread Dhamma', 'Led army'], ans: 'Spread Dhamma' },
        { q: 'Mauryan administration was:', opts: ['Decentralized', 'Centralized', 'Federal', 'Democratic'], ans: 'Centralized' },
        { q: 'Council of ministers was called:', opts: ['Sabha', 'Mantriparishad', 'Samiti', 'Paura'], ans: 'Mantriparishad' },
        { q: 'Chief minister was called:', opts: ['Mantri', 'Mahamatya', 'Senapati', 'Purohit'], ans: 'Mahamatya' },
        { q: 'Commander-in-chief was:', opts: ['Mahamatya', 'Senapati', 'Samaharta', 'Sannidhata'], ans: 'Senapati' },
        { q: 'Mauryan Empire declined after:', opts: ['Chandragupta', 'Bindusara', 'Ashoka', 'Brihadratha'], ans: 'Ashoka' }
      ]
    },
    'The Gupta Empire': {
      A: [
        { q: 'Gupta period is called:', opts: ['Dark Age', 'Golden Age', 'Medieval Age', 'Modern Age'], ans: 'Golden Age' },
        { q: 'Gupta Empire was founded by:', opts: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Skandagupta'], ans: 'Chandragupta I' },
        { q: 'Most powerful Gupta ruler:', opts: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Skandagupta'], ans: 'Samudragupta' },
        { q: 'Samudragupta was called:', opts: ['Napoleon of India', 'Ashoka of India', 'Alexander of India', 'Caesar of India'], ans: 'Napoleon of India' },
        { q: 'Allahabad Pillar inscription is about:', opts: ['Ashoka', 'Samudragupta', 'Chandragupta II', 'Harsha'], ans: 'Samudragupta' },
        { q: 'Chandragupta II was also called:', opts: ['Samrat', 'Vikramaditya', 'Maharaja', 'Chakravarti'], ans: 'Vikramaditya' },
        { q: 'Chinese traveler Fa-Hien visited during:', opts: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Skandagupta'], ans: 'Chandragupta II' },
        { q: 'Gupta capital was:', opts: ['Pataliputra', 'Ujjain', 'Both A and B', 'Taxila'], ans: 'Both A and B' },
        { q: 'Gupta administration was:', opts: ['Centralized', 'Decentralized', 'Federal', 'Democratic'], ans: 'Decentralized' },
        { q: 'Land grants were called:', opts: ['Agrahara', 'Dana', 'Dakshina', 'Bhumi'], ans: 'Agrahara' }
      ],
      B: [
        { q: 'Kalidasa lived in court of:', opts: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Harsha'], ans: 'Chandragupta II' },
        { q: 'Kalidasa wrote:', opts: ['Meghaduta', 'Shakuntala', 'Raghuvamsha', 'All of these'], ans: 'All of these' },
        { q: 'Aryabhata was a:', opts: ['Poet', 'Mathematician', 'Historian', 'Sculptor'], ans: 'Mathematician' },
        { q: 'Aryabhata discovered:', opts: ['Gravity', 'Zero', 'Earths rotation', 'Atom'], ans: 'Earths rotation' },
        { q: 'Decimal system was developed in:', opts: ['Mauryan period', 'Gupta period', 'Mughal period', 'British period'], ans: 'Gupta period' },
        { q: 'Sanskrit literature flourished under:', opts: ['Mauryas', 'Guptas', 'Mughals', 'British'], ans: 'Guptas' },
        { q: 'Famous Sanskrit grammar was by:', opts: ['Kalidasa', 'Panini', 'Aryabhata', 'Varahamihira'], ans: 'Panini' },
        { q: 'Nalanda University was in:', opts: ['Punjab', 'Bihar', 'Bengal', 'Gujarat'], ans: 'Bihar' },
        { q: 'Iron pillar at Delhi is from:', opts: ['Mauryan', 'Gupta', 'Mughal', 'British'], ans: 'Gupta' },
        { q: 'Ajanta caves have:', opts: ['Sculptures', 'Paintings', 'Both A and B', 'Neither'], ans: 'Both A and B' }
      ],
      C: [
        { q: 'Gupta coinage was mainly of:', opts: ['Copper', 'Silver', 'Gold', 'Bronze'], ans: 'Gold' },
        { q: 'Trade was conducted with:', opts: ['Rome', 'China', 'Southeast Asia', 'All of these'], ans: 'All of these' },
        { q: 'Guilds were called:', opts: ['Shreni', 'Sangha', 'Sabha', 'Samiti'], ans: 'Shreni' },
        { q: 'Village assembly was:', opts: ['Sabha', 'Samiti', 'Panchayat', 'Parishad'], ans: 'Panchayat' },
        { q: 'Gupta Empire declined due to:', opts: ['Weak rulers', 'Huna invasions', 'Internal conflicts', 'All of these'], ans: 'All of these' },
        { q: 'Hunas came from:', opts: ['China', 'Central Asia', 'Southeast Asia', 'West Asia'], ans: 'Central Asia' },
        { q: 'Skandagupta fought against:', opts: ['Shakas', 'Kushanas', 'Hunas', 'Greeks'], ans: 'Hunas' },
        { q: 'Gupta art is seen in:', opts: ['Ajanta', 'Ellora', 'Sanchi', 'All of these'], ans: 'All of these' },
        { q: 'Buddhism in Gupta period was:', opts: ['Growing', 'Declining', 'Same', 'Ended'], ans: 'Declining' },
        { q: 'Hinduism in Gupta period:', opts: ['Declined', 'Revived', 'Ended', 'Same'], ans: 'Revived' }
      ]
    }
  };
  
  const defaultMCQs = [
    { q: 'Which period does this chapter cover?', opts: ['Ancient', 'Medieval', 'Modern', 'Contemporary'], ans: 'Ancient' },
    { q: 'Where did these events occur?', opts: ['North India', 'South India', 'Central India', 'All of India'], ans: 'North India' },
    { q: 'Who were the main rulers?', opts: ['Kings', 'Queens', 'Nobles', 'All of these'], ans: 'Kings' },
    { q: 'What was the main religion?', opts: ['Hinduism', 'Buddhism', 'Jainism', 'All of these'], ans: 'All of these' },
    { q: 'How did society function?', opts: ['Varna system', 'Democracy', 'Monarchy', 'Tribal'], ans: 'Varna system' },
    { q: 'What was the economy based on?', opts: ['Agriculture', 'Trade', 'Industry', 'All of these'], ans: 'All of these' },
    { q: 'Which language was used?', opts: ['Sanskrit', 'Pali', 'Prakrit', 'All of these'], ans: 'All of these' },
    { q: 'What were the main achievements?', opts: ['Art', 'Literature', 'Science', 'All of these'], ans: 'All of these' },
    { q: 'How did the empire expand?', opts: ['Conquest', 'Diplomacy', 'Marriage', 'All of these'], ans: 'All of these' },
    { q: 'Why did this period end?', opts: ['Invasions', 'Weak rulers', 'Economic decline', 'All of these'], ans: 'All of these' }
  ];
  
  const chapterMCQs = mcqs[chapter]?.[variant] || defaultMCQs;
  
  return chapterMCQs.map((mcq: any, idx: number) => ({
    id: idx + 1,
    question: mcq.q,
    options: mcq.opts,
    answer: mcq.ans,
    marks: 1
  }));
}

function getVeryShortByVariant(chapter: string, topics: string[], variant: string): any[] {
  const bases = [
    `What is ${topics[0]}?`,
    `Explain ${topics[1]}.`,
    `Define ${topics[2]}.`,
    `What is ${topics[3]}?`,
    `Describe ${topics[4]}.`,
    `Mention ${topics[5]}.`
  ];
  
  const variations: any = {
    A: bases,
    B: bases.map((q, i) => q.replace(topics[i], topics[(i + 1) % topics.length])),
    C: bases.map((q, i) => q.replace(topics[i], topics[(i + 2) % topics.length]))
  };
  
  const questions = variations[variant] || bases;
  
  return questions.map((q: string, idx: number) => ({
    id: idx + 11,
    question: q,
    marks: 1
  }));
}

function getShortByVariant(chapter: string, topics: string[], variant: string): any[] {
  const bases = [
    `Discuss the importance of ${topics[0]} in ${chapter}.`,
    `Explain the role of ${topics[1]} during this period.`
  ];
  
  const variations: any = {
    A: bases,
    B: [
      `Describe how ${topics[2]} influenced ${chapter}.`,
      `What was the significance of ${topics[3]}?`
    ],
    C: [
      `Analyze the impact of ${topics[4]} on society.`,
      `Explain the development of ${topics[5]} in this era.`
    ]
  };
  
  const questions = variations[variant] || bases;
  
  return questions.map((q: string, idx: number) => ({
    id: idx + 17,
    question: q,
    marks: 6
  }));
}

function getLongByVariant(chapter: string, topics: string[], variant: string): any[] {
  const bases = [
    `Write a detailed account of ${chapter}. Cover all major aspects.`,
    `Explain the main features and significance of this period.`
  ];
  
  const variations: any = {
    A: bases,
    B: [
      `Describe the political, social and economic conditions during ${chapter}.`,
      `What were the major achievements and contributions of this era?`
    ],
    C: [
      `Analyze the causes and effects of major developments in ${chapter}.`,
      `Compare and contrast different aspects of this historical period.`
    ]
  };
  
  const questions = variations[variant] || bases;
  
  return questions.map((q: string, idx: number) => ({
    id: idx + 19,
    question: q,
    marks: 6
  }));
}

regenerateHistory().catch(console.error);
