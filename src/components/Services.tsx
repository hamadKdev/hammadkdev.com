import React from 'react';
import { ArrowRight, Zap, GitBranch, Bot, Server, Network, Database, Cpu, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-indigo-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-violet-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      default:
        return <Zap className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#080a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
              <span>04 / Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How I Can Help
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Practical engineering solutions designed to automate repetitive business tasks, streamline data operations, and deliver production APIs.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all duration-150 active:scale-95 shrink-0"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Grid (7 practical services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-[#0d1017] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Service Icon & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white tracking-tight font-sans">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {service.summary}
                </p>

                {/* Deliverables / Scope */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Outcomes:
                  </div>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <span>Inquire about this capability</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
