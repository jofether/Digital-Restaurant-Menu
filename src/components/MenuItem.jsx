import React from 'react';

export default function MenuItem({ name, price, description, tags = [] }) {
  return (
    <div className="border-b border-stone-700 pb-6 last:border-b-0 hover:bg-stone-700 hover:bg-opacity-50 p-4 rounded-lg transition-colors flex flex-col-reverse">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-amber-100">{name}</h3>
          {tags.length > 0 && (
            <div className="flex gap-2 mt-1 flex-wrap">
              {tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs bg-amber-900 bg-opacity-50 text-amber-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-xl font-bold text-amber-400 ml-4 whitespace-nowrap">{price}</span>
      </div>
      <p className="text-stone-300 text-sm">{description}</p>
    </div>
  );
}
