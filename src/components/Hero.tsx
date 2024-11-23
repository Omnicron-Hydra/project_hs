import React from 'react';
import { ArrowRight, Hotel, Palette, Users } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const stats = [
    { label: 'Tasks Completed', value: '10,000+' },
    { label: 'Hotels Rated', value: '5,000+' },
    { label: 'Active Users', value: '25,000+' },
    { label: 'NFTs Listed', value: '15,000+' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionizing Ratings, Bridging Industries, Empowering Workers
          </h1>
          <p className="text-xl text-blue-100 mb-12">
            Join the future of decentralized ratings for hotels and digital art, powered by blockchain technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={onGetStarted}
              className="flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}