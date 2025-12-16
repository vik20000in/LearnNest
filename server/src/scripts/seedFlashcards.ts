import { initDatabase } from '../db/database';

const syllabusData: Record<string, Record<string, any[]>> = {
    "Maths": {
        "CHAPTER 5 : DECIMAL FRACTIONS": [
            { question: "Decimal Fraction", answer: "A fraction whose denominator is a power of 10 (10, 100, 1000, etc.)." },
            { question: "Like Decimals", answer: "Decimals having the same number of decimal places (e.g., 0.5, 0.9, 1.2)." },
            { question: "Unlike Decimals", answer: "Decimals having different numbers of decimal places (e.g., 0.5, 0.55)." },
            { question: "Converting Fraction to Decimal", answer: "Divide the numerator by the denominator." },
            { question: "Multiplication by 10, 100, 1000", answer: "Shift the decimal point to the right by as many places as there are zeros." },
            { question: "Division by 10, 100, 1000", answer: "Shift the decimal point to the left by as many places as there are zeros." },
            { question: "Terminating Decimal", answer: "A decimal that has a finite number of digits." },
            { question: "Recurring Decimal", answer: "A decimal in which a digit or group of digits repeats endlessly." },
            { question: "Place Value in Decimals", answer: "Tenths (1/10), Hundredths (1/100), Thousandths (1/1000)." },
            { question: "Addition/Subtraction Rule", answer: "Align the decimal points vertically before adding or subtracting." }
        ],
        "CHAPTER 7 : SETS": [
            { question: "Set", answer: "A well-defined collection of distinct objects." },
            { question: "Element/Member", answer: "An object that belongs to a set, denoted by ∈." },
            { question: "Roster Form", answer: "Listing all elements inside curly braces { } separated by commas." },
            { question: "Set-Builder Form", answer: "Describing the property possessed by all elements, e.g., {x : x is a vowel}." },
            { question: "Finite Set", answer: "A set with a countable number of elements." },
            { question: "Infinite Set", answer: "A set with an uncountable number of elements." },
            { question: "Empty/Null Set (Φ)", answer: "A set containing no elements." },
            { question: "Singleton Set", answer: "A set containing exactly one element." },
            { question: "Cardinal Number n(A)", answer: "The number of distinct elements in a finite set A." },
            { question: "Subset (⊆)", answer: "Set A is a subset of B if every element of A is also in B." }
        ],
        "CHAPTER 8: RATIO AND PROPORTION": [
            { question: "Ratio", answer: "Comparison of two quantities of the same kind by division (a:b)." },
            { question: "Antecedent & Consequent", answer: "In ratio a:b, 'a' is the antecedent and 'b' is the consequent." },
            { question: "Simplest Form", answer: "A ratio where the HCF of antecedent and consequent is 1." },
            { question: "Proportion", answer: "Equality of two ratios (a:b :: c:d)." },
            { question: "Means & Extremes", answer: "In a:b::c:d, b and c are means; a and d are extremes." },
            { question: "Product Rule", answer: "Product of Extremes = Product of Means (ad = bc)." },
            { question: "Continued Proportion", answer: "Three quantities a, b, c are in continued proportion if a:b :: b:c." },
            { question: "Mean Proportional", answer: "If a, b, c are in continued proportion, b is the mean proportional (b² = ac)." },
            { question: "Unitary Method", answer: "Finding the value of one unit first, then the value of required units." },
            { question: "Inverse Ratio", answer: "The inverse ratio of a:b is b:a." }
        ],
        "CHAPTER 10: PERCENTAGE": [
            { question: "Percentage (%)", answer: "A fraction with denominator 100." },
            { question: "Converting Fraction to %", answer: "Multiply the fraction by 100 and add the % sign." },
            { question: "Converting % to Fraction", answer: "Divide the number by 100 and remove the % sign." },
            { question: "Converting Decimal to %", answer: "Shift decimal point two places to the right." },
            { question: "Converting % to Decimal", answer: "Shift decimal point two places to the left." },
            { question: "Percentage Increase", answer: "(Increase / Original Value) × 100." },
            { question: "Percentage Decrease", answer: "(Decrease / Original Value) × 100." },
            { question: "Profit %", answer: "(Profit / Cost Price) × 100." },
            { question: "Loss %", answer: "(Loss / Cost Price) × 100." },
            { question: "Simple Interest Formula", answer: "SI = (P × R × T) / 100." }
        ],
        "CHAPTER 11 : SPEED ,TIME AND DISTANCE": [
            { question: "Speed Formula", answer: "Speed = Distance / Time." },
            { question: "Distance Formula", answer: "Distance = Speed × Time." },
            { question: "Time Formula", answer: "Time = Distance / Speed." },
            { question: "km/h to m/s Conversion", answer: "Multiply by 5/18." },
            { question: "m/s to km/h Conversion", answer: "Multiply by 18/5." },
            { question: "Average Speed", answer: "Total Distance Covered / Total Time Taken." },
            { question: "Uniform Speed", answer: "Covering equal distances in equal intervals of time." },
            { question: "Relative Speed (Same Direction)", answer: "Difference of speeds (S1 - S2)." },
            { question: "Relative Speed (Opposite Direction)", answer: "Sum of speeds (S1 + S2)." },
            { question: "Train Crossing Pole", answer: "Distance traveled = Length of the train." }
        ],
        "CHAPTER 12 : FUNDAMENTAL CONCEPTS OF ALGEBRA": [
            { question: "Variable / Literal", answer: "A symbol (like x, y) that can take various numerical values." },
            { question: "Constant", answer: "A symbol having a fixed numerical value." },
            { question: "Algebraic Expression", answer: "Combination of constants and variables connected by +, -, ×, ÷." },
            { question: "Term", answer: "Parts of an expression separated by + or - signs." },
            { question: "Coefficient", answer: "The numerical factor of a term (e.g., in 5x, 5 is the coefficient)." },
            { question: "Like Terms", answer: "Terms having the same literal factors (e.g., 2xy and 5xy)." },
            { question: "Unlike Terms", answer: "Terms having different literal factors." },
            { question: "Monomial", answer: "An expression with only one term." },
            { question: "Binomial", answer: "An expression with two unlike terms." },
            { question: "Polynomial", answer: "An expression with one or more terms." }
        ],
        "CHAPTER 13 : SIMPLE EQUATIONS": [
            { question: "Equation", answer: "A statement of equality involving one or more variables." },
            { question: "Linear Equation", answer: "An equation where the highest power of the variable is 1." },
            { question: "Solution / Root", answer: "The value of the variable that makes the equation true." },
            { question: "LHS & RHS", answer: "Left Hand Side and Right Hand Side of the equality sign." },
            { question: "Transposition", answer: "Moving a term from one side to another by changing its sign." },
            { question: "Trial and Error Method", answer: "Substituting values until LHS = RHS." },
            { question: "Systematic Method", answer: "Performing same operation on both sides to isolate variable." },
            { question: "Inverse Operations", answer: "Addition ↔ Subtraction, Multiplication ↔ Division." },
            { question: "Solving Word Problems", answer: "Read, Assume variable, Form equation, Solve, Check." },
            { question: "Verification", answer: "Substituting the answer back into the original equation to check validity." }
        ],
        "CHAPTER 17 : QUADRILATERALS": [
            { question: "Quadrilateral", answer: "A polygon with 4 sides and 4 vertices." },
            { question: "Angle Sum Property", answer: "Sum of all interior angles of a quadrilateral is 360°." },
            { question: "Parallelogram", answer: "Opposite sides are parallel and equal. Opposite angles are equal." },
            { question: "Rectangle", answer: "A parallelogram with all angles equal to 90°." },
            { question: "Square", answer: "A rectangle with all sides equal." },
            { question: "Rhombus", answer: "A parallelogram with all sides equal. Diagonals bisect at 90°." },
            { question: "Trapezium", answer: "A quadrilateral with one pair of parallel sides." },
            { question: "Kite", answer: "Two pairs of equal adjacent sides. Diagonals intersect at 90°." },
            { question: "Diagonal Property (Parallelogram)", answer: "Diagonals bisect each other." },
            { question: "Diagonal Property (Rectangle)", answer: "Diagonals are equal and bisect each other." }
        ],
        "CHAPTER 19 : POLYGONS": [
            { question: "Polygon", answer: "A simple closed curve made of line segments." },
            { question: "Regular Polygon", answer: "A polygon with all sides and all angles equal." },
            { question: "Convex Polygon", answer: "All interior angles are less than 180°." },
            { question: "Concave Polygon", answer: "At least one interior angle is greater than 180°." },
            { question: "Triangle", answer: "3-sided polygon. Sum of angles = 180°." },
            { question: "Quadrilateral", answer: "4-sided polygon. Sum of angles = 360°." },
            { question: "Pentagon", answer: "5-sided polygon." },
            { question: "Hexagon", answer: "6-sided polygon." },
            { question: "Interior Angle Sum Formula", answer: "(n - 2) × 180°, where n is number of sides." },
            { question: "Exterior Angle Sum", answer: "Sum of exterior angles of any convex polygon is 360°." }
        ],
        "CHAPTER 20: RECOGNITION OF 3D SHAPES (SOLIDS)": [
            { question: "Face", answer: "A flat surface of a 3D shape." },
            { question: "Edge", answer: "A line segment where two faces meet." },
            { question: "Vertex", answer: "A point where three or more edges meet." },
            { question: "Cuboid", answer: "6 rectangular faces, 12 edges, 8 vertices." },
            { question: "Cube", answer: "6 square faces, 12 equal edges, 8 vertices." },
            { question: "Cylinder", answer: "2 circular flat faces, 1 curved face, no vertices." },
            { question: "Cone", answer: "1 circular flat face, 1 curved face, 1 vertex." },
            { question: "Sphere", answer: "1 curved surface, no edges, no vertices." },
            { question: "Prism", answer: "A solid with identical ends and flat faces." },
            { question: "Pyramid", answer: "A solid with a polygon base and triangular sides meeting at a point." }
        ],
        "CHAPTER 22: GEOMETRICAL CONSTRUCTIONS": [
            { question: "Perpendicular Bisector", answer: "A line that divides a segment into two equal halves at 90°." },
            { question: "Angle Bisector", answer: "A ray that divides an angle into two equal angles." },
            { question: "Construction of 60°", answer: "Draw an arc on a line, then cut the arc with the same radius." },
            { question: "Construction of 90°", answer: "Bisect the angle between 60° and 120°." },
            { question: "Construction of 45°", answer: "Bisect a 90° angle." },
            { question: "Parallel Line Construction", answer: "Using alternate interior angles or corresponding angles property." },
            { question: "Tools Required", answer: "Ruler, Compass, Protractor, Set Squares." },
            { question: "Circle Construction", answer: "Fix compass width to radius, place needle at center, rotate." },
            { question: "Line Segment", answer: "Part of a line with two fixed endpoints." },
            { question: "Arc", answer: "A part of the circumference of a circle." }
        ],
        "CHAPTER 25: GRAPHICAL REPRESENTATION OF DATA": [
            { question: "Data", answer: "Collection of numbers gathered to give some information." },
            { question: "Frequency", answer: "The number of times a particular observation occurs." },
            { question: "Bar Graph", answer: "Display of data using bars of uniform width." },
            { question: "Pictograph", answer: "Representation of data using symbols or pictures." },
            { question: "Scale", answer: "The ratio representing the relation between graph units and actual values." },
            { question: "X-Axis", answer: "The horizontal axis in a graph." },
            { question: "Y-Axis", answer: "The vertical axis in a graph." },
            { question: "Tally Marks", answer: "Vertical lines used to count frequency (groups of 5)." },
            { question: "Interpretation", answer: "Reading and understanding information from a graph." },
            { question: "Title", answer: "Describes what the graph is about." }
        ],
        "CHAPTER 26 : MEAN AND MEDIAN": [
            { question: "Arithmetic Mean", answer: "Sum of all observations divided by the number of observations." },
            { question: "Median", answer: "The middle value when data is arranged in ascending or descending order." },
            { question: "Mode", answer: "The observation that occurs most frequently." },
            { question: "Range", answer: "Difference between the highest and lowest observation." },
            { question: "Formula for Mean", answer: "Mean = (Σx) / n" },
            { question: "Median (Odd n)", answer: "((n + 1) / 2)th term." },
            { question: "Median (Even n)", answer: "Average of (n/2)th and ((n/2) + 1)th terms." },
            { question: "Central Tendency", answer: "A single value that describes the center of a data set." },
            { question: "Raw Data", answer: "Data collected in its original form." },
            { question: "Arrayed Data", answer: "Data arranged in ascending or descending order." }
        ]
    },
    "PHYSICS": {
        "Chapter 1: Matter": [
            { question: "Matter", answer: "Anything that has mass and occupies space." },
            { question: "Atom", answer: "The smallest particle of an element." },
            { question: "Molecule", answer: "Smallest particle of a substance capable of independent existence." },
            { question: "Solid", answer: "Definite shape, definite volume, strong intermolecular forces." },
            { question: "Liquid", answer: "Definite volume, no definite shape, moderate forces." },
            { question: "Gas", answer: "No definite shape, no definite volume, weak forces." },
            { question: "Intermolecular Space", answer: "Space between molecules (Min in solids, Max in gases)." },
            { question: "Intermolecular Force", answer: "Force of attraction between molecules." },
            { question: "Brownian Motion", answer: "Zig-zag random motion of particles suspended in a fluid." },
            { question: "Diffusion", answer: "Intermixing of particles of two different substances on their own." }
        ],
        "Chapter 2: Physical Quantities and Measurements.": [
            { question: "Physical Quantity", answer: "A quantity that can be measured." },
            { question: "SI Unit", answer: "International System of Units (Standard units)." },
            { question: "Length Unit", answer: "Meter (m)." },
            { question: "Mass Unit", answer: "Kilogram (kg)." },
            { question: "Time Unit", answer: "Second (s)." },
            { question: "Temperature Unit", answer: "Kelvin (K) or Celsius (°C)." },
            { question: "Area", answer: "Surface enclosed within a boundary (m²)." },
            { question: "Volume", answer: "Space occupied by an object (m³)." },
            { question: "Density", answer: "Mass per unit volume (kg/m³)." },
            { question: "Parallax Error", answer: "Error in reading due to wrong eye positioning." }
        ],
        "Chapter 3: Force": [
            { question: "Force", answer: "A push or pull acting on an object." },
            { question: "Effects of Force", answer: "Change speed, direction, shape, or state of motion." },
            { question: "Contact Force", answer: "Force acting through physical contact (e.g., Friction)." },
            { question: "Non-Contact Force", answer: "Force acting from a distance (e.g., Gravity, Magnetic)." },
            { question: "Friction", answer: "Force that opposes relative motion between surfaces." },
            { question: "Gravity", answer: "Force of attraction by Earth on objects." },
            { question: "Electrostatic Force", answer: "Force exerted by a charged body." },
            { question: "Magnetic Force", answer: "Force exerted by a magnet." },
            { question: "Unit of Force", answer: "Newton (N)." },
            { question: "Weight", answer: "Force with which Earth attracts an object (W = mg)." }
        ],
        "Chapter 4: Simple Machines": [
            { question: "Simple Machine", answer: "A device that makes work easier, faster, or changes force direction." },
            { question: "Lever", answer: "A rigid bar rotating about a fixed point (Fulcrum)." },
            { question: "Fulcrum (F)", answer: "The fixed point about which a lever turns." },
            { question: "Load (L)", answer: "The weight to be moved." },
            { question: "Effort (E)", answer: "The force applied to move the load." },
            { question: "Mechanical Advantage (MA)", answer: "Load / Effort." },
            { question: "Class I Lever", answer: "Fulcrum between Load and Effort (e.g., Scissors)." },
            { question: "Class II Lever", answer: "Load between Fulcrum and Effort (e.g., Wheelbarrow)." },
            { question: "Class III Lever", answer: "Effort between Fulcrum and Load (e.g., Tongs)." },
            { question: "Pulley", answer: "A wheel with a grooved rim used to lift loads." }
        ],
        "Chapter 5: Light.": [
            { question: "Rectilinear Propagation", answer: "Light travels in a straight line." },
            { question: "Reflection", answer: "Bouncing back of light from a surface." },
            { question: "Laws of Reflection", answer: "Angle i = Angle r; Incident ray, Reflected ray, Normal lie in same plane." },
            { question: "Luminous Object", answer: "Object that emits its own light (e.g., Sun)." },
            { question: "Non-Luminous Object", answer: "Object that reflects light (e.g., Moon)." },
            { question: "Transparent", answer: "Allows light to pass through completely." },
            { question: "Translucent", answer: "Allows partial light to pass through." },
            { question: "Opaque", answer: "Does not allow light to pass through." },
            { question: "Shadow", answer: "Dark region formed when an opaque object blocks light." },
            { question: "Lateral Inversion", answer: "Left side appears right in a mirror image." }
        ],
        "Chapter 6: Magnetism.": [
            { question: "Magnet", answer: "Material that attracts iron, nickel, cobalt." },
            { question: "Magnetic Poles", answer: "Ends of a magnet where attraction is strongest (North & South)." },
            { question: "Law of Magnetism", answer: "Like poles repel, unlike poles attract." },
            { question: "Magnetic Field", answer: "Space around a magnet where its influence is felt." },
            { question: "Magnetic Compass", answer: "Device used to find direction." },
            { question: "Demagnetization", answer: "Loss of magnetic properties (Heating, Hammering)." },
            { question: "Permanent Magnet", answer: "Retains magnetism for a long time." },
            { question: "Temporary Magnet", answer: "Loses magnetism easily (e.g., Electromagnet)." },
            { question: "Earth's Magnetism", answer: "Earth behaves like a giant magnet." },
            { question: "Magnetic Keeper", answer: "Soft iron piece used to store magnets safely." }
        ]
    },
    "CHEMISTRY": {
        "Chapter 3: Matter": [
            { question: "Matter", answer: "Anything that has mass and occupies space." },
            { question: "States of Matter", answer: "Solid, Liquid, Gas." },
            { question: "Melting", answer: "Change from solid to liquid." },
            { question: "Boiling", answer: "Change from liquid to gas at fixed temperature." },
            { question: "Condensation", answer: "Change from gas to liquid." },
            { question: "Freezing", answer: "Change from liquid to solid." },
            { question: "Sublimation", answer: "Direct change from solid to gas (e.g., Camphor)." },
            { question: "Atom", answer: "Basic unit of matter." },
            { question: "Diffusion", answer: "Movement of particles from high to low concentration." },
            { question: "Compressibility", answer: "Ability to be squeezed into smaller volume (High in gases)." }
        ],
        "Chapter 4: Elements, Compounds, Symbol & Formulae": [
            { question: "Element", answer: "Pure substance made of only one type of atom." },
            { question: "Compound", answer: "Substance made of two or more elements chemically combined." },
            { question: "Symbol", answer: "Short representation of an element (e.g., H for Hydrogen)." },
            { question: "Chemical Formula", answer: "Representation of a molecule using symbols (e.g., H2O)." },
            { question: "Atomicity", answer: "Number of atoms in a molecule." },
            { question: "Valency", answer: "Combining capacity of an element." },
            { question: "Metal", answer: "Element that is shiny, malleable, ductile, conductor." },
            { question: "Non-Metal", answer: "Element that is dull, brittle, insulator." },
            { question: "Metalloid", answer: "Element showing properties of both metals and non-metals." },
            { question: "Mixture", answer: "Impure substance with physically mixed components." }
        ],
        "Chapter 5: Pure Substances and Mixtures; Separation of Mixtures": [
            { question: "Pure Substance", answer: "Made of only one type of particles (Elements, Compounds)." },
            { question: "Mixture", answer: "Made of two or more substances physically mixed." },
            { question: "Homogeneous Mixture", answer: "Uniform composition throughout (e.g., Salt water)." },
            { question: "Heterogeneous Mixture", answer: "Non-uniform composition (e.g., Sand and water)." },
            { question: "Filtration", answer: "Separating insoluble solid from liquid using filter paper." },
            { question: "Evaporation", answer: "Separating soluble solid from liquid by heating." },
            { question: "Sedimentation", answer: "Settling down of heavy insoluble particles." },
            { question: "Decantation", answer: "Pouring out clear liquid after sedimentation." },
            { question: "Distillation", answer: "Separation based on different boiling points." },
            { question: "Magnetic Separation", answer: "Separating magnetic components using a magnet." }
        ],
        "Chapter 6: Air and Atmosphere": [
            { question: "Atmosphere", answer: "Blanket of air surrounding the Earth." },
            { question: "Composition of Air", answer: "Nitrogen (78%), Oxygen (21%), Others (1%)." },
            { question: "Oxygen", answer: "Supports combustion and respiration." },
            { question: "Nitrogen", answer: "Controls combustion, essential for plants." },
            { question: "Carbon Dioxide", answer: "Used in photosynthesis, greenhouse gas." },
            { question: "Inert Gases", answer: "Unreactive gases like Argon, Helium, Neon." },
            { question: "Water Vapor", answer: "Gaseous form of water in air, causes humidity." },
            { question: "Pollution", answer: "Contamination of air with harmful substances." },
            { question: "Rusting", answer: "Slow oxidation of iron in presence of moisture and air." },
            { question: "Photosynthesis", answer: "Process by which plants use CO2 to make food." }
        ],
        "Chapter 7: Water": [
            { question: "Universal Solvent", answer: "Water dissolves many substances." },
            { question: "Water Cycle", answer: "Continuous movement of water on, above, and below Earth." },
            { question: "Potable Water", answer: "Water fit for drinking." },
            { question: "Boiling Point", answer: "100°C." },
            { question: "Freezing Point", answer: "0°C." },
            { question: "Solute", answer: "Substance that dissolves." },
            { question: "Solvent", answer: "Liquid in which solute dissolves." },
            { question: "Solution", answer: "Homogeneous mixture of solute and solvent." },
            { question: "Saturated Solution", answer: "Solution in which no more solute can be dissolved." },
            { question: "Conservation", answer: "Saving water (Rainwater harvesting)." }
        ]
    },
    "BIOLOGY": {
        "Chapter 3: Cell: The structure and functions": [
            { question: "Cell", answer: "Structural and functional unit of life." },
            { question: "Cell Membrane", answer: "Outer covering, controls entry/exit of substances." },
            { question: "Cell Wall", answer: "Rigid outer layer in plant cells (Cellulose)." },
            { question: "Nucleus", answer: "Control center of the cell, contains DNA." },
            { question: "Cytoplasm", answer: "Jelly-like substance where organelles are found." },
            { question: "Mitochondria", answer: "Powerhouse of the cell (Energy production)." },
            { question: "Chloroplast", answer: "Contains chlorophyll, site of photosynthesis (Plants)." },
            { question: "Vacuole", answer: "Storage sac for water and nutrients." },
            { question: "Unicellular", answer: "Organism made of single cell (Amoeba)." },
            { question: "Multicellular", answer: "Organism made of many cells (Humans)." }
        ],
        "Chapter 4: Human Body: Digestive System": [
            { question: "Digestion", answer: "Breakdown of complex food into simple soluble forms." },
            { question: "Ingestion", answer: "Taking in food." },
            { question: "Saliva", answer: "Digestive juice in mouth, contains Amylase." },
            { question: "Oesophagus", answer: "Food pipe connecting mouth to stomach." },
            { question: "Stomach", answer: "Muscular bag, secretes HCl and digestive juices." },
            { question: "Small Intestine", answer: "Site of complete digestion and absorption." },
            { question: "Large Intestine", answer: "Absorbs water from undigested food." },
            { question: "Liver", answer: "Largest gland, secretes Bile." },
            { question: "Pancreas", answer: "Secretes pancreatic juice." },
            { question: "Villi", answer: "Finger-like projections increasing absorption area." }
        ],
        "Chapter 5: Human Body: Respiratory System": [
            { question: "Respiration", answer: "Process of releasing energy from food." },
            { question: "Breathing", answer: "Physical process of inhaling and exhaling." },
            { question: "Aerobic Respiration", answer: "Respiration using Oxygen." },
            { question: "Anaerobic Respiration", answer: "Respiration without Oxygen." },
            { question: "Trachea", answer: "Windpipe." },
            { question: "Alveoli", answer: "Air sacs in lungs for gas exchange." },
            { question: "Diaphragm", answer: "Muscular sheet below lungs helping in breathing." },
            { question: "Inhalation", answer: "Taking in air (Oxygen rich)." },
            { question: "Exhalation", answer: "Giving out air (CO2 rich)." },
            { question: "Larynx", answer: "Voice box." }
        ],
        "Chapter 6: Human Body: Circulatory System": [
            { question: "Circulatory System", answer: "Transport system of the body." },
            { question: "Heart", answer: "Pumping organ." },
            { question: "Arteries", answer: "Carry oxygenated blood away from heart." },
            { question: "Veins", answer: "Carry deoxygenated blood towards heart." },
            { question: "Capillaries", answer: "Tiny vessels connecting arteries and veins." },
            { question: "RBC", answer: "Red Blood Cells, carry Oxygen (Haemoglobin)." },
            { question: "WBC", answer: "White Blood Cells, fight infection." },
            { question: "Platelets", answer: "Help in blood clotting." },
            { question: "Plasma", answer: "Liquid part of blood." },
            { question: "Pulse", answer: "Rhythmic throbbing of arteries." }
        ],
        "Chapter 7: Disease and Hygiene": [
            { question: "Health", answer: "State of physical, mental, and social well-being." },
            { question: "Disease", answer: "Disturbance in normal functioning of body." },
            { question: "Communicable Disease", answer: "Spreads from person to person (e.g., Flu)." },
            { question: "Non-Communicable Disease", answer: "Does not spread (e.g., Diabetes)." },
            { question: "Deficiency Disease", answer: "Caused by lack of nutrients (e.g., Scurvy)." },
            { question: "Pathogen", answer: "Disease-causing microorganism." },
            { question: "Vector", answer: "Carrier of disease (e.g., Mosquito)." },
            { question: "Vaccination", answer: "Introduction of weakened germs to build immunity." },
            { question: "Hygiene", answer: "Practices to maintain health and cleanliness." },
            { question: "Balanced Diet", answer: "Diet containing all nutrients in right proportions." }
        ],
        "Chapter 8: Habitat and Adaptation": [
            { question: "Habitat", answer: "Natural home of an organism." },
            { question: "Adaptation", answer: "Features helping an organism survive in its habitat." },
            { question: "Terrestrial", answer: "Land habitat (Forest, Desert)." },
            { question: "Aquatic", answer: "Water habitat (Pond, Ocean)." },
            { question: "Xerophytes", answer: "Plants adapted to deserts (Cactus)." },
            { question: "Hydrophytes", answer: "Plants adapted to water (Lotus)." },
            { question: "Camouflage", answer: "Blending with surroundings to hide." },
            { question: "Hibernation", answer: "Winter sleep to survive cold." },
            { question: "Migration", answer: "Seasonal movement of animals." },
            { question: "Biotic Components", answer: "Living things in an ecosystem." }
        ]
    },
    "COMPUTER": {
        "Chapter 2: File Management: Organisation of Data": [
            { question: "File", answer: "Collection of related data stored together." },
            { question: "Folder", answer: "Container to store files and sub-folders." },
            { question: "Extension", answer: "Suffix indicating file type (e.g., .docx, .jpg)." },
            { question: "Copying", answer: "Creating a duplicate of a file." },
            { question: "Moving", answer: "Shifting a file from one location to another." },
            { question: "Wildcards", answer: "Symbols (*, ?) used to search files." },
            { question: "Recycle Bin", answer: "Temporary storage for deleted files." },
            { question: "Shortcut", answer: "Link to a file or program." },
            { question: "Rename", answer: "Changing the name of a file." },
            { question: "Backup", answer: "Copy of data to prevent loss." }
        ],
        "Chapter 5: Presentation: Visual Effects": [
            { question: "Presentation", answer: "Display of information using slides." },
            { question: "Slide", answer: "Single page of a presentation." },
            { question: "Transition", answer: "Effect when moving from one slide to next." },
            { question: "Animation", answer: "Effect applied to objects on a slide." },
            { question: "Slide Show", answer: "Full-screen display of slides." },
            { question: "Slide Master", answer: "Template controlling look of all slides." },
            { question: "Placeholder", answer: "Box to hold text or content." },
            { question: "Theme", answer: "Predefined set of colors, fonts, effects." },
            { question: "Speaker Notes", answer: "Notes for the presenter, not seen by audience." },
            { question: "Hyperlink", answer: "Link to another slide, file, or web page." }
        ],
        "Chapter 7: HTML: An Introduction": [
            { question: "HTML", answer: "Hyper Text Markup Language." },
            { question: "Tag", answer: "Command in HTML enclosed in <>." },
            { question: "Element", answer: "Start tag + Content + End tag." },
            { question: "Attribute", answer: "Provides additional info about a tag." },
            { question: "Structure", answer: "<html> <head> <body>." },
            { question: "Container Tag", answer: "Has both opening and closing tags." },
            { question: "Empty Tag", answer: "Has only opening tag (e.g., <br>)." },
            { question: "Heading Tags", answer: "<h1> to <h6> (Largest to Smallest)." },
            { question: "List Tags", answer: "<ul> (Unordered), <ol> (Ordered)." },
            { question: "Hyperlink Tag", answer: "<a> tag used to link pages." }
        ]
    },
    "ENGLISH LITERATURE": {
        "Classic Short Story: The Lottery Ticket": [
            { question: "Author", answer: "Anton Chekhov." },
            { question: "Protagonists", answer: "Ivan Dmitritch and Masha." },
            { question: "Theme", answer: "Greed and the corrupting power of money." },
            { question: "Plot", answer: "Couple thinks they won lottery, dream of luxury, start hating each other." },
            { question: "Climax", answer: "Checking the number and realizing they didn't win." },
            { question: "Irony", answer: "Money destroyed their happiness without even possessing it." },
            { question: "Ivan's Character", answer: "Content initially, becomes selfish and resentful." },
            { question: "Masha's Character", answer: "Seen as stingy and hateful by Ivan in his fantasy." },
            { question: "Setting", answer: "Russia, middle-class household." },
            { question: "Moral", answer: "Be content with what you have." }
        ],
        "Prose: The Remarkable Rocket-Oscar Wilde": [
            { question: "Author", answer: "Oscar Wilde." },
            { question: "Protagonist", answer: "The Rocket." },
            { question: "Theme", answer: "Vanity, arrogance, and self-delusion." },
            { question: "Plot", answer: "Arrogant firework thinks he is the best, fails to ignite, ends up in mud." },
            { question: "Character: Rocket", answer: "Pompous, sensitive, believes world revolves around him." },
            { question: "Setting", answer: "King's son's wedding." },
            { question: "Irony", answer: "Rocket thinks he creates a sensation, but no one notices him." },
            { question: "Other Characters", answer: "Frog, Duck, Dragonfly (Realists)." },
            { question: "Ending", answer: "Rocket explodes unnoticed in the day." },
            { question: "Moral", answer: "Pride comes before a fall." }
        ]
    },
    "HISTORY AND CIVICS": {
        "The Mauryan Empire and Administration": [
            { question: "Chandragupta Maurya", answer: "Founder of Mauryan Empire." },
            { question: "Chanakya (Kautilya)", answer: "Advisor, wrote Arthashastra." },
            { question: "Ashoka", answer: "Greatest Mauryan ruler, embraced Buddhism." },
            { question: "Kalinga War", answer: "Turning point in Ashoka's life (261 BC)." },
            { question: "Dhamma", answer: "Ashoka's moral code of conduct." },
            { question: "Edicts", answer: "Royal commands inscribed on rocks/pillars." },
            { question: "Administration", answer: "Centralized, divided into provinces." },
            { question: "Indica", answer: "Book by Megasthenes describing Mauryan India." },
            { question: "Sanchi Stupa", answer: "Famous Buddhist monument built by Ashoka." },
            { question: "Decline", answer: "Weak successors after Ashoka." }
        ],
        "The Gupta Empire": [
            { question: "Golden Age", answer: "Gupta period known for art, science, literature." },
            { question: "Chandragupta I", answer: "First great Gupta ruler." },
            { question: "Samudragupta", answer: "Called 'Napoleon of India' for conquests." },
            { question: "Chandragupta II", answer: "Took title 'Vikramaditya', Fa-Hien visited." },
            { question: "Kalidasa", answer: "Great poet/dramatist (Shakuntalam)." },
            { question: "Aryabhatta", answer: "Mathematician/Astronomer (Zero, Earth's rotation)." },
            { question: "Ajanta Caves", answer: "Famous for Gupta period paintings." },
            { question: "Iron Pillar", answer: "Rust-free pillar at Mehrauli." },
            { question: "Nalanda", answer: "Famous university flourished." },
            { question: "Huns", answer: "Invaders who caused Gupta decline." }
        ]
    },
    "GEOGRAPHY": {
        "Chapter 4: Agriculture": [
            { question: "Agriculture", answer: "Cultivation of land and rearing of animals." },
            { question: "Subsistence Farming", answer: "Farming for family consumption." },
            { question: "Commercial Farming", answer: "Farming for sale/profit." },
            { question: "Kharif Crops", answer: "Sown in monsoon (Rice, Maize)." },
            { question: "Rabi Crops", answer: "Sown in winter (Wheat, Mustard)." },
            { question: "Green Revolution", answer: "Increase in crop production using modern methods." },
            { question: "Cash Crops", answer: "Grown for raw material/sale (Cotton, Jute)." },
            { question: "Food Crops", answer: "Grown for food (Rice, Wheat)." },
            { question: "Plantation", answer: "Single crop grown on large scale (Tea, Coffee)." },
            { question: "Organic Farming", answer: "Farming without chemicals." }
        ],
        "Map of South America": [
            { question: "Amazon River", answer: "Largest river by volume." },
            { question: "Andes", answer: "Longest mountain range." },
            { question: "Atacama", answer: "Driest desert." },
            { question: "Brazil", answer: "Largest country in South America." },
            { question: "Amazon Rainforest", answer: "Largest tropical rainforest (Lungs of Earth)." },
            { question: "Angel Falls", answer: "Highest waterfall (Venezuela)." },
            { question: "Lake Titicaca", answer: "Highest navigable lake." },
            { question: "Pampas", answer: "Grasslands of Argentina." },
            { question: "Isthmus of Panama", answer: "Connects South and North America." },
            { question: "Cape Horn", answer: "Southernmost tip." }
        ]
    }
};

