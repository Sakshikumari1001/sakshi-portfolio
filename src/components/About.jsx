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
  ExternalLink,
  Download,
  ArrowRight,
  Brain,
  Layers,
  Bot
} from 'lucide-react';
import { personalInfo, aboutNarrative } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/40 relative border-t border-slate-900 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Sakshi Kumari</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Grid matching portfolio-fawn-seven-87 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 max-w-6xl mx-auto text-left">
          
          {/* Left Column: Stylized Aspect-[4/5] Portrait Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative group w-full max-w-sm">
              
              {/* Outer glowing blur ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>

              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 group-hover:border-cyan-500/50 shadow-2xl bg-[#0b111e] transition-all">
                
                {/* 4:5 Aspect Ratio Photo Container */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src="/profile.png"
                    alt="Sakshi Kumari — Aspiring Full Stack Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Bottom Information Strip */}
                <div className="p-5 bg-gradient-to-b from-slate-900/95 to-[#0b111e] border-t border-slate-800">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">
                        {personalInfo.role}
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Available for Roles
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      LPU (2024–2028)
                    </span>
                    <span className="text-cyan-300 font-bold">
                      CGPA: 7.40
                    </span>
                  </div>

                  {/* Verified stats row */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-center font-mono text-[11px]">
                    <div className="p-1.5 rounded-lg bg-slate-950/70 border border-white/5">
                      <span className="text-amber-400 font-bold">200+</span> LeetCode
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-950/70 border border-white/5">
                      <span className="text-purple-400 font-bold">500+</span> Commits
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Core Pillars & Download CV Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge */}
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              {aboutNarrative.headline}
            </div>

            {/* Lead Narrative Quote */}
            <p className="text-base sm:text-lg font-semibold text-slate-100 leading-relaxed border-l-4 border-cyan-400 pl-4 py-1">
              "{aboutNarrative.lead}"
            </p>

            {/* Narrative Body */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {aboutNarrative.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* Core Pillars Pills */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2.5">
                Core Focus Disciplines:
              </span>
              <div className="flex flex-wrap gap-2">
                {aboutNarrative.corePillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-cyan-500/20 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            {/* Structured Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {aboutNarrative.highlights.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 space-y-1"
                >
                  <div className="font-semibold text-white font-mono flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    {item.title}
                  </div>
                  <p className="text-slate-400 text-[11px] leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons: Download CV + Let's Connect */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              <a
                href={personalInfo.resumeUrl}
                download="Sakshi_Kumari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 font-mono transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download CV / Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 font-mono transition-all transform hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
