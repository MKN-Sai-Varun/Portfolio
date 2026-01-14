# Portfolio Website

A modern, animated portfolio website built with **Next.js 14**, TypeScript, Tailwind CSS, and Framer Motion featuring typewriter cursor animations.

## ✨ Features

- 🎨 Modern dark theme with gradient accents
- ⌨️ **Typewriter cursor animations** for names and headings
- 💻 Code-style terminal animations in hero section
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Interactive UI components with hover effects
- ⚡ Optimized for static export and deployment

## 📦 Sections

- **Hero**: Animated name with typewriter effect + live code preview
- **About**: Skills with progress bars
- **Projects**: Portfolio showcase with gradient cards
- **Internships**: Timeline-style experience display
- **Education**: Academic background with coursework
- **Achievements**: Awards and recognition grid
- **Contact**: Contact form with JSON-style info display

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Static export ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Static files will be in the `out` folder (configured for static export).

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit [components/Hero.tsx](components/Hero.tsx)
   - Update name in Typewriter component
   - Modify roles array for rotating text
   - Update social media links

2. **About Section**: Edit [components/About.tsx](components/About.tsx)
   - Update bio text
   - Modify skills with percentages

3. **Projects**: Edit [components/Projects.tsx](components/Projects.tsx)
   - Add your projects with descriptions
   - Update GitHub and live demo links

4. **Internships**: Edit [components/Internships.tsx](components/Internships.tsx)
   - Add your work experience

5. **Education**: Edit [components/Education.tsx](components/Education.tsx)
   - Update educational background

6. **Achievements**: Edit [components/Achievements.tsx](components/Achievements.tsx)
   - Add your accomplishments

7. **Contact**: Edit [components/Contact.tsx](components/Contact.tsx)
   - Update contact information
   - Connect form to backend (optional)

### Styling

- Colors: [tailwind.config.ts](tailwind.config.ts)
- Global styles: [app/globals.css](app/globals.css)

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
- Build: `npm run build`
- Publish: `out`

### GitHub Pages
The project is configured for static export. After building, deploy the `out` folder.

## 📄 License

MIT License

