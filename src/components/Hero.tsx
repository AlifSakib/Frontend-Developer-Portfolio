import React, { useState } from 'react';
import { Linkedin, Github, Mail, ArrowDown, MapPin, Sparkles, Check } from 'lucide-react';
import { UserProfile, TechStackItem } from '../types';
import { TechIconBadge } from './TechIcons';
import heroImage from "../../assets/hero/personal-photo.jpeg";

interface HeroProps {
  profile: UserProfile;
  techStack: TechStackItem[];
}

export const Hero: React.FC<HeroProps> = ({ profile, techStack }) => {
  const [hoveredTech, setHoveredTech] = useState<TechStackItem | null>(null);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        {/* Main Hero Split */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            {profile.isOpenToWork && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-tight shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>
                  {profile.statusText || "Available for opportunities"}
                </span>
              </div>
            )}

            {/* Main Headline */}
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
                className="p-2.5 rounded-lg text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition transform hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition transform hover:-translate-y-0.5"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-lg text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition transform hover:-translate-y-0.5"
                aria-label="Email Me"
                title={`Send Email to ${profile.email}`}
              >
                <Mail className="w-6 h-6" />
              </a>

              <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2 hidden sm:block"></div>

              <a
                href="#projects"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow transition transform hover:-translate-y-0.5"
              >
                Explore Projects ↓
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
                  React Dev
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Bar (Stefan.dev Iconic Section) */}
        <div className="mt-20 lg:mt-24 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Label */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight whitespace-nowrap">
                Tech Stack
              </span>
              <div className="h-6 w-0.5 bg-slate-400 dark:bg-slate-600 hidden md:block"></div>
            </div>

            {/* Tech Badges List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 relative">
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
                    className="w-8 h-8 sm:w-9 sm:h-9"
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
          {/* {hoveredTech && (
            <div className="mt-4 p-3 bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200/60 dark:border-blue-900/40 rounded-xl text-xs flex items-center justify-between text-slate-700 dark:text-slate-200 animate-in fade-in duration-150">
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">{hoveredTech.name}:</span>
                <span>{hoveredTech.description}</span>
              </div>
              <span className="font-semibold text-slate-500 dark:text-slate-400 shrink-0 ml-4">
                Proficiency: {hoveredTech.proficiency}% ({hoveredTech.experienceYears})
              </span>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};
