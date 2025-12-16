import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';

interface Question {
    id?: number;
    question: string;
    options?: string[];
    answer?: string;
    marks: number;
}

interface Section {
    name: string;
    questions: Question[];
}

interface QuestionPaper {
    title: string;
    school?: string;
    class?: string;
    subject?: string;
    sections: Section[];
    duration?: string;
    totalMarks?: number;
}

export class PDFService {
    private doc: PDFKit.PDFDocument;
    private pageMargin = 50;
    private pageWidth = 595.28; // A4 width in points
    private pageHeight = 841.89; // A4 height in points
    private currentY = 0;

    constructor() {
        this.doc = new PDFDocument({
            size: 'A4',
            margins: {
                top: this.pageMargin,
                bottom: this.pageMargin,
                left: this.pageMargin,
                right: this.pageMargin
            }
        });
    }

    async generateQuestionPaperPDF(paper: QuestionPaper): Promise<NodeJS.ReadableStream> {
        this.currentY = this.pageMargin;

        // Header
        this.addHeader(paper);
        
        // Instructions box
        this.addInstructions(paper);

        // Sections with questions
        this.addSections(paper);

        // Finalize
        this.doc.end();

        return this.doc;
    }

    private addHeader(paper: QuestionPaper) {
        // School name
        if (paper.school) {
            this.doc
                .fontSize(16)
                .font('Helvetica-Bold')
                .text(paper.school, this.pageMargin, this.currentY, {
                    align: 'center'
                });
            this.currentY += 25;
        }

        // Horizontal line
        this.doc
            .moveTo(this.pageMargin, this.currentY)
            .lineTo(this.pageWidth - this.pageMargin, this.currentY)
            .lineWidth(2)
            .stroke();
        this.currentY += 15;

        // Paper title
        this.doc
            .fontSize(14)
            .font('Helvetica-Bold')
            .text(paper.title, this.pageMargin, this.currentY, {
                align: 'center'
            });
        this.currentY += 25;

        // Class and Subject info
        const leftInfo = paper.class || 'Class 6 ICSE';
        const rightInfo = paper.subject || '';
        
        this.doc
            .fontSize(10)
            .font('Helvetica')
            .text(leftInfo, this.pageMargin, this.currentY, {
                width: (this.pageWidth - 2 * this.pageMargin) / 2,
                align: 'left'
            });

        if (rightInfo) {
            this.doc.text(rightInfo, this.pageWidth / 2, this.currentY, {
                width: (this.pageWidth - 2 * this.pageMargin) / 2,
                align: 'right'
            });
        }
        
        this.currentY += 20;

        // Calculate total marks
        const totalMarks = paper.totalMarks || this.calculateTotalMarks(paper);
        const duration = paper.duration || '1 hour';

        this.doc
            .fontSize(10)
            .font('Helvetica')
            .text(`Duration: ${duration}`, this.pageMargin, this.currentY, {
                width: (this.pageWidth - 2 * this.pageMargin) / 2,
                align: 'left'
            });

        this.doc.text(`Total Marks: ${totalMarks}`, this.pageWidth / 2, this.currentY, {
            width: (this.pageWidth - 2 * this.pageMargin) / 2,
            align: 'right'
        });

        this.currentY += 25;

        // Horizontal line
        this.doc
            .moveTo(this.pageMargin, this.currentY)
            .lineTo(this.pageWidth - this.pageMargin, this.currentY)
            .lineWidth(1)
            .stroke();
        this.currentY += 20;
    }

    private addInstructions(paper: QuestionPaper) {
        const instructions = [
            '1. All questions are compulsory.',
            '2. Read each question carefully before answering.',
            '3. Write your answers neatly and legibly.',
            '4. Marks are indicated against each question.'
        ];

        this.doc
            .fontSize(10)
            .font('Helvetica-Bold')
            .text('General Instructions:', this.pageMargin, this.currentY);
        this.currentY += 15;

        this.doc.font('Helvetica').fontSize(9);
        instructions.forEach(instruction => {
            this.doc.text(instruction, this.pageMargin + 10, this.currentY);
            this.currentY += 15;
        });

        this.currentY += 10;
    }

    private addSections(paper: QuestionPaper) {
        paper.sections.forEach((section, sectionIndex) => {
            this.checkPageBreak(80);

            // Section heading
            this.doc
                .fontSize(12)
                .font('Helvetica-Bold')
                .text(section.name, this.pageMargin, this.currentY);
            this.currentY += 20;

            // Questions
            section.questions.forEach((question, qIndex) => {
                this.addQuestion(question, qIndex + 1, section);
            });

            this.currentY += 15; // Space between sections
        });
    }

