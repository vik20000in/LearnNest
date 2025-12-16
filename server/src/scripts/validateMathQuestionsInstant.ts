import { getDb } from '../db/database';
import * as fs from 'fs';
import * as path from 'path';

/**
 * INSTANT VALIDATION - NO AI CALLS
 * Uses keyword matching and heuristics to validate questions
 * Executes in seconds instead of minutes
 */

interface InvalidQuestion {
    chapterName: string;
    paperTitle: string;
    paperId: number;
    sectionName: string;
    questionNumber: number;
    question: string;
    reason: string;
}

// Chapter keywords - questions should contain these
const CHAPTER_KEYWORDS: Record<string, string[]> = {
    "CHAPTER 5 : DECIMAL FRACTIONS": ["decimal", "fraction", "0.", ".", "hundredth", "tenth", "convert"],
    "CHAPTER 7 : SETS": ["set", "element", "subset", "union", "intersection", "∪", "∩", "⊂", "∈", "{ }", "disjoint", "universal", "complement", "venn"],
    "CHAPTER 8: RATIO AND PROPORTION": ["ratio", "proportion", ":", "simplify", "equivalent", "compare"],
    "CHAPTER 10: PERCENTAGE": ["percent", "%", "percentage", "discount", "profit", "loss", "increase", "decrease"],
    "CHAPTER 11 : SPEED ,TIME AND DISTANCE": ["speed", "time", "distance", "km/h", "m/s", "hour", "minute", "travel", "convert"],
    "CHAPTER 12 : FUNDAMENTAL CONCEPTS OF ALGEBRA": ["x", "y", "variable", "expression", "coefficient", "constant", "term", "algebra"],
    "CHAPTER 13 : SIMPLE EQUATIONS": ["solve", "x =", "equation", "variable"],
    "CHAPTER 17 : QUADRILATERALS": ["quadrilateral", "square", "rectangle", "rhombus", "parallelogram", "trapezium", "side", "angle", "diagonal", "perimeter", "area", "cm²", "90°", "360°"],
    "CHAPTER 19 : POLYGONS": ["polygon", "pentagon", "hexagon", "heptagon", "octagon", "sides", "angles", "triangle", "interior", "exterior", "regular"],
    "CHAPTER 20: RECOGNITION OF 3D SHAPES (SOLIDS)": ["cube", "cuboid", "cylinder", "cone", "sphere", "pyramid", "face", "edge", "vertex", "vertices", "3d", "solid", "prism"],
    "CHAPTER 22: GEOMETRICAL CONSTRUCTIONS": ["construct", "compass", "ruler", "protractor", "bisect", "perpendicular", "angle", "draw", "line segment"],
    "CHAPTER 25: GRAPHICAL REPRESENTATION OF DATA": ["graph", "bar", "chart", "pie", "data", "pictograph", "x-axis", "y-axis", "plot", "represent", "scale", "title"],
    "CHAPTER 26 : MEAN AND MEDIAN": ["mean", "median", "average", "data", "arrange", "middle", "sum", "divide", "value"]
};

// Invalid question patterns - questions with these are likely wrong
const INVALID_PATTERNS: RegExp[] = [
    /^What is \d+ [+\-×÷] \d+\?$/i, // Simple arithmetic like "What is 25 + 37?"
    /^Find the (LCM|HCF|GCD)/i, // LCM/HCF questions
    /^What is \d+²\?$/i, // Simple squaring
    /^Calculate: \d+/i, // Simple calculations
];

