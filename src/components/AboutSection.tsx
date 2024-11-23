import React from 'react';
import { Shield, Globe, Users, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About CuratedHub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the rating industry by combining blockchain technology
            with human expertise to create transparent, reliable, and rewarding experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-8">
              To create a transparent and reliable rating ecosystem that benefits all stakeholders
              while revolutionizing how we evaluate hotels and digital art through blockchain
              technology and community participation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-gray-900">Trusted Ratings</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-gray-900">Global Reach</span>
              </div>
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-gray-900">Community Driven</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-gray-900">Fast & Secure</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 mb-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Hotels Rated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15K+</div>
              <div className="text-gray-600">NFTs Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
              <div className="text-gray-600">Remote Workers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <div className="text-gray-600">Paid to Workers</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Join Us in Shaping the Future
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">
              Become a Rater
            </button>
            <button className="btn-secondary border-gray-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}