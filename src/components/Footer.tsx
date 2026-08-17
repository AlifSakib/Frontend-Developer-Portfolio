import React from 'react';
import { UserProfile } from '../types';
import { Linkedin, Github, Twitter, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { APP_VERSION_TAG } from '../utils/version';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Copyright & Version Text */}
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <p className="text-sm font-bold text-slate-200">
              Copyright © {new Date().getFullYear()} {profile.name}.
            </p>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-mono font-bold text-slate-300 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {APP_VERSION_TAG}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Engineered with React 19, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        {/* Right Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            {/* <a
              href={profile.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm hover:scale-105 active:scale-95"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
