import { UserProfile, TechStackItem, Project, Experience, Education, Certification, FreelanceService } from '../types';

export const initialProfile: UserProfile = {
  name: 'Alif Sakib',
  handle: 'alif.dev',
  title: 'Frontend Developer • Full-Stack Knowledge | Bug Fixer & Tech Writer',
  wavingEmoji: '👋',
  location: 'Dhaka, Bangladesh 📍',
  bio: "Hi, I'm Alif Sakib. A passionate Frontend Developer (React / Next.js) with full-stack backend knowledge, specialized in UI bug fixing, performance optimization, and technical writing based in Dhaka, Bangladesh. 📍",
  aboutTitle: 'Frontend Developer with Full-Stack Knowledge, Bug Fixing & Tech Writing Expertise 📍',
  aboutText1: "With 3+ years of professional experience, I build high-performance web applications using React, Next.js, and TypeScript, backed by solid backend understanding (Node.js, Express, GraphQL, and WebSockets).",
  aboutText2: "Beyond building scalable user interfaces from scratch, I excel at diagnosing stubborn UI bugs, refactoring complex state architectures, cutting rendering latency, and authoring clear, developer-friendly technical documentation.",
  avatarUrl: '#',
  statusText: 'Available for frontend engineering, bug fixing & technical writing',
  isOpenToWork: true,
  yearsOfExperience: '3+',
  completedProjectsCount: '20+',
  happyClientsCount: '15+',
  githubUrl: 'https://github.com/alifsakib',
  linkedinUrl: 'https://linkedin.com/in/alifsakib',
  email: 'alifsakib@gmail.com',
  phone: '+880 1775778144',
  resumeDownloadUrl: '#resume'
};

export const techStackList: TechStackItem[] = [
  { 
    name: 'React', 
    category: 'frontend', 
    iconKey: 'react', 
    color: '#00D8FF', 
    proficiency: 96, 
    experienceYears: '4 yrs', 
    description: 'Hooks, Custom Hooks, Context API, React 19, Suspense, Concurrent Mode',
    funFact: 'React 19 eliminates manual useMemo & useCallback boilerplate with its automatic compiler.'
  },
  { 
    name: 'Next.js', 
    category: 'frontend', 
    iconKey: 'nextjs', 
    color: '#000000', 
    proficiency: 90, 
    experienceYears: '3 yrs', 
    description: 'App Router, Server Components (RSC), SSR, SSG, API Routes',
    funFact: 'Next.js streaming with Suspense delivers initial HTML in milliseconds for sub-second LCP.'
  },
  { 
    name: 'TypeScript', 
    category: 'core', 
    iconKey: 'typescript', 
    color: '#3178C6', 
    proficiency: 90, 
    experienceYears: '3 yrs', 
    description: 'Strict typing, Generics, Interfaces, Type Narrowing',
    funFact: 'Static type checking eliminates ~15% of common frontend production bugs before code review.'
  },
  { 
    name: 'Tailwind CSS', 
    category: 'styling', 
    iconKey: 'tailwind', 
    color: '#38BDF8', 
    proficiency: 95, 
    experienceYears: '3 yrs', 
    description: 'Utility-first CSS, Custom themes, JIT compiler, Responsive layouts',
    funFact: 'Tailwind JIT engine generates only the exact utility classes used, producing <15kB production CSS.'
  },
  { 
    name: 'Node.js', 
    category: 'backend', 
    iconKey: 'nodejs', 
    color: '#339933', 
    proficiency: 84, 
    experienceYears: '3 yrs', 
    description: 'Express REST APIs, Middleware, Auth tokens, Backend integrations',
    funFact: 'The V8 non-blocking event loop handles thousands of concurrent connections on a single thread.'
  },
  { 
    name: 'GraphQL', 
    category: 'backend', 
    iconKey: 'graphql', 
    color: '#E10098', 
    proficiency: 85, 
    experienceYears: '2.5 yrs', 
    description: 'Apollo Client, Schema design, Queries, Mutations, Subscription caching',
    funFact: 'Prevents over-fetching and under-fetching by letting UI components ask for exact JSON fields.'
  },
  { 
    name: 'Redux / Zustand', 
    category: 'frontend', 
    iconKey: 'redux', 
    color: '#764ABC', 
    proficiency: 88, 
    experienceYears: '3 yrs', 
    description: 'State management, Redux Toolkit (RTK), Zustand micro-stores',
    funFact: 'Zustand selector subscriptions re-render only the exact component that consumes changed state.'
  },
  { 
    name: 'JavaScript ES6+', 
    category: 'core', 
    iconKey: 'javascript', 
    color: '#F7DF1E', 
    proficiency: 95, 
    experienceYears: '4 yrs', 
    description: 'Async/Await, Closures, DOM manipulation, Event Loop debugging',
    funFact: 'Created in 10 days in 1995 by Brendan Eich, now executing on over 98% of all websites globally.'
  },
  { 
    name: 'Git & GitHub', 
    category: 'tooling', 
    iconKey: 'git', 
    color: '#F05032', 
    proficiency: 92, 
    experienceYears: '4 yrs', 
    description: 'Branching workflows, PR reviews, Git bisect, CI/CD Actions',
    funFact: 'Git bisect performs a binary search across commit history to isolate the exact commit that caused a bug.'
  },
  { 
    name: 'Vite', 
    category: 'tooling', 
    iconKey: 'vite', 
    color: '#BD34FE', 
    proficiency: 92, 
    experienceYears: '3 yrs', 
    description: 'Fast HMR, Build optimization, Rollup bundling',
    funFact: 'Leverages native browser ES modules (ESM) to provide instant <50ms hot-module replacement.'
  },
  { 
    name: 'HTML5 / a11y', 
    category: 'core', 
    iconKey: 'html', 
    color: '#E44D26', 
    proficiency: 98, 
    experienceYears: '5 yrs', 
    description: 'Semantic markup, WCAG AA accessibility, SEO-friendly DOM',
    funFact: 'Semantic landmarks (<main>, <article>, <nav>) boost SEO index ranking and screen reader usability.'
  },
  { 
    name: 'CSS3 / Sass', 
    category: 'styling', 
    iconKey: 'css', 
    color: '#1572B6', 
    proficiency: 94, 
    experienceYears: '5 yrs', 
    description: 'CSS Grid, Flexbox, Animations, Cross-browser bug fixes',
    funFact: 'GPU-accelerated CSS properties (transform, opacity) render at silk-smooth 60fps without layout thrashing.'
  },
];

