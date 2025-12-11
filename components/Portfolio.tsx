import React from 'react';
import { PortfolioItem } from '../types';
import { useModal } from '../context/ModalContext';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    client: "NEON ENERGY",
    category: "Reels Campaign",
    imageUrl: "https://picsum.photos/600/800?random=1",
    stats: "2.4M Views"
  },
  {
    id: 2,
    client: "URBAN OUTFIT",
    category: "Fashion Edit",
    imageUrl: "https://picsum.photos/600/800?random=2",
    stats: "150% Engagement"
  },
  {
    id: 3,
    client: "TECH STARTUP",
    category: "Product Launch",
    imageUrl: "https://picsum.photos/600/600?random=3", // Square
    stats: "Sold Out"
  },
  {
    id: 4,
    client: "FITNESS PRO",
    category: "Personal Brand",
    imageUrl: "https://picsum.photos/600/800?random=4",
    stats: "100k New Subs"
  },
];

const Portfolio: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="work" className="py-24 bg-deep-black">
      <div className="container mx-auto px-6">
        <h3 className="text-acid-lime font-bold tracking-widest uppercase mb-12 text-center">Selected Works</h3>
        
        {/* Masonry-ish Layout */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden break-inside-avoid cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.client} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-acid-lime text-sm font-bold tracking-widest uppercase mb-1">{item.category}</span>
                <h4 className="text-3xl font-display font-bold uppercase mb-2">{item.client}</h4>
                {item.stats && (
                  <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur text-xs font-bold uppercase rounded border border-white/20">
                    Result: {item.stats}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button 
             onClick={openModal}
             className="inline-block text-xl font-display font-bold uppercase border-b-2 border-acid-lime hover:text-acid-lime transition-colors pb-1"
           >
             Start a Project With Us
           </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;