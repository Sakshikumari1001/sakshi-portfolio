import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { terminalData } from '../data/portfolioData';

const Terminal = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = terminalData.lines.map(l => `${l.label}: ${l.value}`).join('\n');
    navigator.clipboard.writeText(`sakshi@portfolio:~$ whoami\n${textToCopy}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 bg-[#0e0a20]/90 shadow-2xl shadow-purple-950/40 backdrop-blur-xl group">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#07050f]/80 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-rose-400" />
            sakshi@portfolio:~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500">bash</span>
          <button
            onClick={handleCopy}
            className="p-1 rounded text-slate-400 hover:text-rose-400 transition-colors"
            title="Copy terminal content"
            aria-label="Copy terminal content"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm space-y-3 leading-relaxed">
        {/* Command Line */}
        <div className="flex items-center gap-2 text-rose-400 font-semibold">
          <span className="text-emerald-400">sakshi@portfolio:~$</span>
          <span className="text-slate-100">whoami</span>
          <span className="inline-block w-2 h-4 bg-rose-400 animate-pulse"></span>
        </div>

        {/* Output Block */}
        <div className="bg-[#07050f]/60 p-4 rounded-xl border border-white/5 space-y-2 font-mono text-xs">
          {terminalData.lines.map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-slate-400 w-36 shrink-0">{line.label}:</span>
              <span className={`${line.color} font-medium`}>{line.value}</span>
            </div>
          ))}
        </div>

        {/* Secondary Command Info */}
        <div className="pt-2 text-slate-500 text-[11px] flex items-center justify-between border-t border-white/5">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{terminalData.statusCode}</span>
          </div>
          <span className="text-slate-400">latency: {terminalData.latency}</span>
        </div>
      </div>

      {/* Decorative gradient glow on bottom */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-rose-500/12 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Terminal;
