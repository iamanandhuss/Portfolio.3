import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--paper)]/95 backdrop-blur-sm brutal-border-b">
      <div className="flex items-center justify-between px-4 py-4 md:px-8 max-w-7xl mx-auto">
        {/* Left: Name */}
        <div className="font-barlow font-bold text-2xl tracking-wider">
          <a href="#hero">ANANDHU S S</a>
        </div>

        {/* Center/Right: Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 font-inter text-sm font-semibold tracking-widest uppercase">
          <a href="#work" className="hover:text-[var(--lime)] hover:bg-[var(--black)] px-3 py-1.5 transition-colors">Work</a>
          <a href="#about" className="hover:text-[var(--lime)] hover:bg-[var(--black)] px-3 py-1.5 transition-colors">About</a>
          <a href="#stack" className="hover:text-[var(--lime)] hover:bg-[var(--black)] px-3 py-1.5 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-[var(--lime)] hover:bg-[var(--black)] px-3 py-1.5 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-[var(--black)] brutal-shadow-sm hover:bg-[var(--lime)] transition-colors bg-[var(--white)] relative z-[60]"
          >
            {isOpen ? <X size={20} color="var(--black)" /> : <Menu size={20} color="var(--black)" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 h-screen w-screen bg-[var(--paper)] pt-24 flex flex-col font-inter text-xl font-bold tracking-widest uppercase p-4 space-y-4">
          <a href="#work" onClick={() => setIsOpen(false)} className="hover:text-[var(--lime)] hover:bg-[var(--black)] p-6 brutal-border bg-[var(--white)] text-center">Work</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[var(--lime)] hover:bg-[var(--black)] p-6 brutal-border bg-[var(--white)] text-center">About</a>
          <a href="#stack" onClick={() => setIsOpen(false)} className="hover:text-[var(--lime)] hover:bg-[var(--black)] p-6 brutal-border bg-[var(--white)] text-center">Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[var(--lime)] hover:bg-[var(--black)] p-6 brutal-border bg-[var(--white)] text-center">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
