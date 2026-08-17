import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, ArrowDown, MapPin, Sparkles, Check, Bug, Zap, Code2, Terminal, Copy, CheckCheck } from 'lucide-react';
import { UserProfile, TechStackItem } from '../types';
import { TechIconBadge } from './TechIcons';
import confetti from 'canvas-confetti';
import heroImage from "../../assets/hero/personal-photo.jpeg";

interface HeroProps {
  profile: UserProfile;
  techStack: TechStackItem[];
}

const ROLES = [
  "Frontend Engineer (React / Next.js)",
  "UI Bug Hunter & Code Optimizer",
  "Technical Writer & API Specialist"
];

const CODE_EXAMPLES = {
  bug: {
    title: "Uncontrolled Parent Re-renders & Memory Leak",
    language: "tsx",
    code: `// ❌ The Bug: Cascading render tree on 2,000+ nodes
function NodeGraph({ nodes, onSelect }) {
  const [hovered, setHovered] = useState(null);
  
  // Bug: New inline function & filter on every frame
  return nodes.map(n => (
    <NodeCard 
      key={n.id} 
      data={n} 
      active={nodes.filter(x => x.id === hovered)}
      onClick={() => onSelect(n)} // Causes re-render storm
    />
  ));
}`,
    metric: "48ms Render Frame • ⚠️ Memory Leak Alert",
    status: "laggy"
  },
  fix: {
    title: "Memoized Subtrees & Zustand Micro-Subscriptions",
    language: "tsx",
    code: `// ⚡ The Fix: Isolated selector + stable memoized handlers
const NodeCardMemo = React.memo(NodeCard);

function NodeGraph({ nodeIds, onSelect }) {
  const handleSelect = useCallback((id) => onSelect(id), [onSelect]);
  
  // Fix: O(1) selector subscription, 0 parent re-renders
  return nodeIds.map(id => (
    <NodeCardMemo key={id} id={id} onSelect={handleSelect} />
  ));
}`,
    metric: "4.2ms Render Frame • ⚡ -20% UI Latency • 0 Re-render Storms",
    status: "optimized"
  }
};

