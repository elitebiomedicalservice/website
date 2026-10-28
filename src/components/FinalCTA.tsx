import { motion } from 'framer-motion';
import { ArrowUpRight, HeartPulse, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactPhone = '+91 9496522393';

export function FinalCTA() {
  return (
    <section className="closing-cta" aria-labelledby="closing-cta-title">
      <motion.div
        className="closing-cta-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div className="closing-cta-copy">
          <span className="closing-cta-eyebrow"><HeartPulse size={14} /> Respiratory care, made easier</span>
          <h2 id="closing-cta-title">Breathe easier.<br /><span>We’re here to help.</span></h2>
          <p>From choosing the right equipment to home sleep studies and ongoing support, talk with our team about your next step.</p>
          <div className="closing-cta-actions">
            <Link to="/contact?service=Oxygen%20Concentrator" className="closing-cta-primary">Book a consultation <ArrowUpRight size={17} /></Link>
            <a href={`https://wa.me/918078422393?text=${encodeURIComponent('Hello Elite Biomedical Services, I would like to enquire about your respiratory care services.')}`} target="_blank" rel="noreferrer" className="closing-cta-secondary"><MessageCircle size={17} /> WhatsApp us</a>
          </div>
          <a className="closing-cta-phone" href={`tel:${contactPhone.replace(/\s/g, '')}`}><Phone size={14} /> Need help now? <strong>{contactPhone}</strong></a>
        </div>
        <div className="closing-cta-visual" aria-hidden="true">
          <div className="closing-cta-orbit closing-cta-orbit-one" />
          <div className="closing-cta-orbit closing-cta-orbit-two" />
          <div className="closing-cta-node closing-cta-node-top"><HeartPulse size={19} /></div>
          <div className="closing-cta-center"><span className="closing-cta-pulse-line" /><HeartPulse size={52} strokeWidth={1.25} /></div>
          <div className="closing-cta-node closing-cta-node-bottom"><span /> Care that stays with you</div>
          <span className="closing-cta-signal closing-cta-signal-one" />
          <span className="closing-cta-signal closing-cta-signal-two" />
        </div>
      </motion.div>
    </section>
  );
}
