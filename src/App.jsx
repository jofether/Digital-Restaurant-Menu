import React from 'react';

function App() {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        { name: "Truffle Fries", price: "$8.50", desc: "Parmesan, truffle oil, garlic aioli" },
        { name: "Crispy Calamari", price: "$12.00", desc: "Marinara sauce, lemon wedges" },
        { name: "Bruschetta", price: "$9.00", desc: "Tomato, basil, balsamic glaze" }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Salmon", price: "$24.00", desc: "Asparagus, mashed potatoes, lemon butter" },
        { name: "Ribeye Steak", price: "$32.00", desc: "12oz USDA Prime, peppercorn sauce" },
        { name: "Mushroom Risotto", price: "$18.00", desc: "Arborio rice, wild mushrooms, parmesan" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 font-serif">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 shadow-2xl rounded-sm border-t-4 border-orange-500">
        
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">The Rustic Spoon</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-gray-500 mt-4 italic">Farm to table dining experience</p>
        </header>

        <div className="space-y-12">
          {menuCategories.map((category, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-orange-600 mb-6 uppercase tracking-wider border-b border-gray-200 pb-2">
                {category.title}
              </h2>
              
              <ul className="space-y-8">
                {category.items.map((item, i) => (
                  <li key={i}>
                    {/* FLEX CONTAINER: Holds Name (Left) and Price (Right) */}
                    {/* FUTURE BUG: Remove 'justify-between' to break alignment */}
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-xl font-bold text-gray-900">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-400 pt-8 border-t border-gray-100">
          <p>Prices subject to change. 12% VAT included.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;