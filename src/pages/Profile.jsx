import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, User, Shield, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const timeline = [
    { date: 'Oct 24, 2026', title: 'Reached Level 12', desc: 'Promoted to Eco Warrior rank' },
    { date: 'Sep 15, 2026', title: 'Joined Ocean Cleanup', desc: 'Participated in the Santa Monica beach sweep' },
    { date: 'Aug 01, 2026', title: 'Planted First Tree', desc: 'Oak tree planted near Austin City Park' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <h1 className="text-3xl font-extrabold text-ts-forest">Profile Settings</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1">
          <Card className="bg-white/60 text-center flex flex-col items-center">
            <div className="relative group mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-ts-green bg-emerald-50 overflow-hidden flex items-center justify-center text-4xl font-bold text-ts-green relative">
                JD
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-ts-forest">John Doe</h2>
            <p className="text-sm text-gray-500 mb-4">Member since Aug 2026</p>
            <div className="w-full flex items-center justify-between text-sm px-4 py-2 bg-ts-light rounded-lg border border-ts-green/20 mb-2">
              <span className="text-gray-600">Score</span>
              <span className="font-bold text-ts-green">12,450</span>
            </div>
            <div className="w-full flex items-center justify-between text-sm px-4 py-2 bg-ts-light rounded-lg border border-ts-green/20">
              <span className="text-gray-600">Rank</span>
              <span className="font-bold text-ts-forest">#89 Global</span>
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 space-y-8">
          <Card className="bg-white/60">
            <h2 className="text-xl font-bold text-ts-forest mb-6 flex items-center gap-2">
              <User className="text-ts-green" /> Personal Information
            </h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <input type="text" defaultValue="John" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email <Mail className="inline w-4 h-4 text-gray-400 ml-1"/></label>
                <input type="email" defaultValue="john@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Bio</label>
                <textarea rows={3} defaultValue="Software engineer turning the world greener one commit at a time." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50"></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <Button type="submit" isLoading={loading}>Save Changes</Button>
              </div>
            </form>
          </Card>

          <Card className="bg-white/60">
            <h2 className="text-xl font-bold text-ts-forest mb-6 flex items-center gap-2">
              <Shield className="text-ts-green" /> Impact Timeline
            </h2>
            <div className="relative border-l-2 border-ts-green/30 ml-3 space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute w-6 h-6 bg-ts-green rounded-full -left-[13px] top-0 flex items-center justify-center border-4 border-white shadow-sm">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl shadow-sm border border-gray-100 group hover:border-ts-green/50 transition-colors">
                    <p className="text-xs font-bold text-ts-green mb-1">{item.date}</p>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
