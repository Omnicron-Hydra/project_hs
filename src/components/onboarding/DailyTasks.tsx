import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, DollarSign, ChevronLeft, ChevronRight, TrendingUp, CheckCircle2, Circle } from 'lucide-react';
import { products } from '../../data/products';

interface DailyTasksProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function DailyTasks({ onBack, onContinue }: DailyTasksProps) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  
  // VIP1 task tracking
  const completedTasks = 3; // Example: 3 tasks completed
  const totalRequiredTasks = 10; // Example: 10 tasks required for VIP1
  const remainingTasks = totalRequiredTasks - completedTasks;
  
  const tasks = products.map(product => ({
    id: product.id,
    type: product.type,
    title: product.type === 'hotel' 
      ? `Rate ${product.name}`
      : `Evaluate ${product.name}`,
    description: product.type === 'hotel'
      ? 'Review hotel amenities, service quality, and overall experience'
      : 'Assess artwork quality, market potential, and artistic value',
    image: product.imageUrl,
    earnings: product.type === 'hotel' ? '30-50' : '20-35',
    duration: product.type === 'hotel' ? '2-3 hours' : '1-2 hours',
    difficulty: product.rating > 4.5 ? 'Hard' : product.rating > 4 ? 'Medium' : 'Easy',
    details: product.type === 'hotel' 
      ? `Location: ${product.location}`
      : `Artist: ${product.artist}`,
    color: product.type === 'hotel' ? 'blue' : 'purple',
    profit: product.type === 'hotel' ? product.profit : null
  }));

  const currentTask = tasks[currentTaskIndex];
  const totalTasks = tasks.length;

  const nextTask = () => {
    setCurrentTaskIndex((prev) => (prev + 1) % totalTasks);
  };

  const prevTask = () => {
    setCurrentTaskIndex((prev) => (prev - 1 + totalTasks) % totalTasks);
  };

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Available Tasks</h3>
        <p className="text-gray-600">
          Review and rate properties or artworks to earn rewards
        </p>
      </div>

      {/* VIP1 Progress Tracker */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-6 h-6 text-yellow-300 fill-current mr-2" />
            <h4 className="text-lg font-bold">VIP1 Progress</h4>
          </div>
          <span className="text-sm bg-white/20 rounded-full px-3 py-1">
            Level: VIP1
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100">Completed</p>
                <p className="text-2xl font-bold">{completedTasks} Tasks</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-300" />
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100">Remaining</p>
                <p className="text-2xl font-bold">{remainingTasks} Tasks</p>
              </div>
              <Circle className="w-8 h-8 text-blue-200" />
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{Math.round((completedTasks / totalRequiredTasks) * 100)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedTasks / totalRequiredTasks) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className={`bg-${currentTask.color}-50 rounded-lg overflow-hidden shadow-sm`}>
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src={currentTask.image} 
              alt={currentTask.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${currentTask.color}-600/80`}>
                  {currentTask.type === 'hotel' ? 'Hotel Rating' : 'NFT Evaluation'}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${currentTask.color}-600/80`}>
                  {currentTask.difficulty}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{currentTask.title}</h4>
            <p className="text-gray-600 mb-4">{currentTask.description}</p>
            <p className="text-sm text-gray-500 mb-4">{currentTask.details}</p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Earnings</p>
                  <p className="font-semibold">${currentTask.earnings}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{currentTask.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Required</p>
                  <p className="font-semibold">{currentTask.difficulty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
          <button 
            onClick={prevTask}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
          <button 
            onClick={nextTask}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 py-4">
        {Array.from({ length: Math.min(5, totalTasks) }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentTaskIndex % 5 ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold">Return Profits</h4>
          <TrendingUp className="w-6 h-6 text-blue-200" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <DollarSign className="w-5 h-5 text-blue-200 mr-2" />
              <p className="text-sm font-medium text-blue-100">Amount</p>
            </div>
            <p className="text-2xl font-bold">$100-200</p>
            <p className="text-sm text-blue-200 mt-1">Based on completed tasks</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-blue-200 mr-2" />
              <p className="text-sm font-medium text-blue-100">Profit Potential</p>
            </div>
            <p className="text-2xl font-bold">25-40%</p>
            <p className="text-sm text-blue-200 mt-1">Return on investment</p>
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-semibold"
      >
        Continue Task
      </button>
    </div>
  );
}