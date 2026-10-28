import { useRef } from 'react';
import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import supportImage from '../assets/sourav.jpeg';
import sleepStudyImage from '../assets/hero-sleep-care.jpeg';

const careCategories = [
  {
    title: 'Oxygen concentrators',
    detail: 'Home and portable models',
    href: '/oxygen-concentrators',
    image: '/products/oxymed-cure-5lpm.png',
    imageAlt: 'Oxygen concentrator listed in the product catalog',
  },
  {
    title: 'CPAP & BiPAP',
    detail: 'Devices, masks, and setup',
    href: '/cpap-bipap',
    image: '/products/evox-twinpap-b19.png',
    imageAlt: 'Evox TwinPAP B19 device',
  },
  {
    title: 'Home sleep study',
    detail: 'Ask about Level 3 HSAT',
    href: '/sleep-study',
    image: sleepStudyImage,
    imageAlt: 'A woman sleeping in a calm bedroom',
  },
  {
    title: 'Portable oxygen',
    detail: 'Explore portable concentrators',
    href: '/products?category=Portable%20Oxygen',
    image: '/products/oxymed-p2-portable.png',
    imageAlt: 'Portable oxygen concentrator listed in the product catalog',
  },
  {
    title: 'Service & support',
    detail: 'Installation, repairs, and guidance',
    href: '/contact?service=Device%20Servicing',
    image: supportImage,
    imageAlt: 'Elite Biomedical Services team member',
  },
];

export function HomeCategoryRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.78,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="care-categories-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Explore care and equipment</p>
            <h2 id="care-categories-title" className="mb-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Respiratory care, all in one place.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Browse equipment, sleep study information, and support from Elite Biomedical Services.
            </p>
          </div>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              aria-label="Scroll categories left"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollRail(1)}
              aria-label="Scroll categories right"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:gap-5 sm:px-0"
          aria-label="Equipment and service categories"
        >
          {careCategories.map((category) => (
            <Link
              key={category.title}
              to={category.href}
              className="group relative h-[310px] w-[78vw] max-w-[310px] flex-none snap-start overflow-hidden rounded-[22px] bg-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:h-[340px] sm:w-[calc((100%-20px)/2)] sm:max-w-none lg:w-[calc((100%-60px)/4)]"
            >
              <img
                src={category.image}
                alt={category.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white sm:p-6">
                <div>
                  <p className="mb-1 text-xs font-medium text-white/75">{category.detail}</p>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{category.title}</h3>
                </div>
                <span aria-hidden="true" className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur transition group-hover:bg-white group-hover:text-slate-950">
                  <MoveUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
