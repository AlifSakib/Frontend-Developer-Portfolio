import React, { useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Play, Layers, Sparkles } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'React / Next.js', 'UI / Tools', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm tracking-widest uppercase">
              PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">
              Each project is a unique piece of development 🧩
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards (Alternating Stefan Topalovic Layout) */}
        <div className="space-y-16 lg:space-y-20">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 lg:p-10 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Frame */}
                  <div
                    className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div
                      onClick={() => onSelectProject(project)}
                      className="group relative aspect-16/10 rounded-xl overflow-hidden shadow-lg border border-slate-200/90 dark:border-slate-700 cursor-pointer bg-slate-100 dark:bg-slate-800"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay CTA */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                        <span className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Play className="w-4 h-4 fill-white" /> View Case Study & Live Sandbox
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs text-[11px] font-extrabold uppercase rounded shadow-xs text-slate-800 dark:text-slate-100 border border-slate-200/50 dark:border-slate-700">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Details */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between space-y-5 text-center lg:text-left ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-md shadow-xs border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold flex items-center gap-1.5 transition"
                      >
                        <span>Code</span>
                        <Github className="w-5 h-5" />
                      </a>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold flex items-center gap-1.5 transition"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-5 h-5" />
                      </button>

                      {project.interactiveDemoId && (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 text-xs font-bold rounded-lg flex items-center gap-1.5 transition ml-auto"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" /> Interactive Test
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
