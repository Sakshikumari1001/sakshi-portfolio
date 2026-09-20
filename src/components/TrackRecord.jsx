import React from 'react';
import { 
  Trophy, 
  Flame, 
  GitPullRequest, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { trackRecordData } from '../data/portfolioData';

const TrackRecord = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'GitPullRequest': return <GitPullRequest className="w-5 h-5 text-purple-400" />;
      case 'Award': return <Award className="w-5 h-5 text-rose-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-[#0e0a20]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-rose-400 bg-rose-950/40 border border-rose-500/30">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honest Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified accomplishments across open-source contributions, daily problem-solving discipline, and industry certifications.
          </p>
        </div>

        {/* Track Record Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trackRecordData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e0a20]/85 border border-white/5 hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)] transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#16102f]/90 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-rose-500/12 text-rose-300 border border-rose-500/25">
                    {item.badge}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>

                <div className="mt-1 text-xs font-mono text-emerald-400 font-medium">
                  {item.highlight}
                </div>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrackRecord;
