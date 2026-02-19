import React from 'react';

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-6 fixed top-0 left-0 w-full z-10">
      <input
        type="text"
        placeholder="Search menu items..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-3 bg-stone-700 border border-amber-600 border-opacity-30 rounded-lg text-amber-50 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-30 transition-all"
      />
    </div>
  );
}
