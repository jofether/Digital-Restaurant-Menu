import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 bg-stone-800 rounded-lg p-8 border-t-2 border-amber-600 text-center absolute bottom-0 left-0 w-full -z-10">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 text-xs text-stone-400">
        <div>
          <p className="font-semibold text-amber-100 mb-2">Hours</p>
          <p>Mon-Thu: 5PM-11PM</p>
          <p>Fri-Sat: 5PM-12AM</p>
          <p>Sun: 5PM-10PM</p>
        </div>
        <div>
          <p className="font-semibold text-amber-100 mb-2">Reservations</p>
          <p>Recommended</p>
          <p>(555) 123-4567</p>
          <p>Online: reservations.rusticspooon.com</p>
        </div>
        <div>
          <p className="font-semibold text-amber-100 mb-2">Private Events</p>
          <p>Banquet room available</p>
          <p>Up to 100 guests</p>
          <p>events@rusticspooon.com</p>
        </div>
        <div>
          <p className="font-semibold text-amber-100 mb-2">Follow Us</p>
          <p>Instagram: @rusticspooon</p>
          <p>Facebook: The Rustic Spoon</p>
          <p>Twitter: @rusticspooon</p>
        </div>
      </div>
      <p className="text-xs text-stone-500 mt-4">Prices subject to change. 12% VAT included. Reservations recommended.</p>
    </footer>
  );
}
