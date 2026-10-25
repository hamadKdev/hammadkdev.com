import React, { useState } from 'react';
import { X, Mail, Check, Copy, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    if (PORTFOLIO_DATA.personal.email) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasConfiguredCv = Boolean(PORTFOLIO_DATA.personal.cvUrl && PORTFOLIO_DATA.personal.cvUrl.trim().length > 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg bg-[#0d111a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 id="cv-modal-title" className="text-lg font-bold text-white">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-slate-400">
              {PORTFOLIO_DATA.personal.name} &middot; Software Engineering
            </p>
          </div>
        </div>

        {hasConfiguredCv ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-300">
              The verified CV document is available for direct view and download.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={PORTFOLIO_DATA.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition-colors"
              >
                <span>Open Verified CV</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Muhammad Hammad is actively applying for software engineering internships and junior developer roles. To ensure recruiters always receive the latest version tailored to specific roles, you can request the CV directly or connect via LinkedIn.
            </p>

            <div className="p-3.5 bg-slate-900/80 border border-slate-800/80 rounded-xl space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-mono">Direct Contact:</span>
                <span className="text-slate-300">{PORTFOLIO_DATA.personal.email}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-mono">Current Focus:</span>
                <span className="text-blue-400 font-medium">AI Automation & Backend Engineering</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {PORTFOLIO_DATA.personal.email && (
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=CV%20Request%20-%20Muhammad%20Hammad&body=Hi%20Muhammad,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20request%20your%20current%20CV%20for%20an%20engineering%20opportunity.`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request CV via Email</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium rounded-lg transition-colors border border-slate-700"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium rounded-lg transition-colors border border-slate-800"
              >
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
