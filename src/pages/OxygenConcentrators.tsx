import React from 'react';
import { PageHero } from '../components/PageHero';
import { WhatIsConcentrator } from '../components/WhatIsConcentrator';
import { HowItWorks } from '../components/HowItWorks';
import { ConcentratorTypes } from '../components/ConcentratorTypes';
import { ServiceSupport } from '../components/ServiceSupport';
import { FinalCTA } from '../components/FinalCTA';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CatalogModelsGrid() {
  // Get all concentrators (stationary and portable)
  const concentrators = products.filter(
    p => p.category === 'Oxygen Concentrators' || p.category === 'Portable Oxygen'
  );

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
              2026 Catalog Models
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
              Oxygen Concentrators Lineup
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Browse our medical-grade continuous flow & pulse dose oxygen concentrators
            </p>
          </div>

          <Link
            to="/products"
            className="text-primary font-bold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            View Full Catalog <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concentrators.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InquiryStrip() {
  return (
    <section className="py-12 bg-blue-50 dark:bg-blue-950/40 border-y border-blue-100 dark:border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
        >
          <div className="text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Need Help Choosing the Right Flow Rate?
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Our respiratory experts can help you select the exact model based on your doctor's prescription.
            </p>
          </div>
          <a
            href="tel:+918078422393"
            className="shrink-0 bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-float flex items-center gap-2"
          >
            <PhoneCall size={20} /> Request Pricing & Advice
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function OxygenConcentrators() {
  return (
    <div>
      <PageHero
        title="Oxygen Concentrators"
        subtitle="Premium oxygen concentrator sales, service, and respiratory care solutions across Kerala."
      />
      
      <WhatIsConcentrator />
      <HowItWorks />
      <ConcentratorTypes />
      <CatalogModelsGrid />
      <InquiryStrip />
      <ServiceSupport />
      <FinalCTA />
    </div>
  );
}