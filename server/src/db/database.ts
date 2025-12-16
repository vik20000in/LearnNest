import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

let db: Database | null = null;

export const initDatabase = async () => {
    if (db) return db;

    db = await open({
        filename: path.join(__dirname, '../../learnnest.sqlite'),
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS subjects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS chapters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            syllabus TEXT,
            FOREIGN KEY (subject_id) REFERENCES subjects(id)
        );

        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            type TEXT NOT NULL, -- 'circular', 'homework', 'exam_notice', 'syllabus'
            file_path TEXT NOT NULL,
            subject_id INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (subject_id) REFERENCES subjects(id)
        );

        CREATE TABLE IF NOT EXISTS question_papers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            content TEXT NOT NULL, -- JSON string
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (subject_id) REFERENCES subjects(id)
        );

        CREATE TABLE IF NOT EXISTS flashcards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            chapter_id INTEGER NOT NULL,
            front TEXT NOT NULL,
            back TEXT NOT NULL,
            FOREIGN KEY (chapter_id) REFERENCES chapters(id)
        );
    `);

    // Seed Subjects
    const subjects = ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Computer'];
    for (const subject of subjects) {
        await db.run('INSERT OR IGNORE INTO subjects (name) VALUES (?)', subject);
    }

    return db;
};

export const getDb = async () => {
    if (!db) {
        await initDatabase();
    }
    return db!;
};
