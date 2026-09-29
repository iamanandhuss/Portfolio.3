import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const PlaceholderVisual = ({ title }) => (
  <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[500px] bg-[#E5E5E5] flex flex-col items-center justify-center relative brutal-border overflow-hidden group">
    <div className="absolute inset-0 bg-[var(--lime)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
    <ImageIcon size={48} className="text-[var(--muted)] mb-4 opacity-50" />
    <div className="font-inter text-sm font-bold tracking-widest uppercase text-[var(--muted)]">
      [ IMAGE SLOT: {title} ]
    </div>
    <div className="font-inter text-xs font-semibold mt-2 text-[var(--muted)] opacity-70">
      Drop {title.toLowerCase().replace(' ', '-')}.jpg in src/assets
    </div>
  </div>
);

const ArchitectureVisual = () => (
  <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[500px] flex items-center justify-center font-mono text-xs md:text-sm font-bold text-[var(--black)] p-4 md:p-8 brutal-border bg-[var(--paper)]">
    <div className="flex flex-col items-center space-y-3 md:space-y-4 text-center">
      <div className="brutal-border px-4 py-2 bg-[var(--white)] brutal-shadow-sm">USER</div>
      <div className="text-[var(--muted)]">↓</div>
      <div className="brutal-border px-4 py-2 bg-[#25D366] text-[var(--white)] brutal-shadow-sm">WHATSAPP</div>
      <div className="text-[var(--muted)]">↓</div>
      <div className="brutal-border px-4 py-2 bg-[#339933] text-[var(--white)] brutal-shadow-sm">NODE.JS</div>
      <div className="text-[var(--muted)]">↓</div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="brutal-border px-4 py-2 bg-[#8E75B2] text-[var(--white)] brutal-shadow-sm">AI / GEMINI</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="brutal-border px-4 py-2 bg-[#3ECF8E] text-[var(--white)] brutal-shadow-sm">SUPABASE</div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  return (
    <div className="brutal-border brutal-shadow bg-[var(--white)] mb-24 flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 brutal-border-b bg-[var(--black)] text-[var(--paper)]">
        <div className="font-inter text-sm md:text-base font-bold tracking-widest uppercase">
          {project.id} <span className="opacity-50 px-2">/</span> {project.category}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        
        {/* Left: Image / Visual */}
        <div className="w-full lg:w-[55%] p-4 md:p-6 lg:p-8 brutal-border-b lg:brutal-border-b-0 lg:brutal-border-r bg-[var(--white)]">
          {project.isArchitecture ? (
            <ArchitectureVisual />
          ) : (
            project.image && project.image !== "" ? (
              <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[500px] brutal-border bg-[#E5E5E5] overflow-hidden relative group cursor-pointer">
                <img 
                  src={`/src/assets/${project.image}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{display: 'none'}} className="w-full h-full flex-col items-center justify-center">
                  <PlaceholderVisual title={project.title} />
                </div>
              </div>
            ) : (
              <PlaceholderVisual title={project.title} />
            )
          )}
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col bg-[var(--paper)]">
          <div className="flex-grow">
            <h3 className="font-barlow font-extrabold text-[clamp(2.5rem,4vw,4rem)] leading-[0.85] tracking-[-0.04em] mb-2 uppercase">
              {project.title}
            </h3>
            
            <div className="font-inter text-xs md:text-sm font-bold tracking-widest uppercase text-[var(--lime)] mb-8 bg-[var(--black)] inline-block px-3 py-1">
              {project.subtitle}
            </div>
            
            <p className="font-inter text-base font-medium mb-8 leading-relaxed text-[var(--black)]">
              {project.description}
            </p>

            {project.features && (
              <div className="mb-10">
                <div className="font-inter text-xs font-bold text-[var(--muted)] tracking-widest uppercase mb-4 pb-2 border-b border-[var(--black)]">
                  Key Features
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-inter text-sm font-medium">
                  {project.features.slice(0, 8).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[var(--lime)] mr-2 text-lg leading-none">·</span> {feature}
                    </li>
                  ))}
                  {project.features.length > 8 && (
                    <li className="text-[var(--muted)] italic text-xs mt-2 col-span-1 sm:col-span-2">
                      + {project.features.length - 8} more features
                    </li>
                  )}
                </ul>
              </div>
            )}
            
            <div className="mb-10">
               <div className="font-inter text-xs font-bold text-[var(--muted)] tracking-widest uppercase mb-4 pb-2 border-b border-[var(--black)]">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="font-inter text-xs font-bold uppercase tracking-widest bg-[var(--white)] brutal-border text-[var(--black)] px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-[var(--black)]">
            <a href={project.liveUrl} className="flex-1 flex justify-center items-center gap-2 bg-[var(--black)] text-[var(--lime)] font-inter font-bold uppercase tracking-wider text-xs md:text-sm py-4 brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[var(--dark)] hover:shadow-none transition-all group">
              LIVE DEMO <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={project.sourceUrl} className="flex-1 flex justify-center items-center gap-2 bg-[var(--white)] text-[var(--black)] brutal-border font-inter font-bold uppercase tracking-wider text-xs md:text-sm py-4 brutal-shadow hover:bg-[var(--lime)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
