import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  BookOpen, 
  Sparkles,
  Bot,
  Zap,
  ShieldCheck,
  Search,
  Workflow
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages': return <Code className="w-4 h-4" />;
      case 'frontend': return <Layers className="w-4 h-4" />;
      case 'backend': return <Server className="w-4 h-4" />;
      case 'databases': return <Database className="w-4 h-4" />;
      case 'ai': return <Bot className="w-4 h-4" />;
      case 'tools': return <Wrench className="w-4 h-4" />;
      case 'corecs': return <Cpu className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proficient across full-stack web architecture, backend APIs, data pipelines, vector databases, and core computer science.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillsData.categories.map((cat) => {
            const count = cat.id === 'all'
              ? skillsData.skills.length
              : skillsData.skills.filter(s => s.category === cat.id).length;

            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-slate-200 hover:border-white/15'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? 'bg-cyan-500/20 text-cyan-200' : 'bg-white/5 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-cyan-400 transition-colors">
                  {skill.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors"></span>
              </div>

              <h4 className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                {skill.name}
              </h4>

              <div className="mt-2 text-[11px] font-mono text-slate-400 truncate">
                {skill.level}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Competencies Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/30 border border-white/5 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white font-mono">Modern Frontend &amp; Full Stack</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Clean component architecture with React, Next.js, and responsive Tailwind layouts backed by RESTful Express and FastAPI services.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/30 border border-white/5 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white font-mono">AI &amp; Vector Search (RAG)</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Dense code vectorization, ChromaDB storage, semantic retrieval, and prompt augmentation with Groq LLM APIs.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/30 border border-white/5 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white font-mono">Algorithms &amp; Core Systems</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Solid foundation in Java Data Structures, DBMS, Object-Oriented Principles, Operating Systems, and Computer Networks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
