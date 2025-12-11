import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-acid-lime/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start max-w-7xl">
          
          <div className="overflow-hidden mb-2">
            <h2 className="text-sm md:text-base text-acid-lime tracking-[0.4em] font-bold uppercase animate-fade-in-up">
              Digital Creative Agency
            </h2>
          </div>
          
          <div className="relative">
            <h1 className="font-display font-bold text-[13vw] leading-[0.8] tracking-tighter uppercase mb-6 mix-blend-overlay opacity-50 absolute top-2 left-2 pointer-events-none select-none" aria-hidden="true">
              EUREKA
            </h1>
            <h1 className="font-display font-bold text-[13vw] leading-[0.8] tracking-tighter uppercase mb-6 relative z-10">
              <span className="block hover:text-transparent hover:text-stroke-lime transition-all duration-500 cursor-default">EUREKA</span>
              <span className="block text-transparent text-stroke hover:text-white transition-all duration-500 cursor-default ml-[2vw]">STUDIOS</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-12 mt-8">
            <p className="max-w-md text-gray-400 text-lg md:text-xl leading-relaxed border-l border-acid-lime/50 pl-6">
              We decode the algorithm to help your brand <span className="text-white font-bold">dominate the feed.</span> <br/>
              High-octane strategy, editing, and growth.
            </p>

            <div className="flex items-center gap-6">
              <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-acid-lime text-deep-black font-bold tracking-widest uppercase overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">See The Work</span>
                <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
              
              <button 
                onClick={() => document.getElementById('ai-strategy')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:border-acid-lime hover:scale-110 transition-all duration-300 group"
                aria-label="Get Strategy"
              >
                <svg className="w-6 h-6 text-white group-hover:text-acid-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="hidden lg:block absolute top-1/2 right-8 transform -translate-y-1/2 rotate-90 origin-right">
        <span className="text-xs font-bold uppercase tracking-[0.5em] text-white/20">Scroll to Explore</span>
      </div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-6 bg-deep-black/80 backdrop-blur-md border-t border-white/5">
        <div className="animate-marquee inline-block">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-2xl md:text-3xl font-display font-bold text-gray-500 px-8 opacity-50 hover:text-acid-lime hover:opacity-100 transition-colors cursor-default">
              CONTENT THAT CONVERTS <span className="text-acid-lime mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;