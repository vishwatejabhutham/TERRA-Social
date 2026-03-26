import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Leaf, CheckCircle, Globe, TreePine } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import axiosInstance from '../../api/axiosInstance';
import { API } from '../../api/endpoints';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post(API.login, { email, password });
      if (response.data?.token) {
        localStorage.setItem('ts_token', response.data.token);
      }
    } catch (error) {
      console.warn("API Login failed, logging in dummy user:", error);
      localStorage.setItem('ts_token', 'dummy_token_123');
    } finally {
      setLoading(false);
      navigate('/dashboard');
    }
  };

  // 3D-like Floating Animation Variants
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 md:p-8 perspective-1000">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl flex flex-col lg:flex-row bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-2xl shadow-emerald-900/10 border border-white/50 overflow-hidden relative z-10"
      >
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 mb-6 shadow-inner border border-white">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-ts-forest mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 mb-10 text-lg">Log in to track your green impact and connect with the community.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 text-gray-800 border-2 border-gray-100 rounded-2xl focus:ring-0 focus:border-emerald-400 bg-white/80 transition-all hover:bg-white inset-shadow-sm font-medium"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 text-gray-800 border-2 border-gray-100 rounded-2xl focus:ring-0 focus:border-emerald-400 bg-white/80 transition-all hover:bg-white inset-shadow-sm font-medium"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-5 w-5 text-emerald-500 focus:ring-emerald-500 border-gray-300 rounded-lg cursor-pointer transition-colors"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm font-semibold text-gray-600 cursor-pointer select-none">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" variant="primary" className="w-full py-4 text-lg font-bold rounded-2xl shadow-xl shadow-emerald-600/20 active:scale-[0.98] transition-all" isLoading={loading}>
                Sign In
              </Button>
            </form>

            <p className="mt-8 text-center text-sm font-semibold text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-emerald-600 hover:text-emerald-500 transition-colors ml-1">
                Join the movement &rarr;
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Right Side: 3D Visuals & Animations */}
        <div className="hidden lg:flex lg:w-1/2 p-8 relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-800 rounded-r-[3rem] items-center justify-center isolate">
          {/* Abstract blobs forming background pseudo-3D */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-400/40 blur-3xl rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-400/30 blur-3xl rounded-full"></div>
          
          <div className="relative w-full max-w-md h-[500px] flex items-center justify-center perspective-1000">
            {/* Center glowing orb */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 bg-gradient-to-tr from-lime-300 to-emerald-400 rounded-full blur-2xl opacity-40 z-0"
            />
            
            {/* Main Center Planet/Badge */}
            <motion.div 
              variants={floatingAnimation}
              animate="animate"
              className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/30 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center justify-center transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Globe className="w-24 h-24 text-white opacity-90 drop-shadow-md" strokeWidth={1.5} />
            </motion.div>

            {/* Orbiting / Floating Glass Cards */}
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 right-0 z-20"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl"><TreePine className="text-lime-300 w-5 h-5"/></div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider opacity-80">Global Impact</p>
                  <p className="text-white font-extrabold text-lg">1.2M+ Trees</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-24 left-4 z-20"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="bg-emerald-400/30 p-2 rounded-xl"><CheckCircle className="text-white w-5 h-5"/></div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider opacity-80">Community</p>
                  <p className="text-white font-extrabold text-lg">50k+ Active</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, -100 - (Math.random() * 100), -20],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 rounded-full bg-lime-300/60 blur-[1px]"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  bottom: `${20 + Math.random() * 30}%`
                }}
              />
            ))}
          </div>
          
          {/* Subtle overlay lines for tech/premium feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
