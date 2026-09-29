import React from 'react';
import { education } from '../data/experience';

const Education = () => {
  return (
    <section className="px-4 py-12 md:px-8 max-w-7xl mx-auto">
      <div className="brutal-border brutal-shadow p-8 md:p-12 bg-[var(--white)] flex flex-col md:flex-row justify-between items-start md:items-center">
        
        <div className="mb-6 md:mb-0">
          <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-4">
            // EDUCATION
          </div>
          <h3 className="font-barlow text-3xl md:text-4xl font-bold tracking-widest uppercase text-[var(--black)] mb-1">
            {education.institution}
          </h3>
          <div className="font-inter text-sm md:text-base font-bold text-[var(--muted)] tracking-widest uppercase">
            {education.degree}
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-dashed border-[var(--muted)] opacity-50 relative">
           <div className="absolute w-2 h-2 bg-[var(--lime)] rounded-full animate-ping"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;
