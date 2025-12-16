# LearnNest - ICSE Class 6 Study Companion

LearnNest is a personal web application designed to help Class 6 ICSE students generate practice question papers, manage their syllabus, and organize school documents.

## Features

- **AI Question Generator**: Create custom question papers (MCQs, Short/Long Answer) based on specific chapters and difficulty levels.
- **Pre-Generated Papers**: Access a library of Annual Examination papers and Chapter-wise practice papers stored in the database.
- **Detailed Answer Keys**: Toggle comprehensive answer keys with step-by-step explanations for Math and detailed paragraphs for Theory subjects.
- **Syllabus Manager**: Keep track of chapters and syllabus details for all subjects.
- **Document Vault**: Store and organize homework, circulars, and exam notices.
- **Student-Friendly UI**: Simple, distraction-free interface with subject filtering and full syllabus selection.
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

    **Seed Database (Optional but Recommended):**
    Populate the database with pre-defined annual and chapter-wise papers:
    ```bash
    # Seeds annual papers
    npm run seed:annual
    
    # Seeds detailed chapter-wise questions for all subjects
    npx ts-node src/scripts/seedNewSyllabusQuestions.ts
    ```

3.  **Setup Frontend**
    ```bash
    cd ..
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
    # From the root directory
    npm run dev
    ```

3.  Open your browser at `http://localhost:5173`

## How AI Works

The application uses Large Language Models (LLMs) to generate questions.
- **Prompt Engineering**: We construct a detailed prompt including the subject, selected chapters, syllabus context, and difficulty level.
- **Context**: The syllabus text you enter for each chapter is sent to the AI to ensure questions are relevant.
- **Output**: The AI returns a structured JSON format which the app renders into a printable paper.
- **Storage**: Generated papers are automatically saved to the database for future reference.

## Future Feature Ideas

Here are some planned features to enhance the learning experience:

1.  **Progress Tracking**: Visual graphs showing performance over time based on self-evaluation scores.
2.  **Flashcards**: Auto-generate flashcards from the syllabus for quick revision of key terms and definitions.
3.  **Gamification**: Earn badges and streaks for completing daily practice papers.
4.  **PDF Export**: Native PDF export for question papers with professional formatting for printing.
5.  **Voice Mode**: Oral quiz mode where the app asks questions and the student answers verbally (using speech-to-text).
6.  **Mistake Log**: A dedicated section to record and review questions that were answered incorrectly.
7.  **Custom Timer**: Adjustable timer for practice papers to simulate real exam conditions.
8.  **Parent Dashboard**: A simple view for parents to see topics covered and recent activity.

## Adding Subjects/Classes

Currently, the app is seeded with Class 6 subjects. You can add more subjects or chapters directly through the "Syllabus" page in the application.

