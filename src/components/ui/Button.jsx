import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  isLoading = false,
  disabled = false,
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-ts-green text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/30",
    secondary: "bg-ts-light text-ts-forest border-2 border-ts-green hover:bg-emerald-50",
    ghost: "bg-transparent text-ts-forest hover:bg-black/5"
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02, y: -2 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
