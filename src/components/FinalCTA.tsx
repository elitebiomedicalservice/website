import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
const contactPhone = '+91 9496522393';
export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const bandY = useTransform(scrollYProgress, [0, 1], [-60, 80]);
  const panelY = useTransform(scrollYProgress, [0, 1], [28, -20]);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#0f766e,#115e59_48%,#0f172a)]" />
      <motion.div
        style={{ y: bandY }}
        className="parallax-band absolute inset-x-0 -top-10 h-80 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: panelY }}
          className="liquid-glass rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
          <motion.div
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
            }}>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get Professional Respiratory Care Today
            </h2>
            <p className="text-teal-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Whether you need an oxygen concentrator urgently or want to book a
              home sleep study, our experts are ready to help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/contact?service=Oxygen%20Concentrator" className="bg-white text-primary hover:bg-teal-50 px-8 py-4 rounded-full font-bold transition-all shadow-float flex items-center justify-center gap-2 text-lg">
                <Calendar size={20} />
                Book Consultation
              </Link>
              <a href={`https://wa.me/918078422393?text=${encodeURIComponent('Hello Elite Biomedical Services, I would like to enquire about your respiratory care services.')}`} target="_blank" rel="noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-float flex items-center justify-center gap-2 text-lg">
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>

            {/* Direct contact card */}
            <div className="inline-flex items-center gap-4 bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-left">
              <div className="bg-red-500/20 text-red-400 p-3 rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-teal-100 font-medium">
                  Emergency Support / Direct Call
                </div>
                <a
                  href={`tel:${contactPhone.replace(/\s/g, '')}`}
                  className="text-xl font-bold text-white hover:text-teal-100 transition-colors">
                  {contactPhone}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}
