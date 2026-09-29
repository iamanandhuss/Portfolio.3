import React from 'react';

const Engineering = () => {
  const sections = [
    {
      id: "01",
      title: "FRONTEND ARCHITECTURE",
      items: ["Component-driven interfaces", "Responsive design", "Reusable UI", "State management"]
    },
    {
      id: "02",
      title: "BACKEND SYSTEMS",
      items: ["REST APIs", "Authentication", "Middleware", "Server-side architecture"]
    },
    {
      id: "03",
      title: "DATABASE",
      items: ["MongoDB", "Mongoose", "Supabase", "Data modeling"]
    },
    {
      id: "04",
      title: "DEPLOYMENT",
      items: ["Git", "GitHub", "AWS", "Vercel"]
    }
  ];

  return (
    <section className="bg-[var(--dark)] text-[var(--paper)] px-4 py-20 md:px-8 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="font-inter text-xs font-semibold tracking-widest text-[var(--lime)] mb-8">
          // 04 — ENGINEERING
        </div>
        
        <h2 className="font-barlow font-bold text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-[-0.04em] mb-16 text-[var(--paper)]">
          HOW <br />
          I BUILD.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[var(--muted)]">
          {sections.map(section => (
            <div key={section.id} className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[var(--muted)] hover:bg-[#1A1A18] transition-colors group cursor-default">
              <div className="font-inter text-2xl font-bold text-[var(--muted)] mb-8 group-hover:text-[var(--lime)] transition-colors">
                {section.id}
              </div>
              <h3 className="font-inter font-bold text-lg mb-6 uppercase tracking-wide text-[var(--paper)]">
                {section.title}
              </h3>
              <ul className="space-y-3 font-inter text-sm text-[var(--muted)] group-hover:text-gray-300 transition-colors">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1 h-1 bg-[var(--lime)] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engineering;
