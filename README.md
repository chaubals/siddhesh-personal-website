# 🌐 Siddhesh Personal Website

> A modern, responsive personal portfolio built with React and Vite

**Live Site:** [Add your deployed URL here]

## Overview

My personal website and portfolio showcasing my projects, skills, and professional journey. Built with modern React and optimized for performance, this site serves as my digital presence and a demonstration of my frontend development capabilities.

## ✨ Features

- 🏠 **Homepage** - Professional introduction and overview
- 👨‍💻 **About** - Personal background and skills
- 💼 **Portfolio** - Showcase of projects and work
- 📝 **Blog** - Technical articles and insights
- 🛒 **Marketplace** - [Add description of this section]
- 📞 **Contact** - Ways to get in touch
- 📄 **Resume Download** - Easy access to latest resume
- 📱 **Responsive Design** - Optimized for all devices

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 (Custom CSS files)
- **Language:** JavaScript (JSX)
- **Linting:** ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/siddhesh-personal-website.git
cd siddhesh-personal-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
├── public/                # Static assets
│   ├── resume.pdf        # Latest resume
│   ├── profile-pic.jpg   # Profile image
│   └── background.jpg    # Background assets
├── src/
│   ├── CSS/              # Stylesheets
│   │   ├── App.css
│   │   ├── Portfolio.css
│   │   └── ProjectCard.css
│   ├── Components/       # React components
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Homepage.jsx
│   │   ├── Marketplace.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ResumeDownload.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── projectsData.json # Project data
├── index.html
├── package.json
└── vite.config.js
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Key Components

- **Navbar** - Navigation with smooth scrolling
- **Homepage** - Hero section with introduction
- **About** - Skills, experience, and background
- **Portfolio** - Dynamic project showcase using `ProjectCard`
- **ProjectCard** - Reusable component for project display
- **Blog** - Content section for articles
- **Contact** - Contact form and social links
- **ResumeDownload** - Easy resume access

## 📊 Project Data

Projects are managed through `projectsData.json`, making it easy to add new projects without code changes. Simply update the JSON file with:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "liveUrl": "https://project-url.com",
  "githubUrl": "https://github.com/username/repo"
}
```

## 🚀 Deployment

This site is optimized for deployment on:
- **Netlify** - `npm run build` and deploy `dist/` folder
- **Vercel** - Connect GitHub repo for automatic deployments
- **GitHub Pages** - Use `gh-pages` for static hosting

## 🔄 Continuous Updates

This website is regularly updated with:
- New projects and work samples
- Fresh blog content
- Updated resume and contact information
- Performance optimizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Connect with me:**
- 📧 Email: [your-email@domain.com]
- 💼 LinkedIn: [your-linkedin-profile]
- 🐱 GitHub: [your-github-username]
