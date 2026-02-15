import React, { useState } from 'react';

export default function OrderSummary({ items = [] }) {
  const [quantity, setQuantity] = useState({});

  const parsePrice = (price) => parseFloat(price.replace('$', ''));
  const formatPrice = (num) => '$' + num.toFixed(2);

  const subtotal = items.reduce((sum, item) => {
    const qty = quantity[item.name] || 0;
    return sum + (parsePrice(item.price) * qty);
  }, 0);

  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  return (
    <div className="bg-stone-800 rounded-lg p-12 pb-20 border border-amber-600 border-opacity-20 mt-8 sticky top-8">
      {/* [BUG - Spacing] Excessive padding p-12 pb-20 causes misalignment and overflow. [FIX] Use p-6 instead */}
      <h3 className="text-xl font-bold text-amber-100 mb-4">Order Summary</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-stone-300 text-sm">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-stone-300 text-sm">
          <span>Tax (12%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="border-t border-stone-700 pt-2 mt-2 flex justify-between text-amber-100 font-bold">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors">
        Place Order
      </button>

      <p className="text-xs text-stone-500 mt-4 text-center">
        Prices include VAT. Gratuity not included.
      </p>
    </div>
  );
}
