import React from 'react';
import { ArrowDown, Github, Mail, ExternalLink, Code2, GitCommit, Flame, GraduationCap, CheckCircle2, Sparkles, MapPin, Download } from 'lucide-react';
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
        return <GraduationCap className="w-4 h-4 text-rose-400 shrink-0" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#07050f] via-[#0f0a22] to-[#07050f]"
    >
      {/* Background Decorative Gradients & Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="absolute top-24 left-1/4 -translate-x-1/2 w-96 h-96 bg-rose-500/12 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-1/4 translate-x-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* User Requested Top Headline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/40 border border-rose-500/30 text-xs font-mono text-rose-300 shadow-inner backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
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
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#0e0a20]/90 text-rose-300 border border-rose-500/25 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  {pillar}
                </span>
              ))}
            </div>

            {/* Verified Stat Badges / Pills (Reference Website Style) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {heroStatsPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e0a20]/90 border border-white/10 hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)] transition-all shadow-sm font-mono text-xs"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#16102f]/80 text-rose-300 border border-rose-500/25 shadow-sm hover:border-rose-400/60 hover:bg-[#1a1435] transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-purple-600 to-amber-500 hover:from-rose-400 hover:via-purple-500 hover:to-amber-400 shadow-lg shadow-rose-500/25 font-mono transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Sakshi_Kumari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-rose-300 bg-rose-950/40 hover:bg-[#1a1338] border border-rose-500/30 hover:border-rose-400 shadow-md font-mono transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-[#0e0a20] hover:bg-[#1a1435] border border-white/10 hover:border-white/20 shadow-md font-mono transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-[#0e0a20]/70 hover:bg-[#1a1435] border border-white/10 hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.25)] shadow-sm font-mono transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Hero Visual: Large Photo Showcase Card & Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full space-y-4">
            
            {/* Prominent Large Photo Hero Card */}
            <div className="w-full max-w-md p-6 sm:p-7 rounded-3xl bg-[#0e0a20]/90 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center relative overflow-hidden group">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Large Photo Frame ("bada sa photo") */}
              <div className="relative mb-5">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-rose-500 via-purple-600 to-amber-400 p-[3px] shadow-2xl shadow-rose-500/25 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/profile.png"
                    alt="Sakshi Kumari"
                    className="w-full h-full rounded-[21px] object-cover object-top"
                  />
                </div>
                {/* Active Availability Badge */}
                <span className="absolute bottom-2 right-2 px-2.5 py-1 bg-[#07050f]/90 border border-emerald-500/50 rounded-full text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to Build
                </span>
              </div>

              {/* Profile Details */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h3>
              <div className="text-xs sm:text-sm text-rose-400 font-mono font-semibold mt-1">
                {personalInfo.role}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Lovely Professional University (2024–2028)</span>
              </div>

              {/* Quick Metrics Pills */}
              <div className="grid grid-cols-3 gap-2 w-full mt-4 pt-4 border-t border-white/10 font-mono text-xs">
                <div className="p-2 rounded-xl bg-[#07050f]/70 border border-white/5">
                  <div className="text-rose-400 font-bold">7.40</div>
                  <div className="text-[10px] text-slate-400">CGPA</div>
                </div>
                <div className="p-2 rounded-xl bg-[#07050f]/70 border border-white/5">
                  <div className="text-amber-400 font-bold">100+</div>
                  <div className="text-[10px] text-slate-400">LeetCode</div>
                </div>
                <div className="p-2 rounded-xl bg-[#07050f]/70 border border-white/5">
                  <div className="text-purple-400 font-bold">400+</div>
                  <div className="text-[10px] text-slate-400">Commits</div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Below Photo */}
            <div className="w-full max-w-md">
              <Terminal />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
