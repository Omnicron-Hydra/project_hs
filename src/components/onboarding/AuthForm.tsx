import React, { useState } from 'react';
import { z } from 'zod';
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User, Phone, Globe, Key } from 'lucide-react';
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
            : 'Join our community and start earning.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block w-full mt-1 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`block w-full mt-1 border ${errors.country ? 'border-red-300' : 'border-gray-300'} rounded-md`}
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
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
          </>
        )}

        {/* Password and Submit Button */}
        {/* ...rest of the form remains the same */}
      </form>
    </div>
  );
}
