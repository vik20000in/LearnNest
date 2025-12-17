#!/bin/bash

# 1. Build Frontend
echo "🚀 Building LearnNest Frontend..."
cd frontend
npm install
npm run build
cd ..

# 2. Copy Frontend Build to Server
echo "📋 Copying frontend build to server..."
rm -rf server/public
mkdir -p server/public
cp -r frontend/dist/* server/public/

# 3. Build Backend
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

echo "✅ Build complete!"
