import React from 'react';
import { Star, Shield, Briefcase, Link } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Star,
      title: 'Dynamic Star Rating',
      description: 'Real-time, transparent rating system powered by verified users',
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Immutable records and secure transactions for all ratings',
    },
    {
      icon: Briefcase,
      title: 'Task-Based Earnings',
      description: 'Earn rewards by contributing quality ratings and reviews',
    },
    {
      icon: Link,
      title: 'Industry Integration',
      description: 'Seamlessly connect hotels and digital art marketplaces',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powered by Innovation
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of ratings and reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}