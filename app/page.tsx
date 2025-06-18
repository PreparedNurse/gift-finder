'use client';

import { useEffect, useState } from 'react';
import { getGifts, Gift } from '@/lib/getGifts';

export default function HomePage() {
  const [allGifts, setAllGifts] = useState<Gift[]>([]);
  const [filteredGifts, setFilteredGifts] = useState<Gift[]>([]);
  const [category, setCategory] = useState<string>('');

  // Load gifts once
  useEffect(() => {
    const fetchData = async () => {
      const gifts = await getGifts();
      setAllGifts(gifts);

      // Default to 'Cozy' category if available, otherwise first category
      const uniqueCategories = [...new Set(gifts.map((g) => g.category))];
      if (uniqueCategories.includes('Cozy')) {
        setCategory('Cozy');
      } else {
        setCategory(uniqueCategories[0] || '');
      }
    };
    fetchData();
  }, []);

  // Generate 3 random gifts for selected category
  const refreshGifts = () => {
    const categoryGifts = allGifts.filter((gift) => gift.category === category);
    const shuffled = [...categoryGifts].sort(() => 0.5 - Math.random());
    setFilteredGifts(shuffled.slice(0, 3));
  };

  // Refresh gifts whenever category changes
  useEffect(() => {
    if (category) refreshGifts();
  }, [category]);

  const categories = Array.from(new Set(allGifts.map((g) => g.category)));

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-white p-6">
      <h1 className="text-3xl font-bold text-center mb-2 text-[#4b3621]">Random Gift Finder</h1>
      <p className="text-[#4b3621] text-center mb-6">Select a category and get 3 random generated ideas every time you click</p>

      <div className="flex justify-center mb-6 gap-4 flex-wrap">
        <select
          className="px-4 py-2 rounded border bg-gray-200 text-[#4b3621]"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <button
          onClick={refreshGifts}
          className="bg-gray-200 text-[#4b3621] px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          See More
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {filteredGifts.map((gift, index) => (
          <div 
            key={gift.id} 
            className="bg-white shadow p-4 rounded-lg max-w-xs w-full text-[#4b3621] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/20 animate-fade-in-up"
            style={{ 
              animationName: 'fadeInUp',
              animationDuration: '0.5s',
              animationTimingFunction: 'ease-out',
              animationFillMode: 'forwards',
              animationDelay: `${index * 150}ms`,
              opacity: 0
            }}
          >
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{gift.name}</h2>
            <p className="text-gray-600 mb-2">{gift.price}</p>
            <a
              href={gift.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e6d5c3] text-[#4b3621] px-4 py-2 rounded hover:bg-[#d4c2b0] transition-colors duration-300 border border-black"
            >
              Buy Now →
            </a>
          </div>
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-600 text-sm">
        This is a free tool that recommends gift ideas. We may earn a small commission from purchases through Amazon Affiliate links.
      </footer>
    </main>
  );
}