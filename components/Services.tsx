import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Short-Form Video",
    description: "We edit fast-paced, retention-focused videos for TikTok, Reels, and Shorts. Hooks that grab attention, pacing that keeps it.",
    tags: ["Editing", "Sound Design", "Captions"]
  },
  {
    id: 2,
    title: "Content Strategy",
    description: "Data-driven roadmaps. We analyze trends to tell you exactly what to post, when to post, and why it will work.",
    tags: ["Analytics", "Trends", "Planning"]
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Visuals that scream your name. From logo animation to consistent feed aesthetics that build authority.",
    tags: ["Design", "Motion Graphics", "Branding"]
  },
  {
    id: 4,
    title: "Community Growth",
    description: "Real engagement. We manage comments, DMs, and community building to turn viewers into superfans.",
    tags: ["Engagement", "Management", "Growth"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-surface relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h3 className="text-acid-lime font-bold tracking-widest uppercase mb-2">Our Expertise</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold">Services</h2>
          </div>
          <p className="max-w-md text-gray-400 mt-4 md:mt-0">
            Comprehensive creative solutions designed to scale your digital presence in the attention economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group p-8 border border-white/5 hover:border-acid-lime/50 bg-deep-black transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-display font-bold text-white/10 group-hover:text-acid-lime transition-colors">0{service.id}</span>
                <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-acid-lime group-hover:border-acid-lime transition-colors">
                  <svg className="w-4 h-4 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/5 text-gray-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
