import { Request, Response } from 'express';
import { getDb } from '../db/database';

export const getAllSubjects = async (req: Request, res: Response) => {
    try {
        const db = await getDb();
        const subjects = await db.all('SELECT * FROM subjects');
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch subjects' });
    }
};

export const getChaptersBySubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const db = await getDb();
        const chapters = await db.all('SELECT * FROM chapters WHERE subject_id = ?', id);
        res.json(chapters);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch chapters' });
    }
};

export const createChapter = async (req: Request, res: Response) => {
    const { subject_id, name, syllabus } = req.body;
    try {
        const db = await getDb();
        const result = await db.run(
            'INSERT INTO chapters (subject_id, name, syllabus) VALUES (?, ?, ?)',
            subject_id, name, syllabus
        );
        res.json({ id: result.lastID, subject_id, name, syllabus });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create chapter' });
    }
};

export const updateChapterSyllabus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { syllabus } = req.body;
    try {
        const db = await getDb();
        await db.run('UPDATE chapters SET syllabus = ? WHERE id = ?', syllabus, id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update syllabus' });
    }
};
