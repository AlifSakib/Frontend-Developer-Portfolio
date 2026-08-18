import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail, ArrowDown, MapPin, Sparkles, Check, Bug, Zap, Code2, Terminal, Copy, CheckCheck, Lightbulb } from 'lucide-react';
import { UserProfile, TechStackItem } from '../types';
import { TechIconBadge } from './TechIcons';
import confetti from 'canvas-confetti';
import heroImageWebp from "../../assets/hero/personal-photo.webp";
import heroImageJpeg from "../../assets/hero/personal-photo.jpeg";

interface HeroProps {
  profile: UserProfile;
  techStack: TechStackItem[];
}

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
  const [activeCodeTab, setActiveCodeTab] = useState<'bug' | 'fix'>('fix');
  const [copiedEmail, setCopiedEmail] = useState(false);

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
            {/* Status Pill with Responsive Single-Line Text */}
            {profile.isOpenToWork && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-tight shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="hidden sm:inline">
                  {profile.statusText || "Available for frontend engineering, bug fixing & technical writing"}
                </span>
                <span className="sm:hidden whitespace-nowrap">
                  Available for freelance projects &amp; hire
                </span>
              </div>
            )}

            {/* Main Solid Headline (Zero UI Shift) */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                {profile.title}{" "}
                <span
                  className="inline-block animate-wave select-none"
                  role="img"
                  aria-label="waving hand"
                >
                  {profile.wavingEmoji || "👋"}
                </span>
              </h1>

              {/* 3 Core Value-Proposition Badge Pills (Responsive to prevent single-item mobile stacking) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1">
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform hover:-translate-y-0.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="sm:hidden">React &amp; Next.js</span>
                  <span className="hidden sm:inline">React &amp; Next.js Architecture</span>
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200/80 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform hover:-translate-y-0.5">
                  <Bug className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span className="sm:hidden">UI Bug Fixer</span>
                  <span className="hidden sm:inline">UI Bug Diagnostics &amp; Refactor</span>
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform hover:-translate-y-0.5">
                  <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="sm:hidden">Tech Writer</span>
                  <span className="hidden sm:inline">Technical Writing &amp; Docs</span>
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              {profile.bio}
            </p>

            {/* Action Buttons & Quick Connect Row */}
            <div className="space-y-4 pt-2">
              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
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

                {/* 1-Click Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer ${
                    copiedEmail
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 scale-102'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600'
                  }`}
                  aria-label={`Copy email: ${profile.email}`}
                  title="1-Click Copy Email"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Copied! ({profile.email})</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Link Badges */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Find me on:</span>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold transition shadow-2xs border border-slate-200/60 dark:border-slate-700/60"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold transition shadow-2xs border border-slate-200/60 dark:border-slate-700/60"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Signature Morphing Blob Avatar */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Ambient background glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10 dark:opacity-60"></div>

            {/* Blob Image Container (LCP Optimized) */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92">
              <picture>
                <source srcSet={heroImageWebp} type="image/webp" />
                <img
                  src={heroImageJpeg}
                  alt={`${profile.name} portrait`}
                  width="368"
                  height="368"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full animate-morph overflow-hidden border-[3.5px] border-slate-900 dark:border-slate-100 transition-all duration-700 shadow-2xl object-cover object-[center_20%]"
                />
              </picture>

              {/* Floating React badge on blob */}
              <div className="absolute -bottom-2 -left-2 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 animate-float">
                <TechIconBadge
                  iconKey="react"
                  name="React"
                  className="w-6 h-6"
                />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100 pr-1">
                  React &amp; Next.js
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

            {/* Switch Tabs - Symmetrical full-width on mobile, auto on desktop */}
            <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveCodeTab('bug')}
                className={`w-full px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer text-center ${
                  activeCodeTab === 'bug'
                    ? 'bg-rose-950 text-rose-300 border border-rose-800/80 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bug className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">The Bug (Before)</span>
              </button>
              <button
                onClick={() => setActiveCodeTab('fix')}
                className={`w-full px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer text-center ${
                  activeCodeTab === 'fix'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/80 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">The Fix (Optimized)</span>
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8 w-full min-w-0 overflow-x-auto font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-3.5 sm:p-4 rounded-2xl border border-slate-800/60">
              <pre className="w-full">
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

        {/* Tech Stack Bar with Cyclone Swirl-In Animation */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Label */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-4 shrink-0"
            >
              <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight whitespace-nowrap">
                Tech Stack
              </span>
              <div className="h-6 w-0.5 bg-slate-400 dark:bg-slate-600 hidden md:block"></div>
            </motion.div>

            {/* Tech Badges Cyclone Swirl Container */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5"
            >
              {techStack.map((tech, index) => {
                const angle = (index / techStack.length) * Math.PI * 2 * 1.5;
                const radius = 80 + (index % 3) * 35;
                const isClockwise = index % 2 === 0;

                return (
                  <motion.div
                    key={tech.name}
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 0.15,
                        rotate: isClockwise ? 360 : -360,
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius,
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        x: 0,
                        y: 0,
                        transition: {
                          type: 'spring',
                          stiffness: 180,
                          damping: 16,
                          mass: 0.8,
                          delay: index * 0.055,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="group relative p-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-xs hover:shadow-lg border border-slate-200/80 dark:border-slate-700/80 cursor-pointer transition-shadow"
                  >
                    <TechIconBadge
                      iconKey={tech.iconKey}
                      name={tech.name}
                      className="w-7 h-7 sm:w-8 sm:h-8"
                    />

                    {/* Floating Fun Fact / Pro Tip Tooltip */}
                    <div className="opacity-0 pointer-events-none group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-slate-800 z-50 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                      <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-800 mb-1.5">
                        <span className="font-bold text-xs text-white">{tech.name}</span>
                        <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/40">
                          {tech.category}
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-300 leading-relaxed font-normal flex items-start gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{tech.funFact || tech.description}</span>
                      </div>

                      {/* Tooltip bottom indicator arrow */}
                      <div className="w-3 h-3 bg-slate-900/95 dark:bg-slate-950/95 border-r border-b border-slate-800 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
