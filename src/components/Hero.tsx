import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Shield,
  Clock,
  Wrench,
  HeartPulse,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Activity } from
'lucide-react';
import heroSleepCareImage from '../assets/hero-sleep-care.jpeg';
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const bandY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const trustBadges = [
  {
    icon: <Clock size={16} />,
    text: '24/7 Support'
  },
  {
    icon: <Shield size={16} />,
    text: 'Medical Grade'
  },
  {
    icon: <Wrench size={16} />,
    text: 'Home Installation'
  },
  {
    icon: <HeartPulse size={16} />,
    text: 'Expert Assistance'
  }];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden mesh-hero dark:mesh-dark">
      
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_42%),linear-gradient(180deg,transparent,rgba(255,255,255,0.5))] dark:bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_42%),linear-gradient(180deg,transparent,rgba(15,23,42,0.35))]" />
      <motion.div
        style={{ y: bandY }}
        className="parallax-band absolute inset-x-0 top-10 h-72 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/75 border border-primary/15 text-primary text-sm font-medium mb-6 shadow-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Kerala's #1 Respiratory Care Provider
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Reliable Oxygen Concentrators for{' '}
              <span className="text-primary">Better Breathing</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Premium oxygen concentrator sales, service, installation, and
              respiratory care solutions for homes, clinics, and patients across
              Kerala.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-primary hover:bg-teal-800 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-float hover:shadow-glow flex items-center gap-2">
                Buy Concentrator <ArrowRight size={18} />
              </button>
              <button className="bg-white/90 hover:bg-white text-slate-900 border border-white px-8 py-3.5 rounded-full font-medium transition-all shadow-soft flex items-center gap-2 backdrop-blur">
                <PhoneCall size={18} className="text-primary" /> Book Service
              </button>
              <button className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 px-8 py-3.5 rounded-full font-medium transition-all shadow-soft flex items-center gap-2">
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, idx) =>
              <div
                key={idx}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white/80 px-3 py-1.5 rounded-lg shadow-soft border border-white/80 backdrop-blur">
                
                  <span className="text-primary">{badge.icon}</span>
                  {badge.text}
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Image/Showcase */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            style={{ y: imageY }}
            className="relative lg:h-[600px] flex items-center justify-center">
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-8 border-white/90">
              <img
                src={heroSleepCareImage}
                alt="Patient sleeping comfortably during respiratory care"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating UI Cards */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-10 -left-6 md:-left-12 liquid-glass p-4 rounded-2xl flex items-center gap-4">
              
              <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/50 flex items-center justify-center text-primary dark:text-teal-300">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Oxygen Purity
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  93% ± 3%
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute bottom-20 -right-6 md:-right-12 liquid-glass p-4 rounded-2xl flex items-center gap-4">
              
              <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/50 flex items-center justify-center text-accent dark:text-amber-300">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Device Status
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  Optimal
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}
