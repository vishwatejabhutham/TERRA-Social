import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { TreePine, Wind, Users, Award, ChevronRight } from 'lucide-react';
import Card from '../components/ui/Card';

const Dashboard = () => {
  const stats = [
    { label: 'Trees Planted', value: 142, icon: <TreePine className="text-ts-green" />, color: 'bg-green-100' },
    { label: 'CO₂ Saved (kg)', value: 4520, icon: <Wind className="text-teal-500" />, color: 'bg-teal-100' },
    { label: 'Guilds Active', value: 3, icon: <Users className="text-blue-500" />, color: 'bg-blue-100' },
    { label: 'Global Rank', value: 89, prefix: '#', icon: <Award className="text-amber-500" />, color: 'bg-amber-100' },
  ];

  // Dummy logic for a GitHub-style heatmap (7 days x 12 weeks roughly)
  const heatmapCells = Array.from({ length: 84 }, () => Math.floor(Math.random() * 5));
  const getCellColor = (level) => {
    switch(level) {
      case 1: return 'bg-emerald-200';
      case 2: return 'bg-emerald-400';
      case 3: return 'bg-emerald-600';
      case 4: return 'bg-emerald-800';
      default: return 'bg-gray-100';
    }
  };

  const activities = [
    { id: 1, desc: 'Planted an Oak tree in Brazil', time: '2 hours ago', points: '+50' },
    { id: 2, desc: 'Completed "Weekend Cyclist" challenge', time: 'Yesterday', points: '+120' },
    { id: 3, desc: 'Joined the "Ocean Cleanup" Guild', time: '3 days ago', points: '+10' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner / Profile Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-ts-green to-teal-600 text-white shadow-xl shadow-ts-green/20 border-0">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-full border-4 border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl font-bold shadow-inner">
              JD
            </div>
            <div>
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-emerald-100 text-lg flex items-center gap-2 mt-1">
                Level 12 Eco Warrior <Award size={18} />
              </p>
            </div>
          </div>
          <div className="text-center md:text-right bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <p className="text-emerald-100 text-sm uppercase tracking-wider font-semibold mb-1">Total Green Score</p>
            <div className="text-5xl font-extrabold tracking-tight">
              <CountUp end={12450} duration={2.5} separator="," />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (idx + 1) }}>
            <Card hoverEffect className="bg-white/60">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-ts-forest">
                    {stat.prefix}<CountUp end={stat.value} duration={2} />
                  </h3>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Heatmap Section */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="lg:col-span-2">
          <Card className="bg-white/60 h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-ts-forest">Contribution History</h2>
              <select className="bg-transparent border-gray-200 text-sm font-medium text-gray-500 rounded-md focus:ring-ts-green focus:border-ts-green">
                <option>2026</option>
                <option>2025</option>
              </select>
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              <div className="flex flex-col gap-2 text-xs text-gray-400 mt-6 pr-2">
                <span>Mon</span><span>Wed</span><span>Fri</span>
              </div>
              <div className="grid grid-rows-7 grid-flow-col gap-1.5 flex-1 min-w-[500px]">
                {heatmapCells.map((level, i) => (
                  <div key={i} className={`w-3.5 h-3.5 rounded-sm ${getCellColor(level)} transition-all hover:ring-2 hover:ring-offset-1 hover:ring-ts-green cursor-pointer`} title={`Level ${level} contribution`} />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 text-xs text-gray-500">
              <span>Less</span>
              <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-200"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-400"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-600"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-800"></div>
              <span>More</span>
            </div>
          </Card>
        </motion.div>

        {/* Recent Activities */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          <Card className="bg-white/60 h-full">
            <h2 className="text-xl font-bold text-ts-forest mb-6">Recent Feed</h2>
            <div className="space-y-6">
              {activities.map((act) => (
                <div key={act.id} className="flex gap-4 items-start group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-ts-green ring-4 ring-emerald-100 group-hover:scale-150 transition-transform"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{act.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">{act.time}</p>
                  </div>
                  <span className="text-sm font-bold text-ts-green">{act.points}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-2 text-sm font-medium text-ts-green hover:bg-emerald-50 rounded-lg flex justify-center items-center transition-colors">
              View All <ChevronRight size={16} />
            </button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
