import React, { useState } from 'react';
import { ExternalLink, Github, Info, Bot, Users, PackageCheck, Stethoscope, CalendarCheck } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'AI & Automation', 'CRM & Management', 'Backend & Full-Stack'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeFilter);

  // Thematic preview rendering for each project to ensure clean, professional, non-broken visual presentation
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'campus-resolve-ai':
        return (
          <div className="h-full w-full bg-gradient-to-br from-blue-950/40 via-slate-900 to-[#0c1018] p-5 flex flex-col justify-between border-b border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/50">
                Ticket Classification Model
              </span>
              <Bot className="w-4 h-4 text-blue-400" />
            </div>
            <div className="space-y-2 py-2">
              <div className="bg-slate-900/80 border border-slate-800 rounded p-2 text-[11px] font-mono text-slate-300">
                <span className="text-blue-400">INPUT:</span> Campus WiFi Latency in CS Lab 4
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded p-2 text-[11px] font-mono text-slate-300">
                <span className="text-emerald-400">TRIAGED:</span> Priority High &rarr; IT Infrastructure Team
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Automated Routing Active</span>
              <span className="text-slate-400">AI-Assisted Workflow</span>
            </div>
          </div>
        );

      case 'admit-crew':
        return (
          <div className="h-full w-full bg-gradient-to-br from-indigo-950/40 via-slate-900 to-[#0c1018] p-5 flex flex-col justify-between border-b border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-900/50">
                Admissions Pipeline
              </span>
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="grid grid-cols-3 gap-2 py-3 text-center text-[11px]">
              <div className="bg-slate-900/90 border border-slate-800 rounded p-2">
                <div className="text-slate-400 text-[10px]">Applied</div>
                <div className="font-bold text-white mt-0.5">Stage 1</div>
              </div>
              <div className="bg-indigo-950/50 border border-indigo-800/50 rounded p-2">
                <div className="text-indigo-300 text-[10px]">Documents</div>
                <div className="font-bold text-indigo-200 mt-0.5">Verified</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 rounded p-2">
                <div className="text-slate-400 text-[10px]">Visa Prep</div>
                <div className="font-bold text-emerald-400 mt-0.5">Queued</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Study Abroad CRM</span>
              <span className="text-indigo-300 font-mono">End-to-End</span>
            </div>
          </div>
        );

      case 'ai-inventory-system':
        return (
          <div className="h-full w-full bg-gradient-to-br from-cyan-950/40 via-slate-900 to-[#0c1018] p-5 flex flex-col justify-between border-b border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-900/50">
                Stock Operations Matrix
              </span>
              <PackageCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="space-y-2 py-2">
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded p-2 text-[11px] font-mono">
                <span className="text-slate-300">SKU #8824 Electronics</span>
                <span className="text-amber-400 font-bold">Low: 14 units</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded p-2 text-[11px] font-mono">
                <span className="text-slate-300">AI Reorder Recommendation</span>
                <span className="text-cyan-400">+50 Batch</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Mall & Retail Ops</span>
              <span className="text-cyan-300 font-mono">FastAPI</span>
            </div>
          </div>
        );

      case 'clinic-appointment-system':
        return (
          <div className="h-full w-full bg-gradient-to-br from-emerald-950/40 via-slate-900 to-[#0c1018] p-5 flex flex-col justify-between border-b border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/50">
                Clinic Scheduling Desk
              </span>
              <Stethoscope className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="grid grid-cols-2 gap-2 py-3 text-[11px]">
              <div className="bg-slate-900/80 border border-slate-800 rounded p-2">
                <div className="text-slate-400 text-[10px]">Consultation</div>
                <div className="text-slate-200 font-mono mt-0.5">09:30 AM &middot; Dr. Harris</div>
              </div>
              <div className="bg-emerald-950/40 border border-emerald-800/50 rounded p-2">
                <div className="text-emerald-300 text-[10px]">Patient Status</div>
                <div className="text-emerald-200 font-semibold mt-0.5">Confirmed</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Conflict-Free Roster</span>
              <span className="text-emerald-300 font-mono">Vercel Live</span>
            </div>
          </div>
        );

      case 'event-registration-system':
        return (
          <div className="h-full w-full bg-gradient-to-br from-violet-950/40 via-slate-900 to-[#0c1018] p-5 flex flex-col justify-between border-b border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-violet-300 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-900/50">
                Event Coordination Engine
              </span>
              <CalendarCheck className="w-4 h-4 text-violet-400" />
            </div>
            <div className="space-y-2 py-2">
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded p-2 text-[11px] font-mono">
                <span className="text-slate-300">Engineering Summit 2026</span>
                <span className="text-violet-300 font-semibold">Capacity 92%</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded p-2 text-[11px] font-mono">
                <span className="text-slate-300">Ticket Validation</span>
                <span className="text-emerald-400">QR Ready</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Attendee Gate Protocol</span>
              <span className="text-violet-300 font-mono">Live System</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#060810]/50 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
              <span>03 / Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Deployed, production-ready web applications and AI-assisted automation platforms built to solve practical workflow problems.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Project Cards Grid with Consistent Card Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0d1017] border border-slate-800/90 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-black/30"
            >
              <div>
                {/* Visual Preview Banner */}
                <div className="h-44 w-full relative overflow-hidden bg-slate-900">
                  {renderProjectVisual(project)}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-2.5">
                    <span className="font-mono text-blue-400/90">{project.category}</span>
                    <span className="text-slate-400">&middot;</span>
                    <span className="text-slate-400">{project.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight font-sans">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 mt-2 space-y-2.5">
                <div className="flex items-center gap-2">
                  {/* Live Demo Button with Exact Target URL */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all duration-150 active:scale-95"
                    aria-label={`Open Live Demo for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                    title="View project details"
                    aria-label={`View details for ${project.title}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* GitHub Profile Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800/80 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Code Repository updates */}
        <div className="mt-12 p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <span>
              All live applications are deployed on Vercel. Code repositories link to Muhammad Hammad&apos;s verified GitHub profile.
            </span>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium shrink-0"
          >
            <span>Explore Github Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
