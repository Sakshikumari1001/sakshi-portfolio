import React from 'react';
import { 
  Car, 
  Search, 
  Calendar, 
  CreditCard, 
  CheckCircle, 
  Eye, 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  Camera, 
  UserCheck, 
  Sparkles,
  MapPin,
  Lock
} from 'lucide-react';

export const RentRideMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-950/90 border border-white/10 p-4 font-sans text-xs text-slate-300 shadow-2xl overflow-hidden">
      {/* Mockup Browser/App Window Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          <span className="ml-2 text-slate-400">rentride.app/dashboard</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
          Live Demo UI
        </span>
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-3 p-2.5 rounded-xl bg-slate-900/90 border border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-white truncate">All SUVs &amp; Sedans</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-white truncate">Phagwara / Jalandhar</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-white truncate">Jul 15 – Jul 18</span>
        </div>
      </div>

      {/* Main Content Area: Vehicle Card & Checkout Snapshot */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3">
        
        {/* Featured Vehicle Card */}
        <div className="sm:col-span-7 p-3 rounded-xl bg-slate-900/60 border border-cyan-500/20 space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 font-medium">Premium SUV</span>
              <h5 className="text-sm font-bold text-white">Mahindra Thar 4x4 Hardtop</h5>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available
            </span>
          </div>

          {/* Vehicle Visual Spec Box */}
          <div className="h-24 rounded-lg bg-gradient-to-br from-slate-950 to-slate-900 border border-white/5 flex flex-col items-center justify-center p-2 text-center relative overflow-hidden">
            <Car className="w-10 h-10 text-cyan-400/70" />
            <div className="mt-1 flex items-center gap-2 font-mono text-[10px] text-slate-400">
              <span>Automatic</span>
              <span>•</span>
              <span>Diesel</span>
              <span>•</span>
              <span>4 Seats</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-base font-bold text-white">₹3,499</span>
              <span className="text-[10px] text-slate-400"> / day</span>
            </div>
            <button className="px-3 py-1 rounded-lg bg-cyan-400 text-slate-950 font-mono font-bold text-[11px]">
              Book Now
            </button>
          </div>
        </div>

        {/* Right Info: Payment & Integration Widgets */}
        <div className="sm:col-span-5 space-y-2 text-[11px] font-mono">
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
            <div className="text-slate-400 text-[10px] uppercase font-bold">Booking Details</div>
            <div className="flex justify-between text-slate-300">
              <span>Duration:</span>
              <span className="text-white">3 Days</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Coupon:</span>
              <span className="text-emerald-400">WELCOME10 (-10%)</span>
            </div>
            <div className="flex justify-between text-slate-300 pt-1 border-t border-white/5">
              <span>Total:</span>
              <span className="text-cyan-400 font-bold">₹9,447</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-slate-200 font-semibold text-[10px]">Razorpay Payment Gateway</div>
              <div className="text-slate-500 text-[9px]">Instant receipt &amp; WhatsApp alert</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const ProctorEdMockup = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-950/90 border border-white/10 p-4 font-sans text-xs text-slate-300 shadow-2xl overflow-hidden">
      {/* Mockup Browser/App Window Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          <span className="ml-2 text-slate-400">proctored.app/exam-session/cs302</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-emerald-400 font-mono text-[10px]">
            <Lock className="w-3 h-3" />
            Full-Screen Locked
          </span>
        </div>
      </div>

      {/* Exam Status Bar */}
      <div className="mt-3 p-2.5 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between text-[11px] font-mono">
        <div>
          <span className="text-slate-400">Exam: </span>
          <span className="text-white font-bold">Database Management Systems</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400 font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
          <Clock className="w-3.5 h-3.5 animate-pulse" />
          <span>48:22 Left</span>
        </div>
      </div>

      {/* Main Grid: Exam Question & AI Camera Proctoring Panel */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3">
        
        {/* Left: Question Sheet */}
        <div className="sm:col-span-7 p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Question 14 of 40</span>
            <span className="text-cyan-400">Marks: +4 / -1</span>
          </div>

          <p className="text-xs text-white font-medium">
            Which SQL index structure guarantees \(O(\log n)\) search time complexity in relational database engines?
          </p>

          <div className="space-y-1.5 pt-1 text-[11px] font-mono">
            <div className="p-2 rounded bg-slate-950/70 border border-cyan-500/30 text-cyan-300 flex items-center justify-between">
              <span>B+ Tree Index</span>
              <span className="text-[10px] text-cyan-400 font-bold">Selected ✓</span>
            </div>
            <div className="p-2 rounded bg-slate-950/40 border border-white/5 text-slate-400">
              <span>Hash Index</span>
            </div>
            <div className="p-2 rounded bg-slate-950/40 border border-white/5 text-slate-400">
              <span>Linear Scan</span>
            </div>
          </div>
        </div>

        {/* Right: AI Proctoring Webcam & Integrity Monitor */}
        <div className="sm:col-span-5 space-y-2 text-[11px] font-mono">
          {/* Webcam Box with Face Detection Overlay */}
          <div className="h-28 rounded-xl bg-slate-950 border border-emerald-500/30 relative flex items-center justify-center overflow-hidden">
            <div className="absolute top-2 left-2 flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
              <Camera className="w-3 h-3" />
              <span>AI Face Detection: Active</span>
            </div>

            {/* Bounding box visual */}
            <div className="w-16 h-20 border-2 border-emerald-400 rounded-lg flex flex-col items-center justify-center bg-emerald-500/5">
              <UserCheck className="w-8 h-8 text-emerald-400" />
              <span className="text-[8px] text-emerald-300 mt-1">Verified</span>
            </div>

            <div className="absolute bottom-1 right-2 text-[9px] text-slate-400">
              Confidence: 99.4%
            </div>
          </div>

          {/* Integrity Monitoring Metrics */}
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1 text-[10px]">
            <div className="flex justify-between text-slate-300">
              <span>OCR ID Verification:</span>
              <span className="text-emerald-400 font-bold">Passed ✓</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Tab Switches:</span>
              <span className="text-white">0 / 3 (Safe)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Full-Screen Violations:</span>
              <span className="text-emerald-400">None</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