    private addQuestion(question: Question, questionNumber: number, section: Section) {
        const questionHeight = this.estimateQuestionHeight(question);
        this.checkPageBreak(questionHeight);

        const startY = this.currentY;

        // Question number and marks
        this.doc
            .fontSize(10)
            .font('Helvetica-Bold')
            .text(`${questionNumber}.`, this.pageMargin, this.currentY, {
                width: 20,
                continued: false
            });

        // Question text
        const questionTextX = this.pageMargin + 25;
        const marksWidth = 60;
        const questionWidth = this.pageWidth - this.pageMargin * 2 - 25 - marksWidth;

        this.doc
            .font('Helvetica')
            .text(question.question, questionTextX, this.currentY, {
                width: questionWidth,
                align: 'left'
            });

        // Marks on the right
        this.doc
            .font('Helvetica-Bold')
            .text(`[${question.marks}]`, this.pageWidth - this.pageMargin - marksWidth, startY, {
                width: marksWidth,
                align: 'right'
            });

        // Move currentY to after question text
        const questionLines = this.doc.heightOfString(question.question, { width: questionWidth });
        this.currentY += questionLines + 5;

        // Add options for MCQ
        if (question.options && question.options.length > 0) {
            const optionLabels = ['(a)', '(b)', '(c)', '(d)', '(e)'];
            question.options.forEach((option, index) => {
                this.doc
                    .fontSize(9)
                    .font('Helvetica')
                    .text(`   ${optionLabels[index]} ${option}`, questionTextX, this.currentY);
                this.currentY += 15;
            });
            this.currentY += 5;
        } else {
            // Add space for written answers
            const answerSpace = question.marks <= 2 ? 40 : question.marks <= 4 ? 80 : 120;
            this.currentY += answerSpace;
        }

        this.currentY += 10; // Space between questions
    }

    private estimateQuestionHeight(question: Question): number {
        let height = 30; // Base height for question

        // Estimate question text height (approximate)
        const wordsInQuestion = question.question.length;
        const estimatedLines = Math.ceil(wordsInQuestion / 80);
        height += estimatedLines * 12;

        // Add height for options
        if (question.options && question.options.length > 0) {
            height += question.options.length * 15 + 10;
        } else {
            // Add height for answer space
            const answerSpace = question.marks <= 2 ? 40 : question.marks <= 4 ? 80 : 120;
            height += answerSpace;
        }

        height += 20; // Spacing

        return height;
    }

    private checkPageBreak(requiredSpace: number) {
        const availableSpace = this.pageHeight - this.pageMargin - this.currentY;
        
        if (availableSpace < requiredSpace) {
            this.doc.addPage();
            this.currentY = this.pageMargin;
        }
    }

    private calculateTotalMarks(paper: QuestionPaper): number {
        let total = 0;
        paper.sections.forEach(section => {
            section.questions.forEach(question => {
                total += question.marks;
            });
        });
        return total;
    }

    // Generate answer key PDF
    async generateAnswerKeyPDF(paper: QuestionPaper): Promise<NodeJS.ReadableStream> {
        this.currentY = this.pageMargin;

        // Header
        this.doc
            .fontSize(16)
            .font('Helvetica-Bold')
            .text('ANSWER KEY', this.pageMargin, this.currentY, {
                align: 'center'
            });
        this.currentY += 20;

        this.doc
            .fontSize(14)
            .font('Helvetica-Bold')
            .text(paper.title, this.pageMargin, this.currentY, {
                align: 'center'
            });
        this.currentY += 30;

        // Horizontal line
        this.doc
            .moveTo(this.pageMargin, this.currentY)
            .lineTo(this.pageWidth - this.pageMargin, this.currentY)
            .lineWidth(1)
            .stroke();
        this.currentY += 20;

        // Answer key content
        paper.sections.forEach((section, sectionIndex) => {
            this.checkPageBreak(60);

            this.doc
                .fontSize(12)
                .font('Helvetica-Bold')
                .text(section.name, this.pageMargin, this.currentY);
            this.currentY += 20;

            section.questions.forEach((question, qIndex) => {
                this.checkPageBreak(40);

                const questionNumber = qIndex + 1;
                
                this.doc
                    .fontSize(10)
                    .font('Helvetica-Bold')
                    .text(`${questionNumber}.`, this.pageMargin, this.currentY, {
                        width: 25,
                        continued: false
                    });

                if (question.answer) {
                    const answerX = this.pageMargin + 30;
                    const answerWidth = this.pageWidth - this.pageMargin * 2 - 30;
                    
                    this.doc
                        .font('Helvetica')
                        .text(question.answer, answerX, this.currentY, {
                            width: answerWidth
                        });

                    const answerHeight = this.doc.heightOfString(question.answer, { width: answerWidth });
                    this.currentY += Math.max(answerHeight, 15) + 10;
                } else {
                    this.doc
                        .font('Helvetica-Oblique')
                        .text('[Answer not provided]', this.pageMargin + 30, this.currentY);
                    this.currentY += 25;
                }
            });

            this.currentY += 15;
        });

        this.doc.end();
        return this.doc;
    }
}

export async function generateQuestionPaperPDF(paper: QuestionPaper): Promise<NodeJS.ReadableStream> {
    const pdfService = new PDFService();
    return pdfService.generateQuestionPaperPDF(paper);
}

export async function generateAnswerKeyPDF(paper: QuestionPaper): Promise<NodeJS.ReadableStream> {
    const pdfService = new PDFService();
    return pdfService.generateAnswerKeyPDF(paper);
}