async function seedFlashcards() {
    console.log('Initializing database...');
    const db = await initDatabase();

    for (const [subjectName, chapters] of Object.entries(syllabusData)) {
        console.log(`Processing subject: ${subjectName}`);
        
        // Find Subject ID
        let subjectRow = await db.get('SELECT id FROM subjects WHERE name = ?', subjectName);
        if (!subjectRow) {
             subjectRow = await db.get('SELECT id FROM subjects WHERE name LIKE ?', subjectName);
        }
        
        if (!subjectRow) {
            console.log(`Subject ${subjectName} not found in DB. Skipping.`);
            continue;
        }

        for (const [chapterName, cards] of Object.entries(chapters)) {
            // Find Chapter ID
            let chapterRow = await db.get('SELECT id FROM chapters WHERE subject_id = ? AND name = ?', subjectRow.id, chapterName);
            
            if (!chapterRow) {
                chapterRow = await db.get('SELECT id FROM chapters WHERE subject_id = ? AND name LIKE ?', subjectRow.id, `%${chapterName}%`);
            }

            if (!chapterRow) {
                console.log(`  Chapter '${chapterName}' not found for ${subjectName}. Skipping.`);
                continue;
            }

            console.log(`  Seeding flashcards for chapter: ${chapterName}`);

            // Clear existing flashcards for this chapter
            await db.run('DELETE FROM flashcards WHERE chapter_id = ?', chapterRow.id);
            
            for (const card of cards) {
                await db.run(
                    'INSERT INTO flashcards (chapter_id, front, back) VALUES (?, ?, ?)',
                    chapterRow.id,
                    card.question,
                    card.answer
                );
            }
        }
    }
    
    console.log('Flashcard seeding complete.');
}

seedFlashcards().catch(console.error);
