import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ProductGrid from './components/ProductGrid';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import OnboardingModal from './components/onboarding/OnboardingModal';
import { products } from './data/products';

function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'hotels' | 'nfts' | 'work' | 'about'>('home');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'hotels':
        return <ProductGrid products={products.filter(p => p.type === 'hotel')} />;
      case 'nfts':
        return <ProductGrid products={products.filter(p => p.type === 'nft')} />;
      case 'work':
        return <WorkSection />;
      case 'about':
        return <AboutSection />;
      default:
        return (
          <>
            <Hero onGetStarted={() => setIsOnboardingOpen(true)} />
            <Features />
            <ProductGrid products={products} />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-40 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveSection('home')}>
              <span className="text-2xl font-bold text-blue-900">CuratedHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveSection('hotels')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'hotels' ? 'text-blue-600 font-semibold' : ''}`}
              >
                Hotels
              </button>
              <button 
                onClick={() => setActiveSection('nfts')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'nfts' ? 'text-blue-600 font-semibold' : ''}`}
              >
                NFTs
              </button>
              <button 
                onClick={() => setActiveSection('work')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'work' ? 'text-blue-600 font-semibold' : ''}`}
              >
                Work
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`text-gray-600 hover:text-gray-900 ${activeSection === 'about' ? 'text-blue-600 font-semibold' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => setIsOnboardingOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {renderSection()}
      </main>

      <OnboardingModal 
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CuratedHub</h3>
              <p className="text-gray-400">
                Revolutionizing ratings across industries
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveSection('hotels')} className="hover:text-white">Hotels</button></li>
                <li><button onClick={() => setActiveSection('nfts')} className="hover:text-white">NFTs</button></li>
                <li><button onClick={() => setActiveSection('work')} className="hover:text-white">Remote Work</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveSection('about')} className="hover:text-white">About</button></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CuratedHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;