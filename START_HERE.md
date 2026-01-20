# 🎯 START HERE - Quick Guide

## Running the Website in 5 Minutes! ⚡

Follow these simple steps to see your website live on your computer.

---

## 📋 Quick Checklist

### ☐ Step 1: Install Node.js (5 minutes)
```
1. Go to: https://nodejs.org/
2. Download the LTS version
3. Install it (click Next through the wizard)
4. Restart your computer (recommended)
```

**Test it worked:**
- Open Terminal/Command Prompt
- Type: `node --version`
- You should see: `v18.x.x` or similar ✅

---

### ☐ Step 2: Open Terminal in the Project Folder (1 minute)

**Windows:**
1. Open the `feminine-future` folder in File Explorer
2. Click in the address bar (top)
3. Type `cmd` and press Enter
4. Terminal opens! ✅

**Mac:**
1. Open the `feminine-future` folder in Finder
2. Right-click → "New Terminal at Folder"
3. Terminal opens! ✅

**You should see something like:**
```
C:\Users\YourName\Desktop\feminine-future>
```
or
```
/Users/YourName/Desktop/feminine-future $
```

---

### ☐ Step 3: Install Dependencies (2 minutes)

In the terminal, type exactly:
```bash
npm install
```

Press Enter and wait...

**What you'll see:**
```
npm WARN deprecated ...
added 1476 packages in 1m
```

✅ Wait until you see your prompt again (C:\...> or $)

---

### ☐ Step 4: Start the Website (30 seconds)

In the same terminal, type:
```bash
npm start
```

Press Enter...

**What happens:**
```
Compiled successfully!

Local:            http://localhost:3000

webpack compiled with 0 warnings
```

🎉 **Your browser should automatically open!**

If not, manually go to: **http://localhost:3000**

---

## ✅ Success! What You Should See:

When the website opens, you should see:

```
╔════════════════════════════════════════════╗
║   🌸 FEMININE FUTURE (in maroon)          ║
║      Empowering Girls, Building Leaders    ║
╠════════════════════════════════════════════╣
║                                            ║
║     Empowering Girls for a                 ║
║          Brighter Future                   ║
║                                            ║
║   Building tomorrow's leaders through      ║
║   education, mentorship, and economic      ║
║   empowerment across Ghana                 ║
║                                            ║
║   [Join Our Mission] [Explore Programs]    ║
║                                            ║
╚════════════════════════════════════════════╝
```

### Navigation Menu (top):
- Home
- About  
- Programs
- Gallery
- Impact
- Join Us

**👆 Click these to explore different pages!**

---

## 🎮 Try These Things:

### 1. Navigate to Different Pages
- Click **"About"** → See the foundation story and team
- Click **"Programs"** → See 6 programs with forms
- Click **"Gallery"** → Browse event photos with filters
- Click **"Impact"** → View statistics and testimonials
- Click **"Join Us"** → Fill out contact forms

### 2. Test Forms
- Go to **Programs** page
- Click **"RSVP for Program Events"** tab
- Fill out the form
- Click **"Submit RSVP"**
- You'll see an alert message ✅

### 3. Try the Gallery
- Go to **Gallery** page
- Click the filter buttons (Education, Mentorship, etc.)
- Click on any image → Opens in lightbox
- Click the X to close

### 4. Check Mobile View
- Press **F12** in your browser
- Click the mobile icon (top-left of dev tools)
- See how it looks on phones! 📱

---

## 🛑 To Stop the Website:

In the terminal:
- Press **`Ctrl + C`** (Windows/Linux)
- Or **`Cmd + C`** (Mac)
- Type `y` if asked
- Done! ✅

---

## 🔄 To Restart:

Just type again:
```bash
npm start
```

---

## ❌ Problems?

### "npm is not recognized" or "command not found"
→ Node.js not installed. Go back to Step 1.

### "Port 3000 already in use"
→ Something else is using that port. Try:
```bash
PORT=3001 npm start
```

### Browser doesn't open automatically
→ Manually open browser and go to: **http://localhost:3000**

### Blank page or errors
→ Check the terminal for error messages
→ Try refreshing: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### Need more help?
→ Read **LOCAL_SETUP_GUIDE.md** for detailed troubleshooting

---

## 📊 What's Running:

When you run `npm start`:
- ✅ React development server starts
- ✅ Compiles your website code
- ✅ Opens in browser at `http://localhost:3000`
- ✅ Auto-refreshes when you make changes
- ✅ Shows errors in the terminal

---

## 🎨 Next Steps After Running:

### Want to customize?
1. **Change colors** → Edit `src/index.css`
2. **Update text** → Edit files in `src/pages/`
3. **Add images** → Replace SVG placeholders
4. **Modify forms** → Edit `src/pages/Programs.js` and `Contact.js`

### Want to deploy online?
1. **Build it:** `npm run build`
2. **Deploy to Netlify** (easiest - drag & drop)
3. **Or Vercel, GitHub Pages, etc.**

---

## 📱 Test on Your Phone:

1. Make sure phone is on **same WiFi** as computer
2. Look in terminal for: `On Your Network: http://192.168.x.x:3000`
3. Type that URL in your phone's browser
4. Website works on mobile! 📱

---

## ✅ Final Checklist:

After running `npm start`, verify:

- ☐ Terminal shows "Compiled successfully"
- ☐ Browser opened automatically (or you opened it manually)
- ☐ URL is `http://localhost:3000`
- ☐ You see the Feminine Future homepage with maroon colors
- ☐ You can click navigation links and move between pages
- ☐ Forms are interactive (show alerts when submitted)
- ☐ Gallery filters work and images open in lightbox
- ☐ Everything looks good on mobile (test with F12 dev tools)

---

## 🎉 Congratulations!

You've successfully set up and running the Feminine Future website locally!

### You can now:
- ✅ View all 6 pages
- ✅ Test all 3 forms  
- ✅ Browse the gallery
- ✅ See impact statistics
- ✅ Read testimonials
- ✅ Test on different screen sizes

### Ready to customize it?
Start editing files in the `src` folder - the browser will auto-refresh!

---

## 🆘 Still Need Help?

**Detailed Guides Available:**
- **LOCAL_SETUP_GUIDE.md** - Detailed troubleshooting
- **README.md** - Full documentation
- **QUICK_START.md** - Quick reference
- **WEBSITE_OVERVIEW.md** - Feature details

**Just ask if you need help with:**
- Customizing content
- Changing colors or fonts
- Adding real images
- Deploying online
- Connecting forms to email

---

## 💡 Pro Tips:

1. **Keep the terminal open** while working - don't close it
2. **Save files** after editing - browser auto-refreshes in ~3 seconds
3. **Use Ctrl+C** to stop the server when done
4. **Check terminal** for error messages if something breaks
5. **Hard refresh** if changes don't show: `Ctrl+Shift+R`

---

**Happy exploring! 🚀**

*The website is now running at: http://localhost:3000*
