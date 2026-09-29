import React from 'react';

const Journey = () => {
  const timeline = [
    "START",
    "HTML / CSS",
    "JAVASCRIPT",
    "NODE.JS",
    "MONGODB",
    "MERN",
    "FULL STACK PROJECTS",
    "BUILDING PRODUCTS"
  ];

  return (
    <section className="px-4 py-20 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-16 text-center">
        // TIMELINE
      </div>
      
      <div className="flex flex-col items-center">
        {timeline.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="font-barlow text-xl md:text-2xl font-bold tracking-widest uppercase py-4 px-6 brutal-border brutal-shadow-sm bg-[var(--white)] hover:bg-[var(--lime)] transition-colors cursor-default text-center min-w-[200px]">
              {step}
            </div>
            {idx < timeline.length - 1 && (
              <div className="my-2 text-[var(--muted)] font-inter font-bold">
                ↓
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Journey;
