# Rudra Patel — Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live-rudras--website.vercel.app-cyan)](https://rudras-website.vercel.app/)

Personal portfolio website showcasing my professional experience, projects, and technical skills. Built with React, TypeScript, Vite, and Tailwind CSS.

## Live

🔗 [rudras-website.vercel.app](https://rudras-website.vercel.app/)

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **Build** | Vite |
| **Icons** | React Icons |
| **Analytics** | Umami (via environment variable) |
| **Deployment** | Vercel |

## Features

- Responsive design with mobile sidebar navigation
- Scroll-triggered animations using Intersection Observer
- Interactive project showcase with animated card transitions and staggered bullet point effects
- Glassmorphism UI design
- Content driven by TypeScript data files for easy updates

## Project Structure

```
src/
├── components/
│   ├── About/              # About section with skills grid
│   ├── Contact/            # Contact links (phone, email, GitHub, LinkedIn)
│   ├── Experience/         # Professional experience with slide-in animations
│   ├── FeaturedProjects/   # Selectable project list with detail panel
│   ├── Hero/               # Typewriter intro, sidebar, scroll indicator
│   └── Navbar/             # Navigation
├── data/
│   ├── projectData.ts      # Project content (achievements, tech, metrics)
│   └── resumeData.ts       # Experience content
├── App.tsx
├── main.tsx
└── index.css
```

## Environment Variables

Create a `.env` file in the root directory for optional analytics:

```env
VITE_UMAMI_WEBSITE_ID=your_umami_website_id
```

## Getting Started

```bash
npm install
npm run dev
```

## Author

**Rudra Patel**
Computer Science (AI Concentration) @ Lewis University — May 2026

[Website](https://rudras-website.vercel.app/) • [GitHub](https://github.com/rpat9) • [LinkedIn](https://www.linkedin.com/in/rudrapatel09/) • [Email](mailto:rudrap26176@gmail.com)
