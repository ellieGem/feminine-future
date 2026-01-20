@echo off
echo 🔧 Fixing Feminine Future Installation...
echo.

REM Step 1: Clean everything
echo Step 1: Cleaning old installations...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /q package-lock.json
echo ✅ Cleaned
echo.

REM Step 2: Install dependencies
echo Step 2: Installing dependencies (this may take 2-3 minutes)...
call npm install
echo.

REM Step 3: Verify installation
echo Step 3: Verifying installation...
if exist "node_modules\react-scripts\bin\react-scripts.js" (
    echo ✅ react-scripts installed successfully!
) else (
    echo ❌ react-scripts not found. Trying to install separately...
    call npm install react-scripts@5.0.1
)
echo.

REM Step 4: Show installed packages
echo Step 4: Checking key packages...
if exist "node_modules\react" (echo ✅ react) else (echo ❌ react)
if exist "node_modules\react-dom" (echo ✅ react-dom) else (echo ❌ react-dom)
if exist "node_modules\react-router-dom" (echo ✅ react-router-dom) else (echo ❌ react-router-dom)
if exist "node_modules\react-scripts" (echo ✅ react-scripts) else (echo ❌ react-scripts)
echo.

echo 🎉 Installation complete! Now run: npm start
pause
