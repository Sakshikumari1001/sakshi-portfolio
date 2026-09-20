import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Award, BookOpen, Layers, Cpu } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  const edu = educationData[0]; // Lovely Professional University exclusively

  return (
    <section id="education" className="py-24 bg-[#111324]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-950/40 border border-indigo-500/30">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal computer science engineering education paired with competitive coding and practical system architecture.
          </p>
        </div>

        {/* Flagship University Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111324]/90 border border-white/10 hover:border-indigo-400/40 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] transition-all duration-300 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
            
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                    {edu.institution}
                  </h3>
                </div>

                <div className="text-base sm:text-lg font-bold text-indigo-300 font-mono">
                  {edu.degree}
                </div>

                <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Verified CGPA Badge */}
              <div className="p-4 rounded-2xl bg-[#08090e] border border-indigo-500/30 text-center font-mono shrink-0 sm:min-w-[140px] shadow-lg shadow-indigo-950/30">
                <div className="text-2xl sm:text-3xl font-black text-indigo-400">{edu.score}</div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold mt-0.5">
                  Cumulative CGPA
                </div>
                <span className="text-[9px] text-emerald-400 block mt-1">Verified Academic Record</span>
              </div>
            </div>

            {/* Core CS Coursework Matrix */}
            <div className="mt-6 pt-2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                Academic Highlights &amp; Computer Science Foundations:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#08090e]/70 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* University Training Distinction Pill */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-violet-950/30 to-slate-900/40 border border-indigo-500/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-200">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>Grade A Distinction:</strong> Advanced Backend Development (CPE, Lovely Professional University)
                </span>
              </div>
              <span className="text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                Grade A Certified
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
