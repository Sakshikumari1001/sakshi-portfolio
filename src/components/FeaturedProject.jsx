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
  ShieldAlert
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

      {/* Main Project Header */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              FLAGSHIP AI ASSISTANT
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {featuredProjectData.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {featuredProjectData.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
              <div className="text-xs font-mono text-rose-400 font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Problem
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {featuredProjectData.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
              <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Solution
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {featuredProjectData.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Engineered With:
            </span>
            <div className="flex flex-wrap gap-2">
              {featuredProjectData.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-cyan-300 border border-cyan-500/20 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

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

        {/* Right: Live Interactive Architecture Pipeline Inspector */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 shadow-xl space-y-4">
            
            {/* Inspector Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Interactive RAG Architecture Flow
                </h4>
              </div>
              <span className="text-[11px] font-mono text-cyan-400/80">
                Click steps to inspect
              </span>
            </div>

            {/* Stepper Pipeline Flow Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 font-mono text-[11px]">
              {featuredProjectData.architectureStages.map((stage, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStep(idx)}
                    className={`p-2 rounded-lg text-left transition-all duration-200 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400/50 text-cyan-300 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-white/5 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                        isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {stage.step}
                      </span>
                      {stage.step < 10 && <span className="text-slate-600 text-[10px]">↓</span>}
                    </div>
                    <span className="font-medium mt-1 truncate block text-[10px]">
                      {stage.short}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Inspector Panel */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-3 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Stage {currentStage.step}: {currentStage.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {currentStage.role}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {currentStage.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="p-2 rounded bg-slate-950/60 border border-white/5">
                  <span className="text-slate-400 block text-[10px]">Technology / Parser:</span>
                  <span className="text-white font-medium">{currentStage.tech}</span>
                </div>
                <div className="p-2 rounded bg-slate-950/60 border border-white/5">
                  <span className="text-slate-400 block text-[10px]">Pipeline Input:</span>
                  <span className="text-slate-300 font-medium truncate block">{currentStage.input}</span>
                </div>
              </div>

              <div className="p-2 rounded bg-slate-950/60 border border-white/5 text-[11px]">
                <span className="text-slate-400 block text-[10px]">Pipeline Output:</span>
                <span className="text-emerald-400 font-medium">{currentStage.output}</span>
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

      </div>

      {/* Key Features Accordion / Grid */}
      <div className="mt-8 pt-8 border-t border-white/10">
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
              className="p-3 rounded-xl bg-slate-950/40 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
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
