import React from 'react';
import { Hotel, Palette, Users } from 'lucide-react';

interface RoleSelectionProps {
  onSelect: (role: 'worker' | 'hotel' | 'nft') => void;
}

export default function RoleSelection({ onSelect }: RoleSelectionProps) {
  const roles = [
    {
      id: 'worker',
      title: 'Remote Worker',
      description: 'Rate hotels and NFTs, earn rewards for quality contributions',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
      hover: 'hover:bg-blue-50',
    },
    {
      id: 'hotel',
      title: 'Hotel Business',
      description: 'List your property and get verified ratings',
      icon: Hotel,
      color: 'bg-green-50 text-green-600',
      hover: 'hover:bg-green-50',
    },
    {
      id: 'nft',
      title: 'NFT Creator',
      description: 'Showcase your digital art and build credibility',
      icon: Palette,
      color: 'bg-purple-50 text-purple-600',
      hover: 'hover:bg-purple-50',
    },
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-lg">
        Choose how you'd like to participate in our platform
      </p>
      <div className="grid gap-4">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => onSelect(role.id as 'worker' | 'hotel' | 'nft')}
            className={`p-6 rounded-lg border-2 border-gray-100 ${role.hover} transition-colors text-left flex items-start space-x-4`}
          >
            <div className={`p-3 rounded-lg ${role.color}`}>
              <role.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{role.title}</h3>
              <p className="text-gray-600">{role.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}