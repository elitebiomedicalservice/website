import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wind, Info } from 'lucide-react';
export function WhatIsConcentrator() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], [42, -36]);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-primary text-sm font-medium mb-6">
              <Info size={16} />
              Education
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What is an Oxygen Concentrator?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              An oxygen concentrator is a medical device that takes in normal
                air and delivers oxygen-rich air. Unlike oxygen cylinders, it
                does not store oxygen; it produces oxygen while powered and
                operating. Use it only as prescribed by a healthcare provider.
            </p>

            <div className="bg-section p-6 rounded-2xl border border-teal-100 shadow-soft">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Wind className="text-primary" size={20} />
                Continuous Supply
              </h3>
              <p className="text-slate-600 text-sm">
                As long as the device is plugged into a power source, it will
                never run out of oxygen, providing peace of mind for continuous
                therapy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            style={{ y: illustrationY }}
            className="relative">
            
            {/* Abstract Medical Illustration Container */}
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-[38%_62%_58%_42%/52%_44%_56%_48%] bg-teal-50 opacity-80"></div>
              <div className="absolute inset-4 rounded-[62%_38%_42%_58%/46%_55%_45%_54%] bg-sky-50 opacity-90"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl shadow-card border border-teal-100 relative z-10 w-3/4 aspect-square flex flex-col items-center justify-center text-center">
                  <Wind size={48} className="text-primary mb-4" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    Room Air
                  </div>
                  <div className="text-sm text-slate-500 mb-4">21% Oxygen</div>

                  <div className="h-12 w-px bg-gradient-to-b from-slate-200 to-primary my-2 relative">
                    <motion.div
                      animate={{
                        y: [0, 48]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                    
                  </div>

                  <div className="text-2xl font-bold text-primary mt-2">
                    Medical O₂
                  </div>
                  <div className="text-sm text-slate-500">90-95% Purity</div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{
                  y: [-8, 8, -8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-2 right-2 sm:right-4 z-20 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-teal-100 dark:border-slate-700 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  No Refills Needed
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
