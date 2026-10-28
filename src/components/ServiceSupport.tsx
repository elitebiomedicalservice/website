import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  PhoneCall,
  Settings,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Truck,
    title: 'Home Delivery & Setup',
    desc: 'Fast delivery and professional installation at your doorstep.',
  },
  {
    icon: Wrench,
    title: 'Repairs & Maintenance',
    desc: 'Expert technicians for quick servicing of all major brands.',
  },
  {
    icon: PhoneCall,
    title: '24/7 Technical Support',
    desc: 'Round-the-clock assistance for any device emergencies.',
  },
  {
    icon: Users,
    title: 'Patient Guidance',
    desc: 'Comprehensive training on device usage and safety.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Support',
    desc: 'Hassle-free warranty claims and replacement parts.',
  },
  {
    icon: Settings,
    title: 'Spare Parts',
    desc: 'Genuine filters, masks, and accessories available.',
  },
];

export function ServiceSupport() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="service-expertise" aria-labelledby="service-expertise-title">
      <div className="service-expertise-glow" aria-hidden="true" />
      <div className="service-expertise-inner">
        <motion.aside
          className="service-expertise-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="service-expertise-eyebrow">Our expertise</div>
          <div className="service-expertise-count">06 services</div>
          <h2 id="service-expertise-title">Comprehensive service &amp; support</h2>
          <p>
            We do not just sell equipment. Our dedicated team helps keep it
            working when you need it most, with service coverage across Kerala.
          </p>
          <div className="service-expertise-stat">
            <strong>1000<span>+</span></strong>
            <span>devices serviced annually</span>
          </div>
          <Link to="/contact" className="service-expertise-request">
            Request service <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.aside>

        <div className="service-expertise-list" role="group" aria-label="Available services">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={service.title}
                type="button"
                className={`service-expertise-row${isActive ? ' is-active' : ''}`}
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.045 }}
              >
                <span className="service-expertise-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="service-expertise-name">{service.title}</span>
                <ArrowUpRight className="service-expertise-arrow" size={23} aria-hidden="true" />
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="service-expertise-feature"
          key={activeService.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32 }}
          aria-live="polite"
        >
          <div className="service-expertise-art">
            <div className="service-expertise-art-grid" aria-hidden="true" />
            <span className="service-expertise-feature-icon"><ActiveIcon size={34} strokeWidth={1.6} /></span>
            <span className="service-expertise-feature-number">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="service-expertise-art-caption">Care, every step of the way</span>
          </div>
          <h3>{activeService.title}</h3>
          <p>{activeService.desc}</p>
          <Link to="/contact" className="service-expertise-detail-link">
            Ask about this service <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
