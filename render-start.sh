#!/bin/bash

# Render start script for backend
echo "🚀 Starting LearnNest Backend..."

cd server

# Start the server
echo "▶️ Running server on port ${PORT:-10000}..."
npm start
