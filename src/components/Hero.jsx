import React from 'react';
import { ArrowDown, Github, Mail, ExternalLink, Code2, GitCommit, Flame, GraduationCap, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { personalInfo, heroTechBadges, heroStatsPills, aboutNarrative } from '../data/portfolioData';
import Terminal from './Terminal';

const Hero = () => {
  const getPillIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-amber-400 shrink-0" />;
      case 'GitCommit':
        return <GitCommit className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-emerald-400 shrink-0" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Decorative Gradients & Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="absolute top-24 left-1/4 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-1/4 translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* User Requested Top Headline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-inner backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold uppercase tracking-wider">{personalInfo.headline}</span>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-mono text-slate-300 font-semibold flex items-center gap-2">
                <span>Hi, I'm</span>
                <span className="text-white font-bold text-lg sm:text-xl">{personalInfo.name}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Building Practical <span className="text-gradient">Full-Stack Systems</span>
              </h1>
            </div>

            {/* Exact Bio Quote requested by user */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              "{personalInfo.subTagline}"
            </p>

            {/* Core Focus Pillars Pill List */}
            <div className="flex flex-wrap gap-2 pt-1">
              {personalInfo.corePillars.map((pillar) => (
                <span
                  key={pillar}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-cyan-500/20 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {pillar}
                </span>
              ))}
            </div>

            {/* Verified Stat Badges / Pills (Reference Website Style) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {heroStatsPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/30 transition-all shadow-sm font-mono text-xs"
                >
                  {getPillIcon(pill.icon)}
                  <span className="text-slate-200 font-medium">{pill.label}</span>
                </div>
              ))}
            </div>

            {/* Core Tech Stack Badges */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Primary Technologies:
              </div>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {heroTechBadges.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-cyan-300 border border-cyan-500/20 shadow-sm hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 font-mono transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 shadow-md font-mono transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 shadow-sm font-mono transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Hero Visual: Profile Photo Card & Interactive Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full space-y-4">
            
            {/* Prominent Hero Profile Quick Card */}
            <div className="w-full max-w-lg p-4 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-cyan-400 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20 overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Sakshi Kumari"
                    className="w-full h-full rounded-[14px] object-cover object-top"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full" title="Active & Available"></span>
              </div>
              <div className="space-y-1">
                <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>{personalInfo.name}</span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Full Stack
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  B.Tech CSE @ Lovely Professional University
                </div>
                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  CGPA: 7.40 • 200+ LeetCode • 500+ GitHub
                </div>
              </div>
            </div>

            {/* Interactive Terminal */}
            <Terminal />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
