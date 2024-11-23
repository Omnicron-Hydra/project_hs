import React from 'react';
import { ArrowLeft, Palette, Shield, Coins } from 'lucide-react';

interface NFTCreatorFormProps {
  onBack: () => void;
  onClose: () => void;
}

export default function NFTCreatorForm({ onBack, onClose }: NFTCreatorFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to roles
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-purple-50 rounded-lg">
          <Palette className="w-6 h-6 text-purple-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Showcase Art</h3>
          <p className="text-sm text-gray-600">Display your NFTs</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <Shield className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Verified Ratings</h3>
          <p className="text-sm text-gray-600">Build credibility</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <Coins className="w-6 h-6 text-green-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Smart Contracts</h3>
          <p className="text-sm text-gray-600">Secure transactions</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="artistName" className="block text-sm font-medium text-gray-700">
            Artist Name/Pseudonym
          </label>
          <input
            type="text"
            id="artistName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
            ETH Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="artStyle" className="block text-sm font-medium text-gray-700">
            Primary Art Style
          </label>
          <select
            id="artStyle"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select art style</option>
            <option value="digital">Digital Art</option>
            <option value="pixel">Pixel Art</option>
            <option value="3d">3D Art</option>
            <option value="generative">Generative Art</option>
            <option value="photography">Photography</option>
          </select>
        </div>
        <div>
          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
            Portfolio URL (Optional)
          </label>
          <input
            type="url"
            id="portfolio"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Creator Account
          </button>
        </div>
      </form>
    </div>
  );
}