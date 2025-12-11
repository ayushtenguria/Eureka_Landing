import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIStrategy from './components/AIStrategy';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { ModalProvider } from './context/ModalContext';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-deep-black text-off-white selection:bg-acid-lime selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <AIStrategy />
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  );
};

export default App;