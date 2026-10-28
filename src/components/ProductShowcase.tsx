import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export function ProductShowcase() {
  // Select top 4 catalog items for showcase
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
              2026 Product Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Featured Respiratory Equipment
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Explore our catalog of medical-grade oxygen concentrators, portable devices, and BiPAP therapy machines.
            </p>
          </div>

          <Link
            to="/products"
            className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all shrink-0"
          >
            View All Catalog Products <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}