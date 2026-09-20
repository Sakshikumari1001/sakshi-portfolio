import React from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight, Layers, Cpu, Server, Code } from 'lucide-react';
import { learningRoadmap } from '../data/portfolioData';

const LearningRoadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-[#08090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-950/40 border border-indigo-500/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Developer Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently <span className="text-gradient">Learning</span> &amp; Focus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Actively expanding engineering depth through cutting-edge full-stack practices, algorithmic mastery, and distributed systems.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningRoadmap.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111324]/70 border border-white/5 hover:border-indigo-400/40 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600/15 text-indigo-400 border border-indigo-500/25 flex items-center justify-center font-mono font-bold text-xs">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#16192e] text-slate-300 border border-white/5">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {item.topic}
                </h3>
                <span className="text-xs font-mono text-indigo-300/80 block mt-0.5">
                  {item.sub}
                </span>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex justify-between text-[11px] font-mono mb-1.5">
                  <span className="text-slate-500">Learning Progress</span>
                  <span className="text-indigo-400 font-semibold">{item.progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#16192e] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningRoadmap;
