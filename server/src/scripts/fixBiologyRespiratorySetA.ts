import { getDb } from '../db/database';

// Paper 828: Respiratory System Set A

const fixes = {
  828: {
    'Section A: Multiple Choice Questions (10 marks)': {
      1: {
        question: "What is the main organ of the respiratory system?",
        options: ["Heart", "Lungs", "Brain", "Liver"],
        answer: "Lungs",
        marks: 1
      },
      2: {
        question: "Which gas do we breathe in?",
        options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        answer: "Oxygen",
        marks: 1
      },
      3: {
        question: "What is the windpipe also called?",
        options: ["Bronchus", "Trachea", "Alveoli", "Pharynx"],
        answer: "Trachea",
        marks: 1
      }
    },
    'Section B: Very Short Answer Questions (6 marks)': {
      11: { question: "What is respiration?", answer: "Respiration is the process of taking in oxygen and releasing carbon dioxide, and the breakdown of food to release energy in cells.", marks: 1 },
      12: { question: "Name the organs of the respiratory system.", answer: "Nose, pharynx, larynx, trachea, bronchi, bronchioles, lungs, alveoli, and diaphragm.", marks: 1 },
      13: { question: "What are alveoli?", answer: "Alveoli are tiny air sacs in the lungs where exchange of oxygen and carbon dioxide takes place.", marks: 1 },
      14: { question: "What is the function of the diaphragm?", answer: "The diaphragm is a muscular sheet that helps in breathing by contracting and relaxing to change chest cavity volume.", marks: 1 },
      15: { question: "What is the voice box called?", answer: "The voice box is called the larynx.", marks: 1 },
      16: { question: "What is breathing?", answer: "Breathing is the process of taking air into the lungs (inhalation) and letting it out (exhalation).", marks: 1 }
    },
    'Section C: Short Answer Questions (12 marks)': {
      17: {
        question: "Explain the difference between breathing and respiration. Why are both important?",
        answer: "Breathing vs Respiration:\n\nBREATHING:\n\nDefinition:\n- Physical process\n- Moving air in and out of lungs\n- External process\n- Also called ventilation\n\nProcess:\n1. Inhalation (Breathing in):\n- Air enters through nose/mouth\n- Passes to lungs\n- Brings oxygen in\n\n2. Exhalation (Breathing out):\n- Air leaves lungs\n- Goes out through nose/mouth\n- Removes carbon dioxide\n\nCharacteristics:\n- Voluntary (we can control)\n- Also automatic (continues in sleep)\n- Involves lungs and diaphragm\n- Physical movement of air\n- No energy produced\n\nRESPIRATION:\n\nDefinition:\n- Chemical process\n- Breakdown of food to release energy\n- Internal process\n- Occurs in every cell\n\nProcess:\n- Glucose + Oxygen → Carbon dioxide + Water + Energy (ATP)\n- C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy\n\nTypes:\n1. Aerobic (with oxygen):\n- Complete breakdown of glucose\n- Maximum energy (38 ATP)\n- In mitochondria\n\n2. Anaerobic (without oxygen):\n- Incomplete breakdown\n- Less energy (2 ATP)\n- In cytoplasm\n- Produces lactic acid\n\nCharacteristics:\n- Involuntary (automatic)\n- Occurs in all living cells\n- Chemical reaction\n- Produces energy for life processes\n\nComparison:\n\n| Aspect | Breathing | Respiration |\n|--------|-----------|-------------|\n| Type | Physical | Chemical |\n| Location | Lungs | Every cell |\n| Process | Air movement | Food breakdown |\n| Energy | Not produced | Produced |\n| Control | Can control | Automatic |\n| Stops if | Hold breath | Death |\n\nWhy Both Important:\n\n1. Breathing supplies oxygen:\n- Needed for respiration\n- Removes waste CO₂\n- Without breathing, cells get no oxygen\n\n2. Respiration provides energy:\n- For all life activities\n- Movement, growth, repair\n- Keeping body warm\n- All body functions\n\n3. They work together:\n- Breathing gets oxygen to cells\n- Respiration uses oxygen to make energy\n- Both essential for survival\n- Cannot live without either\n\nConclusion:\nBreathing is getting air in/out, respiration is using oxygen to make energy. Both are essential - breathing supplies what respiration needs, respiration powers life.",
        marks: 6
      },
      18: {
        question: "Describe the pathway of air from the nose to the lungs. What happens at each stage?",
        answer: "Journey of Air Through Respiratory System:\n\n1. NOSE (Nasal Cavity):\n\nStructure:\n- Two nostrils (openings)\n- Nasal cavity lined with mucus\n- Has tiny hairs (cilia)\n- Rich blood supply (warms air)\n\nFunctions:\n- Filters air (hairs trap dust)\n- Warms air (blood vessels)\n- Moistens air (mucus)\n- Smell detection\n\nWhy breathe through nose:\n- Better than mouth breathing\n- Air cleaned before entering lungs\n- Proper filtration\n\n2. PHARYNX (Throat):\n\nStructure:\n- Common passage for air and food\n- About 12 cm long\n- Connects nose to larynx\n- Connects mouth to esophagus\n\nFunction:\n- Passage for air to larynx\n- Passage for food to esophagus\n- Epiglottis prevents food entering windpipe\n\n3. LARYNX (Voice Box):\n\nStructure:\n- Made of cartilage\n- Contains vocal cords\n- At top of trachea\n- Adam's apple (thyroid cartilage)\n\nFunctions:\n- Air passage to trachea\n- Sound production (vocal cords)\n- Vibration of cords makes sound\n- Protected by epiglottis above\n\n4. TRACHEA (Windpipe):\n\nStructure:\n- About 12 cm long tube\n- Supported by C-shaped cartilage rings\n- Lined with mucus and cilia\n- Divides into two bronchi\n\nWhy C-shaped rings:\n- Keep trachea open\n- Prevent collapse\n- Allow food passage in esophagus behind\n- Flexible yet strong\n\nFunction:\n- Passage for air to lungs\n- Cilia move mucus and trapped particles up\n- Cough reflex removes irritants\n\n5. BRONCHI (Singular: Bronchus):\n\nStructure:\n- Two tubes (left and right)\n- Branch from trachea\n- Enter left and right lung\n- Also have cartilage rings\n- Lined with mucus and cilia\n\nFunction:\n- Carry air to each lung\n- Continue filtering and cleaning\n- Further branches into bronchioles\n\n6. BRONCHIOLES:\n\nStructure:\n- Smaller branches of bronchi\n- Like tree branches\n- No cartilage rings\n- Smooth muscle walls\n- Can constrict or dilate\n- End in alveoli\n\nFunction:\n- Distribute air throughout lung\n- Final air passages before alveoli\n- Regulate airflow\n\n7. ALVEOLI (Singular: Alveolus):\n\nStructure:\n- Tiny air sacs\n- Grape-like clusters\n- About 300 million in both lungs\n- Very thin walls (one cell thick)\n- Surrounded by capillaries\n- Moist surface\n\nFunction:\n- Site of gas exchange\n- Oxygen enters blood\n- Carbon dioxide leaves blood\n- Huge surface area (70 sq meters)\n\n8. LUNGS:\n\nStructure:\n- Two spongy organs\n- Right lung: 3 lobes\n- Left lung: 2 lobes (space for heart)\n- Protected by rib cage\n- Covered by pleura (membrane)\n\nFunction:\n- House all air passages and alveoli\n- Main respiratory organs\n- Gas exchange\n\nSummary Path:\nNose → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → Alveoli\n\nTime Taken:\n- Air reaches alveoli in about 1-2 seconds\n- Gas exchange occurs instantly\n- Continuous process\n\nProtection Mechanisms:\n1. Mucus traps particles\n2. Cilia move mucus up\n3. Cough reflex expels irritants\n4. Sneezing clears nasal passage\n5. Cartilage keeps passages open\n\nConclusion:\nThe respiratory pathway is perfectly designed - air is cleaned, warmed, and moistened before reaching delicate alveoli where vital gas exchange occurs.",
        marks: 6
      }
    },
    'Section D: Long Answer Questions (12 marks)': {
      19: {
        question: "Explain the mechanism of breathing. How do inhalation and exhalation occur? Include the role of the diaphragm and rib cage.",
        answer: "Mechanism of Breathing:\n\nWhat is Breathing:\n- Taking air in (inhalation/inspiration)\n- Letting air out (exhalation/expiration)\n- Rhythmic process\n- About 15-18 times per minute at rest\n- Controlled by brain (medulla)\n\nOrgans Involved:\n\n1. DIAPHRAGM:\n- Dome-shaped muscular sheet\n- Separates chest from abdomen\n- Main breathing muscle\n- Most important for breathing\n\n2. RIB CAGE:\n- 12 pairs of ribs\n- Protects lungs and heart\n- Can move up/down and out/in\n- Attached to sternum (breastbone)\n\n3. INTERCOSTAL MUSCLES:\n- Between ribs\n- External intercostals (lift ribs)\n- Internal intercostals (lower ribs)\n\n4. LUNGS:\n- Elastic organs\n- Can expand and contract\n- Follow chest cavity movements\n- No muscles of their own\n\nINHALATION (Breathing In):\n\nWhat Happens:\n\n1. Brain sends signal\n2. Diaphragm contracts:\n   - Moves downward\n   - Flattens from dome shape\n   - Increases chest cavity height\n\n3. External intercostal muscles contract:\n   - Ribs move up and out\n   - Sternum moves forward\n   - Increases chest cavity width\n\n4. Chest cavity volume increases:\n   - Lungs expand\n   - Air pressure inside lungs decreases\n   - Becomes less than atmospheric pressure\n\n5. Air rushes in:\n   - From high pressure (outside) to low pressure (lungs)\n   - Through nose/mouth → trachea → bronchi → alveoli\n   - Lungs fill with air\n   - Oxygen enters blood\n\nActive Process:\n- Requires energy\n- Muscles contract (need ATP)\n- We can control it\n\nEXHALATION (Breathing Out):\n\nWhat Happens:\n\n1. Diaphragm relaxes:\n   - Moves upward\n   - Returns to dome shape\n   - Decreases chest cavity height\n\n2. Intercostal muscles relax:\n   - Ribs move down and in\n   - Sternum moves back\n   - Decreases chest cavity width\n\n3. Chest cavity volume decreases:\n   - Lungs compress\n   - Air pressure inside increases\n   - Becomes more than atmospheric pressure\n\n4. Air rushes out:\n   - From high pressure (lungs) to low pressure (outside)\n   - Carries carbon dioxide\n   - Through bronchi → trachea → nose/mouth\n\n5. Elastic recoil:\n   - Lungs naturally spring back\n   - Like releasing stretched rubber band\n\nPassive Process (at rest):\n- No energy needed\n- Muscles relax\n- Natural elastic recoil\n\n(Active during exercise - uses internal intercostals and abdominal muscles)\n\nBREATHING CYCLE:\n\n| Phase | Diaphragm | Ribs | Chest Volume | Lung Pressure | Air Movement |\n|-------|-----------|------|--------------|---------------|---------------|\n| Inhalation | Contracts (down) | Up & Out | Increases | Decreases | In |\n| Exhalation | Relaxes (up) | Down & In | Decreases | Increases | Out |\n\nPressure Principle:\n- Boyle's Law applies\n- Volume ↑ → Pressure ↓ → Air in\n- Volume ↓ → Pressure ↑ → Air out\n- Like a bellows or pump\n\nBreathing Rate:\n\nAt Rest:\n- 15-18 breaths per minute\n- About 500 ml air per breath\n- Called tidal volume\n\nDuring Exercise:\n- Increases to 40-50 per minute\n- Deeper breaths\n- More oxygen needed\n- More CO₂ to remove\n\nFactors Affecting Rate:\n1. Exercise (increases)\n2. Sleep (decreases)\n3. Emotions (anxiety increases)\n4. Age (faster in children)\n5. Altitude (faster at high altitude)\n6. CO₂ level in blood (main control)\n\nControl of Breathing:\n\n1. Medulla (Brain):\n- Respiratory center\n- Automatic control\n- Detects CO₂ levels\n- Sends signals to muscles\n\n2. Can be voluntary:\n- Can hold breath (limited time)\n- Can breathe fast or slow\n- Cannot stop permanently\n- Automatic system takes over\n\n3. CO₂ is main trigger:\n- Not oxygen deficiency\n- High CO₂ stimulates faster breathing\n- Low CO₂ slows breathing\n\nTypes of Breathing:\n\n1. Diaphragmatic (Abdominal):\n- Main diaphragm movement\n- Belly moves\n- More efficient\n- Deeper breaths\n- Healthier\n\n2. Costal (Chest):\n- Main rib movement\n- Chest moves\n- Shallow breathing\n- Less efficient\n- Common in stress\n\nBreathing Capacity:\n\n1. Tidal Volume:\n- Normal breath: 500 ml\n\n2. Vital Capacity:\n- Maximum air in one breath: 3-5 liters\n- Increases with exercise training\n\n3. Residual Volume:\n- Air always left in lungs: 1-1.5 liters\n- Cannot exhale completely\n- Keeps alveoli from collapsing\n\nAbnormalities:\n\n1. Hiccups:\n- Sudden diaphragm contraction\n- Involuntary\n- \"Hic\" sound\n\n2. Yawning:\n- Deep breath\n- Increases oxygen\n- When tired\n\n3. Sneezing:\n- Sudden forceful exhalation\n- Clears nasal passage\n- Reflex action\n\n4. Coughing:\n- Forceful exhalation\n- Clears trachea/bronchi\n- Protective reflex\n\nConclusion:\nBreathing is a beautifully coordinated process. The diaphragm and rib cage work together like a pump - expanding to draw air in, relaxing to push air out. This happens automatically but can be controlled. The pressure changes drive air movement, ensuring our cells constantly receive oxygen and remove carbon dioxide. It's a perfect example of how structure (diaphragm, ribs, lungs) supports function (gas exchange for respiration).",
        marks: 6
      },
      20: {
        question: "Describe the process of gaseous exchange in the alveoli. What are the adaptations of alveoli for efficient gas exchange?",
        answer: "Gaseous Exchange in Alveoli:\n\nWhat is Gas Exchange:\n- Oxygen enters blood from air\n- Carbon dioxide leaves blood to air\n- Occurs in alveoli\n- Essential for cellular respiration\n- Continuous process\n\nStructure of Alveoli:\n\n1. Tiny Air Sacs:\n- Microscopic size (0.2-0.3 mm)\n- Grape-like clusters\n- At end of bronchioles\n- About 300 million in both lungs\n\n2. Thin Walls:\n- One cell thick (0.001 mm)\n- Made of squamous epithelium\n- Very delicate\n- Allows easy diffusion\n\n3. Blood Capillaries:\n- Surround each alveolus\n- Dense network\n- Also one cell thick\n- Direct contact with alveoli\n\n4. Moist Surface:\n- Thin film of moisture\n- Gases dissolve in it\n- Essential for diffusion\n- Contains surfactant\n\n5. Large Surface Area:\n- Total ≈ 70 square meters\n- Size of tennis court!\n- From millions of alveoli\n- Maximum gas exchange\n\nProcess of Gas Exchange:\n\nOXYGEN EXCHANGE (O₂ into blood):\n\n1. Air in Alveoli:\n- Rich in oxygen (21% in atmosphere)\n- From inhalation\n- High O₂ concentration\n\n2. Blood in Capillaries:\n- Deoxygenated blood arrives\n- From pulmonary artery\n- Comes from body tissues\n- Low O₂ concentration\n- High CO₂ concentration\n\n3. Diffusion of Oxygen:\n- From alveolar air → blood\n- Through alveolar wall\n- Through capillary wall\n- High to low concentration\n- Dissolves in blood plasma\n- Binds to hemoglobin in RBCs\n\n4. Oxygenated Blood:\n- Now rich in oxygen\n- Carried to heart\n- Through pulmonary veins\n- Then pumped to body\n\nCARBON DIOXIDE EXCHANGE (CO₂ out of blood):\n\n1. Blood in Capillaries:\n- Rich in CO₂\n- From body cells (waste product)\n- High CO₂ concentration\n\n2. Air in Alveoli:\n- Low CO₂ concentration\n- From fresh inhaled air\n\n3. Diffusion of CO₂:\n- From blood → alveolar air\n- Through capillary wall\n- Through alveolar wall\n- High to low concentration\n\n4. CO₂ Exhaled:\n- Removed from body\n- During exhalation\n- Through respiratory pathway\n- Out through nose/mouth\n\nMechanism - DIFFUSION:\n\nWhat is Diffusion:\n- Movement of molecules\n- From high to low concentration\n- No energy needed\n- Passive process\n- Down concentration gradient\n\nWhy Diffusion Works:\n1. Concentration difference (gradient)\n2. Very thin barrier (2 cells thick)\n3. Gases small enough to pass\n4. Constant blood flow maintains gradient\n5. Continuous breathing renews air\n\nConcentration Gradients:\n\nIn Alveolar Air:\n- O₂: High (14%)\n- CO₂: Low (0.04%)\n\nIn Deoxygenated Blood:\n- O₂: Low\n- CO₂: High (from cellular respiration)\n\nResult:\n- O₂ moves from alveoli to blood\n- CO₂ moves from blood to alveoli\n- Simultaneous exchange\n- Very rapid (0.25 seconds)\n\nAdaptations for Efficient Gas Exchange:\n\n1. LARGE SURFACE AREA:\n- 300 million alveoli\n- Total = 70 sq meters\n- More area = more exchange\n- Maximum oxygen intake\n\n2. THIN WALLS:\n- Only 2 cells thick (alveolus + capillary)\n- About 0.001 mm\n- Short diffusion distance\n- Faster gas movement\n- Easy passage\n\n3. MOIST SURFACE:\n- Thin layer of fluid\n- Gases dissolve first\n- Then diffuse across\n- Essential for diffusion\n- Contains surfactant\n\n4. RICH BLOOD SUPPLY:\n- Dense capillary network\n- Each alveolus surrounded\n- Brings constant deoxygenated blood\n- Takes away oxygenated blood\n- Maintains concentration gradient\n\n5. GOOD VENTILATION:\n- Constant breathing\n- Fresh air always coming\n- Stale air always leaving\n- Maintains high O₂, low CO₂\n- Keeps gradient steep\n\n6. ELASTIC WALLS:\n- Stretch during inhalation\n- Recoil during exhalation\n- Maximize air exchange\n- Prevent collapse\n\n7. SPHERICAL SHAPE:\n- Maximum volume\n- Minimum surface (efficient)\n- Strong structure\n- Resists pressure\n\n8. SURFACTANT:\n- Special fluid coating\n- Reduces surface tension\n- Prevents alveoli sticking together\n- Prevents collapse\n- Easier inflation\n\n9. CLOSE TO CAPILLARIES:\n- Direct contact\n- No space between\n- Shortest possible path\n- Immediate exchange\n\n10. HUGE NUMBERS:\n- 300 million alveoli\n- Backup if some damaged\n- Massive capacity\n- Can work harder during exercise\n\nComparison with Body Tissues:\n\n| Feature | Alveoli (Lungs) | Tissues (Body) |\n|---------|----------------|----------------|\n| O₂ | High → Low | Low ← High |\n| CO₂ | Low ← High | High → Low |\n| Direction | O₂ in, CO₂ out | O₂ out, CO₂ in |\n| Blood | Deoxygenated → Oxygenated | Oxygenated → Deoxygenated |\n\nFactors Affecting Exchange:\n\n1. Increase Efficiency:\n- Exercise (increases blood flow)\n- Deep breathing\n- Good posture\n- Fresh air\n\n2. Decrease Efficiency:\n- Smoking (damages alveoli)\n- Pollution\n- Diseases (pneumonia, emphysema)\n- Poor ventilation\n- High altitude (low O₂)\n\nDiseases Affecting Alveoli:\n\n1. Pneumonia:\n- Alveoli fill with fluid\n- Less space for gas\n- Difficult breathing\n\n2. Emphysema:\n- Alveoli walls break down\n- Merge into large spaces\n- Less surface area\n- Poor gas exchange\n- From smoking\n\n3. Tuberculosis (TB):\n- Bacteria damage lungs\n- Alveoli destroyed\n- Reduced capacity\n\nImportance:\n- Every cell needs oxygen\n- For cellular respiration\n- To produce energy (ATP)\n- Without it, cells die in minutes\n- Brain cells most sensitive\n- Death in 3-4 minutes without O₂\n\nConclusion:\nAlveoli are marvels of biological engineering. Their structure (thin walls, huge surface area, rich blood supply, moist surface) perfectly suits their function (gas exchange). Through simple diffusion, they ensure every cell in the body receives oxygen and removes waste CO₂. This exchange happens continuously, silently, efficiently - millions of times a day, keeping us alive. The adaptations show how evolution has perfected this vital process.",
        marks: 6
      }
    }
  }
};

