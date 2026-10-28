import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Phone, Mail, MapPin, AlertCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
const contactPhone = '+91 9496522393';
const contactEmail = 'elitebiomedicalservice@gmail.com';
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ghi3z9r';
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_pal9k8m';
const contactAddress = [
  'Door no.679/A Basement floor sreesastha building',
  'Near kelluettan smaraka mandir, edodi, vadakara,',
  'Kozhikode, Kerala- 673101'
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
    <div className="liquid-glass-card p-8 rounded-3xl">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Send us a Message
      </h3>
      {sendState === 'sent' && <div role="status" className="bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 p-4 rounded-xl mb-6 border border-teal-100 dark:border-teal-800">Thanks for your enquiry. Our team will contact you shortly.</div>}
      {sendState === 'unconfigured' && <div role="status" className="bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-200 p-4 rounded-xl mb-6 border border-amber-200 dark:border-amber-800">Online email sending is not configured yet. You can still reach us at <a className="font-semibold underline" href={`mailto:${contactEmail}`}>{contactEmail}</a> or call {contactPhone}.</div>}
      {sendState === 'error' && <div role="alert" className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-4 rounded-xl mb-6 border border-red-200 dark:border-red-800">We couldn’t send your enquiry. {sendError && <span className="block mt-1 text-sm">{sendError}</span>} Please try again or email <a className="font-semibold underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</div>}
      <form onSubmit={handleSubmit} aria-describedby="contact-form-note" className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              required
              type="text"
              autoComplete="name"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
              placeholder="John Doe" />

          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              required
              type="tel"
              autoComplete="tel"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
              placeholder={contactPhone} />

          </div>
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
            placeholder="john@example.com" />

        </div>
        <div>
          <label htmlFor="contact-service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Service Interest
          </label>
          <select id="contact-service" name="service" defaultValue={defaultService} required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white">
            {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
            placeholder="How can we help you?">
          </textarea>
        </div>
        <button
          type="submit"
          disabled={sendState === 'sending'}
          className="w-full bg-primary hover:bg-teal-700 disabled:cursor-wait disabled:opacity-70 text-white py-4 rounded-xl font-bold transition-all shadow-md">

          {sendState === 'sending' ? 'Sending…' : 'Send Email'}
        </button>
        <p className="text-xs text-slate-500 dark:text-slate-400" id="contact-form-note">
          Your details are sent securely to our team through EmailJS and are not stored on this website.
        </p>
      </form>
    </div>);

}
function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="liquid-glass-card p-6 rounded-2xl flex items-start gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-xl">
          <Phone size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">Phone</h4>
          <a
            href={`tel:${contactPhone.replace(/\s/g, '')}`}
            className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
            {contactPhone}
          </a>
        </div>
      </div>
      <div className="liquid-glass-card p-6 rounded-2xl flex items-start gap-4">
        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-xl">
          <MessageCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">WhatsApp Enquiries</h4>
          <a
            href={`https://wa.me/918078422393?text=${encodeURIComponent('Hello Elite Biomedical Services, I have an enquiry.')}`}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
          >
            +91 8078422393
          </a>
        </div>
      </div>
      <div className="liquid-glass-card p-6 rounded-2xl flex items-start gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-xl">
          <Mail size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
          <a
            href={`mailto:${contactEmail}`}
            className="text-slate-600 dark:text-slate-300 break-all hover:text-primary transition-colors">
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="liquid-glass-card p-6 rounded-2xl flex items-start gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-xl">
          <MapPin size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            Office Location
          </h4>
          <p className="text-slate-600 dark:text-slate-300">
            {contactAddress.map((line) =>
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            )}
          </p>
        </div>
      </div>
      <div className="bg-slate-900 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-800 dark:border-slate-700 flex items-start gap-4 text-white">
        <div className="p-3 bg-red-500/20 text-red-400 rounded-xl">
          <AlertCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-white">Emergency Support</h4>
          <p className="text-slate-400 text-sm mb-2">
            24/7 technical assistance for critical device issues.
          </p>
          <a
            href={`tel:${contactPhone.replace(/\s/g, '')}`}
            className="text-xl font-bold text-red-400 hover:text-red-300 transition-colors">
            {contactPhone}
          </a>
        </div>
      </div>
    </div>);

}
export function Contact() {
  return (
    <div>
      <PageHero
        title="Get in Touch"
        subtitle="We're here to help with your respiratory care needs across Kerala." />

      <section className="py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}>

              <ContactForm />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}>

              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card bg-white">
            <iframe
              title="ELITE BIOMEDICAL SERVICES location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.375422136033!2d75.58780967696397!3d11.59656108860657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba685098e6277d7%3A0x24f279504245f60f!2sELITE%20BIOMEDICAL%20SERVICES!5e0!3m2!1sen!2sin!4v1785694217319!5m2!1sen!2sin"
              className="h-[28rem] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </div>
      </section>
    </div>);

}
