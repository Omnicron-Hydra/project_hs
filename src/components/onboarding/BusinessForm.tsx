import React from 'react';
import { ArrowLeft, Building2, Star, Users } from 'lucide-react';

interface BusinessFormProps {
  onBack: () => void;
  onClose: () => void;
}

export default function BusinessForm({ onBack, onClose }: BusinessFormProps) {
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
        <div className="p-4 bg-blue-50 rounded-lg">
          <Building2 className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Verified Listings</h3>
          <p className="text-sm text-gray-600">Showcase your property</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <Star className="w-6 h-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Quality Ratings</h3>
          <p className="text-sm text-gray-600">Get trusted reviews</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <Users className="w-6 h-6 text-green-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Global Reach</h3>
          <p className="text-sm text-gray-600">Connect with travelers</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
            Hotel Name
          </label>
          <input
            type="text"
            id="businessName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
            Business Email
          </label>
          <input
            type="email"
            id="contactEmail"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            id="propertyType"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select property type</option>
            <option value="hotel">Hotel</option>
            <option value="resort">Resort</option>
            <option value="boutique">Boutique Hotel</option>
            <option value="apartment">Serviced Apartments</option>
          </select>
        </div>
        <div>
          <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">
            Number of Rooms
          </label>
          <input
            type="number"
            id="rooms"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            List Your Property
          </button>
        </div>
      </form>
    </div>
  );
}