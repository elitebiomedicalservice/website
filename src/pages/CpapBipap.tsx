import React from 'react';
import { PageHero } from '../components/PageHero';
import { FinalCTA } from '../components/FinalCTA';
import { motion } from 'framer-motion';
import { Check, Wind, Shield, Settings } from 'lucide-react';
function CpapVsBipap() {
  return (
    <section className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            CPAP vs BiPAP
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Understanding the difference between continuous and bilevel positive
            airway pressure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="liquid-glass-card p-8 rounded-3xl">
            
            <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">
              CPAP Therapy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Continuous Positive Airway Pressure delivers a steady, continuous
              stream of pressurized air to keep airways open.
            </p>
            <ul className="space-y-3">
              {[
              'Single continuous pressure setting',
              'Standard treatment for Obstructive Sleep Apnea',
              'Auto-adjusting models available (Auto-CPAP)',
              'Generally more affordable'].
              map((item, i) =>
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                
                  <Check
                  size={18}
                  className="text-primary dark:text-blue-400 shrink-0" />
                {' '}
                  {item}
                </li>
              )}
            </ul>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="liquid-glass-card p-8 rounded-3xl">
            
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              BiPAP Therapy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Bilevel Positive Airway Pressure delivers two distinct pressures:
              higher when inhaling, lower when exhaling.
            </p>
            <ul className="space-y-3">
              {[
              'Dual pressure settings (IPAP/EPAP)',
              'Easier to exhale against pressure',
              'Used for complex sleep apnea or COPD',
              'Advanced respiratory support'].
              map((item, i) =>
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                
                  <Check
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                {' '}
                  {item}
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}
function MachinesGrid() {
  const machines = [
  {
    name: 'Auto CPAP',
    desc: 'Automatically adjusts pressure based on your breathing needs throughout the night.',
    badge: 'Most Popular'
  },
  {
    name: 'Fixed CPAP',
    desc: 'Delivers a constant, prescribed pressure. Reliable and straightforward therapy.',
    badge: 'Standard'
  },
  {
    name: 'BiPAP ST',
    desc: 'Includes a backup respiratory rate for patients who need breathing assistance.',
    badge: 'Advanced'
  },
  {
    name: 'BiPAP AVAPS',
    desc: 'Automatically adapts pressure to maintain a consistent tidal volume.',
    badge: 'Clinical Grade'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Our Machines
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((m, i) =>
          <motion.div
            key={i}
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
              delay: i * 0.1
            }}
            className="liquid-glass-card p-6 rounded-2xl relative">
            
              <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 text-xs font-bold px-2 py-1 rounded">
                {m.badge}
              </div>
              <Wind
              className="text-slate-400 dark:text-slate-500 mb-4"
              size={32} />
            
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                {m.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {m.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
function Accessories() {
  return (
    <section className="py-24 bg-section border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Accessories & Masks
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
          {
            name: 'Nasal Masks',
            desc: 'Covers only the nose. Good for mouth breathers with a chinstrap.'
          },
          {
            name: 'Full Face Masks',
            desc: 'Covers nose and mouth. Ideal for mouth breathers or high pressures.'
          },
          {
            name: 'Nasal Pillows',
            desc: 'Minimal contact, rests at the nostrils. Great for active sleepers.'
          }].
          map((m, i) =>
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <Shield className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">{m.name}</h3>
              <p className="text-sm text-slate-600">{m.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
function TherapySupport() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Therapy Support
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[
          {
            step: '1',
            title: 'Device Setup',
            desc: 'Professional installation and mask fitting.'
          },
          {
            step: '2',
            title: 'Titration',
            desc: 'Pressure adjustments based on comfort and data.'
          },
          {
            step: '3',
            title: 'Follow-up',
            desc: 'Ongoing monitoring to ensure therapy success.'
          }].
          map((s, i) =>
          <div key={i} className="flex flex-col items-center max-w-xs">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
export function CpapBipap() {
  return (
    <div>
      <PageHero
        title="CPAP & BiPAP Therapy"
        subtitle="Advanced respiratory support devices for sleep apnea and complex breathing disorders." />
      
      <CpapVsBipap />
      <MachinesGrid />
      <Accessories />
      <TherapySupport />
      <FinalCTA />
    </div>);

}