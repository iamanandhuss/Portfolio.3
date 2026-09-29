import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-8 py-20 overflow-hidden">
      
      {/* Top Technical Labels */}
      <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-12 flex flex-col space-y-1">
        <span>// FULL STACK DEVELOPER</span>
        <span>// KERALA / INDIA</span>
        <span>// 2026</span>
      </div>

      {/* Main Typography */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start relative z-10">
        <div className="flex flex-col">
          <h1 className="font-barlow font-extrabold text-[clamp(4rem,11vw,11rem)] leading-[0.82] tracking-[-0.06em] text-[var(--black)]">
            ANANDHU <br />
            S S
          </h1>
          <h2 className="font-barlow font-bold text-[clamp(2.5rem,6vw,6rem)] leading-[0.85] tracking-[-0.04em] text-[var(--black)] mt-6">
            FULL STACK <br />
            DEVELOPER
          </h2>
        </div>
        
        {/* Right side info & availability (Desktop) */}
        <div className="hidden lg:flex flex-col items-end pt-4 space-y-24">
          <div className="font-inter text-sm font-bold tracking-widest flex items-center gap-2 border border-[var(--black)] px-3 py-1 bg-[var(--white)]">
            AVAILABLE <span className="h-2 w-2 bg-[var(--lime)] rounded-full animate-pulse"></span>
          </div>
          
          <div className="text-right font-inter text-xs text-[var(--muted)] uppercase tracking-widest flex flex-col items-end gap-3">
            <a href="https://github.com/iamanandhuss" target="_blank" rel="noreferrer" className="hover:text-[var(--black)] transition-colors flex items-center gap-2 group">
              GITHUB <GithubIcon size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
            </a>
            <a href="https://www.linkedin.com/in/anandhu-s-s/" target="_blank" rel="noreferrer" className="hover:text-[var(--black)] transition-colors flex items-center gap-2 group">
              LINKEDIN <LinkedinIcon size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
            </a>
            <a href="mailto:anandhu.codes@gmail.com" className="hover:text-[var(--black)] transition-colors flex items-center gap-2 group">
              EMAIL <Mail size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Copy */}
      <div className="mt-16 lg:mt-24 max-w-2xl">
        <p className="font-inter text-lg md:text-2xl font-medium leading-tight text-[var(--black)]">
          Building modern web applications from interface to API.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 relative z-20">
        <a href="#work" className="inline-flex items-center justify-center gap-2 bg-[var(--black)] text-[var(--paper)] font-inter font-bold uppercase tracking-wider text-sm px-8 py-5 brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[var(--dark)] hover:shadow-none transition-all group">
          VIEW MY WORK <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[var(--white)] text-[var(--black)] brutal-border font-inter font-bold uppercase tracking-wider text-sm px-8 py-5 brutal-shadow hover:bg-[var(--lime)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          CONTACT ME
        </a>
        
        {/* Mobile Social Links */}
        <div className="flex lg:hidden mt-4 gap-6 font-inter text-sm font-bold tracking-widest">
           <a href="https://github.com/placeholder" className="hover:text-[var(--lime)] transition-colors">GITHUB</a>
           <a href="https://www.linkedin.com/in/anandhu-s-s/" className="hover:text-[var(--lime)] transition-colors">LINKEDIN</a>
           <a href="mailto:placeholder@email.com" className="hover:text-[var(--lime)] transition-colors">EMAIL</a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full border border-dashed border-[var(--muted)] opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute top-1/3 right-[20%] w-[200px] h-[200px] rounded-full border border-[var(--muted)] opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-1/4 right-8 font-inter text-[10px] text-[var(--muted)] opacity-50 pointer-events-none tracking-widest hidden md:block">
        LOC: 08.5241° N / SYS: ONLINE
      </div>
    </section>
  );
};

export default Hero;
