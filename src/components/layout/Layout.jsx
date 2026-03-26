import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-ts-light relative overflow-hidden">
      {/* Background blobs for aesthetic */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-ts-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-ts-lime/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <Navbar />
      <main className="pt-20 relative z-10 w-full min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-ts-light flex relative overflow-hidden">
      {/* Background blobs for aesthetic */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-ts-green/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      
      <Navbar />
      <Sidebar />
      <main className="flex-1 md:ml-64 pt-20 p-6 z-10 w-full min-h-screen">
        <div className="max-w-6xl mx-auto w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
