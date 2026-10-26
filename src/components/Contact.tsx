import React, { useState } from 'react';
import { Linkedin, Github, Mail, Copy, Check, ExternalLink, ArrowRight, MessageSquareCode } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = PORTFOLIO_DATA.personal.email;
  const hasEmail = Boolean(email && email.trim().length > 0);

  const handleCopyEmail = () => {
    if (hasEmail) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#060810]/50 backdrop-blur-[2px] relative">
      {/* Subtle background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-pink-600/8 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            <span>07 / Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Let&apos;s Build Something Useful.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am actively interviewing for software engineering internships, junior backend developer opportunities, and discussing selected freelance automation projects. Let&apos;s discuss how my backend and AI automation skills can support your engineering team or business.
          </p>
        </div>

        {/* Structured Connection Hub (No Form — Direct Verified Channels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* LinkedIn Channel */}
          <div className="bg-[#0d1017] border border-slate-800/90 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Connect on LinkedIn
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Connect directly for professional inquiries, software engineering internship roles, and technical discussions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all duration-150"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Channel */}
          <div className="bg-[#0d1017] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 mb-5 group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Explore GitHub
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Review source code, project repositories, commit activity, and backend architectural implementations.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all duration-150"
              >
                <span>Open GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Email Channel (Hidden if no email configured) */}
          {hasEmail && (
            <div className="bg-[#0d1017] border border-slate-800/90 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Email
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-mono break-all">
                  {email}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                <a
                  href={`mailto:${email}?subject=Inquiry%20from%20Portfolio%20-%20Muhammad%20Hammad`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-all duration-150"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800/90 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Future Form Slot Note & Clean Recruiter Summary */}
        <div className="mt-12 p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
              <MessageSquareCode className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Recruiters, Hiring Managers &amp; Freelance Inquiries
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Direct outreach via LinkedIn and email ensures quick response times. Response typically within 24 hours.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-blue-400 hover:text-blue-300 border border-blue-900/50 hover:border-blue-700 rounded-lg transition-colors"
            >
              <span>Message on LinkedIn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
