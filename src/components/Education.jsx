import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured computer science engineering education paired with continuous practical application.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl backdrop-blur-md relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.institution}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-cyan-300 font-mono">
                    {edu.degree}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-cyan-500/20 text-center font-mono shrink-0 sm:min-w-[120px]">
                  <div className="text-lg font-extrabold text-cyan-400">{edu.score}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">{edu.scoreType}</div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                {edu.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
