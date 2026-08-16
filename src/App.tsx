/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialProfile, techStackList, initialProjects, experiencesList, educationList, certificationsList } from './data/portfolioData';
import { UserProfile, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CustomizeModal } from './components/CustomizeModal';
import { trackEvent } from './utils/analytics';

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
    const sections = ['home', 'about', 'projects', 'resume', 'contact'];

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
    <div className="min-h-screen bg-[#f9f9f9] text-[#2d2e32] dark:bg-[#0f172a] dark:text-[#e2e8f0] transition-colors duration-300">
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

        {/* 3. Projects Gallery (Alternating cards, case studies & interactive previews) */}
        <Projects
          projects={initialProjects}
          onSelectProject={handleSelectProject}
        />

        {/* 4. Technical Resume Section (ATS Printable Document, Experience, Skills, Certs) */}
        <Resume
          profile={profile}
          experiences={experiencesList}
          education={educationList}
          certifications={certificationsList}
          techStack={techStackList}
        />

        {/* 5. Contact Section (Direct info, 1-click email copy, validated message form) */}
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Live Interactive Project Demo / Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Profile Info Customizer Modal */}
      <CustomizeModal
        profile={profile}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
