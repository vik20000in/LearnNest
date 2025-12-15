import axios from 'axios';

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

export const generateQuestions = async (prompt: string): Promise<string> => {
    console.log(`Generating questions using ${config.provider}...`);
    
    if (config.provider === 'huggingface') {
        return generateHuggingFace(prompt);
    } else {
        return generateOllama(prompt);
    }
};

const generateHuggingFace = async (prompt: string): Promise<string> => {
    if (!config.apiKey) {
        throw new Error('HuggingFace API Key is missing');
    }
    
    const model = config.model || 'mistralai/Mistral-7B-Instruct-v0.2';
    const url = `https://api-inference.huggingface.co/models/${model}`;

    try {
        const response = await axios.post(url, { 
            inputs: prompt,
            parameters: {
                max_new_tokens: 1024,
                temperature: 0.7,
                return_full_text: false
            }
        }, {
            headers: {
                'Authorization': `Bearer ${config.apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const result = response.data;
        // HuggingFace Inference API returns an array of objects with 'generated_text'
        if (Array.isArray(result) && result.length > 0) {
            return result[0].generated_text;
        } else if (typeof result === 'object' && result.generated_text) {
             return result.generated_text;
        }
        
        return JSON.stringify(result);

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
