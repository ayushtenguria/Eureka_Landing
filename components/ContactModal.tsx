import React, { useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext';

const ContactModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIframeLoaded(false); // Reset loading state on close
    }
    return () => {
       document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-deep-black/90 backdrop-blur-lg animate-[fadeIn_0.3s_ease-out]" 
          onClick={closeModal}
        />
        
        <div className="relative w-full max-w-lg h-[80vh] bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10 animate-fade-in-up">
            {/* Header / Close Bar */}
            <div className="absolute top-0 right-0 p-4 z-20 flex justify-end pointer-events-none">
              <button 
                onClick={closeModal}
                className="pointer-events-auto p-2 bg-black hover:bg-acid-lime hover:text-black rounded-full text-white transition-all duration-300 border border-white/10 hover:rotate-90 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="w-full h-full bg-[#121212] relative flex items-center justify-center">
              
              {/* Loading Spinner */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-acid-lime"></div>
                </div>
              )}

              {/* Using invert filter to force dark mode on the Tally iframe.
                  Only showing opacity-100 once loaded to prevent white flash. 
              */}
              <iframe 
                src="https://tally.so/r/MeX8rE?transparentBackground=1" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Eureka Studios Consultation"
                className={`w-full h-full relative z-10 transition-opacity duration-500 ease-in-out invert hue-rotate-180 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIframeLoaded(true)}
              ></iframe>
            </div>
        </div>
        
        {/* Define local keyframe for backdrop fade if needed, though usually tailwind config handles shared ones. 
            The backdrop uses a one-off animation class here for simplicity or relies on default if configured. 
            Since we removed the broken custom animation from iframe, this will work better. 
        */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
    </div>
  );
};

export default ContactModal;