import React, { useState } from 'react';
import { X } from 'lucide-react';
import RoleSelection from './RoleSelection';
import RemoteWorkerForm from './RemoteWorkerForm';
import BusinessForm from './BusinessForm';
import NFTCreatorForm from './NFTCreatorForm';
import AuthForm from './AuthForm';
import DailyTasks from './DailyTasks';

type Role = 'worker' | 'hotel' | 'nft' | null;
type Step = 'auth' | 'role' | 'tasks' | 'form';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [step, setStep] = useState<Step>('auth');

  if (!isOpen) return null;

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    if (role === 'worker') {
      setStep('tasks');
    } else {
      setStep('form');
    }
  };

  const handleAuthSuccess = () => {
    setStep('role');
  };

  const renderContent = () => {
    switch (step) {
      case 'auth':
        return (
          <AuthForm
            onBack={onClose}
            onSuccess={handleAuthSuccess}
          />
        );
      case 'role':
        return <RoleSelection onSelect={handleRoleSelect} />;
      case 'tasks':
        return (
          <DailyTasks
            onBack={() => setStep('role')}
            onContinue={() => setStep('form')}
          />
        );
      case 'form':
        switch (selectedRole) {
          case 'worker':
            return (
              <RemoteWorkerForm
                onBack={() => setStep('tasks')}
                onClose={onClose}
              />
            );
          case 'hotel':
            return (
              <BusinessForm
                onBack={() => setStep('role')}
                onClose={onClose}
              />
            );
          case 'nft':
            return (
              <NFTCreatorForm
                onBack={() => setStep('role')}
                onClose={onClose}
              />
            );
          default:
            return null;
        }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {step === 'auth'
              ? 'Page in development! nothing will work for now.'
              : step === 'tasks'
              ? 'Remote Work Opportunities'
              : 'Get Started with CuratedHub'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
}