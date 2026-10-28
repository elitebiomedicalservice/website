import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
export function Testimonials() {
  const testimonials = [
  {
    name: 'Rajesh K.',
    location: 'Kochi',
    text: 'The team at Elite Biomedical was incredibly fast. My father needed an oxygen concentrator urgently, and they delivered and installed it within hours. The machine works perfectly.',
    rating: 5
  },
  {
    name: 'Priya M.',
    location: 'Trivandrum',
    text: 'I did the home sleep study through them. The technician was very professional, explained everything clearly, and the report was detailed. Now using their Auto CPAP and sleeping much better.',
    rating: 5
  },
  {
    name: 'Thomas V.',
    location: 'Kottayam',
    text: 'Excellent after-sales service. When my 5L concentrator needed a filter change, their technician arrived the next day. Very reliable medical equipment provider in Kerala.',
    rating: 5
  }];

  return (
    <section className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Patients Across Kerala
          </h2>
          <p className="text-lg text-slate-600">
            Real experiences from families who rely on our respiratory care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="liquid-glass-card p-8 rounded-3xl relative">
            
              <Quote
              className="absolute top-6 right-6 text-slate-100 dark:text-slate-800"
              size={48} />
            
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Star
                key={i}
                size={18}
                className="text-yellow-400 fill-yellow-400" />

              )}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-8 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
