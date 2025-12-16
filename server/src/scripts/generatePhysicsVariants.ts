import { initDatabase } from '../db/database';

async function generatePhysicsVariants() {
    console.log('Generating Set A, B, C variants for all Physics chapters...\n');
    
    const db = await initDatabase();
    
    // Find Physics subject
    const physicsSubject = await db.get('SELECT id, name FROM subjects WHERE name LIKE "%Physics%"');
    
    if (!physicsSubject) {
        console.log('❌ Physics subject not found');
        console.log('\nAvailable subjects:');
        const subjects = await db.all('SELECT id, name FROM subjects');
        subjects.forEach(s => console.log(`   ${s.id}: ${s.name}`));
        return;
    }

    console.log(`✅ Found subject: ${physicsSubject.name} (ID: ${physicsSubject.id})\n`);

    // Get all Physics chapters
    const chapters = await db.all('SELECT id, name FROM chapters WHERE subject_id = ?', physicsSubject.id);
    
    if (chapters.length === 0) {
        console.log('❌ No chapters found for Physics');
        return;
    }

    console.log(`📚 Found ${chapters.length} Physics chapters:\n`);
    chapters.forEach((ch, i) => console.log(`   ${i + 1}. ${ch.name}`));
    console.log('\n');

    let totalGenerated = 0;
    const variantLabels = ['A', 'B', 'C'];

    // Generate variants for each chapter
    for (const chapter of chapters) {
        const variantSetId = `physics_${chapter.id}_${Date.now()}`;
        console.log(`\n📝 Generating variants for: ${chapter.name}`);
        console.log(`   Variant Set ID: ${variantSetId}`);

        for (const label of variantLabels) {
            const paper = {
                title: `Physics Practice Paper - ${chapter.name} - Set ${label}`,
                school: "LearnNest School",
                class: "Class 6 ICSE",
                subject: physicsSubject.name,
                duration: "1 hour 30 minutes",
                totalMarks: 40,
                sections: [
                    {
                        name: "Section A: Multiple Choice Questions (10 marks)",
                        questions: generateMCQs(chapter.name, label)
                    },
                    {
                        name: "Section B: Very Short Answer Questions (12 marks)",
                        questions: generateVeryShortAnswers(chapter.name, label)
                    },
                    {
                        name: "Section C: Short Answer Questions (8 marks)",
                        questions: generateShortAnswers(chapter.name, label)
                    },
                    {
                        name: "Section D: Long Answer Questions (10 marks)",
                        questions: generateLongAnswers(chapter.name, label)
                    }
                ]
            };

            const result = await db.run(
                'INSERT INTO question_papers (subject_id, chapter_id, title, content, variant_set_id, variant_label) VALUES (?, ?, ?, ?, ?, ?)',
                physicsSubject.id,
                chapter.id,
                paper.title,
                JSON.stringify(paper),
                variantSetId,
                label
            );

            console.log(`   ✅ Set ${label} created (Paper ID: ${result.lastID})`);
            totalGenerated++;
        }
    }

    console.log(`\n\n✨ Successfully generated ${totalGenerated} practice papers!`);
    console.log(`📊 Summary:`);
    console.log(`   - ${chapters.length} chapters`);
    console.log(`   - 3 variants per chapter (Set A, B, C)`);
    console.log(`   - Total papers: ${totalGenerated}`);
    console.log('\n💡 Access these papers in the Question Generator page');
}

function generateMCQs(chapterName: string, variant: string): any[] {
    // Generate 10 MCQs (10 marks)
    const questions = [];
    for (let i = 1; i <= 10; i++) {
        const question = getChapterSpecificQuestion(chapterName, variant, 'mcq', i);
        const { options, answer } = getMCQOptions(chapterName, variant, i);
        questions.push({
            id: i,
            question,
            options,
            answer,
            marks: 1
        });
    }
    return questions;
}

