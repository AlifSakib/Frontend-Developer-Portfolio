import React from 'react';
import { FreelanceService } from '../types';
import { Code2, Bug, Layers, CheckCircle2, ArrowRight, Zap, Clock, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ServicesProps {
  services: FreelanceService[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'bug':
        return <Bug className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'layers':
      case 'pen':
        return <Layers className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'code':
      default:
        return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  const handleCtaClick = (serviceTitle: string) => {
    trackEvent('service_cta_click', 'Services', serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-b border-slate-200/60 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            FREELANCE SERVICES &amp; SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
            High-Impact Frontend Engineering, UI Bug Fixing &amp; Real-Time WebApps ⚡
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Frontend-focused with deep API integration expertise. Whether you need production React/Next.js interfaces, rapid resolution for stubborn UI bugs, or real-time WebSocket &amp; canvas applications.
          </p>
        </div>

        {/* 2 Primary Service Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {services.slice(0, 2).map((service) => {
            const isBugFixer = service.id === 'bug-fixing-refactor';

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-9 bg-white dark:bg-slate-900 border transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  isBugFixer
                    ? 'border-rose-200/80 dark:border-rose-900/60 hover:border-rose-400'
                    : 'border-blue-200/80 dark:border-blue-900/60 hover:border-blue-400'
                }`}
              >
                <div>
                  {/* Top Badge & Icon Cluster (Zero Mobile Wrapping) */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs shrink-0 ${
                        isBugFixer
                          ? 'bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800'
                          : 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      {getIcon(service.icon)}
                    </div>
                    <span
                      className={`text-[11px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-2xs whitespace-nowrap ${
                        isBugFixer
                          ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/80'
                          : 'bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/80'
                      }`}
                    >
                      <span className="sm:hidden">{service.shortBadge || service.badge}</span>
                      <span className="hidden sm:inline">{service.badge}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 leading-normal">
                    {service.tagline}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                      Key Deliverables &amp; Capabilities:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isBugFixer ? 'text-rose-500' : 'text-blue-500'
                          }`}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action & Tech Tags */}
                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCtaClick(service.title)}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 ${
                      isBugFixer
                        ? 'bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500 shadow-rose-500/20'
                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-blue-500/20'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3rd Highlight Banner: Real-Time WebSockets & Interactive UI Systems */}
        {services[2] && (
          <div className="relative rounded-3xl p-7 sm:p-9 bg-linear-to-r from-slate-900 to-slate-800 text-white border border-slate-700/80 shadow-2xl overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 whitespace-nowrap shadow-2xs">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="sm:hidden">{services[2].shortBadge || services[2].badge}</span>
                  <span className="hidden sm:inline">{services[2].badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2">
                  {services[2].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {services[2].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[2].deliverables.slice(0, 4).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md w-full max-w-sm text-center">
                  <div className="text-xs uppercase tracking-widest font-extrabold text-amber-400 mb-1">
                    Interactive WebApps
                  </div>
                  <div className="text-lg font-bold text-white mb-3">
                    WebSockets, Canvas &amp; APIs
                  </div>
                  <button
                    onClick={() => handleCtaClick(services[2].title)}
                    className="w-full py-3 px-5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-2 transition shadow-lg active:scale-98"
                  >
                    <span>{services[2].ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technical Competency Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
            <Zap className="w-5 h-5 mx-auto text-blue-600 dark:text-blue-400 mb-2" />
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">&lt; 800ms</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">LCP &amp; Sub-second Rendering</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
            <Bug className="w-5 h-5 mx-auto text-rose-600 dark:text-rose-400 mb-2" />
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">-20%</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">UI Latency Optimization</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
            <ShieldCheck className="w-5 h-5 mx-auto text-emerald-600 dark:text-emerald-400 mb-2" />
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">100%</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Zero-Regression Bug Fixes</div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
            <Clock className="w-5 h-5 mx-auto text-amber-600 dark:text-amber-400 mb-2" />
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">&lt; 24h</div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Fast Turnaround &amp; Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};
