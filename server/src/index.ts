import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { initDatabase } from './db/database';
import { seedProduction } from './scripts/seedProduction';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`[INFO] AI Provider: ${process.env.AI_PROVIDER || 'ollama'}`);

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Initialize Database and Seed Data
initDatabase().then(async () => {
    console.log('Database initialized');
    // Run seeder in production (or always, since it's idempotent)
    try {
        await seedProduction();
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Seeding failed:', error);
    }

    // Start server only after DB is ready
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database initialization failed:', err);
    process.exit(1);
});

// Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('LearnNest API is running');
});
