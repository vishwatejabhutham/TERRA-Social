import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TreePine, Info } from 'lucide-react';
import Card from '../components/ui/Card';
import axiosInstance from '../api/axiosInstance';
import { API } from '../api/endpoints';

const defaultMarkers = [
  { id: 1, top: '40%', left: '20%', label: 'Amazon Reforestation' },
  { id: 2, top: '35%', left: '50%', label: 'European Green Belt' },
  { id: 3, top: '60%', left: '80%', label: 'Indonesian Mangroves' },
  { id: 4, top: '25%', left: '25%', label: 'Canadian Boreal' },
  { id: 5, top: '65%', left: '60%', label: 'Madagascar Corridors' },
];

const MapPage = () => {
  const [markers, setMarkers] = useState(defaultMarkers);
  const [totalTrees, setTotalTrees] = useState(4520391);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axiosInstance.get(API.getTrees);
        if (response.data?.data) {
          setMarkers(response.data.data);
        }
        if (response.data?.totalTrees) {
          setTotalTrees(response.data.totalTrees);
        }
      } catch (error) {
        console.warn("Failed to fetch trees data, falling back to mock map markers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrees();
  }, []);

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-ts-forest">Global Impact Map</h1>
          <p className="text-gray-600">Explore tree planting activities happening around the world.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-ts-forest font-medium bg-white/50 px-4 py-2 rounded-xl backdrop-blur-md shadow-sm border border-white/40">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ts-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-ts-green"></span>
          </span>
          Live Updates Active
        </div>
      </div>

      <Card className="flex-1 overflow-hidden relative p-0 border-4 border-emerald-100/50 shadow-2xl bg-gradient-to-br from-teal-50 to-emerald-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="World Map Topology" 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          />
        </div>

        {/* Floating Controls Placeholder */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          <button className="bg-white p-3 rounded-xl shadow-lg text-ts-forest hover:bg-gray-50 font-bold">+</button>
          <button className="bg-white p-3 rounded-xl shadow-lg text-ts-forest hover:bg-gray-50 font-bold">-</button>
        </div>

        {/* Tree Markers */}
        {markers.map((marker, idx) => (
          <motion.div
            key={marker.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + (idx * 0.2), type: 'spring' }}
            className="absolute z-10 group"
            style={{ top: marker.top, left: marker.left }}
          >
            {/* Pulsing effect */}
            <div className="absolute -inset-2 bg-ts-green/20 rounded-full animate-ping"></div>
            {/* Marker Pin */}
            <div className="relative w-8 h-8 cursor-pointer rounded-full bg-ts-green shadow-xl flex items-center justify-center transform transition-transform hover:scale-125 border-2 border-white">
              <TreePine className="w-4 h-4 text-white" />
            </div>
            {/* Tooltip */}
            <div className="absolute top-full lg:left-1/2 lg:-translate-x-1/2 mt-2 w-48 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl opacity-0 scale-95 origin-top transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 pointer-events-none border border-gray-100">
              <p className="text-sm font-bold text-ts-forest mb-1">{marker.label}</p>
              <p className="text-xs text-ts-green font-medium">+500 Trees added recently</p>
            </div>
          </motion.div>
        ))}

        {/* Bottom Left Info Panel */}
        <div className="absolute bottom-6 left-6 z-20 w-80">
          <Card className="bg-gradient-to-br from-white/95 to-emerald-50/95 backdrop-blur-xl border border-emerald-200/60 p-5 shadow-2xl shadow-emerald-900/10">
            <h3 className="font-bold text-ts-forest flex items-center gap-2 mb-2">
              <Info size={18} className="text-ts-green" /> Total Reforestation
            </h3>
            <p className="text-xl font-extrabold text-ts-green tracking-tight">{totalTrees.toLocaleString()} Trees</p>
            <p className="text-xs text-gray-500 mt-1">Pending Leaflet/Google Maps API integration for dynamic clusters mapping.</p>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default MapPage;
