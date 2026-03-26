import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Leaf } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 backdrop-blur-xl bg-white/60">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ts-forest">Join TerraSocial</h2>
            <p className="text-gray-500 mt-2">Start your eco-journey today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3 text-lg mt-4" isLoading={loading}>
              Create Account
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-ts-green hover:text-emerald-500">
              Log in
            </Link>
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
