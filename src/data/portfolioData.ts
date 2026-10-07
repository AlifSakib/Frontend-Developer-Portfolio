import { UserProfile, TechStackItem, Project, Experience, Education, Certification, FreelanceService } from '../types';
import docucanvasShot from '../../assets/project-images/doc-canvas.png';
import pulseShot from '../../assets/project-images/Dashboard.png';
import kanbanShot from '../../assets/project-images/kanban.png';
import giftShot from '../../assets/project-images/gift.png';
import auraShot from '../../assets/project-images/Aura.png';

export const initialProfile: UserProfile = {
  name: "Alif Sakib",
  formalName: "MD. SAKIB HOSSAIN ALIF",
  handle: "alif.dev",
  title: "Frontend Developer",
  title1: "Frontend Developer | React.js | Next.js | TypeScript",
  wavingEmoji: "👋",
  location: "Dhaka, Bangladesh 📍",
  bio: "Hi, I'm Alif Sakib — a Frontend Developer with 3+ years of experience building scalable web applications, conversational platforms, and document management systems. Proficient in Next.js, React, and TypeScript, with expertise in API integrations (GraphQL, REST, Meta) and real-time WebSockets. 📍",
  aboutTitle:
    "Frontend Developer focused on scalable web apps, conversational platforms & document systems 📍",
  aboutText1:
    "With 3+ years of professional experience, I build scalable web applications, conversational platforms, and document management systems using Next.js, React, and TypeScript — with hands-on experience integrating APIs (GraphQL, REST, Meta) and real-time WebSockets.",
  aboutText2:
    "Beyond shipping clean, maintainable code, I craft rich editing and canvas experiences (React Slate, React Konva, React Flow), diagnose stubborn UI bugs, write automated tests with Playwright, and translate complex Figma designs into responsive, living web applications.",
  avatarUrl: "#",
  statusText:
    "Available for frontend engineering, UI motion & bug fixing",
  isOpenToWork: true,
  yearsOfExperience: "3+",
  completedProjectsCount: "20+",
  happyClientsCount: "15+",
  githubUrl: "https://github.com/alifsakib",
  linkedinUrl: "https://linkedin.com/in/alifsakib",
  email: "alifsakib@gmail.com",
  phone: "+880 177 577 8144",
  resumeDownloadUrl: "#resume",
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
  },  { 
    name: 'CSS3 / Sass', 
    category: 'styling', 
    iconKey: 'css', 
    color: '#1572B6', 
    proficiency: 94, 
    experienceYears: '5 yrs', 
    description: 'CSS Grid, Flexbox, Animations, Cross-browser bug fixes', 
    funFact: 'GPU-accelerated CSS properties (transform, opacity) render at silk-smooth 60fps without layout thrashing.'
  },
  { 
    name: 'Material-UI', 
    category: 'styling', 
    iconKey: 'mui', 
    color: '#007FFF', 
    proficiency: 82, 
    experienceYears: '2 yrs', 
    description: 'MUI components, ThemeProvider, design tokens, Data Grid', 
    funFact: 'MUI ships ~25,000 pre-built component variants, cutting complex admin dashboard build time in half.'
  },
  { 
    name: 'React Query', 
    category: 'frontend', 
    iconKey: 'reactquery', 
    color: '#FF4154', 
    proficiency: 86, 
    experienceYears: '3 yrs', 
    description: 'TanStack Query, cache invalidation, optimistic updates, infinite lists', 
    funFact: 'Stale-while-revalidate caching serves cached data instantly, then silently swaps in fresh responses.'
  },
  { 
    name: 'React Flow', 
    category: 'frontend', 
    iconKey: 'reactflow', 
    color: '#FF0072', 
    proficiency: 85, 
    experienceYears: '1.5 yrs', 
    description: 'Node-graph editors, custom nodes & edges, visual conversation flows', 
    funFact: 'Powers visual flow builders where thousands of nodes stay interactive through viewport-based rendering.'
  },
  { 
    name: 'React Konva', 
    category: 'frontend', 
    iconKey: 'reactkonva', 
    color: '#00B4D8', 
    proficiency: 84, 
    experienceYears: '1.5 yrs', 
    description: 'HTML5 canvas rendering, document editors, shapes & transforms', 
    funFact: 'Declarative React bindings over the Konva 2D canvas keep pixel-level drawing in sync with component state.'
  },
  { 
    name: 'Docker', 
    category: 'devops', 
    iconKey: 'docker', 
    color: '#2496ED', 
    proficiency: 78, 
    experienceYears: '2 yrs', 
    description: 'Containers, Dockerfile, Compose, reproducible dev environments', 
    funFact: 'A single Dockerfile removes "works on my machine" by shipping the exact OS environment with the app.'
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
    image: docucanvasShot,
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
  // {
  //   id: "flow-builder-refactor",
  //   title: "FLOWCRAFT: CONVERSATION FLOW BUILDER & BUG AUDIT",
  //   tagline:
  //     "Visual graph-based flow builder engineered with React Flow & GraphQL, slashing UI render latency by 20% with zero regression state isolation.",
  //   description:
  //     "A complex node-graph conversational automation builder built with React Flow, TypeScript, and GraphQL. Re-architected to resolve critical state desynchronization bugs, render bottlenecks in massive multi-branch trees, and complex nested condition logic with strict regression testing.",
  //   longDescription:
  //     "FlowCraft solves the scalability hurdles of visual node graphs. Rebuilt on top of React Flow with custom node hooks, debounced schema validation, memoized edge renderers, and Apollo GraphQL caching. Successfully eliminated recurring UI memory leaks and reduced rendering latency by 20% on complex conversation flows.",
  //   category: "UI / Tools",
  //   featured: true,
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  //   techStack: [
  //     "React Flow",
  //     "React 19",
  //     "TypeScript",
  //     "GraphQL",
  //     "Apollo Client",
  //     "Tailwind CSS",
  //     "Jest"
  //   ],
  //   liveUrl: "https://github.com/alifsakib",
  //   githubUrl: "https://github.com/alifsakib",
  //   highlights: [
  //     "20% UI render latency reduction on large graph workflows",
  //     "Zero-regression bug isolation with targeted integration testing",
  //     "Custom node validation engine with dynamic schema inference",
  //     "Comprehensive technical architecture documentation and ADRs"
  //   ],
  //   keyFeatures: [
  //     "Visual drag-and-drop conversational node tree editor",
  //     "GraphQL query optimization with optimistic UI updates",
  //     "Automated test suites catching edge-case branching errors",
  //     "In-depth technical guide on state reconciliation in graph UIs"
  //   ],
  //   architectureNotes:
  //     "Decoupled graph coordinate math from React component render tree using selective zustand subscriptions, eliminating cascading parent-child re-renders."
  // },
  {
    id: "pulse-analytics",
    title: "PULSE ANALYTICS & SAAS DASHBOARD",
    tagline:
      "Real-time telemetry and revenue intelligence dashboard with interactive metrics visualizers.",
    description:
      "A real-time SaaS intelligence dashboard that helps teams track live metrics, user retention, and financial growth in a unified command center. Developed with interactive data visualizations and responsive layouts, featuring custom charts, conversion funnels, and live growth simulations.",
    longDescription:
      "Pulse consolidates distributed cloud metrics into an intuitive command center. It includes real-time telemetry streaming simulation, custom time-range comparators, drag-to-reorder widget grids, and CSV data export capabilities.",
    category: "React / Next.js",
    featured: true,
    image: pulseShot,
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
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
    image: kanbanShot,
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
    image: giftShot,
    techStack: [
      "React.js",
      "TypeScript",
      "Google Gemini API",
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
    image: auraShot,
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
    role: 'Frontend Developer',
    company: 'The Red IT',
    location: 'Dhaka, Bangladesh',
    period: 'June 2025 - Present',
    type: 'Full-time',
    description: 'Building interactive UI features and graph visual flows for a multi-channel messaging platform, from API integration through automated testing and documentation.',
    bullets: [
      'Developed interactive user interface features and graph visual flows for a multi-channel messaging platform.',
      'Connected and managed data communication using GraphQL and REST APIs.',
      'Built rich text editing experiences using React Slate.',
      'Wrote automated tests with Playwright to catch bugs early and keep the app stable.',
      'Used Claude Code and custom Claude skills to speed up development and handle code refactoring.',
      'Resolved UI issues, fixed daily bugs, and wrote clear documentation for the team.'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'REST APIs', 'React Slate', 'Playwright']
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'FairPattern',
    location: 'Dhaka, Bangladesh',
    period: 'June 2024 - June 2025',
    type: 'Full-time',
    description: 'Delivered document management tooling — editors, viewers and form builders — for non-technical users, backed by a modern typed state layer.',
    bullets: [
      'Built a React Konva document editor and split-screen viewer to unify user workflows.',
      'Designed a TypeScript-based dynamic form and query builder for non-technical users.',
      'Migrated app state to Redux Toolkit and React Query for streamlined data handling.'
    ],
    tech: ['React', 'TypeScript', 'React Konva', 'Redux Toolkit', 'React Query', 'Tailwind CSS']
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Sundarban Courier Service (Pvt.) Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'November 2023 - June 2024',
    type: 'Full-time',
    description: 'Shipped real-time parcel tracking and a Next.js operations dashboard for one of the country\'s largest courier networks.',
    bullets: [
      'Implemented real-time parcel tracking using WebSockets and Apollo GraphQL.',
      'Developed a Next.js interactive dashboard featuring bulk parcel uploads.',
      'Collaborated on API contracts to synchronize booking and tracking data.'
    ],
    tech: ['Next.js', 'React', 'Apollo GraphQL', 'Socket.IO', 'REST APIs', 'Material-UI']
  },
  {
    id: 'exp-4',
    role: 'Frontend Developer',
    company: 'Deshifarmer',
    location: 'Dhaka, Bangladesh',
    period: 'February 2023 - November 2023',
    type: 'Full-time',
    description: 'Built reusable admin and e-commerce interfaces with agricultural data visualization for farmers and operations teams.',
    bullets: [
      'Built reusable React.js and Next.js components for admin and e-commerce workflows.',
      'Implemented map and chart visualizations to display agricultural data trends.',
      'Optimized state management and reduced re-renders using Redux and custom hooks.'
    ],
    tech: ['React', 'Next.js', 'Redux', 'Custom Hooks', 'Charts & Maps', 'REST APIs']
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
    name: 'Front-End System Design',
    issuer: 'Master.dev',
    date: 'Aug 2026',
    credentialId: 'a101d1ca2e-gkuyfreSHY'
  }
];

export const servicesList: FreelanceService[] = [
  {
    id: 'frontend-engineering',
    badge: 'Custom React & Next.js Web Apps',
    shortBadge: 'React & Next.js',
    title: 'Custom React & Next.js Web Development',
    tagline: 'High-performance, accessible web applications engineered for speed, conversion, and complex interactive workflows.',
    description: 'Transform your product vision into lightning-fast, production-ready web interfaces. From sub-second Next.js SSR apps to interactive canvas suites (React Konva / React Flow) and real-time WebSocket dashboards with solid API integration.',
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
    shortBadge: 'Bug Fixing & Audits',
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
    id: 'interactive-ui-motion',
    badge: 'Interactive UI & Motion Design',
    shortBadge: 'Interactive UI & Motion',
    title: 'Interactive UI Engineering, Micro-Interactions & Fluid Animations',
    tagline: 'Bring static designs to life with silky-smooth 60fps animations, intuitive micro-interactions, and pixel-perfect Figma translation.',
    description: 'Transform static designs into engaging, living digital products. I build fluid hover & scroll micro-interactions (Framer Motion / CSS), rich interactive components (drag-and-drop builders, visual canvas tools), and accessible design systems that elevate user engagement.',
    deliverables: [
      'Pixel-perfect Figma-to-React translation with strict design token & spacing fidelity',
      'Fluid 60fps scroll, hover & gesture micro-interactions powered by Framer Motion',
      'Interactive UI components: visual workflow builders, drag-and-drop, and canvas tools',
      'Custom design systems, dark/light themes, and reusable component libraries (Tailwind CSS)',
      'Hardware-accelerated rendering with zero layout shift (CLS 0) and WCAG AA accessibility'
    ],
    technologies: ['Framer Motion', 'React 19', 'Tailwind CSS', 'Figma to Code', 'CSS Animations', 'Micro-Interactions', 'TypeScript'],
    icon: 'sparkles',
    ctaText: 'Build Interactive UI'
  }
];


