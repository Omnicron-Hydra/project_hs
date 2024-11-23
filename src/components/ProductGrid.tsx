import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Filter, MapPin, Palette, TrendingUp, DollarSign } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency } from '../utils/format';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'all' | 'hotel' | 'nft'>('all');
  const itemsPerPage = 8;

  const filteredProducts = products.filter(
    product => filter === 'all' || product.type === filter
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Listings</h2>
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value as 'all' | 'hotel' | 'nft');
                setCurrentPage(1);
              }}
              className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All Products</option>
              <option value="hotel">Hotels Only</option>
              <option value="nft">NFTs Only</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="relative pb-[75%] overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.type === 'hotel' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {product.type === 'hotel' ? 'Hotel' : 'NFT'}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">
                        {product.rating.toFixed(1)} ({product.reviews})
                      </span>
                    </div>
                    <div className="text-lg font-bold">
                      {formatCurrency(product.price)}
                      {product.type === 'nft' && ' ETH'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {product.type === 'hotel' ? (
                    <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                  ) : (
                    <Palette className="w-4 h-4 text-gray-400 mr-1" />
                  )}
                  <span className="text-sm text-gray-600">
                    {product.type === 'hotel' ? product.location : product.artist}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Enhanced Profit Information */}
                {product.type === 'hotel' && product.profit && (
                  <div className="mt-4 bg-green-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-green-700">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Daily Profit</span>
                      </div>
                      <span className="text-green-700 font-bold">
                        {formatCurrency(product.profit.daily || 0)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-700">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Total Returns</span>
                      </div>
                      <span className="text-green-700 font-bold">
                        {formatCurrency(product.profit.total || 0)}
                      </span>
                    </div>
                  </div>
                )}
                
                {product.type === 'nft' && (
                  <div className="mt-4 bg-purple-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-purple-700">
                        <Palette className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Collection</span>
                      </div>
                      <span className="text-purple-700 font-medium text-sm">
                        {product.collection}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Showing {startIndex + 1} to{' '}
              {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of{' '}
              {filteredProducts.length} results
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border border-gray-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}