function getMCQOptions(chapterName: string, variant: string, questionNum: number): { options: string[], answer: string } {
    const chapterLower = chapterName.toLowerCase();
    
    // Matter chapter MCQ options
    if (chapterLower.includes('matter')) {
        const mcqOptions = {
            A: [
                { options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Solid" },
                { options: ["Melting", "Evaporation", "Sublimation", "Condensation"], answer: "Sublimation" },
                { options: ["Solids", "Liquids", "Gases", "All have same"], answer: "Gases" },
                { options: ["Increases", "Decreases", "Remains same", "Becomes zero"], answer: "Decreases" },
                { options: ["Mass", "Volume", "Density", "All of these"], answer: "Mass" },
                { options: ["0°C", "50°C", "100°C", "150°C"], answer: "100°C" },
                { options: ["Freezing", "Melting", "Condensation", "Evaporation"], answer: "Condensation" },
                { options: ["Gravity", "Pressure", "Kinetic energy", "Static friction"], answer: "Kinetic energy" },
                { options: ["Solid", "Liquid", "Gas", "All equally"], answer: "Gas" },
                { options: ["0°C", "32°C", "100°C", "-273°C"], answer: "0°C" }
            ],
            B: [
                { options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Liquid" },
                { options: ["Melting", "Freezing", "Evaporation", "Sublimation"], answer: "Evaporation" },
                { options: ["Solids", "Liquids", "Gases", "All same"], answer: "Solids" },
                { options: ["Liquid gains heat", "Liquid loses heat", "Molecules escape from surface", "Molecules condense"], answer: "Molecules escape from surface" },
                { options: ["Temperature", "Surface area", "Wind speed", "All of these"], answer: "All of these" },
                { options: ["0°C", "32°F", "100°C", "273 K"], answer: "0°C" },
                { options: ["Gas to liquid", "Liquid to gas", "Solid to gas", "Liquid to solid"], answer: "Gas to liquid" },
                { options: ["Camphor", "Naphthalene", "Dry ice", "All of these"], answer: "All of these" },
                { options: ["Mixing of substances", "Separation of substances", "Condensation", "Evaporation"], answer: "Mixing of substances" },
                { options: ["Solid", "Liquid", "Gas", "All same"], answer: "Gas" }
            ],
            C: [
                { options: ["Two", "Three", "Four", "Five"], answer: "Three" },
                { options: ["Solids", "Liquids", "Gases", "All states"], answer: "Gases" },
                { options: ["Boiling point", "Freezing point", "Temperature at which solid becomes liquid", "Sublimation point"], answer: "Temperature at which solid becomes liquid" },
                { options: ["Melting", "Freezing", "Both", "Neither"], answer: "Melting" },
                { options: ["Particles are static", "Particles are in motion", "Particles have no mass", "Particles are invisible"], answer: "Particles are in motion" },
                { options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Solid" },
                { options: ["Melting", "Freezing", "Boiling", "Condensation"], answer: "Melting" },
                { options: ["Chemical", "Physical", "Nuclear", "Biological"], answer: "Physical" },
                { options: ["Pressure", "Volume", "Temperature", "All of these"], answer: "All of these" },
                { options: ["Solids", "Liquids", "Gases", "None"], answer: "Solids" }
            ]
        };
        return mcqOptions[variant as 'A' | 'B' | 'C'][questionNum - 1];
    }
    
    // Physical Quantities and Measurements
    if (chapterLower.includes('physical') || chapterLower.includes('measurement')) {
        const mcqOptions = {
            A: [
                { options: ["Meter", "Centimeter", "Kilometer", "Millimeter"], answer: "Meter" },
                { options: ["Thermometer", "Barometer", "Manometer", "Hygrometer"], answer: "Thermometer" },
                { options: ["m", "M", "kg", "g"], answer: "M" },
                { options: ["10", "100", "1000", "10000"], answer: "1000" },
                { options: ["Second", "Minute", "Hour", "Day"], answer: "Second" },
                { options: ["Celsius", "Kelvin", "Fahrenheit", "Rankine"], answer: "Kelvin" },
                { options: ["m²", "m³", "m", "kg"], answer: "m²" },
                { options: ["Measuring cylinder", "Beaker", "Thermometer", "Scale"], answer: "Measuring cylinder" },
                { options: ["Mass per unit volume", "Volume per unit mass", "Weight per unit area", "Force per unit length"], answer: "Mass per unit volume" },
                { options: ["Distance/Time", "Time/Distance", "Mass/Volume", "Volume/Mass"], answer: "Distance/Time" }
            ],
            B: [
                { options: ["International System", "Indian Standard", "Imperial System", "Metric System"], answer: "International System" },
                { options: ["Vernier caliper", "Ruler", "Measuring tape", "All of these"], answer: "All of these" },
                { options: ["Gram", "Kilogram", "Pound", "Ton"], answer: "Kilogram" },
                { options: ["100", "1000", "10000", "100000"], answer: "100000" },
                { options: ["Mass", "Space occupied", "Weight", "Density"], answer: "Space occupied" },
                { options: ["Spring balance", "Beam balance", "Digital scale", "All of these"], answer: "Spring balance" },
                { options: ["m/s", "km/h", "m/s²", "Both A and B"], answer: "m/s" },
                { options: ["Mass/Volume", "Volume/Mass", "Weight/Volume", "Mass × Volume"], answer: "Mass/Volume" },
                { options: ["Speed", "Velocity", "Density", "Area"], answer: "Density" },
                { options: ["Thermometer", "Barometer", "Speedometer", "Voltmeter"], answer: "Thermometer" }
            ],
            C: [
                { options: ["Joule", "Newton", "Pascal", "Watt"], answer: "Newton" },
                { options: ["Beam balance", "Spring balance", "Electronic balance", "All of these"], answer: "Beam balance" },
                { options: ["60", "120", "360", "3600"], answer: "3600" },
                { options: ["kg/m³", "g/cm³", "Both A and B", "kg/m"], answer: "Both A and B" },
                { options: ["Length", "Mass", "Time", "Speed"], answer: "Length" },
                { options: ["Temperature", "Volume", "Mass", "Pressure"], answer: "Volume" },
                { options: ["Length × Width", "Length + Width", "Length × Width × Height", "2(Length + Width)"], answer: "Length × Width" },
                { options: ["Liter", "Milliliter", "Cubic meter", "Gallon"], answer: "Cubic meter" },
                { options: ["Odometer", "Speedometer", "Measuring tape", "All of these"], answer: "Measuring tape" },
                { options: ["0.1 cm", "0.01 cm", "1 cm", "0.001 cm"], answer: "0.1 cm" }
            ]
        };
        return mcqOptions[variant as 'A' | 'B' | 'C'][questionNum - 1];
    }
    
    // Force chapter
    if (chapterLower.includes('force')) {
        const mcqOptions = {
            A: [
                { options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
                { options: ["Friction", "Gravity", "Magnetic", "Tension"], answer: "Friction" },
                { options: ["Starts moving", "Changes direction", "Changes shape", "All of these"], answer: "All of these" },
                { options: ["Newton", "Einstein", "Galileo", "Archimedes"], answer: "Newton" },
                { options: ["Pull of Earth", "Push of air", "Magnetic attraction", "Electric force"], answer: "Pull of Earth" },
                { options: ["Gravity", "Magnetic force", "Electric force", "All of these"], answer: "Gravity" },
                { options: ["Zero", "Double", "Half", "Same"], answer: "Zero" },
                { options: ["Contact force", "Non-contact force", "Frictional force", "Gravitational force"], answer: "Contact force" },
                { options: ["Force that opposes motion", "Force that helps motion", "Magnetic force", "Electric force"], answer: "Force that opposes motion" },
                { options: ["Gravitational force", "Magnetic force", "Electric force", "Frictional force"], answer: "Gravitational force" }
            ],
            B: [
                { options: ["Weight", "Mass", "Gravity", "Force"], answer: "Gravity" },
                { options: ["No change", "Object moves", "Object stops", "Object floats"], answer: "No change" },
                { options: ["Gravity", "Friction", "Magnetic force", "All of these"], answer: "Magnetic force" },
                { options: ["F = ma", "F = m/a", "F = a/m", "F = m + a"], answer: "F = ma" },
                { options: ["Gravity", "Friction", "Air resistance", "All of these"], answer: "Friction" },
                { options: ["Force per unit area", "Area per unit force", "Force × Area", "Force + Area"], answer: "Force per unit area" },
                { options: ["Newton/m²", "Pascal", "N/m²", "All of these"], answer: "All of these" },
                { options: ["Force between magnets", "Force due to charges", "Force of gravity", "Force of friction"], answer: "Force between magnets" },
                { options: ["Rough surface", "Smooth surface", "Liquid surface", "No surface"], answer: "Smooth surface" },
                { options: ["9.8 m/s²", "10 m/s²", "9.8 m/s", "Both A and B"], answer: "Both A and B" }
            ],
            C: [
                { options: ["Mass", "Weight", "Force", "Pressure"], answer: "Force" },
                { options: ["First law", "Second law", "Third law", "Law of gravitation"], answer: "First law" },
                { options: ["Friction", "Muscular force", "Tension", "All of these"], answer: "All of these" },
                { options: ["Gravitational force", "Magnetic force", "Electric force", "All of these"], answer: "Electric force" },
                { options: ["Pressure", "Force", "Area", "Weight"], answer: "Pressure" },
                { options: ["Rolling", "Sliding", "Static", "All same"], answer: "Sliding" },
                { options: ["Force of air around us", "Weight of air", "Pressure of air", "All of these"], answer: "Pressure of air" },
                { options: ["Same as motion", "Opposite to motion", "Perpendicular to motion", "No specific direction"], answer: "Opposite to motion" },
                { options: ["Mass × gravity", "Mass/gravity", "Mass + gravity", "Mass - gravity"], answer: "Mass × gravity" },
                { options: ["Gravity", "Friction", "Tension", "All of these"], answer: "Friction" }
            ]
        };
        return mcqOptions[variant as 'A' | 'B' | 'C'][questionNum - 1];
    }
    
    // Simple Machines
    if (chapterLower.includes('machine')) {
        const mcqOptions = {
            A: [
                { options: ["Device that makes work easier", "Device that increases work", "Device that creates energy", "Device that stores energy"], answer: "Device that makes work easier" },
                { options: ["Lever", "Pulley", "Wheel and axle", "All of these"], answer: "All of these" },
                { options: ["Fixed point", "Moving point", "Load", "Effort"], answer: "Fixed point" },
                { options: ["Wedge", "Lever", "Screw", "Inclined plane"], answer: "Screw" },
                { options: ["Load/Effort", "Effort/Load", "Load × Effort", "Load + Effort"], answer: "Load/Effort" },
                { options: ["First class", "Second class", "Third class", "No class"], answer: "First class" },
                { options: ["Cutting", "Lifting", "Pulling", "Pushing"], answer: "Cutting" },
                { options: ["Lever", "Pulley", "Inclined plane", "Wedge"], answer: "Pulley" },
                { options: ["Changes direction of force", "Multiplies force", "Both A and B", "Makes work easier"], answer: "Both A and B" },
                { options: ["MA = Load/Effort", "MA = Effort/Load", "MA = Load + Effort", "MA = Load - Effort"], answer: "MA = Load/Effort" }
            ],
            B: [
                { options: ["Four", "Five", "Six", "Seven"], answer: "Six" },
                { options: ["Doorknob", "Steering wheel", "Screwdriver", "All of these"], answer: "All of these" },
                { options: ["Force applied", "Force to overcome", "Distance", "Speed"], answer: "Force applied" },
                { options: ["First class", "Second class", "Third class", "No class"], answer: "Second class" },
                { options: ["Distance from fulcrum to load", "Distance from fulcrum to effort", "Length of lever", "Weight of load"], answer: "Distance from fulcrum to load" },
                { options: ["Inclined plane", "Wedge", "Screw", "Lever"], answer: "Inclined plane" },
                { options: ["Directional advantage", "Force advantage", "Speed advantage", "All of these"], answer: "All of these" },
                { options: ["Scissors", "Pliers", "Tongs", "Tweezers"], answer: "Tweezers" },
                { options: ["Work output/Work input", "Work input/Work output", "Load/Effort", "Effort/Load"], answer: "Work output/Work input" },
                { options: ["Dimensionless", "Newton", "Joule", "Watt"], answer: "Dimensionless" }
            ],
            C: [
                { options: ["Lever, Pulley, Wheel & axle, Inclined plane, Wedge, Screw", "Only Lever and Pulley", "Only mechanical devices", "Only lifting devices"], answer: "Lever, Pulley, Wheel & axle, Inclined plane, Wedge, Screw" },
                { options: ["To make work easier", "To create energy", "To store energy", "To destroy energy"], answer: "To make work easier" },
                { options: ["Seesaw", "Scissors", "Crowbar", "All of these"], answer: "All of these" },
                { options: ["Weight to lift", "Force applied", "Distance", "Fulcrum"], answer: "Weight to lift" },
                { options: ["Staircase", "Ramp", "Slide", "All of these"], answer: "All of these" },
                { options: ["Distance from fulcrum to effort", "Distance from fulcrum to load", "Length of lever", "Weight of lever"], answer: "Distance from fulcrum to effort" },
                { options: ["Screw jack", "Bolt and nut", "Jar lid", "All of these"], answer: "All of these" },
                { options: ["Fixed pulley", "Movable pulley", "Block and tackle", "None"], answer: "Fixed pulley" },
                { options: ["First class", "Second class", "Third class", "No class"], answer: "Third class" },
                { options: ["Reduces effort", "Changes direction", "Increases speed", "All of these"], answer: "All of these" }
            ]
        };
        return mcqOptions[variant as 'A' | 'B' | 'C'][questionNum - 1];
    }
    
    // Light chapter
    if (chapterLower.includes('light')) {
        const mcqOptions = {
            A: [
                { options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10⁷ m/s"], answer: "3 × 10⁸ m/s" },
                { options: ["Light", "Sound", "Water", "Air"], answer: "Light" },
                { options: ["Bouncing back of light", "Bending of light", "Splitting of light", "Absorption of light"], answer: "Bouncing back of light" },
                { options: ["Plane mirror", "Concave mirror", "Convex mirror", "Rough surface"], answer: "Plane mirror" },
                { options: ["Angle of reflection", "Angle of refraction", "90°", "0°"], answer: "Angle of reflection" },
                { options: ["Plane mirror", "Concave mirror", "Convex mirror", "All mirrors"], answer: "Convex mirror" },
                { options: ["Bending of light", "Bouncing of light", "Splitting of light", "Absorption of light"], answer: "Bending of light" },
                { options: ["Lens", "Prism", "Mirror", "All of these"], answer: "Lens" },
                { options: ["Image that can be projected on screen", "Image that cannot be projected", "Virtual image", "Inverted image"], answer: "Image that can be projected on screen" },
                { options: ["Violet", "Red", "Yellow", "Green"], answer: "Violet" }
            ],
            B: [
                { options: ["Matter", "Energy", "Force", "Mass"], answer: "Energy" },
                { options: ["Light travels in straight lines", "Light travels in curves", "Light travels in circles", "Light doesn't travel"], answer: "Light travels in straight lines" },
                { options: ["First law of reflection", "Second law of reflection", "Both laws of reflection", "Newton's law"], answer: "Both laws of reflection" },
                { options: ["Regular reflection from rough surface", "Reflection from smooth surface", "Reflection in all directions", "No reflection"], answer: "Reflection in all directions" },
                { options: ["Plane mirror", "Concave mirror", "Convex mirror", "Parabolic mirror"], answer: "Concave mirror" },
                { options: ["Bends away from normal", "Bends towards normal", "Goes straight", "Reflects back"], answer: "Bends towards normal" },
                { options: ["Concave lens", "Convex lens", "Plane lens", "Cylindrical lens"], answer: "Convex lens" },
                { options: ["Image appears reversed left to right", "Image appears upside down", "Image appears smaller", "Image appears larger"], answer: "Image appears reversed left to right" },
                { options: ["Mirage", "Rainbow", "Twinkling stars", "Blue sky"], answer: "Rainbow" },
                { options: ["Red, Orange, Yellow, Green, Blue, Indigo, Violet", "Only Red, Green, Blue", "Only primary colors", "Black and white"], answer: "Red, Orange, Yellow, Green, Blue, Indigo, Violet" }
            ],
            C: [
                { options: ["Object that emits light", "Object that reflects light", "Object that absorbs light", "Object that refracts light"], answer: "Object that emits light" },
                { options: ["Light property", "Reflection property", "Rectilinear propagation", "Refraction property"], answer: "Reflection property" },
                { options: ["Perpendicular to surface", "Parallel to surface", "At 45° to surface", "Incident ray"], answer: "Perpendicular to surface" },
                { options: ["Plane mirror", "Concave mirror", "Convex mirror", "All mirrors"], answer: "Plane mirror" },
                { options: ["Distance from mirror to focus", "Distance from pole to center", "Distance from focus to center", "Radius of curvature"], answer: "Distance from mirror to focus" },
                { options: ["Atmospheric refraction", "Total internal reflection", "Dispersion", "Diffraction"], answer: "Atmospheric refraction" },
                { options: ["Splitting of white light into colors", "Mixing of colors", "Reflection of light", "Absorption of light"], answer: "Splitting of white light into colors" },
                { options: ["Concave lens", "Convex lens", "Plane lens", "Cylindrical lens"], answer: "Concave lens" },
                { options: ["Image that cannot be projected", "Image that can be projected", "Real image", "Magnified image"], answer: "Image that cannot be projected" },
                { options: ["Mirror", "Lens", "Triangular glass", "Crystal"], answer: "Triangular glass" }
            ]
        };
        return mcqOptions[variant as 'A' | 'B' | 'C'][questionNum - 1];
    }
    
    // Magnetism chapter
    if (chapterLower.includes('magnet')) {
        const mcqOptions = {
            A: [
                { options: ["North pole", "South pole", "Any pole", "No pole"], answer: "North pole" },
                { options: ["Iron, Nickel, Cobalt", "Wood, Plastic, Glass", "Copper, Aluminum, Zinc", "Paper, Cloth, Rubber"], answer: "Iron, Nickel, Cobalt" },
                { options: ["Attract", "Repel", "No effect", "Destroy each other"], answer: "Repel" },
                { options: ["Poles", "Middle", "Edges", "Surface"], answer: "Poles" },
                { options: ["Region around magnet where force acts", "Inside of magnet", "North pole only", "South pole only"], answer: "Region around magnet where force acts" },
                { options: ["Wood", "Plastic", "Iron", "Glass"], answer: "Wood" },
                { options: ["Device with magnetic needle", "Device to measure temperature", "Device to measure pressure", "Device to measure weight"], answer: "Device with magnetic needle" },
                { options: ["Magnetic force", "Gravitational force", "Electric force", "Nuclear force"], answer: "Magnetic force" },
                { options: ["Making a material magnetic", "Making a material non-magnetic", "Demagnetizing", "Heating"], answer: "Making a material magnetic" },
                { options: ["Bar magnet", "Electromagnet", "Horseshoe magnet", "All of these"], answer: "Bar magnet" }
            ],
            B: [
                { options: ["North and South", "East and West", "Positive and Negative", "Up and Down"], answer: "North and South" },
                { options: ["Iron", "Copper", "Aluminum", "Plastic"], answer: "Iron" },
                { options: ["Lines showing magnetic force", "Lines showing electric force", "Lines showing gravity", "Lines showing heat"], answer: "Lines showing magnetic force" },
                { options: ["Lodestone", "Iron ore", "Steel", "Magnetite"], answer: "Lodestone" },
                { options: ["Magnet made by humans", "Magnet found in nature", "Temporary magnet", "Weak magnet"], answer: "Magnet made by humans" },
                { options: ["At poles", "In middle", "Outside magnet", "No strong point"], answer: "At poles" },
                { options: ["Geographic North", "Geographic South", "Direction indicated by compass", "True North"], answer: "Direction indicated by compass" },
                { options: ["Compass", "Electric bell", "Speakers", "All of these"], answer: "All of these" },
                { options: ["Process of making magnet", "Process of destroying magnet", "Process of weakening magnet", "Process of using magnet"], answer: "Process of making magnet" },
                { options: ["Keepers", "Covers", "Cases", "Boxes"], answer: "Keepers" }
            ],
            C: [
                { options: ["One", "Two", "Three", "Four"], answer: "Two" },
                { options: ["Force that pulls objects together", "Force that pushes objects apart", "No force", "Magnetic repulsion"], answer: "Force that pulls objects together" },
                { options: ["North to South outside magnet", "South to North outside magnet", "In circles", "Randomly"], answer: "North to South outside magnet" },
                { options: ["Naturally occurring magnet", "Artificial magnet", "Temporary magnet", "Electromagnet"], answer: "Naturally occurring magnet" },
                { options: ["Stroking method", "Electric method", "Induction method", "All of these"], answer: "All of these" },
                { options: ["Force that pushes objects apart", "Force that pulls objects together", "No force", "Gravitational force"], answer: "Force that pushes objects apart" },
                { options: ["Magnetic needle", "Compass needle", "Pivoted magnetic needle", "All of these"], answer: "All of these" },
                { options: ["Loss of magnetic properties", "Gain of magnetic properties", "Increase in magnetism", "No change"], answer: "Loss of magnetic properties" },
                { options: ["North pole", "South pole", "North-seeking pole", "Positive pole"], answer: "North-seeking pole" },
                { options: ["Soft iron pieces to store magnets", "Hard steel pieces", "Plastic covers", "Wooden boxes"], answer: "Soft iron pieces to store magnets" }
            ]
        };
        return mcqOptions[variant as 'A' | 'B' | 'C'][questionNum - 1];
    }
    
    // Fallback generic options
    return {
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option B"
    };
}

function generateVeryShortAnswers(chapterName: string, variant: string): any[] {
    // Generate 6 very short answer questions (12 marks)
    const questions = [];
    for (let i = 1; i <= 6; i++) {
        questions.push({
            id: 10 + i,
            question: getChapterSpecificQuestion(chapterName, variant, 'veryshort', i),
            answer: `Brief answer for Set ${variant} covering key concepts from ${chapterName}.`,
            marks: 2
        });
    }
    return questions;
}

function generateShortAnswers(chapterName: string, variant: string): any[] {
    // Generate 2 short answer questions (8 marks)
    return [
        {
            id: 17,
            question: getChapterSpecificQuestion(chapterName, variant, 'short', 1),
            answer: `Detailed explanation for Set ${variant} demonstrating understanding of ${chapterName} principles with examples.`,
            marks: 4
        },
        {
            id: 18,
            question: getChapterSpecificQuestion(chapterName, variant, 'short', 2),
            answer: `Complete answer for Set ${variant} covering theory and practical applications from ${chapterName}.`,
            marks: 4
        }
    ];
}

function generateLongAnswers(chapterName: string, variant: string): any[] {
    // Generate 2 long answer questions (10 marks)
    return [
        {
            id: 19,
            question: getChapterSpecificQuestion(chapterName, variant, 'long', 1),
            answer: `Comprehensive answer for Set ${variant}. This covers: (1) Definition and fundamental concepts, (2) Key principles and laws from ${chapterName}, (3) Real-world applications and examples, (4) Important formulas, diagrams, and relationships.`,
            marks: 5
        },
        {
            id: 20,
            question: getChapterSpecificQuestion(chapterName, variant, 'long', 2),
            answer: `Detailed response for Set ${variant} including: (1) Theoretical foundation, (2) Experimental observations from ${chapterName}, (3) Practical implications, (4) Summary of key points with diagrams where applicable.`,
            marks: 5
        }
    ];
}

function getChapterSpecificQuestion(chapterName: string, variant: string, type: string, num: number): string {
    // Generate contextually appropriate questions based on chapter topic
    const chapterLower = chapterName.toLowerCase();
    
    // Matter chapter questions
    if (chapterLower.includes('matter')) {
        if (type === 'mcq') {
            const mcqs = {
                A: [
                    "Which state of matter has definite shape and volume?",
                    "What is the process of solid changing directly to gas called?",
                    "Which particles have the most kinetic energy?",
                    "What happens to the density when a substance changes from liquid to gas?",
                    "Which property is common in all states of matter?",
                    "What is the boiling point of water?",
                    "Which process involves change from gas to liquid?",
                    "What causes diffusion in liquids?",
                    "Which state of matter is most compressible?",
                    "What is the melting point of ice?"
                ],
                B: [
                    "Which state of matter has fixed volume but no fixed shape?",
                    "What is the process of liquid changing to vapor called?",
                    "Which particles are arranged most closely?",
                    "What happens during evaporation?",
                    "Which factor increases the rate of evaporation?",
                    "At what temperature does water freeze?",
                    "What is condensation?",
                    "Which substances can sublime?",
                    "What is diffusion?",
                    "Which state has weakest intermolecular forces?"
                ],
                C: [
                    "What are the three states of matter?",
                    "Which state has particles moving freely in all directions?",
                    "What is melting point?",
                    "Which process requires heat energy - melting or freezing?",
                    "What is the kinetic theory of matter?",
                    "Which state cannot be compressed easily?",
                    "What is the process of solid to liquid called?",
                    "Which type of change is evaporation - physical or chemical?",
                    "What affects the boiling point of a substance?",
                    "Which particles vibrate but don't move from position?"
                ]
            };
            return mcqs[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'veryshort') {
            const veryshort = {
                A: [
                    "Define matter and give two examples.",
                    "Name the three states of matter.",
                    "What is the difference between mass and volume?",
                    "Why do gases fill the entire space available?",
                    "What is evaporation?",
                    "Give two examples of sublimation."
                ],
                B: [
                    "Define diffusion with one example.",
                    "What is kinetic theory of matter?",
                    "Why do solids have fixed shape?",
                    "Name two factors affecting evaporation.",
                    "What is condensation?",
                    "Give two differences between solids and liquids."
                ],
                C: [
                    "What are particles of matter?",
                    "Define melting point.",
                    "Why does steam cause severe burns?",
                    "What is boiling?",
                    "Name two properties of gases.",
                    "Differentiate evaporation from boiling."
                ]
            };
            return veryshort[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'short') {
            const short = {
                A: [
                    "Explain the arrangement of particles in solids, liquids, and gases with diagrams.",
                    "Describe factors affecting rate of evaporation with examples."
                ],
                B: [
                    "Explain diffusion in gases and liquids with two examples each.",
                    "Why are gases easily compressible but solids are not? Explain."
                ],
                C: [
                    "Describe sublimation process with suitable examples and applications.",
                    "How does temperature affect evaporation? Explain with practical examples."
                ]
            };
            return short[variant as 'A' | 'B' | 'C'][num - 1];
        } else { // long
            const long = {
                A: [
                    "Describe the three states of matter in detail. Explain their properties, particle arrangement, and give examples of each.",
                    "Explain the interconversion of states of matter. Draw a diagram showing all the processes and discuss the role of heat energy."
                ],
                B: [
                    "What is the kinetic theory of matter? Explain how it accounts for the properties of solids, liquids, and gases.",
                    "Describe the process of evaporation in detail. Explain factors affecting it and its applications in daily life."
                ],
                C: [
                    "Explain diffusion with examples from daily life. How does diffusion prove that particles of matter are constantly moving?",
                    "Describe various physical changes in matter. Explain melting, boiling, condensation, and sublimation with diagrams."
                ]
            };
            return long[variant as 'A' | 'B' | 'C'][num - 1];
        }
    }
    
    // Physical Quantities and Measurements
    if (chapterLower.includes('physical') || chapterLower.includes('measurement') || chapterLower.includes('quantities')) {
        if (type === 'mcq') {
            const mcqs = {
                A: [
                    "What is the SI unit of length?",
                    "Which instrument measures temperature?",
                    "What is the symbol for mass?",
                    "How many millimeters are in one meter?",
                    "What is the SI unit of time?",
                    "Which scale is used to measure temperature in SI?",
                    "What is the unit of area?",
                    "Which instrument measures volume of liquids?",
                    "What is density?",
                    "The formula for speed is?"
                ],
                B: [
                    "What does SI stand for?",
                    "Which instrument measures length accurately?",
                    "What is the SI unit of mass?",
                    "How many centimeters in one kilometer?",
                    "What is volume?",
                    "Which instrument measures force?",
                    "The SI unit of speed is?",
                    "What is the formula for density?",
                    "Which is a derived unit?",
                    "What does a thermometer measure?"
                ],
                C: [
                    "The SI unit of force is?",
                    "What instrument measures mass?",
                    "How many seconds in one hour?",
                    "What is the unit of density?",
                    "Which is a fundamental quantity?",
                    "What does a measuring cylinder measure?",
                    "The formula for area of rectangle is?",
                    "What is the SI unit of volume?",
                    "Which device measures distance?",
                    "What is the least count of a ruler?"
                ]
            };
            return mcqs[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'veryshort') {
            const veryshort = {
                A: [
                    "Define physical quantity.",
                    "What is SI system?",
                    "Name three fundamental quantities.",
                    "What is the unit of temperature?",
                    "Define measurement.",
                    "What is least count?"
                ],
                B: [
                    "Differentiate fundamental and derived quantities.",
                    "What is a standard unit?",
                    "Name three derived quantities.",
                    "What instrument measures length?",
                    "Define density.",
                    "What is the unit of speed?"
                ],
                C: [
                    "What are base units?",
                    "Define volume.",
                    "Name instruments used to measure time.",
                    "What is the SI unit of area?",
                    "Define mass.",
                    "What is a measuring tape used for?"
                ]
            };
            return veryshort[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'short') {
            const short = {
                A: [
                    "Explain the difference between fundamental and derived quantities with examples.",
                    "Describe how to use a measuring cylinder to find volume of an irregular solid."
                ],
                B: [
                    "What is SI system of units? List the seven fundamental quantities and their units.",
                    "Define density. Write its formula and units. How do you find density of a stone?"
                ],
                C: [
                    "Explain the importance of standard units in measurement. Why do we need SI system?",
                    "Describe different instruments used for measuring length. When is each used?"
                ]
            };
            return short[variant as 'A' | 'B' | 'C'][num - 1];
        } else { // long
            const long = {
                A: [
                    "Explain measurement and its importance. Describe various instruments used to measure length, mass, time, and temperature.",
                    "What are physical quantities? Differentiate between fundamental and derived quantities with at least three examples of each."
                ],
                B: [
                    "Describe the SI system of units in detail. Explain why international standards are necessary. List all fundamental units.",
                    "Explain how to measure volume of regular and irregular objects. Describe the procedure and instruments used with diagrams."
                ],
                C: [
                    "Define density and explain its importance. Derive the formula and describe an experiment to find density of a regularly shaped object.",
                    "Explain various units of measurement for length. How do you convert between different units? Give examples of conversions."
                ]
            };
            return long[variant as 'A' | 'B' | 'C'][num - 1];
        }
    }
    
    // Force chapter questions
    if (chapterLower.includes('force')) {
        if (type === 'mcq') {
            const mcqs = {
                A: [
                    "What is the SI unit of force?",
                    "Which force opposes motion?",
                    "What is the effect of force on a stationary object?",
                    "Which scientist gave laws of motion?",
                    "What is gravitational force?",
                    "Which force acts towards center of Earth?",
                    "What is net force when two equal forces act in opposite directions?",
                    "Which type of force is muscular force?",
                    "What is friction?",
                    "Which force keeps planets in orbit?"
                ],
                B: [
                    "The force that pulls objects downward is?",
                    "What happens when balanced forces act on an object?",
                    "Which is a non-contact force?",
                    "What is the formula for force?",
                    "Which force opposes relative motion?",
                    "What is pressure?",
                    "The SI unit of pressure is?",
                    "What is magnetic force?",
                    "Which surface has less friction?",
                    "What is gravitational acceleration?"
                ],
                C: [
                    "A push or pull is called?",
                    "Which law is law of inertia?",
                    "What is contact force?",
                    "Which force acts between charged objects?",
                    "What increases when surface area decreases with same force?",
                    "Which has more friction - rolling or sliding?",
                    "What is atmospheric pressure?",
                    "The direction of friction is?",
                    "What is weight?",
                    "Which force causes wear and tear?"
                ]
            };
            return mcqs[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'veryshort') {
            const veryshort = {
                A: [
                    "Define force and its SI unit.",
                    "Name two contact forces.",
                    "What is gravity?",
                    "Define friction.",
                    "What is the formula for pressure?",
                    "Give one advantage of friction."
                ],
                B: [
                    "What are non-contact forces? Give examples.",
                    "Define pressure.",
                    "What is magnetic force?",
                    "Name two effects of force.",
                    "What is gravitational force?",
                    "Give one disadvantage of friction."
                ],
                C: [
                    "Differentiate contact and non-contact forces.",
                    "What is muscular force?",
                    "Define weight.",
                    "What is atmospheric pressure?",
                    "Name three types of friction.",
                    "How can friction be reduced?"
                ]
            };
            return veryshort[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'short') {
            const short = {
                A: [
                    "Explain different types of forces with one example of each.",
                    "Describe three effects of force on objects with practical examples."
                ],
                B: [
                    "What is friction? Explain factors affecting friction and methods to reduce it.",
                    "Differentiate between mass and weight. Write their units and formulas."
                ],
                C: [
                    "Explain pressure. Why does a camel walk easily on sand? Derive the formula for pressure.",
                    "Describe gravitational force. Why do all objects fall with same acceleration?"
                ]
            };
            return short[variant as 'A' | 'B' | 'C'][num - 1];
        } else { // long
            const long = {
                A: [
                    "Explain various types of forces in detail. Classify them as contact and non-contact forces with two examples each.",
                    "What is friction? Describe types of friction, factors affecting it, and its advantages and disadvantages with examples."
                ],
                B: [
                    "Explain pressure in detail. Derive its formula and SI unit. Why do we have pointed nails and broad foundations?",
                    "Describe gravitational force. Explain concepts of mass and weight. How is gravity useful to us?"
                ],
                C: [
                    "Explain Newton's three laws of motion with examples from daily life. Draw diagrams to support your answer.",
                    "What are effects of force? Explain how force can change shape, direction, and speed of objects with suitable examples."
                ]
            };
            return long[variant as 'A' | 'B' | 'C'][num - 1];
        }
    }
    
    // Simple Machines chapter questions
    if (chapterLower.includes('machine')) {
        if (type === 'mcq') {
            const mcqs = {
                A: [
                    "What is a simple machine?",
                    "Which is a type of lever?",
                    "What is the fulcrum in a lever?",
                    "Which simple machine is an inclined plane wrapped around a cylinder?",
                    "What is mechanical advantage?",
                    "Which class of lever has fulcrum between load and effort?",
                    "What is a wedge used for?",
                    "Which simple machine is a wheel with a rope?",
                    "What does a pulley do?",
                    "The formula for MA is?"
                ],
                B: [
                    "How many types of simple machines are there?",
                    "Which is an example of wheel and axle?",
                    "What is effort in a machine?",
                    "Which lever has load at the center?",
                    "What is load arm?",
                    "Which simple machine is a ramp?",
                    "What advantage does a pulley give?",
                    "Which tool is a third class lever?",
                    "What is mechanical efficiency?",
                    "The unit of mechanical advantage is?"
                ],
                C: [
                    "Name six types of simple machines.",
                    "What is the purpose of a machine?",
                    "Which is a first class lever?",
                    "What is load in a machine?",
                    "Which simple machine helps climb easily?",
                    "What is effort arm?",
                    "Which tool uses the principle of a screw?",
                    "What is a fixed pulley?",
                    "Which lever is most common?",
                    "What makes work easier?"
                ]
            };
            return mcqs[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'veryshort') {
            const veryshort = {
                A: [
                    "Define simple machine.",
                    "Name three types of levers.",
                    "What is fulcrum?",
                    "Define mechanical advantage.",
                    "What is an inclined plane?",
                    "Give one example of pulley."
                ],
                B: [
                    "What is a lever? Give an example.",
                    "Define effort and load.",
                    "Name two examples of wedge.",
                    "What is a screw?",
                    "Define wheel and axle.",
                    "What is a movable pulley?"
                ],
                C: [
                    "List six simple machines.",
                    "What is mechanical efficiency?",
                    "Give examples of first class lever.",
                    "What is effort arm?",
                    "Define inclined plane with example.",
                    "How does pulley help us?"
                ]
            };
            return veryshort[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'short') {
            const short = {
                A: [
                    "Explain three classes of levers with one example each. Draw diagrams showing effort, load, and fulcrum.",
                    "What is mechanical advantage? Derive the formula and explain how machines multiply force."
                ],
                B: [
                    "Describe inclined plane. How does it make work easier? Give practical applications.",
                    "Explain wheel and axle. Give three examples and show how it provides mechanical advantage."
                ],
                C: [
                    "What is a pulley? Differentiate between fixed and movable pulleys with diagrams.",
                    "Describe wedge and screw. Explain how they are modified inclined planes."
                ]
            };
            return short[variant as 'A' | 'B' | 'C'][num - 1];
        } else { // long
            const long = {
                A: [
                    "Explain levers in detail. Describe three classes with working principle, examples, and diagrams for each.",
                    "What are simple machines? Describe their purpose and advantages. Explain any four types with examples."
                ],
                B: [
                    "Explain mechanical advantage and mechanical efficiency. Derive formulas and explain why MA can be greater than 1.",
                    "Describe inclined plane, wedge, and screw. Explain how they are related and give practical applications of each."
                ],
                C: [
                    "Explain pulleys in detail. Differentiate fixed and movable pulleys. How do combination pulleys increase mechanical advantage?",
                    "Describe wheel and axle with examples. Explain its working principle and calculate mechanical advantage. Why is it useful?"
                ]
            };
            return long[variant as 'A' | 'B' | 'C'][num - 1];
        }
    }
    
    // Light chapter questions
    if (chapterLower.includes('light')) {
        if (type === 'mcq') {
            const mcqs = {
                A: [
                    "What is the speed of light?",
                    "Which travels in straight lines?",
                    "What is reflection?",
                    "Which surface gives regular reflection?",
                    "What is the angle of incidence equal to?",
                    "Which mirror gives diminished image?",
                    "What is refraction?",
                    "Which bends light rays?",
                    "What is a real image?",
                    "Which color bends most in a prism?"
                ],
                B: [
                    "Light is a form of?",
                    "What is rectilinear propagation?",
                    "Which law governs reflection?",
                    "What is diffuse reflection?",
                    "Which mirror is used in vehicle headlights?",
                    "What happens when light enters denser medium?",
                    "Which lens converges light?",
                    "What is lateral inversion?",
                    "Which forms due to refraction?",
                    "What is white light made of?"
                ],
                C: [
                    "What is a luminous object?",
                    "Which property allows us to see objects?",
                    "What is the normal in reflection?",
                    "Which mirror forms virtual image always?",
                    "What is focal length?",
                    "Which phenomenon explains twinkling of stars?",
                    "What is dispersion?",
                    "Which lens is thicker at edges?",
                    "What is a virtual image?",
                    "Which forms a spectrum?"
                ]
            };
            return mcqs[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'veryshort') {
            const veryshort = {
                A: [
                    "Define light.",
                    "What is reflection?",
                    "State two laws of reflection.",
                    "Define plane mirror.",
                    "What is refraction?",
                    "Name two types of lenses."
                ],
                B: [
                    "What is rectilinear propagation?",
                    "Define regular reflection.",
                    "What is a normal?",
                    "Name two types of mirrors.",
                    "What is focal point?",
                    "Define dispersion."
                ],
                C: [
                    "Differentiate luminous and non-luminous objects.",
                    "What is diffuse reflection?",
                    "Define angle of incidence.",
                    "What is lateral inversion?",
                    "Name the seven colors of spectrum.",
                    "What is a prism?"
                ]
            };
            return veryshort[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'short') {
            const short = {
                A: [
                    "State and explain laws of reflection. Draw a diagram showing incident ray, reflected ray, and normal.",
                    "What is refraction of light? Explain why a pencil appears bent in water."
                ],
                B: [
                    "Describe characteristics of image formed by plane mirror. Explain lateral inversion with example.",
                    "Differentiate between real and virtual images. Give one example of each."
                ],
                C: [
                    "Explain dispersion of light. How does a prism split white light? Draw a labeled diagram.",
                    "Describe concave and convex mirrors. Give two uses of each type of mirror."
                ]
            };
            return short[variant as 'A' | 'B' | 'C'][num - 1];
        } else { // long
            const long = {
                A: [
                    "Explain reflection of light in detail. State laws of reflection and describe regular and diffuse reflection with diagrams.",
                    "Describe formation of images by plane mirrors. Explain characteristics of images and demonstrate with ray diagrams."
                ],
                B: [
                    "What is refraction? Explain causes of refraction and give four effects or applications of refraction in daily life.",
                    "Explain concave and convex lenses. Describe their uses and show ray diagrams for image formation."
                ],
                C: [
                    "Describe dispersion of white light by a prism. Explain formation of rainbow and recombination of spectrum.",
                    "Explain spherical mirrors - concave and convex. Describe image formation and their practical applications with diagrams."
                ]
            };
            return long[variant as 'A' | 'B' | 'C'][num - 1];
        }
    }
    
    // Magnetism chapter questions
    if (chapterLower.includes('magnet')) {
        if (type === 'mcq') {
            const mcqs = {
                A: [
                    "Which pole of magnet points north?",
                    "What are magnetic materials?",
                    "What happens when like poles meet?",
                    "Which is the strongest part of magnet?",
                    "What is a magnetic field?",
                    "Which material is not attracted to magnets?",
                    "What is a compass?",
                    "Which force acts between magnets?",
                    "What is magnetic induction?",
                    "The Earth behaves like a?"
                ],
                B: [
                    "What are unlike poles?",
                    "Which metal is attracted to magnets?",
                    "What are magnetic field lines?",
                    "Which is a natural magnet?",
                    "What is an artificial magnet?",
                    "Where is magnetic field strongest?",
                    "What is magnetic north?",
                    "Which device uses magnets?",
                    "What is magnetization?",
                    "What protects magnets?"
                ],
                C: [
                    "How many poles does a magnet have?",
                    "What is attraction?",
                    "Which direction do field lines go?",
                    "What is lodestone?",
                    "Name a method to make magnets.",
                    "What is repulsion?",
                    "Which needle is magnetic?",
                    "What is demagnetization?",
                    "Which pole is north-seeking?",
                    "What are keepers?"
                ]
            };
            return mcqs[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'veryshort') {
            const veryshort = {
                A: [
                    "Define magnet.",
                    "Name two properties of magnets.",
                    "What is magnetic field?",
                    "Define magnetic poles.",
                    "What is attraction?",
                    "Give two uses of magnets."
                ],
                B: [
                    "What are magnetic materials?",
                    "State law of magnetic poles.",
                    "What are field lines?",
                    "Define magnetic compass.",
                    "What is repulsion?",
                    "Name two types of magnets."
                ],
                C: [
                    "Differentiate natural and artificial magnets.",
                    "What is magnetization?",
                    "Define magnetic induction.",
                    "What are magnetic keepers?",
                    "Name three magnetic materials.",
                    "What is demagnetization?"
                ]
            };
            return veryshort[variant as 'A' | 'B' | 'C'][num - 1];
        } else if (type === 'short') {
            const short = {
                A: [
                    "Explain properties of magnets. Describe directive and attractive properties with examples.",
                    "What are magnetic field lines? Draw field lines around a bar magnet showing their direction."
                ],
                B: [
                    "Differentiate between magnetic and non-magnetic materials. Give three examples of each.",
                    "Explain magnetic induction. How can you make a temporary magnet using this method?"
                ],
                C: [
                    "Describe methods of making artificial magnets. Explain any two methods in detail.",
                    "What is a magnetic compass? Explain how it works and give two uses."
                ]
            };
            return short[variant as 'A' | 'B' | 'C'][num - 1];
        } else { // long
            const long = {
                A: [
                    "Explain magnetic field in detail. Describe magnetic field lines, their properties, and draw patterns around bar magnet.",
                    "Describe properties of magnets in detail. Explain attraction, repulsion, directive property, and law of magnetic poles with examples."
                ],
                B: [
                    "What is magnetization? Explain three methods of making magnets. Describe precautions in storing magnets.",
                    "Explain Earth's magnetism. Describe Earth's magnetic field, magnetic poles, and geographic poles. Why is compass needle useful?"
                ],
                C: [
                    "Describe magnetic induction and induced magnetism. Explain with experiments and give applications in daily life.",
                    "Explain various applications of magnets. Describe uses in compass, electric bell, speakers, and other devices with diagrams."
                ]
            };
            return long[variant as 'A' | 'B' | 'C'][num - 1];
        }
    }
    
    // Generic fallback for any other chapters
    if (type === 'mcq') {
        return `[Set ${variant} Q${num}] Multiple choice question about ${chapterName}?`;
    } else if (type === 'veryshort') {
        return `[Set ${variant} Q${num}] Very short answer question: Explain a basic concept from ${chapterName}.`;
    } else if (type === 'short') {
        return `[Set ${variant} Q${num}] Short answer question: Explain a key concept from ${chapterName}.`;
    } else {
        return `[Set ${variant} Q${num}] Long answer question: Describe in detail the principles and applications covered in ${chapterName}.`;
    }
}

generatePhysicsVariants().catch(console.error);
