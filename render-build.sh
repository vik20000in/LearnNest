#!/bin/bash

# Render build script for backend
echo "🚀 Building LearnNest Backend..."

cd server

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build TypeScript
echo "🔨 Building TypeScript..."
npm run build

# Initialize database if it doesn't exist
echo "📊 Setting up database..."
if [ ! -f "db/learnnest.sqlite" ]; then
  echo "Creating new database..."
  mkdir -p db
  # Database will be initialized on first run by the application
fi

echo "✅ Backend build complete!"
