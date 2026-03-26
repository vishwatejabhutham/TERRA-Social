import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, ShieldCheck, Leaf, TrendingUp, SunMedium } from 'lucide-react';
import Card from '../components/ui/Card';

const schemes = [
  {
    title: 'Green Credit Programme (GCP)',
    badge: 'Ministry of Environment, Forest and Climate Change',
    description: 'An innovative market-based mechanism to incentivize voluntary environmental actions. Your tree plantation data on TerraSocial aligns exactly with GCP guidelines, producing verifiable credits that can be traded nationally.',
    icon: <Globe className="text-emerald-500 w-10 h-10" />,
    color: 'from-emerald-50 to-green-100',
    borderColor: 'border-emerald-200'
  },
  {
    title: 'Mission LiFE (Lifestyle for Environment)',
    badge: 'NITI Aayog & Global Initiative',
    description: 'Mission LiFE promotes environmentally conscious lifestyles. Every green action tracked on TerraSocial—like planting trees, opting for eco-friendly commutes, or conserving water—contributes directly to your LiFE metrics recognized across national frameworks.',
    icon: <Leaf className="text-lime-500 w-10 h-10" />,
    color: 'from-lime-50 to-emerald-50',
    borderColor: 'border-lime-200'
  },
  {
    title: 'National Mission for a Green India (GIM)',
    badge: 'National Action Plan on Climate Change',
    description: 'Aimed at protecting, restoring, and enhancing India\'s diminishing forest cover. TerraSocial acts as a grassroots aggregator, enabling the community to actively crowd-source verifiable data for the GIM’s geospatial afforestation goals.',
    icon: <ShieldCheck className="text-teal-500 w-10 h-10" />,
    color: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200'
  },
  {
    title: 'UN Sustainable Development Goals (SDGs)',
    badge: 'United Nations Framework',
    description: 'TerraSocial natively aligns with Goal 13 (Climate Action) and Goal 15 (Life on Land). Your verified community eco-score creates an immutable layer of proof toward local corporate CSR offsetting and national SDG tracking.',
    icon: <Award className="text-blue-500 w-10 h-10" />,
    color: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200'
  }
];

const Schemes = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 pt-8"
      >
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-full mb-6">
          <SunMedium className="w-12 h-12 text-emerald-600 animate-[spin_10s_linear_infinite]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-ts-forest mb-6 tracking-tight">
          National <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Alignment</span> Schemes
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          TerraSocial isn’t just a social network—it's seamlessly integrated with the broader national and global environmental frameworks. Your impact is verified and standardized, transforming community action into recognized ecological credit.
        </p>
      </motion.div>

      {/* Grid of Schemes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {schemes.map((scheme, index) => (
          <motion.div
            key={scheme.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className={`h-full bg-gradient-to-br ${scheme.color} border-2 ${scheme.borderColor} shadow-xl hover:-translate-y-2 transition-transform duration-300`}>
              <div className="flex flex-col h-full space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-white/60 rounded-2xl backdrop-blur-sm shadow-sm inline-block">
                    {scheme.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200/50">
                    {scheme.badge}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{scheme.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {scheme.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-500 cursor-pointer w-max">
                  <TrendingUp className="w-4 h-4" />
                  <span>Learn how your data aligns &rarr;</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-ts-forest rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933067-ea4f0eb2bb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
        <div className="relative z-10 flex flex-col items-center">
          <ShieldCheck className="w-16 h-16 text-emerald-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Institutional Grade Verification</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg mb-8">
            Our AI-powered image validation and immutable ledger ensure that every tree planted through TerraSocial meets the rigorous auditing standards required by government and corporate bodies.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95">
            Download Verification Whitepaper
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Schemes;
