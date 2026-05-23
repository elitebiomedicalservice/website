import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
export function ProductShowcase() {
  const products = [
  {
    name: '5L Medical Oxygen Concentrator',
    category: 'Oxygen Concentrators',
    badge: 'Best Seller',
    image:
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Continuous flow 5LPM with 93% purity. Ideal for home care.'
  },
  {
    name: 'Auto CPAP Machine',
    category: 'Sleep Therapy',
    badge: 'Medical Grade',
    image:
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Advanced algorithm for comfortable sleep apnea therapy.'
  },
  {
    name: 'BiPAP ST Machine',
    category: 'Respiratory Care',
    badge: 'Advanced',
    image:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Non-invasive ventilation for complex respiratory conditions.'
  },
  {
    name: 'Portable Oxygen Concentrator',
    category: 'Oxygen Concentrators',
    badge: 'Travel Ready',
    image:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Lightweight pulse-dose system with long battery life.'
  }];

  return (
    <section className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Premium Medical Equipment
            </h2>
            <p className="text-lg text-slate-600">
              Explore our range of high-quality respiratory and sleep therapy
              devices, backed by expert service.
            </p>
          </div>
          <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View All Products <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) =>
          <motion.div
            key={idx}
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
              delay: idx * 0.1
            }}
            className="liquid-glass-card rounded-2xl overflow-hidden group">
            
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply dark:mix-blend-normal" />
              
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1">
                  {product.badge === 'Best Seller' &&
                <Star
                  size={12}
                  className="text-yellow-500 fill-yellow-500" />

                }
                  {product.badge}
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs font-medium text-primary dark:text-blue-400 mb-2 uppercase tracking-wider">
                  {product.category}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {product.desc}
                </p>

                <button className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium text-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}