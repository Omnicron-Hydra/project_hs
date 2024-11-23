import React from 'react';
import { Briefcase, DollarSign, Star, Clock } from 'lucide-react';

export default function WorkSection() {
  const opportunities = [
    {
      title: 'Hotel Quality Inspector',
      type: 'Remote',
      earnings: '$30-50/hour',
      requirements: ['3+ years hospitality experience', 'Detail-oriented', 'Available weekends'],
      description: 'Evaluate hotel properties and provide detailed quality assessments.'
    },
    {
      title: 'NFT Art Curator',
      type: 'Flexible',
      earnings: '$25-40/hour',
      requirements: ['Art background', 'Crypto knowledge', 'Strong analytical skills'],
      description: 'Review and rate digital artworks, provide market insights.'
    },
    {
      title: 'Rating System Moderator',
      type: 'Part-time',
      earnings: '$20-35/hour',
      requirements: ['Previous moderation experience', 'Available weekdays'],
      description: 'Ensure rating quality and maintain platform standards.'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Remote Workforce
          </h2>
          <p className="text-xl text-gray-600">
            Flexible opportunities to earn while contributing to our rating ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((job, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {job.type}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>{job.earnings}</span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full btn-primary">Apply Now</button>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p>Work when it suits you best</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competitive Pay</h3>
              <p>Earn based on your contributions</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p>Advance your career with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}