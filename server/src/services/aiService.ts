import axios from 'axios';
import { HfInference } from '@huggingface/inference';

interface AIConfig {
    provider: 'huggingface' | 'ollama';
    model?: string;
    apiKey?: string; // For HuggingFace
    baseUrl?: string; // For Ollama (default http://localhost:11434)
}

// Default configuration - can be overridden by env vars
const config: AIConfig = {
    provider: (process.env.AI_PROVIDER as 'huggingface' | 'ollama') || 'ollama',
    model: process.env.AI_MODEL || 'mistral',
    apiKey: process.env.HF_API_KEY,
    baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434'
};

export const generateText = async (prompt: string): Promise<string> => {
    console.log(`Generating text using ${config.provider}...`);
    
    if (config.provider === 'huggingface') {
        return generateHuggingFace(prompt);
    } else {
        return generateOllama(prompt);
    }
};

export const generateQuestions = generateText;

const generateHuggingFace = async (prompt: string): Promise<string> => {
    if (!config.apiKey) {
        throw new Error('HuggingFace API Key is missing');
    }
    
    const hf = new HfInference(config.apiKey);
    const model = config.model || 'mistralai/Mistral-7B-Instruct-v0.3';

    try {
        const response = await hf.textGeneration({
            model: model,
            inputs: prompt,
            parameters: {
                max_new_tokens: 1024,
                temperature: 0.7,
                return_full_text: false
            }
        });

        return response.generated_text;

    } catch (error) {
        console.error('AI Generation Error (HF):', error);
        throw error;
    }
};

const generateOllama = async (prompt: string): Promise<string> => {
    const url = `${config.baseUrl}/api/generate`;
    
    try {
        const response = await axios.post(url, {
            model: config.model,
            prompt: prompt,
            stream: false
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data.response;

    } catch (error) {
        console.error('AI Generation Error (Ollama):', error);
        throw new Error('Failed to connect to local AI (Ollama). Make sure Ollama is installed and running.');
    }
};
