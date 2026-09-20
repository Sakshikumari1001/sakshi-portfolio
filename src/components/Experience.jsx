import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Eye, 
  FileText, 
  X, 
  Sparkles, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  const [activeModalCert, setActiveModalCert] = useState(null);

  return (
    <section id="experience" className="py-24 bg-[#07050f] relative border-t border-purple-500/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-950/40 border border-purple-500/20">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Practical Experience &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Summer Training &amp; <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-14 h-1.5 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-400 mx-auto mt-3 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.4)]"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-1">
            Industry-oriented backend training from Lovely Professional University and active community open-source engineering.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Card 1: Summer Training (Featured Large Card, 7 cols) */}
          {experienceData && experienceData[0] && (
            <div className="lg:col-span-7 rounded-3xl bg-[#0d091d]/95 border border-purple-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/50 transition-all">
              
              {/* Top Accent Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-purple-500/20">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{experienceData[0].badge}</span>
                </span>
                
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{experienceData[0].period}</span>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block">
                  {experienceData[0].type}
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {experienceData[0].title}
                </h3>
                <div className="text-sm text-slate-300 font-medium">
                  {experienceData[0].organization}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {experienceData[0].location}
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    Cert No: {experienceData[0].certNo}
                  </span>
                  <span className="text-rose-300 font-semibold">
                    Grade: {experienceData[0].grade} ({experienceData[0].gradeDetail})
                  </span>
                </div>
              </div>

              {/* Certificate Image Preview Box */}
              {experienceData[0].certificateImage && (
                <div className="mt-6 rounded-2xl overflow-hidden border border-purple-500/20 bg-[#07050f]/90 group/cert relative aspect-[16/10] shadow-xl">
                  <img
                    src={experienceData[0].certificateImage}
                    alt="Summer Training Certificate of Merit"
                    className="w-full h-full object-cover object-top group-hover/cert:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#07050f]/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button
                      onClick={() => setActiveModalCert(experienceData[0])}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold shadow-lg transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Certificate</span>
                    </button>
                    {experienceData[0].certificatePdf && (
                      <a
                        href={experienceData[0].certificatePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0e0a20]/90 hover:bg-[#1a1435] text-rose-300 border border-rose-500/30 text-xs font-mono font-bold shadow-lg transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Open PDF</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Bullets */}
              <div className="mt-6 space-y-2.5">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Key Learnings &amp; Deliverables:
                </span>
                {experienceData[0].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-6 pt-5 border-t border-purple-500/20 flex flex-wrap gap-1.5">
                {experienceData[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#07050f]/80 text-purple-200 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          )}

          {/* Card 2: Open Source SSOC (5 cols) */}
          {experienceData && experienceData[1] && (
            <div className="lg:col-span-5 rounded-3xl bg-[#0d091d]/95 border border-purple-500/20 p-6 sm:p-8 shadow-xl backdrop-blur-xl relative overflow-hidden group hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.25)] transition-all flex flex-col justify-between">
              
              <div>
                {/* Top Accent Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-purple-500/20">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/12 text-rose-300 border border-rose-500/25 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                    <span>{experienceData[1].badge}</span>
                  </span>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-rose-400" />
                    <span>{experienceData[1].period}</span>
                  </div>
                </div>

                {/* Title & Role */}
                <div className="mt-5 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold block">
                    {experienceData[1].type}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-rose-300 transition-colors">
                    {experienceData[1].title}
                  </h3>
                  <div className="text-sm text-slate-300 font-medium">
                    {experienceData[1].organization}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {experienceData[1].description}
                </p>

                {/* SSoC Contributor Badge Image Preview */}
                {experienceData[1].certificateImage && (
                  <div className="mt-5 rounded-2xl overflow-hidden border border-purple-500/20 bg-[#07050f]/90 group/ssoc relative aspect-[16/10] shadow-xl">
                    <img
                      src={experienceData[1].certificateImage}
                      alt="SSoC Verified Contributor Badge"
                      className="w-full h-full object-contain p-2 group-hover/ssoc:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#07050f]/40 opacity-0 group-hover/ssoc:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                      <button
                        onClick={() => setActiveModalCert(experienceData[1])}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-mono font-bold shadow-lg transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Contributor Badge</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Bullets */}
                <div className="mt-6 space-y-3">
                  {experienceData[1].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-8 pt-5 border-t border-purple-500/20">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Tools &amp; Workflows:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {experienceData[1].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#07050f]/80 text-slate-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Lightbox Modal for Certificate Preview */}
      {activeModalCert && (
        <div 
          className="fixed inset-0 z-50 bg-[#07050f]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0d091d] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-purple-500/20 flex items-center justify-between bg-[#07050f]/80">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-mono">
                  {activeModalCert.title}
                </h4>
                <p className="text-xs font-mono text-purple-400 mt-0.5">
                  {activeModalCert.organization} • Cert No: {activeModalCert.certNo}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {activeModalCert.certificatePdf && (
                  <a
                    href={activeModalCert.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors inline-flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open PDF</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#1a1435] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image */}
            <div className="p-4 sm:p-6 bg-[#07050f] flex justify-center max-h-[75vh] overflow-y-auto">
              <img
                src={activeModalCert.certificateImage}
                alt={activeModalCert.title}
                className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Experience;
