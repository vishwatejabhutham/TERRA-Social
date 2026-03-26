import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Globe, Trophy, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Landing = () => {
  const features = [
    { icon: <Globe className="w-8 h-8 text-ts-green" />, title: 'Track Impact', desc: 'Log your sustainable activities and see your personal carbon offset.' },
    { icon: <Leaf className="w-8 h-8 text-ts-lime" />, title: 'Plant Real Trees', desc: 'Partner with global NGOs to fund real-world reforestation efforts.' },
    { icon: <Trophy className="w-8 h-8 text-amber-500" />, title: 'Earn Rewards', desc: 'Level up, earn badges, and climb the global eco-leaderboard.' },
    { icon: <Users className="w-8 h-8 text-teal-500" />, title: 'Join Community', desc: 'Team up with friends, family, or colleagues for collective action.' }
  ];

  return (
    <div className="pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[70vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-ts-forest leading-tight tracking-tighter">
              Track. Grow. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-green to-ts-lime">Impact.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Join the first social network exclusively dedicated to environmental action. Plant trees, reduce your carbon footprint, and connect with eco-warriors worldwide.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/register">
                <Button variant="primary" className="text-lg px-8 py-4">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="secondary" className="text-lg px-8 py-4 bg-white/50 backdrop-blur-md">
                  Explore Network
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Nature Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-96 w-full flex items-center justify-center z-10"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-gradient-to-tr from-ts-green to-teal-400 rounded-full mix-blend-multiply opacity-80 blur-2xl"
            />
            <div className="relative glass-dark w-72 h-72 rounded-full border-4 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden group">
               {/* Dummy 3D element: A layered nature scene */}
               <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-green-100 opacity-50"></div>
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="relative z-10 w-40 h-40 bg-gradient-to-b from-ts-lime to-ts-forest rounded-full flex items-center justify-center shadow-inner"
               >
                 <Globe className="w-24 h-24 text-white/80" strokeWidth={1} />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ts-forest mb-4">How it Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">Everything you need to make a tangible difference in the world, while having fun doing it.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card hoverEffect className="h-full bg-white/40">
                <div className="mb-4 inline-block p-3 rounded-2xl bg-white shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-ts-forest mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
