import React, { useState } from 'react';
import { UserProfile, Experience, Education, Certification, TechStackItem } from '../types';
import { FileText, Printer, Download, Briefcase, GraduationCap, Award, Code, CheckCircle, ExternalLink, Calendar, MapPin, Mail, Globe, Sparkles } from 'lucide-react';
import { TechIconBadge } from './TechIcons';

interface ResumeProps {
  profile: UserProfile;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  techStack: TechStackItem[];
}

export const Resume: React.FC<ResumeProps> = ({
  profile,
  experiences,
  education,
  certifications,
  techStack,
}) => {
  const [activeTab, setActiveTab] = useState<'ats' | 'experience' | 'skills' | 'education'>('ats');

  // Google Drive Resume Download
  const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1NJozLc4PwtsL-oCXVXif4PPwejtoLbWH';

  const handleDownloadResume = () => {
    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.href = RESUME_DOWNLOAD_URL;
    link.download = `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 bg-white dark:bg-slate-900/50 transition-colors border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 no-print">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm tracking-widest uppercase">
              CURRICULUM VITAE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">
              Technical Resume & Qualifications 📄
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Engineered for readability, technical precision, and verified credentials
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadResume}
              className="px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-xs font-bold rounded-lg shadow-sm flex items-center gap-2 transition"
            >
              <Download className="w-4 h-4" /> Download Resume PDF
            </button>
            <a
              href={`mailto:${profile.email}?subject=Requesting%20Technical%20Resume%20-%20${profile.name}`}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-2 transition"
            >
              <Mail className="w-4 h-4" /> Email for Direct Hire
            </a>
          </div>
        </div>

        {/* View Switcher Tabs (No Print) */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 dark:border-slate-800 mb-8 no-print">
          <button
            onClick={() => setActiveTab('ats')}
            className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center gap-2 transition ${
              activeTab === 'ats'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" /> ATS Printable Document
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center gap-2 transition ${
              activeTab === 'experience'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Experience Timeline
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center gap-2 transition ${
              activeTab === 'skills'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Code className="w-4 h-4" /> Skills Matrix
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 text-xs font-bold rounded-lg flex items-center gap-2 transition ${
              activeTab === 'education'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Education & Certifications
          </button>
        </div>

        {/* Tab 1: ATS Document View (Used both on-screen and as Print Target) */}
        {activeTab === 'ats' && (
          <div
            id="printable-resume"
            className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 max-w-4xl mx-auto space-y-8 print:p-0 print:border-none print:shadow-none"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                  {profile.name}
                </h1>
                <p className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                  {profile.title}
                </p>
              </div>

              <div className="text-xs sm:text-right space-y-1 text-slate-600 dark:text-slate-300 font-medium">
                <div>📍 {profile.location.replace('📍', '').trim()}</div>
                <div>✉️ {profile.email}</div>
                <div>🌐 {profile.handle} • {profile.githubUrl.replace('https://', '')}</div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-white uppercase mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Executive Professional Summary
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {profile.aboutText1} {profile.aboutText2}
              </p>
            </div>

            {/* Technical Skills Core */}
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-white uppercase mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Technical Skills & Tooling
              </h3>
              <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <div>
                  <strong className="text-slate-900 dark:text-white">Core Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3/Sass.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Frameworks & Libraries:</strong> React (18/19), Next.js (App Router), Redux Toolkit, Zustand, Motion, Node.js / Express.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Styling & UI Systems:</strong> Tailwind CSS, CSS Grid/Flexbox, Design Systems (Figma to Code), Responsive & Accessible UI (WCAG AA).
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Build & Testing:</strong> Vite, Webpack, Git/GitHub, Jest, React Testing Library, ESLint, CI/CD Actions.
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-white uppercase mb-4 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                          {exp.role}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-semibold">
                          {' '}— {exp.company}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {exp.period} | {exp.location}
                      </div>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h3 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-white uppercase mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
                  Education
                </h3>
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    <p className="font-bold text-slate-900 dark:text-white">{edu.degree}</p>
                    <p className="text-slate-600 dark:text-slate-400">{edu.institution} ({edu.period})</p>
                    {edu.honors && <p className="text-emerald-700 dark:text-emerald-400 font-semibold">{edu.honors}</p>}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-white uppercase mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
                  Certifications
                </h3>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {certifications.map((c, idx) => (
                    <div key={idx}>
                      <span className="font-bold text-slate-900 dark:text-white block">{c.name}</span>
                      <span className="text-slate-500">{c.issuer} • {c.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 relative pl-8 sm:pl-10"
              >
                {/* Timeline vertical dot */}
                <div className="absolute left-3 sm:left-4 top-8 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-900/50"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {exp.location} • <span className="font-bold text-slate-700 dark:text-slate-300">{exp.type}</span>
                </p>

                <ul className="space-y-2.5 mb-5 text-sm text-slate-600 dark:text-slate-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Detailed Skills Matrix */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <TechIconBadge iconKey={tech.iconKey} name={tech.name} className="w-7 h-7" />
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                          {tech.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 capitalize">
                          {tech.category} • {tech.experienceYears}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                      {tech.proficiency}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
                    {tech.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${tech.proficiency}%` }}
                    className="h-full bg-blue-600 rounded-full transition-all duration-700"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Education Card */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" /> Academic Degree
              </h3>

              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 space-y-3"
                >
                  <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {edu.institution}
                  </p>
                  <div className="text-xs text-slate-500">
                    {edu.period} | {edu.location}
                  </div>

                  {edu.honors && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                      🏆 {edu.honors}
                    </div>
                  )}

                  {edu.relevantCoursework && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Key Coursework
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.relevantCoursework.map((c, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-[11px] font-medium rounded text-slate-700 dark:text-slate-300"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" /> Professional Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                        {c.name}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {c.issuer} • Issued {c.date}
                      </p>
                      {c.credentialId && (
                        <p className="text-[11px] font-mono text-slate-400">
                          ID: {c.credentialId}
                        </p>
                      )}
                    </div>

                    {c.verifyUrl && (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 hover:bg-blue-100 transition shrink-0"
                        title="Verify Certification"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
