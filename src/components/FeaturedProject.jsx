import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ArrowDown, 
  Check, 
  Sparkles,
  ChevronDown,
  Workflow,
  Eye
} from 'lucide-react';
import { featuredProjectData } from '../data/portfolioData';
import { RagAssistantMockup } from './ProjectMockups';

const FeaturedProject = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [viewMode, setViewMode] = useState('preview'); // 'preview' | 'flow'
  const stages = featuredProjectData.architectureStages;
  const currentStage = stages[activeStep];

  return (
    <div className="relative rounded-3xl bg-[#0d091d]/95 border border-purple-500/20 p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
      
      {/* Top ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/12 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Banner Tag & Timeline Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-purple-500/20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-rose-500/20 to-amber-500/20 border border-rose-500/30 text-xs font-mono font-semibold text-rose-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>{featuredProjectData.badgeTop}</span>
        </div>

        <div className="text-xs font-mono text-slate-400 px-3 py-1 rounded-lg bg-[#0e0a20]/70 border border-purple-500/20">
          Timeline: <span className="text-slate-200">{featuredProjectData.timeline}</span>
        </div>
      </div>

      {/* 2-Column Content Grid matching media_1789199226018.png */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: Project Overview, Bullets, Tech Tags, Buttons */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Title with Robot Emoji */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">🤖</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {featuredProjectData.title}
              </h3>
            </div>
            <div className="text-sm sm:text-base font-semibold text-indigo-400 font-mono">
              {featuredProjectData.subtitle}
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {featuredProjectData.description}
          </p>

          {/* 3 Checkmark Bullet Points */}
          <div className="space-y-3.5 pt-1">
            {featuredProjectData.keyBullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 shrink-0 mt-0.5 border border-indigo-500/30">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {featuredProjectData.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-[#0e0a20]/90 text-slate-200 border border-purple-500/30 shadow-sm hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.25)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <a
              href={featuredProjectData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-purple-600 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white shadow-lg shadow-rose-500/25 font-mono transition-all transform hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>

            <a
              href={featuredProjectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#0e0a20] hover:bg-[#1a1435] border border-purple-500/30 hover:border-slate-600 shadow-md font-mono transition-all transform hover:-translate-y-0.5"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white border border-white/5 hover:border-white/10 font-mono transition-all"
            >
              <span>Explore More Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Right Column: Vertical Architecture Flow & Live Inspector OR Live UI Preview */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Header with View Mode Switcher */}
          <div className="p-3 sm:p-4 rounded-2xl bg-[#07050f]/80 border border-purple-500/20 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-rose-400" />
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                {viewMode === 'flow' ? 'Architecture Flow' : 'Live UI Interface Preview'}
              </h4>
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0e0a20] border border-purple-500/20">
              <button
                onClick={() => setViewMode('flow')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                  viewMode === 'flow'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Pipeline Flow
              </button>
              <button
                onClick={() => setViewMode('preview')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                  viewMode === 'preview'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                UI Preview
              </button>
            </div>
          </div>

          {viewMode === 'preview' ? (
            /* Live UI Interface Screenshot / Mockup */
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="rounded-2xl overflow-hidden border border-purple-500/20 bg-[#07050f]/90 shadow-2xl relative aspect-[16/10] group/feat">
                <img 
                  src="/projects/github_rag_mockup.png" 
                  alt="GitHub RAG Assistant Interface" 
                  className="w-full h-full object-cover object-top group-hover/feat:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          ) : (
            /* Vertical Stepper & Inspector matching media_1789199226018.png */
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Vertical Stepper List (8 Stages) */}
              <div className="space-y-2">
                {stages.map((stage, idx) => {
                  const isSelected = activeStep === idx;
                  const isLast = idx === stages.length - 1;

                  return (
                    <button
                      key={stage.step}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-mono transition-all duration-200 border text-left ${
                        isSelected
                          ? 'bg-gradient-to-r from-indigo-950/80 to-slate-900 border-indigo-500/60 text-white shadow-lg shadow-indigo-950/40'
                          : 'bg-[#07050f]/70 border-purple-500/20 text-slate-400 hover:bg-[#0e0a20]/90 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          isSelected
                            ? 'bg-indigo-500 text-white'
                            : 'bg-[#16102f] text-slate-400'
                        }`}>
                          {stage.step}
                        </span>
                        <span className="font-semibold text-slate-200">
                          {stage.name}
                        </span>
                      </div>

                      <span className="text-slate-500 text-xs">
                        {isLast ? '✓' : '↓'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Inspector Panel underneath */}
              <div className="p-5 rounded-2xl bg-[#070b14] border border-indigo-500/40 shadow-xl space-y-3.5">
                <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <span className="text-indigo-400">{currentStage.step}.</span>
                  <span>{currentStage.name}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {currentStage.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0e0a20] text-rose-300 border border-purple-500/20">
                    {currentStage.role}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0e0a20] text-indigo-300 border border-purple-500/20">
                    {currentStage.tech}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-1 font-mono text-[11px]">
                  <div className="p-2.5 rounded-lg bg-[#0e0a20]/90 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Input:</span>
                    <span className="text-slate-200 text-right truncate pl-2">{currentStage.input}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#0e0a20]/90 border border-white/5 flex items-center justify-between">
                    <span className="text-emerald-400 text-[10px] uppercase font-bold">Output:</span>
                    <span className="text-emerald-300 text-right truncate pl-2">{currentStage.output}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default FeaturedProject;
