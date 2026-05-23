import React from 'react';
import { PageHero } from '../components/PageHero';
import { WhatIsConcentrator } from '../components/WhatIsConcentrator';
import { HowItWorks } from '../components/HowItWorks';
import { ConcentratorTypes } from '../components/ConcentratorTypes';
import { ServiceSupport } from '../components/ServiceSupport';
import { FinalCTA } from '../components/FinalCTA';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
function InquiryStrip() {
  return (
    <section className="py-12 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          
          <div className="text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-slate-600">
              Our respiratory experts can help you select the right model based
              on your prescription.
            </p>
          </div>
          <button className="shrink-0 bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-float flex items-center gap-2">
            <PhoneCall size={20} /> Request Pricing & Advice
          </button>
        </motion.div>
      </div>
    </section>);

}
export function OxygenConcentrators() {
  return (
    <div>
      <PageHero
        title="Oxygen Concentrators"
        subtitle="Premium oxygen concentrator sales, service, and respiratory care solutions across Kerala." />
      
      <WhatIsConcentrator />
      <HowItWorks />
      <ConcentratorTypes />
      <InquiryStrip />
      <ServiceSupport />
      <FinalCTA />
    </div>);

}