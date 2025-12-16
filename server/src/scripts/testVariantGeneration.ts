import axios from 'axios';

async function testVariantGeneration() {
    console.log('Testing Paper Variants Generation...\n');

    try {
        // Get subjects
        const subjectsRes = await axios.get('http://localhost:3000/api/subjects');
        const mathSubject = subjectsRes.data.find((s: any) => s.name === 'Maths');
        
        if (!mathSubject) {
            console.log('❌ Math subject not found');
            return;
        }

        console.log(`✅ Found subject: ${mathSubject.name} (ID: ${mathSubject.id})\n`);

        // Get chapters
        const chaptersRes = await axios.get(`http://localhost:3000/api/subjects/${mathSubject.id}/chapters`);
        const chapters = chaptersRes.data.slice(0, 2); // Take first 2 chapters
        
        console.log(`✅ Selected ${chapters.length} chapters:\n`);
        chapters.forEach((c: any) => console.log(`   - ${c.name}`));
        
        console.log('\n📝 Generating 3 variants (Set A, B, C)...');
        console.log('   (This will take a few minutes as AI generates each variant)\n');

        const generateRes = await axios.post('http://localhost:3000/api/generate-questions', {
            subjectId: mathSubject.id,
            chapterIds: chapters.map((c: any) => c.id),
            difficulty: 'Medium',
            questionTypes: {
                mcq: 3,
                veryShort: 2,
                short: 2,
                long: 1,
                numerical: 0
            },
            numVariants: 3
        });

        if (generateRes.data.variants) {
            console.log(`✅ Successfully generated ${generateRes.data.variants.length} variants!\n`);
            
            generateRes.data.variants.forEach((variant: any) => {
                console.log(`   Set ${variant.variantLabel}: "${variant.title}" (Paper ID: ${variant.paperId})`);
            });

            console.log(`\n✨ Variant Set ID: ${generateRes.data.variantSetId}`);
            console.log('\n📊 Testing variant retrieval...');

            // Test fetching all variants of this set
            const variantsRes = await axios.get(`http://localhost:3000/api/variant-sets/${generateRes.data.variantSetId}`);
            console.log(`✅ Retrieved ${variantsRes.data.length} variants from the set\n`);

            // Show question counts for each variant
            generateRes.data.variants.forEach((variant: any, index: number) => {
                const totalQuestions = variant.sections.reduce((sum: number, section: any) => 
                    sum + section.questions.length, 0
                );
                console.log(`   Set ${variant.variantLabel}: ${totalQuestions} questions`);
            });

            console.log('\n✅ All tests passed!');
            console.log('💡 Check the frontend to see the variant selector tabs');

        } else {
            console.log('❌ No variants generated');
        }

    } catch (error: any) {
        console.error('❌ Test failed:', error.message);
        if (error.response) {
            console.error('Response:', error.response.data);
        }
    }
}

testVariantGeneration();
