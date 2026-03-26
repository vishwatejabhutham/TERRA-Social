import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TreePine, Droplets, Leaf, Trophy, Gift, Smartphone, Tablet, Tag, Award, TrendingUp, Sparkles, Rocket } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Rewards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-green-500 to-teal-600 p-8 md:p-12 text-white shadow-2xl shadow-emerald-900/20"
      >
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-10 w-48 h-48 bg-teal-900/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-50">Gamified Impact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            🌱 Earn Rewards While Saving the Planet
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 font-medium leading-relaxed">
            Turn your small actions into real impact — and real rewards.<br className="hidden md:block"/>
            With TerraSocial, you don’t just plant trees… you grow them, track them, and get rewarded for it.
          </p>
          <div className="mt-8">
            <Link to="/plant">
              <Button variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg text-lg px-8 py-3">
                Start Earning Today
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {/* How You Earn */}
        <motion.div variants={itemVariants}>
          <Card className="h-full bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                <Gift className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800">💰 How You Earn</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
                  <TreePine className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Plant Trees</h3>
                  <p className="text-gray-600 mt-1">Earn rewards for every verified plantation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Maintain & Update</h3>
                  <p className="text-gray-600 mt-1">Upload progress and keep your trees alive to unlock more rewards.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-lime-100 text-lime-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Survival Bonus</h3>
                  <p className="text-gray-600 mt-1">Healthy trees = bigger rewards. Consistency matters.</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Earn Up to 600 */}
        <motion.div variants={itemVariants}>
          <Card className="h-full bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-xl shadow-amber-900/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800">🎯 Earn Up to ₹600</h2>
            </div>
            <p className="text-gray-700 font-medium text-lg mb-6">
              Your journey doesn’t stop at planting.<br/>
              The more you care, the more you earn.
            </p>
            <ul className="space-y-4">
              {['Plant trees and earn instantly', 'Maintain them to increase rewards', 'Unlock milestone bonuses as you grow'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/60 p-3 rounded-lg border border-amber-200/50 shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-amber-200 text-amber-800 rounded-full font-bold">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Compete & Win Big */}
        <motion.div variants={itemVariants}>
          <Card className="h-full bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                <Trophy className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800">🏆 Compete & Win Big</h2>
            </div>
            <p className="text-gray-600 mb-6">Climb the leaderboard and win exciting prizes. Top contributors get rewarded every month.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-300 transition-colors text-center">
                <Smartphone className="w-10 h-10 text-yellow-500 mb-2" />
                <span className="text-sm font-bold text-gray-800 text-center">🥇 Premium<br/>Smartphones</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-300 transition-colors text-center">
                <Tablet className="w-10 h-10 text-gray-400 mb-2" />
                <span className="text-sm font-bold text-gray-800 text-center">🥈 Tablets<br/>& Gadgets</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-300 transition-colors text-center">
                <Tag className="w-10 h-10 text-amber-600 mb-2" />
                <span className="text-sm font-bold text-gray-800 text-center">🥉 Vouchers<br/>& Accessories</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Build Your Green Identity */}
        <motion.div variants={itemVariants}>
          <Card className="h-full bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 shadow-xl shadow-teal-900/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-100 text-teal-600 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800">📊 Build Your Green Identity</h2>
            </div>
            <p className="text-gray-700 font-medium mb-6">
              Track your impact. Make your contribution visible — and meaningful.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl shadow-sm border border-teal-100">
                <span className="font-bold text-gray-800">Trees planted</span>
                <span className="text-xl">🌳</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl shadow-sm border border-teal-100">
                <span className="font-bold text-gray-800">CO₂ reduced</span>
                <span className="text-xl">🌍</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl shadow-sm border border-teal-100">
                <span className="font-bold text-gray-800">Growth over time</span>
                <span className="text-xl">📈</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="bg-ts-dark border-0 shadow-2xl overflow-hidden relative text-center py-12">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center">
              <Rocket className="w-12 h-12 text-ts-lime mb-4" />
              <h2 className="text-3xl font-extrabold text-white mb-4">🚀 Why Join Now?</h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
                Early users get higher rewards and exclusive benefits. Start today and be part of something bigger.
              </p>
              <Link to="/plant">
                <Button variant="primary" className="text-lg px-10 py-4 shadow-lg shadow-emerald-500/30">
                  Claim Early Access
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Rewards;