export const initialProjects: Project[] = [
  // {
  //   id: 'nexus-ecommerce',
  //   title: 'NEXUS E-COMMERCE & LUXURY STORE',
  //   tagline: 'High-performance fashion & gear marketplace with instant filters, cart drawer, and responsive checkout.',
  //   description: 'A cutting-edge eCommerce platform built with React, Tailwind CSS, and Stripe checkout simulation. Features instant keyword search, multi-attribute filtering, persistent cart state with local storage, and slick responsive micro-interactions.',
  //   longDescription: 'Nexus is a full-featured online marketplace designed to provide a frictionless shopping experience with lightning-fast page loads under 800ms. It features custom-built image carousels, responsive slide-out cart drawers, dynamic price calculations with coupon logic, and dark/light adaptive theming.',
  //   category: 'React / Next.js',
  //   featured: true,
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  //   techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Motion'],
  //   liveUrl: 'https://nexus-store-demo.vercel.app',
  //   githubUrl: 'https://github.com/alifsakib/nexus-ecommerce',
  //   highlights: ['99/100 Lighthouse Performance', 'Sub-second search indexing', 'Zero-layout-shift UI'],
  //   keyFeatures: [
  //     'Interactive Product Showcase with zoom view & color swatches',
  //     'Global Zustand Cart store with badge counters and persistent checkout',
  //     'Filter by category, price range, and in-stock availability',
  //     'Optimized image loading with blur-up placeholders'
  //   ],
  //   architectureNotes: 'Modular component architecture with decoupled state stores and memoized subtrees for 60fps scrolling performance.',
  //   interactiveDemoId: 'ecommerce'
  // },
  {
    id: "docucanvas-studio",
    title: "DOCUCANVAS",
    tagline:
      "Full-featured document studio with multi-page vector annotations, interactive form builder, visual split-screen diffing, and signature pad.",
    description:
      "A high-performance web document studio and markup canvas built with React, TypeScript, and Tailwind CSS. Features multi-page vector drafting, interactive form design & fill modes, split-screen visual diff comparisons, threaded review pins, and client-side vector PDF compilation.",
    longDescription:
      "DocuCanvas is an end-to-end document review and form-building studio engineered for complex workflows. It includes a sub-pixel precision coordinate canvas with multi-page management, freehand drawing with smooth SVG path interpolations, geometric shapes, dimensional measurement tools, a digital signature pad with calligraphy fonts, visual document diffing with overlay sliders, and client-side high-resolution PDF/image exports.",
    category: "React / Canvas",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "jsPDF",
      "Canvas Confetti",
      "Lucide Icons",
    ],
    liveUrl: "https://docucanvas-demo.vercel.app",
    githubUrl: "https://github.com/alifsakib/docucanvas",
    highlights: [
      "Sub-pixel coordinate transformation system",
      "Interactive vector selection, rotation & endpoint handles",
      "Real-time split-screen visual diff & change detection",
      "Client-side vector PDF & structured JSON export",
    ],
    keyFeatures: [
      "Vector markup suite: Pen, highlighter, shapes, connector lines, arrows, and measurement tools",
      "Form builder & Fill-and-Sign mode with validation and touch-enabled signature pad",
      "Multi-page canvas stage with rulers, zoom presets (50%-200%), and search indexing",
      "Threaded review comments and in-object floating action toolbar (delete, duplicate)",
    ],
    architectureNotes:
      "Built on a decoupled vector layer model with pure SVG geometry pipelines, event-driven state undo/redo stacks, and client-side jsPDF rendering.",
    interactiveDemoId: "docucanvas",
  },
  {
    id: "flow-builder-refactor",
    title: "FLOWCRAFT: CONVERSATION FLOW BUILDER & BUG AUDIT",
    tagline:
      "Visual graph-based flow builder engineered with React Flow & GraphQL, slashing UI render latency by 20% with zero regression state isolation.",
    description:
      "A complex node-graph conversational automation builder built with React Flow, TypeScript, and GraphQL. Re-architected to resolve critical state desynchronization bugs, render bottlenecks in massive multi-branch trees, and complex nested condition logic with strict regression testing.",
    longDescription:
      "FlowCraft solves the scalability hurdles of visual node graphs. Rebuilt on top of React Flow with custom node hooks, debounced schema validation, memoized edge renderers, and Apollo GraphQL caching. Successfully eliminated recurring UI memory leaks and reduced rendering latency by 20% on complex conversation flows.",
    category: "UI / Tools",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "React Flow",
      "React 19",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Tailwind CSS",
      "Jest"
    ],
    liveUrl: "https://github.com/alifsakib",
    githubUrl: "https://github.com/alifsakib",
    highlights: [
      "20% UI render latency reduction on large graph workflows",
      "Zero-regression bug isolation with targeted integration testing",
      "Custom node validation engine with dynamic schema inference",
      "Comprehensive technical architecture documentation and ADRs"
    ],
    keyFeatures: [
      "Visual drag-and-drop conversational node tree editor",
      "GraphQL query optimization with optimistic UI updates",
      "Automated test suites catching edge-case branching errors",
      "In-depth technical guide on state reconciliation in graph UIs"
    ],
    architectureNotes:
      "Decoupled graph coordinate math from React component render tree using selective zustand subscriptions, eliminating cascading parent-child re-renders."
  },
  {
    id: "pulse-analytics",
    title: "PULSE ANALYTICS & SAAS DASHBOARD",
    tagline:
      "Real-time telemetry and revenue intelligence dashboard with interactive metrics visualizers.",
    description:
      "A comprehensive SaaS analytics suite providing product managers and founders with live customer acquisition, churn analysis, MRR forecasts, and geographic heatmaps. Built with React, Tailwind, and Recharts.",
    longDescription:
      "Pulse consolidates distributed cloud metrics into an intuitive command center. It includes real-time telemetry streaming simulation, custom time-range comparators, drag-to-reorder widget grids, and CSV data export capabilities.",
    category: "React / Next.js",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "Next.js", "Tailwind CSS", "Recharts", "TypeScript"],
    liveUrl: "https://pulse-analytics-lyart.vercel.app/",
    githubUrl: "https://github.com/AlifSakib/pulse-analytics",
    highlights: [
      "Live chart tooltips & time slicing",
      "Adaptive dark/light theme",
      "Export to PDF/CSV",
    ],
    keyFeatures: [
      "Interactive Metric cards with weekly percentage deltas",
      "Multi-series Revenue & Conversion rate area graphs",
      "Real-time transaction feed with status filters",
      "System health and active session monitoring",
    ],
    architectureNotes:
      "Utilizes React memoization and debounced resize handlers to smoothly render multi-thousand data point series.",
    interactiveDemoId: "analytics",
  },
  {
    id: "cocreate-kanban",
    title: "COCREATE WORKFLOW & KANBAN SUITE",
    tagline:
      "Modern project management board with drag-and-drop tasks, tags, priority queues, and sprint tracking.",
    description:
      "A productivity suite engineered for agile developer teams. Supports drag-and-drop column transitions, markdown card descriptions, custom tags, subtask checklists, and time tracking.",
    longDescription:
      "CoCreate solves team coordination friction with an ultra-responsive drag-and-drop board interface. Cards support rich rich-text notes, checklist progress bars, estimated vs actual hours, and keyboard shortcuts for rapid backlog organization.",
    category: "UI / Tools",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "LocalPersistence",
    ],
    liveUrl: "https://docu-canvas-zeta.vercel.app/",
    githubUrl: "https://github.com/AlifSakib/DocuCanvas",
    highlights: [
      "60fps smooth drag animations",
      "Local-first instant storage",
      "Full keyboard navigation (a11y)",
    ],
    keyFeatures: [
      "Custom columns (Backlog, In Progress, Code Review, Done)",
      "Subtask checklist with visual completion progress",
      "Priority badges (Urgent, High, Medium, Low) and assignee tags",
      "One-click card duplication and quick archive",
    ],
    architectureNotes:
      "Custom state engine utilizing optimistic state updates with immutable reducer patterns.",
    interactiveDemoId: "kanban",
  },
  {
    id: "gift-genie-ai",
    title: "GIFTGENIE",
    tagline:
      "AI-powered personalized gift intelligence platform with multi-tiered budget algorithms, local affiliate integrations, and curated hampers.",
    description:
      "A full-stack recommendation engine that eliminates gift-buying decision fatigue for cultural and personal milestones (Weddings, Eid, Anniversaries, Birthdays). Features dual-currency localization (BDT ৳ / USD $), Gemini natural language understanding, real-time affiliate price mapping, and interactive greeting card synthesis.",
    longDescription:
      "GiftGenie combines contextual multi-attribute filtering (occasion, relationship hierarchy, age bracket, recipient passions) with Google Gemini AI for instant semantic matching. Engineered with high-converting monetization zones—including Google AdSense placeholders, direct e-commerce affiliate routing (Daraz BD, Rokomari, Star Tech, Shajgoj, Amazon), and a zero-friction WhatsApp direct-order workflow for curated gift hampers.",
    category: "AI",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "React 19",
      "TypeScript",
      "Express.js",
      "Google Gemini API",
      "Tailwind CSS",
      "Vite",
    ],
    keyFeatures: [
      "Semantic AI gift recommendation with Google Gemini",
      "Multi-tiered budget matching (BDT ৳ / USD $)",
      "Direct WhatsApp hamper order engine with affiliate routing",
    ],
    liveUrl: "https://giftgenie-liard.vercel.app/",
    githubUrl: "https://github.com/AlifSakib/giftgenie",
    highlights: [
      "Gemini-powered semantic recommendation & greeting card generator",
      "Multi-currency conversion & budget tier matching (BDT ৳ / USD $)",
      "Direct WhatsApp hamper order engine with built-in affiliate link routing",
      "Interactive creator monetization & revenue projection simulator",
    ],
    interactiveDemoId: "gift-genie",
  },
  // {
  //   id: 'devlens-sandbox',
  //   title: 'DEVLENS CODE PLAYGROUND & SNIPPET TESTER',
  //   tagline: 'In-browser interactive frontend playground with live HTML, CSS, and JavaScript rendering.',
  //   description: 'A developer utility for rapid UI prototyping, experimenting with CSS keyframes, and generating embeddable code snippets with syntax highlighting and exportable iframe sandboxes.',
  //   longDescription: 'DevLens delivers a distraction-free sandbox for front-end engineers to test React components, layout algorithms, and SVG animations without setting up a local bundler.',
  //   category: 'UI / Tools',
  //   featured: false,
  //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  //   techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'Prism.js'],
  //   liveUrl: 'https://devlens-playground.vercel.app',
  //   githubUrl: 'https://github.com/alifsakib/devlens-code-sandbox',
  //   highlights: ['Zero-latency live compilation', 'Console output capture', 'Export to CodeSandbox/Zip'],
  //   keyFeatures: [
  //     'Dual-pane code editor and live responsive preview stage',
  //     'Pre-loaded templates (Tailwind Hero, Glassmorphism, Morphing Blobs)',
  //     'Integrated dev console capturing errors and logs',
  //     'HTML/CSS/JS beautifier and copyable links'
  //   ],
  //   architectureNotes: 'Sandboxed iframe isolation preventing main-thread blocking and script bleed.',
  //   interactiveDemoId: 'code-sandbox'
  // },
  {
    id: "aura-weather",
    title: "AURA GLOBAL WEATHER & AIR QUALITY HUB",
    tagline:
      "Hyper-local weather forecasts with animated meteorological radar and UV/air quality indices.",
    description:
      "A weather visualization application combining OpenWeatherMap data with intuitive vector charts. Features geolocation lookups, 7-day hourly forecasts, and air pollution alerts.",
    longDescription:
      "Aura brings clean Scandinavian design principles to weather forecasting. It features dynamic background atmospheric gradients matching current weather conditions, interactive wind speed gauges, and hourly precipitation probability curves.",
    category: "Full Stack",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
    liveUrl: "https://favicon.io/emoji-favicons/cloud-with-lightning-and-rain",
    githubUrl:
      "https://github.com/AlifSakib/Aura-Global-Weather-Air-Quality-Hub",
    highlights: [
      "Dynamic atmospheric shaders",
      "Air Quality AQI breakdowns",
      "Offline caching with ServiceWorkers",
    ],
    keyFeatures: [
      "Search across 200,000+ global cities with auto-complete",
      "Hourly temperature trajectory line charts",
      "Detailed metrics: Humidity, Dew point, UV Index, Wind gusts",
      "One-tap Celsius / Fahrenheit toggle",
    ],
    architectureNotes:
      "Custom caching layer to prevent duplicate API requests and handle network degradation gracefully.",
    interactiveDemoId: "weather",
  },
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
    period: '2017 - 2021',
    location: 'Dhaka, Bangladesh',
    honors: 'Graduated with First Class Honors',
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

