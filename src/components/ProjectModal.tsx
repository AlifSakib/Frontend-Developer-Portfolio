import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Sparkles, Layers, CheckCircle2, Play, LayoutGrid } from 'lucide-react';
import { EcommerceDemo } from './demos/EcommerceDemo';
import { AnalyticsDemo } from './demos/AnalyticsDemo';
import { KanbanDemo } from './demos/KanbanDemo';
import { CodeSandboxDemo } from './demos/CodeSandboxDemo';
import { WeatherDemo } from './demos/WeatherDemo';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');

  if (!project) return null;

  const renderDemo = () => {
    switch (project.interactiveDemoId) {
      case 'ecommerce':
        return <EcommerceDemo />;
      case 'analytics':
        return <AnalyticsDemo />;
      case 'kanban':
        return <KanbanDemo />;
      case 'code-sandbox':
        return <CodeSandboxDemo />;
      case 'weather':
        return <WeatherDemo />;
      default:
        return (
          <div className="p-12 text-center text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <p>Live sandbox prototype for this module is ready.</p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-bold uppercase rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Toggle Bar */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <LayoutGrid className="w-4 h-4" /> Project Overview & Case Study
          </button>
          {project.interactiveDemoId && (
            <button
              onClick={() => setActiveTab('interactive')}
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition ${
                activeTab === 'interactive'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Play className="w-4 h-4 text-emerald-500" /> Live Interactive Sandbox
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'interactive' && project.interactiveDemoId ? (
            <div>{renderDemo()}</div>
          ) : (
            <>
              {/* Cover Image & Quick Action Bar */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-21/9 bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-sm font-medium text-slate-200">{project.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 transition"
                  >
                    <Github className="w-4 h-4" /> View Code
                  </a>
                  {project.interactiveDemoId ? (
                    <button
                      onClick={() => setActiveTab('interactive')}
                      className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 transition shadow-sm"
                    >
                      <Play className="w-4 h-4 fill-white" /> Try Interactive Demo
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 transition shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" /> Problem & Solution
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" /> Key Features & Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 h-fit">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Engineering Highlights</h4>
                  <div className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200/80 dark:border-slate-800">
                        ⚡ {h}
                      </div>
                    ))}
                  </div>

                  {project.architectureNotes && (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Architecture</span>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {project.architectureNotes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
