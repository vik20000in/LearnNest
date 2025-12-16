import { initDatabase } from '../db/database';

// Helper to create a standard question paper structure
const createPaper = (subject: string, chapter: string, questions: any[]) => {
    // Distribute questions more evenly if we have many
    const totalQuestions = questions.length;
    let sectionACount = 3;
    let sectionBCount = 3;
    
    if (totalQuestions >= 15) {
        sectionACount = 5;
        sectionBCount = 5;
    } else if (totalQuestions >= 10) {
        sectionACount = 4;
        sectionBCount = 4;
    }

    return {
        title: `Practice Paper - ${chapter}`,
        school: "LearnNest School",
        class: "Class 6",
        subject: subject,
        sections: [
            {
                name: "Section A: Multiple Choice",
                questions: questions.slice(0, sectionACount).map((q, i) => ({ ...q, id: i + 1, marks: 1 }))
            },
            {
                name: "Section B: Short Answer",
                questions: questions.slice(sectionACount, sectionACount + sectionBCount).map((q, i) => ({ ...q, id: i + sectionACount + 1, marks: 2 }))
            },
            {
                name: "Section C: Long Answer",
                questions: questions.slice(sectionACount + sectionBCount).map((q, i) => ({ ...q, id: i + sectionACount + sectionBCount + 1, marks: 4 }))
            }
        ]
    };
};

