# Feminine Future Foundation Website

A beautiful, well-structured React website for the Feminine Future Foundation - empowering girls for a brighter future through education, mentorship, and economic empowerment in Ghana.

## 🌟 Features

- **Home Page**: Beautiful hero section with mission statement and key highlights
- **About Page**: Foundation story, mission, vision, core values, and team members
- **Programs Page**: Six comprehensive programs with RSVP and partnership forms
- **Gallery Page**: Event gallery with filtering by category and lightbox view
- **Impact Page**: Statistics, timeline, and testimonials showcasing real impact
- **Contact Page**: Multiple ways to get involved with contact forms

## 🎨 Design

- **Color Scheme**: Light maroon theme (#8B4756 primary, #A86F7B light, #E8D5D9 pale)
- **Typography**: Playfair Display for headings, Poppins for body text
- **Responsive**: Fully responsive design that works on all devices
- **Elegant**: Clean, classy design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd feminine-future
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
feminine-future/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Programs.js
│   │   ├── Programs.css
│   │   ├── Gallery.js
│   │   ├── Gallery.css
│   │   ├── Impact.js
│   │   ├── Impact.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Key Pages

### Home
- Hero section with call-to-action buttons
- Mission statement
- Three-pillar approach showcase
- Impact statistics
- Testimonials preview

### About
- Foundation story
- Mission and vision
- Core values
- Team members

### Programs
- Six empowerment programs:
  - Scholarship Program
  - Mentorship Initiative
  - Skills Training
  - Leadership Academy
  - Economic Empowerment
  - Health & Wellness
- RSVP form for program events
- Partnership inquiry form

### Gallery
- Event photos with AI-generated placeholders
- Filter by category (Education, Mentorship, Skills, Leadership, Community)
- Lightbox view for detailed image display
- Event statistics

### Impact
- Comprehensive impact statistics
- Timeline of achievements
- Six detailed testimonials from beneficiaries
- Call-to-action section

### Contact
- Six ways to get involved
- Contact information cards
- Comprehensive inquiry form
- Map location display

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-maroon: #8B4756;
  --light-maroon: #A86F7B;
  --pale-maroon: #E8D5D9;
  --cream: #FFF8F5;
  --dark-text: #2C1A1D;
  --gray-text: #6B5B5E;
}
```

### Adding Real Images
Replace the SVG placeholders in Gallery, About, and other pages with real image URLs or import actual image files.

### Form Submissions
Currently, forms show alert messages. To connect to a backend:
1. Update the `handleSubmit` functions in Programs.js and Contact.js
2. Add API endpoint URLs
3. Implement proper form validation and error handling

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📄 License

This project is created for the Feminine Future Foundation.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Feminine Future Foundation
- Email: info@femininefuture.org
- Location: East Legon, Accra, Ghana

---

Built with ❤️ for empowering girls across Ghana
