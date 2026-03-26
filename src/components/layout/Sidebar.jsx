import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TreePine, Users, Map as MapIcon, UserCircle, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Plant a Tree', icon: <TreePine size={20} />, path: '/plant' },
    { name: 'Guilds', icon: <Users size={20} />, path: '/guilds' },
    { name: 'Live Map', icon: <MapIcon size={20} />, path: '/map' },
    { name: 'Leaderboard', icon: <Trophy size={20} />, path: '/leaderboard' },
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
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-ts-green text-white shadow-md shadow-ts-green/20'
                      : 'text-gray-600 hover:bg-white/50 hover:text-ts-forest'
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
          <div className="w-8 h-8 rounded-full bg-ts-green flex items-center justify-center text-white font-bold text-xs">
            JD
          </div>
          <div>
            <p className="text-xs font-bold text-ts-forest">John Doe</p>
            <p className="text-[10px] text-gray-500">Lv. 12 Eco Warrior</p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
