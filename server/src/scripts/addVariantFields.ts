import { initDatabase } from '../db/database';

async function addVariantFields() {
    console.log('Adding variant tracking fields to question_papers table...\n');
    
    const db = await initDatabase();
    
    try {
        // Add variant_set_id column (links papers that are variants of each other)
        await db.run(`
            ALTER TABLE question_papers 
            ADD COLUMN variant_set_id TEXT
        `);
        console.log('✅ Added variant_set_id column');
        
        // Add variant_label column (A, B, C, etc.)
        await db.run(`
            ALTER TABLE question_papers 
            ADD COLUMN variant_label TEXT
        `);
        console.log('✅ Added variant_label column');
        
        console.log('\n✨ Database migration completed successfully!');
        
    } catch (error: any) {
        if (error.message.includes('duplicate column name')) {
            console.log('⚠️  Columns already exist, skipping migration');
        } else {
            throw error;
        }
    }
}

addVariantFields().catch(console.error);
