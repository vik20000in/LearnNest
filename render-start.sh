#!/bin/bash

# Render start script for backend
echo "🚀 Starting LearnNest Backend..."

cd server

# Seed the database (since Render Free Tier is ephemeral)
echo "🌱 Seeding database..."
npm run seed:prod

# Start the server
echo "▶️ Running server on port ${PORT:-10000}..."
npm start
