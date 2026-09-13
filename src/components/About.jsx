import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Server, 
  Code2, 
  ArrowRight, 
  Mail, 
  GraduationCap, 
  FolderGit2, 
  Cpu, 
  CheckCircle2,
  Brain,
  Terminal,
  Flame,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const techPills = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '⚡' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'Git / GitHub', icon: '🐙' }
  ];

  const whatIDoCards = [
    {
      title: 'Full Stack Development',
      subtitle: 'Modern Web Applications',
      description:
        'Architecting end-to-end web applications with React.js, Next.js, and Tailwind CSS on the frontend, paired with robust backend services, secure JWT authentication, and responsive modern design systems.',
      icon: Layers,
      border: 'hover:border-cyan-500/40',
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      title: 'Backend & API Engineering',
      subtitle: 'Scalable Microservices & Databases',
      description:
        'Designing high-performance RESTful APIs and real-time Socket.IO communication with Node.js, Express.js, and Spring Boot, coupled with optimized schema architectures across MongoDB and MySQL.',
      icon: Server,
      border: 'hover:border-purple-500/40',
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      title: 'Problem Solving & DSA',
      subtitle: 'Algorithmic Optimization in Java',
      description:
        'Solved 100+ Data Structures & Algorithms problems across LeetCode and GeeksforGeeks. Earned the official LeetCode 50-Day Streak Badge with disciplined daily problem solving in Java.',
      icon: Code2,
      border: 'hover:border-amber-500/40',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#090d16] relative border-t border-slate-900/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Pill Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono font-medium text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Sakshi Kumari</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Big Clean Profile Photo Card with Purple Glow & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md">
              
              {/* Subtle Purple / Indigo Gradient Ambient Glow behind photo */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-purple-600/35 via-indigo-600/25 to-cyan-500/20 blur-2xl opacity-80 -z-10 animate-pulse duration-1000"></div>

              {/* Clean Modern Rounded Card containing ONLY the photo */}
              <div className="relative rounded-[2rem] overflow-hidden border border-purple-500/25 shadow-2xl bg-[#0b111e]/90 backdrop-blur-xl group p-2">
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src="/profile.png"
                    alt="Sakshi Kumari"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle inner bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/70 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Badge 1: Top-Right — B.Tech CSE */}
              <div className="absolute -top-3 -right-3 sm:-right-4 px-3.5 py-1.5 rounded-2xl bg-[#0b1222]/95 border border-purple-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono font-semibold text-purple-200 hover:scale-105 transition-transform">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                <span>🎓 B.Tech CSE</span>
              </div>

              {/* Floating Badge 2: Bottom-Left — Full Stack Developer */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 px-3.5 py-1.5 rounded-2xl bg-[#0b1222]/95 border border-cyan-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono font-semibold text-cyan-200 hover:scale-105 transition-transform">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>⚡ Full Stack Developer</span>
              </div>

              {/* Floating Badge 3: Mid-Right — Problem Solver */}
              <div className="hidden sm:flex absolute bottom-12 -right-5 px-3 py-1.5 rounded-2xl bg-[#0b1222]/95 border border-amber-500/40 shadow-xl backdrop-blur-md items-center gap-2 text-xs font-mono font-semibold text-amber-200 hover:scale-105 transition-transform">
                <span className="text-amber-400">💡</span>
                <span>Problem Solver</span>
              </div>

            </div>
          </div>

          {/* Right Column: Heading, Recruiter-Friendly Intro, Stats, Tech Row, Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block">
                Software Developer &amp; Problem Solver
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Crafting scalable web systems &amp; practical AI solutions
              </h3>
            </div>

            {/* Recruiter-friendly concise introduction */}
            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I’m <strong className="text-white font-semibold">Sakshi Kumari</strong>, a Computer Science and Engineering student at <strong className="text-white font-semibold">Lovely Professional University (CGPA 7.40)</strong> with a strong passion for building practical, production-ready software.
              </p>
              <p>
                I work across the modern stack with <strong className="text-cyan-300 font-medium">React, Next.js, Node.js, Express, MongoDB, Python, and Java</strong>. My hands-on experience spans developing context-aware AI retrieval systems (RAG), real-time collaborative classroom tools with WebSockets, and secure full-stack web platforms.
              </p>
              <p>
                Dedicated to continuous improvement, I have solved <strong className="text-purple-300 font-medium">100+ DSA problems</strong> across LeetCode and GeeksforGeeks, earned the official LeetCode 50-Day Streak Badge, and actively contribute to open-source software via <strong className="text-white font-medium">SSoC</strong>.
              </p>
            </div>

            {/* 3 Small Stats matching requirement */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#0b1222]/80 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">4+</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Projects</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0b1222]/80 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-purple-400 font-mono">Full Stack</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Focus Area</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0b1222]/80 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-mono">B.Tech CSE</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">LPU (2024–28)</div>
              </div>
            </div>

            {/* Small Technology / Skills Row */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Core Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-900/80 text-slate-200 border border-slate-800/80 hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Two Action Buttons: View My Projects & Let's Connect */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </div>

          </div>

        </div>

        {/* What I Do Section: 3 Modern Glassmorphism Cards */}
        <div className="mt-24 pt-16 border-t border-slate-900/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block mb-2">
              Areas of Expertise
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              What I Do
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Combining engineering fundamentals with modern frameworks to deliver scalable, reliable software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatIDoCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl bg-[#0b101b]/90 border border-slate-800/80 ${card.border} transition-all duration-300 shadow-xl hover:-translate-y-1 backdrop-blur-md flex flex-col justify-between group`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center ${card.iconColor} shadow-inner`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-slate-400 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs font-mono text-purple-400/90">
                        {card.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Production Grade Best Practices</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
