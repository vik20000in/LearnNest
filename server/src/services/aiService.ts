import axios from 'axios';

interface AIConfig {
    provider: 'openai' | 'ollama'; // Choose AI provider
    model: string;
    baseUrl: string;
    apiKey?: string;
}

// Configuration - OpenAI is 10-50x faster than Ollama for development
const config: AIConfig = {
    provider: (process.env.AI_PROVIDER as 'openai' | 'ollama') || 'ollama',
    model: process.env.AI_MODEL || (process.env.AI_PROVIDER === 'openai' ? 'gpt-4o-mini' : 'mistral'),
    baseUrl: process.env.AI_PROVIDER === 'openai' 
        ? 'https://api.openai.com/v1' 
        : (process.env.OLLAMA_BASE_URL || 'http://localhost:11434'),
    apiKey: process.env.OPENAI_API_KEY
};

export const generateText = async (prompt: string): Promise<string> => {
    if (config.provider === 'openai') {
        console.log(`Generating text using OpenAI (${config.model})...`);
        return generateOpenAI(prompt);
    } else {
        console.log(`Generating text using Ollama (${config.model})...`);
        return generateOllama(prompt);
    }
};

export const generateQuestions = generateText;

const generateOpenAI = async (prompt: string): Promise<string> => {
    if (!config.apiKey) {
        throw new Error(`
❌ OpenAI API key not configured!

To use OpenAI (much faster than Ollama):
1. Get API key from: https://platform.openai.com/api-keys
2. Add to server/.env file:
   AI_PROVIDER=openai
   OPENAI_API_KEY=sk-your-key-here
   AI_MODEL=gpt-4o-mini

Cost: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
(Fixing 123 questions costs ~$0.05-0.10)

Or keep using Ollama (free but slow):
   AI_PROVIDER=ollama
        `.trim());
    }

    const url = `${config.baseUrl}/chat/completions`;
    
    try {
        const response = await axios.post(url, {
            model: config.model,
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert ICSE Class 6 Mathematics teacher in India. Generate contextually appropriate questions that match the chapter syllabus.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 2048
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            timeout: 60000 // 1 minute is plenty for OpenAI
        });

        return response.data.choices[0].message.content;

    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error('Invalid OpenAI API key. Check your OPENAI_API_KEY in .env file.');
        }
        if (error.response?.status === 429) {
            throw new Error('OpenAI rate limit exceeded. Wait a moment and try again.');
        }
        console.error('AI Generation Error (OpenAI):', error.response?.data || error.message);
        throw new Error('Failed to generate text using OpenAI: ' + (error.response?.data?.error?.message || error.message));
    }
};

const generateOllama = async (prompt: string): Promise<string> => {
    const url = `${config.baseUrl}/api/generate`;
    
    try {
        const response = await axios.post(url, {
            model: config.model,
            prompt: prompt,
            stream: false,
            options: {
                temperature: 0.7,
                num_predict: 2048  // Increased for batch responses
            }
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 300000 // 5 minute timeout for batch processing
        });

        return response.data.response;

    } catch (error: any) {
        if (error.code === 'ECONNREFUSED') {
            throw new Error(`
❌ Cannot connect to Ollama!

Please install and start Ollama:
1. Download from: https://ollama.ai/download
2. Install and run Ollama
3. Pull a model: ollama pull llama3.2
   (Or: phi3, gemma2, qwen2.5, mistral)
4. Verify it's running: ollama list

Then run this script again.
            `.trim());
        }
        console.error('AI Generation Error (Ollama):', error);
        throw new Error('Failed to generate text using Ollama: ' + error.message);
    }
};
