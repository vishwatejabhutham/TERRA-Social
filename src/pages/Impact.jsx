import React from 'react';
import { motion } from 'framer-motion';
import { Store, ShoppingBag, ArrowRightLeft, Coins, Leaf, CheckCircle2, QrCode } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Impact = () => {
  const vendors = [
    { name: 'NatureFresh Grocers', offer: '15% Off Organic Produce', cost: 150, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&w=400&q=80', color: 'bg-emerald-100' },
    { name: 'EcoTransit Cycles', offer: '₹500 Discount on E-Bikes', cost: 500, image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&w=400&q=80', color: 'bg-teal-100' },
    { name: 'GreenBean Cafe', offer: 'Free Reusable Cup Coffee', cost: 50, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&w=400&q=80', color: 'bg-amber-100' },
    { name: 'SolarTech Solutions', offer: 'Installation Fee Waived', cost: 2000, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&w=400&q=80', color: 'bg-sky-100' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-16">
      
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-8 mb-12"
      >
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-full mb-6">
          <ArrowRightLeft className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-ts-forest mb-6 tracking-tight">
          Your Impact, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500">Your Trade</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The <span className="font-bold text-ts-green">TerraSocial Green Score</span> is a revolutionary digital currency backed by your environmental actions. Planting trees and verified eco-friendly habits generate scores which you can immediately trade for real-world value with our partnered vendors.
        </p>
      </motion.div>

      {/* Impact Mechanics Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="h-full bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-colors py-8 shadow-lg">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">1. Take Action</h3>
            <p className="text-gray-500 mt-2 font-medium">Plant a tree, log your maintenance, or capture an eco-friendly activity.</p>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="h-full bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-colors py-8 shadow-lg relative">
            <div className="hidden md:block absolute top-[50%] -left-6 z-10 -translate-y-[50%]">
              <ArrowRightLeft className="w-8 h-8 text-emerald-200" />
            </div>
            <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">2. Get Verified</h3>
            <p className="text-gray-500 mt-2 font-medium">Our AI verifies the visual or geospatial data to ensure authenticity.</p>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="h-full bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-colors py-8 shadow-lg relative">
            <div className="hidden md:block absolute top-[50%] -left-6 z-10 -translate-y-[50%]">
              <ArrowRightLeft className="w-8 h-8 text-emerald-200" />
            </div>
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 relative shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              <Coins className="w-10 h-10 text-amber-500" />
              <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">+50</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">3. Earn & Trade</h3>
            <p className="text-gray-500 mt-2 font-medium">Earn exactly 50 Green Score per tree. 1 Green Score = ₹1 Local Trade Value.</p>
          </Card>
        </motion.div>
      </div>

      {/* Vendor Marketplace */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16"
      >
        <div className="flex items-center justify-between mb-8 px-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ts-forest flex items-center gap-3">
              <Store className="text-emerald-500 w-8 h-8" />
              Local Partner Marketplace
            </h2>
            <p className="text-gray-600 mt-1 font-medium text-lg">Spend your score directly at these certified green businesses.</p>
          </div>
          <Button variant="outline" className="hidden sm:flex border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold">
            View All Partners
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor, index) => (
            <Card key={vendor.name} className="p-0 overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-32 relative overflow-hidden">
                <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent`}></div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-ts-green text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">Verified Partner</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="font-extrabold text-lg text-gray-900 leading-tight mb-2">{vendor.name}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingBag className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-semibold text-emerald-600">{vendor.offer}</span>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-bold block mb-1">Cost required:</span>
                    <span className="flex items-center font-black text-amber-500 text-lg">
                      <Coins className="w-5 h-5 mr-1" /> {vendor.cost} <span className="text-xs ml-1 text-gray-400 font-medium tracking-wide block leading-[20px]"> GS</span>
                    </span>
                  </div>
                  <button className="bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <QrCode className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* CTA Bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(16,185,129,0.2)]"
      >
        <div className="mb-6 md:mb-0 max-w-2xl">
          <h2 className="text-3xl font-extrabold mb-3">Are you a local sustainable business?</h2>
          <p className="text-emerald-50 text-lg">Join our vendor network to instantly connect with thousands of eco-conscious customers in your area.</p>
        </div>
        <Button className="bg-white text-emerald-700 font-bold hover:bg-emerald-50 px-8 py-4 text-lg rounded-xl shadow-xl w-full md:w-auto">
          Become a Partner
        </Button>
      </motion.div>

    </div>
  );
};

export default Impact;
