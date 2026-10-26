import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#060810]/50 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            <span>05 / Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Training
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Academic foundation in software engineering complemented by specialized professional training in AI automation.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((item) => {
            const isDegree = item.id === 'comsats';
            return (
              <div
                key={item.id}
                className="bg-[#0d1017] border border-slate-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      {isDegree ? (
                        <GraduationCap className="w-6 h-6 text-blue-400" />
                      ) : (
                        <Award className="w-6 h-6 text-violet-400" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-900/40 px-2.5 py-1 rounded-md">
                      {item.status}
                    </span>
                  </div>

                  {/* Degree/Program Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    {item.degreeOrProgram}
                  </h3>

                  {/* Institution Name */}
                  <div className="text-base font-medium text-slate-300 mt-1">
                    {item.institution}
                  </div>

                  {/* Metadata: Location & Period */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 space-y-2.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Credential Footnote */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 flex items-center justify-between">
                  <span>Authentic Verified Record</span>
                  <span className="font-mono text-slate-400">Academic &middot; Software Engineering</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
