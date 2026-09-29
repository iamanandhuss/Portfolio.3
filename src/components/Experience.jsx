import React from 'react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-20 md:px-8 max-w-7xl mx-auto">
      <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-8">
        // 05 — EXPERIENCE
      </div>
      
      <h2 className="font-barlow font-bold text-[clamp(3rem,5vw,6rem)] leading-[0.85] tracking-[-0.04em] mb-16 max-w-2xl">
        EXPERIENCE <br />
        IN PRACTICE.
      </h2>
      
      <div className="flex flex-col brutal-border-t">
        {experience.map(exp => (
          <div key={exp.id} className="flex flex-col lg:flex-row py-12 brutal-border-b group">
            
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h3 className="font-barlow text-3xl md:text-4xl font-bold tracking-widest uppercase mb-2">
                {exp.company}
              </h3>
              <div className="font-inter text-sm font-bold text-[var(--muted)] tracking-widest uppercase mb-1">
                {exp.role}
              </div>
              <div className="font-inter text-xs font-semibold text-[var(--black)] tracking-widest uppercase">
                {exp.location}
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 lg:pl-12">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-inter text-sm md:text-base font-medium">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[var(--lime)] mr-3 mt-1">■</span> 
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
