import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profiles from './components/Profiles';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TrackRecord from './components/TrackRecord';
import Certifications from './components/Certifications';
import Education from './components/Education';
import LearningRoadmap from './components/LearningRoadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#07050f] text-slate-100 selection:bg-fuchsia-500/25 selection:text-rose-200 font-sans">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main id="main-content">
        <Hero />
        <Profiles />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TrackRecord />
        <Certifications />
        <Education />
        <LearningRoadmap />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