export const servicesList: FreelanceService[] = [
  {
    id: 'frontend-engineering',
    badge: 'Frontend Engineering & Full-Stack Knowledge',
    title: 'Custom React & Next.js Web Development',
    tagline: 'High-performance, accessible web applications engineered for speed, conversion, and complex interactive workflows.',
    description: 'Transform your product vision into lightning-fast, production-ready web interfaces. From sub-second Next.js SSR apps to interactive canvas suites (React Konva / React Flow) and real-time WebSocket dashboards backed by solid Node.js/GraphQL API understanding.',
    deliverables: [
      'Next.js (App Router, SSR/SSG, Server Components) & SEO-optimized rendering',
      'Complex interactive UI: Vector canvas tools, visual builders, and drag-and-drop',
      'Real-time dashboards powered by WebSockets (Socket.IO) & Apollo GraphQL',
      'State architecture using Redux Toolkit / Zustand with zero-layout-shift UI',
      'Lighthouse Performance 95+ and strict TypeScript type safety'
    ],
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'WebSockets', 'Redux / Zustand'],
    icon: 'code',
    ctaText: 'Hire for Frontend'
  },
  {
    id: 'bug-fixing-refactor',
    badge: 'UI Bug Fixing & Performance Audits',
    title: 'Rapid Bug Diagnostics, Code Review & Refactoring',
    tagline: 'Tackle stubborn frontend bugs, eliminate render lag, and stabilize production codebases.',
    description: 'Got tricky rendering regressions, hydration mismatches, broken responsive layouts, or state sync headaches? I dive straight into complex codebases to isolate root causes, fix edge-case bugs, refactor messy components, and write automated test suites.',
    deliverables: [
      'Rapid root-cause diagnosis of UI regressions, hydration bugs, and race conditions',
      'Component refactoring to slash render latency by 20%+ and prevent memory leaks',
      'Cross-browser and responsive layout bug fixes (Safari/iOS/Chrome/Firefox)',
      'State synchronization & async data handling debugging (Redux / React Query)',
      'Targeted unit & integration test coverage (Jest / Vitest) to lock in stability'
    ],
    technologies: ['React DevTools', 'TypeScript', 'Jest / Vitest', 'React Query', 'Redux Toolkit', 'Chrome Profiler'],
    icon: 'bug',
    ctaText: 'Request Bug Fix / Audit'
  },
  {
    id: 'technical-writing-docs',
    badge: 'Developer Experience & Technical Docs',
    title: 'Technical Writing, API Docs & Engineering Guides',
    tagline: 'Clear, concise, and actionable developer documentation, RFCs, and SEO-driven technical articles.',
    description: 'Bridge the gap between complex software engineering and clear developer communication. I produce comprehensive API documentation, architecture design records (ADRs), step-by-step developer onboarding guides, and high-ranking technical tutorials.',
    deliverables: [
      'Comprehensive REST & GraphQL API documentation with copy-pasteable code samples',
      'System architecture guides, component storybooks, and codebase onboarding manuals',
      'SEO-optimized technical blog posts and tutorial walkthroughs for developer tools',
      'Clear release notes, changelogs, and technical RFC specifications',
      'Markdown, MDX, and documentation platform structuring (Docusaurus, Mintlify, Starlight)'
    ],
    technologies: ['Technical Writing', 'Markdown / MDX', 'API Documentation', 'Docusaurus', 'Mermaid Diagrams', 'GitBook'],
    icon: 'pen',
    ctaText: 'Commission Technical Writing'
  }
];


