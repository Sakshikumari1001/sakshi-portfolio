import React from 'react';
import { Sparkles, FolderGit2 } from 'lucide-react';
import { regularProjectsData } from '../data/portfolioData';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified full-stack and AI applications engineered with clean code architectures, security protocols, and deployed backends.
          </p>
        </div>

        {/* 01 — Flagship Project: GitHub RAG Assistant */}
        <div className="mb-12">
          <FeaturedProject />
        </div>

        {/* 02 & 03 — Regular Premium Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {regularProjectsData.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
