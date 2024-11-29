import React, { useState } from 'react';
import { z } from 'zod';
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User, Phone, Globe } from 'lucide-react';
import axios from 'axios';

interface AuthFormProps {
  onBack: () => void;
  onSuccess: (data: any) => void;
}

const signupSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  country: z.string().min(1, 'Please select your country'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  transferPin: z.string().length(6, 'Transfer PIN must be exactly 6 digits'),
  referralCode: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;
type LoginFormData = z.infer<typeof loginSchema>;

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Japan', 'China', 'India', 'Brazil', 'South Africa',
  'Nigeria', 'Kenya', 'UAE', 'Singapore', 'New Zealand'
].sort();

export default function AuthForm({ onBack, onSuccess }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showTransferPin, setShowTransferPin] = useState(false);
  const [errors, setErrors] = useState<Partial<SignupFormData & LoginFormData>>({});
  const [formData, setFormData] = useState<SignupFormData & LoginFormData>({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    transferPin: '',
    referralCode: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let validatedData: SignupFormData | LoginFormData;

      if (isLogin) {
        validatedData = loginSchema.parse(formData);
      } else {
        validatedData = signupSchema.parse(formData);
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const response = await axios.post(`${apiUrl}${endpoint}`, validatedData);

      console.log('Form submitted successfully:', response.data);
      onSuccess(response.data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<SignupFormData & LoginFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof (SignupFormData & LoginFormData)] = err.message;
          }
        });
        setErrors(formattedErrors);
      } else if (axios.isAxiosError(error)) {
        setErrors({ global: error.response?.data?.message || 'Something went wrong. Please try again.' });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {isLogin ? 'Welcome Back!' : 'Create Your Account'}
        </h3>
        <p className="text-gray-600">
          {isLogin
            ? 'Sign in to access your account'
            : 'Join our community and start earning'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Conditional rendering for Sign Up fields */}
        {!isLogin && (
          <>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`block w-full mt-1 border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} rounded-md`}
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`block w-full mt-1 border ${errors.username ? 'border-red-300' : 'border-gray-300'} rounded-md`}
              />
              {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">
                Referral Code (Optional)
              </label>
              <input
                type="text"
                id="referralCode"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                className={`block w-full mt-1 border ${errors.referralCode ? 'border-red-300' : 'border-gray-300'} rounded-md`}
              />
              {errors.referralCode && <p className="mt-1 text-sm text-red-600">{errors.referralCode}</p>}
            </div>

            {/* Transfer PIN */}
            <div>
              <label htmlFor="transferPin" className="block text-sm font-medium text-gray-700">
                Transfer PIN
              </label>
              <div className="relative mt-1">
                <input
                  type={showTransferPin ? 'text' : 'password'}
                  id="transferPin"
                  name="transferPin"
                  value={formData.transferPin}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-10 border ${errors.transferPin ? 'border-red-300' : 'border-gray-300'} rounded-md`}
                />
                <button
                  type="button"
                  onClick={() => setShowTransferPin(!showTransferPin)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showTransferPin ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
              {errors.transferPin && <p className="mt-1 text-sm text-red-600">{errors.transferPin}</p>}
            </div>
          </>
        )}

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full mt-1 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`block w-full pl-10 pr-10 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600"
        >
          {isLogin ? 'Create an Account' : 'Already have an Account?'}
        </button>
      </div>
    </div>
  );
}
