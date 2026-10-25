import React from 'react';
import { ArrowDown, Mail, Download, Github, Linkedin, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const handleCvClick = (e: React.MouseEvent) => {
    // If real CV link is provided, allow normal download/opening.
    // If empty, prevent 404 and open helpful modal.
    if (!PORTFOLIO_DATA.personal.cvUrl || PORTFOLIO_DATA.personal.cvUrl.trim().length === 0) {
      e.preventDefault();
      onOpenCvModal();
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows (clean, restrained) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-violet-600/10 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker with status */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>COMSATS University Islamabad &middot; Attock Campus</span>
            </div>

            {/* Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans">
                {PORTFOLIO_DATA.personal.name}
              </h1>

              {/* Roles */}
              <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                {PORTFOLIO_DATA.personal.role}
              </p>
            </div>

            {/* Exact Introduction from prompt */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
              &ldquo;{PORTFOLIO_DATA.personal.introduction}&rdquo;
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-150 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all duration-150 active:scale-95"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-blue-400" />
              </a>

              <button
                type="button"
                onClick={handleCvClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-150 active:scale-95"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-5 border-t border-slate-800/80 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">Profiles:</span>
              
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group"
                aria-label="Muhammad Hammad LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-xs sm:text-sm">LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                aria-label="Muhammad Hammad GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-xs sm:text-sm">GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Technology Artwork */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/60 p-1 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-2xl shadow-black/40">
              <div className="relative rounded-xl overflow-hidden bg-[#0a0d14] aspect-[4/3]">
                {/* Generated Abstract Tech Visual */}
                <img
                  src="/src/assets/images/hero_abstract_tech_1792934219954.jpg"
                  alt="Abstract Neural & Data Automation Flow - Muhammad Hammad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized SVG visual if network is disabled
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtle scrim & interface overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-black/20 pointer-events-none" />

                {/* Architecture badge indicator */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0c101a]/90 backdrop-blur-md border border-slate-800/90 rounded-lg p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">System Architecture</div>
                      <div className="text-[11px] text-slate-400 font-mono">FastAPI &middot; n8n &middot; AI Agents</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                    Production
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Discipline Strip below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/70 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">Academic Institution</div>
              <div className="text-sm font-semibold text-slate-200 mt-0.5">COMSATS University Islamabad</div>
              <div className="text-xs text-slate-400">Attock Campus &middot; Software Engineering</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">Core Engineering Focus</div>
              <div className="text-sm font-semibold text-slate-200 mt-0.5">AI Automation & Backend APIs</div>
              <div className="text-xs text-slate-400">n8n, Python, FastAPI, SQL & Modern Databases</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">Current Status</div>
              <div className="text-sm font-semibold text-slate-200 mt-0.5">Open for Opportunities</div>
              <div className="text-xs text-slate-400">Internships, Junior Roles & Freelance Contracts</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
