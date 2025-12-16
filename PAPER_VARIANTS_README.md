# Paper Variants Feature

Generate multiple parallel versions (Set A, B, C, etc.) of the same exam with different questions but identical structure and difficulty level.

## Overview

The Paper Variants feature allows you to create multiple versions of the same examination paper - perfect for:
- **Group Study Sessions**: Different students practice with different questions
- **Exam Administration**: Reduce cheating by distributing different sets to adjacent students
- **Practice Variety**: Multiple attempts with fresh questions on the same topics
- **Sibling Use**: Different papers for students in the same grade

## Features

### ✨ Core Capabilities

- **Generate 2-5 Variants**: Create Set A, B, C, D, E with a single click
- **Identical Structure**: All variants have the same:
  - Question distribution (e.g., 5 MCQs, 3 Short, 2 Long)
  - Difficulty level (Easy/Medium/Hard)
  - Total marks
  - Subject and chapter coverage
  - Time allocation
  
- **Different Questions**: Each variant has completely unique questions testing the same concepts
- **Unified Management**: All variants are linked together for easy tracking
- **Individual Export**: Export any variant as PDF independently

### 🎯 Use Cases

1. **School Tests**: Generate 3-4 variants for classroom distribution
2. **Practice Sessions**: Create multiple versions for repeated practice
3. **Tuition Centers**: Distribute different sets to multiple batches
4. **Home Study**: Parents with multiple children can give different papers

## How to Use

### From Frontend (Custom Generator)

1. **Navigate** to Question Generator → Custom Generator tab
2. **Select** subject and chapters as usual
3. **Configure** question types and difficulty
4. **Choose Variants**: Select "2 Variants (Set A, B)" up to "5 Variants"
5. **Click** "Generate X Variants" button
6. **Wait**: Generation takes longer (1-2 min per variant)
7. **View**: Switch between variants using the Set A/B/C tabs
8. **Export**: Download any variant as PDF

### From API

```typescript
// Generate 3 variants
const response = await axios.post('/api/generate-questions', {
    subjectId: 1,
    chapterIds: [5, 6, 7],
    difficulty: 'Medium',
    questionTypes: {
        mcq: 5,
        veryShort: 3,
        short: 3,
        long: 2
    },
    numVariants: 3  // 2-5 variants
});

// Response format
{
    variants: [
        {
            paperId: 101,
            variantLabel: 'A',
            title: 'Math Practice - Set A',
            sections: [...]
        },
        {
            paperId: 102,
            variantLabel: 'B',
            title: 'Math Practice - Set B',
            sections: [...]
        },
        {
            paperId: 103,
            variantLabel: 'C',
            title: 'Math Practice - Set C',
            sections: [...]
        }
    ],
    variantSetId: 'variant_1734355200000',
    message: 'Successfully generated 3 variant(s)'
}
```

### From Scripts

```bash
# Create sample variants for testing
npx tsx src/scripts/createSampleVariants.ts

# Test AI-based variant generation (requires AI configured)
npx tsx src/scripts/testVariantGeneration.ts
```

## Database Schema

### New Fields in `question_papers` Table

```sql
-- Links papers that are variants of each other
variant_set_id TEXT

-- Identifies which variant (A, B, C, D, E)
variant_label TEXT
```

### Migration

Run this script to add variant fields:
```bash
npx tsx src/scripts/addVariantFields.ts
```

## API Endpoints

### Generate Paper with Variants
```
POST /api/generate-questions
Body: {
    subjectId: number,
    chapterIds: number[],
    difficulty: string,
    questionTypes: object,
    numVariants?: number  // 2-5 (optional, defaults to 1)
}
```

### Get Variants by Set ID
```
GET /api/variant-sets/:variantSetId
Response: Array of papers in the same variant set
```

### Get All Papers (includes variant info)
```
GET /api/papers
Response: Papers with variant_set_id and variant_label fields
```

## UI Components

### Variant Selector (Custom Generator)

Located in the generation form after "Question Distribution":

```tsx
<select value={numVariants} onChange={...}>
  <option value={1}>Single Paper</option>
  <option value={2}>2 Variants (Set A, B)</option>
  <option value={3}>3 Variants (Set A, B, C)</option>
  <option value={4}>4 Variants (Set A, B, C, D)</option>
  <option value={5}>5 Variants (Set A, B, C, D, E)</option>
</select>
```

### Variant Tabs (Preview Area)

After generating variants, tabs appear to switch between sets:
```
[ Set A ] [ Set B ] [ Set C ]
```

### Variant Badges (Paper List)

