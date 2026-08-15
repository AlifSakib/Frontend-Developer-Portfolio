import { UserProfile, TechStackItem, Project, Experience, Education, Certification } from '../types';

export const initialProfile: UserProfile = {
  name: 'Alif Sakib',
  handle: 'alif.dev',
  title: 'Front-End React Developer',
  wavingEmoji: '👋',
  location: 'Dhaka, Bangladesh 📍',
  bio: "Hi, I'm Alif Sakib. A passionate Front-end React & Next.js Developer based in Dhaka, Bangladesh. 📍",
  aboutTitle: 'A dedicated Front-end Developer based in Dhaka, Bangladesh 📍',
  aboutText1: "As a Junior/Mid-to-Senior Front-End Developer, I possess an arsenal of skills in HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Next.js. I excel in designing and maintaining responsive websites that offer a smooth user experience.",
  aboutText2: "My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.",
  avatarUrl: '#',
  statusText: 'Available for freelance & full-time roles',
  isOpenToWork: true,
  yearsOfExperience: '3+',
  completedProjectsCount: '25+',
  happyClientsCount: '15+',
  githubUrl: 'https://github.com/alifsakib',
  linkedinUrl: 'https://linkedin.com/in/alifsakib',
  email: 'alifsakib@gmail.com',
  phone: '+880 1775778144',
  resumeDownloadUrl: '#resume'
};

export const techStackList: TechStackItem[] = [
  { name: 'HTML5', category: 'core', iconKey: 'html', color: '#E44D26', proficiency: 98, experienceYears: '5 yrs', description: 'Semantic HTML, Web Accessibility (a11y), SEO-friendly structure' },
  { name: 'CSS3', category: 'styling', iconKey: 'css', color: '#1572B6', proficiency: 95, experienceYears: '5 yrs', description: 'Flexbox, CSS Grid, Keyframe Animations, Responsive Design' },
  { name: 'JavaScript', category: 'core', iconKey: 'javascript', color: '#F7DF1E', proficiency: 94, experienceYears: '4 yrs', description: 'ES6+, Async/Await, DOM manipulation, Functional Programming' },
  { name: 'TypeScript', category: 'core', iconKey: 'typescript', color: '#3178C6', proficiency: 90, experienceYears: '3 yrs', description: 'Strict typing, Generics, Interfaces, Type Narrowing' },
  { name: 'React', category: 'frontend', iconKey: 'react', color: '#00D8FF', proficiency: 96, experienceYears: '4 yrs', description: 'Hooks, Custom Hooks, Context API, React 19, Suspense, Concurrent Mode' },
  { name: 'Next.js', category: 'frontend', iconKey: 'nextjs', color: '#000000', proficiency: 88, experienceYears: '3 yrs', description: 'App Router, Server Components (RSC), SSR, SSG, API Routes' },
  { name: 'Tailwind CSS', category: 'styling', iconKey: 'tailwind', color: '#38BDF8', proficiency: 95, experienceYears: '3 yrs', description: 'Utility-first CSS, Custom themes, JIT compiler, Responsive layouts' },
  { name: 'Sass / SCSS', category: 'styling', iconKey: 'sass', color: '#CF649A', proficiency: 88, experienceYears: '4 yrs', description: 'Mixins, Nested rules, Variables, Modular stylesheets' },
  { name: 'Redux / Zustand', category: 'frontend', iconKey: 'redux', color: '#764ABC', proficiency: 87, experienceYears: '3 yrs', description: 'State management, Redux Toolkit (RTK), Zustand micro-stores' },
  { name: 'Git & GitHub', category: 'tooling', iconKey: 'git', color: '#F05032', proficiency: 92, experienceYears: '4 yrs', description: 'Branching workflows, Git rebase, CI/CD Actions, PR reviews' },
  { name: 'Vite', category: 'tooling', iconKey: 'vite', color: '#BD34FE', proficiency: 92, experienceYears: '3 yrs', description: 'Fast HMR, Build optimization, Rollup bundling' },
  { name: 'Node.js', category: 'backend', iconKey: 'nodejs', color: '#339933', proficiency: 82, experienceYears: '2.5 yrs', description: 'Express REST APIs, Middleware, Auth tokens, Full-stack integration' },
];

