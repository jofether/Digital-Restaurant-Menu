import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 grid grid-cols-4">
      {/* [BUG - Layout] Mixing 'flex' and 'grid' classes causes layout conflict. [FIX] Remove either 'flex' or 'grid' */}
      <button
        onClick={() => onCategoryChange('All')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selectedCategory === 'All'
            ? 'bg-amber-600 text-white shadow-lg'
            : 'bg-stone-700 text-amber-100 hover:bg-stone-600 border border-amber-600 border-opacity-30'
        }`}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat.title}
          onClick={() => onCategoryChange(cat.title)}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            selectedCategory === cat.title
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-stone-700 text-amber-100 hover:bg-stone-600 border border-amber-600 border-opacity-30'
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}
