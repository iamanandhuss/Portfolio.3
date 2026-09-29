import React from 'react';
// Assuming the user saves the image here
import profilePic from '../assets/profile.jpg';

const About = () => {
  const capabilities = [
    "MERN STACK",
    "REST APIs",
    "AUTHENTICATION",
    "DATABASES",
    "PAYMENTS",
    "DEPLOYMENT"
  ];

  return (
    <section id="about" className="px-4 py-20 md:px-8 md:py-32 max-w-7xl mx-auto">
      <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-8">
        // 01 — PROFILE
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Col: Big text, intro, and profile image */}
        <div>
          <h2 className="font-barlow font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-[-0.02em] mb-12">
            BUILDING FROM <br />
            IDEA → INTERFACE <br />
            → API → PRODUCT
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
            <div className="w-full sm:w-48 aspect-[4/5] shrink-0 brutal-border brutal-shadow bg-[var(--white)] overflow-hidden group">
              {/* Profile Image with brutalist treatment */}
              <img 
                src={profilePic} 
                alt="Anandhu S S" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23e5e5e5"/><text x="50" y="50" font-family="monospace" font-size="10" text-anchor="middle" alignment-baseline="middle">IMAGE PENDING</text></svg>';
                }}
              />
            </div>
            <p className="font-inter text-lg md:text-xl font-medium leading-relaxed pt-2">
              I'm a Full Stack Developer focused on building modern web applications from frontend interfaces to backend APIs and databases. I enjoy turning ideas into functional, scalable products.
            </p>
          </div>
        </div>

        {/* Right Col: Technical capability summary */}
        <div className="flex flex-col lg:pt-4">
          <div className="font-inter text-xs font-bold text-[var(--muted)] tracking-widest uppercase mb-6 pb-4 border-b border-[var(--black)]">
            CORE CAPABILITIES
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-[var(--white)] brutal-border px-4 py-4 font-inter text-sm md:text-base font-bold tracking-widest uppercase text-center hover:bg-[var(--lime)] hover:brutal-shadow-sm transition-all cursor-default flex items-center justify-center">
                {cap}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
