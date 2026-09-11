import React from 'react';
import { ArrowDown, Github, Mail, ExternalLink, Code2, GitCommit, Flame, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo, heroTechBadges, heroStatsPills } from '../data/portfolioData';
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
            
            {/* Intro Status Pill with User Photo */}
            <div className="inline-flex items-center gap-3.5 p-1.5 pr-4 rounded-full bg-slate-900/80 border border-white/10 shadow-inner backdrop-blur-md">
              <div className="relative shrink-0">
                <img
                  src="/profile.png"
                  alt="Sakshi Kumari"
                  className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/50 shadow-md shadow-cyan-500/20"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">Hi, I'm Sakshi Kumari</div>
                <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Full-Stack &amp; Engineering Roles
                </div>
              </div>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-mono text-cyan-400 font-semibold tracking-wide">
                Aspiring Full Stack Developer
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Building Practical <span className="text-gradient">Full-Stack Systems</span>
              </h1>
            </div>

            {/* Bio quote / description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              "{personalInfo.subTagline}"
            </p>

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

            {/* Tech Badges List */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Stack:
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

          {/* Right Hero Visual: Terminal Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <Terminal />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
