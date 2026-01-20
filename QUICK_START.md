# Quick Start Guide - Feminine Future Website

## 🚀 How to Run This Website

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Verify installation: Open terminal and type `node --version`

### Step 2: Install Dependencies
Open terminal in the `feminine-future` folder and run:
```bash
npm install
```

This will install all required packages (React, React Router, etc.)

### Step 3: Start the Development Server
```bash
npm start
```

The website will automatically open in your browser at `http://localhost:3000`

### Step 4: Build for Production (Optional)
When ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📋 What's Included

✅ **Home Page** - Beautiful hero section with mission and impact
✅ **About Page** - Foundation story, team, values
✅ **Programs Page** - 6 programs with RSVP and partnership forms
✅ **Gallery Page** - Event photos with filtering and lightbox
✅ **Impact Page** - Statistics, timeline, and testimonials
✅ **Contact Page** - Multiple ways to join and contact forms

## 🎨 Color Theme

- **Primary Maroon**: #8B4756
- **Light Maroon**: #A86F7B
- **Pale Maroon**: #E8D5D9
- **Cream Background**: #FFF8F5

## 📱 Fully Responsive

Works perfectly on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

## 🛠️ Tech Stack

- **React 18** - Modern JavaScript framework
- **React Router** - Page navigation
- **CSS3** - Custom styling with animations
- **Google Fonts** - Playfair Display & Poppins

## 📝 Next Steps

1. **Add Real Images**: Replace SVG placeholders with actual event photos
2. **Connect Forms**: Link forms to a backend API or email service
3. **Add Analytics**: Install Google Analytics or similar
4. **SEO Optimization**: Add meta tags and descriptions
5. **Deploy**: Host on Netlify, Vercel, or your preferred platform

## 🌐 Deployment Options

### Option 1: Netlify (Easiest)
1. Create account at https://netlify.com
2. Drag and drop the `build` folder
3. Done! Your site is live

### Option 2: Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## 💡 Tips

- Use `Ctrl+C` in terminal to stop the development server
- Changes auto-refresh in the browser (hot reload)
- Check browser console (F12) for any errors
- All forms currently show alerts - customize as needed

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process or use a different port
PORT=3001 npm start
```

**Module not found errors?**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

**Build errors?**
```bash
# Clear cache and rebuild
npm cache clean --force
npm install
npm run build
```

## 📞 Need Help?

Contact: info@femininefuture.org

---

Happy building! 🎉
