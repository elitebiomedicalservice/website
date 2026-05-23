import React from 'react';
import { motion } from 'framer-motion';
import { Home, Plane, Check, Battery, Zap } from 'lucide-react';
export function ConcentratorTypes() {
  return (
    <section id="oxygen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Types of Oxygen Concentrators
          </h2>
          <p className="text-lg text-slate-600">
            Choose the right solution for your specific medical needs and
            lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Stationary */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-xl transition-all group">
            
            <div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              <Home
                size={64}
                className="text-slate-300 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                Most Popular
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                  <Zap size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Home / Stationary
                </h3>
              </div>
              <p className="text-slate-600 mb-6 h-12">
                Designed for long-term home usage and continuous oxygen therapy.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                'Larger and more powerful (5L - 10L)',
                'Requires continuous electricity',
                'Reliable medical-grade performance',
                'Ideal for sleep and home rest'].
                map((feature, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-700">
                  
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                )}
              </ul>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-medium transition-colors">
                View Home Models
              </button>
            </div>
          </motion.div>

          {/* Card 2: Portable */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-xl transition-all group relative">
            
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              <Plane
                size={64}
                className="text-slate-300 group-hover:scale-110 transition-transform duration-500" />
              
            </div>
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                  <Battery size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Portable (POC)
                </h3>
              </div>
              <p className="text-slate-600 mb-6 h-12">
                Lightweight, battery-powered solutions for active users and
                travel.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                'Lightweight and travel-friendly',
                'Battery-powered operation',
                'Compact, easy mobility design',
                'Pulse dose delivery systems'].
                map((feature, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-700">
                  
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                )}
              </ul>

              <button className="w-full bg-primary hover:bg-blue-700 text-white py-3.5 rounded-xl font-medium transition-colors shadow-float">
                View Portable Models
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}