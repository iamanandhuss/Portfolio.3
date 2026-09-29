import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemBar from './components/SystemBar';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Engineering from './components/Engineering';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Education from './components/Education';
import Journey from './components/Journey';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Very short initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--paper)] flex items-center justify-center font-inter text-[var(--black)] font-bold text-sm tracking-widest">
        <div className="flex flex-col items-center animate-pulse">
          <span>ANANDHU S S</span>
          <span className="text-[var(--muted)] opacity-50 my-2">/</span>
          <span>INITIALIZING</span>
          <span className="text-[var(--muted)] opacity-50 my-2">/</span>
          <span>PORTFOLIO SYSTEM</span>
          <span className="text-[var(--muted)] opacity-50 my-2">/</span>
          <span className="text-[var(--lime)] bg-[var(--black)] px-2 py-1 mt-2">READY</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--black)] font-inter">
      <Navbar />
      <Hero />
      <SystemBar />
      <About />
      <Stack />
      <Projects />
      <Engineering />
      <Philosophy />
      <Experience />
      <Education />
      <Journey />
      <BeyondCode />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
