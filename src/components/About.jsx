import React from 'react';
import { Award, BookOpen, CheckCircle, Code, Cpu, GraduationCap, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo, aboutNarrative } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Sakshi Kumari</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Grounded in computer science fundamentals, full-stack systems development, and persistent algorithmic problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl">
              {aboutNarrative.paragraphs.map((p, idx) => (
                <p key={idx} className="first-of-type:text-slate-200">
                  {p}
                </p>
              ))}
            </div>

            {/* Structured Highlights */}
            <div className="space-y-3">
              {aboutNarrative.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/50 border border-white/5 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-mono">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Developer Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Avatar / Profile Graphic Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2.5px] shadow-xl shadow-cyan-500/25 overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Sakshi Kumari"
                      className="w-full h-full rounded-2xl object-cover object-top"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full shadow-md" title="Active & Available"></span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{personalInfo.name}</h3>
                  <div className="text-xs text-cyan-400 font-mono font-medium">{personalInfo.role}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    Lovely Professional University
                  </div>
                </div>
              </div>

              {/* Verified Details Matrix */}
              <div className="py-5 space-y-2.5 font-mono text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Education:</span>
                  <span className="text-white text-right">B.Tech CSE (2024–2028)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">CGPA:</span>
                  <span className="text-cyan-400 font-bold">7.40 / 10.0</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="text-emerald-400">Full-Stack &amp; DSA</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Open Source:</span>
                  <span className="text-purple-400">SSoC Season 5</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ready for Roles
                  </span>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {aboutNarrative.quickStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-white/5 text-center font-mono"
                  >
                    <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-[11px] text-slate-300 font-medium">{stat.label}</div>
                    <div className="text-[9px] text-slate-400 mt-0.5 truncate">{stat.note}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
