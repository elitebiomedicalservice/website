import { motion } from 'framer-motion';
import {
  Wrench,
  Truck,
  PhoneCall,
  ShieldCheck,
  Users,
  Settings } from
'lucide-react';
import { Link } from 'react-router-dom';
export function ServiceSupport() {
  const services = [
  {
    icon: <Truck size={24} />,
    title: 'Home Delivery & Setup',
    desc: 'Fast delivery and professional installation at your doorstep.'
  },
  {
    icon: <Wrench size={24} />,
    title: 'Repairs & Maintenance',
    desc: 'Expert technicians for quick servicing of all major brands.'
  },
  {
    icon: <PhoneCall size={24} />,
    title: '24/7 Technical Support',
    desc: 'Round-the-clock assistance for any device emergencies.'
  },
  {
    icon: <Users size={24} />,
    title: 'Patient Guidance',
    desc: 'Comprehensive training on device usage and safety.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Warranty Support',
    desc: 'Hassle-free warranty claims and replacement parts.'
  },
  {
    icon: <Settings size={24} />,
    title: 'Spare Parts',
    desc: 'Genuine filters, masks, and accessories available.'
  }];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a,#102421_54%,#082f49)]"></div>
      <div className="parallax-band absolute inset-x-0 top-0 h-72 opacity-35"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
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
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Service & Support
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                We don't just sell equipment; we ensure it runs perfectly when
                you need it most. Our dedicated service team covers all of
                Kerala.
              </p>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-glass-dark">
                <div className="text-4xl font-bold text-secondary mb-2">
                  1000+
                </div>
                <div className="text-sm text-slate-300">
                  Devices Serviced Annually
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link to="/contact" className="block w-full bg-primary hover:bg-teal-600 text-center text-white py-3 rounded-xl font-medium transition-colors shadow-float">
                    Request Service
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, idx) =>
              <motion.div
                key={idx}
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
                  delay: idx * 0.1
                }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors shadow-glass-dark">
                
                  <div className="w-12 h-12 rounded-xl bg-teal-400/15 text-secondary flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
