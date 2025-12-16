# Ollama Setup Guide

Ollama is a **free, local AI** that runs on your computer. No API keys, no internet required after setup, and completely private.

## Quick Setup (5 minutes)

### Step 1: Install Ollama

**Windows:**
1. Download from: https://ollama.ai/download
2. Run the installer
3. Ollama will start automatically

**Mac:**
```bash
# Using Homebrew
brew install ollama
```

**Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### Step 2: Pull a Model

Open a terminal and choose one model to download:

**Recommended Options:**

```bash
# BEST CHOICE - Llama 3.2 (3GB, fast, very accurate)
ollama pull llama3.2
```

**Alternative Models:**

```bash
# Phi 3 - Smaller model, great for older computers (2GB)
ollama pull phi3

# Gemma 2 - Google's model, excellent quality (5GB)
ollama pull gemma2

# Qwen 2.5 - Strong reasoning abilities (4GB)
ollama pull qwen2.5

# Mistral - If available in your region (4GB)
ollama pull mistral
```

**Which to choose?**
- 💻 Older computer/limited RAM → `phi3`
- ⚡ Best balance → `llama3.2` (recommended)
- 🎯 Maximum quality → `gemma2`

### Step 3: Verify Installation

```bash
ollama list
```

You should see your downloaded model(s).

### Step 4: Test It

```bash
# Replace 'llama3.2' with whatever model you installed
ollama run llama3.2 "What is 2+2?"
```

If you get a response, you're all set! ✅

## Using Ollama in LearnNest

Once Ollama is running, you can use the validation script:

```bash
cd server
npm run validate:math
```

The script will automatically:
- Connect to Ollama (localhost:11434)
- Use your installed model (llama3.2, phi3, gemma2, or qwen2.5)
- Validate all Math questions
- Regenerate invalid ones

## Optional: Configure Model

Create/edit `server/.env` to specify which model to use:
```env
# Use whichever model you installed
AI_MODEL=llama3.2
# Or: AI_MODEL=phi3
# Or: AI_MODEL=gemma2
# Or: AI_MODEL=qwen2.5

OLLAMA_BASE_URL=http://localhost:11434
```

## Troubleshooting

### "Cannot connect to Ollama"
- Make sure Ollama is running: `ollama serve` (usually auto-starts)
- Check if it's accessible: Open http://localhost:11434 in browser

### "Model not found"
- Pull a model: `ollama pull llama3.2`
- Verify: `ollama list`
- Make sure your `.env` AI_MODEL matches the model name from `ollama list`

### Slow generation
- Try a smaller model:
  - `ollama pull phi3` (fastest, ~2GB)
  - Close other heavy applications
  - Consider upgrading RAM (8GB+ recommended)
- Larger models (gemma2) are slower but more accurate

## Why Ollama?

✅ **Completely Free** - No subscription, no API costs
✅ **Private** - Your data never leaves your computer
✅ **Offline** - Works without internet (after model download)
✅ **No API Keys** - Zero setup friction
✅ **High Quality** - Uses state-of-the-art models (Mistral, LLaMA)
✅ **Fast** - Runs locally, no network latency

## Resources

- Official Website: https://ollama.ai
- Model Library: https://ollama.ai/library
- GitHub: https://github.com/ollama/ollama
- Discord Community: https://discord.gg/ollama
