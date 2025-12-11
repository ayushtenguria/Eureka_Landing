import React, { useState } from 'react';
import { generateCreativeStrategy } from '../services/geminiService';
import { StrategyResponse, GenerationStatus } from '../types';
import { useModal } from '../context/ModalContext';

const AIStrategy: React.FC = () => {
  const [brandDesc, setBrandDesc] = useState('');
  const [goal, setGoal] = useState('');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [result, setResult] = useState<StrategyResponse | null>(null);
  const { openModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandDesc || !goal) return;

    setStatus(GenerationStatus.LOADING);
    try {
      const data = await generateCreativeStrategy(brandDesc, goal);
      setResult(data);
      setStatus(GenerationStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(GenerationStatus.ERROR);
    }
  };

  return (
    <section id="ai-strategy" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-deep-black" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Input */}
          <div>
            <div className="inline-block px-3 py-1 bg-acid-lime/10 border border-acid-lime/30 text-acid-lime text-xs font-bold tracking-widest uppercase rounded mb-6">
              Powered by Gemini AI
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 leading-tight">
              Get a Free <br/>Content <span className="text-purple-500">Blueprint</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Not ready to commit? Let our AI generate a quick preliminary strategy for your brand to show you what's possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Describe Your Brand</label>
                <textarea 
                  value={brandDesc}
                  onChange={(e) => setBrandDesc(e.target.value)}
                  placeholder="e.g. A sustainable coffee brand for hikers..."
                  className="w-full bg-white/5 border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-acid-lime transition-colors h-32"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Main Goal</label>
                <input 
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Sell more subscriptions, get 10k followers..."
                  className="w-full bg-white/5 border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-acid-lime transition-colors"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === GenerationStatus.LOADING}
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {status === GenerationStatus.LOADING ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Strategy...
                  </span>
                ) : 'Generate Blueprint'}
              </button>
            </form>
          </div>

          {/* Right Column: Output */}
          <div className="relative">
             <div className="h-full min-h-[400px] border border-white/10 bg-black/50 backdrop-blur-xl p-8 relative overflow-hidden group">
                
                {status === GenerationStatus.IDLE && (
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-600">
                    <div className="w-16 h-16 border-2 border-gray-700 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <p className="font-display uppercase tracking-widest text-sm">Waiting for input</p>
                  </div>
                )}

                {status === GenerationStatus.ERROR && (
                   <div className="absolute inset-0 flex items-center justify-center text-red-400">
                     <p>Something went wrong. Try again.</p>
                   </div>
                )}

                {status === GenerationStatus.SUCCESS && result && (
                  <div className="animate-fade-in space-y-8">
                     <div className="border-b border-white/10 pb-4">
                        <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Campaign Tagline</span>
                        <h3 className="text-3xl font-display font-bold mt-2">"{result.tagline}"</h3>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Target Platforms</span>
                          <ul className="mt-2 space-y-1">
                            {result.platforms.map((p, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-acid-lime rounded-full"/> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                           <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Visual Vibe</span>
                           <p className="mt-2 text-lg italic text-gray-300">{result.vibe}</p>
                        </div>
                     </div>

                     <div>
                        <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Content Concepts</span>
                        <div className="mt-4 space-y-4">
                          {result.contentIdeas.map((idea, i) => (
                            <div key={i} className="bg-white/5 p-4 border-l-2 border-acid-lime">
                              <p className="text-sm text-gray-300">{idea}</p>
                            </div>
                          ))}
                        </div>
                     </div>
                     
                     <div className="pt-4 mt-4 border-t border-white/10 text-center">
                        <p className="text-xs text-gray-500 mb-4">This is just a sample. We build full roadmaps.</p>
                        <button 
                          onClick={openModal}
                          className="inline-block bg-white text-black font-bold uppercase px-6 py-2 text-sm hover:bg-gray-200 transition-colors"
                        >
                          Book Full Consultation
                        </button>
                     </div>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStrategy;