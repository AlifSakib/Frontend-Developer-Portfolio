# Alif Sakib — Front-End React & Next.js Developer Portfolio

A modern, high-performance, and responsive developer portfolio web application built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**. Inspired by clean, minimalist design aesthetics with organic animations, live interactive project previews, an ATS-friendly printable resume, and real-time profile customization.

---

## 🚀 Live Demo & Features

- **Iconic Hero Section**: Dynamic greeting, location badge, social links, and an organic morphing CSS border-radius blob mask developer portrait.
- **Interactive Tech Stack Bar**: Categorized technology badges (Frontend, Backend & APIs, Specialized Libraries, Tools & DevOps) with real-time proficiency indicators and experience tooltips.
- **About Me Showcase**: Interactive workspace presentation accompanied by a continuous rotating circular text badge (*"FRONT-END WEB DEVELOPER •"*), career highlights, and impact metrics.
- **Curated Projects Gallery**:
  - Filterable by categories (*All, React / Next.js, Full Stack, UI & Tools*).
  - Alternating layout with interactive live demo sandboxes, GitHub links, tech tags, and full case study modals.
- **ATS-Friendly Printable Resume / CV**:
  - Tabbed breakdown of Work Experience, Education & Research, Skills Matrix, and Certifications.
  - Built-in **1-Click Print & Save as PDF** styling optimized for standard A4 paper formatting without UI clutter.
- **Interactive Contact Form**:
  - 1-click email copy to clipboard.
  - Direct message form with real-time field validation, local submission logs, and celebratory confetti effect.
- **Theme & Personalization**:
  - **Dark / Light Mode**: Smooth theme toggling with persistent state in `localStorage`.
  - **In-App Profile Customizer**: Live modal to edit developer name, title, bio, contact details, and social links instantly.

---

## 🛠️ Tech Stack & Architecture

### **Frontend & UI**
- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: CSS Keyframes, [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti), [Motion](https://motion.dev/)

### **Developer Profile & Skills Reflected**
- **Frontend**: React.js, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, Tailwind CSS, Material-UI (MUI)
- **Backend & APIs**: Node.js, Express.js, GraphQL, Apollo Client, REST APIs, WebSockets (Socket.IO)
- **Libraries**: React Flow (Visual Workflow Graphs), React Konva (HTML5 2D Canvas)
- **DevOps & Tooling**: Git, GitHub, Docker

---

## 📂 Project Structure

```text
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Project dependencies & build scripts
├── vite.config.ts               # Vite configuration with React & Tailwind plugins
├── metadata.json                # AI Studio application metadata
├── src/
│   ├── main.tsx                 # Application bootstrap entry point
│   ├── App.tsx                  # Root layout, theme manager & section orchestrator
│   ├── index.css                # Tailwind CSS imports & custom animations (blob, spin)
│   ├── types.ts                 # TypeScript interfaces (UserProfile, Project, Experience, etc.)
│   ├── data/
│   │   └── portfolioData.ts     # Developer bio, experience, projects, skills & education data
│   └── components/
│       ├── Navbar.tsx           # Sticky responsive navigation & theme toggle
│       ├── Hero.tsx             # Hero section with animated blob & quick tech badges
│       ├── About.tsx            # About story, rotating stamp badge & key metric cards
│       ├── Projects.tsx         # Projects showcase with filters & live modal triggers
│       ├── ProjectModal.tsx     # Fullscreen interactive demo & case study sandbox
│       ├── Resume.tsx           # ATS-ready resume document & interactive tabbed CV
│       ├── Contact.tsx          # Direct contact info, copy email & validated message form
│       ├── CustomizeModal.tsx   # Real-time profile customizer modal
│       ├── Footer.tsx           # Copyright, social profiles & smooth scroll-to-top
│       └── TechIcons.tsx        # High-resolution SVG vector tech stack icons
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alifsakib/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Type check & lint**:
   ```bash
   npm run lint
   ```

---

## ⚙️ Customization

You can update the portfolio content in two ways:

1. **Directly in Code**:
   - Edit `/src/data/portfolioData.ts` to customize profile details, work history, projects, tech skills, and certifications.
2. **In the Browser**:
   - Click the **"Customize Profile"** button in the top navigation bar or footer to edit your name, headline, bio, contact details, and links in real-time. Changes are stored in your browser's `localStorage`.

---

## 🏷️ Automated Versioning & Releases

The website version badge (in the Navbar and Footer) is dynamically injected from `package.json` at build time. To release a new version, use standard `npm version` commands:

```bash
# Bump patch version (e.g. 2.4.0 -> 2.4.1)
npm version patch

# OR bump minor version (e.g. 2.4.0 -> 2.5.0)
npm version minor

# OR bump major version (e.g. 2.4.0 -> 3.0.0)
npm version major
```

When you build or deploy (`npm run build` or `npm run deploy`), Vite compiles the updated version into the UI automatically.

---

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).
Feel free to use it as an inspiration or template for your own developer portfolio!

