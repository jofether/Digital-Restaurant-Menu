import React, { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const menuCategories = [
    {
      title: "Appetizers & Starters",
      items: [
        { name: "Truffle Fries", price: "$8.50", desc: "Parmesan, truffle oil, garlic aioli", tags: ["vegetarian", "signature"] },
        { name: "Crispy Calamari", price: "$12.00", desc: "Marinara sauce, lemon wedges, fresh herbs", tags: ["seafood"] },
        { name: "Burrata & Heirloom Tomato", price: "$9.50", desc: "Creamy burrata, balsamic reduction, basil oil", tags: ["vegetarian", "signature"] },
        { name: "Pan-Seared Scallops", price: "$14.00", desc: "Brown butter, microgreens, crispy pancetta", tags: ["seafood", "premium"] },
        { name: "Crispy Duck Confit Leg", price: "$13.50", desc: "Pommes Anna, cherry gastrique", tags: ["premium"] },
        { name: "Grilled Octopus", price: "$11.00", desc: "Chimichurri, fingerling potatoes, charred lemon", tags: ["seafood"] },
      ]
    },
    {
      title: "Soups & Salads",
      items: [
        { name: "Butternut Squash Bisque", price: "$7.50", desc: "Sage brown butter, pumpkin seed oil, crème fraîche", tags: ["vegetarian", "seasonal"] },
        { name: "French Onion Soup", price: "$8.00", desc: "Gruyère crust, beef stock, thyme", tags: ["signature"] },
        { name: "Caesar Salad", price: "$9.00", desc: "Romaine, housemade croutons, parmesan, anchovy dressing", tags: ["signature"] },
        { name: "Kale & Quinoa Salad", price: "$10.50", desc: "Pomegranate, toasted almonds, goat cheese, lemon vinaigrette", tags: ["vegetarian", "healthy"] },
        { name: "Burrata Salad with Fresh Vegetables", price: "$11.00", desc: "Mixed greens, heirloom tomatoes, cucumber, burrata, basil oil", tags: ["vegetarian"] },
        { name: "Seared Ahi Tuna Salad", price: "$13.00", desc: "Sesame crust, mixed greens, cucumber, ponzu dressing, avocado", tags: ["seafood"] },
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Scottish Salmon", price: "$28.00", desc: "Asparagus, mashed potatoes, lemon beurre blanc, dill", tags: ["seafood", "signature"] },
        { name: "Prime Ribeye Steak", price: "$36.00", desc: "12oz USDA Prime, peppercorn sauce, roasted vegetables, fries", tags: ["premium", "signature"] },
        { name: "Pan-Seared Halibut", price: "$26.00", desc: "Cauliflower purée, brown butter, capers, seasonal vegetables", tags: ["seafood"] },
        { name: "Wild Mushroom Risotto", price: "$18.00", desc: "Arborio rice, porcini, truffle oil, parmesan, fresh thyme", tags: ["vegetarian", "signature"] },
        { name: "Duck à l'Orange", price: "$32.00", desc: "Orange gastrique, roasted root vegetables, duck jus", tags: ["premium"] },
        { name: "Herb-Roasted Lamb Shank", price: "$30.00", desc: "Rosemary jus, creamed cauliflower, charred broccolini", tags: ["premium"] },
        { name: "Branzino en Papillote", price: "$25.00", desc: "Steamed in parchment, fennel, white wine, fresh herbs", tags: ["seafood"] },
        { name: "Herb-Crusted Prime Rib", price: "$38.00", desc: "16oz bone-in, au jus, creamed spinach, roasted potatoes", tags: ["premium", "signature"] },
      ]
    },
    {
      title: "Vegetarian Specialties",
      items: [
        { name: "Eggplant Parmigiana", price: "$16.00", desc: "Fried eggplant, marinara, fresh mozzarella, basil", tags: ["vegetarian"] },
        { name: "Vegetable Terrine", price: "$14.00", desc: "Seasonal roasted vegetables, herb coulis, microgreens", tags: ["vegetarian", "vegan-friendly"] },
        { name: "Stuffed Portobello Mushroom", price: "$17.00", desc: "Spinach, ricotta, sun-dried tomato, balsamic reduction", tags: ["vegetarian"] },
        { name: "Quinoa & Vegetable Steak", price: "$15.50", desc: "Beetroot, quinoa, black bean patty, chimichurri", tags: ["vegetarian", "vegan"] },
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", price: "$7.50", desc: "Molten dark chocolate center, vanilla ice cream, raspberries", tags: ["signature"] },
        { name: "Crème Brûlée", price: "$6.50", desc: "Classic French custard, caramelized sugar, fresh berries", tags: ["signature"] },
        { name: "Tiramisu", price: "$6.00", desc: "Ladyfingers, mascarpone, espresso, cocoa powder", tags: ["signature"] },
        { name: "Panna Cotta", price: "$7.00", desc: "Vanilla panna cotta, passion fruit coulis, honeycomb", tags: ["signature"] },
        { name: "Chocolate Mousse Trio", price: "$8.00", desc: "Dark, milk, and white chocolate mousses", tags: ["premium"] },
        { name: "Lemon Meringue Tart", price: "$6.50", desc: "Pastry cream, lemon curd, toasted meringue", tags: ["signature"] },
        { name: "Strawberry Shortcake", price: "$7.00", desc: "Fluffy cake, fresh whipped cream, seasonal berries", tags: ["seasonal"] },
      ]
    },
    {
      title: "Beverages",
      items: [
        { name: "Espresso", price: "$3.00", desc: "Single or double shot" },
        { name: "Cappuccino", price: "$4.00", desc: "Espresso, steamed milk, foam" },
        { name: "Fresh Lemonade", price: "$3.50", desc: "House-made, seasonal" },
        { name: "Iced Tea", price: "$3.00", desc: "Sweetened or unsweetened" },
        { name: "Freshly Squeezed Orange Juice", price: "$4.00", desc: "Morning specialty" },
        { name: "Mineral Water", price: "$3.00", desc: "Still or sparkling" },
      ]
    },
    {
      title: "Wine Selection",
      items: [
        { name: "Château Margaux 2015", price: "$85.00", desc: "Bordeaux, France - Full-bodied, complex, elegant", tags: ["premium"] },
        { name: "Barolo d'Alba 2016", price: "$65.00", desc: "Piedmont, Italy - Powerful tannins, dark fruits", tags: ["premium"] },
        { name: "Sancerre 2020", price: "$35.00", desc: "Loire Valley, France - Crisp, mineral, fruity" },
        { name: "Chianti Classico Riserva 2017", price: "$45.00", desc: "Tuscany, Italy - Cherry, violet, earthy notes" },
        { name: "Sauvignon Blanc 2021", price: "$32.00", desc: "New Zealand - Fresh, tropical, herbaceous" },
        { name: "Pinot Noir 2019", price: "$40.00", desc: "California - Silky, red cherry, oak" },
        { name: "Prosecco", price: "$28.00", desc: "Veneto, Italy - Light, festive, crisp" },
        { name: "House Red", price: "$25.00", desc: "By the glass or bottle" },
        { name: "House White", price: "$24.00", desc: "By the glass or bottle" },
      ]
    },
  ];

  const allItems = menuCategories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.title })));
  
  const filteredItems = allItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredCategories = selectedCategory === 'All' 
    ? menuCategories 
    : menuCategories.filter(cat => cat.title === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-12 px-4 font-serif">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-amber-50 mb-2 tracking-tight drop-shadow-lg">The Rustic Spoon</h1>
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500"></div>
            <div className="w-2 h-1 bg-amber-500"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-amber-600 to-amber-500"></div>
          </div>
          <p className="text-amber-100 text-lg italic mb-2">Award-Winning Farm to Table Dining</p>
          <p className="text-stone-400 text-sm">Est. 2015 • Chef-Driven • Seasonal & Sustainable</p>
        </header>

        {/* Search & Filter Section */}
        <div className="bg-stone-800 rounded-lg p-6 mb-8 border border-amber-600 border-opacity-30">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-stone-700 border border-amber-600 border-opacity-30 rounded-lg text-amber-50 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-opacity-30"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-stone-700 text-amber-100 hover:bg-stone-600 border border-amber-600 border-opacity-30'
              }`}
            >
              All
            </button>
            {menuCategories.map(cat => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
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
        </div>

        {/* Menu Content */}
        <div className="space-y-12">
          {selectedCategory === 'All' ? (
            // All categories view
            menuCategories.map((category, idx) => (
              <section key={idx} className="bg-stone-800 rounded-lg p-8 border border-amber-600 border-opacity-20">
                <h2 className="text-3xl font-bold text-amber-400 mb-2 uppercase tracking-wider">
                  {category.title}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mb-6"></div>
                
                <ul className="space-y-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="border-b border-stone-700 pb-6 last:border-b-0 hover:bg-stone-700 hover:bg-opacity-50 p-4 rounded-lg transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-amber-100">{item.name}</h3>
                          {item.tags && (
                            <div className="flex gap-2 mt-1 flex-wrap">
                              {item.tags.map(tag => (
                                <span key={tag} className="text-xs bg-amber-900 bg-opacity-50 text-amber-200 px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <span className="text-xl font-bold text-amber-400 ml-4 whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-stone-300 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          ) : (
            // Filtered view
            filteredCategories.map((category, idx) => (
              <section key={idx} className="bg-stone-800 rounded-lg p-8 border border-amber-600 border-opacity-20">
                <h2 className="text-3xl font-bold text-amber-400 mb-2 uppercase tracking-wider">
                  {category.title}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mb-6"></div>
                
                <ul className="space-y-6">
                  {filteredItems.filter(item => item.category === category.title).map((item, i) => (
                    <li key={i} className="border-b border-stone-700 pb-6 last:border-b-0 hover:bg-stone-700 hover:bg-opacity-50 p-4 rounded-lg transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-amber-100">{item.name}</h3>
                          {item.tags && (
                            <div className="flex gap-2 mt-1 flex-wrap">
                              {item.tags.map(tag => (
                                <span key={tag} className="text-xs bg-amber-900 bg-opacity-50 text-amber-200 px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <span className="text-xl font-bold text-amber-400 ml-4 whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-stone-300 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-stone-800 rounded-lg p-8 border-t-2 border-amber-600 text-center">
          <div className="space-y-3 mb-4">
            <p className="text-amber-100 font-semibold">The Rustic Spoon Restaurant</p>
            <p className="text-stone-400 text-sm">123 Farm Road, Rural District • (555) 123-4567</p>
            <p className="text-stone-400 text-sm">info@rusticspooon.com • Open Daily 5PM - 11PM</p>
          </div>
          <div className="my-4 border-t border-amber-600 border-opacity-30"></div>
          <div className="flex justify-center gap-4 flex-wrap mb-4 text-sm text-stone-400">
            <span>Vegetarian Options Available</span>
            <span>•</span>
            <span>Vegan Accommodations</span>
            <span>•</span>
            <span>Nut-Free Options</span>
          </div>
          <p className="text-xs text-stone-500 mt-4">Prices subject to change. 12% VAT included. Reservations recommended.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;