/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialProfile, techStackList, initialProjects, experiencesList, educationList, certificationsList, servicesList } from './data/portfolioData';
import { UserProfile, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { EngagementStats } from './components/EngagementStats';
import { Footer } from './components/Footer';
import { trackEvent } from './utils/analytics';

// Code-split heavy interactive modals to reduce critical initial bundle payload
const ProjectModal = React.lazy(() => import('./components/ProjectModal').then(m => ({ default: m.ProjectModal })));
const CustomizeModal = React.lazy(() => import('./components/CustomizeModal').then(m => ({ default: m.CustomizeModal })));

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('portfolio_user_profile');
      return saved ? JSON.parse(saved) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('portfolio_dark_mode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Check system preference if no saved preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Sync Dark Mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio_dark_mode', JSON.stringify(isDarkMode));
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  // Scroll spy to track active section
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'resume', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem('portfolio_user_profile', JSON.stringify(updatedProfile));
    } catch {
      // ignore
    }
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSelectProject = (project: Project) => {
    // Track project view
    trackEvent('project_view', 'Projects', project.title);
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden relative bg-[#f9f9f9] text-[#2d2e32] dark:bg-[#0f172a] dark:text-[#e2e8f0] transition-colors duration-300">
      {/* Sticky Header Navigation */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Iconic Stefan Topalovic Style with Blob & Tech Bar) */}
        <Hero profile={profile} techStack={techStackList} />

        {/* 2. About Me Section (with Workspace Mockup & Rotating Text Badge) */}
        <About profile={profile} />

        {/* 3. Freelance Services & Infrastructure Solutions */}
        <Services services={servicesList} />

        {/* 4. Projects Gallery (Alternating cards, case studies & interactive previews) */}
        <Projects
          projects={initialProjects}
          onSelectProject={handleSelectProject}
        />

        {/* 5. Technical Resume Section (ATS Printable Document, Experience, Skills, Certs) */}
        <Resume
          profile={profile}
          experiences={experiencesList}
          education={educationList}
          certifications={certificationsList}
          techStack={techStackList}
        />

        {/* 6. Contact Section (Direct info, 1-click email copy, validated message form) */}
        <Contact profile={profile} />
      </main>

      {/* Footer (with Integrated Sleek Engagement Stats) */}
      <Footer profile={profile} />

      {/* Conditionally Loaded Heavy Modals via Suspense */}
      <React.Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {isCustomizerOpen && (
          <CustomizeModal
            profile={profile}
            isOpen={isCustomizerOpen}
            onClose={() => setIsCustomizerOpen(false)}
            onSave={handleSaveProfile}
          />
        )}
      </React.Suspense>
    </div>
  );
}
