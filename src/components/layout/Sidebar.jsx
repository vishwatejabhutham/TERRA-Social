import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TreePine, Gift, Map as MapIcon, UserCircle, Trophy, Bot, ArrowRightLeft, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUser } from '../../context/UserContext';

const Sidebar = () => {
  const { user } = useUser();
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Plant a Tree', icon: <TreePine size={20} />, path: '/plant' },
    { name: 'Impact Trade', icon: <ArrowRightLeft size={20} />, path: '/impact' },
    { name: 'Schemes', icon: <Globe size={20} />, path: '/schemes' },
    { name: 'Rewards', icon: <Gift size={20} />, path: '/rewards' },
    { name: 'Live Map', icon: <MapIcon size={20} />, path: '/map' },
    { name: 'Leaderboard', icon: <Trophy size={20} />, path: '/leaderboard' },
    { name: 'AI Assistant', icon: <Bot size={20} />, path: '/ai-chat' },
    { name: 'Profile', icon: <UserCircle size={20} />, path: '/profile' },
  ];

  return (
    <motion.aside 
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 fixed left-0 top-20 bottom-0 glass-dark bg-white/40 border-r border-white/30 hidden md:flex flex-col z-40"
    >
      <div className="p-6 flex-1 mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 font-bold translate-x-1'
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 font-medium'
                  }`
                }
              >
                {item.icon}
                <span className="font-medium text-sm">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 border-t border-white/20">
        <div className="flex items-center gap-3 px-4 py-2 bg-ts-light rounded-xl border border-ts-green/20 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-ts-green flex items-center justify-center text-white font-bold text-xs uppercase cursor-pointer hover:opacity-80 transition-opacity">
            {user.firstName?.charAt(0) || ''}{user.lastName?.charAt(0) || ''}
          </div>
          <div>
            <p className="text-xs font-bold text-ts-forest">{user.firstName} {user.lastName}</p>
            <p className="text-[10px] text-gray-500">{user.level}</p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
