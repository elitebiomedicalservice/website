import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh K.',
    location: 'Kochi',
    text: 'The team at Elite Biomedical was incredibly fast. My father needed an oxygen concentrator urgently, and they delivered and installed it within hours. The machine works perfectly.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    location: 'Trivandrum',
    text: 'I did the home sleep study through them. The technician was very professional, explained everything clearly, and the report was detailed. Now using their Auto CPAP and sleeping much better.',
    rating: 5,
  },
  {
    name: 'Thomas V.',
    location: 'Kottayam',
    text: 'Excellent after-sales service. When my 5L concentrator needed a filter change, their technician arrived the next day. Very reliable medical equipment provider in Kerala.',
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];
  const goTo = (index: number) => setActiveIndex((index + testimonials.length) % testimonials.length);

  return (
    <section className="testimonial-feature" aria-labelledby="testimonial-title">
      <div className="testimonial-feature-glow" aria-hidden="true" />
      <div className="testimonial-feature-inner">
        <motion.div
          className="testimonial-feature-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className="testimonial-feature-eyebrow">Patient stories</span>
          <h2 id="testimonial-title">Our customers<br />love what we do</h2>
          <p>
            Hear from families across Kerala about the equipment, guidance, and
            support they received from our team.
          </p>
          <span className="testimonial-feature-proof"><span aria-hidden="true">✦</span> Care that continues after delivery</span>
        </motion.div>

        <div className="testimonial-feature-content">
          <div className="testimonial-feature-nav" aria-label="Testimonial navigation">
            <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous testimonial">
              <ArrowLeft size={20} />
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next testimonial">
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="testimonial-feature-card" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="testimonial-feature-card-content"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
              >
                <Quote className="testimonial-feature-quote" size={42} fill="currentColor" aria-hidden="true" />
                <p className="testimonial-feature-text">{testimonial.text}</p>
                <div className="testimonial-feature-footer">
                  <div className="testimonial-feature-author">
                    <span className="testimonial-feature-avatar" aria-hidden="true">{testimonial.name.charAt(0)}</span>
                    <span>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.location}</small>
                    </span>
                  </div>
                  <div className="testimonial-feature-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                    <span aria-hidden="true">{Array.from({ length: testimonial.rating }, (_, i) => <Star key={i} size={17} fill="currentColor" strokeWidth={1.5} />)}</span>
                    <strong>{testimonial.rating}.0</strong>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-feature-pagination" aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}>
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === activeIndex ? 'is-active' : ''}
                onClick={() => goTo(index)}
                aria-label={`Show testimonial ${index + 1} from ${item.name}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
