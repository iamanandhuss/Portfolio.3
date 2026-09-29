import React from 'react';
import { projects, additionalProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="work" className="px-4 py-20 md:px-8 max-w-7xl mx-auto">
      <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-8">
        // 03 — SELECTED BUILDS
      </div>
      
      <h2 className="font-barlow font-bold text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-[-0.04em] mb-16 max-w-2xl uppercase">
        Things <br />
        I've <br />
        Built.
      </h2>
      
      <div className="mt-16">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-24 pt-16 border-t border-[var(--black)]">
        <h3 className="font-barlow font-bold text-[clamp(2rem,4vw,3rem)] mb-12 uppercase">Additional Projects</h3>
        
        <div className="flex flex-col border-t border-[var(--black)]">
          {additionalProjects.map((proj, idx) => (
            <a 
              key={idx} 
              href={proj.url}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 px-4 -mx-4 md:px-6 md:-mx-6 brutal-border-b hover:bg-[var(--dark)] hover:text-[var(--paper)] transition-colors cursor-pointer"
            >
              <div className="font-inter font-bold text-lg md:text-xl uppercase mb-3 sm:mb-0 group-hover:text-[var(--lime)] transition-colors">
                {proj.title}
              </div>
              
              <div className="flex items-center gap-6 sm:w-1/2 justify-between">
                <div className="font-inter text-xs md:text-sm font-semibold tracking-widest text-[var(--muted)] uppercase">
                  {proj.tech.join(" · ")}
                </div>
                <ArrowRight size={20} className="text-[var(--black)] group-hover:text-[var(--lime)] transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