Papers with variants show colored badges:
```
[Set A] Math Practice Paper - Set A
[Set B] Math Practice Paper - Set B
[Set C] Math Practice Paper - Set C
```

## Technical Details

### AI Prompt Enhancement

For each variant, the system adds:
```
IMPORTANT: This is Set {label}. Generate DIFFERENT questions 
than any previous sets, but maintain the same difficulty level 
and structure.
```

This ensures:
- Questions are unique across variants
- Difficulty remains consistent
- Structure/format is identical

### Generation Process

1. **User selects** number of variants (2-5)
2. **System generates** unique variant_set_id
3. **For each variant**:
   - Modify prompt to specify variant label
   - Call AI to generate questions
   - Parse and validate response
   - Save to database with variant tracking
4. **Return** all variants to frontend
5. **Display** with tab selector

### Performance Considerations

- **Sequential Generation**: Variants are generated one after another
- **Time Estimation**: ~30-60 seconds per variant (AI dependent)
- **Total Time**: 2 variants = 1-2 min, 5 variants = 2.5-5 min
- **Concurrent Requests**: Not supported (to maintain question uniqueness)

## Examples

### Example 1: Create 2 Variants for Math Quiz

```typescript
{
    subjectId: 1,  // Maths
    chapterIds: [8, 9],  // Fractions, Decimals
    difficulty: 'Easy',
    questionTypes: {
        mcq: 10,
        veryShort: 0,
        short: 0,
        long: 0
    },
    numVariants: 2
}
```

**Result**: Two 10-question MCQ papers on Fractions & Decimals

### Example 2: Create 3 Variants for Science Test

```typescript
{
    subjectId: 3,  // Science
    chapterIds: [15, 16, 17],  // Plants, Animals, Human Body
    difficulty: 'Medium',
    questionTypes: {
        mcq: 5,
        veryShort: 5,
        short: 3,
        long: 2
    },
    numVariants: 3
}
```

**Result**: Three identical-structure papers with 15 questions each

### Example 3: Create 5 Variants for English

```typescript
{
    subjectId: 2,  // English
    chapterIds: [20, 21, 22],
    difficulty: 'Hard',
    questionTypes: {
        mcq: 0,
        veryShort: 3,
        short: 5,
        long: 3
    },
    numVariants: 5
}
```

**Result**: Five comprehensive English papers (Set A through E)

## Best Practices

### 1. Variant Count Selection
- **2 Variants**: Small classes (20-30 students)
- **3 Variants**: Medium classes (30-50 students)
- **4-5 Variants**: Large classes or multiple batches

### 2. Question Distribution
- Keep question count manageable (10-20 questions total)
- Balanced distribution across difficulty levels
- More questions = more variation between sets

### 3. Chapter Selection
- Select 2-4 chapters for best variety
- More chapters = more unique questions possible
- Single chapter may have repetitive variants

### 4. Timing
- Generate variants during off-peak hours
- Allow sufficient time for generation
- Generate in advance, not right before use

## Troubleshooting

### Issue: Variants are too similar

**Solution**: 
- Select more chapters
- Increase number of questions
- Check AI prompt clarity

### Issue: Generation fails midway

**Solution**:
- Check AI service availability
- Reduce number of variants
- Retry with simpler configuration

### Issue: One variant missing

**Solution**:
- Check server logs for that specific variant
- Some variants may fail while others succeed
- Can manually generate the missing variant

### Issue: Papers don't appear in list

**Solution**:
- Refresh the papers list (F5)
- Check database for variant records
- Verify variant_set_id is properly saved

## Future Enhancements

Potential improvements:
- [ ] Bulk export all variants as single ZIP
- [ ] Answer key comparison across variants
- [ ] Difficulty verification across variants
- [ ] Parallel generation for faster processing
- [ ] Variant difficulty analysis
- [ ] Auto-suggest optimal variant count
- [ ] Variant preview before saving
- [ ] Student assignment tracking

## Database Queries

### Find all variant sets
```sql
SELECT variant_set_id, COUNT(*) as count, MIN(variant_label) as labels
FROM question_papers
WHERE variant_set_id IS NOT NULL
GROUP BY variant_set_id;
```

### Get specific variant set
```sql
SELECT * FROM question_papers
WHERE variant_set_id = 'variant_1734355200000'
ORDER BY variant_label;
```

### Count papers by variant label
```sql
SELECT variant_label, COUNT(*) as count
FROM question_papers
WHERE variant_label IS NOT NULL
GROUP BY variant_label;
```

## Support

For issues or questions:
1. Check sample variants work correctly
2. Review server logs during generation
3. Verify AI service configuration
4. Test with fewer variants first
5. Check database migration completed successfully
