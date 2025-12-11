import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-deep-black pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Large watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] font-display font-bold uppercase leading-none text-white">EUREKA</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase leading-0.9 mb-8">
              Found<br/>
              <span className="text-acid-lime">It.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md mb-12">
              Ready to stop guessing and start growing? Let's build your legacy together.
            </p>
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-2">New Business</span>
                <a href="mailto:hello@eurekastudios.com" className="text-2xl font-display font-bold hover:text-acid-lime transition-colors">hello@eurekastudios.com</a>
              </div>
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Studio</span>
                <p className="text-xl text-gray-300">Gurgaon, Haryana</p>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
             <ul className="space-y-6 text-right">
                {['Instagram', 'TikTok', 'LinkedIn', 'YouTube'].map(social => (
                  <li key={social}>
                    <a href="#" className="text-3xl md:text-4xl font-display font-bold uppercase text-transparent text-stroke hover:text-white hover:text-stroke-0 transition-all duration-300 flex items-center justify-end gap-4 group">
                      {social}
                      <span className="w-2 h-2 rounded-full bg-acid-lime opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </a>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Eureka Studios. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-acid-lime transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-acid-lime transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <style>{`
        .text-stroke-0 {
          -webkit-text-stroke: 0;
          color: white;
        }
      `}</style>
    </footer>
  );
};

export default Footer;