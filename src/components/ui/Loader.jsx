import React from 'react';

export const Loader = ({ fullScreen = false }) => {
  const containerStyle = fullScreen 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerStyle}>
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-ts-green rounded-full opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-ts-green rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-ts-forest text-xs font-bold">
          🌱
        </div>
      </div>
    </div>
  );
};

export const Skeleton = ({ className = '', type = 'text', ...props }) => {
  const baseStyle = "animate-pulse bg-gray-200 rounded-md";
  const types = {
    text: "h-4 w-3/4",
    title: "h-8 w-1/2",
    circular: "rounded-full h-12 w-12",
    rectangular: "h-32 w-full rounded-xl"
  };

  return (
    <div className={`${baseStyle} ${types[type]} ${className}`} {...props}></div>
  );
};
