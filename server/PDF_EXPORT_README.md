# PDF Export Feature

Professional PDF export for question papers with printing-ready formatting.

## Features

✨ **Question Paper PDF**
- Professional A4 format layout
- School header and paper title
- Duration and total marks display
- General instructions section
- Structured sections with proper spacing
- Question numbering with marks allocation
- Multiple choice options formatted clearly
- Appropriate answer space for written questions
- Automatic page breaks to avoid content splitting

✨ **Answer Key PDF**
- Separate answer key document
- Same professional formatting
- Question-by-question answers
- Clear section organization
- Ideal for teachers and evaluation

## API Endpoints

### Export Question Paper
```
GET /api/papers/:id/export-pdf
```
Downloads the question paper as a PDF file.

**Response**: PDF file (application/pdf)

### Export Answer Key
```
GET /api/papers/:id/export-answer-key
```
Downloads the answer key as a PDF file.

**Response**: PDF file (application/pdf)

## Usage

### From Frontend
The Question Generator page includes two export buttons:
1. **Export PDF** - Downloads the question paper
2. **Answer Key** - Downloads the answer key with solutions

### From API (Example)
```typescript
// Download question paper PDF
const response = await axios.get(
  `/api/papers/${paperId}/export-pdf`,
  { responseType: 'blob' }
);

// Create download link
const url = window.URL.createObjectURL(new Blob([response.data]));
const link = document.createElement('a');
link.href = url;
link.setAttribute('download', 'question-paper.pdf');
document.body.appendChild(link);
link.click();
```

### From Scripts
```bash
# Test PDF generation
npm run tsx src/scripts/testPDFGeneration.ts

# Test API endpoints
npm run tsx src/scripts/testPDFEndpoint.ts
```

## Technical Details

### Dependencies
- **pdfkit**: PDF generation library
- **@types/pdfkit**: TypeScript definitions

### PDF Layout Specifications
- **Page Size**: A4 (595.28 x 841.89 points)
- **Margins**: 50 points on all sides
- **Fonts**: Helvetica family (Bold, Regular, Oblique)
- **Header**: 
  - School name (16pt, Bold)
  - Paper title (14pt, Bold)
  - Class/Subject info (10pt)
  - Duration and marks (10pt)
- **Instructions**: 9-10pt with bullet points
- **Questions**: 
  - Number (Bold) + Question text (Regular)
  - Marks displayed in brackets on right
  - MCQ options in grid layout
  - Answer space proportional to marks

### Answer Space Allocation
- **1-2 marks**: 40 points (~1.4 cm)
- **3-4 marks**: 80 points (~2.8 cm)
- **5+ marks**: 120 points (~4.2 cm)

### Page Break Logic
The system automatically:
- Estimates question height including options and answer space
- Checks remaining space on current page
- Adds page break if insufficient space
- Prevents questions from splitting across pages

## File Structure

```
server/
├── src/
│   ├── services/
│   │   └── pdfService.ts          # PDF generation service
│   ├── controllers/
│   │   └── questionController.ts  # Export endpoints
│   ├── routes/
│   │   └── api.ts                 # Route definitions
│   └── scripts/
│       ├── testPDFGeneration.ts   # Direct PDF test
│       └── testPDFEndpoint.ts     # API endpoint test
└── test-pdfs/                     # Generated test PDFs
```

## Customization

### Modify Layout
Edit `server/src/services/pdfService.ts`:

```typescript
// Change margins
private pageMargin = 50; // Change to desired margin

// Modify header styling
this.doc
    .fontSize(16)  // Change font size
    .font('Helvetica-Bold')  // Change font
    .text(paper.school, ...);

// Adjust answer space
const answerSpace = question.marks <= 2 ? 40 : 
                    question.marks <= 4 ? 80 : 120;
```

### Add Custom Instructions
In `pdfService.ts`, modify the `addInstructions` method:

```typescript
const instructions = [
    '1. Your custom instruction here',
    '2. Another instruction',
    // Add more instructions
];
```

## Testing

### Unit Tests
```bash
# Generate PDFs from database content
npx tsx src/scripts/testPDFGeneration.ts
```

Output files:
- `test-pdfs/test-question-paper.pdf`
- `test-pdfs/test-answer-key.pdf`

### Integration Tests
```bash
# Test through API endpoints
npx tsx src/scripts/testPDFEndpoint.ts
```

Output files:
- `test-pdfs/api-test-question-paper.pdf`
- `test-pdfs/api-test-answer-key.pdf`

## Examples

### Sample Question Paper Structure
```json
{
  "title": "Practice Paper - Decimal Fractions",
  "school": "LearnNest School",
  "class": "Class 6 ICSE",
  "subject": "Mathematics",
  "sections": [
    {
      "name": "Section A: Multiple Choice",
      "questions": [
        {
          "id": 1,
          "question": "What is 0.5 as a fraction?",
          "options": ["1/2", "1/4", "1/3", "2/3"],
          "answer": "1/2",
          "marks": 1
        }
      ]
    },
    {
      "name": "Section B: Short Answer",
      "questions": [
        {
          "id": 2,
          "question": "Explain what a decimal fraction is.",
          "answer": "A decimal fraction represents part of a whole using decimal notation...",
          "marks": 3
        }
      ]
    }
  ]
}
```

## Troubleshooting

### PDF Generation Fails
- Check if `pdfkit` is installed: `npm install pdfkit @types/pdfkit`
- Verify paper content is valid JSON
- Check server logs for detailed errors

### Blank PDFs
- Ensure question paper has `sections` array
- Verify each section has `questions` array
- Check that questions have required fields

### Formatting Issues
- Review font sizes in `pdfService.ts`
- Adjust margin calculations
- Check page break logic for your content

## Future Enhancements

Potential improvements:
- [ ] Custom logo/header images
- [ ] Configurable color schemes
- [ ] Multiple language support
- [ ] Watermark support
- [ ] QR code for digital verification
- [ ] Student information fields
- [ ] Barcode for exam identification
- [ ] Digital signature support

## Support

For issues or questions:
1. Check test scripts output
2. Review server logs
3. Verify PDF structure in database
4. Test with sample papers first
