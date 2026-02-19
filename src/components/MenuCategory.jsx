import React from 'react';
import MenuItem from './MenuItem';

export default function MenuCategory({ title, items }) {
  return (
    <section className="bg-stone-800 rounded-lg p-8 border border-amber-600 border-opacity-20">
      <h2 className="text-3xl font-bold text-amber-400 mb-2 uppercase tracking-wider">
        {title}
      </h2>
      <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mb-6"></div>
      
      <ul className="space-y-6 -m-4 -mt-8">
        {items.map((item, i) => (
          <li key={i}>
            <MenuItem 
              name={item.name}
              price={item.price}
              description={item.desc}
              tags={item.tags}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
