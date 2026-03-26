import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from '../ThemeToggle';
import { useUser } from '../../context/UserContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();

  // Simple heuristic for authenticated vs public: if not at home or login, assume auth
  const isAuthenticated = !['/', '/login', '/register'].includes(location.pathname);

  const navLinks = [
    { name: 'Impact Trade', path: '/impact' },
    { name: 'Schemes', path: '/schemes' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'AI Chat', path: '/ai-chat' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass border-b-0 border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
              <Leaf className="w-8 h-8 text-ts-green" />
            </motion.div>
            <span className="font-bold text-2xl tracking-tight text-ts-forest">
              Terra<span className="text-ts-green">Social</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-ts-green ${
                    location.pathname === link.path ? 'text-ts-green' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l pl-6 border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-ts-green transition-colors">
                    Log in
                  </Link>
                  <Link to="/register">
                    <Button variant="primary" className="py-2 px-4 shadow-md">
                      Join Now
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-3 px-3 py-1.5 bg-ts-light dark:bg-gray-800 rounded-full border border-ts-green/20 shadow-sm cursor-pointer hover:border-ts-green/50 transition-colors">
                  <span className="text-sm font-bold text-ts-forest dark:text-white hidden sm:block">
                    {user.firstName}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-ts-green flex items-center justify-center text-white font-bold text-xs uppercase shadow-inner">
                    {user.firstName?.charAt(0) || ''}{user.lastName?.charAt(0) || ''}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-ts-green focus:outline-none dark:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-white/20"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-800 hover:text-ts-green"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-200" />
              {!isAuthenticated ? (
                <div className="flex flex-col gap-3">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start py-2">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button variant="primary" className="w-full py-2">
                      Join Now
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-3 p-3 bg-ts-light rounded-xl border border-ts-green/20">
                  <div className="w-10 h-10 rounded-full bg-ts-green flex items-center justify-center text-white font-bold text-sm uppercase">
                    {user.firstName?.charAt(0) || ''}{user.lastName?.charAt(0) || ''}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ts-forest">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-gray-500">{user.level}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
