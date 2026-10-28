import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';

const contactPhone = '+91 9496522393';
const contactEmail = 'elitebiomedicalservice@gmail.com';
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ghi3z9r';
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_pal9k8m';
const contactAddress = [
  'Door no.679/A Basement floor sreesastha building',
  'Near kelluettan smaraka mandir, edodi, vadakara,',
  'Kozhikode, Kerala- 673101',
];
const serviceOptions = ['Oxygen Concentrator', 'Home Sleep Study', 'CPAP / BiPAP Machine', 'Device Servicing', 'Other'] as const;

function ContactForm() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service');
  const defaultService = serviceOptions.find((service) => service === requestedService) || serviceOptions[0];
  const [sendState, setSendState] = useState<'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'>('idle');
  const [sendError, setSendError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      setSendState('unconfigured');
      return;
    }

    setSendState('sending');
    setSendError('');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: publicKey,
          template_params: {
            from_name: String(values.get('name') || ''),
            name: String(values.get('name') || ''),
            phone: String(values.get('phone') || ''),
            reply_to: String(values.get('email') || ''),
            email: String(values.get('email') || ''),
            service: String(values.get('service') || ''),
            message: String(values.get('message') || ''),
            subject: `Website enquiry: ${String(values.get('service') || 'General question')}`,
          },
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Email enquiry could not be sent.');
      }
      setSendState('sent');
      form.reset();
    } catch (error) {
      setSendError(error instanceof Error ? error.message : 'Email enquiry could not be sent.');
      setSendState('error');
    }
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-heading">
        <span>Start a conversation</span>
        <h2>Send us a message</h2>
        <p>Tell us what kind of respiratory care or equipment support you need.</p>
      </div>

      {sendState === 'sent' && <div role="status" className="contact-form-alert is-success">Thanks for your enquiry. Our team will contact you shortly.</div>}
      {sendState === 'unconfigured' && <div role="status" className="contact-form-alert is-warning">Online email sending is not configured yet. You can still reach us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> or call {contactPhone}.</div>}
      {sendState === 'error' && <div role="alert" className="contact-form-alert is-error">We couldn’t send your enquiry. {sendError && <span className="contact-form-error-detail">{sendError}</span>} Please try again or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</div>}

      <form onSubmit={handleSubmit} aria-describedby="contact-form-note" className="contact-form-fields">
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" required type="text" autoComplete="name" placeholder="Your name" />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-phone">Phone</label>
            <input id="contact-phone" name="phone" required type="tel" autoComplete="tel" placeholder={contactPhone} />
          </div>
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email <span>(optional)</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-service">Service interest</label>
          <select id="contact-service" name="service" defaultValue={defaultService} required>
            {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </div>
        <div className="contact-field">
          <label htmlFor="contact-message">Message <span>(optional)</span></label>
          <textarea id="contact-message" name="message" rows={4} placeholder="How can we help you?" />
        </div>
        <button type="submit" disabled={sendState === 'sending'} className="contact-form-submit">
          {sendState === 'sending' ? 'Sending enquiry…' : 'Send enquiry'}
          {sendState !== 'sending' && <ArrowRight size={17} aria-hidden="true" />}
        </button>
        <p id="contact-form-note" className="contact-form-note">Your enquiry is sent securely through EmailJS and isn’t stored on this website.</p>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info-grid">
      <a className="contact-info-card" href={`tel:${contactPhone.replace(/\s/g, '')}`}>
        <span className="contact-info-icon"><Phone size={19} /></span>
        <span><strong>Call our team</strong><small>{contactPhone}</small></span>
        <ArrowRight size={16} className="contact-info-arrow" aria-hidden="true" />
      </a>
      <a className="contact-info-card" href="https://wa.me/918078422393?text=Hello%20Elite%20Biomedical%20Services%2C%20I%20have%20an%20enquiry." target="_blank" rel="noreferrer">
        <span className="contact-info-icon is-whatsapp"><MessageCircle size={19} /></span>
        <span><strong>WhatsApp enquiries</strong><small>+91 8078422393</small></span>
        <ArrowRight size={16} className="contact-info-arrow" aria-hidden="true" />
      </a>
      <div className="contact-info-card is-address">
        <span className="contact-info-icon"><MapPin size={19} /></span>
        <span><strong>Visit our office</strong><small>{contactAddress.join(' ')}</small></span>
      </div>
      <div className="contact-info-card is-emergency">
        <span className="contact-info-icon"><AlertCircle size={19} /></span>
        <span><strong>Emergency support</strong><small>24/7 technical assistance for critical device issues.</small></span>
        <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="contact-emergency-number">Call</a>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-page-title">
        <div className="contact-hero-glow" aria-hidden="true" />
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>Elite Biomedical Services</p>
          <h1 id="contact-page-title">Get in touch</h1>
          <span>We’re here to help with your respiratory care needs across Kerala.</span>
          <div className="contact-breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span>Contact</span></div>
        </motion.div>
      </section>

      <section className="contact-main" aria-label="Contact Elite Biomedical Services">
        <div className="contact-main-inner">
          <div className="contact-intro-row">
            <div className="contact-intro-copy">
              <span className="contact-eyebrow">Talk to our care team</span>
              <h2>Let’s find the right support for you.</h2>
              <p>From equipment guidance to home sleep studies and servicing, our team is ready to help you take the next step.</p>
            </div>
            <ContactInfo />
          </div>

          <a className="contact-email-feature" href={`mailto:${contactEmail}`}>
            <span><Mail size={17} /> Email our team</span>
            <strong>{contactEmail}</strong>
            <ArrowRight size={22} aria-hidden="true" />
          </a>

          <div className="contact-location-heading">
            <div><span className="contact-eyebrow">Find us in Vadakara</span><h2>We’re close by.</h2></div>
            <a href="https://maps.google.com/?q=Elite+Biomedical+Services+Vadakara" target="_blank" rel="noreferrer">Open directions <ArrowRight size={15} /></a>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="Elite Biomedical Services location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.375422136033!2d75.58780967696397!3d11.59656108860657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba685098e6277d7%3A0x24f279504245f60f!2sELITE%20BIOMEDICAL%20SERVICES!5e0!3m2!1sen!2sin!4v1785694217319!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="contact-form-wrap"><ContactForm /></div>
        </div>
      </section>
    </div>
  );
}