const syllabusData: Record<string, Record<string, any[]>> = {
    "Maths": {
        "CHAPTER 5 : DECIMAL FRACTIONS": [
            { question: "Convert 0.75 to a fraction.", options: ["3/4", "1/2", "2/3", "4/5"], answer: "3/4" },
            { question: "What is 2.5 + 3.1?", options: ["5.6", "5.5", "6.5", "5.1"], answer: "5.6" },
            { question: "Value of 0.1 x 0.1 is:", options: ["0.01", "0.1", "1.0", "0.001"], answer: "0.01" },
            { question: "Write 4/5 as a decimal.", answer: "0.8" },
            { question: "Subtract 1.2 from 5.", answer: "3.8" },
            { question: "Multiply 2.4 by 100.", answer: "240" },
            { question: "Divide 15.6 by 3 and show the steps.", answer: "15.6 / 3 = 5.2" },
            { question: "A rope is 10.5m long. If 2.3m is cut off, how much is left?", answer: "10.5m - 2.3m = 8.2m" },
            { question: "Convert 0.005 to a fraction in simplest form.", answer: "0.005 = 5/1000 = 1/200" },
            { question: "Add: 12.5 + 3.05 + 0.007", answer: "12.500 + 3.050 + 0.007 = 15.557" },
            { question: "Subtract 45.67 from 100.", answer: "100.00 - 45.67 = 54.33" },
            { question: "Multiply 1.2 x 1.2", answer: "1.2 x 1.2 = 1.44" },
            { question: "Divide 0.64 by 0.8", answer: "0.64 / 0.8 = 6.4 / 8 = 0.8" },
            { question: "Convert 3/8 to decimal.", answer: "3 divided by 8 is 0.375" },
            { question: "Arrange in ascending order: 0.5, 0.05, 0.55, 0.505", answer: "0.05 < 0.5 < 0.505 < 0.55" }
        ],
        "CHAPTER 7 : SETS": [
            { question: "Which is a finite set?", options: ["Set of natural numbers", "Set of days in a week", "Set of stars", "Set of odd numbers"], answer: "Set of days in a week" },
            { question: "Symbol for intersection is:", options: ["U", "∩", "∈", "⊂"], answer: "∩" },
            { question: "If A = {1, 2}, number of subsets is:", options: ["2", "4", "3", "1"], answer: "4" },
            { question: "Define a singleton set.", answer: "A singleton set is a set that contains exactly one element. For example, {0} is a singleton set." },
            { question: "Write the set of vowels in 'MATHEMATICS' in roster form.", answer: "The vowels in MATHEMATICS are A, E, I. In roster form: {A, E, I}" },
            { question: "If A = {1, 2, 3} and B = {3, 4}, find A U B.", answer: "A U B contains all elements in A or B. A U B = {1, 2, 3, 4}" },
            { question: "Explain the difference between finite and infinite sets with examples.", answer: "A finite set has a countable number of elements (e.g., Set of days in a week). An infinite set has an uncountable number of elements (e.g., Set of all natural numbers)." },
            { question: "Draw a Venn diagram to represent A intersection B.", answer: "Draw two overlapping circles. The common area represents A ∩ B." },
            { question: "If A = {1, 2, 3, 4} and B = {2, 4, 6}, find A - B.", answer: "A - B means elements in A but not in B. Removing 2 and 4 from A, we get {1, 3}." },
            { question: "Write all subsets of {a, b}.", answer: "The subsets are: {}, {a}, {b}, {a, b}. Total 4 subsets." },
            { question: "Define Cardinal number of a set.", answer: "The cardinal number of a set is the number of distinct elements present in that set. It is denoted by n(A)." },
            { question: "If n(A) = 5 and n(B) = 3 and n(A ∩ B) = 2, find n(A U B).", answer: "Using the formula n(A U B) = n(A) + n(B) - n(A ∩ B), we get 5 + 3 - 2 = 6." },
            { question: "Is the set of prime numbers finite or infinite?", answer: "The set of prime numbers is infinite because there is no largest prime number." },
            { question: "Write {x : x is a natural number < 5} in roster form.", answer: "Natural numbers less than 5 are 1, 2, 3, 4. So, {1, 2, 3, 4}." },
            { question: "What is a Universal Set?", answer: "A Universal Set is a set that contains all the elements under consideration for a particular problem or discussion, usually denoted by U." }
        ],
        "CHAPTER 8: RATIO AND PROPORTION": [
            { question: "Ratio of 50p to ₹1 is:", options: ["1:2", "2:1", "1:1", "1:5"], answer: "1:2" },
            { question: "If a:b = 2:3 and b:c = 3:4, then a:c is:", options: ["2:4", "1:2", "2:3", "3:4"], answer: "1:2" },
            { question: "Fourth proportional to 2, 4, 6 is:", options: ["8", "10", "12", "14"], answer: "12" },
            { question: "Simplify ratio 15:25.", answer: "Divide both by 5: 15/5 : 25/5 = 3:5" },
            { question: "Are 2, 4, 6, 12 in proportion?", answer: "Product of extremes = 2*12 = 24. Product of means = 4*6 = 24. Yes, they are in proportion." },
            { question: "Divide ₹100 in ratio 2:3.", answer: "Total parts = 2+3=5. First part = (2/5)*100 = ₹40. Second part = (3/5)*100 = ₹60." },
            { question: "If 5 pens cost ₹25, what is the cost of 8 pens?", answer: "Cost of 1 pen = 25/5 = ₹5. Cost of 8 pens = 8 * 5 = ₹40." },
            { question: "A map scale is 1:100000. If distance on map is 5cm, find actual distance in km.", answer: "Actual distance = 5 * 100000 cm = 500000 cm = 5000 m = 5 km." },
            { question: "Find the mean proportional between 4 and 16.", answer: "Mean proportional = sqrt(4 * 16) = sqrt(64) = 8." },
            { question: "If x:y = 3:4, find (2x+y):(3x-y).", answer: "Let x=3k, y=4k. (2(3k)+4k) : (3(3k)-4k) = (6k+4k) : (9k-4k) = 10k : 5k = 2:1." },
            { question: "A car covers 150km in 3 hours. How far will it go in 5 hours?", answer: "Speed = 150/3 = 50 km/h. Distance in 5 hours = 50 * 5 = 250 km." },
            { question: "Divide 720 in the ratio 1:2:3.", answer: "Total parts = 6. 1st: (1/6)*720=120. 2nd: (2/6)*720=240. 3rd: (3/6)*720=360." },
            { question: "If 12 men can do a work in 10 days, how many days will 8 men take?", answer: "Inverse variation. 12 * 10 = 8 * x. 120 = 8x. x = 15 days." },
            { question: "Find x if 3:x :: 12:20.", answer: "Product of means = Product of extremes. 12x = 3 * 20. 12x = 60. x = 5." },
            { question: "Compare ratios 2:3 and 4:5.", answer: "LCM of 3 and 5 is 15. 2/3 = 10/15. 4/5 = 12/15. Since 12 > 10, 4:5 is greater than 2:3." }
        ],
        "CHAPTER 10: PERCENTAGE": [
            { question: "50% of 200 is:", options: ["50", "100", "150", "200"], answer: "100" },
            { question: "1/4 as percentage is:", options: ["20%", "25%", "30%", "40%"], answer: "25%" },
            { question: "0.6 as percentage is:", options: ["6%", "60%", "0.6%", "600%"], answer: "60%" },
            { question: "Convert 75% to fraction.", answer: "75/100 = 3/4" },
            { question: "What percent of 50 is 10?", answer: "(10/50) * 100 = 20%" },
            { question: "Increase 80 by 10%.", answer: "10% of 80 is 8. 80 + 8 = 88." },
            { question: "In a class of 50, 40% are girls. How many boys are there?", answer: "Girls = 40% of 50 = 20. Boys = 50 - 20 = 30." },
            { question: "A price increased from ₹100 to ₹120. Find percentage increase.", answer: "Increase = 20. % Increase = (20/100) * 100 = 20%." },
            { question: "Convert 33 1/3% to fraction.", answer: "33 1/3 = 100/3 %. (100/3)/100 = 1/3." },
            { question: "Find 12.5% of 800.", answer: "12.5% = 1/8. 1/8 of 800 = 100." },
            { question: "If 20% of a number is 50, find the number.", answer: "0.2x = 50. x = 50/0.2 = 250." },
            { question: "A man saves 15% of his income. If he saves ₹1500, find his income.", answer: "15% of Income = 1500. Income = (1500 * 100) / 15 = ₹10000." },
            { question: "Decrease 500 by 20%.", answer: "20% of 500 is 100. 500 - 100 = 400." },
            { question: "Express 50 paise as a percentage of ₹5.", answer: "₹5 = 500 paise. (50/500) * 100 = 10%." },
            { question: "In an exam, 90% candidates passed and 20 failed. How many appeared?", answer: "If 90% passed, 10% failed. 10% of Total = 20. Total = 200." }
        ],
        "CHAPTER 11 : SPEED ,TIME AND DISTANCE": [
            { question: "Formula for Speed is:", options: ["D x T", "D / T", "T / D", "D + T"], answer: "D / T" },
            { question: "Convert 36 km/h to m/s.", options: ["10 m/s", "20 m/s", "15 m/s", "12 m/s"], answer: "10 m/s" },
            { question: "Time taken to cover 100km at 50km/h is:", options: ["1h", "2h", "3h", "4h"], answer: "2h" },
            { question: "A car travels 60km in 1.5 hours. Find speed.", answer: "Speed = Distance/Time = 60/1.5 = 40 km/h." },
            { question: "Convert 20 m/s to km/h.", answer: "20 * (18/5) = 4 * 18 = 72 km/h." },
            { question: "Distance = Speed x ____?", answer: "Time" },
            { question: "A train 100m long crosses a pole in 10s. Find its speed.", answer: "Speed = 100m / 10s = 10 m/s." },
            { question: "A man walks at 5km/h for 2 hours and runs at 10km/h for 1 hour. Find average speed.", answer: "Dist1 = 10km, Dist2 = 10km. Total Dist = 20km. Total Time = 3h. Avg Speed = 20/3 = 6.67 km/h." },
            { question: "Convert 90 km/h to m/s.", answer: "90 * (5/18) = 5 * 5 = 25 m/s." },
            { question: "A train covers 450km in 5 hours. Find its speed.", answer: "Speed = 450 / 5 = 90 km/h." },
            { question: "How long will it take to cover 200m at 10m/s?", answer: "Time = Distance / Speed = 200 / 10 = 20 seconds." },
            { question: "A cyclist covers 12km in 40 mins. Find speed in km/h.", answer: "40 mins = 40/60 hours = 2/3 hours. Speed = 12 / (2/3) = 12 * 3/2 = 18 km/h." },
            { question: "Speed of sound is 330 m/s. How far is a thundercloud if thunder is heard after 5s?", answer: "Distance = Speed * Time = 330 * 5 = 1650 meters." },
            { question: "A train 150m long crosses a bridge 250m long in 20s. Find speed.", answer: "Total Distance = 150 + 250 = 400m. Speed = 400/20 = 20 m/s (or 72 km/h)." },
            { question: "Compare speeds: 10 m/s and 30 km/h.", answer: "Convert 10 m/s to km/h: 10 * 18/5 = 36 km/h. Since 36 > 30, 10 m/s is faster." }
        ],
        "CHAPTER 12 : FUNDAMENTAL CONCEPTS OF ALGEBRA": [
            { question: "The coefficient of x in 5xy is:", options: ["5", "5y", "y", "5x"], answer: "5y" },
            { question: "Which is a binomial?", options: ["2x", "x+y", "x+y+z", "5"], answer: "x+y" },
            { question: "Value of x+5 when x=2 is:", options: ["5", "2", "7", "10"], answer: "7" },
            { question: "Write algebraic expression for '5 more than x'.", answer: "x + 5" },
            { question: "Identify like terms: 2x, 3y, 5x, 2z.", answer: "Like terms are terms with the same variable raised to the same power. Here, 2x and 5x are like terms." },
            { question: "Simplify: 2a + 3b - a + b.", answer: "Combine like terms: (2a - a) + (3b + b) = a + 4b." },
            { question: "Subtract 3x from 5x.", answer: "5x - 3x = 2x." },
            { question: "Evaluate 2x^2 + 3y when x=2, y=3.", answer: "Substitute values: 2(2^2) + 3(3) = 2(4) + 9 = 8 + 9 = 17." },
            { question: "Write the degree of polynomial: 3x^2y + 4xy^3.", answer: "Degree is the highest sum of powers in a term. 3x^2y (2+1=3), 4xy^3 (1+3=4). Degree is 4." },
            { question: "Add: 3x + 2y and 2x - 5y.", answer: "(3x + 2x) + (2y - 5y) = 5x - 3y." },
            { question: "Subtract 2a - 3b from 5a + 2b.", answer: "(5a + 2b) - (2a - 3b) = 5a - 2a + 2b + 3b = 3a + 5b." },
            { question: "Multiply: 2x * 3y.", answer: "Multiply coefficients and variables: 2*3 * x*y = 6xy." },
            { question: "Simplify: 2(x + y) - 3(x - y).", answer: "2x + 2y - 3x + 3y = (2x - 3x) + (2y + 3y) = -x + 5y." },
            { question: "Write expression for: 'Product of x and y added to their sum'.", answer: "Product = xy. Sum = x+y. Expression: xy + (x + y)." },
            { question: "If a=1, b=-1, find value of a^2 + b^2.", answer: "(1)^2 + (-1)^2 = 1 + 1 = 2." }
        ],
        "CHAPTER 13 : SIMPLE EQUATIONS": [
            { question: "Solution of x + 3 = 5 is:", options: ["2", "3", "5", "8"], answer: "2" },
            { question: "If 2x = 10, x is:", options: ["2", "5", "10", "20"], answer: "5" },
            { question: "Equation for 'twice a number is 8' is:", options: ["x+2=8", "2x=8", "x/2=8", "x-2=8"], answer: "2x=8" },
            { question: "Solve: y - 5 = 7.", answer: "y = 7 + 5 = 12." },
            { question: "Solve: 3x + 2 = 11.", answer: "3x = 11 - 2 = 9. x = 9/3 = 3." },
            { question: "Check if x=2 is solution for 2x+1=5.", answer: "LHS = 2(2) + 1 = 4 + 1 = 5. RHS = 5. Yes, it is a solution." },
            { question: "Sum of two numbers is 15. One is x. Write equation if other is 5.", answer: "x + 5 = 15." },
            { question: "Solve: 2(x + 3) = 14.", answer: "x + 3 = 14/2 = 7. x = 7 - 3 = 4." },
            { question: "Solve: x/3 = 5.", answer: "x = 5 * 3 = 15." },
            { question: "Solve: 5x - 3 = 3x + 7.", answer: "5x - 3x = 7 + 3. 2x = 10. x = 5." },
            { question: "A number increased by 7 gives 15. Find the number.", answer: "Let number be x. x + 7 = 15. x = 8." },
            { question: "Thrice a number is 24. Find the number.", answer: "3x = 24. x = 8." },
            { question: "Solve: 3(x - 1) = 12.", answer: "x - 1 = 4. x = 5." },
            { question: "The sum of three consecutive integers is 33. Find them.", answer: "x + (x+1) + (x+2) = 33. 3x + 3 = 33. 3x = 30. x = 10. Numbers are 10, 11, 12." },
            { question: "Solve: 2x/5 = 4.", answer: "2x = 20. x = 10." }
        ],
        "CHAPTER 17 : QUADRILATERALS": [
            { question: "Sum of angles in a quadrilateral is:", options: ["180", "360", "90", "270"], answer: "360" },
            { question: "A quadrilateral with opposite sides parallel is:", options: ["Trapezium", "Parallelogram", "Kite", "Triangle"], answer: "Parallelogram" },
            { question: "A square has angles equal to:", options: ["45", "60", "90", "100"], answer: "90" },
            { question: "Define a Trapezium.", answer: "A trapezium is a quadrilateral with exactly one pair of parallel sides." },
            { question: "Properties of a Rectangle.", answer: "1. Opposite sides are equal and parallel. 2. All angles are 90 degrees. 3. Diagonals are equal and bisect each other." },
            { question: "Find the fourth angle if three are 50, 100, 120.", answer: "Sum = 360. Fourth angle = 360 - (50 + 100 + 120) = 360 - 270 = 90 degrees." },
            { question: "Difference between Square and Rhombus.", answer: "A square has all angles 90 degrees, while a rhombus does not necessarily have 90 degree angles. Diagonals of a square are equal, while diagonals of a rhombus are unequal." },
            { question: "Draw a kite and label its parts.", answer: "A kite has two pairs of equal adjacent sides. The longer diagonal is the perpendicular bisector of the shorter diagonal." },
            { question: "Is every square a rectangle?", answer: "Yes, because a square has all the properties of a rectangle (opposite sides equal, all angles 90)." },
            { question: "Is every rectangle a square?", answer: "No, because a rectangle does not necessarily have all sides equal." },
            { question: "Diagonals of a rhombus bisect each other at ___.", answer: "Right angles (90 degrees)." },
            { question: "Name a quadrilateral with only one pair of parallel sides.", answer: "Trapezium." },
            { question: "If adjacent angles of a parallelogram are equal, it is a ___.", answer: "Rectangle." },
            { question: "Find angles of a parallelogram if one angle is 60.", answer: "Opposite angles are equal (60). Adjacent angles are supplementary (180-60=120). Angles: 60, 120, 60, 120." },
            { question: "Construct a square of side 5cm.", answer: "Steps: 1. Draw AB=5cm. 2. At A and B draw 90 deg angles. 3. Cut AD=5cm and BC=5cm. 4. Join CD." }
        ],
        "CHAPTER 19 : POLYGONS": [
            { question: "A polygon with 5 sides is:", options: ["Hexagon", "Pentagon", "Octagon", "Heptagon"], answer: "Pentagon" },
            { question: "Minimum sides for a polygon:", options: ["2", "3", "4", "5"], answer: "3" },
            { question: "Sum of exterior angles of any polygon:", options: ["180", "360", "540", "720"], answer: "360" },
            { question: "Define Regular Polygon.", answer: "A regular polygon is a polygon that is both equilateral (all sides equal) and equiangular (all angles equal)." },
            { question: "Number of diagonals in a triangle.", answer: "A triangle has 0 diagonals." },
            { question: "Name a polygon with 8 sides.", answer: "Octagon." },
            { question: "Formula for sum of interior angles.", answer: "Sum = (n - 2) * 180 degrees, where n is the number of sides." },
            { question: "Find sum of interior angles of a hexagon.", answer: "n=6. Sum = (6-2)*180 = 4*180 = 720 degrees." },
            { question: "Each interior angle of a regular pentagon is:", answer: "Sum = (5-2)*180 = 540. Each angle = 540/5 = 108 degrees." },
            { question: "Number of diagonals in a pentagon.", answer: "Formula: n(n-3)/2. For pentagon: 5(2)/2 = 5." },
            { question: "Can a polygon have sum of interior angles as 450?", answer: "No, because sum must be a multiple of 180. 450 is not divisible by 180." },
            { question: "Name a polygon with 10 sides.", answer: "Decagon." },
            { question: "If exterior angle is 60, find number of sides.", answer: "n = 360 / Exterior Angle = 360 / 60 = 6 sides (Hexagon)." },
            { question: "Draw a concave polygon.", answer: "A concave polygon has at least one interior angle greater than 180 degrees (reflex angle)." },
            { question: "Difference between convex and concave polygon.", answer: "In a convex polygon, all interior angles are less than 180 degrees. In a concave polygon, at least one interior angle is greater than 180 degrees." }
        ],
        "CHAPTER 20: RECOGNITION OF 3D SHAPES (SOLIDS)": [
            { question: "A cube has how many faces?", options: ["4", "6", "8", "12"], answer: "6" },
            { question: "Shape of a cricket ball is:", options: ["Circle", "Sphere", "Cone", "Cylinder"], answer: "Sphere" },
            { question: "A cylinder has how many curved surfaces?", options: ["1", "2", "3", "0"], answer: "1" },
            { question: "Number of edges in a cuboid.", answer: "A cuboid has 12 edges." },
            { question: "Example of a cone.", answer: "Ice cream cone, Birthday cap, Traffic cone." },
            { question: "Euler's formula for polyhedrons.", answer: "F + V - E = 2, where F=Faces, V=Vertices, E=Edges." },
            { question: "Draw a net of a cube.", answer: "A net of a cube consists of 6 squares arranged in a cross shape or T-shape." },
            { question: "Difference between prism and pyramid.", answer: "A prism has two identical bases and rectangular sides. A pyramid has one base and triangular sides meeting at a common vertex." },
            { question: "Number of vertices in a tetrahedron.", answer: "A tetrahedron (triangular pyramid) has 4 vertices." },
            { question: "Shape of a soda can.", answer: "Cylinder." },
            { question: "Does a sphere have any edge?", answer: "No, a sphere has 0 edges and 0 vertices." },
            { question: "Faces of a square pyramid.", answer: "It has 5 faces: 1 square base and 4 triangular faces." },
            { question: "Verify Euler's formula for a cube.", answer: "Faces(F)=6, Vertices(V)=8, Edges(E)=12. F+V-E = 6+8-12 = 2. Verified." },
            { question: "Draw a cylinder.", answer: "A cylinder has two circular bases connected by a curved surface." },
            { question: "What is a vertex?", answer: "A vertex is a corner point where edges meet in a 3D shape." }
        ],
        "CHAPTER 22: GEOMETRICAL CONSTRUCTIONS": [
            { question: "Tool used to draw circles:", options: ["Ruler", "Compass", "Protractor", "Divider"], answer: "Compass" },
            { question: "Tool used to measure angles:", options: ["Ruler", "Compass", "Protractor", "Set Square"], answer: "Protractor" },
            { question: "Angle of a perpendicular bisector:", options: ["45", "60", "90", "180"], answer: "90" },
            { question: "Construct an angle of 60 degrees.", answer: "Draw a line. With center at end, draw an arc. With same radius, cut the arc. Join intersection to center." },
            { question: "Bisect a line segment of 6cm.", answer: "Draw AB=6cm. With radius > half AB, draw arcs from A and B on both sides. Join intersection points." },
            { question: "Construct a square of side 4cm.", answer: "Draw base 4cm. Construct 90 deg at ends. Cut 4cm on verticals. Join top." },
            { question: "Bisect an angle of 80 degrees.", answer: "Draw 80 deg. From vertex, draw arc cutting arms. From intersection points, draw arcs to intersect. Join vertex to intersection." },
            { question: "Construct an angle of 90 degrees using compass.", answer: "Construct 60 and 120. Bisect the angle between 60 and 120 to get 90." },
            { question: "Construct an angle of 120 degrees.", answer: "Draw an arc. Cut it once for 60, cut again from 60 mark for 120." },
            { question: "Draw a circle of radius 3.5cm.", answer: "Set compass width to 3.5cm. Fix needle, rotate pencil leg." },
            { question: "Construct a perpendicular to a line from a point outside it.", answer: "From point P, draw arc cutting line at A, B. From A, B draw arcs to intersect. Join P to intersection." },
            { question: "Construct an angle of 45 degrees.", answer: "Construct 90 degrees first. Then bisect the 90 degree angle." },
            { question: "Draw a line segment of 7.2cm.", answer: "Use a ruler to draw a straight line from 0 to 7.2 mark." },
            { question: "Construct an angle of 30 degrees.", answer: "Construct 60 degrees first. Then bisect the 60 degree angle." },
            { question: "Construct a rectangle with sides 5cm and 3cm.", answer: "Draw base 5cm. Construct 90 deg at ends. Cut 3cm on verticals. Join top." }
        ],
        "CHAPTER 25: GRAPHICAL REPRESENTATION OF DATA": [
            { question: "Data represented using bars is called:", options: ["Pie Chart", "Bar Graph", "Line Graph", "Pictograph"], answer: "Bar Graph" },
            { question: "X-axis is usually:", options: ["Vertical", "Horizontal", "Diagonal", "Circular"], answer: "Horizontal" },
            { question: "Tally marks are used to find:", options: ["Mean", "Frequency", "Median", "Range"], answer: "Frequency" },
            { question: "Define Data.", answer: "Data is a collection of facts, such as numbers, words, measurements, observations or just descriptions of things." },
            { question: "What is a Pictograph?", answer: "A pictograph is a way of representing statistical data using symbolic figures to match the frequencies of different kinds of data." },
            { question: "Draw a bar graph for: A-10, B-20, C-15.", answer: "Draw axes. Mark A, B, C on X-axis. Scale Y-axis (0-25). Draw bars of height 10, 20, 15." },
            { question: "Advantages of Bar Graph.", answer: "1. Easy to understand and interpret. 2. Comparison between data sets is simple. 3. Trends can be visualized easily." },
            { question: "Interpret the given bar graph.", answer: "Look at the height of bars to determine values. Compare heights to find max/min values." },
            { question: "What is raw data?", answer: "Raw data is the data collected in its original form, which has not been processed or organized." },
            { question: "Symbol used for 5 in tally marks.", answer: "Four vertical lines crossed by a diagonal line (|||| with a cross)." },
            { question: "Scale of a graph.", answer: "Scale is the ratio that determines how many units of the actual data are represented by one unit length on the graph axis." },
            { question: "Draw a pictograph for 50 apples (1 symbol = 10 apples).", answer: "Draw 5 apple symbols, where each symbol represents 10 apples." },
            { question: "Difference between bar graph and histogram.", answer: "Bar graphs have gaps between bars and represent categorical data. Histograms have no gaps and represent continuous numerical data." },
            { question: "What is frequency?", answer: "Frequency is the number of times a particular data value occurs in the dataset." },
            { question: "Organize data: 2,3,2,5,2 in a table.", answer: "Value | Tally | Frequency. 2: ||| (3), 3: | (1), 5: | (1)." }
        ],
        "CHAPTER 26 : MEAN AND MEDIAN": [
            { question: "Mean of 2, 4, 6 is:", options: ["2", "4", "6", "12"], answer: "4" },
            { question: "Median of 1, 3, 5, 7, 9 is:", options: ["3", "5", "7", "9"], answer: "5" },
            { question: "Mode is the value that occurs:", options: ["Most frequently", "Least frequently", "In the middle", "Average"], answer: "Most frequently" },
            { question: "Find mean of first 5 natural numbers.", answer: "Numbers: 1, 2, 3, 4, 5. Sum = 15. Mean = 15/5 = 3." },
            { question: "Find median of 2, 5, 1, 9, 6.", answer: "Arrange in order: 1, 2, 5, 6, 9. Middle value is 5. Median = 5." },
            { question: "Formula for Mean.", answer: "Mean = (Sum of all observations) / (Total number of observations)." },
            { question: "Find mean of 10, 20, 30, 40.", answer: "Sum = 100. Count = 4. Mean = 100/4 = 25." },
            { question: "Find median of 1, 2, 3, 4.", answer: "Middle terms are 2 and 3. Median = (2+3)/2 = 2.5." },
            { question: "Find mode of 1, 2, 2, 3, 4.", answer: "2 occurs most frequently (twice). Mode = 2." },
            { question: "Mean of 5 numbers is 10. Sum is?", answer: "Sum = Mean * Count = 10 * 5 = 50." },
            { question: "Find median of first 6 whole numbers.", answer: "0, 1, 2, 3, 4, 5. Middle terms 2, 3. Median = (2+3)/2 = 2.5." },
            { question: "If mean of x, x+2, x+4 is 10, find x.", answer: "Sum = 3x+6. Mean = (3x+6)/3 = x+2. x+2=10 => x=8." },
            { question: "Range of data: 5, 10, 2, 8.", answer: "Range = Max - Min = 10 - 2 = 8." },
            { question: "Can mean be a fraction?", answer: "Yes, the mean does not have to be one of the data points and can be a decimal/fraction." },
            { question: "Find mean of first 5 prime numbers.", answer: "Primes: 2, 3, 5, 7, 11. Sum = 28. Mean = 28/5 = 5.6." }
        ]
    },
    "PHYSICS": {
        "Chapter 1: Matter": [
            { question: "Which state of matter has fixed shape?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Solid" },
            { question: "Intermolecular space is maximum in:", options: ["Solids", "Liquids", "Gases", "None"], answer: "Gases" },
            { question: "Process of solid to liquid is:", options: ["Freezing", "Melting", "Boiling", "Condensation"], answer: "Melting" },
            { question: "Define Matter.", answer: "Matter is anything that has mass and occupies space. It is made up of tiny particles called atoms or molecules." },
            { question: "Properties of Liquids.", answer: "1. Liquids have a definite volume but no definite shape. 2. They take the shape of the container. 3. Intermolecular forces are weaker than solids but stronger than gases." },
            { question: "Difference between evaporation and boiling.", answer: "Evaporation is a surface phenomenon that occurs at any temperature below boiling point. Boiling is a bulk phenomenon that occurs at a specific temperature (boiling point) throughout the liquid." },
            { question: "Describe arrangement of molecules in solids.", answer: "In solids, molecules are tightly packed in a fixed, regular pattern. The intermolecular forces are very strong, and particles can only vibrate about their mean positions." },
            { question: "What is sublimation? Give example.", answer: "Sublimation is the process where a solid changes directly into gas without passing through the liquid state. Examples: Camphor, Naphthalene balls, Dry ice." },
            { question: "Define Intermolecular force.", answer: "Intermolecular force is the force of attraction between the molecules of a substance. It determines the state of matter (solid, liquid, or gas)." },
            { question: "Why do gases fill the container completely?", answer: "Gases have negligible intermolecular forces and very high kinetic energy. The particles move randomly at high speeds in all directions, filling the entire available space." },
            { question: "Process of gas to liquid.", answer: "The process of changing a gas into a liquid by cooling is called Condensation." },
            { question: "Differentiate between solid, liquid, gas based on compressibility.", answer: "Solids are negligible/incompressible. Liquids are slightly compressible. Gases are highly compressible due to large intermolecular spaces." },
            { question: "What is Brownian motion?", answer: "Brownian motion is the random, zig-zag movement of microscopic particles suspended in a fluid (liquid or gas), caused by collisions with the fast-moving molecules of the fluid." },
            { question: "Why does ice float on water?", answer: "Ice floats on water because it is less dense than liquid water. The cage-like structure of ice molecules creates more empty space, increasing volume and decreasing density." },
            { question: "Define Diffusion.", answer: "Diffusion is the spontaneous intermixing of particles of two different types of matter due to their random motion. It is fastest in gases." }
        ],
        "Chapter 2: Physical Quantities and Measurements.": [
            { question: "SI unit of length is:", options: ["cm", "m", "km", "mm"], answer: "m" },
            { question: "SI unit of mass is:", options: ["g", "kg", "mg", "lb"], answer: "kg" },
            { question: "1 hour = ___ seconds.", options: ["60", "360", "3600", "600"], answer: "3600" },
            { question: "Define Density.", answer: "Density is defined as the mass per unit volume of a substance. Formula: Density = Mass / Volume. SI unit is kg/m^3." },
            { question: "Instrument to measure temperature.", answer: "A thermometer is used to measure temperature." },
            { question: "Convert 5kg to grams.", answer: "1 kg = 1000 g. So, 5 kg = 5 * 1000 = 5000 g." },
            { question: "How to measure volume of irregular solid?", answer: "Using the displacement method: Immerse the solid in a measuring cylinder with water. The rise in water level equals the volume of the solid." },
            { question: "Define Least Count.", answer: "Least count is the smallest measurement that can be taken accurately with a measuring instrument. For a standard ruler, it is usually 1 mm." },
            { question: "SI unit of Time.", answer: "The SI unit of time is the Second (s)." },
            { question: "What is a Beam Balance used for?", answer: "A beam balance is used to measure the mass of an object by comparing it with standard masses." },
            { question: "Convert 1 m^3 to litres.", answer: "1 cubic meter (m^3) is equal to 1000 litres." },
            { question: "Formula for Area of a rectangle.", answer: "Area = Length x Breadth." },
            { question: "Define 1 kilogram.", answer: "1 kilogram is defined as the mass of a specific platinum-iridium cylinder kept at the International Bureau of Weights and Measures in France." },
            { question: "How to avoid parallax error?", answer: "To avoid parallax error, the eye must be placed vertically above the mark being read, so the line of sight is perpendicular to the scale." },
            { question: "Relation between Celsius and Fahrenheit.", answer: "The relationship is given by the formula: C/5 = (F - 32)/9." }
        ],
        "Chapter 3: Force": [
            { question: "SI unit of Force is:", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
            { question: "Force can change:", options: ["Speed", "Direction", "Shape", "All of these"], answer: "All of these" },
            { question: "Friction is a ___ force.", options: ["Contact", "Non-contact", "Magnetic", "Electrostatic"], answer: "Contact" },
            { question: "Define Force.", answer: "Force is a push or a pull acting on an object which changes or tends to change the state of rest or motion of the object." },
            { question: "Types of Non-contact forces.", answer: "1. Gravitational Force (attraction by earth). 2. Magnetic Force (magnetism). 3. Electrostatic Force (electric charges)." },
            { question: "Advantages of Friction.", answer: "Friction allows us to walk without slipping, write on paper, hold objects, and apply brakes to stop vehicles." },
            { question: "Disadvantages of Friction.", answer: "Friction causes wear and tear of machine parts, produces unwanted heat, and reduces the efficiency of machines." },
            { question: "What is Gravitational Force?", answer: "Gravitational force is the force of attraction that exists between any two masses in the universe. Earth's gravity pulls everything towards its center." },
            { question: "Define Muscular Force.", answer: "Muscular force is the force exerted by the muscles of the body, used for lifting, walking, running, etc." },
            { question: "How to reduce friction?", answer: "Friction can be reduced by using lubricants (oil/grease), using ball bearings, polishing surfaces, and streamlining the shape of objects." },
            { question: "What is Electrostatic Force?", answer: "Electrostatic force is the force exerted by a charged body on another charged or uncharged body." },
            { question: "Effect of force on a moving body.", answer: "A force can increase the speed, decrease the speed (slow down), or change the direction of a moving body." },
            { question: "Define Pressure.", answer: "Pressure is defined as the force acting per unit area. Formula: Pressure = Force / Area. SI unit is Pascal (Pa)." },
            { question: "Why do we slip on a banana peel?", answer: "A banana peel is smooth and reduces the friction between our foot and the ground significantly, causing us to slip." },
            { question: "Unit of Weight.", answer: "Weight is a force (gravity acting on mass), so its SI unit is the Newton (N)." }
        ],
        "Chapter 4: Simple Machines": [
            { question: "Which is a simple machine?", options: ["Lever", "Pulley", "Inclined Plane", "All of these"], answer: "All of these" },
            { question: "A pair of scissors is a class ___ lever.", options: ["I", "II", "III", "IV"], answer: "I" },
            { question: "Mechanical Advantage = ?", options: ["Load/Effort", "Effort/Load", "Load x Effort", "Load + Effort"], answer: "Load/Effort" },
            { question: "Define Simple Machine.", answer: "A simple machine is a device that makes our work easier, faster, or allows us to apply force at a convenient point or direction." },
            { question: "Give example of Class II lever.", answer: "In Class II levers, the Load is between the Fulcrum and Effort. Examples: Wheelbarrow, Nutcracker, Bottle opener." },
            { question: "What is a Pulley?", answer: "A pulley is a simple machine consisting of a wheel with a grooved rim over which a rope or chain passes. It changes the direction of force." },
            { question: "Uses of Inclined Plane.", answer: "Inclined planes are used as ramps for loading heavy goods into trucks, slides in playgrounds, and winding roads on hills." },
            { question: "Explain the principle of a lever.", answer: "The principle of a lever states that in equilibrium: Load x Load Arm = Effort x Effort Arm." },
            { question: "What is a Wedge? Give example.", answer: "A wedge is a double inclined plane used to cut or split objects. Examples: Knife, Axe, Chisel." },
            { question: "Example of Class III lever.", answer: "In Class III levers, the Effort is between the Fulcrum and Load. Examples: Tongs, Fishing rod, Human forearm." },
            { question: "What is a Screw?", answer: "A screw is an inclined plane wrapped around a cylinder. It is used to hold things together or lift loads (screw jack)." },
            { question: "Define Fulcrum.", answer: "The fulcrum is the fixed point about which a lever rotates or turns." },
            { question: "Efficiency of a machine.", answer: "Efficiency is the ratio of Output Work to Input Work, usually expressed as a percentage. Efficiency = (Output/Input) * 100." },
            { question: "Why is efficiency always < 100%?", answer: "Efficiency is always less than 100% because some input energy is wasted in overcoming friction and moving the machine parts." },
            { question: "Draw a single fixed pulley.", answer: "A single fixed pulley has a fixed axle. It changes the direction of force but does not multiply force (MA=1)." }
        ],
        "Chapter 5: Light.": [
            { question: "Light travels in:", options: ["Curved lines", "Straight lines", "Zigzag", "Circles"], answer: "Straight lines" },
            { question: "Speed of light is:", options: ["3x10^8 m/s", "300 m/s", "3000 km/s", "3x10^5 m/s"], answer: "3x10^8 m/s" },
            { question: "Object that emits light is:", options: ["Luminous", "Non-luminous", "Opaque", "Transparent"], answer: "Luminous" },
            { question: "Define Reflection.", answer: "Reflection is the bouncing back of light rays when they fall on a smooth, polished surface like a mirror." },
            { question: "Laws of Reflection.", answer: "1. The angle of incidence equals the angle of reflection (i=r). 2. The incident ray, reflected ray, and normal at the point of incidence all lie in the same plane." },
            { question: "What is a Shadow?", answer: "A shadow is a dark region formed behind an opaque object when it blocks the path of light." },
            { question: "Difference between Transparent and Opaque.", answer: "Transparent objects allow light to pass through them completely (e.g., glass). Opaque objects do not allow any light to pass through (e.g., wood)." },
            { question: "Explain Solar Eclipse.", answer: "A solar eclipse occurs when the Moon comes between the Sun and the Earth, casting its shadow on the Earth. It happens only on a new moon day." },
            { question: "What is a Pinhole Camera?", answer: "A pinhole camera is a simple device without a lens that forms an inverted image based on the principle of rectilinear propagation of light." },
            { question: "Image formed by plane mirror is:", answer: "The image is virtual, erect, laterally inverted, and of the same size as the object." },
            { question: "Define Lateral Inversion.", answer: "Lateral inversion is the phenomenon where the left side of an object appears as the right side in the mirror image, and vice versa." },
            { question: "What is a Lunar Eclipse?", answer: "A lunar eclipse occurs when the Earth comes between the Sun and the Moon, casting its shadow on the Moon. It happens only on a full moon night." },
            { question: "Define Translucent objects.", answer: "Translucent objects allow only partial light to pass through them. Objects are not seen clearly through them. Example: Butter paper, frosted glass." },
            { question: "What is a beam of light?", answer: "A group or bundle of light rays is called a beam of light. It can be parallel, convergent, or divergent." },
            { question: "Why can't we see around a corner?", answer: "We cannot see around a corner because light travels in straight lines (Rectilinear Propagation) and cannot bend around obstacles." }
        ],
        "Chapter 6: Magnetism.": [
            { question: "A magnet attracts:", options: ["Wood", "Iron", "Plastic", "Glass"], answer: "Iron" },
            { question: "Like poles:", options: ["Attract", "Repel", "No effect", "Stick"], answer: "Repel" },
            { question: "A freely suspended magnet points:", options: ["East-West", "North-South", "Up-Down", "Random"], answer: "North-South" },
            { question: "Define Magnetic Field.", answer: "The magnetic field is the region around a magnet where its magnetic influence (force of attraction or repulsion) can be felt." },
            { question: "Properties of Magnetic Lines of Force.", answer: "1. They originate from North pole and end at South pole outside the magnet. 2. They never intersect each other. 3. They are crowded near poles." },
            { question: "How to demagnetize a magnet?", answer: "A magnet can be demagnetized by: 1. Heating it to a high temperature. 2. Hammering or dropping it repeatedly. 3. Using alternating current." },
            { question: "Difference between permanent and temporary magnet.", answer: "Permanent magnets retain magnetism for a long time (e.g., Steel). Temporary magnets lose magnetism as soon as the magnetizing force is removed (e.g., Soft iron)." },
            { question: "Uses of Electromagnets.", answer: "Electromagnets are used in electric bells, magnetic cranes, loudspeakers, and MRI machines." },
            { question: "What is a Lodestone?", answer: "Lodestone is a naturally occurring magnetic rock (magnetite) that attracts iron. It was used as an early compass." },
            { question: "Define Magnetic Poles.", answer: "Magnetic poles are the two ends of a magnet (North and South) where the magnetic strength is maximum." },
            { question: "Test for magnetism.", answer: "Repulsion is the sure test for magnetism because attraction can occur between a magnet and an unmagnetized magnetic substance, but repulsion only occurs between two like poles." },
            { question: "How to store magnets?", answer: "Magnets should be stored in pairs with unlike poles on the same side, separated by wood, and with soft iron keepers across their ends." },
            { question: "Earth behaves as a magnet. Why?", answer: "Earth behaves as a magnet due to the electric currents generated by the rotation of molten iron and nickel in its outer core." },
            { question: "Make your own magnet.", answer: "Single Touch Method: Stroke an iron bar with one pole of a magnet in one direction repeatedly." },
            { question: "What is a Magnetic Compass?", answer: "A magnetic compass is a navigational instrument containing a magnetized needle that aligns itself with the Earth's magnetic field (North-South)." }
        ]
    },
    "CHEMISTRY": {
        "Chapter 3: Matter": [
            { question: "Smallest particle of matter:", options: ["Atom", "Molecule", "Cell", "Grain"], answer: "Atom" },
            { question: "Matter exists in ___ states.", options: ["1", "2", "3", "4"], answer: "3" },
            { question: "Gas to Liquid is:", options: ["Condensation", "Evaporation", "Sublimation", "Fusion"], answer: "Condensation" },
            { question: "Define Matter.", answer: "Matter is anything that has mass and occupies space. It is made up of tiny particles." },
            { question: "Kinetic Theory of Matter.", answer: "The Kinetic Theory states that matter is made of particles that are in constant random motion. The speed of motion increases with temperature." },
            { question: "Why solids have fixed shape?", answer: "Solids have a fixed shape because the intermolecular forces of attraction are very strong, holding the particles in fixed positions." },
            { question: "Brownian Motion.", answer: "Brownian motion is the random, zig-zag movement of microscopic particles suspended in a fluid, providing evidence for the particulate nature of matter." },
            { question: "Diffusion in gases.", answer: "Diffusion is very fast in gases because gas particles move rapidly and have large spaces between them, allowing them to mix easily." },
            { question: "Define Mass.", answer: "Mass is the quantity of matter contained in a body. It is constant everywhere and measured in kilograms." },
            { question: "Define Volume.", answer: "Volume is the amount of space occupied by an object. It is measured in cubic meters or litres." },
            { question: "Why are liquids called fluids?", answer: "Liquids are called fluids because they can flow and do not have a fixed shape, taking the shape of their container." },
            { question: "Compressibility of gases.", answer: "Gases are highly compressible because there are large intermolecular spaces between the gas particles." },
            { question: "Effect of heat on matter.", answer: "Heating can cause expansion (increase in volume) or a change of state (e.g., solid to liquid) by increasing the kinetic energy of particles." },
            { question: "Example of Sublimation.", answer: "Sublimation is the direct change from solid to gas. Examples: Naphthalene balls, Ammonium chloride, Iodine." },
            { question: "Intermolecular space in liquids.", answer: "Intermolecular space in liquids is greater than in solids but much less than in gases, allowing particles to slide past each other." }
        ],
        "Chapter 4: Elements, Compounds, Symbol & Formulae": [
            { question: "Symbol for Sodium is:", options: ["S", "So", "Na", "Sd"], answer: "Na" },
            { question: "Water (H2O) is a:", options: ["Element", "Compound", "Mixture", "Atom"], answer: "Compound" },
            { question: "O2 represents:", options: ["Oxygen atom", "Oxygen molecule", "Ozone", "Oxide"], answer: "Oxygen molecule" },
            { question: "Define Element.", answer: "An element is a pure substance made up of only one kind of atom and cannot be broken down into simpler substances by chemical means." },
            { question: "Write formula for Carbon Dioxide.", answer: "The chemical formula for Carbon Dioxide is CO2." },
            { question: "Difference between Atom and Molecule.", answer: "An atom is the smallest particle of an element. A molecule is the smallest particle of a substance (element or compound) capable of independent existence." },
            { question: "Valency of Carbon.", answer: "The valency of Carbon is 4 (Tetravalent)." },
            { question: "Write symbols for: Iron, Gold, Silver.", answer: "Iron: Fe, Gold: Au, Silver: Ag." },
            { question: "Define Compound.", answer: "A compound is a pure substance formed by the chemical combination of two or more elements in a fixed ratio by mass." },
            { question: "What is Atomicity?", answer: "Atomicity is the number of atoms present in one molecule of an element. E.g., O2 has atomicity 2." },
            { question: "Symbol for Potassium.", answer: "The symbol for Potassium is K (from Kalium)." },
            { question: "Formula for Sulphuric Acid.", answer: "The formula for Sulphuric Acid is H2SO4." },
            { question: "Latin name of Iron.", answer: "The Latin name of Iron is Ferrum." },
            { question: "Define Valency.", answer: "Valency is the combining capacity of an atom of an element to form chemical bonds." },
            { question: "Write formula: Calcium Carbonate.", answer: "The formula for Calcium Carbonate is CaCO3." }
        ],
        "Chapter 5: Pure Substances and Mixtures; Separation of Mixtures": [
            { question: "Air is a:", options: ["Compound", "Element", "Mixture", "Pure Substance"], answer: "Mixture" },
            { question: "Method to separate sand and water:", options: ["Filtration", "Distillation", "Magnetic", "Sublimation"], answer: "Filtration" },
            { question: "Separation of salt from water:", options: ["Evaporation", "Filtration", "Sedimentation", "Decantation"], answer: "Evaporation" },
            { question: "Define Mixture.", answer: "A mixture is an impure substance formed by physically mixing two or more substances in any ratio without any chemical change." },
            { question: "What is Winnowing?", answer: "Winnowing is a method of separating heavier grains from lighter chaff by allowing the mixture to fall from a height in the wind." },
            { question: "Principle of Distillation.", answer: "Distillation is based on the difference in boiling points of the components. The liquid with the lower boiling point vaporizes first and is condensed." },
            { question: "Separate Iron filings and Sulphur.", answer: "Iron filings can be separated from Sulphur using a magnet, as iron is magnetic and sulphur is not." },
            { question: "Define Saturated Solution.", answer: "A saturated solution is a solution in which no more solute can be dissolved at a given temperature." },
            { question: "Difference between Homogeneous and Heterogeneous mixture.", answer: "Homogeneous: Uniform composition throughout (e.g., Salt water). Heterogeneous: Non-uniform composition (e.g., Sand and water)." },
            { question: "What is Sieving?", answer: "Sieving is a method used to separate particles of different sizes using a sieve (mesh)." },
            { question: "Method to separate oil and water.", answer: "Oil and water are immiscible liquids and can be separated using a Separating Funnel." },
            { question: "Define Solute and Solvent.", answer: "Solute: The substance that dissolves (e.g., Salt). Solvent: The medium in which it dissolves (e.g., Water)." },
            { question: "What is Loading?", answer: "Loading is the process of speeding up sedimentation by adding chemicals like Alum, which makes fine particles heavier." },
            { question: "Example of Homogeneous mixture.", answer: "Sugar solution, Air, Alloys like Brass." },
            { question: "Separation of cream from milk.", answer: "Cream is separated from milk by Centrifugation, where the mixture is spun at high speed." }
        ],
        "Chapter 6: Air and Atmosphere": [
            { question: "Percentage of Nitrogen in air:", options: ["21%", "78%", "1%", "0.03%"], answer: "78%" },
            { question: "Gas used for breathing:", options: ["Nitrogen", "Oxygen", "CO2", "Argon"], answer: "Oxygen" },
            { question: "Layer of atmosphere closest to earth:", options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"], answer: "Troposphere" },
            { question: "Composition of Air.", answer: "Air is a mixture of Nitrogen (78%), Oxygen (21%), Argon (0.9%), Carbon Dioxide (0.03%), water vapor, and dust." },
            { question: "Uses of Oxygen.", answer: "Oxygen is essential for respiration in living organisms and supports combustion (burning)." },
            { question: "What is Rusting?", answer: "Rusting is the slow oxidation of iron in the presence of oxygen and moisture to form hydrated iron oxide (rust)." },
            { question: "Greenhouse Effect.", answer: "The Greenhouse Effect is the trapping of the sun's heat by gases like CO2 and Methane in the atmosphere, keeping the Earth warm." },
            { question: "Properties of Air.", answer: "Air occupies space, has mass, exerts pressure, is compressible, and is a mixture of gases." },
            { question: "Role of Nitrogen.", answer: "Nitrogen dilutes the activity of Oxygen (preventing rapid burning) and is essential for plant growth (protein synthesis)." },
            { question: "What is Ozone Layer?", answer: "The Ozone layer is a region in the stratosphere containing ozone gas (O3) that protects Earth from harmful UV radiation." },
            { question: "Pollutants in air.", answer: "Common air pollutants include Carbon Monoxide (CO), Sulphur Dioxide (SO2), Nitrogen Oxides, dust, and smoke." },
            { question: "Test for Carbon Dioxide.", answer: "Carbon Dioxide turns lime water milky due to the formation of insoluble Calcium Carbonate." },
            { question: "Define Atmosphere.", answer: "The atmosphere is the thick blanket of air surrounding the Earth, held in place by gravity." },
            { question: "Uses of Inert gases.", answer: "Argon is used in light bulbs. Helium is used in weather balloons. Neon is used in advertising signs." },
            { question: "How to prevent rusting?", answer: "Rusting can be prevented by painting, oiling/greasing, galvanization (coating with Zinc), or alloying." }
        ],
        "Chapter 7: Water": [
            { question: "Chemical formula of water:", options: ["HO", "H2O", "H2O2", "HO2"], answer: "H2O" },
            { question: "Freezing point of water:", options: ["0 C", "100 C", "37 C", "-10 C"], answer: "0 C" },
            { question: "Water is a universal ___.", options: ["Solvent", "Solute", "Solution", "Mixture"], answer: "Solvent" },
            { question: "Water Cycle.", answer: "The water cycle is the continuous movement of water on, above, and below the surface of the Earth through evaporation, condensation, and precipitation." },
            { question: "Sources of Water.", answer: "Surface water (Rivers, Lakes, Oceans) and Underground water (Wells, Springs)." },
            { question: "Potable Water.", answer: "Potable water is water that is safe and fit for drinking and cooking purposes." },
            { question: "Conservation of Water.", answer: "Water conservation involves saving water by rainwater harvesting, fixing leaks, closing taps when not in use, and recycling water." },
            { question: "Properties of Water.", answer: "Pure water is a colorless, odorless, and tasteless liquid. It freezes at 0°C and boils at 100°C." },
            { question: "Boiling point of water.", answer: "The boiling point of pure water is 100°C at standard atmospheric pressure." },
            { question: "Anomalous expansion of water.", answer: "Water expands instead of contracting when cooled from 4°C to 0°C. This is why ice is less dense than water." },
            { question: "What is Hard Water?", answer: "Hard water contains dissolved salts of calcium and magnesium. It does not form lather easily with soap." },
            { question: "Methods to purify water.", answer: "Water can be purified by boiling (kills germs), filtration (removes solids), chlorination (kills bacteria), and UV treatment." },
            { question: "Importance of water for plants.", answer: "Plants need water for photosynthesis, germination of seeds, and transport of nutrients from the soil." },
            { question: "Percentage of water in human body.", answer: "The human body consists of approximately 70% water." },
            { question: "What is Transpiration?", answer: "Transpiration is the process of loss of water in the form of vapor from the aerial parts (leaves) of plants." }
        ]
    },
    "BIOLOGY": {
        "Chapter 3: Cell: The structure and functions": [
            { question: "Powerhouse of the cell:", options: ["Nucleus", "Mitochondria", "Ribosome", "Plastid"], answer: "Mitochondria" },
            { question: "Control center of the cell:", options: ["Nucleus", "Cytoplasm", "Wall", "Membrane"], answer: "Nucleus" },
            { question: "Plant cells have ___ which animal cells don't.", options: ["Cell Wall", "Nucleus", "Mitochondria", "Ribosome"], answer: "Cell Wall" },
            { question: "Define Cell.", answer: "A cell is the fundamental structural and functional unit of all living organisms." },
            { question: "Function of Chloroplast.", answer: "Chloroplasts contain chlorophyll and are responsible for photosynthesis (making food) in plant cells." },
            { question: "Difference between Plant and Animal Cell.", answer: "Plant cells have a cell wall and large vacuoles, and plastids. Animal cells lack cell walls and plastids, and have small vacuoles." },
            { question: "Unicellular vs Multicellular.", answer: "Unicellular organisms consist of a single cell (e.g., Amoeba). Multicellular organisms consist of many cells (e.g., Humans)." },
            { question: "Draw a plant cell.", answer: "A plant cell diagram should show: Cell Wall, Cell Membrane, Nucleus, Large Vacuole, Chloroplasts, and Cytoplasm." },
            { question: "Who discovered the cell?", answer: "Robert Hooke discovered the cell in 1665 while observing cork slices." },
            { question: "Function of Cell Membrane.", answer: "The cell membrane is selectively permeable; it controls the entry and exit of substances into and out of the cell." },
            { question: "What is Cytoplasm?", answer: "Cytoplasm is the jelly-like substance filling the cell where organelles are suspended and chemical reactions take place." },
            { question: "Function of Ribosomes.", answer: "Ribosomes are the sites of protein synthesis in the cell." },
            { question: "What are Chromosomes?", answer: "Chromosomes are thread-like structures in the nucleus that carry genetic information (DNA) from parents to offspring." },
            { question: "Define Tissue.", answer: "A tissue is a group of similar cells that work together to perform a specific function." },
            { question: "Why is Nucleus important?", answer: "The nucleus controls all the activities of the cell and contains the genetic material." }
        ],
        "Chapter 4: Human Body: Digestive System": [
            { question: "Digestion starts in:", options: ["Stomach", "Mouth", "Intestine", "Liver"], answer: "Mouth" },
            { question: "Acid produced in stomach:", options: ["HCl", "H2SO4", "HNO3", "Acetic"], answer: "HCl" },
            { question: "Absorption of food happens in:", options: ["Small Intestine", "Large Intestine", "Stomach", "Liver"], answer: "Small Intestine" },
            { question: "Define Digestion.", answer: "Digestion is the process of breaking down complex, insoluble food substances into simple, soluble forms that can be absorbed by the body." },
            { question: "Role of Liver.", answer: "The liver produces bile juice, which helps in the emulsification (breakdown) of fats." },
            { question: "Functions of Tongue.", answer: "The tongue helps in tasting food, mixing food with saliva, and swallowing." },
            { question: "Peristalsis.", answer: "Peristalsis is the wave-like muscular contraction and relaxation of the oesophagus that pushes food down to the stomach." },
            { question: "Draw Digestive System.", answer: "Diagram should include: Mouth, Oesophagus, Stomach, Liver, Pancreas, Small Intestine, Large Intestine, Anus." },
            { question: "Enzyme in Saliva.", answer: "Saliva contains the enzyme Salivary Amylase (Ptyalin), which breaks down starch into sugar." },
            { question: "Function of Villi.", answer: "Villi are finger-like projections in the small intestine that increase the surface area for absorption of digested food." },
            { question: "Role of Large Intestine.", answer: "The large intestine absorbs excess water and minerals from undigested food and forms feces." },
            { question: "What is Chyme?", answer: "Chyme is the semi-solid, partially digested food mass formed in the stomach." },
            { question: "Types of Teeth.", answer: "The four types of teeth are: Incisors (cutting), Canines (tearing), Premolars (grinding), and Molars (grinding)." },
            { question: "Function of Bile.", answer: "Bile neutralizes stomach acid and breaks down large fat globules into smaller ones (emulsification)." },
            { question: "What is Assimilation?", answer: "Assimilation is the process by which absorbed food is utilized by body cells for energy, growth, and repair." }
        ],
        "Chapter 5: Human Body: Respiratory System": [
            { question: "Main organ of respiration:", options: ["Heart", "Lungs", "Kidney", "Liver"], answer: "Lungs" },
            { question: "Windpipe is also called:", options: ["Oesophagus", "Trachea", "Larynx", "Pharynx"], answer: "Trachea" },
            { question: "Gas inhaled is rich in:", options: ["Oxygen", "CO2", "Nitrogen", "Hydrogen"], answer: "Oxygen" },
            { question: "Define Respiration.", answer: "Respiration is the chemical process of breaking down food (glucose) in the presence of oxygen to release energy." },
            { question: "Mechanism of Breathing.", answer: "Breathing involves Inhalation (taking in air) and Exhalation (giving out air), facilitated by the diaphragm and rib muscles." },
            { question: "Role of Diaphragm.", answer: "The diaphragm is a muscular sheet that moves down during inhalation to increase chest volume and moves up during exhalation." },
            { question: "Difference between Breathing and Respiration.", answer: "Breathing is a physical process of gas exchange. Respiration is a chemical process of energy release within cells." },
            { question: "Draw Respiratory System.", answer: "Diagram should include: Nose, Pharynx, Larynx, Trachea, Bronchi, Lungs, Diaphragm." },
            { question: "What is Alveoli?", answer: "Alveoli are tiny air sacs in the lungs where the exchange of oxygen and carbon dioxide takes place." },
            { question: "Function of Epiglottis.", answer: "The epiglottis is a flap that covers the windpipe during swallowing to prevent food from entering the lungs." },
            { question: "Product of Aerobic Respiration.", answer: "The products are Carbon Dioxide, Water, and Energy (ATP)." },
            { question: "What is Larynx?", answer: "The larynx is the voice box containing vocal cords that vibrate to produce sound." },
            { question: "Why do we sneeze?", answer: "Sneezing is a reflex action to expel dust, pollen, or irritants from the nasal cavity." },
            { question: "Rate of breathing.", answer: "The normal breathing rate for an adult at rest is 15-18 times per minute." },
            { question: "Effect of exercise on breathing.", answer: "During exercise, the body needs more energy, so the breathing rate increases to supply more oxygen." }
        ],
        "Chapter 6: Human Body: Circulatory System": [
            { question: "Pumping organ of body:", options: ["Lungs", "Heart", "Brain", "Liver"], answer: "Heart" },
            { question: "Blood vessels carrying blood away from heart:", options: ["Arteries", "Veins", "Capillaries", "Nerves"], answer: "Arteries" },
            { question: "Red pigment in blood:", options: ["Haemoglobin", "Chlorophyll", "Melanin", "Bile"], answer: "Haemoglobin" },
            { question: "Components of Blood.", answer: "Blood consists of Plasma (liquid) and cells: Red Blood Cells (RBC), White Blood Cells (WBC), and Platelets." },
            { question: "Function of WBC.", answer: "White Blood Cells (WBCs) are the soldiers of the body; they fight against germs and infections." },
            { question: "Double Circulation.", answer: "Double circulation means blood passes through the heart twice in one complete cycle (Pulmonary and Systemic circulation)." },
            { question: "Pulse Rate.", answer: "Pulse rate is the number of times the heart beats per minute, usually felt at the wrist or neck." },
            { question: "Draw Heart.", answer: "Diagram should show: Right/Left Auricles, Right/Left Ventricles, Aorta, Vena Cava, Pulmonary Artery/Vein." },
            { question: "Function of Platelets.", answer: "Platelets help in the clotting of blood to stop bleeding from injuries." },
            { question: "Difference between Artery and Vein.", answer: "Arteries have thick walls, carry oxygenated blood away from heart. Veins have thin walls, valves, and carry deoxygenated blood to heart." },
            { question: "What is Plasma?", answer: "Plasma is the pale yellow liquid part of blood that transports nutrients, hormones, and waste products." },
            { question: "Chambers of Heart.", answer: "The heart has 4 chambers: Upper two are Auricles (Atria) and lower two are Ventricles." },
            { question: "Function of Valves.", answer: "Valves prevent the backflow of blood, ensuring it flows in only one direction." },
            { question: "Blood Grouping.", answer: "The main blood groups are A, B, AB, and O, based on the presence of antigens." },
            { question: "Universal Donor.", answer: "Blood group O negative is called the Universal Donor because it can be given to anyone." }
        ],
        "Chapter 7: Disease and Hygiene": [
            { question: "Disease caused by lack of Iron:", options: ["Scurvy", "Rickets", "Anaemia", "Goitre"], answer: "Anaemia" },
            { question: "Communicable disease:", options: ["Diabetes", "Flu", "Cancer", "Heart attack"], answer: "Flu" },
            { question: "Vitamin C deficiency causes:", options: ["Scurvy", "Beriberi", "Night Blindness", "Rickets"], answer: "Scurvy" },
            { question: "Define Hygiene.", answer: "Hygiene refers to conditions and practices that help to maintain health and prevent the spread of diseases." },
            { question: "Modes of transmission of diseases.", answer: "Diseases spread through Air (coughing), Water (contaminated), Direct Contact, and Vectors (insects)." },
            { question: "Balanced Diet.", answer: "A balanced diet contains all essential nutrients (carbs, proteins, fats, vitamins, minerals) in the right proportions." },
            { question: "Vaccination.", answer: "Vaccination is the administration of a vaccine to stimulate the immune system to develop protection against a specific disease." },
            { question: "First Aid.", answer: "First aid is the immediate assistance given to any person suffering from a sudden illness or injury before professional help arrives." },
            { question: "Deficiency disease of Vitamin A.", answer: "Deficiency of Vitamin A causes Night Blindness (difficulty seeing in dim light)." },
            { question: "What are Pathogens?", answer: "Pathogens are disease-causing microorganisms like bacteria, viruses, fungi, and protozoa." },
            { question: "Prevention of Malaria.", answer: "Malaria can be prevented by using mosquito nets, repellents, and not allowing water to stagnate (breeding grounds)." },
            { question: "What is a Vector?", answer: "A vector is an organism (like a mosquito or housefly) that carries pathogens from an infected person to a healthy person." },
            { question: "Importance of Exercise.", answer: "Exercise improves blood circulation, strengthens muscles and bones, reduces stress, and maintains a healthy weight." },
            { question: "Disease caused by contaminated water.", answer: "Diseases like Cholera, Typhoid, and Jaundice are caused by drinking contaminated water." },
            { question: "Define Malnutrition.", answer: "Malnutrition is a condition resulting from an unbalanced diet in which certain nutrients are lacking, in excess, or in the wrong proportions." }
        ],
        "Chapter 8: Habitat and Adaptation": [
            { question: "Habitat of Camel:", options: ["Forest", "Desert", "Ocean", "Mountain"], answer: "Desert" },
            { question: "Fish breathe through:", options: ["Lungs", "Gills", "Skin", "Nose"], answer: "Gills" },
            { question: "Cactus is adapted for:", options: ["Desert", "Water", "Snow", "Rainforest"], answer: "Desert" },
            { question: "Define Habitat.", answer: "A habitat is the natural environment where an organism lives, grows, and reproduces." },
            { question: "Adaptations of Fish.", answer: "Fish have a streamlined body to swim, gills to breathe underwater, and fins/tail for movement and balance." },
            { question: "Adaptations of Camel.", answer: "Camels have a hump to store fat, broad feet to walk on sand, and long eyelashes to protect from sandstorms." },
            { question: "Biotic and Abiotic components.", answer: "Biotic components are living things (plants, animals). Abiotic components are non-living things (air, water, soil, sunlight)." },
            { question: "Mountain adaptations.", answer: "Animals have thick fur/wool for warmth. Trees are cone-shaped with needle-like leaves to shed snow." },
            { question: "What is Adaptation?", answer: "Adaptation is the presence of specific features or habits which enable a plant or animal to live in its surroundings." },
            { question: "Aquatic plants adaptations.", answer: "Aquatic plants have hollow, light stems to float, and waxy coating on leaves to prevent rotting." },
            { question: "Polar Bear adaptations.", answer: "Polar bears have white fur for camouflage, a thick layer of fat (blubber) for insulation, and padded feet." },
            { question: "What is Hibernation?", answer: "Hibernation is a state of deep sleep that some animals go into during winter to survive the cold and lack of food." },
            { question: "Xerophytes.", answer: "Xerophytes are plants adapted to survive in dry conditions (deserts) with features like spines instead of leaves (e.g., Cactus)." },
            { question: "Define Ecosystem.", answer: "An ecosystem is a community of living organisms interacting with each other and their non-living environment." },
            { question: "Adaptations of birds.", answer: "Birds have hollow bones (lightweight), wings with feathers, and a streamlined body for flight." }
        ]
    },
    "COMPUTER": {
        "Chapter 2: File Management: Organisation of Data": [
            { question: "Extension of Word file:", options: [".docx", ".xlsx", ".pptx", ".txt"], answer: ".docx" },
            { question: "To copy a file:", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: "Ctrl+C" },
            { question: "Deleted files go to:", options: ["Desktop", "Recycle Bin", "Documents", "Nowhere"], answer: "Recycle Bin" },
            { question: "What is a Folder?", answer: "A folder is a container that helps organize files and other folders on a computer." },
            { question: "Moving vs Copying.", answer: "Moving (Cut/Paste) changes the location of the file. Copying (Copy/Paste) creates a duplicate of the file in the new location." },
            { question: "Wildcard characters.", answer: "Wildcards are special characters used to search for files. '*' represents multiple characters, and '?' represents a single character." },
            { question: "Searching for files.", answer: "You can search for files using the Search Box in File Explorer by typing the name or extension." },
            { question: "Sorting files.", answer: "Files can be sorted by Name, Date Modified, Type, and Size to find them easily." },
            { question: "Shortcut for Paste.", answer: "The keyboard shortcut for Paste is Ctrl + V." },
            { question: "Shortcut for Cut.", answer: "The keyboard shortcut for Cut is Ctrl + X." },
            { question: "What is a File?", answer: "A file is a collection of related data or information stored on a storage medium with a specific name." },
            { question: "Renaming a file.", answer: "To rename, right-click the file and select Rename, or select the file and press F2." },
            { question: "Selecting multiple files.", answer: "Use Ctrl + Click to select non-adjacent files, and Shift + Click to select a range of adjacent files." },
            { question: "Emptying Recycle Bin.", answer: "Emptying the Recycle Bin permanently deletes the files, and they cannot be recovered easily." },
            { question: "File Explorer.", answer: "File Explorer is the file management application in Windows used to browse folders and files." }
        ],
        "Chapter 5: Presentation: Visual Effects": [
            { question: "Software for presentation:", options: ["Word", "Excel", "PowerPoint", "Paint"], answer: "PowerPoint" },
            { question: "Key to start slideshow:", options: ["F5", "F1", "Esc", "Enter"], answer: "F5" },
            { question: "Movement of slides is called:", options: ["Animation", "Transition", "Design", "Layout"], answer: "Transition" },
            { question: "What is Animation?", answer: "Animation is the visual effect applied to individual objects (text, images) on a slide to control how they appear." },
            { question: "Slide Master.", answer: "Slide Master is the top slide in a hierarchy that stores information about the theme and layout of a presentation." },
            { question: "Inserting Audio/Video.", answer: "You can insert media by going to the Insert tab and selecting Audio or Video options." },
            { question: "Views in PowerPoint.", answer: "Common views include Normal View (editing), Slide Sorter (reordering), and Slide Show (presentation)." },
            { question: "Printing handouts.", answer: "Handouts allow you to print multiple slides on a single page for the audience." },
            { question: "What is a Slide?", answer: "A slide is a single page of a presentation where you place text, images, and other media." },
            { question: "Custom Animation.", answer: "Custom Animation allows you to define specific entrance, emphasis, exit, and motion path effects for objects." },
            { question: "Slide Show view.", answer: "Slide Show view displays the presentation in full screen, as the audience will see it." },
            { question: "Notes Pane.", answer: "The Notes Pane is used to add speaker notes that are visible to the presenter but not the audience." },
            { question: "Rehearse Timings.", answer: "Rehearse Timings allows you to record the time spent on each slide to automate the presentation." },
            { question: "Theme.", answer: "A Theme is a predefined set of colors, fonts, and effects that gives a consistent look to the presentation." },
            { question: "Hyperlink.", answer: "A Hyperlink is a connection to another slide, a custom show, a web page, or a file." }
        ],
        "Chapter 7: HTML: An Introduction": [
            { question: "HTML stands for:", options: ["Hyper Text Markup Language", "High Tech Mail Link", "Hyper Tool Make Language", "None"], answer: "Hyper Text Markup Language" },
            { question: "Tag for largest heading:", options: ["<h1>", "<h6>", "<head>", "<title>"], answer: "<h1>" },
            { question: "Tag for paragraph:", options: ["<p>", "<para>", "<pg>", "<text>"], answer: "<p>" },
            { question: "Structure of HTML.", answer: "An HTML document starts with <html>, contains a <head> section (for title), and a <body> section (for content), and ends with </html>." },
            { question: "Container vs Empty tags.", answer: "Container tags have both opening and closing tags (e.g., <b>...</b>). Empty tags have only an opening tag (e.g., <br>)." },
            { question: "Attributes.", answer: "Attributes provide additional information about HTML elements and are always specified in the start tag (e.g., align='center')." },
            { question: "Creating lists.", answer: "Unordered lists use <ul> and <li>. Ordered lists use <ol> and <li>." },
            { question: "Inserting Images.", answer: "Images are inserted using the <img> tag with the 'src' attribute. E.g., <img src='image.jpg'>." },
            { question: "Tag for line break.", answer: "The <br> tag is used to insert a single line break." },
            { question: "Tag for horizontal rule.", answer: "The <hr> tag is used to create a horizontal line across the page." },
            { question: "Bold tag.", answer: "The <b> or <strong> tag is used to make text bold." },
            { question: "Italic tag.", answer: "The <i> or <em> tag is used to italicize text." },
            { question: "Underline tag.", answer: "The <u> tag is used to underline text." },
            { question: "Bgcolor attribute.", answer: "The bgcolor attribute in the <body> tag sets the background color of the webpage." },
            { question: "Href attribute.", answer: "The href attribute in the <a> (anchor) tag specifies the URL of the page the link goes to." }
        ]
    },
    "ENGLISH LITERATURE": {
        "Classic Short Story: The Lottery Ticket": [
            { question: "Who wrote 'The Lottery Ticket'?", options: ["Anton Chekhov", "Oscar Wilde", "O. Henry", "Tolstoy"], answer: "Anton Chekhov" },
            { question: "The series number was:", options: ["9499", "9999", "1234", "5678"], answer: "9499" },
            { question: "The prize amount was:", options: ["75,000", "50,000", "10,000", "100,000"], answer: "75,000" },
            { question: "Describe Ivan's initial reaction.", answer: "Ivan was initially indifferent, but when he saw the series number matched, he was filled with disbelief and excitement." },
            { question: "How did the couple's attitude change?", answer: "Their attitude shifted from mutual contentment to greed and hatred. They began to view each other with suspicion and resentment, imagining how the other would waste the money." },
            { question: "What were Ivan's dreams?", answer: "Ivan dreamed of buying an estate, eating rich food, traveling abroad, and living a life of luxury and leisure." },
            { question: "What were Masha's dreams?", answer: "Masha also dreamed of a comfortable life, but Ivan imagined she would be stingy, count every penny, and complain about his spending." },
            { question: "Theme of the story.", answer: "The main theme is the corrupting power of money and greed. It shows how the mere possibility of wealth can destroy relationships and reveal the darker side of human nature." },
            { question: "What happened at the end?", answer: "When they checked the ticket number, it did not match. Their dreams were shattered, and they returned to their bleak reality, feeling angry and depressed." },
            { question: "Significance of the title.", answer: "The title refers to the object that triggers the conflict. The lottery ticket represents false hope and the catalyst that exposes the couple's hidden dissatisfaction." },
            { question: "Ivan's view on Masha's relatives.", answer: "Ivan imagined that Masha's relatives would come crawling for money, begging and fawning over her, which disgusted him." },
            { question: "Setting of the story.", answer: "The story is set in a middle-class Russian home, likely in the late 19th century, creating an atmosphere of domesticity that is disrupted by greed." },
            { question: "Irony in the story.", answer: "The irony is that the money they never actually had succeeded in ruining their peace of mind and happiness." },
            { question: "Character sketch of Ivan.", answer: "Ivan is a middle-class man who is initially content but quickly reveals himself to be selfish, resentful, and misogynistic when the prospect of wealth appears." },
            { question: "Character sketch of Masha.", answer: "Masha is Ivan's wife. She is initially seen as a partner, but in Ivan's fantasy, she becomes an obstacle and a stingy woman who would control the money." }
        ],
        "Prose: The Remarkable Rocket-Oscar Wilde": [
            { question: "The Rocket claimed to be:", options: ["Remarkable", "Ordinary", "Cheap", "Fast"], answer: "Remarkable" },
            { question: "The event was:", options: ["King's Wedding", "Prince's Wedding", "New Year", "Birthday"], answer: "Prince's Wedding" },
            { question: "The Rocket was crying because:", options: ["He was sad", "He was sensitive", "He was wet", "He was broken"], answer: "He was sensitive" },
            { question: "Character sketch of the Rocket.", answer: "The Rocket is extremely arrogant, self-centered, and delusional. He believes the world revolves around him and interprets every misfortune as a tribute to his greatness." },
            { question: "What happened to the Rocket in the end?", answer: "The Rocket was finally lit by some boys, but it was daytime, so no one saw him go off. He fizzled out unnoticed, still believing he created a sensation." },
            { question: "Irony in the story.", answer: "The irony lies in the Rocket's belief that he is 'remarkable' and important, while in reality, he is ignored, fails to perform at the wedding, and ends up in a ditch." },
            { question: "The Frog's opinion.", answer: "The Frog is argumentative and believes in the importance of his own croaking, serving as a foil to the Rocket's arrogance." },
            { question: "Moral of the story.", answer: "The story teaches that vanity and arrogance lead to downfall. True worth is not in what one thinks of oneself but in one's actions." },
            { question: "Who were the other fireworks?", answer: "The other fireworks included the Squib, the Cracker, the Roman Candle, and the Catherine Wheel, who were all excited about the display." },
            { question: "Why did the Rocket not go off initially?", answer: "The Rocket did not go off because he had dampened his own gunpowder by crying 'tears of sensibility' before the display." },
            { question: "Where was the Rocket thrown?", answer: "After failing to ignite, the Rocket was thrown over the castle wall into a ditch/mud." },
            { question: "Who did he meet in the ditch?", answer: "In the ditch, he met a Frog, a Dragonfly, and a Duck, all of whom he tried to impress with his superiority." },
            { question: "What did the Rocket think when he was thrown?", answer: "He deluded himself into thinking that he was being reserved for a special, private occasion or 'court mourning'." },
            { question: "The Rocket's parents.", answer: "He claimed his father was a Rocket who flew so high he came down in a shower of gold rain, and his mother was a Catherine Wheel." },
            { question: "Oscar Wilde's style.", answer: "Wilde uses wit, satire, and personification to critique human vanity and social pretensions through the character of the Rocket." }
        ]
    },
    "HISTORY AND CIVICS": {
        "The Mauryan Empire and Administration": [
            { question: "Founder of Mauryan Empire:", options: ["Chandragupta", "Ashoka", "Bindusara", "Kanishka"], answer: "Chandragupta" },
            { question: "Ashoka fought the war of:", options: ["Kalinga", "Panipat", "Plassey", "Buxar"], answer: "Kalinga" },
            { question: "Arthashastra was written by:", options: ["Chanakya", "Megasthenes", "Kalidasa", "Harsha"], answer: "Chanakya" },
            { question: "Capital of Mauryas.", answer: "Pataliputra (modern-day Patna) was the capital of the Mauryan Empire." },
            { question: "Ashoka's Dhamma.", answer: "Ashoka's Dhamma was not a religion but a moral code of conduct. It emphasized non-violence, respect for elders, truthfulness, and tolerance towards all religions." },
            { question: "Mauryan Administration.", answer: "The administration was highly centralized. The King was the supreme authority, assisted by a council of ministers (Mantriparishad). The empire was divided into provinces." },
            { question: "Decline of Mauryas.", answer: "The empire declined due to weak successors after Ashoka, the vastness of the empire making it hard to control, and foreign invasions." },
            { question: "Indica.", answer: "'Indica' is a book written by the Greek ambassador Megasthenes. It provides valuable information about the Mauryan administration and society." },
            { question: "Who was Seleucus Nicator?", answer: "Seleucus Nicator was a Greek general of Alexander who invaded India but was defeated by Chandragupta Maurya and signed a peace treaty." },
            { question: "Ashoka's Edicts.", answer: "Ashoka's edicts are inscriptions carved on rocks and pillars throughout his empire. They communicated his message of Dhamma to the people." },
            { question: "Impact of Kalinga War.", answer: "The Kalinga War caused immense bloodshed, which filled Ashoka with remorse. He abandoned the policy of conquest by war (Digvijaya) and adopted the policy of conquest by Dhamma (Dhammavijaya)." },
            { question: "Role of Dhamma Mahamattas.", answer: "Dhamma Mahamattas were special officers appointed by Ashoka to spread the message of Dhamma and look after the welfare of the people." },
            { question: "Mauryan Art.", answer: "Mauryan art is famous for its polished stone pillars, the Sanchi Stupa, and the Lion Capital at Sarnath, which is India's national emblem." },
            { question: "Revenue system.", answer: "Land revenue was the main source of income, usually fixed at 1/6th of the produce. Taxes were collected to maintain the army and officials." },
            { question: "Extent of Empire.", answer: "The Mauryan Empire covered almost the entire Indian subcontinent, extending from the Himalayas in the north to Mysore in the south, and from Hindu Kush in the west to Bengal in the east." }
        ],
        "The Gupta Empire": [
            { question: "Founder of Gupta Dynasty:", options: ["Sri Gupta", "Chandragupta I", "Samudragupta", "Vikramaditya"], answer: "Sri Gupta" },
            { question: "Napoleon of India:", options: ["Samudragupta", "Ashoka", "Akbar", "Shivaji"], answer: "Samudragupta" },
            { question: "Golden Age of India:", options: ["Gupta Period", "Mauryan Period", "Mughal Period", "British Period"], answer: "Gupta Period" },
            { question: "Achievements in Science.", answer: "Aryabhatta calculated the value of Pi and explained solar/lunar eclipses. The concept of Zero and the decimal system were developed." },
            { question: "Kalidasa.", answer: "Kalidasa was a renowned Sanskrit poet and dramatist of the Gupta period. His famous works include 'Abhijnanashakuntalam' and 'Meghaduta'." },
            { question: "Fa-Hien.", answer: "Fa-Hien was a Chinese Buddhist pilgrim who visited India during the reign of Chandragupta II. His accounts describe the peace and prosperity of the Gupta empire." },
            { question: "Administration.", answer: "The administration was decentralized compared to Mauryas. Provinces (Bhuktis) were ruled by governors (Uparikas), and districts (Vishayas) by Vishayapatis." },
            { question: "Art and Architecture.", answer: "The Gupta period saw the construction of beautiful temples (e.g., Deogarh) and the famous Ajanta Caves with their exquisite paintings." },
            { question: "Chandragupta II title.", answer: "Chandragupta II adopted the title 'Vikramaditya' after defeating the Shakas." },
            { question: "Iron Pillar at Mehrauli.", answer: "The Iron Pillar in Delhi is a marvel of Gupta metallurgy. It has not rusted for over 1600 years, showing their advanced knowledge of metals." },
            { question: "Nalanda University.", answer: "Nalanda University was a great center of learning that flourished during the Gupta period, attracting students from all over the world." },
            { question: "Decline of Guptas.", answer: "The Gupta Empire declined due to repeated invasions by the Hunas, weak successors, and the rise of independent regional kingdoms." },
            { question: "Coins of Gupta period.", answer: "The Guptas issued a large number of gold coins called 'Dinars', which depicted the kings in various poses, reflecting the economic prosperity." },
            { question: "Literature.", answer: "Sanskrit literature reached its peak. Besides Kalidasa, other great writers like Vishakhadatta (Mudrarakshasa) and Vishnu Sharma (Panchatantra) flourished." },
            { question: "Navratnas.", answer: "Chandragupta II's court was adorned by the 'Navratnas' or Nine Gems, including Kalidasa, Amarasimha, Dhanvantari, and Varahamihira." }
        ]
    },
    "GEOGRAPHY": {
        "Chapter 4: Agriculture": [
            { question: "Growing crops is:", options: ["Agriculture", "Mining", "Fishing", "Forestry"], answer: "Agriculture" },
            { question: "Kharif crops are sown in:", options: ["Monsoon", "Winter", "Summer", "Spring"], answer: "Monsoon" },
            { question: "Example of Cash Crop:", options: ["Cotton", "Rice", "Wheat", "Maize"], answer: "Cotton" },
            { question: "Types of Farming.", answer: "Farming can be classified into Subsistence Farming (for self-consumption) and Commercial Farming (for sale in the market)." },
            { question: "Green Revolution.", answer: "The Green Revolution refers to the significant increase in food grain production in India in the 1960s due to the use of HYV seeds, fertilizers, and irrigation." },
            { question: "Major crops of India.", answer: "Major food crops include Rice and Wheat. Major cash crops include Cotton, Jute, Sugarcane, Tea, and Coffee." },
            { question: "Problems of Indian Agriculture.", answer: "Problems include dependence on erratic monsoons, small and fragmented landholdings, lack of modern technology, and poor irrigation facilities." },
            { question: "Organic Farming.", answer: "Organic farming is a method of farming that avoids the use of synthetic fertilizers and pesticides, relying instead on organic manure and biological pest control." },
            { question: "Rabi crops.", answer: "Rabi crops are sown in winter (Oct-Dec) and harvested in summer (April-June). Example: Wheat, Mustard, Gram." },
            { question: "Plantation Agriculture.", answer: "Plantation agriculture involves growing a single crop on a large scale, usually for export. Examples: Tea gardens in Assam, Coffee in Karnataka." },
            { question: "What is Sericulture?", answer: "Sericulture is the commercial rearing of silkworms for the production of silk." },
            { question: "What is Pisciculture?", answer: "Pisciculture is the breeding, rearing, and transplantation of fish by artificial means (Fish Farming)." },
            { question: "Importance of Agriculture.", answer: "Agriculture provides food for the population, raw materials for industries, and employment to a large section of the workforce." },
            { question: "Irrigation methods.", answer: "Common irrigation methods include Canal irrigation, Well/Tube well irrigation, and modern methods like Drip and Sprinkler irrigation." },
            { question: "Mixed Farming.", answer: "Mixed farming is a type of farming where cultivation of crops and rearing of livestock are carried out simultaneously on the same farm." }
        ],
        "Map of South America": [
            { question: "Longest river in South America:", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Amazon" },
            { question: "Highest peak:", options: ["Aconcagua", "Everest", "K2", "Kilimanjaro"], answer: "Aconcagua" },
            { question: "Largest country:", options: ["Brazil", "Argentina", "Chile", "Peru"], answer: "Brazil" },
            { question: "Andes Mountains.", answer: "The Andes is the longest continental mountain range in the world, running along the western coast of South America." },
            { question: "Atacama Desert.", answer: "The Atacama Desert in Chile is one of the driest places on Earth." },
            { question: "Grasslands.", answer: "The temperate grasslands of South America are called Pampas (Argentina), and tropical grasslands are called Llanos (Venezuela) and Campos (Brazil)." },
            { question: "Location.", answer: "South America is located mostly in the Southern Hemisphere, with a small portion in the Northern Hemisphere. It is bordered by the Pacific and Atlantic Oceans." },
            { question: "Strait of Magellan.", answer: "The Strait of Magellan is a navigable sea route separating mainland South America to the north and Tierra del Fuego to the south." },
            { question: "Lake Titicaca.", answer: "Lake Titicaca, located on the border of Bolivia and Peru, is the highest navigable lake in the world." },
            { question: "Angel Falls.", answer: "Angel Falls in Venezuela is the world's highest uninterrupted waterfall." },
            { question: "Amazon Rainforest.", answer: "The Amazon Rainforest is the world's largest tropical rainforest, known for its immense biodiversity and often called the 'Lungs of the Earth'." },
            { question: "Countries in South America.", answer: "There are 12 independent countries, including Brazil, Argentina, Chile, Peru, Colombia, and Venezuela." },
            { question: "Isthmus of Panama.", answer: "The Isthmus of Panama is the narrow strip of land that connects North America and South America." },
            { question: "Climate.", answer: "The climate varies greatly from tropical in the Amazon basin to arid in the Atacama and polar in the far south." },
            { question: "Wildlife.", answer: "South America is home to unique wildlife like the Anaconda, Jaguar, Llama, Sloth, and Toucan." }
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

            // Clear existing papers for this chapter to avoid duplicates
            await db.run('DELETE FROM question_papers WHERE chapter_id = ?', chapterRow.id);
            
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
