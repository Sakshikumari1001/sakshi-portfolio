import React, { useState } from 'react';
import { 
  Bot, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Database, 
  Sparkles, 
  Terminal, 
  AlertCircle,
  CheckCircle2,
  Workflow,
  Search,
  Zap,
  Clock,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { featuredProjectData } from '../data/portfolioData';

const FeaturedProject = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = featuredProjectData.architectureStages[activeStep];

  return (
    <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Banner Tag & Number */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold">
            Project {featuredProjectData.number}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-mono">
            <Sparkles className="w-3 h-3" />
            {featuredProjectData.tag}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>{featuredProjectData.timeline}</span>
        </div>
      </div>

      {/* Main Project Content Header */}
      <div className="mt-8 space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          FEATURED FLAGSHIP ARCHITECTURE
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {featuredProjectData.title}
        </h3>
        <p className="text-base text-slate-300 leading-relaxed font-normal">
          {featuredProjectData.description}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={featuredProjectData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 font-mono transition-all transform hover:-translate-y-0.5"
          >
            <span>Live Application</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={featuredProjectData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-white/20 font-mono transition-all transform hover:-translate-y-0.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {/* Problem & Solution Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
          <div className="text-xs font-mono text-rose-400 font-semibold flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            The Problem
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {featuredProjectData.problem}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            The Solution
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {featuredProjectData.solution}
          </p>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="mt-6 space-y-2">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
          Engineered With:
        </span>
        <div className="flex flex-wrap gap-2">
          {featuredProjectData.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-950 text-cyan-300 border border-cyan-500/20 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Architecture Flow Section - Spacious, Clean, No Cramping */}
      <div className="mt-10 pt-8 border-t border-white/10 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Workflow className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
              End-to-End RAG Pipeline Architecture Flow
            </h4>
          </div>
          <span className="text-xs font-mono text-cyan-400/90">
            Click any stage below to inspect the engineering details
          </span>
        </div>

        {/* Scrollable / Spacious Step Cards Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin">
          {featuredProjectData.architectureStages.map((stage, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 border shrink-0 ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/10 font-bold'
                    : 'bg-slate-950/80 border-white/10 text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {stage.step}
                </span>
                <span>{stage.name}</span>
                {stage.step < 10 && <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Active Stage Inspector Panel - Large, Comfortable, Beautiful */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs">
                {currentStage.step}
              </span>
              <div>
                <h5 className="text-base font-bold text-white font-mono">
                  {currentStage.name}
                </h5>
                <span className="text-xs text-cyan-400 font-mono">
                  Role: {currentStage.role}
                </span>
              </div>
            </div>

            <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-white/10">
              Technology: <strong className="text-cyan-300">{currentStage.tech}</strong>
            </span>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed">
            {currentStage.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">
                Pipeline Input:
              </span>
              <span className="text-slate-200">{currentStage.input}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase text-emerald-400 font-bold block">
                Pipeline Output:
              </span>
              <span className="text-emerald-300">{currentStage.output}</span>
            </div>
          </div>
        </div>

        {/* Professional Limitation & Challenge Card */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-amber-500/20 flex items-start gap-3">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-mono font-semibold text-amber-300">Engineering Note &amp; Scalability Considerations:</h5>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              "{featuredProjectData.challenges}"
            </p>
          </div>
        </div>

      </div>

      {/* Key Features Section */}
      <div className="mt-10 pt-8 border-t border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
            Key Architectural &amp; Functional Features
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredProjectData.keyFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950/50 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeaturedProject;
