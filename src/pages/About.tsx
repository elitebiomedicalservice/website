import React from 'react';
import { PageHero } from '../components/PageHero';
import { MeetFounders } from '../components/MeetFounders';
import { FinalCTA } from '../components/FinalCTA';
import { motion } from 'framer-motion';
import { Target, Heart } from 'lucide-react';
function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            }}>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Elite Biomedical Services was founded with a singular mission: to
              bring reliable, high-quality respiratory care and sleep therapy
              equipment to the people of Kerala.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Recognizing a gap in professional after-sales support and patient
              education, we established a service-first approach. We don't just
              supply medical devices; we ensure our patients understand their
              therapy and have 24/7 support when they need it most.
            </p>
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
            className="bg-slate-100 rounded-3xl h-80 flex items-center justify-center overflow-hidden">
            
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Medical Team"
              className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
            
          </motion.div>
        </div>
      </div>
    </section>);

}
function MissionVision() {
  return (
    <section className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="liquid-glass-card p-10 rounded-3xl">
            <Target
              className="text-primary dark:text-blue-400 mb-6"
              size={40} />
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              To provide accessible, premium-grade respiratory and sleep therapy
              solutions backed by unparalleled technical support and patient
              care across Kerala.
            </p>
          </div>
          <div className="liquid-glass-card p-10 rounded-3xl">
            <Heart
              className="text-rose-500 dark:text-rose-400 mb-6"
              size={40} />
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              To be the most trusted healthcare partner in Kerala for
              respiratory wellness, empowering patients to breathe easier and
              live healthier lives.
            </p>
          </div>
        </div>
      </div>
    </section>);

}
function StatsStrip() {
  const stats = [
  {
    value: '5+',
    label: 'Years Serving Kerala'
  },
  {
    value: '1000+',
    label: 'Devices Installed'
  },
  {
    value: '2500+',
    label: 'Patients Helped'
  },
  {
    value: '14',
    label: 'Districts Covered'
  }];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) =>
          <div key={i}>
              <div className="text-4xl font-bold mb-2">{s.value}</div>
              <div className="text-blue-200 text-sm font-medium">{s.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
export function About() {
  return (
    <div>
      <PageHero
        title="About Elite Biomedical Services"
        subtitle="Dedicated to bringing quality respiratory and sleep healthcare to Kerala." />
      
      <OurStory />
      <MissionVision />
      <StatsStrip />
      <MeetFounders />
      <FinalCTA />
    </div>);

}
