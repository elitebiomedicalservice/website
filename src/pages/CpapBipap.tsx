import { PageHero } from '../components/PageHero';
import { FinalCTA } from '../components/FinalCTA';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CpapVsBipap() {
  return (
    <section className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            CPAP vs BiPAP Therapy
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Understanding continuous vs bilevel positive airway pressure for sleep apnea and COPD care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">
              CPAP Therapy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Continuous Positive Airway Pressure delivers a steady, continuous stream of pressurized air to keep airways open during sleep.
            </p>
            <ul className="space-y-3">
              {[
                'Single continuous pressure setting',
                'Standard treatment for Obstructive Sleep Apnea (OSA)',
                'Auto-adjusting models available (Auto-CPAP)',
                'Generally lightweight and compact'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check size={18} className="text-primary dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              BiPAP Therapy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Bilevel Positive Airway Pressure delivers two distinct pressures: higher IPAP for inhalation, lower EPAP for comfortable exhalation.
            </p>
            <ul className="space-y-3">
              {[
                'Dual pressure settings (IPAP/EPAP)',
                'Easier to exhale against high pressure',
                'Used for complex sleep apnea, COPD, hypoventilation',
                'Advanced features like Target Tidal Volume (VT) & S/T'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CatalogBipapGrid() {
  const bipapDevices = products.filter(p => p.category === 'Sleep & Respiratory Therapy');

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
              2026 Catalog Devices
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
              BiPAP & Sleep Therapy Lineup
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Advanced non-invasive ventilation machines from Evox, BMC, and Oxymed
            </p>
          </div>

          <Link
            to="/products"
            className="text-primary font-bold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            View Full Catalog <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bipapDevices.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TherapySupport() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          Elite Biomedical Therapy Support
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[
            {
              step: '1',
              title: 'Prescription Review & Setup',
              desc: 'Professional pressure programming and personalized mask fitting by certified engineers.'
            },
            {
              step: '2',
              title: 'Titration & Comfort Adjustment',
              desc: 'Fine-tuning ramp settings, heated humidification, and EPAP support based on patient comfort.'
            },
            {
              step: '3',
              title: 'Technical Support',
              desc: 'Contact the team about device use, reports, repairs, and maintenance.'
            }
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center max-w-xs bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                {s.step}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CpapBipap() {
  return (
    <div>
      <PageHero
        title="CPAP & BiPAP Therapy"
        subtitle="Advanced respiratory support devices for sleep apnea and complex breathing disorders."
      />
      
      <CpapVsBipap />
      <CatalogBipapGrid />
      <TherapySupport />
      <FinalCTA />
    </div>
  );
}
