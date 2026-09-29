import React from 'react';
import { skills } from '../data/skills';

const Stack = () => {
  return (
    <section id="stack" className="px-4 py-20 md:px-8 max-w-7xl mx-auto">
      <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-8">
        // 02 — STACK
      </div>
      
      <h2 className="font-barlow font-bold text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-[-0.04em] mb-16 max-w-2xl uppercase">
        The Tools <br />
        I Build With.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 border-t border-[var(--black)] pt-12">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col group">
            <h3 className="font-inter text-sm md:text-base font-bold tracking-widest uppercase mb-4 text-[var(--black)] group-hover:text-[var(--lime)] transition-colors">
              {skill.title}
            </h3>
            <p className="font-inter text-lg md:text-xl font-medium leading-loose text-[var(--muted)] group-hover:text-[var(--black)] transition-colors">
              {skill.technologies}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