async function fixPaper() {
  console.log('🔬 Fixing Biology - Respiratory System Paper 828 (Set A)\n');
  
  const db = await getDb();
  
  try {
    const paperId = '828';
    const paper = await db.get('SELECT id, title, content FROM question_papers WHERE id = ?', paperId);
    const content = JSON.parse(paper.content);
    
    let fixedCount = 0;
    console.log(`📄 Paper ${paperId}: ${paper.title}\n`);
    
    const sections = fixes[828];
    for (const section of content.sections) {
      // @ts-ignore - Dynamic section name indexing
      const sectionFixes = (sections as any)[section.name];
      if (sectionFixes) {
        for (const question of section.questions) {
          const fix = sectionFixes[question.id];
          if (fix) {
            question.question = fix.question;
            question.answer = fix.answer;
            if (fix.options) question.options = fix.options;
            question.marks = fix.marks;
            fixedCount++;
            console.log(`   ✅ Fixed Q${question.id}: ${fix.question.substring(0, 60)}...`);
          }
        }
      }
    }
    
    await db.run(
      'UPDATE question_papers SET content = ? WHERE id = ?',
      JSON.stringify(content),
      paperId
    );
    
    console.log(`\n💾 Paper 828 complete! Saved ${fixedCount} fixes to database\n`);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await db.close();
  }
}

fixPaper().catch(console.error);
