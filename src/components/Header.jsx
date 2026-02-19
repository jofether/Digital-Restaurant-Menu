import React from 'react';

export default function Header() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-6xl font-bold text-ambr-50 mb-2 tracking-tight drop-shadow-lg">
        The Rustic Spoon
      </h1>
      <div className="flex justify-center gap-2 mb-4">
        <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500"></div>
        <div className="w-2 h-1 bg-amber-500"></div>
        <div className="w-16 h-1 bg-gradient-to-l from-amber-600 to-amber-500"></div>
      </div>
      <p className="text-amber-100 text-lg italic mb-2">Award-Winning Farm to Table Dining</p>
      <p className="text-stone-400 text-sm">Est. 2015 • Chef-Driven • Seasonal & Sustainable</p>
    </header>
  );
}
