import { Request, Response } from 'express';
import { getDb } from '../db/database';
import fs from 'fs';
import path from 'path';

export const uploadDocument = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const { title, type, subject_id } = req.body;
    const filePath = `/uploads/${req.file.filename}`;

    try {
        const db = await getDb();
        const result = await db.run(
            'INSERT INTO documents (title, type, file_path, subject_id) VALUES (?, ?, ?, ?)',
            title, type, filePath, subject_id || null
        );
        res.json({ id: result.lastID, title, type, filePath });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save document metadata' });
    }
};

export const getDocuments = async (req: Request, res: Response) => {
    const { subject_id, type } = req.query;
    try {
        const db = await getDb();
        let query = 'SELECT * FROM documents WHERE 1=1';
        const params = [];

        if (subject_id) {
            query += ' AND subject_id = ?';
            params.push(subject_id);
        }
        if (type) {
            query += ' AND type = ?';
            params.push(type);
        }

        query += ' ORDER BY created_at DESC';

        const documents = await db.all(query, params);
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch documents' });
    }
};

export const deleteDocument = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const db = await getDb();
        const doc = await db.get('SELECT file_path FROM documents WHERE id = ?', id);
        
        if (doc) {
            const absolutePath = path.join(__dirname, '../../', doc.file_path);
            if (fs.existsSync(absolutePath)) {
                fs.unlinkSync(absolutePath);
            }
        }

        await db.run('DELETE FROM documents WHERE id = ?', id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete document' });
    }
};

export const bulkImport = async (req: Request, res: Response) => {
    const { folderPath } = req.body;

    if (!folderPath || !fs.existsSync(folderPath)) {
        return res.status(400).json({ error: 'Invalid folder path' });
    }

    try {
        const files = fs.readdirSync(folderPath);
        const pdfs = files.filter(file => file.toLowerCase().endsWith('.pdf'));
        const db = await getDb();
        const imported = [];

        const uploadDir = path.join(__dirname, '../../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        for (const file of pdfs) {
            const sourcePath = path.join(folderPath, file);
            // Create a unique filename to avoid collisions
            const uniqueName = Date.now() + '-' + file;
            const destPath = path.join(uploadDir, uniqueName);
            const dbPath = `/uploads/${uniqueName}`;

            fs.copyFileSync(sourcePath, destPath);

            // Guess type based on name or default to 'homework'
            let type = 'homework';
            const lowerName = file.toLowerCase();
            if (lowerName.includes('syllabus')) type = 'syllabus';
            else if (lowerName.includes('circular')) type = 'circular';
            else if (lowerName.includes('exam')) type = 'exam_notice';

            const result = await db.run(
                'INSERT INTO documents (title, type, file_path, subject_id) VALUES (?, ?, ?, ?)',
                file.replace('.pdf', ''), type, dbPath, null
            );

            imported.push({ id: result.lastID, title: file, type });
        }

        res.json({ success: true, count: imported.length, imported });

    } catch (error) {
        console.error('Bulk import error:', error);
        res.status(500).json({ error: 'Failed to import documents' });
    }
};
