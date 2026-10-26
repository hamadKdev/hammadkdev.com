import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle2, ShieldCheck, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const resumeUrl = PORTFOLIO_DATA.personal.cvUrl || '/Muhammad-Hammad-Resume.pdf';
  const downloadFilename = 'Muhammad-Hammad-Resume.pdf';

  return (
    <section id="resume" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#060810]/50 backdrop-blur-[2px] relative">
      {/* Subtle Ambient Background Accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-600/8 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
              <span>06 / Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
              Professional Resume
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Verified curriculum vitae of Muhammad Hammad — Full Stack AI Automation Engineer &amp; Software Engineering Student at COMSATS University Islamabad.
            </p>
          </div>

          {/* Primary Action Buttons (Top Bar) */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* View Resume: Opens PDF in a new browser tab */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/20 transition-all duration-150 active:scale-95"
              aria-label="View Resume PDF in a new tab"
            >
              <span>View Resume</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Download Resume: Downloads PDF as Muhammad-Hammad-Resume.pdf */}
            <a
              href={resumeUrl}
              download={downloadFilename}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg shadow-sm transition-all duration-150 active:scale-95"
              aria-label="Download Resume PDF as Muhammad-Hammad-Resume.pdf"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Main Resume Card Container */}
        <div className="bg-[#0d1017] border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
          
          {/* Header Bar of the Document Card */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm sm:text-base font-sans">
                    {downloadFilename}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900/40 px-2 py-0.5 rounded">
                    Verified PDF
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 flex flex-wrap items-center gap-2">
                  <span>589 KB</span>
                  <span>&middot;</span>
                  <span>Full Stack AI Automation Engineer</span>
                  <span>&middot;</span>
                  <span>COMSATS Attock Campus</span>
                </div>
              </div>
            </div>

            {/* Document metadata indicators */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline">Authentic Candidate Document</span>
            </div>
          </div>

          {/* Quick Summary Highlights Strip based directly on the uploaded PDF */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#0a0d14]/60 border-b border-slate-800/80 text-xs">
            <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 space-y-1">
              <div className="flex items-center gap-1.5 text-blue-400 font-mono font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <div className="font-medium text-slate-200">BS Software Engineering</div>
              <div className="text-slate-400">COMSATS University Islamabad</div>
            </div>

            <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-400 font-mono font-semibold">
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </div>
              <div className="font-medium text-slate-200">AI Automation Engineer Intern</div>
              <div className="text-slate-400">MetaKlouds &middot; July–Oct 2026</div>
            </div>

            <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 space-y-1">
              <div className="flex items-center gap-1.5 text-violet-400 font-mono font-semibold">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </div>
              <div className="font-medium text-slate-200">Full Stack AI Automation</div>
              <div className="text-slate-400">MetaKlouds &amp; AI SKOOL (Oct 2026)</div>
            </div>

            <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <div className="font-medium text-slate-200">Python, FastAPI, n8n, AI Agents</div>
              <div className="text-slate-400">Supabase, SQL, React &amp; APIs</div>
            </div>
          </div>

          {/* Embedded Interactive PDF Viewer */}
          <div className="p-4 sm:p-6 bg-[#080a0f]">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#0a0d14]">
              
              {/* PDF Preview Frame */}
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0`}
                title="Muhammad Hammad Resume PDF"
                className="w-full h-[620px] sm:h-[820px] bg-slate-950 border-0"
              />

              {/* Mobile overlay prompt if viewer is not interactive */}
              <div className="sm:hidden p-4 bg-slate-900/90 border-t border-slate-800 text-center space-y-2">
                <p className="text-xs text-slate-300">
                  Viewing on mobile? Open full-screen or download for the best reading experience.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
                  >
                    <span>Open Fullscreen</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={resumeUrl}
                    download={downloadFilename}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg"
                  >
                    <span>Download</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions Bar */}
          <div className="p-4 sm:p-6 bg-slate-900/70 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span>
                Available for software engineering internships, junior developer roles, and freelance AI automation contracts.
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={resumeUrl}
                download={downloadFilename}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
