import { initDatabase } from '../db/database';

// Helper to create a standard question paper structure
const createPaper = (subject: string, chapter: string, questions: any[]) => {
    return {
        title: `Practice Paper - ${chapter}`,
        school: "LearnNest School",
        class: "Class 6",
        subject: subject,
        sections: [
            {
                name: "Section A: Multiple Choice",
                questions: questions.slice(0, 3).map((q, i) => ({ ...q, id: i + 1, marks: 1 }))
            },
            {
                name: "Section B: Short Answer",
                questions: questions.slice(3, 6).map((q, i) => ({ ...q, id: i + 4, marks: 2 }))
            },
            {
                name: "Section C: Long Answer",
                questions: questions.slice(6).map((q, i) => ({ ...q, id: i + 7, marks: 4 }))
            }
        ]
    };
};

const syllabusData: Record<string, Record<string, any[]>> = {
    "MATHEMATICS": {
        "CHAPTER 5 : DECIMAL FRACTIONS": [
            { question: "Convert 0.75 to a fraction.", options: ["3/4", "1/2", "2/3", "4/5"], answer: "3/4" },
            { question: "What is 2.5 + 3.1?", options: ["5.6", "5.5", "6.5", "5.1"], answer: "5.6" },
            { question: "Value of 0.1 x 0.1 is:", options: ["0.01", "0.1", "1.0", "0.001"], answer: "0.01" },
            { question: "Write 4/5 as a decimal.", answer: "0.8" },
            { question: "Subtract 1.2 from 5.", answer: "3.8" },
            { question: "Multiply 2.4 by 100.", answer: "240" },
            { question: "Divide 15.6 by 3 and show the steps.", answer: "5.2" },
            { question: "A rope is 10.5m long. If 2.3m is cut off, how much is left?", answer: "8.2m" }
        ],
        "CHAPTER 7 : SETS": [
            { question: "Which is a finite set?", options: ["Set of natural numbers", "Set of days in a week", "Set of stars", "Set of odd numbers"], answer: "Set of days in a week" },
            { question: "Symbol for intersection is:", options: ["U", "∩", "∈", "⊂"], answer: "∩" },
            { question: "If A = {1, 2}, number of subsets is:", options: ["2", "4", "3", "1"], answer: "4" },
            { question: "Define a singleton set.", answer: "A set with only one element." },
            { question: "Write the set of vowels in 'MATHEMATICS' in roster form.", answer: "{A, E, I}" },
            { question: "If A = {1, 2, 3} and B = {3, 4}, find A U B.", answer: "{1, 2, 3, 4}" },
            { question: "Explain the difference between finite and infinite sets with examples.", answer: "Finite has countable elements, Infinite has uncountable." },
            { question: "Draw a Venn diagram to represent A intersection B.", answer: "Diagram required." }
        ],
        "CHAPTER 8: RATIO AND PROPORTION": [
            { question: "Ratio of 50p to ₹1 is:", options: ["1:2", "2:1", "1:1", "1:5"], answer: "1:2" },
            { question: "If a:b = 2:3 and b:c = 3:4, then a:c is:", options: ["2:4", "1:2", "2:3", "3:4"], answer: "1:2" },
            { question: "Fourth proportional to 2, 4, 6 is:", options: ["8", "10", "12", "14"], answer: "12" },
            { question: "Simplify ratio 15:25.", answer: "3:5" },
            { question: "Are 2, 4, 6, 12 in proportion?", answer: "No, 2x12 != 4x6 (24=24). Wait, 2/4 = 1/2, 6/12 = 1/2. Yes they are." },
            { question: "Divide ₹100 in ratio 2:3.", answer: "₹40 and ₹60" },
            { question: "If 5 pens cost ₹25, what is the cost of 8 pens?", answer: "₹40" },
            { question: "A map scale is 1:100000. If distance on map is 5cm, find actual distance in km.", answer: "5km" }
        ],
        "CHAPTER 10: PERCENTAGE": [
            { question: "50% of 200 is:", options: ["50", "100", "150", "200"], answer: "100" },
            { question: "1/4 as percentage is:", options: ["20%", "25%", "30%", "40%"], answer: "25%" },
            { question: "0.6 as percentage is:", options: ["6%", "60%", "0.6%", "600%"], answer: "60%" },
            { question: "Convert 75% to fraction.", answer: "3/4" },
            { question: "What percent of 50 is 10?", answer: "20%" },
            { question: "Increase 80 by 10%.", answer: "88" },
            { question: "In a class of 50, 40% are girls. How many boys are there?", answer: "30 boys" },
            { question: "A price increased from ₹100 to ₹120. Find percentage increase.", answer: "20%" }
        ],
        "CHAPTER 11 : SPEED ,TIME AND DISTANCE": [
            { question: "Formula for Speed is:", options: ["D x T", "D / T", "T / D", "D + T"], answer: "D / T" },
            { question: "Convert 36 km/h to m/s.", options: ["10 m/s", "20 m/s", "15 m/s", "12 m/s"], answer: "10 m/s" },
            { question: "Time taken to cover 100km at 50km/h is:", options: ["1h", "2h", "3h", "4h"], answer: "2h" },
            { question: "A car travels 60km in 1.5 hours. Find speed.", answer: "40 km/h" },
            { question: "Convert 20 m/s to km/h.", answer: "72 km/h" },
            { question: "Distance = Speed x ____?", answer: "Time" },
            { question: "A train 100m long crosses a pole in 10s. Find its speed.", answer: "10 m/s" },
            { question: "A man walks at 5km/h for 2 hours and runs at 10km/h for 1 hour. Find average speed.", answer: "Total Dist=20km, Total Time=3h. Avg Speed = 6.67 km/h" }
        ],
        "CHAPTER 12 : FUNDAMENTAL CONCEPTS OF ALGEBRA": [
            { question: "The coefficient of x in 5xy is:", options: ["5", "5y", "y", "5x"], answer: "5y" },
            { question: "Which is a binomial?", options: ["2x", "x+y", "x+y+z", "5"], answer: "x+y" },
            { question: "Value of x+5 when x=2 is:", options: ["5", "2", "7", "10"], answer: "7" },
            { question: "Write algebraic expression for '5 more than x'.", answer: "x + 5" },
            { question: "Identify like terms: 2x, 3y, 5x, 2z.", answer: "2x and 5x" },
            { question: "Simplify: 2a + 3b - a + b.", answer: "a + 4b" },
            { question: "Subtract 3x from 5x.", answer: "2x" },
            { question: "Evaluate 2x^2 + 3y when x=2, y=3.", answer: "2(4) + 9 = 17" }
        ],
        "CHAPTER 13 : SIMPLE EQUATIONS": [
            { question: "Solution of x + 3 = 5 is:", options: ["2", "3", "5", "8"], answer: "2" },
            { question: "If 2x = 10, x is:", options: ["2", "5", "10", "20"], answer: "5" },
            { question: "Equation for 'twice a number is 8' is:", options: ["x+2=8", "2x=8", "x/2=8", "x-2=8"], answer: "2x=8" },
            { question: "Solve: y - 5 = 7.", answer: "y = 12" },
            { question: "Solve: 3x + 2 = 11.", answer: "x = 3" },
            { question: "Check if x=2 is solution for 2x+1=5.", answer: "Yes" },
            { question: "Sum of two numbers is 15. One is x. Write equation if other is 5.", answer: "x + 5 = 15" },
            { question: "Solve: 2(x + 3) = 14.", answer: "x = 4" }
        ],
        "CHAPTER 17 : QUADRILATERALS": [
            { question: "Sum of angles in a quadrilateral is:", options: ["180", "360", "90", "270"], answer: "360" },
            { question: "A quadrilateral with opposite sides parallel is:", options: ["Trapezium", "Parallelogram", "Kite", "Triangle"], answer: "Parallelogram" },
            { question: "A square has angles equal to:", options: ["45", "60", "90", "100"], answer: "90" },
            { question: "Define a Trapezium.", answer: "One pair of opposite sides parallel." },
            { question: "Properties of a Rectangle.", answer: "Opposite sides equal, all angles 90." },
            { question: "Find the fourth angle if three are 50, 100, 120.", answer: "90" },
            { question: "Difference between Square and Rhombus.", answer: "Square has 90 deg angles, Rhombus may not." },
            { question: "Draw a kite and label its parts.", answer: "Drawing required." }
        ],
        "CHAPTER 19 : POLYGONS": [
            { question: "A polygon with 5 sides is:", options: ["Hexagon", "Pentagon", "Octagon", "Heptagon"], answer: "Pentagon" },
            { question: "Minimum sides for a polygon:", options: ["2", "3", "4", "5"], answer: "3" },
            { question: "Sum of exterior angles of any polygon:", options: ["180", "360", "540", "720"], answer: "360" },
            { question: "Define Regular Polygon.", answer: "Equal sides and equal angles." },
            { question: "Number of diagonals in a triangle.", answer: "0" },
            { question: "Name a polygon with 8 sides.", answer: "Octagon" },
            { question: "Formula for sum of interior angles.", answer: "(n-2) x 180" },
            { question: "Find sum of interior angles of a hexagon.", answer: "720 degrees" }
        ],
        "CHAPTER 20: RECOGNITION OF 3D SHAPES (SOLIDS)": [
            { question: "A cube has how many faces?", options: ["4", "6", "8", "12"], answer: "6" },
            { question: "Shape of a cricket ball is:", options: ["Circle", "Sphere", "Cone", "Cylinder"], answer: "Sphere" },
            { question: "A cylinder has how many curved surfaces?", options: ["1", "2", "3", "0"], answer: "1" },
            { question: "Number of edges in a cuboid.", answer: "12" },
            { question: "Example of a cone.", answer: "Ice cream cone / Birthday cap" },
            { question: "Euler's formula for polyhedrons.", answer: "F + V - E = 2" },
            { question: "Draw a net of a cube.", answer: "Drawing required." },
            { question: "Difference between prism and pyramid.", answer: "Prism has uniform cross-section, Pyramid tapers to a point." }
        ],
        "CHAPTER 22: GEOMETRICAL CONSTRUCTIONS": [
            { question: "Tool used to draw circles:", options: ["Ruler", "Compass", "Protractor", "Divider"], answer: "Compass" },
            { question: "Tool used to measure angles:", options: ["Ruler", "Compass", "Protractor", "Set Square"], answer: "Protractor" },
            { question: "Angle of a perpendicular bisector:", options: ["45", "60", "90", "180"], answer: "90" },
            { question: "Construct an angle of 60 degrees.", answer: "Construction required." },
            { question: "Bisect a line segment of 6cm.", answer: "Construction required." },
            { question: "Construct a square of side 4cm.", answer: "Construction required." },
            { question: "Bisect an angle of 80 degrees.", answer: "Construction required." },
            { question: "Construct an angle of 90 degrees using compass.", answer: "Construction required." }
        ],
        "CHAPTER 25: GRAPHICAL REPRESENTATION OF DATA": [
            { question: "Data represented using bars is called:", options: ["Pie Chart", "Bar Graph", "Line Graph", "Pictograph"], answer: "Bar Graph" },
            { question: "X-axis is usually:", options: ["Vertical", "Horizontal", "Diagonal", "Circular"], answer: "Horizontal" },
            { question: "Tally marks are used to find:", options: ["Mean", "Frequency", "Median", "Range"], answer: "Frequency" },
            { question: "Define Data.", answer: "Collection of facts or numbers." },
            { question: "What is a Pictograph?", answer: "Representing data using images." },
            { question: "Draw a bar graph for: A-10, B-20, C-15.", answer: "Graph required." },
            { question: "Advantages of Bar Graph.", answer: "Easy comparison." },
            { question: "Interpret the given bar graph.", answer: "Analysis required." }
        ],
        "CHAPTER 26 : MEAN AND MEDIAN": [
            { question: "Mean of 2, 4, 6 is:", options: ["2", "4", "6", "12"], answer: "4" },
            { question: "Median of 1, 3, 5, 7, 9 is:", options: ["3", "5", "7", "9"], answer: "5" },
            { question: "Mode is the value that occurs:", options: ["Most frequently", "Least frequently", "In the middle", "Average"], answer: "Most frequently" },
            { question: "Find mean of first 5 natural numbers.", answer: "3" },
            { question: "Find median of 2, 5, 1, 9, 6.", answer: "Order: 1,2,5,6,9. Median: 5" },
            { question: "Formula for Mean.", answer: "Sum of observations / Number of observations" },
            { question: "Find mean of 10, 20, 30, 40.", answer: "25" },
            { question: "Find median of 1, 2, 3, 4.", answer: "2.5" }
        ]
    },
    "PHYSICS": {
        "Chapter 1: Matter": [
            { question: "Which state of matter has fixed shape?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Solid" },
            { question: "Intermolecular space is maximum in:", options: ["Solids", "Liquids", "Gases", "None"], answer: "Gases" },
            { question: "Process of solid to liquid is:", options: ["Freezing", "Melting", "Boiling", "Condensation"], answer: "Melting" },
            { question: "Define Matter.", answer: "Anything that has mass and occupies space." },
            { question: "Properties of Liquids.", answer: "Fixed volume, no fixed shape." },
            { question: "Difference between evaporation and boiling.", answer: "Evaporation is surface phenomenon, boiling is bulk." },
            { question: "Describe arrangement of molecules in solids.", answer: "Tightly packed." },
            { question: "What is sublimation? Give example.", answer: "Solid to Gas directly. Camphor." }
        ],
        "Chapter 2: Physical Quantities and Measurements.": [
            { question: "SI unit of length is:", options: ["cm", "m", "km", "mm"], answer: "m" },
            { question: "SI unit of mass is:", options: ["g", "kg", "mg", "lb"], answer: "kg" },
            { question: "1 hour = ___ seconds.", options: ["60", "360", "3600", "600"], answer: "3600" },
            { question: "Define Density.", answer: "Mass per unit volume." },
            { question: "Instrument to measure temperature.", answer: "Thermometer" },
            { question: "Convert 5kg to grams.", answer: "5000g" },
            { question: "How to measure volume of irregular solid?", answer: "Displacement method." },
            { question: "Define Least Count.", answer: "Smallest measurement possible by an instrument." }
        ],
        "Chapter 3: Force": [
            { question: "SI unit of Force is:", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
            { question: "Force can change:", options: ["Speed", "Direction", "Shape", "All of these"], answer: "All of these" },
            { question: "Friction is a ___ force.", options: ["Contact", "Non-contact", "Magnetic", "Electrostatic"], answer: "Contact" },
            { question: "Define Force.", answer: "Push or pull." },
            { question: "Types of Non-contact forces.", answer: "Gravitational, Magnetic, Electrostatic." },
            { question: "Advantages of Friction.", answer: "Walking, writing, braking." },
            { question: "Disadvantages of Friction.", answer: "Wear and tear, heat generation." },
            { question: "What is Gravitational Force?", answer: "Force of attraction by earth." }
        ],
        "Chapter 4: Simple Machines": [
            { question: "Which is a simple machine?", options: ["Lever", "Pulley", "Inclined Plane", "All of these"], answer: "All of these" },
            { question: "A pair of scissors is a class ___ lever.", options: ["I", "II", "III", "IV"], answer: "I" },
            { question: "Mechanical Advantage = ?", options: ["Load/Effort", "Effort/Load", "Load x Effort", "Load + Effort"], answer: "Load/Effort" },
            { question: "Define Simple Machine.", answer: "Device to make work easier." },
            { question: "Give example of Class II lever.", answer: "Wheelbarrow, Nutcracker." },
            { question: "What is a Pulley?", answer: "Wheel with a groove." },
            { question: "Uses of Inclined Plane.", answer: "Ramps, Slides." },
            { question: "Explain the principle of a lever.", answer: "Load x Load Arm = Effort x Effort Arm." }
        ],
        "Chapter 5: Light.": [
            { question: "Light travels in:", options: ["Curved lines", "Straight lines", "Zigzag", "Circles"], answer: "Straight lines" },
            { question: "Speed of light is:", options: ["3x10^8 m/s", "300 m/s", "3000 km/s", "3x10^5 m/s"], answer: "3x10^8 m/s" },
            { question: "Object that emits light is:", options: ["Luminous", "Non-luminous", "Opaque", "Transparent"], answer: "Luminous" },
            { question: "Define Reflection.", answer: "Bouncing back of light." },
            { question: "Laws of Reflection.", answer: "i=r, incident/reflected/normal in same plane." },
            { question: "What is a Shadow?", answer: "Dark area formed when light is blocked." },
            { question: "Difference between Transparent and Opaque.", answer: "Transparent allows light, Opaque blocks it." },
            { question: "Explain Solar Eclipse.", answer: "Moon between Sun and Earth." }
        ],
        "Chapter 6: Magnetism.": [
            { question: "A magnet attracts:", options: ["Wood", "Iron", "Plastic", "Glass"], answer: "Iron" },
            { question: "Like poles:", options: ["Attract", "Repel", "No effect", "Stick"], answer: "Repel" },
            { question: "A freely suspended magnet points:", options: ["East-West", "North-South", "Up-Down", "Random"], answer: "North-South" },
            { question: "Define Magnetic Field.", answer: "Region around magnet where force is felt." },
            { question: "Properties of Magnetic Lines of Force.", answer: "N to S outside, S to N inside, never intersect." },
            { question: "How to demagnetize a magnet?", answer: "Heating, Hammering." },
            { question: "Difference between permanent and temporary magnet.", answer: "Permanent retains magnetism, Temporary loses it." },
            { question: "Uses of Electromagnets.", answer: "Bells, Cranes, Speakers." }
        ]
    },
    "CHEMISTRY": {
        "Chapter 3: Matter": [
            { question: "Smallest particle of matter:", options: ["Atom", "Molecule", "Cell", "Grain"], answer: "Atom" },
            { question: "Matter exists in ___ states.", options: ["1", "2", "3", "4"], answer: "3" },
            { question: "Gas to Liquid is:", options: ["Condensation", "Evaporation", "Sublimation", "Fusion"], answer: "Condensation" },
            { question: "Define Matter.", answer: "Mass and space." },
            { question: "Kinetic Theory of Matter.", answer: "Particles are in constant motion." },
            { question: "Why solids have fixed shape?", answer: "Strong intermolecular force." },
            { question: "Brownian Motion.", answer: "Zigzag motion of particles." },
            { question: "Diffusion in gases.", answer: "Mixing of gases due to motion." }
        ],
        "Chapter 4: Elements, Compounds, Symbol & Formulae": [
            { question: "Symbol for Sodium is:", options: ["S", "So", "Na", "Sd"], answer: "Na" },
            { question: "Water (H2O) is a:", options: ["Element", "Compound", "Mixture", "Atom"], answer: "Compound" },
            { question: "O2 represents:", options: ["Oxygen atom", "Oxygen molecule", "Ozone", "Oxide"], answer: "Oxygen molecule" },
            { question: "Define Element.", answer: "Pure substance with one type of atom." },
            { question: "Write formula for Carbon Dioxide.", answer: "CO2" },
            { question: "Difference between Atom and Molecule.", answer: "Atom is smallest unit of element, Molecule is group of atoms." },
            { question: "Valency of Carbon.", answer: "4" },
            { question: "Write symbols for: Iron, Gold, Silver.", answer: "Fe, Au, Ag" }
        ],
        "Chapter 5: Pure Substances and Mixtures; Separation of Mixtures": [
            { question: "Air is a:", options: ["Compound", "Element", "Mixture", "Pure Substance"], answer: "Mixture" },
            { question: "Method to separate sand and water:", options: ["Filtration", "Distillation", "Magnetic", "Sublimation"], answer: "Filtration" },
            { question: "Separation of salt from water:", options: ["Evaporation", "Filtration", "Sedimentation", "Decantation"], answer: "Evaporation" },
            { question: "Define Mixture.", answer: "Impure substance with physically mixed components." },
            { question: "What is Winnowing?", answer: "Separating grain from chaff using wind." },
            { question: "Principle of Distillation.", answer: "Difference in boiling points." },
            { question: "Separate Iron filings and Sulphur.", answer: "Use Magnet." },
            { question: "Define Saturated Solution.", answer: "No more solute can dissolve." }
        ],
        "Chapter 6: Air and Atmosphere": [
            { question: "Percentage of Nitrogen in air:", options: ["21%", "78%", "1%", "0.03%"], answer: "78%" },
            { question: "Gas used for breathing:", options: ["Nitrogen", "Oxygen", "CO2", "Argon"], answer: "Oxygen" },
            { question: "Layer of atmosphere closest to earth:", options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"], answer: "Troposphere" },
            { question: "Composition of Air.", answer: "N2, O2, Ar, CO2, etc." },
            { question: "Uses of Oxygen.", answer: "Respiration, Combustion." },
            { question: "What is Rusting?", answer: "Iron reacting with O2 and moisture." },
            { question: "Greenhouse Effect.", answer: "Trapping of heat by CO2." },
            { question: "Properties of Air.", answer: "Occupies space, has mass, exerts pressure." }
        ],
        "Chapter 7: Water": [
            { question: "Chemical formula of water:", options: ["HO", "H2O", "H2O2", "HO2"], answer: "H2O" },
            { question: "Freezing point of water:", options: ["0 C", "100 C", "37 C", "-10 C"], answer: "0 C" },
            { question: "Water is a universal ___.", options: ["Solvent", "Solute", "Solution", "Mixture"], answer: "Solvent" },
            { question: "Water Cycle.", answer: "Evaporation, Condensation, Precipitation." },
            { question: "Sources of Water.", answer: "Rain, Rivers, Lakes, Wells." },
            { question: "Potable Water.", answer: "Fit for drinking." },
            { question: "Conservation of Water.", answer: "Rainwater harvesting, closing taps." },
            { question: "Properties of Water.", answer: "Colorless, odorless, tasteless." }
        ]
    },
    "BIOLOGY": {
        "Chapter 3: Cell: The structure and functions": [
            { question: "Powerhouse of the cell:", options: ["Nucleus", "Mitochondria", "Ribosome", "Plastid"], answer: "Mitochondria" },
            { question: "Control center of the cell:", options: ["Nucleus", "Cytoplasm", "Wall", "Membrane"], answer: "Nucleus" },
            { question: "Plant cells have ___ which animal cells don't.", options: ["Cell Wall", "Nucleus", "Mitochondria", "Ribosome"], answer: "Cell Wall" },
            { question: "Define Cell.", answer: "Structural and functional unit of life." },
            { question: "Function of Chloroplast.", answer: "Photosynthesis." },
            { question: "Difference between Plant and Animal Cell.", answer: "Wall, Plastids, Vacuole size." },
            { question: "Unicellular vs Multicellular.", answer: "One cell vs Many cells." },
            { question: "Draw a plant cell.", answer: "Drawing required." }
        ],
        "Chapter 4: Human Body: Digestive System": [
            { question: "Digestion starts in:", options: ["Stomach", "Mouth", "Intestine", "Liver"], answer: "Mouth" },
            { question: "Acid produced in stomach:", options: ["HCl", "H2SO4", "HNO3", "Acetic"], answer: "HCl" },
            { question: "Absorption of food happens in:", options: ["Small Intestine", "Large Intestine", "Stomach", "Liver"], answer: "Small Intestine" },
            { question: "Define Digestion.", answer: "Breakdown of complex food to simple." },
            { question: "Role of Liver.", answer: "Produces Bile." },
            { question: "Functions of Tongue.", answer: "Taste, Mixing, Swallowing." },
            { question: "Peristalsis.", answer: "Wave-like movement of food pipe." },
            { question: "Draw Digestive System.", answer: "Drawing required." }
        ],
        "Chapter 5: Human Body: Respiratory System": [
            { question: "Main organ of respiration:", options: ["Heart", "Lungs", "Kidney", "Liver"], answer: "Lungs" },
            { question: "Windpipe is also called:", options: ["Oesophagus", "Trachea", "Larynx", "Pharynx"], answer: "Trachea" },
            { question: "Gas inhaled is rich in:", options: ["Oxygen", "CO2", "Nitrogen", "Hydrogen"], answer: "Oxygen" },
            { question: "Define Respiration.", answer: "Release of energy from food." },
            { question: "Mechanism of Breathing.", answer: "Inhalation and Exhalation." },
            { question: "Role of Diaphragm.", answer: "Helps in breathing movements." },
            { question: "Difference between Breathing and Respiration.", answer: "Physical vs Chemical process." },
            { question: "Draw Respiratory System.", answer: "Drawing required." }
        ],
        "Chapter 6: Human Body: Circulatory System": [
            { question: "Pumping organ of body:", options: ["Lungs", "Heart", "Brain", "Liver"], answer: "Heart" },
            { question: "Blood vessels carrying blood away from heart:", options: ["Arteries", "Veins", "Capillaries", "Nerves"], answer: "Arteries" },
            { question: "Red pigment in blood:", options: ["Haemoglobin", "Chlorophyll", "Melanin", "Bile"], answer: "Haemoglobin" },
            { question: "Components of Blood.", answer: "RBC, WBC, Platelets, Plasma." },
            { question: "Function of WBC.", answer: "Fight infection." },
            { question: "Double Circulation.", answer: "Blood passes heart twice." },
            { question: "Pulse Rate.", answer: "Heartbeats per minute." },
            { question: "Draw Heart.", answer: "Drawing required." }
        ],
        "Chapter 7: Disease and Hygiene": [
            { question: "Disease caused by lack of Iron:", options: ["Scurvy", "Rickets", "Anaemia", "Goitre"], answer: "Anaemia" },
            { question: "Communicable disease:", options: ["Diabetes", "Flu", "Cancer", "Heart attack"], answer: "Flu" },
            { question: "Vitamin C deficiency causes:", options: ["Scurvy", "Beriberi", "Night Blindness", "Rickets"], answer: "Scurvy" },
            { question: "Define Hygiene.", answer: "Practices to maintain health." },
            { question: "Modes of transmission of diseases.", answer: "Air, Water, Contact, Vectors." },
            { question: "Balanced Diet.", answer: "Contains all nutrients in right amount." },
            { question: "Vaccination.", answer: "Protection against diseases." },
            { question: "First Aid.", answer: "Immediate help given to injured." }
        ],
        "Chapter 8: Habitat and Adaptation": [
            { question: "Habitat of Camel:", options: ["Forest", "Desert", "Ocean", "Mountain"], answer: "Desert" },
            { question: "Fish breathe through:", options: ["Lungs", "Gills", "Skin", "Nose"], answer: "Gills" },
            { question: "Cactus is adapted for:", options: ["Desert", "Water", "Snow", "Rainforest"], answer: "Desert" },
            { question: "Define Habitat.", answer: "Natural home of an organism." },
            { question: "Adaptations of Fish.", answer: "Streamlined body, Gills, Fins." },
            { question: "Adaptations of Camel.", answer: "Hump, Broad feet, Long lashes." },
            { question: "Biotic and Abiotic components.", answer: "Living vs Non-living." },
            { question: "Mountain adaptations.", answer: "Thick fur, Conical trees." }
        ]
    },
    "COMPUTER": {
        "Chapter 2: File Management: Organisation of Data": [
            { question: "Extension of Word file:", options: [".docx", ".xlsx", ".pptx", ".txt"], answer: ".docx" },
            { question: "To copy a file:", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: "Ctrl+C" },
            { question: "Deleted files go to:", options: ["Desktop", "Recycle Bin", "Documents", "Nowhere"], answer: "Recycle Bin" },
            { question: "What is a Folder?", answer: "Container for files." },
            { question: "Moving vs Copying.", answer: "Move changes location, Copy duplicates." },
            { question: "Wildcard characters.", answer: "* and ?" },
            { question: "Searching for files.", answer: "Using search bar." },
            { question: "Sorting files.", answer: "By name, date, size, type." }
        ],
        "Chapter 5: Presentation: Visual Effects": [
            { question: "Software for presentation:", options: ["Word", "Excel", "PowerPoint", "Paint"], answer: "PowerPoint" },
            { question: "Key to start slideshow:", options: ["F5", "F1", "Esc", "Enter"], answer: "F5" },
            { question: "Movement of slides is called:", options: ["Animation", "Transition", "Design", "Layout"], answer: "Transition" },
            { question: "What is Animation?", answer: "Movement of objects on slide." },
            { question: "Slide Master.", answer: "Template for all slides." },
            { question: "Inserting Audio/Video.", answer: "Media options." },
            { question: "Views in PowerPoint.", answer: "Normal, Slide Sorter, Reading." },
            { question: "Printing handouts.", answer: "Multiple slides per page." }
        ],
        "Chapter 7: HTML: An Introduction": [
            { question: "HTML stands for:", options: ["Hyper Text Markup Language", "High Tech Mail Link", "Hyper Tool Make Language", "None"], answer: "Hyper Text Markup Language" },
            { question: "Tag for largest heading:", options: ["<h1>", "<h6>", "<head>", "<title>"], answer: "<h1>" },
            { question: "Tag for paragraph:", options: ["<p>", "<para>", "<pg>", "<text>"], answer: "<p>" },
            { question: "Structure of HTML.", answer: "<html><head><body>...</body></head></html>" },
            { question: "Container vs Empty tags.", answer: "Start+End vs Only Start." },
            { question: "Attributes.", answer: "Properties of tags." },
            { question: "Creating lists.", answer: "<ul>, <ol>, <li>." },
            { question: "Inserting Images.", answer: "<img> tag." }
        ]
    },
    "ENGLISH LITERATURE": {
        "Classic Short Story: The Lottery Ticket": [
            { question: "Who wrote 'The Lottery Ticket'?", options: ["Anton Chekhov", "Oscar Wilde", "O. Henry", "Tolstoy"], answer: "Anton Chekhov" },
            { question: "The series number was:", options: ["9499", "9999", "1234", "5678"], answer: "9499" },
            { question: "The prize amount was:", options: ["75,000", "50,000", "10,000", "100,000"], answer: "75,000" },
            { question: "Describe Ivan's initial reaction.", answer: "Disbelief and excitement." },
            { question: "How did the couple's attitude change?", answer: "Became greedy and hateful." },
            { question: "What were Ivan's dreams?", answer: "Estate, travel, good food." },
            { question: "What were Masha's dreams?", answer: "Similar, but Ivan resented them." },
            { question: "Theme of the story.", answer: "Greed and human nature." }
        ],
        "Prose: The Remarkable Rocket-Oscar Wilde": [
            { question: "The Rocket claimed to be:", options: ["Remarkable", "Ordinary", "Cheap", "Fast"], answer: "Remarkable" },
            { question: "The event was:", options: ["King's Wedding", "Prince's Wedding", "New Year", "Birthday"], answer: "Prince's Wedding" },
            { question: "The Rocket was crying because:", options: ["He was sad", "He was sensitive", "He was wet", "He was broken"], answer: "He was sensitive" },
            { question: "Character sketch of the Rocket.", answer: "Arrogant, self-obsessed." },
            { question: "What happened to the Rocket in the end?", answer: "Went off unnoticed." },
            { question: "Irony in the story.", answer: "He thought he was great, but no one cared." },
            { question: "The Frog's opinion.", answer: "Argumentative." },
            { question: "Moral of the story.", answer: "Pride comes before a fall." }
        ]
    },
    "HISTORY AND CIVICS": {
        "The Mauryan Empire and Administration": [
            { question: "Founder of Mauryan Empire:", options: ["Chandragupta", "Ashoka", "Bindusara", "Kanishka"], answer: "Chandragupta" },
            { question: "Ashoka fought the war of:", options: ["Kalinga", "Panipat", "Plassey", "Buxar"], answer: "Kalinga" },
            { question: "Arthashastra was written by:", options: ["Chanakya", "Megasthenes", "Kalidasa", "Harsha"], answer: "Chanakya" },
            { question: "Capital of Mauryas.", answer: "Pataliputra." },
            { question: "Ashoka's Dhamma.", answer: "Code of conduct." },
            { question: "Mauryan Administration.", answer: "Centralized, Spies, Army." },
            { question: "Decline of Mauryas.", answer: "Weak successors." },
            { question: "Indica.", answer: "Book by Megasthenes." }
        ],
        "The Gupta Empire": [
            { question: "Founder of Gupta Dynasty:", options: ["Sri Gupta", "Chandragupta I", "Samudragupta", "Vikramaditya"], answer: "Sri Gupta" },
            { question: "Napoleon of India:", options: ["Samudragupta", "Ashoka", "Akbar", "Shivaji"], answer: "Samudragupta" },
            { question: "Golden Age of India:", options: ["Gupta Period", "Mauryan Period", "Mughal Period", "British Period"], answer: "Gupta Period" },
            { question: "Achievements in Science.", answer: "Aryabhatta, Zero." },
            { question: "Kalidasa.", answer: "Great poet (Shakuntalam)." },
            { question: "Fa-Hien.", answer: "Chinese traveler." },
            { question: "Administration.", answer: "Decentralized." },
            { question: "Art and Architecture.", answer: "Temples, Ajanta caves." }
        ]
    },
    "GEOGRAPHY": {
        "Chapter 4: Agriculture": [
            { question: "Growing crops is:", options: ["Agriculture", "Mining", "Fishing", "Forestry"], answer: "Agriculture" },
            { question: "Kharif crops are sown in:", options: ["Monsoon", "Winter", "Summer", "Spring"], answer: "Monsoon" },
            { question: "Example of Cash Crop:", options: ["Cotton", "Rice", "Wheat", "Maize"], answer: "Cotton" },
            { question: "Types of Farming.", answer: "Subsistence, Commercial." },
            { question: "Green Revolution.", answer: "Increase in food production." },
            { question: "Major crops of India.", answer: "Rice, Wheat, Pulses." },
            { question: "Problems of Indian Agriculture.", answer: "Monsoon dependence, small holdings." },
            { question: "Organic Farming.", answer: "No chemicals." }
        ],
        "Map of South America": [
            { question: "Longest river in South America:", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Amazon" },
            { question: "Highest peak:", options: ["Aconcagua", "Everest", "K2", "Kilimanjaro"], answer: "Aconcagua" },
            { question: "Largest country:", options: ["Brazil", "Argentina", "Chile", "Peru"], answer: "Brazil" },
            { question: "Andes Mountains.", answer: "Longest mountain range." },
            { question: "Atacama Desert.", answer: "Driest place." },
            { question: "Grasslands.", answer: "Pampas, Llanos." },
            { question: "Location.", answer: "Southern Hemisphere." },
            { question: "Strait of Magellan.", answer: "Tip of the continent." }
        ]
    }
};

async function seedQuestions() {
    console.log('Initializing database...');
    const db = await initDatabase();

    // Ensure chapter_id column exists
    try {
        await db.exec('ALTER TABLE question_papers ADD COLUMN chapter_id INTEGER REFERENCES chapters(id)');
        console.log('Added chapter_id column to question_papers table.');
    } catch (e: any) {
        if (e.message.includes('duplicate column name')) {
            // Column already exists, ignore
        } else {
            console.log('Note: Could not add chapter_id column (might already exist or other error):', e.message);
        }
    }

    for (const [subjectName, chapters] of Object.entries(syllabusData)) {
        console.log(`Processing subject: ${subjectName}`);
        
        // Find Subject ID
        let subjectRow = await db.get('SELECT id FROM subjects WHERE name = ?', subjectName);
        if (!subjectRow) {
             // Try case-insensitive match
             subjectRow = await db.get('SELECT id FROM subjects WHERE name LIKE ?', subjectName);
        }
        
        if (!subjectRow) {
            console.log(`Subject ${subjectName} not found in DB. Skipping.`);
            continue;
        }

        for (const [chapterName, questions] of Object.entries(chapters)) {
            // Find Chapter ID
            // Try exact match first, then partial
            let chapterRow = await db.get('SELECT id FROM chapters WHERE subject_id = ? AND name = ?', subjectRow.id, chapterName);
            
            if (!chapterRow) {
                // Try fuzzy match
                chapterRow = await db.get('SELECT id FROM chapters WHERE subject_id = ? AND name LIKE ?', subjectRow.id, `%${chapterName}%`);
            }

            if (!chapterRow) {
                console.log(`  Chapter '${chapterName}' not found for ${subjectName}. Skipping.`);
                continue;
            }

            console.log(`  Seeding questions for chapter: ${chapterName}`);
            
            const paper = createPaper(subjectName, chapterName, questions);
            
            // Insert into question_papers
            await db.run(
                'INSERT INTO question_papers (subject_id, chapter_id, title, content, created_at) VALUES (?, ?, ?, ?, ?)',
                subjectRow.id,
                chapterRow.id,
                paper.title,
                JSON.stringify(paper),
                new Date().toISOString()
            );
        }
    }
    
    console.log('Seeding complete.');
}

seedQuestions().catch(console.error);
