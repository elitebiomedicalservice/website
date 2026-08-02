import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types/product';
import { ShieldCheck, ArrowRight, Bluetooth, Plane, Volume2, Activity } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(`Hello Elite Biomedical Services, I would like to enquire about ${product.name}. Please provide pricing and availability.`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      {/* Visual Header */}
      <div className="relative h-60 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden p-6 flex items-center justify-center">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 max-w-[85%]">
          {product.badge && (
            <span className="bg-primary/95 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
              {product.bluetoothEnabled && <Bluetooth size={12} />}
              {product.flightApproved && <Plane size={12} />}
              {product.badge}
            </span>
          )}
          <span className="bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1">
            <ShieldCheck size={12} className="text-emerald-500" />
            {product.warranty}
          </span>
        </div>

        {/* Brand Chip */}
        <div className="absolute top-4 right-4 z-10 bg-slate-900/80 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase">
          {product.brand}
        </div>

        {/* Product Image */}
        <Link to={`/products/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-48 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
          />
        </Link>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Series */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {product.category}
            </span>
            {product.series && (
              <>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500 font-medium">{product.series}</span>
              </>
            )}
          </div>

          {/* Product Name */}
          <Link to={`/products/${product.id}`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight mb-2">
              {product.name}
            </h3>
          </Link>

          {/* Short Desc */}
          <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mb-4">
            {product.shortDesc}
          </p>

          {/* Quick Specs Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.purity && (
              <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                <Activity size={12} className="text-primary" /> {product.purity}
              </span>
            )}
            {product.flowRate && (
              <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                {product.flowRate}
              </span>
            )}
            {product.noiseLevel && (
              <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                <Volume2 size={12} className="text-emerald-600" /> {product.noiseLevel}
              </span>
            )}
            {product.weight && (
              <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                {product.weight}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            to={`/products/${product.id}`}
            className="w-full text-center py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
          >
            View Details <ArrowRight size={14} />
          </Link>
          
          <a
            href={`https://wa.me/918078422393?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 px-3 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm flex items-center justify-center gap-1"
          >
            Get Price
          </a>
        </div>
      </div>
    </motion.div>
  );
}
