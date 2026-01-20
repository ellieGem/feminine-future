# 🚀 Local Setup Guide - Run Feminine Future Website

Follow these simple steps to run the website on your computer!

---

## ✅ Step 1: Install Node.js (One-time setup)

### For Windows:
1. Visit: **https://nodejs.org/**
2. Click the **"LTS"** download button (recommended for most users)
3. Run the downloaded `.msi` file
4. Click "Next" through the installer (accept defaults)
5. Click "Finish"

### For Mac:
1. Visit: **https://nodejs.org/**
2. Click the **"LTS"** download button
3. Run the downloaded `.pkg` file
4. Follow the installation wizard
5. Enter your password when prompted

### For Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install nodejs npm
```

### Verify Installation:
Open **Terminal** (Mac/Linux) or **Command Prompt** (Windows) and type:

```bash
node --version
```
Should show: `v18.x.x` or similar

```bash
npm --version
```
Should show: `9.x.x` or similar

✅ If you see version numbers, Node.js is installed correctly!

---

## ✅ Step 2: Get the Website Files

You need to copy the `feminine-future` folder to your computer.

**Option A - From this workspace:**
- Download/copy the entire `feminine-future` folder to your computer
- Place it somewhere easy to find (e.g., Desktop, Documents)

**Option B - If you have a zip file:**
- Extract the zip file
- Make sure the extracted folder is named `feminine-future`

---

## ✅ Step 3: Open Terminal in the Project Folder

### For Windows:
1. Open File Explorer
2. Navigate to the `feminine-future` folder
3. Click in the address bar (where the path is shown)
4. Type `cmd` and press Enter
5. Command Prompt opens in that folder ✅

### For Mac:
1. Open **Finder**
2. Navigate to the `feminine-future` folder
3. Right-click the folder and select **"New Terminal at Folder"**
   - OR: Open Terminal and type: `cd ` (with a space), then drag the folder into Terminal, then press Enter

### For Linux:
1. Open your file manager
2. Navigate to the `feminine-future` folder
3. Right-click and select **"Open in Terminal"**
   - OR: Use `cd /path/to/feminine-future`

---

## ✅ Step 4: Install Dependencies

In the terminal/command prompt (while in the `feminine-future` folder), type:

```bash
npm install
```

Press **Enter**.

**What happens:**
- Downloads React and other required packages
- Creates a `node_modules` folder (this is normal!)
- Takes 1-3 minutes depending on your internet speed

**You should see:**
```
added 1500+ packages in 2m
```

✅ Wait until you see your command prompt again (the installation is complete)

---

## ✅ Step 5: Start the Development Server

In the same terminal, type:

```bash
npm start
```

Press **Enter**.

**What happens:**
- Compiles the React application
- Starts a local web server
- Takes 10-30 seconds
- Automatically opens your browser!

**You should see:**
```
Compiled successfully!

You can now view feminine-future in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled with 0 warnings
```

**Your browser should automatically open to:**
```
http://localhost:3000
```

🎉 **The website is now running!**

---

## 🎨 What You Should See

When the website opens in your browser:

1. **Home Page** loads with:
   - Light maroon header with "Feminine Future" logo
   - Beautiful hero section: "Empowering Girls for a Brighter Future"
   - Navigation menu: Home, About, Programs, Gallery, Impact, Join Us
   - Buttons and content

2. **Try Navigating:**
   - Click **"About"** in the menu → See foundation story
   - Click **"Programs"** → See 6 programs and forms
   - Click **"Gallery"** → Browse event photos
   - Click **"Impact"** → View statistics and testimonials
   - Click **"Join Us"** → Contact forms

---

## 🛠️ While Developing

### Making Changes:
- Edit any file in the `src` folder
- **Save the file**
- The browser automatically refreshes! (Hot reload)
- No need to restart the server

### Viewing on Phone/Tablet:
1. Make sure your device is on the **same WiFi** as your computer
2. Look at the terminal output for: `On Your Network: http://192.168.x.x:3000`
3. Type that URL in your phone's browser
4. You can now test the mobile version!

### Stopping the Server:
- Go to the terminal
- Press **`Ctrl + C`** (Windows/Linux) or **`Cmd + C`** (Mac)
- Type `y` if prompted
- Server stops ✅

### Restarting:
```bash
npm start
```

---

## ❌ Troubleshooting

### Problem: "Port 3000 is already in use"

**Solution:**
```bash
# Kill the process using port 3000
# Then run:
PORT=3001 npm start
```
Or find and close any other application using port 3000

---

### Problem: "npm: command not found"

**Solution:**
- Node.js is not installed or not in PATH
- Reinstall Node.js from nodejs.org
- Restart your terminal/command prompt
- Try again

---

### Problem: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

---

### Problem: Browser doesn't open automatically

**Solution:**
- Manually open your browser
- Go to: **http://localhost:3000**
- The website should be there!

---

### Problem: Blank white page

**Solution:**
1. Open browser Developer Tools (Press F12)
2. Check the Console tab for errors
3. Make sure you're at `http://localhost:3000` (not `http://localhost:3000/feminine-future`)

---

### Problem: Changes not showing

**Solution:**
1. Save the file you edited
2. Wait 3-5 seconds for auto-refresh
3. If not working, do a hard refresh:
   - **Windows/Linux:** `Ctrl + Shift + R`
   - **Mac:** `Cmd + Shift + R`

---

## 📱 Testing on Different Devices

### Mobile View (without a phone):
1. Open the website in Chrome/Firefox
2. Press **F12** to open Developer Tools
3. Click the **mobile/tablet icon** (top-left of dev tools)
4. Select different devices from the dropdown
5. See how it looks on iPhone, iPad, etc.!

### Real Mobile Testing:
1. Make sure your phone is on the same WiFi
2. In the terminal, find: `On Your Network: http://192.168.x.x:3000`
3. Type that exact URL in your phone's browser
4. Test the mobile experience!

---

## 🎯 Common Commands Reference

```bash
# Install dependencies (do this once)
npm install

# Start development server
npm start

# Stop the server
Ctrl + C (or Cmd + C on Mac)

# Build for production
npm run build

# Clear cache and reinstall
rm -rf node_modules
npm install
```

---

## ✅ Success Checklist

After following all steps, you should have:

- ✅ Node.js installed (check with `node --version`)
- ✅ Project files in a folder
- ✅ Dependencies installed (`node_modules` folder exists)
- ✅ Development server running
- ✅ Website open in browser at `http://localhost:3000`
- ✅ Can navigate between pages
- ✅ All forms are interactive

---

## 🎉 You're All Set!

The website is now running on your computer!

### What to do next?
1. **Explore all pages** - Click through the navigation
2. **Test forms** - Try submitting forms (they show alerts)
3. **Check mobile view** - Use browser dev tools
4. **Make edits** - Try changing text in `src/pages/Home.js`
5. **See it update** - Save and watch the browser refresh!

### Need help with:
- Customizing content?
- Changing colors?
- Adding real images?
- Deploying to the internet?

Just ask! 🚀

---

## 📞 Quick Help

**Can't find the terminal?**
- Windows: Press `Win + R`, type `cmd`, press Enter
- Mac: Press `Cmd + Space`, type "Terminal", press Enter
- Linux: Press `Ctrl + Alt + T`

**Can't navigate to the folder?**
```bash
cd Desktop/feminine-future
# Or wherever you saved it
```

**Want to see what's inside the folder?**
```bash
ls          # Mac/Linux
dir         # Windows
```

---

**Happy developing! 🎨**
