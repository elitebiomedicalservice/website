import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Clock,
  HeartPulse,
  MessageCircle,
  PhoneCall,
  Shield,
  Wrench,
} from 'lucide-react';
import heroSleepCareImage from '../assets/hero-sleep-care.jpeg';

const trustBadges = [
  { icon: <Clock size={16} />, text: '24/7 Support' },
  { icon: <Shield size={16} />, text: 'Medical Grade' },
  { icon: <Wrench size={16} />, text: 'Home Installation' },
  { icon: <HeartPulse size={16} />, text: 'Expert Assistance' },
];

const businessStats = [
  { value: '5+', label: 'Years serving Kerala' },
  { value: '1,000+', label: 'Devices installed' },
  { value: '2,500+', label: 'Patients helped' },
  { value: '14', label: 'Districts covered' },
];

export function Hero() {
  return (
    <section id="home" className="px-3 pb-12 pt-24 sm:px-5 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
      <div className="relative mx-auto flex min-h-[760px] max-w-[1600px] items-center overflow-hidden rounded-[28px] bg-[#e5eeeb] shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:rounded-[36px] lg:min-h-[680px]">
        <img
          src={heroSleepCareImage}
          alt="A woman sleeping in a calm bedroom"
          fetchPriority="high"
          className="absolute inset-x-0 bottom-0 h-[48%] w-full object-cover object-center sm:h-[54%] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[66%] lg:object-cover lg:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#e5eeeb_0%,rgba(229,238,235,0.98)_42%,rgba(229,238,235,0.56)_60%,rgba(11,32,43,0.08)_100%)] lg:bg-[linear-gradient(90deg,#e5eeeb_0%,#e5eeeb_32%,rgba(229,238,235,0.92)_45%,rgba(229,238,235,0.24)_66%,rgba(9,26,36,0.24)_100%)]"
        />
        <div className="relative z-10 grid w-full items-center gap-8 px-6 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:px-14 lg:py-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-[700px]"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Kerala&apos;s #1 Respiratory Care Provider
            </div>

            <h1 className="mb-5 max-w-[680px] text-[clamp(2.6rem,6vw,5.35rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950">
              Better breathing,
              <br />
              <span className="text-primary">backed by care.</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Premium oxygen concentrator sales, service, installation, and respiratory care solutions for homes, clinics, and patients across Kerala.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Explore equipment <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-900/15 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:border-primary/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <PhoneCall size={16} className="text-primary" aria-hidden="true" />
                Book a consultation
              </Link>
              <a
                href={`https://wa.me/918078422393?text=${encodeURIComponent('Hello Elite Biomedical Services, I would like to enquire about your products and services.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-800/10 bg-emerald-50/90 px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
              >
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp
              </a>
            </div>

            <div className="flex max-w-2xl flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md sm:text-sm"
                >
                  <span className="text-primary">{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="hidden justify-self-end lg:block">
            <div className="rounded-3xl border border-white/25 bg-slate-950/35 p-5 text-white shadow-2xl backdrop-blur-xl">
              {businessStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-3 ${index < businessStats.length - 1 ? 'border-b border-white/20' : ''}`}
                >
                  <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
                  <div className="mt-1 text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
              <div className="mt-2 flex items-center gap-2 text-[11px] font-medium text-teal-100">
                <Activity size={14} aria-hidden="true" /> Respiratory care in Kerala
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
