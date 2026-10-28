import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerBrands = [
  {
    name: 'Evox',
    src: '/partners/evox.jpg',
    width: 750,
    height: 233,
  },
  {
    name: 'Deckmount',
    src: '/partners/deckmount.webp',
    width: 1796,
    height: 320,
  },
  {
    name: 'Oxymed',
    src: '/partners/oxymed.webp',
    width: 1200,
    height: 628,
  },
  {
    name: 'BMC',
    src: '/partners/bmc.png',
    width: 360,
    height: 230,
  },
  {
    name: 'Philips Respironics',
    src: '/partners/philips-respironics.png',
    width: 240,
    height: 120,
  },
  {
    name: 'ResMed',
    src: '/partners/resmed.png',
    width: 320,
    height: 320,
  },
];

export function PartnerBrands() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24"
      aria-labelledby="partner-brands-title"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.17),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
            Brands we work with
          </span>
          <h2 id="partner-brands-title" className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Trusted names in respiratory care
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Explore equipment and solutions from leading brands featured in our catalog.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {partnerBrands.map((brand) => (
            <li key={brand.name} className="min-w-0">
              <div className="group flex h-32 min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white px-3 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_18px_42px_rgba(20,184,166,0.16)] sm:h-36 sm:px-4">
                <img
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-auto max-h-[82px] max-w-full object-contain"
                />
              </div>
              <p className="mt-3 text-center text-xs font-medium tracking-wide text-slate-400">
                {brand.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-11 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-300 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            Explore the catalog <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
