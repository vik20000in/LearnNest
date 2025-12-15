import fs from 'fs';
import path from 'path';
import { initDatabase } from '../db/database';

const SOURCE_PATH = 'C:\\Users\\vikra\\Documents\\Applications\\LearnNest\\CLASS VI( REVIEW TEST II & ANNUAL)  SYLLABUS.pdf';
const DEST_DIR = path.join(__dirname, '../../uploads');
const DEST_FILENAME = 'Class_VI_Syllabus_2025-26.pdf';
const DEST_PATH = path.join(DEST_DIR, DEST_FILENAME);

async function addDocument() {
    if (!fs.existsSync(SOURCE_PATH)) {
        console.error('Source file not found');
        return;
    }

    if (!fs.existsSync(DEST_DIR)) {
        fs.mkdirSync(DEST_DIR, { recursive: true });
    }

    console.log('Copying file...');
    fs.copyFileSync(SOURCE_PATH, DEST_PATH);

    console.log('Adding to database...');
    const db = await initDatabase();
    
    await db.run(
        'INSERT INTO documents (title, type, file_path, subject_id) VALUES (?, ?, ?, ?)',
        'Class VI Syllabus (Review Test II & Annual)', 
        'syllabus', 
        '/uploads/' + DEST_FILENAME, 
        null
    );

    console.log('Document added successfully!');
}

addDocument();
