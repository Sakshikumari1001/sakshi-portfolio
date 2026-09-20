import React from 'react';
import { Sparkles, FolderGit2 } from 'lucide-react';
import { regularProjectsData } from '../data/portfolioData';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#07050f] relative border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-rose-400 bg-rose-950/40 border border-rose-500/30">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-1">
            Verified full-stack and AI applications engineered with clean architectures, real-time communications, and deployed backends.
          </p>
        </div>

        {/* 01 — Flagship Project: GitHub RAG Assistant */}
        <div className="mb-14">
          <FeaturedProject />
        </div>

        {/* 02, 03 & 04 — Regular Project Cards Grid (RentRide, ProctorEd, BYOD) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {regularProjectsData.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
