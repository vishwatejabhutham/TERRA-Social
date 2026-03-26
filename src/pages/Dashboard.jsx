import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { TreePine, Wind, Users, Award, ChevronRight, TrendingUp, ArrowUpRight } from 'lucide-react';
import Card from '../components/ui/Card';
import axiosInstance from '../api/axiosInstance';
import { API } from '../api/endpoints';

const defaultStats = [
  { label: 'Trees Planted', value: 142, icon: <TreePine className="text-ts-green" />, color: 'bg-green-100', trend: '+12% this week' },
  { label: 'CO₂ Saved (kg)', value: 4520, icon: <Wind className="text-teal-500" />, color: 'bg-teal-100', trend: '+5% today' },
  { label: 'Guilds Active', value: 3, icon: <Users className="text-blue-500" />, color: 'bg-blue-100', trend: 'Growing' },
  { label: 'Global Rank', value: 89, prefix: '#', icon: <Award className="text-amber-500" />, color: 'bg-amber-100', trend: '+2 positions' },
];

const defaultHeatmap = Array.from({ length: 84 }, () => Math.floor(Math.random() * 5));

const defaultActivities = [
  { id: 1, desc: 'Planted an Oak tree in Brazil', time: '2 hours ago', points: '+50' },
  { id: 2, desc: 'Completed "Weekend Cyclist" challenge', time: 'Yesterday', points: '+120' },
  { id: 3, desc: 'Joined the "Ocean Cleanup" Guild', time: '3 days ago', points: '+10' },
];

const defaultUser = {
  name: 'John Doe',
  avatar: 'JD',
  level: 'Level 12 Eco Warrior',
  score: 12450
};

const Dashboard = () => {
  const [stats, setStats] = useState(defaultStats);
  const [heatmapCells, setHeatmapCells] = useState(defaultHeatmap);
  const [activities, setActivities] = useState(defaultActivities);
  const [user, setUser] = useState(defaultUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axiosInstance.get(API.getProfile);
        const data = response.data.data;
        if (data) {
          if (data.stats) {
            setStats([
              { label: 'Trees Planted', value: data.stats.treesPlanted, icon: <TreePine className="text-ts-green" />, color: 'bg-green-100' },
              { label: 'CO₂ Saved (kg)', value: data.stats.co2Saved, icon: <Wind className="text-teal-500" />, color: 'bg-teal-100' },
              { label: 'Guilds Active', value: data.stats.guildsActive, icon: <Users className="text-blue-500" />, color: 'bg-blue-100' },
              { label: 'Global Rank', value: data.stats.globalRank, prefix: '#', icon: <Award className="text-amber-500" />, color: 'bg-amber-100' },
            ]);
          }
          if (data.heatmap) setHeatmapCells(data.heatmap);
          if (data.activities) setActivities(data.activities);
          setUser({
            name: `${data.firstName || ''} ${data.lastName || ''}`.trim() || defaultUser.name,
            avatar: data.avatar || defaultUser.avatar,
            level: data.stats?.level || defaultUser.level,
            score: data.stats?.totalScore || defaultUser.score
          });
        }
      } catch (error) {
        console.warn("API call failed, falling back to mock data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getCellColor = (level) => {
    switch(level) {
      case 1: return 'bg-emerald-200';
      case 2: return 'bg-emerald-400';
      case 3: return 'bg-emerald-600';
      case 4: return 'bg-emerald-800';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner / Profile Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="relative overflow-hidden flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white shadow-2xl shadow-emerald-600/30 border-0 p-8">
          {/* Decorative background abstraction */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-10 w-48 h-48 bg-teal-900/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center gap-6 mb-6 md:mb-0 relative z-10">
            <div className="w-24 h-24 rounded-full border-4 border-white/30 bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-bold shadow-xl shadow-black/10 uppercase ring-4 ring-emerald-400/30 overflow-hidden relative group">
               {user.avatar}
               <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors cursor-pointer"></div>
            </div>
            <div>
              <p className="text-emerald-100 text-sm font-semibold tracking-wide uppercase mb-1">Welcome back,</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{user.name}</h1>
              <p className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-sm font-medium backdrop-blur-sm shadow-sm">
                <Award size={16} className="text-yellow-300" /> {user.level} 
              </p>
            </div>
          </div>
          <div className="text-center md:text-right bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg relative z-10 min-w-[200px]">
            <p className="text-emerald-100 text-xs uppercase tracking-widest font-bold mb-1 opacity-90">Total Impact Score</p>
            <div className="text-5xl font-extrabold tracking-tight drop-shadow-md">
              <CountUp end={user.score} duration={2.5} separator="," />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (idx + 1) }}>
            <Card hoverEffect className="bg-white dark:bg-gray-800 border-gray-100 overflow-hidden relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.color} shadow-inner`}>
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  <TrendingUp size={12} /> {stat.trend || '+5%'}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {stat.prefix}<CountUp end={stat.value} duration={2} separator="," />
                </h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">{stat.label}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Heatmap Section */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="lg:col-span-2">
          <Card className="bg-white dark:bg-gray-800 border-gray-100 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            <div className="flex justify-between items-end mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Contribution History</h2>
                <p className="text-sm text-gray-500 mt-1">Your daily environmental impact over time.</p>
              </div>
              <select className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-ts-green focus:outline-none shadow-sm cursor-pointer transition-colors hover:border-emerald-300" defaultValue="2026">
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
          <Card className="bg-white dark:bg-gray-800 border-gray-100 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none flex flex-col">
            <div className="border-b border-gray-100 dark:border-gray-700 pb-4 mb-6">
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center justify-between">
                Recent Feed
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-lg">Live</span>
              </h2>
            </div>
            <div className="space-y-5 flex-1 relative">
              {/* Vertical line connecting events */}
              <div className="absolute top-2 bottom-6 left-[3.5px] w-0.5 bg-gray-100 dark:bg-gray-700/50 -z-10 hidden sm:block"></div>
              
              {activities.map((act) => (
                <div key={act.id} className="flex gap-4 items-start group relative p-3 -mx-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors bg-white dark:bg-gray-800 z-10">
                  <div className="relative mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-ts-green ring-4 ring-emerald-50 dark:ring-gray-700 group-hover:scale-125 transition-transform z-10 relative"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{act.desc}</p>
                    <p className="text-[11px] uppercase tracking-wider font-bold text-gray-400 mt-1">{act.time}</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-lg shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                    {act.points}
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-3 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl flex justify-center items-center transition-all group">
              View All Activity <ArrowUpRight size={16} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

