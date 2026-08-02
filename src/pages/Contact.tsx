import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
const contactPhone = '+91 9496522393';
const contactEmail = 'elitebiomedicalservice@gmail.com';
const contactAddress = [
  'Door no.679/A Basement floor sreesastha building',
  'Near kelluettan smaraka mandir, edodi, vadakara,',
  'Kozhikode, Kerala- 673101'
];
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <div className="liquid-glass-card p-8 rounded-3xl">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Send us a Message
      </h3>
      {submitted ?
      <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-xl mb-6 border border-green-100 dark:border-green-800">
          Thank you! Your message has been sent. We will contact you shortly.
        </div> :
      null}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Name
            </label>
            <input
              required
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
              placeholder="John Doe" />
            
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Phone
            </label>
            <input
              required
              type="tel"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
              placeholder={contactPhone} />
            
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
            placeholder="john@example.com" />
          
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Service Interest
          </label>
          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white">
            <option>Oxygen Concentrator</option>
            <option>Home Sleep Study</option>
            <option>CPAP / BiPAP Machine</option>
            <option>Device Servicing</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
            placeholder="How can we help you?">
          </textarea>
        </div>
          <button
          type="submit"
          className="w-full bg-primary hover:bg-teal-700 text-white py-4 rounded-xl font-bold transition-all shadow-md">
          
          Send Message
        </button>
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
          <h4 className="font-bold text-slate-900 dark:text-white">
            Phone & WhatsApp
          </h4>
          <a
            href={`tel:${contactPhone.replace(/\s/g, '')}`}
            className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
            {contactPhone}
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
