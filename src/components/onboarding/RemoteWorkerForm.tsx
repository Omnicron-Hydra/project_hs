import React, { useState } from 'react';
import { ArrowLeft, Briefcase, DollarSign, Shield, Building2, CreditCard, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface RemoteWorkerFormProps {
  onBack: () => void;
  onClose: () => void;
}

export default function RemoteWorkerForm({ onBack, onClose }: RemoteWorkerFormProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'deposit' | 'withdraw'>('profile');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  const renderProfileForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
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
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
          Relevant Experience
        </label>
        <select
          id="experience"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select experience level</option>
          <option value="beginner">Beginner (0-2 years)</option>
          <option value="intermediate">Intermediate (2-5 years)</option>
          <option value="expert">Expert (5+ years)</option>
        </select>
      </div>
      <div>
        <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
          Areas of Interest
        </label>
        <div className="mt-2 space-y-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
            <span className="ml-2">Hotel Ratings</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
            <span className="ml-2">NFT Evaluations</span>
          </label>
        </div>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Application
        </button>
      </div>
    </form>
  );

  const renderDepositForm = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold">Deposit Funds</h4>
          <ArrowUpRight className="w-6 h-6" />
        </div>
        <div className="space-y-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm text-blue-200 mb-1">Available Balance</p>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center bg-white text-blue-600 rounded-lg p-4 hover:bg-blue-50 transition-colors">
              <Building2 className="w-5 h-5 mr-2" />
              Bank Transfer
            </button>
            <button className="flex items-center justify-center bg-white text-blue-600 rounded-lg p-4 hover:bg-blue-50 transition-colors">
              <CreditCard className="w-5 h-5 mr-2" />
              Credit Card
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount to Deposit</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              min="10"
              step="1"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Proceed to Deposit
        </button>
      </div>
    </div>
  );

  const renderWithdrawForm = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold">Withdraw Earnings</h4>
          <ArrowDownRight className="w-6 h-6" />
        </div>
        <div className="space-y-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm text-green-200 mb-1">Available for Withdrawal</p>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center bg-white text-green-600 rounded-lg p-4 hover:bg-green-50 transition-colors">
              <Building2 className="w-5 h-5 mr-2" />
              Bank Account
            </button>
            <button className="flex items-center justify-center bg-white text-green-600 rounded-lg p-4 hover:bg-green-50 transition-colors">
              <Wallet className="w-5 h-5 mr-2" />
              Crypto Wallet
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount to Withdraw</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              min="10"
              step="1"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
          Request Withdrawal
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to tasks
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-blue-50 rounded-lg">
          <Briefcase className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Flexible Work</h3>
          <p className="text-sm text-gray-600">Work on your own schedule</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <DollarSign className="w-6 h-6 text-green-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Earn Rewards</h3>
          <p className="text-sm text-gray-600">Get paid for quality ratings</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <Shield className="w-6 h-6 text-purple-600 mb-2" />
          <h3 className="font-semibold text-gray-900">Secure Payments</h3>
          <p className="text-sm text-gray-600">Weekly payouts via blockchain</p>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`${
              activeTab === 'profile'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('deposit')}
            className={`${
              activeTab === 'deposit'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab('withdraw')}
            className={`${
              activeTab === 'withdraw'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
          >
            Withdraw
          </button>
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'profile' && renderProfileForm()}
        {activeTab === 'deposit' && renderDepositForm()}
        {activeTab === 'withdraw' && renderWithdrawForm()}
      </div>
    </div>
  );
}