export const Hero: React.FC<HeroProps> = ({ profile, techStack }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [activeCodeTab, setActiveCodeTab] = useState<'bug' | 'fix'>('fix');
  const [hoveredTech, setHoveredTech] = useState<TechStackItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic Role Rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    
    // Trigger celebratory confetti burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 }
    });

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        {/* Main Hero Split */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            {profile.isOpenToWork && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-tight shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>
                  {profile.statusText || "Available for freelance & full-time"}
                </span>
              </div>
            )}

            {/* Main Dynamic Headline */}
            <div>
              <div className="text-sm font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
                Hello, I am {profile.name}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] min-h-[72px] sm:min-h-[88px] flex items-center justify-center lg:justify-start">
                <span className="inline-block transition-all duration-500 ease-out transform">
                  {ROLES[currentRoleIndex]}
                </span>
                <span className="inline-block w-1.5 h-8 sm:h-10 ml-2 bg-blue-600 dark:bg-blue-400 animate-cursor"></span>
              </h1>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              {profile.bio}
            </p>

            {/* Social Icons & Quick CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition transform hover:-translate-y-0.5 shadow-xs"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition transform hover:-translate-y-0.5 shadow-xs"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition transform hover:-translate-y-0.5 shadow-xs cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                aria-label="Copy Email"
                title="1-Click Copy Email"
              >
                {copiedEmail ? <CheckCheck className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                <span className="hidden sm:inline">{copiedEmail ? "Copied!" : "Copy Email"}</span>
              </button>

              <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden sm:block"></div>

              <a
                href="#projects"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                Explore Projects ↓
              </a>

              <a
                href="#services"
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition transform hover:-translate-y-0.5"
              >
                View Services ⚡
              </a>
            </div>
          </div>

          {/* Right Signature Morphing Blob Avatar */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Ambient background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10 dark:opacity-60"></div>

            {/* Blob Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92">
              <div
                className="w-full h-full animate-morph overflow-hidden border-[3.5px] border-slate-900 dark:border-slate-100 transition-all duration-700 shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroImage}), url(${profile.avatarUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 20%",
                }}
                role="img"
                aria-label={`${profile.name} portrait`}
              />

              {/* Floating React badge on blob */}
              <div className="absolute -bottom-2 -left-2 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 animate-float">
                <TechIconBadge
                  iconKey="react"
                  name="React"
                  className="w-6 h-6"
                />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 pr-1">
                  React 19 &amp; Next.js
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive "Bug Fixer & Optimization" Live Terminal Widget */}
        <div className="mt-14 p-5 sm:p-7 rounded-3xl bg-slate-900 text-slate-100 border border-slate-800 shadow-2xl transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="text-xs font-bold text-slate-400 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Diagnostics Terminal: React Performance &amp; Bug Audit</span>
              </div>
            </div>

            {/* Switch Tabs */}
            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveCodeTab('bug')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                  activeCodeTab === 'bug'
                    ? 'bg-rose-950 text-rose-300 border border-rose-800/80'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bug className="w-3.5 h-3.5" />
                <span>The Bug (Before)</span>
              </button>
              <button
                onClick={() => setActiveCodeTab('fix')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                  activeCodeTab === 'fix'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/80'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>The Fix (Optimized)</span>
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800/60">
              <pre>
                <code>{CODE_EXAMPLES[activeCodeTab].code}</code>
              </pre>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs uppercase tracking-widest font-extrabold text-slate-400">
                Audit Results:
              </div>
              <div
                className={`p-3.5 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                  activeCodeTab === 'fix'
                    ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                }`}
              >
                {activeCodeTab === 'fix' ? <Zap className="w-4 h-4 shrink-0" /> : <Bug className="w-4 h-4 shrink-0" />}
                <span>{CODE_EXAMPLES[activeCodeTab].metric}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeCodeTab === 'fix'
                  ? "Applied memoized selectors and stable callback references to eliminate 2,000+ redundant component re-renders per interaction frame."
                  : "Frequent re-renders triggered by inline function instantiations and unmemoized array operations inside parent components."}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Bar (Stefan.dev Iconic Section) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Label */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight whitespace-nowrap">
                Tech Stack
              </span>
              <div className="h-6 w-0.5 bg-slate-400 dark:bg-slate-600 hidden md:block"></div>
            </div>

            {/* Tech Badges List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 relative">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="group relative p-2 rounded-xl bg-white dark:bg-slate-800 shadow-xs hover:shadow-md border border-slate-200/80 dark:border-slate-700/80 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110"
                >
                  <TechIconBadge
                    iconKey={tech.iconKey}
                    name={tech.name}
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  />

                  {/* Tooltip on hover */}
                  <div className="opacity-0 pointer-events-none group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-md whitespace-nowrap shadow-xl z-20 transition-opacity duration-200">
                    <span>{tech.name}</span>
                    <span className="text-blue-400 ml-1">
                      ({tech.proficiency}%)
                    </span>
                    <div className="w-2 h-2 bg-slate-900 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Selected Skill Pill info if hovered */}
          {hoveredTech && (
            <div className="mt-4 p-3 bg-blue-50/90 dark:bg-slate-800/90 border border-blue-200/80 dark:border-blue-900/60 rounded-2xl text-xs flex items-center justify-between text-slate-700 dark:text-slate-200 shadow-sm transition-all">
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">{hoveredTech.name}:</span>
                <span>{hoveredTech.description}</span>
              </div>
              <span className="font-semibold text-slate-500 dark:text-slate-400 shrink-0 ml-4">
                Proficiency: {hoveredTech.proficiency}% ({hoveredTech.experienceYears})
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
