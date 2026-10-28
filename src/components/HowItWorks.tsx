import { motion } from 'framer-motion';
import { Settings, Filter, Activity, Wind } from 'lucide-react';
export function HowItWorks() {
  const steps = [
  {
    icon: <Wind size={24} />,
    title: 'Air Intake',
    desc: 'Pulls air from the room (21% Oxygen, 78% Nitrogen).'
  },
  {
    icon: <Filter size={24} />,
    title: 'Filtration',
    desc: 'Filters dust, bacteria, and impurities from the air.'
  },
  {
    icon: <Settings size={24} />,
    title: 'PSA Technology',
    desc: 'Uses zeolite sieve beds to absorb and remove nitrogen.'
  },
  {
    icon: <Activity size={24} />,
    title: 'Oxygen Delivery',
    desc: 'Delivers 90–95% high-purity oxygen to the patient.'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="py-24 bg-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Understanding the Pressure Swing Adsorption (PSA) technology that
            powers our medical-grade oxygen concentrators.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10">
            <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: '100%'
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                delay: 0.5
              }}
              className="h-full bg-primary" />
            
          </div>

          {steps.map((step, idx) =>
          <motion.div key={idx} variants={itemVariants} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center border-4 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100 text-sm font-medium text-slate-600">
            Powered by advanced{' '}
            <span className="text-primary font-bold">
              Pressure Swing Adsorption (PSA)
            </span>{' '}
            technology
          </div>
        </div>
      </div>
    </section>);

}
