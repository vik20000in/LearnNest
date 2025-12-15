import express from 'express';
import * as subjectController from '../controllers/subjectController';
import * as questionController from '../controllers/questionController';
import * as documentController from '../controllers/documentController';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Subject Routes
router.get('/subjects', subjectController.getAllSubjects);
router.get('/subjects/:id/chapters', subjectController.getChaptersBySubject);
router.post('/chapters', subjectController.createChapter);
router.put('/chapters/:id', subjectController.updateChapterSyllabus);

// Question Generation Routes
router.post('/generate-questions', questionController.generatePaper);
router.get('/papers', questionController.getStoredPapers);
router.get('/papers/:id', questionController.getStoredPaperById);


// Document Routes
router.post('/documents', upload.single('file'), documentController.uploadDocument);
router.post('/documents/import', documentController.bulkImport);
router.get('/documents', documentController.getDocuments);
router.delete('/documents/:id', documentController.deleteDocument);

export default router;
