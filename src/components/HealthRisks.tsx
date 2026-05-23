import React, { cloneElement } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Heart,
  Activity,
  Brain,
  Battery,
  Frown,
  Stethoscope } from
'lucide-react';
export function HealthRisks() {
  const risks = [
  {
    icon: <Activity />,
    title: 'Low Oxygen Levels',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    icon: <Heart />,
    title: 'Heart Disease',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    icon: <Stethoscope />,
    title: 'Hypertension',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    icon: <Activity />,
    title: 'Diabetes Risk',
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    icon: <Battery />,
    title: 'Chronic Fatigue',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
  {
    icon: <Frown />,
    title: 'Depression',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    icon: <Brain />,
    title: 'Stroke Risk',
    color: 'text-red-500',
    bg: 'bg-red-50'
  }];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
            <AlertTriangle size={16} />
            Medical Awareness
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Risks of Untreated Breathing Disorders
          </h2>
          <p className="text-lg text-slate-600">
            Ignoring sleep apnea or low oxygen levels can lead to severe
            long-term health complications. Early diagnosis and therapy are
            crucial.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {risks.map((risk, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            
              <div className={`p-2 rounded-xl ${risk.bg} ${risk.color}`}>
                {cloneElement(risk.icon as React.ReactElement, {
                size: 20
              })}
              </div>
              <span className="font-semibold text-slate-800">{risk.title}</span>
            </motion.div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            Proper oxygen therapy and CPAP usage can significantly reduce these
            risks, improving both longevity and daily quality of life.
          </p>
        </div>
      </div>
    </section>);

}