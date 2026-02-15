# The Rustic Spoon - Digital Restaurant Menu

A modern, responsive digital restaurant menu application built with React, Vite, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

## Features

✨ **Modern Design**
- Elegant dark theme with warm amber accents
- Fully responsive layout (mobile, tablet, desktop)
- Smooth animations and hover effects
- Professional typography using serif fonts

🔍 **Smart Search & Filtering**
- Real-time search across all menu items
- Filter by menu category
- Tag-based categorization (vegetarian, seafood, premium, etc.)
- Quick category buttons for easy navigation

🍽️ **Comprehensive Menu**
- 7 menu categories:
  - Appetizers & Starters (6 items)
  - Soups & Salads (6 items)
  - Main Courses (8 items)
  - Vegetarian Specialties (4 items)
  - Desserts (7 items)
  - Beverages (6 items)
  - Wine Selection (9 items)
- 50+ menu items with detailed descriptions
- Clearly displayed pricing
- Dietary and special tags (vegetarian, seafood, premium, signature, seasonal)

📱 **Responsive Components**
- Mobile-first design approach
- Adaptive grid layouts
- Touch-friendly interface
- Fast load times with Vite

## Project Structure

```
src/
├── App.jsx                      # Main application component with state management
├── main.jsx                     # React entry point
├── index.css                    # Global styles with Tailwind
├── components/
│   ├── Header.jsx              # Restaurant header with title & tagline
│   ├── Footer.jsx              # Restaurant info, hours, social media
│   ├── MenuItem.jsx            # Individual menu item display
│   ├── MenuCategory.jsx        # Category section wrapper
│   ├── SearchBar.jsx           # Real-time search input
│   ├── CategoryFilter.jsx      # Category filter buttons
│   ├── SpecialSection.jsx      # Daily specials and promotions
│   └── OrderSummary.jsx        # Order total calculator
├── data/
│   └── menuData.js             # Complete menu data structure
├── utils/
│   └── menuHelpers.js          # Utility functions for menu operations
└── config/
    └── constants.js            # Application constants

public/
├── vite.svg                     # Vite logo
└── index.html                   # HTML template

Configuration Files:
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
└── README.md                    # This file
```

## Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm 7+

### Steps
1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build optimized production bundle
npm run preview  # Preview production build locally
npm run lint     # Run ESLint (if configured)
```

## Technologies Used

- **React 18** - UI component library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **JavaScript ES6+** - Modern JavaScript

## Customization Guide

### Restaurant Details
Edit `src/config/constants.js`:
```js
export const RESTAURANT_INFO = {
  name: 'Your Restaurant Name',
  phone: '(555) 123-4567',
  email: 'your@email.com',
  // ...
};
```

### Menu Items
Edit `src/data/menuData.js`:
```js
{
  title: "Category Name",
  items: [
    {
      name: "Dish Name",
      price: "$XX.XX",
      desc: "Description with ingredients",
      tags: ["vegetarian", "signature"]
    },
    // ...
  ]
}
```

### Hours of Operation
Edit `src/config/constants.js` HOURS object

### Color Scheme
Default uses warm amber/stone colors. Change in components:
- `amber-*` → Other warm colors (orange, yellow, red)
- `stone-*` → Other neutral colors (gray, slate, zinc)

### Component Customization

**Header** (`src/components/Header.jsx`)
- Restaurant name and tagline
- Decorative dividers

**Footer** (`src/components/Footer.jsx`)
- Address, phone, email
- Hours by day
- Social media links
- Private events info

**MenuItem** (`src/components/MenuItem.jsx`)
- Individual item display
- Tags and styling
- Price formatting

## Utility Functions

Available in `src/utils/menuHelpers.js`:

```js
filterMenuItems(items, searchTerm)  // Search items
formatPrice(price)                   // Convert string to number
priceRange(items)                    // Get min/max prices
getItemsByTag(items, tag)           // Filter by tag
getSignatureDishes(items)           // Get signature items
getVegetarianItems(items)           // Get vegetarian items
getVeganItems(items)                // Get vegan items
getSeafoodItems(items)              // Get seafood items
getPremiumItems(items)              // Get premium items
sortByPrice(items, ascending)       // Sort by price
sortByName(items, ascending)        // Sort by name
getItemStats(items)                 // Get menu statistics
```

## Features in Detail

### Real-Time Search
- Case-insensitive search
- Searches by dish name and description
- Works across all categories simultaneously

### Category Filtering
- "All" button displays all menu items
- Category buttons filter to specific sections
- Visual feedback shows active category
- Smooth transitions between views

### Tag System
Items can have multiple tags:
- **Dietary**: `vegetarian`, `vegan`
- **Ingredient**: `seafood`
- **Special**: `signature`, `premium`, `seasonal`
- **Health**: `healthy`, `gluten-free`

### Responsive Design
- Mobile: Single column, full-width
- Tablet: Optimized spacing and layout
- Desktop: Full navigation and filters
- All interactive elements are touch-friendly

## Performance Optimization

- Vite provides instant HMR (Hot Module Replacement)
- Efficient React component hierarchy
- Tailwind CSS tree-shaking removes unused styles
- Minimal JavaScript bundle size
- Static menu data (no API calls needed)

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Mobile

## Restaurant Information (Demo)

**The Rustic Spoon**
- 📍 123 Farm Road, Rural District
- 📞 (555) 123-4567
- 📧 info@rusticspooon.com
- 🌐 www.rusticspooon.com

**Hours**
- Monday-Thursday: 5PM - 11PM
- Friday-Saturday: 5PM - 12AM
- Sunday: 5PM - 10PM

**Accommodations**
- ✓ Vegetarian Options
- ✓ Vegan Menu Available
- ✓ Nut-Free Options
- ✓ Private Events & Catering
- ✓ Gluten-Free Accommodations

## Contributing

Feel free to:
- Fork this project
- Customize for your restaurant
- Add new features
- Improve the design
- Submit improvements

## License

Open source - free to use and modify for personal or commercial projects.

## Notes

- All prices and menu items are for demonstration purposes
- Update restaurant information before going live
- Consider adding actual images of dishes for production use
- Mobile app version available as React Native variant
- Consider adding: photos, ratings, order integration, online payment

---

**Last Updated:** February 2026
**Version:** 1.0.0

A React application built with Vite that displays a restaurant menu using space-between alignment for dish names and prices.

## Features

- Responsive design
- Clean, modern layout
- Uses Tailwind CSS for styling
- Space-between alignment for menu items

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Build

To build for production:
```bash
npm run build
```

## Rationale

This layout relies on Space-Between Alignment, often connecting an item on the left (Dish Name) with an item on the right (Price). It trains the model to detect horizontal separation in list items.