import React from 'react';

const SystemBar = () => {
  return (
    <div className="w-full bg-[var(--lime)] border-y border-[var(--black)] px-4 py-2 flex flex-col md:flex-row md:items-center justify-between font-inter text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--black)]">
      <div className="flex items-center gap-4">
        <span className="animate-pulse">●</span>
        <span>SYSTEM STATUS</span>
      </div>
      <div className="hidden md:block opacity-50">/</div>
      <div>FULL STACK DEVELOPMENT</div>
      <div className="hidden md:block opacity-50">/</div>
      <div>JAVASCRIPT / REACT / NODE.JS / MONGODB</div>
    </div>
  );
};

export default SystemBar;
