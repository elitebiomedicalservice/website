import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Moon, Activity, Brain, Heart } from 'lucide-react';
export function SleepStudy() {
  return (
    <section id="sleep" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Nighttime aesthetic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="order-2 lg:order-1">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <Activity className="text-indigo-500 mb-4" size={28} />
                  <h4 className="font-bold text-slate-900 mb-2">
                    Apnea Detection
                  </h4>
                  <p className="text-sm text-slate-600">
                    Accurately measures breathing pauses during sleep.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <Heart className="text-rose-500 mb-4" size={28} />
                  <h4 className="font-bold text-slate-900 mb-2">
                    O2 Monitoring
                  </h4>
                  <p className="text-sm text-slate-600">
                    Tracks blood oxygen levels throughout the night.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-900 p-6 rounded-3xl shadow-lg text-white">
                  <Moon className="text-indigo-300 mb-4" size={28} />
                  <h4 className="font-bold mb-2">Home Comfort</h4>
                  <p className="text-sm text-indigo-200">
                    Test conducted in the comfort of your own bed.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <Brain className="text-blue-500 mb-4" size={28} />
                  <h4 className="font-bold text-slate-900 mb-2">
                    Detailed Report
                  </h4>
                  <p className="text-sm text-slate-600">
                    Comprehensive analysis by sleep specialists.
                  </p>
                </div>
              </div>
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
            className="order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
              <Moon size={16} />
              Diagnostic Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Home Sleep Apnea Testing (HSAT)
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Snoring or waking up tired? Our Level 3 Home Sleep Study provides
              clinical-grade diagnosis of Obstructive Sleep Apnea (OSA) without
              spending a night in a hospital lab.
            </p>

            <ul className="space-y-4 mb-8">
              {[
              'FDA-approved diagnostic equipment',
              'Delivered and set up by trained technicians',
              'Next-day detailed sleep report',
              'Seamless transition to CPAP/BiPAP therapy if needed'].
              map((item, i) =>
              <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              )}
            </ul>

            <Link to="/contact?service=Home%20Sleep%20Study" className="inline-flex bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md">
              Book a Sleep Study
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

}
