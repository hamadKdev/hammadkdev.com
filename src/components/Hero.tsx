import React from 'react';
import { ArrowDown, Mail, Download, Github, Linkedin, ExternalLink, Terminal, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const resumeUrl = PORTFOLIO_DATA.personal.cvUrl || '/Muhammad-Hammad-Resume.pdf';

  const handleCvClick = (e: React.MouseEvent) => {
    if (!resumeUrl || resumeUrl.trim().length === 0) {
      e.preventDefault();
      onOpenCvModal();
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows (clean, restrained) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-600/12 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-fuchsia-600/12 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Context kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>COMSATS University Islamabad &middot; Attock Campus</span>
            </div>

            {/* Name & Exact Professional Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans">
                {PORTFOLIO_DATA.personal.name}
              </h1>

              {/* Exact Prominent Professional Title directly below name */}
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 font-sans tracking-tight">
                {PORTFOLIO_DATA.personal.role}
              </h2>
            </div>

            {/* Mobile-only Portrait Placement for neat vertical flow */}
            <div className="block lg:hidden my-6">
              <div className="relative mx-auto max-w-[280px] sm:max-w-[320px]">
                <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-[#0c101a] p-2 border border-slate-700/60 shadow-xl shadow-black/50">
                  <div className="relative rounded-2xl overflow-hidden bg-white flex items-end justify-center aspect-[4/5] max-h-[360px]">
                    <img
                      src="/assets/muhammad-hammad.jpeg"
                      alt="Muhammad Hammad - Full Stack AI Automation Engineer"
                      className="w-full h-full object-contain object-bottom select-none"
                      loading="eager"
                      onError={(e) => {
                        // Fallback to original uploaded asset path if needed
                        e.currentTarget.src = '/assets/aistudio/WhatsApp_Image_2026-10-25_at_8.23.37_PM_08fd3de6.jpeg';
                      }}
                    />
                  </div>
                  <div className="mt-2 py-2 px-3 bg-[#0c101a]/95 rounded-xl border border-slate-800/90 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Muhammad Hammad</span>
                    <span className="text-[11px] text-blue-400 font-mono">SE &middot; COMSATS</span>
                  </div>
                </div>
              </div>
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

              {/* Clearly visible Resume button in Hero section */}
              <a
                href="#resume"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-blue-500/40 hover:border-blue-400 rounded-lg shadow-sm transition-all duration-150 active:scale-95"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Resume</span>
              </a>

              {/* Direct Download CV action */}
              <a
                href={resumeUrl}
                download="Muhammad-Hammad-Resume.pdf"
                onClick={handleCvClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-150 active:scale-95"
                title="Download Muhammad-Hammad-Resume.pdf"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </a>
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

          {/* Right Column: Actual Uploaded Professional Portrait (Desktop) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none w-full">
              {/* Modern Framing Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 via-[#0d111a] to-[#080b10] p-2.5 border border-slate-700/60 shadow-2xl shadow-black/70 group hover:border-blue-500/40 transition-colors duration-300">
                
                {/* Photo Container with seamless background integration and object-contain */}
                <div className="relative rounded-2xl overflow-hidden bg-white flex items-end justify-center aspect-[4/5] max-h-[460px]">
                  <img
                    src="/assets/muhammad-hammad.jpeg"
                    alt="Muhammad Hammad - Full Stack AI Automation Engineer"
                    className="w-full h-full object-contain object-bottom select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                    onError={(e) => {
                      // Fallback to original uploaded asset path if needed
                      e.currentTarget.src = '/assets/aistudio/WhatsApp_Image_2026-10-25_at_8.23.37_PM_08fd3de6.jpeg';
                    }}
                  />
                </div>

                {/* Information Card below portrait */}
                <div className="mt-3 bg-[#0c101a]/95 backdrop-blur-md border border-slate-800/90 rounded-xl p-3.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">Muhammad Hammad</div>
                      <div className="text-[11px] text-blue-400 font-mono">Full Stack AI Automation Engineer</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    COMSATS
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
              <div className="text-sm font-semibold text-slate-200 mt-0.5">AI Automation &amp; Backend Systems</div>
              <div className="text-xs text-slate-400">AI Agents, n8n, Python, FastAPI, Full Stack</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">Current Status</div>
              <div className="text-sm font-semibold text-slate-200 mt-0.5">Open for Opportunities</div>
              <div className="text-xs text-slate-400">Internships, Junior Roles &amp; Freelance Contracts</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
