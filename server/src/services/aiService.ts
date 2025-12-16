import axios from 'axios';

interface AIConfig {
    model: string;
    baseUrl: string; // Ollama base URL (default http://localhost:11434)
}

// Default configuration - Ollama is free and runs locally, no API key needed
const config: AIConfig = {
    model: process.env.AI_MODEL || 'mistral',
    baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434'
};

export const generateText = async (prompt: string): Promise<string> => {
    console.log(`Generating text using Ollama (${config.model})...`);
    return generateOllama(prompt);
};

export const generateQuestions = generateText;

const generateOllama = async (prompt: string): Promise<string> => {
    const url = `${config.baseUrl}/api/generate`;
    
    try {
        const response = await axios.post(url, {
            model: config.model,
            prompt: prompt,
            stream: false,
            options: {
                temperature: 0.7,
                num_predict: 1024
            }
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 120000 // 2 minute timeout for generation
        });

        return response.data.response;

    } catch (error: any) {
        if (error.code === 'ECONNREFUSED') {
            throw new Error(`
❌ Cannot connect to Ollama!

Please install and start Ollama:
1. Download from: https://ollama.ai/download
2. Install and run Ollama
3. Pull the model: ollama pull ${config.model}
4. Verify it's running: ollama list

Then run this script again.
            `.trim());
        }
        console.error('AI Generation Error (Ollama):', error);
        throw new Error('Failed to generate text using Ollama: ' + error.message);
    }
};
