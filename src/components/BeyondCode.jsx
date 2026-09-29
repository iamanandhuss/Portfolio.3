import React from 'react';

const BeyondCode = () => {
  const items = [
    "COMMUNICATION",
    "CONTINUOUS LEARNING",
    "PROBLEM SOLVING",
    "COLLABORATION"
  ];

  return (
    <section className="px-4 py-16 md:px-8 max-w-4xl mx-auto text-center">
      <div className="font-inter text-xs font-semibold tracking-widest text-[var(--muted)] mb-8">
        // BEYOND CODE
      </div>
      
      <h2 className="font-barlow font-bold text-[clamp(2rem,4vw,4rem)] leading-[0.9] tracking-[-0.02em] mb-12 uppercase">
        BUILDING <br />
        MORE THAN <br />
        SOFTWARE.
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="font-inter text-xs md:text-sm font-bold tracking-widest uppercase py-2 px-4 border border-[var(--black)] bg-[var(--white)] hover:bg-[var(--lime)] hover:brutal-shadow-sm transition-all cursor-default">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeyondCode;
