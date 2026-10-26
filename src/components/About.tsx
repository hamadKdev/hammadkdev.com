import React from 'react';
import { Code2, Bot, Database, Workflow, ShieldCheck, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#060810]/50 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            <span>01 / Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Engineering discipline, practical automation, and reliable backend architectures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {PORTFOLIO_DATA.personal.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-400 mb-4">
                What drives my engineering work:
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Workflow className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-white">Practical Business Utility:</strong> Building solutions for actual workflows, such as campus complaints, admissions CRM, or inventory management.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-white">AI As An Accelerator:</strong> Applying LLMs and agent toolsets to automate repetitive decisions, classify information, and augment human workflows.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-white">Clean Architecture & Integrity:</strong> Creating type-safe backend APIs with FastAPI, well-modeled relational databases, and clean frontends.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Technical Summary Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0e121c] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Primary Toolchain</span>
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-400">Languages</span>
                  <span className="font-mono text-slate-200">Python, SQL, TypeScript/JS</span>
                </div>
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-400">Backend APIs</span>
                  <span className="font-mono text-slate-200">FastAPI, RESTful standards</span>
                </div>
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-400">Automation</span>
                  <span className="font-mono text-slate-200">n8n, AI Agents, LLM pipelines</span>
                </div>
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-400">Databases</span>
                  <span className="font-mono text-slate-200">PostgreSQL / Supabase, SQL</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Deployment</span>
                  <span className="font-mono text-slate-200">Vercel, Cloud Run, Git</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/20 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Recruiter & Client Ready</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently taking on select projects and interviewing for software engineering internships and junior developer positions. I bring enthusiasm, academic rigor from COMSATS, and practical full-stack deployment experience.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
