import { PageHero } from '../components/PageHero';
import { SleepStudy as SleepStudySection } from '../components/SleepStudy';
import { HealthRisks } from '../components/HealthRisks';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { motion } from 'framer-motion';
import { Activity, Heart, Wind, Brain } from 'lucide-react';
function WhatWeMonitor() {
  const metrics = [
  {
    icon: <Activity />,
    title: 'Apnea-Hypopnea Index (AHI)',
    desc: 'Measures pauses in breathing to determine sleep apnea severity.'
  },
  {
    icon: <Heart />,
    title: 'Blood Oxygen (SpO2)',
    desc: 'Tracks oxygen saturation levels throughout the night.'
  },
  {
    icon: <Wind />,
    title: 'Snoring Intensity',
    desc: 'Records snoring volume and frequency to assess airway resistance.'
  },
  {
    icon: <Brain />,
    title: 'Heart Rate Variability',
    desc: 'Monitors cardiac response to breathing events during sleep.'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What We Monitor
          </h2>
          <p className="text-lg text-slate-600">
            Our Level 3 Home Sleep Study captures comprehensive clinical data.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) =>
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
            className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                {m.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{m.title}</h3>
              <p className="text-sm text-slate-600">{m.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
export function SleepStudy() {
  return (
    <div>
      <PageHero
        title="Home Sleep Apnea Testing (HSAT)"
        subtitle="Clinical-grade sleep diagnosis in the comfort of your own bed." />
      
      <SleepStudySection />
      <WhatWeMonitor />
      <HealthRisks />
      <Testimonials />
      <FinalCTA />
    </div>);

}
