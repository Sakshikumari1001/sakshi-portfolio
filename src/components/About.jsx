import React from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle, 
  Code, 
  Cpu, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  UserCheck, 
  Terminal, 
  GitCommit, 
  Flame, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo, aboutNarrative } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/40 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Profile &amp; Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Sakshi Kumari</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            {aboutNarrative.headline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: The Narrative & Technical Mindset */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Lead Bio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
              <div className="text-base sm:text-lg font-semibold text-slate-100 leading-relaxed border-l-4 border-cyan-400 pl-4 py-1">
                {aboutNarrative.lead}
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                {aboutNarrative.paragraphs.map((p, idx) => (
                  <p key={idx}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Core Pillars Bar */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                  Core Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {aboutNarrative.corePillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Structured Engineering Highlights */}
            <div className="space-y-3">
              {aboutNarrative.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/5 hover:border-cyan-500/30 transition-all shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-mono">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Large Photo Showcase & Verified Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Large, Prominent Photo Showcase */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                <div className="relative mb-4 group">
                  {/* Decorative glowing gradient ring */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 p-[3px] shadow-2xl shadow-cyan-500/25 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="/profile.png"
                      alt="Sakshi Kumari"
                      className="w-full h-full rounded-[22px] object-cover object-top"
                    />
                  </div>
                  <span className="absolute bottom-2 right-2 px-2.5 py-1 bg-slate-950/90 border border-emerald-500/40 rounded-full text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for Roles
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <div className="text-xs sm:text-sm text-cyan-400 font-mono font-semibold mt-1">
                  {personalInfo.role}
                </div>
                <div className="text-xs text-slate-400 flex items-center justify-center gap-1.5 mt-1.5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lovely Professional University</span>
                </div>
              </div>

              {/* Verified Details Matrix (No 10th/12th - Only B.Tech CSE CGPA) */}
              <div className="py-5 space-y-2.5 font-mono text-xs text-slate-300">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Education:</span>
                  <span className="text-white text-right font-medium">B.Tech CSE (2024–2028)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">CGPA:</span>
                  <span className="text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">7.40 / 10.0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">DSA Solved:</span>
                  <span className="text-amber-400 font-bold">200+ (50-Day Streak)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">GitHub Activity:</span>
                  <span className="text-purple-400 font-bold">500+ Contributions</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400">Open Source:</span>
                  <span className="text-cyan-300">SSoC Season 5 Contributor</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Target Roles:</span>
                  <span className="text-emerald-400 font-semibold">Full Stack / SDE</span>
                </div>
              </div>

              {/* Quick Metrics 4-Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {aboutNarrative.quickStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 text-center font-mono hover:border-cyan-500/20 transition-colors"
                  >
                    <div className="text-lg sm:text-xl font-black text-cyan-400">{stat.value}</div>
                    <div className="text-[11px] text-slate-300 font-semibold">{stat.label}</div>
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
