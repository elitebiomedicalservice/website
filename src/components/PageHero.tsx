import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
interface PageHeroProps {
  title: string;
  subtitle: string;
}
export function PageHero({ title, subtitle }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const bandY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <section
      ref={sectionRef}
      className="pt-32 pb-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f766e,#0f4f4a_56%,#082f49)]" />
      <motion.div
        style={{ y: bandY }}
        className="parallax-band absolute inset-x-0 top-6 h-64 opacity-80" />
      <motion.div
        style={{ y: contentY }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="text-4xl md:text-5xl font-bold text-white mb-4">
          
          {title}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1
          }}
          className="text-teal-50 text-lg max-w-2xl mx-auto">
          
          {subtitle}
        </motion.p>
      </motion.div>
    </section>);

}
