import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' } : {}}
      className={`glass rounded-2xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
