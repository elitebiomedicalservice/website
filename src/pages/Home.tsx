import React from 'react';
import { Hero } from '../components/Hero';
import { WhatIsConcentrator } from '../components/WhatIsConcentrator';
import { ProductShowcase } from '../components/ProductShowcase';
import { ServiceSupport } from '../components/ServiceSupport';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
export function Home() {
  return (
    <div>
      <Hero />
      <WhatIsConcentrator />
      <ProductShowcase />
      <ServiceSupport />
      <Testimonials />
      <FinalCTA />
    </div>);

}
