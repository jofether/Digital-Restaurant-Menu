import React from 'react';

export default function SpecialSection({ type = 'daily-special' }) {
  const specialContent = {
    'daily-special': {
      title: '🌟 Chef\'s Special',
      items: [
        'Pan-Seared Scallops with Brown Butter',
        'Herb-Crusted Prime Rib',
        'Seared Ahi Tuna Salad'
      ],
      description: 'Limited portions prepared fresh daily'
    },
    'wine-pairing': {
      title: '🍷 Wine Pairing Suggestions',
      description: 'Ask our sommelier for perfect pairings',
      items: [
        'Seafood dishes → Sauvignon Blanc',
        'Red meat → Barolo or Chianti',
        'Desserts → Prosecco or Sweet Wine'
      ]
    },
    'seasonal': {
      title: '🍂 Seasonal Specials',
      description: 'Available while ingredients are in season',
      items: [
        'Butternut Squash Bisque',
        'Grilled Asparagus',
        'Fresh Berry Desserts'
      ]
    }
  };

  const content = specialContent[type] || specialContent['daily-special'];

  return (
    <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-lg p-6 border-2 border-amber-600 my-8">
      {/* [BUG - Color] 'text-stone-900' is invisible on dark background. [FIX] Change to text-amber-100 or text-stone-300 */}
      <h3 className="text-2xl font-bold text-stone-900 mb-2">{content.title}</h3>
      <p className="text-amber-50 text-sm mb-4">{content.description}</p>
      <ul className="space-y-2">
        {content.items.map((item, idx) => (
          <li key={idx} className="text-amber-100 text-sm flex items-start">
            <span className="mr-3">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