const validateQuestion = (question: string, chapterName: string): { valid: boolean; reason?: string } => {
    const questionLower = question.toLowerCase();
    
    // Check for invalid patterns first
    for (const pattern of INVALID_PATTERNS) {
        if (pattern.test(question)) {
            return {
                valid: false,
                reason: "Basic arithmetic operation not related to chapter topic"
            };
        }
    }
    
    // Get keywords for this chapter
    const keywords = CHAPTER_KEYWORDS[chapterName];
    if (!keywords) {
        // No keywords defined, assume valid
        return { valid: true };
    }
    
    // Check if question contains any chapter keyword
    const hasKeyword = keywords.some(keyword => 
        questionLower.includes(keyword.toLowerCase())
    );
    
    if (!hasKeyword) {
        return {
            valid: false,
            reason: `Question does not contain relevant keywords for ${chapterName}. Expected words like: ${keywords.slice(0, 5).join(', ')}`
        };
    }
    
    return { valid: true };
};

const validateMathQuestionsInstant = async () => {
    console.log('⚡ INSTANT VALIDATION - No AI calls, keyword-based heuristics!\n');
    console.log('🔍 Starting validation of Math questions...\n');

    const db = await getDb();
    const invalidQuestions: InvalidQuestion[] = [];
    
    // Get all Math papers
    const papers = await db.all(`
        SELECT qp.id, qp.title, qp.content, c.name as chapterName
        FROM question_papers qp
        JOIN chapters c ON qp.chapter_id = c.id
        JOIN subjects s ON c.subject_id = s.id
        WHERE s.name = 'Maths'
        ORDER BY c.name, qp.title
    `);

    console.log(`Found ${papers.length} Math papers to validate\n`);

    let totalQuestions = 0;
    let totalInvalid = 0;
    const chapterSummary: Record<string, number> = {};

    for (const paper of papers) {
        try {
            const content = JSON.parse(paper.content);
            const sections = content.sections || [];

            for (const section of sections) {
                if (!section.questions || !Array.isArray(section.questions)) continue;

                for (let i = 0; i < section.questions.length; i++) {
                    const q = section.questions[i];
                    totalQuestions++;

                    const validation = validateQuestion(q.question, paper.chapterName);
                    
                    if (!validation.valid) {
                        invalidQuestions.push({
                            chapterName: paper.chapterName,
                            paperTitle: paper.title,
                            paperId: paper.id,
                            sectionName: section.name || section.type,
                            questionNumber: i + 1,
                            question: q.question,
                            reason: validation.reason || "Invalid question"
                        });
                        
                        totalInvalid++;
                        chapterSummary[paper.chapterName] = (chapterSummary[paper.chapterName] || 0) + 1;
                    }
                }
            }
        } catch (error: any) {
            console.error(`❌ Error processing paper ${paper.id}: ${error.message}`);
        }
    }

    // Save report
    const reportPath = path.join(__dirname, '../../math_validation_report_instant.json');
    fs.writeFileSync(reportPath, JSON.stringify(invalidQuestions, null, 2));

    // Print summary
    console.log(`\n${'='.repeat(80)}`);
    console.log('📊 VALIDATION SUMMARY');
    console.log(`${'='.repeat(80)}`);
    console.log(`Total papers checked: ${papers.length}`);
    console.log(`Total questions validated: ${totalQuestions}`);
    console.log(`Invalid questions found: ${totalInvalid}`);
    console.log(`Success rate: ${((totalQuestions - totalInvalid) / totalQuestions * 100).toFixed(1)}%`);
    console.log(`${'='.repeat(80)}\n`);

    if (Object.keys(chapterSummary).length > 0) {
        console.log('📋 Invalid Questions by Chapter:');
        console.log('-'.repeat(80));
        for (const [chapter, count] of Object.entries(chapterSummary).sort((a, b) => b[1] - a[1])) {
            console.log(`   ${chapter}: ${count} invalid`);
        }
        console.log(`${'='.repeat(80)}\n`);
    }

    console.log(`📄 Detailed report saved to: math_validation_report_instant.json`);
    console.log(`💡 To fix issues, run: npm run fix:math:instant\n`);
    
    return invalidQuestions;
};

// Run the script
validateMathQuestionsInstant()
    .then(() => {
        console.log('✅ Validation complete!');
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Error:', error);
        process.exit(1);
    });
