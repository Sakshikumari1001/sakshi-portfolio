import React from 'react';
import { ExternalLink, Github, Linkedin, Code2, Terminal, CheckCircle } from 'lucide-react';
import { codingProfiles } from '../data/portfolioData';

const Profiles = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-6 h-6 text-purple-400" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6 text-blue-400" />;
      case 'code2':
        return <Code2 className="w-6 h-6 text-amber-400" />;
      default:
        return <Terminal className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="profiles" className="py-12 bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Verified Developer &amp; Coding Profiles
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Direct access to genuine platforms &amp; problem-solving records
          </span>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-md hover:-translate-y-1 block"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(profile.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                      {profile.name}
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <span className="text-xs font-mono text-slate-400 block truncate max-w-[150px]">
                      {profile.handle}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10 shrink-0">
                  {profile.badge}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 text-xs text-slate-400 font-mono flex items-center justify-between">
                <span>{profile.metric}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Profiles;
