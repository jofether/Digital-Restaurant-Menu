import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuCategory from './components/MenuCategory';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const menuCategories = [
    {
      title: "Appetizers & Starters",
      items: [
        { name: "Truffle Fries", price: "$8.50", desc: "Parmesan, truffle oil, garlic aioli", tags: ["vegetarian", "signature"] },
        { name: "Crispy Calamari", price: "$12.00", desc: "Marinara sauce, lemon wedges", tags: ["seafood"] },
        { name: "Bruschetta", price: "$9.00", desc: "Tomato, basil, balsamic glaze", tags: ["vegetarian"] },
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Salmon", price: "$24.00", desc: "Asparagus, mashed potatoes, lemon butter", tags: ["seafood", "signature"] },
        { name: "Ribeye Steak", price: "$32.00", desc: "12oz USDA Prime, peppercorn sauce", tags: ["premium"] },
        { name: "Mushroom Risotto", price: "$18.00", desc: "Arborio rice, wild mushrooms, parmesan", tags: ["vegetarian"] },
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", price: "$7.50", desc: "Molten center, vanilla ice cream, raspberries", tags: ["signature"] },
        { name: "Crème Brûlée", price: "$6.50", desc: "French custard, caramelized sugar, berries", tags: ["signature"] },
      ]
    },
  ];

  const filteredCategories = selectedCategory === 'All' 
    ? menuCategories 
    : menuCategories.filter(cat => cat.title === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-12 px-4 font-serif">
      <div className="max-w-5xl mx-auto">
        <Header />
        
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <CategoryFilter 
          categories={menuCategories} 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="space-y-12 mt-12">
          {filteredCategories.map((cat, idx) => (
            <MenuCategory key={idx} title={cat.title} items={cat.items} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
