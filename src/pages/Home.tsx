import { Hero } from '../components/Hero';
import { HomeCategoryRail } from '../components/HomeCategoryRail';
import { WhatIsConcentrator } from '../components/WhatIsConcentrator';
import { ProductShowcase } from '../components/ProductShowcase';
import { PartnerBrands } from '../components/PartnerBrands';
import { ServiceSupport } from '../components/ServiceSupport';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
export function Home() {
  return (
    <div>
      <Hero />
      <HomeCategoryRail />
      <WhatIsConcentrator />
      <ProductShowcase />
      <PartnerBrands />
      <ServiceSupport />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>);

}