export const initialProjects: Project[] = [
  {
    id: 'nexus-ecommerce',
    title: 'NEXUS E-COMMERCE & LUXURY STORE',
    tagline: 'High-performance fashion & gear marketplace with instant filters, cart drawer, and responsive checkout.',
    description: 'A cutting-edge eCommerce platform built with React, Tailwind CSS, and Stripe checkout simulation. Features instant keyword search, multi-attribute filtering, persistent cart state with local storage, and slick responsive micro-interactions.',
    longDescription: 'Nexus is a full-featured online marketplace designed to provide a frictionless shopping experience with lightning-fast page loads under 800ms. It features custom-built image carousels, responsive slide-out cart drawers, dynamic price calculations with coupon logic, and dark/light adaptive theming.',
    category: 'React / Next.js',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Motion'],
    liveUrl: 'https://nexus-store-demo.vercel.app',
    githubUrl: 'https://github.com/alifsakib/nexus-ecommerce',
    highlights: ['99/100 Lighthouse Performance', 'Sub-second search indexing', 'Zero-layout-shift UI'],
    keyFeatures: [
      'Interactive Product Showcase with zoom view & color swatches',
      'Global Zustand Cart store with badge counters and persistent checkout',
      'Filter by category, price range, and in-stock availability',
      'Optimized image loading with blur-up placeholders'
    ],
    architectureNotes: 'Modular component architecture with decoupled state stores and memoized subtrees for 60fps scrolling performance.',
    interactiveDemoId: 'ecommerce'
  },
  {
    id: 'pulse-analytics',
    title: 'PULSE ANALYTICS & SAAS DASHBOARD',
    tagline: 'Real-time telemetry and revenue intelligence dashboard with interactive metrics visualizers.',
    description: 'A comprehensive SaaS analytics suite providing product managers and founders with live customer acquisition, churn analysis, MRR forecasts, and geographic heatmaps. Built with React, Tailwind, and Recharts.',
    longDescription: 'Pulse consolidates distributed cloud metrics into an intuitive command center. It includes real-time telemetry streaming simulation, custom time-range comparators, drag-to-reorder widget grids, and CSV data export capabilities.',
    category: 'React / Next.js',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Recharts', 'TypeScript'],
    liveUrl: 'https://pulse-metrics-hub.vercel.app',
    githubUrl: 'https://github.com/alifsakib/pulse-analytics-dashboard',
    highlights: ['Live chart tooltips & time slicing', 'Adaptive dark/light theme', 'Export to PDF/CSV'],
    keyFeatures: [
      'Interactive Metric cards with weekly percentage deltas',
      'Multi-series Revenue & Conversion rate area graphs',
      'Real-time transaction feed with status filters',
      'System health and active session monitoring'
    ],
    architectureNotes: 'Utilizes React memoization and debounced resize handlers to smoothly render multi-thousand data point series.',
    interactiveDemoId: 'analytics'
  },
  {
    id: 'cocreate-kanban',
    title: 'COCREATE WORKFLOW & KANBAN SUITE',
    tagline: 'Modern project management board with drag-and-drop tasks, tags, priority queues, and sprint tracking.',
    description: 'A productivity suite engineered for agile developer teams. Supports drag-and-drop column transitions, markdown card descriptions, custom tags, subtask checklists, and time tracking.',
    longDescription: 'CoCreate solves team coordination friction with an ultra-responsive drag-and-drop board interface. Cards support rich rich-text notes, checklist progress bars, estimated vs actual hours, and keyboard shortcuts for rapid backlog organization.',
    category: 'UI / Tools',
    featured: true,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'LocalPersistence'],
    liveUrl: 'https://cocreate-board.vercel.app',
    githubUrl: 'https://github.com/alifsakib/cocreate-kanban',
    highlights: ['60fps smooth drag animations', 'Local-first instant storage', 'Full keyboard navigation (a11y)'],
    keyFeatures: [
      'Custom columns (Backlog, In Progress, Code Review, Done)',
      'Subtask checklist with visual completion progress',
      'Priority badges (Urgent, High, Medium, Low) and assignee tags',
      'One-click card duplication and quick archive'
    ],
    architectureNotes: 'Custom state engine utilizing optimistic state updates with immutable reducer patterns.',
    interactiveDemoId: 'kanban'
  },
  {
    id: 'devlens-sandbox',
    title: 'DEVLENS CODE PLAYGROUND & SNIPPET TESTER',
    tagline: 'In-browser interactive frontend playground with live HTML, CSS, and JavaScript rendering.',
    description: 'A developer utility for rapid UI prototyping, experimenting with CSS keyframes, and generating embeddable code snippets with syntax highlighting and exportable iframe sandboxes.',
    longDescription: 'DevLens delivers a distraction-free sandbox for front-end engineers to test React components, layout algorithms, and SVG animations without setting up a local bundler.',
    category: 'UI / Tools',
    featured: false,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'Prism.js'],
    liveUrl: 'https://devlens-playground.vercel.app',
    githubUrl: 'https://github.com/alifsakib/devlens-code-sandbox',
    highlights: ['Zero-latency live compilation', 'Console output capture', 'Export to CodeSandbox/Zip'],
    keyFeatures: [
      'Dual-pane code editor and live responsive preview stage',
      'Pre-loaded templates (Tailwind Hero, Glassmorphism, Morphing Blobs)',
      'Integrated dev console capturing errors and logs',
      'HTML/CSS/JS beautifier and copyable links'
    ],
    architectureNotes: 'Sandboxed iframe isolation preventing main-thread blocking and script bleed.',
    interactiveDemoId: 'code-sandbox'
  },
  {
    id: 'aura-weather',
    title: 'AURA GLOBAL WEATHER & AIR QUALITY HUB',
    tagline: 'Hyper-local weather forecasts with animated meteorological radar and UV/air quality indices.',
    description: 'A weather visualization application combining OpenWeatherMap data with intuitive vector charts. Features geolocation lookups, 7-day hourly forecasts, and air pollution alerts.',
    longDescription: 'Aura brings clean Scandinavian design principles to weather forecasting. It features dynamic background atmospheric gradients matching current weather conditions, interactive wind speed gauges, and hourly precipitation probability curves.',
    category: 'Full Stack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API'],
    liveUrl: 'https://aura-weather-hub.vercel.app',
    githubUrl: 'https://github.com/alifsakib/aura-weather',
    highlights: ['Dynamic atmospheric shaders', 'Air Quality AQI breakdowns', 'Offline caching with ServiceWorkers'],
    keyFeatures: [
      'Search across 200,000+ global cities with auto-complete',
      'Hourly temperature trajectory line charts',
      'Detailed metrics: Humidity, Dew point, UV Index, Wind gusts',
      'One-tap Celsius / Fahrenheit toggle'
    ],
    architectureNotes: 'Custom caching layer to prevent duplicate API requests and handle network degradation gracefully.',
    interactiveDemoId: 'weather'
  }
];

