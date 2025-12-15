# LearnNest - ICSE Class 6 Study Companion

LearnNest is a personal web application designed to help Class 6 ICSE students generate practice question papers, manage their syllabus, and organize school documents.

## Features

- **AI Question Generator**: Create custom question papers (MCQs, Short/Long Answer) based on specific chapters and difficulty levels.
- **Syllabus Manager**: Keep track of chapters and syllabus details for all subjects.
- **Document Vault**: Store and organize homework, circulars, and exam notices.
- **Student-Friendly UI**: Simple, distraction-free interface.
- **Local & Private**: Runs locally on your computer. No data tracking.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Database**: SQLite (Local file-based database)
- **AI**: Supports HuggingFace Inference API (Free) or Local Ollama

## Prerequisites

- Node.js (v16 or higher)
- (Optional) Ollama installed for local AI generation

## Installation & Setup

1.  **Clone/Open the project**
    Navigate to the project folder:
    ```bash
    cd LearnNest
    ```

2.  **Setup Backend**
    ```bash
    cd server
    npm install
    ```
    
    **Configure AI:**
    Create a `.env` file in the `server` directory:
    ```env
    PORT=3000
    # Options: 'huggingface' or 'ollama'
    AI_PROVIDER=huggingface 
    
    # If using HuggingFace (Get free token from https://huggingface.co/settings/tokens)
    HF_API_KEY=your_huggingface_api_key
    AI_MODEL=mistralai/Mistral-7B-Instruct-v0.2

    # If using Ollama (Local)
    # AI_PROVIDER=ollama
    # OLLAMA_BASE_URL=http://localhost:11434
    # AI_MODEL=mistral
    ```

3.  **Setup Frontend**
    ```bash
    cd ../frontend
    npm install
    ```

## Running the Application

You need to run both the server and the frontend.

1.  **Start Backend** (Terminal 1)
    ```bash
    cd server
    npm run dev
    ```

2.  **Start Frontend** (Terminal 2)
    ```bash
    cd frontend
    npm run dev
    ```

3.  Open your browser at `http://localhost:5173`

## How AI Works

The application uses Large Language Models (LLMs) to generate questions.
- **Prompt Engineering**: We construct a detailed prompt including the subject, selected chapters, syllabus context, and difficulty level.
- **Context**: The syllabus text you enter for each chapter is sent to the AI to ensure questions are relevant.
- **Output**: The AI returns a structured JSON format which the app renders into a printable paper.

## Adding Subjects/Classes

Currently, the app is seeded with Class 6 subjects.
To add more:
1.  Go to `server/src/db/database.ts`.
2.  Add new subjects to the `subjects` array in the `initDatabase` function.
3.  Restart the server.

## Troubleshooting

- **AI Error**: If using HuggingFace, ensure your API key is correct. If using Ollama, ensure the Ollama app is running and you have pulled the model (`ollama pull mistral`).
- **Database**: If you want to reset the data, delete the `learnnest.sqlite` file in the root folder and restart the server.

