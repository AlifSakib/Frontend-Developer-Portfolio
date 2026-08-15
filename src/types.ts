export interface TechStackItem {
  name: string;
  category: 'core' | 'frontend' | 'styling' | 'tooling' | 'backend';
  iconKey: string;
  color: string;
  proficiency: number; // 0-100
  experienceYears?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'React / Next.js' | 'Full Stack' | 'UI / Tools';
  featured: boolean;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
  keyFeatures: string[];
  architectureNotes?: string;
  interactiveDemoId?: 'ecommerce' | 'analytics' | 'kanban' | 'code-sandbox' | 'weather';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Open Source';
  description: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  relevantCoursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  title: string;
  wavingEmoji: string;
  location: string;
  bio: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  avatarUrl: string;
  statusText: string;
  isOpenToWork: boolean;
  yearsOfExperience: string;
  completedProjectsCount: string;
  happyClientsCount: string;
  githubUrl: string;
  linkedinUrl: string;
  // twitterUrl: string;
  email: string;
  phone?: string;
  resumeDownloadUrl?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
