import React, { useState } from 'react';
import { Code, Play, Copy, Check, Sparkles } from 'lucide-react';

const SNIPPET_TEMPLATES = {
  button: {
    name: 'Interactive Glowing Button',
    html: `<button class="glow-btn">Hover for Aurora Glow ✨</button>`,
    css: `.glow-btn {
  background: #2563eb;
  color: white;
  padding: 12px 28px;
  font-family: sans-serif;
  font-weight: 700;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  transition: all 0.3s ease;
}
.glow-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.6);
  background: #1d4ed8;
}`
  },
  card: {
    name: 'Glassmorphism Profile Card',
    html: `<div class="card">
  <div class="dot"></div>
  <h3>Frontend Engineer</h3>
  <p>Crafting high-speed React applications with modern CSS.</p>
</div>`,
    css: `.card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  padding: 24px;
  color: #1e293b;
  max-width: 280px;
  font-family: sans-serif;
}
.dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  margin-bottom: 12px;
}
h3 { margin: 0 0 8px 0; font-size: 18px; }
p { margin: 0; font-size: 13px; opacity: 0.85; line-height: 1.4; }`
  }
};

export const CodeSandboxDemo: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState<'button' | 'card'>('button');
  const [htmlCode, setHtmlCode] = useState(SNIPPET_TEMPLATES.button.html);
  const [cssCode, setCssCode] = useState(SNIPPET_TEMPLATES.button.css);
  const [copied, setCopied] = useState(false);

  const selectTemplate = (key: 'button' | 'card') => {
    setActiveTemplate(key);
    setHtmlCode(SNIPPET_TEMPLATES[key].html);
    setCssCode(SNIPPET_TEMPLATES[key].css);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${htmlCode}\n\n<style>\n${cssCode}\n</style>`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 md:p-6 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            DevLens Live Component Playground
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Edit HTML & CSS below to see instant live rendering in the sandbox stage</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => selectTemplate('button')}
            className={`px-3 py-1 text-xs font-semibold rounded ${activeTemplate === 'button' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
          >
            Button Preset
          </button>
          <button
            onClick={() => selectTemplate('card')}
            className={`px-3 py-1 text-xs font-semibold rounded ${activeTemplate === 'card' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
          >
            Glass Card
          </button>
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 text-xs font-semibold rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Code Inputs */}
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">HTML Structure</span>
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              className="w-full h-24 p-2.5 font-mono text-xs bg-slate-900 text-emerald-400 rounded-md border border-slate-700 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">CSS Rules</span>
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              className="w-full h-32 p-2.5 font-mono text-xs bg-slate-900 text-sky-300 rounded-md border border-slate-700 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>
        </div>

        {/* Live Output Stage */}
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Live Sandbox Output</span>
          <div className="flex-1 min-h-[220px] rounded-md border border-slate-200 dark:border-slate-700 bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: cssCode }} />
            <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
          </div>
        </div>
      </div>
    </div>
  );
};
