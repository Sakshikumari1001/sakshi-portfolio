import React from 'react';
import { ExternalLink, Github, CheckCircle2, Layers, Cpu, Cloud, Database } from 'lucide-react';
import { RentRideMockup, ProctorEdMockup } from './ProjectMockups';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-3xl bg-[#0b101b]/95 border border-slate-800/80 p-6 sm:p-7 shadow-xl hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Card Header: Number & Tag */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
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
        <div className="mt-5 space-y-2.5">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Visual Project Screenshot Mockup */}
        {project.image ? (
          <div className="mt-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/90 group/mockup relative aspect-[16/10] shadow-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-500" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b]/70 via-transparent to-transparent opacity-60 pointer-events-none"></div>
          </div>
        ) : (
          /* Fallback Developer Visual Mockup */
          <div className="mt-5">
            {project.mockupType === 'vehicle_rental' && <RentRideMockup />}
            {project.mockupType === 'proctored_exam' && <ProctorEdMockup />}
          </div>
        )}

        {/* Key Features List */}
        <div className="mt-5 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            Core Features:
          </span>
          <div className="space-y-1.5">
            {project.features.slice(0, 5).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
          {project.features.length > 5 && (
            <div className="text-[11px] font-mono text-slate-500 pt-0.5">
              + {project.features.length - 5} more verified capabilities
            </div>
          )}
        </div>

        {/* Deployment Metadata if available */}
        {project.deployment && (
          <div className="mt-4 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">Frontend:</span>
              <span className="text-cyan-400">{project.deployment.frontend}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Backend:</span>
              <span className="text-purple-400">{project.deployment.backend}</span>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-5 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/90 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md font-mono transition-all transform hover:-translate-y-0.5"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 font-mono transition-all transform hover:-translate-y-0.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
