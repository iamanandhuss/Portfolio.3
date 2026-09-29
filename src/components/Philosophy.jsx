import React from 'react';

const Philosophy = () => {
  const steps = [
    { id: "01", title: "UNDERSTAND" },
    { id: "02", title: "BUILD" },
    { id: "03", title: "TEST" },
    { id: "04", title: "SHIP" }
  ];

  return (
    <section className="bg-[var(--black)] text-[var(--paper)] px-4 py-20 md:px-8 max-w-full">
      <div className="max-w-7xl mx-auto">
        <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-8">
          // APPROACH
        </div>
        
        <h2 className="font-barlow font-bold text-[clamp(2rem,4vw,4rem)] leading-[0.9] tracking-[-0.02em] mb-16 text-[var(--lime)]">
          BUILD. <br className="md:hidden" />
          TEST. <br className="md:hidden" />
          BREAK. <br className="md:hidden" />
          FIX. <br className="md:hidden" />
          SHIP.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[var(--muted)]">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`p-6 md:p-10 flex flex-col justify-between aspect-square md:aspect-auto ${idx !== steps.length - 1 ? 'border-r border-[var(--muted)]' : ''} ${idx < 2 ? 'border-b md:border-b-0 border-[var(--muted)]' : ''} hover:bg-[var(--dark)] transition-colors`}
            >
              <div className="font-inter text-sm md:text-xl font-bold text-[var(--muted)]">
                {step.id}
              </div>
              <div className="font-barlow text-xl md:text-3xl font-bold tracking-widest mt-auto">
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
