import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Bot, 
  Sparkles,
  CheckCircle2,
  Workflow,
  Zap,
  ArrowRight
} from 'lucide-react';
import { skillBoxesData } from '../data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-sky-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredBoxes = activeCategory === 'all'
    ? skillBoxesData
    : skillBoxesData.filter(box => box.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized <span className="text-gradient">Skill Domains</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-1">
            Organized by domain: Frontend client interfaces, backend microservices, vector search &amp; generative AI, databases, and core computer science fundamentals.
          </p>
        </div>

        {/* Domain Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Domains</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-slate-800 text-slate-300">
              {skillBoxesData.length} Boxes
            </span>
          </button>

          {skillBoxesData.map((box) => {
            const isActive = activeCategory === box.id;
            return (
              <button
                key={box.id}
                onClick={() => setActiveCategory(box.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:border-white/15'
                }`}
              >
                <span>{box.title.split(' ')[0]}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/5 text-slate-400">
                  {box.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grouped Domain Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredBoxes.map((box) => (
            <div
              key={box.id}
              className={`rounded-3xl bg-slate-900/80 border ${box.borderColor} p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group hover:-translate-y-1`}
            >
              {/* Subtle box top glow */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${box.accent} rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-500`}></div>

              <div>
                {/* Box Header */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-slate-950 border border-white/10 shadow-inner">
                      {getCategoryIcon(box.icon)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {box.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 font-mono">
                        {box.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-semibold px-2 py-1 rounded-lg bg-slate-950 text-slate-300 border border-white/10 shrink-0">
                    {box.skills.length} items
                  </span>
                </div>

                {/* Skills Chips / Pills */}
                <div className="py-5 flex flex-wrap gap-2">
                  {box.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex flex-col px-3 py-2 rounded-xl transition-all duration-200 border ${
                        skill.highlight
                          ? `${box.badgeColor} hover:bg-slate-800`
                          : 'bg-slate-950/70 text-slate-300 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span className="text-xs font-semibold text-slate-100 font-mono">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 pl-3 font-sans">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box Footer Indicator */}
              <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Production Ready
                </span>
                <span className="text-slate-500 uppercase tracking-wider text-[10px]">
                  {box.id}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Global Architecture Integration Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-cyan-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold">
              <Zap className="w-4 h-4 text-cyan-400" />
              INTEGRATED FULL-STACK EXECUTION
            </div>
            <h4 className="text-lg font-bold text-white">
              Bridging Frontend, Scalable Backends, and Vector AI Systems
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Applying clean code architecture, modular component patterns, secure token authentication, and continuous algorithmic problem solving.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#featured-project"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md font-mono transition-all"
            >
              <span>See in Action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
