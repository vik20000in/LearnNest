import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { initDatabase } from './db/database';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`[INFO] AI Provider: ${process.env.AI_PROVIDER || 'ollama'}`);

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Initialize Database
initDatabase().then(() => {
    console.log('Database initialized');
}).catch(err => {
    console.error('Database initialization failed:', err);
});

// Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('LearnNest API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
