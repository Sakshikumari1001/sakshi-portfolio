import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building2, Calendar } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Accredited certifications validating database management, artificial intelligence fundamentals, and modern backend engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cert.provider}</span>
                </div>

                <div className="mt-1 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Issued: {cert.year}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-300 font-mono">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    Domain Competencies:
                  </span>
                  <span className="text-cyan-300/90">{cert.skills}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified by {cert.provider}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
