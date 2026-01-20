#!/bin/bash

echo "🔧 Fixing Feminine Future Installation..."
echo ""

# Step 1: Clean everything
echo "Step 1: Cleaning old installations..."
rm -rf node_modules
rm -f package-lock.json
echo "✅ Cleaned"
echo ""

# Step 2: Install dependencies
echo "Step 2: Installing dependencies (this may take 2-3 minutes)..."
npm install
echo ""

# Step 3: Verify installation
echo "Step 3: Verifying installation..."
if [ -f "node_modules/react-scripts/bin/react-scripts.js" ]; then
    echo "✅ react-scripts installed successfully!"
else
    echo "❌ react-scripts not found. Trying to install separately..."
    npm install react-scripts@5.0.1
fi
echo ""

# Step 4: Show installed packages
echo "Step 4: Checking key packages..."
if [ -d "node_modules/react" ]; then echo "✅ react"; else echo "❌ react"; fi
if [ -d "node_modules/react-dom" ]; then echo "✅ react-dom"; else echo "❌ react-dom"; fi
if [ -d "node_modules/react-router-dom" ]; then echo "✅ react-router-dom"; else echo "❌ react-router-dom"; fi
if [ -d "node_modules/react-scripts" ]; then echo "✅ react-scripts"; else echo "❌ react-scripts"; fi
echo ""

echo "🎉 Installation complete! Now run: npm start"
