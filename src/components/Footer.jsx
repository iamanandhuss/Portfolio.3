import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-[var(--paper)] px-4 py-8 md:px-8 border-t border-[var(--black)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 font-inter text-xs font-bold tracking-widest uppercase">
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <span className="text-base text-[var(--black)]">ANANDHU S S</span>
          <span className="hidden md:inline text-[var(--muted)]">/</span>
          <span className="text-[var(--muted)]">FULL STACK DEVELOPER</span>
        </div>
        
        <div className="flex items-center gap-6 text-[var(--black)]">
          <a href="https://github.com/placeholder" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--lime)] transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/anandhu-s-s/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--lime)] transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:placeholder@email.com" aria-label="Email" className="hover:text-[var(--lime)] transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-[var(--muted)]">
          © 2026 ANANDHU S S
        </div>

      </div>
    </footer>
  );
};

export default Footer;
