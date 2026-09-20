import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Calendar, 
  ExternalLink, 
  Eye, 
  X, 
  Flame, 
  FileText,
  Check
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const [activeModalImg, setActiveModalImg] = useState(null);

  return (
    <section id="certifications" className="py-24 bg-[#07050f] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-rose-400 bg-rose-950/40 border border-rose-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials &amp; Badges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accredited <span className="text-gradient">Certificates &amp; Badges</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-1">
            Verified professional credentials from Oracle University, Infosys Springboard, LeetCode, and SSoC Open Source.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0e0a20]/85 border border-purple-500/20 hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.25)] transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
            >
              <div>
                {/* Certificate Visual Image Preview if available */}
                {cert.image ? (
                  <div 
                    className="relative aspect-[16/10] bg-[#07050f]/90 overflow-hidden cursor-pointer group/img border-b border-purple-500/20 flex items-center justify-center"
                    onClick={() => setActiveModalImg(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className={`w-full h-full ${cert.fit === 'contain' ? 'object-contain p-2' : 'object-cover object-center'} group-hover/img:scale-105 transition-transform duration-300`}
                    />
                    {cert.badge && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#0e0a20]/90 text-rose-300 border border-rose-500/30 backdrop-blur-sm shadow-md">
                        {cert.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-[#07050f]/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500 text-slate-950 text-xs font-mono font-bold shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Credential</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Badge Header for LeetCode / SSoC */
                  <div className="p-6 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent border-b border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        {cert.provider === 'LeetCode' ? <Flame className="w-6 h-6" /> : <Award className="w-6 h-6 text-purple-400" />}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                          {cert.provider}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {cert.issueDate}
                        </span>
                      </div>
                    </div>
                    {cert.badge && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                )}

                {/* Certificate Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#16102f] text-rose-300 border border-slate-700">
                      {cert.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors leading-snug">
                    {cert.name}
                  </h3>

                  <div className="space-y-1 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Issuer: <strong className="text-slate-300">{cert.provider}</strong></span>
                    </div>

                    {cert.certId && (
                      <div className="text-[11px] text-rose-400/90 truncate">
                        ID: <span className="text-slate-300">{cert.certId}</span>
                      </div>
                    )}

                    {cert.issueDate && (
                      <div className="text-[11px] text-slate-400">
                        Issued: {cert.issueDate}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-purple-500/20 font-mono text-xs">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                      Validated Skills:
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {cert.skills}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer with verification status & view action */}
              <div className="px-6 py-4 border-t border-purple-500/20 bg-[#07050f]/40 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Credential</span>
                </div>

                {cert.image && (
                  <button
                    onClick={() => setActiveModalImg(cert)}
                    className="inline-flex items-center gap-1 text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    <span>View</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                )}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Certificate Preview */}
      {activeModalImg && (
        <div 
          className="fixed inset-0 z-50 bg-[#07050f]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0e0a20] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-purple-500/20 flex items-center justify-between bg-[#07050f]/80">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-mono">
                  {activeModalImg.name}
                </h4>
                <p className="text-xs font-mono text-rose-400 mt-0.5">
                  Issued by {activeModalImg.provider} {activeModalImg.certId && `• ID: ${activeModalImg.certId}`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {activeModalImg.pdf && (
                  <a
                    href={activeModalImg.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 transition-colors inline-flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open PDF</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalImg(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#1a1435] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 sm:p-6 bg-[#07050f] flex justify-center max-h-[75vh] overflow-y-auto">
              <img
                src={activeModalImg.image}
                alt={activeModalImg.name}
                className="max-h-[68vh] w-auto object-contain rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;
