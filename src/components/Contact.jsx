import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate sending or open mailto link
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0e0a20]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-rose-400 bg-rose-950/40 border border-rose-500/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            "I'm always open to learning, collaborating and exploring opportunities in software development."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Profile Card */}
            <div className="p-6 rounded-2xl bg-[#0e0a20]/85 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 via-purple-600 to-amber-500 p-[2px] shadow-lg shadow-rose-500/25 overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Sakshi Kumari"
                      className="w-full h-full rounded-2xl object-cover object-top"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
                  <div className="text-xs text-rose-400 font-mono">{personalInfo.role}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                Whether you have an internship opening, want to discuss my GitHub RAG Assistant architecture, or collaborate on full-stack projects, my inbox is always open.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="p-4 rounded-xl bg-[#0e0a20]/70 border border-white/5 hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)] transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/12 text-rose-400 border border-rose-500/25 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-slate-100 hover:text-rose-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-rose-400 hover:bg-white/10 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Contact Card */}
            <div className="p-4 rounded-xl bg-[#0e0a20]/70 border border-white/5 hover:border-rose-400/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)] transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Mobile / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-slate-100 hover:text-emerald-400 transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-colors"
                title="Copy phone number to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Channels Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0e0a20]/70 border border-white/5 hover:border-purple-500/30 flex items-center justify-center gap-2 text-xs font-mono font-semibold text-slate-200 hover:text-purple-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0e0a20]/70 border border-white/5 hover:border-blue-500/30 flex items-center justify-center gap-2 text-xs font-mono font-semibold text-slate-200 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0a20]/85 border border-white/10 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below to initiate an email conversation directly.
                </p>
              </div>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Preparing your email client... Message dispatched!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-[#07050f]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#07050f]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Sakshi, I came across your portfolio and would like to connect regarding an internship / opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#07050f]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 font-sans transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-rose-500 via-purple-600 to-amber-500 hover:from-rose-400 hover:to-amber-400 shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Send Message via Email</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
