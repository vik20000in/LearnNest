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

Open a terminal and run:
```bash
ollama pull mistral
```

This downloads the Mistral-7B model (~4GB). Other options:
- `ollama pull llama3` - Meta's LLaMA 3 (larger, more powerful)
- `ollama pull phi` - Microsoft's Phi (smaller, faster)
- `ollama pull codellama` - Specialized for code

### Step 3: Verify Installation

```bash
ollama list
```

You should see your downloaded model(s).

### Step 4: Test It

```bash
ollama run mistral "What is 2+2?"
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
- Use the mistral model (or whatever you configured)
- Validate all Math questions
- Regenerate invalid ones

## Optional: Configure Model

Create/edit `server/.env`:
```env
AI_MODEL=mistral
OLLAMA_BASE_URL=http://localhost:11434
```

## Troubleshooting

### "Cannot connect to Ollama"
- Make sure Ollama is running: `ollama serve` (usually auto-starts)
- Check if it's accessible: Open http://localhost:11434 in browser

### "Model not found"
- Pull the model: `ollama pull mistral`
- Verify: `ollama list`

### Slow generation
- Mistral is fast (~4GB). If too slow, try:
  - `ollama pull phi` (smaller model)
  - Close other heavy applications
  - Consider upgrading RAM (8GB+ recommended)

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
