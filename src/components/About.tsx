import React from 'react';
import { UserProfile } from '../types';
import { Code2, Award, Laptop, Sparkles, CheckCircle } from 'lucide-react';

interface AboutProps {
  profile: UserProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/50 transition-colors border-t border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Graphic with Rotating Circle Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Workspace Image Card */}
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Developer Coding Setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Rotating Circular Text Stamp Badge (Iconic Stefan Topalovic Style) */}
            <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-36 h-36 sm:w-44 sm:h-44 bg-white dark:bg-slate-900 rounded-full shadow-2xl border-4 border-white dark:border-slate-800 flex items-center justify-center">
              {/* Rotating SVG Text */}
              <svg className="w-full h-full animate-spin-slow p-1" viewBox="0 0 200 200">
                <path
                  id="circlePath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  fill="none"
                />
                <text className="text-[14px] font-black uppercase tracking-[0.24em] fill-slate-900 dark:fill-white">
                  <textPath href="#circlePath" startOffset="0%">
                    FRONT-END WEB DEVELOPER • FRONT-END DEV •
                  </textPath>
                </text>
              </svg>

              {/* Center icon */}
              <div className="absolute w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm tracking-widest uppercase">
                ABOUT ME
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 leading-snug">
                {profile.aboutTitle}
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{profile.aboutText1}</p>
              <p>{profile.aboutText2}</p>
            </div>

            {/* Quick Metrics Bento Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                  {profile.yearsOfExperience}
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                  Years of Experience
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                  {profile.completedProjectsCount}
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                  Shipped Projects
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  100%
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                  Clean & Tested Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
