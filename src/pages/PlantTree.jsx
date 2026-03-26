import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Image as ImageIcon, CheckCircle, Leaf } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const PlantTree = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-ts-forest mb-4">Plant a Tree</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Log a newly planted tree to update your environmental impact stats and make it visible on the global map.
        </p>
      </div>

      <AnimatePresence>
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center p-8"
          >
            <Card className="text-center p-12 bg-white/80 max-w-md w-full border-2 border-ts-green">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-ts-green" />
              </motion.div>
              <h2 className="text-2xl font-bold text-ts-forest mb-2">Tree Logged!</h2>
              <p className="text-gray-500 mb-8">+50 Green Score Added</p>
              <Button onClick={() => setSuccess(false)} variant="primary" className="w-full">
                Plant Another
              </Button>
            </Card>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="bg-white/60">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 mt-4"><Leaf className="inline w-4 h-4 mr-2 text-ts-green"/>Tree Type / Species</label>
                    <select required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50">
                      <option value="">Select a species...</option>
                      <option value="oak">Oak Tree</option>
                      <option value="pine">Pine Tree</option>
                      <option value="maple">Maple Tree</option>
                      <option value="mango">Mango Tree</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2"><MapPin className="inline w-4 h-4 mr-2 text-ts-green"/>Latitude</label>
                      <input type="number" step="any" placeholder="12.9716" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2"><MapPin className="inline w-4 h-4 mr-2 text-ts-green"/>Longitude</label>
                      <input type="number" step="any" placeholder="77.5946" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2"><ImageIcon className="inline w-4 h-4 mr-2 text-ts-green"/>Upload Image (Proof)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl bg-white/30 hover:bg-white/60 transition-colors">
                      <div className="space-y-1 text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600 justify-center">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-ts-green hover:text-emerald-500 px-2 py-1 shadow-sm">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                    <textarea rows={3} placeholder="Tell us about the planting experience..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-ts-green focus:border-ts-green bg-white/50"></textarea>
                  </div>

                  <Button type="submit" className="w-full py-4 text-lg" isLoading={loading}>
                    Log Tree
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="bg-white/60 h-full min-h-[400px] flex flex-col">
                <h3 className="text-lg font-bold text-ts-forest mb-4">Location Map</h3>
                <div className="flex-1 bg-gray-200 rounded-xl relative overflow-hidden group">
                  {/* Decorative map placeholder */}
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Map" className="w-full h-full object-cover opacity-50 filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ts-forest/80 to-transparent flex flex-col items-center justify-end p-8 text-center text-white">
                    <MapPin className="w-12 h-12 text-ts-lime mb-4 animate-bounce" />
                    <p className="font-medium text-lg">Interactive Map Integration Pending</p>
                    <p className="text-sm text-white/70 mt-2">(Ready for Google Maps / Leaflet SDK)</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlantTree;
