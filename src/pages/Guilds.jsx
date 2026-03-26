import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Target } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const initialGuilds = [
  { id: 1, name: 'Eco Warriors LA', members: 1240, target: 'Plant 10k Trees by 2027', joined: false, image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400&h=200' },
  { id: 2, name: 'Ocean Cleanup Squad', members: 8900, target: 'Remove 50t Plastic', joined: true, image: 'https://images.unsplash.com/photo-1621451537084-3866b1d4ed9e?auto=format&fit=crop&q=80&w=400&h=200' },
  { id: 3, name: 'Global Reforestation', members: 45000, target: '1M Trees Globally', joined: false, image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=400&h=200' },
  { id: 4, name: 'Urban Gardeners', members: 340, target: 'Green Rooftops NYC', joined: false, image: 'https://images.unsplash.com/photo-1416879598555-523e1ca2446a?auto=format&fit=crop&q=80&w=400&h=200' },
  { id: 5, name: 'Zero Waste Tech', members: 2100, target: 'E-Waste Recycling', joined: true, image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400&h=200' },
  { id: 6, name: 'Solar Pioneers', members: 1800, target: 'Adopt Clean Energy', joined: false, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400&h=200' },
];

const Guilds = () => {
  const [guilds, setGuilds] = useState(initialGuilds);

  const toggleJoin = (id) => {
    setGuilds(guilds.map(g => g.id === id ? { ...g, joined: !g.joined } : g));
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-ts-forest">Guilds</h1>
          <p className="text-gray-600 mt-2">Discover communities sharing your environmental goals.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary">Create Guild</Button>
          <div className="relative">
            <input type="text" placeholder="Search guilds..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50" />
            <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guilds.map((guild, idx) => (
          <motion.div
            key={guild.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card hoverEffect className="bg-white/60 overflow-hidden p-0 border-0 flex flex-col h-full group">
              <div className="h-32 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                  src={guild.image} 
                  alt={guild.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-ts-forest mb-2">{guild.name}</h3>
                <div className="space-y-3 mb-6 flex-1">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4 text-ts-green" /> 
                    <span className="font-semibold">{guild.members.toLocaleString()}</span> Members
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Target className="w-4 h-4 text-ts-lime" /> 
                    {guild.target}
                  </p>
                </div>
                <Button 
                  variant={guild.joined ? 'secondary' : 'primary'} 
                  className="w-full"
                  onClick={() => toggleJoin(guild.id)}
                >
                  {guild.joined ? 'Leave Guild' : 'Join Guild'}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Guilds;