export const experiencesList: Experience[] = [
  {
    id: 'exp-1',
    role: 'Front-End React Developer',
    company: 'Woztell',
    location: 'Spain (Remote)',
    period: 'July 2025 - Present',
    type: 'Full-time',
    description: 'Develop and implement new features. Integrate and manage APIs, including Meta APIs. Improved user interface (UI) and user experience (UX) and user-friendly features. Identified and resolved bugs, ensuring  a high-quality user experience.',
    bullets: [
      'Developed scalable features for a multi-channel conversational platform (WhatsApp,Messenger) using Next.js and Meta APIs.',
      'Designed dynamic graph visual flows with React Flow and GraphQL, enhancing UI/UX and resolving critical bugs, reducing UI rendering latency by 20%',
      'Collaborated closely with UX designers to translate Figma design systems into pixel-perfect, interactive code.'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Jest']
  },
  {
    id: 'exp-2',
    role: 'Front-End Web Developer',
    company: 'FairPattern',
    location: 'Dhaka, Bangladesh',
    period: '2024 - 2025',
    type: 'Full-time',
    description: 'Built customer-facing portals, dashboard analytics, and eCommerce storefronts with React and modern JavaScript.',
    bullets: [
      'Engineered core features for DigiQore (Document Management System), including custom document editors, dynamic form builders, split-screen views, and custom query builders.',
      'Optimized state management using Redux Toolkit, React Query, and TypeScript for complex async workflows.',
      'Integrated RESTful and GraphQL APIs with optimistic UI updates and robust error boundary fallbacks.',
      'Maintained 95%+ unit and end-to-end test coverage across critical user authentication and checkout paths.'
    ],
    tech: ['React', 'JavaScript (ES6+)', 'Redux Toolkit', 'Sass/SCSS', 'REST APIs', 'Git']
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Sundarban Courier Service (Pvt.) Ltd.',
    location: 'Dhaka, Bangladesh',
    period: '2023 - 2024',
    type: 'Full-time',
    description: 'Contributed to front-end refactoring, cross-browser debugging, and responsive landing pages.',
    bullets: [
      'Built a delivery booking platform with real-time tracking via WebSockets (Socket.IO) and Apollo GraphQL.',
      'Converted legacy jQuery codebases into modular, reusable React functional components with custom hooks.',
      'Optimized Core Web Vitals (LCP, FID, CLS) boosting Lighthouse scores from 65 to 98.',
      'Implemented bulk upload and CSV import/export features for shipment data management, improving operational efficiency by 30%.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'Webpack', 'Apollo GraphQL', 'Socket.IO', 'Material-UI']
  }
];

export const educationList: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Bangladesh University of Business & Technology (BUBT)',
    period: '2016 - 2020',
    location: 'Dhaka, Bangladesh',
    honors: 'Graduated with First Class Honors (GPA: 3.00/4.00)',
    relevantCoursework: [
      'Data Structures & Algorithms',
      'Web Architecture & Distributed Systems',
      'Sentiment Analysis & Natural Language Processing',
      'Database Systems & Software Engineering'
    ]
  }
];

export const certificationsList: Certification[] = [
  {
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    date: '2023',
    credentialId: 'META-FE-994821',
    verifyUrl: 'https://coursera.org/verify/professional-cert/meta-frontend'
  },
  {
    name: 'Crash Course on Python by GOOGLE',
    issuer: 'Google / Coursera',
    date: '2023',
    credentialId: 'N5GD84UQ9MC2',
    verifyUrl: 'https://coursera.org/share/09a4df165e4acc34651c909154bc2777'
  },
  {
    name: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    date: '2022',
    credentialId: 'GOOGLE-UX-541289',
    verifyUrl: 'https://coursera.org/verify/google-ux'
  }
];
