import React from 'react';
import { Bot, Server, Database, Layout, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'AI and Automation':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'Backend Development':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-violet-400" />;
      case 'Frontend and Deployment':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      default:
        return <Bot className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            <span>02 / Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Categorized technical stack focused on scalable backend APIs, intelligent automation, and reliable cloud deployments.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.skills.map((category) => (
            <div
              key={category.title}
              className="bg-[#0d1017] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list with clean compact badges and brief functional role */}
                <div className="mt-6 space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-blue-500/30 rounded-xl transition-all duration-150 flex items-start justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 text-right hidden sm:inline-block">
                        {skill.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{category.skills.length} core competencies</span>
                <span className="text-blue-400/80">Production Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
