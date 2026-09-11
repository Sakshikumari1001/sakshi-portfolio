import React from 'react';
import { ExternalLink, Github, CheckCircle2, Layers, Cpu, Cloud, Database } from 'lucide-react';
import { RentRideMockup, ProctorEdMockup } from './ProjectMockups';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group">
      <div>
        {/* Card Header: Number & Tag */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold">
              Project {project.number}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.badge}
            </span>
          </div>

          <span className="text-xs font-mono text-slate-500">
            {project.tag}
          </span>
        </div>

        {/* Title & Description */}
        <div className="mt-5 space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Custom Developer Visual Mockup */}
        <div className="mt-6">
          {project.mockupType === 'vehicle_rental' && <RentRideMockup />}
          {project.mockupType === 'proctored_exam' && <ProctorEdMockup />}
        </div>

        {/* Key Features List */}
        <div className="mt-6 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            Core Features:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.slice(0, 8).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          {project.features.length > 8 && (
            <div className="text-[11px] font-mono text-slate-500 pt-1">
              + {project.features.length - 8} more verified production capabilities
            </div>
          )}
        </div>

        {/* Deployment Metadata if available (ProctorEd) */}
        {project.deployment && (
          <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">Frontend:</span>
              <span className="text-cyan-400">{project.deployment.frontend}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Backend:</span>
              <span className="text-purple-400">{project.deployment.backend}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Database:</span>
              <span className="text-emerald-400">{project.deployment.database}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Email Service:</span>
              <span className="text-amber-400">{project.deployment.email}</span>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-6 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md font-mono transition-all transform hover:-translate-y-0.5"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-white/20 font-mono transition-all transform hover:-translate-y-0.5"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
