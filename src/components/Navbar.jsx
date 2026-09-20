import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, Download } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'profiles', 'skills', 'projects', 'experience', 'achievements', 'certifications', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090e]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30 py-2.5'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with User Photo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="Sakshi Kumari Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 p-[1.5px] shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img
                src="/profile.png"
                alt="Sakshi Kumari"
                className="w-full h-full rounded-[10px] object-cover object-top"
              />
            </div>
            <div>
              <div className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-indigo-400 transition-colors">
                Sakshi <span className="text-indigo-400">Kumari</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Aspiring Full Stack Dev
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Responsive & Spacious without overlap */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#111324]/85 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-indigo-400 bg-white/10 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-400/40 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] transition-colors bg-white/5"
              aria-label="Toggle Theme"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="/Sakshi_Kumari_Resume.pdf"
              download="Sakshi_Kumari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 hover:bg-[#1c203b] font-mono transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl text-slate-950 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-600/30 font-mono transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile/Tablet Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-white/10 text-slate-300 hover:text-white bg-white/5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#08090e]/80 backdrop-blur-md z-40 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-72 bg-[#111324] border-l border-white/10 p-6 z-50 flex flex-col justify-between transform transition-transform duration-300 ease-in-out xl:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 p-[1.5px] overflow-hidden shrink-0">
                <img
                  src="/profile.png"
                  alt="Sakshi Kumari"
                  className="w-full h-full rounded-[8px] object-cover object-top"
                />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Sakshi Kumari</div>
                <div className="text-[11px] font-mono text-indigo-400">Full Stack Developer</div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/25 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-3">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-xl text-slate-950 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 shadow-md font-mono"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <div className="text-center text-[11px] font-mono text-slate-500">
            © 2026 Sakshi Kumari
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
