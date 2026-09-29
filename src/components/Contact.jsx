import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="bg-[var(--black)] text-[var(--paper)] border-t border-[var(--black)] px-4 py-24 md:px-8 md:py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
        <div>
          <div className="font-inter text-xs font-semibold tracking-widest text-[var(--lime)] mb-8">
            // CONTACT
          </div>
          
          <h2 className="font-barlow font-extrabold text-[clamp(4rem,9vw,8rem)] xl:text-[9rem] leading-[0.85] tracking-[-0.04em] mb-8 uppercase text-[var(--paper)]">
            HAVE AN <br />
            IDEA? <br />
            <span className="text-[var(--lime)]">LET'S <br/> BUILD IT.</span>
          </h2>
          
          <a href="mailto:anandhu.codes@gmail.com" className="inline-flex items-center gap-3 bg-[var(--lime)] text-[var(--black)] font-inter font-bold uppercase tracking-wider text-sm md:text-base px-10 py-5 brutal-shadow hover:bg-[var(--white)] transition-colors mt-6 group">
            <Mail size={20} /> EMAIL ME <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>
        
        <div className="flex flex-col space-y-10 font-inter text-sm md:text-base font-bold tracking-widest uppercase border-t border-[var(--muted)] md:border-none pt-8 md:pt-0 w-full md:w-auto">
          
          <div className="flex flex-col group">
            <span className="text-[var(--muted)] text-xs mb-2">GITHUB</span>
            <a href="https://github.com/iamanandhuss" target="_blank" rel="noreferrer" className="flex items-center gap-2 group-hover:text-[var(--lime)] transition-colors">
              <GithubIcon size={18} /> iamanandhuss
            </a>
          </div>
          
          <div className="flex flex-col group">
            <span className="text-[var(--muted)] text-xs mb-2">LINKEDIN</span>
            <a href="https://www.linkedin.com/in/anandhu-s-s/" target="_blank" rel="noreferrer" className="flex items-center gap-2 group-hover:text-[var(--lime)] transition-colors">
              <LinkedinIcon size={18} /> IN/ANANDHU-S-S
            </a>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Contact;
