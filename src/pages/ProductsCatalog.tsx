import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { FinalCTA } from '../components/FinalCTA';
import { Search, Filter, PhoneCall } from 'lucide-react';

export function ProductsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <SEO
        title="2026 Product Catalog | Elite Biomedical Services"
        description="Browse trusted respiratory and oxygen therapy equipment for home and clinical care across Kerala. Oxymed, Evox, and BMC devices."
      />

      <PageHero
        title="Product Catalog"
        subtitle="Trusted respiratory and oxygen therapy equipment for home and clinical care — built for reliability, comfort, and everyday healthy living."
      />

      <section className="py-16 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-2 shrink-0">
                <Filter size={14} /> Filter:
              </span>
              {[
                { id: 'All', label: 'All Products' },
                { id: 'Oxygen Concentrators', label: 'Oxygen Concentrators' },
                { id: 'Portable Oxygen', label: 'Portable POC' },
                { id: 'Sleep & Respiratory Therapy', label: 'Sleep & BiPAP Therapy' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search device, brand, spec..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Products Count Indicator */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              Showing <span className="text-primary font-bold">{filteredProducts.length}</span> devices from 2026 Catalog
            </p>
          </div>

          {/* Catalog Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <p className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">No matching products found</p>
              <p className="text-sm text-slate-500 mb-6">Try searching with a different keyword or resetting filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Catalog Help Callout */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                Catalog Assistance & Rental Guidance
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                Need Help Choosing the Right Machine?
              </h3>
              <p className="text-slate-300 text-sm md:text-base max-w-xl">
                Our certified biomedical engineers and respiratory care specialists are ready to guide you based on your doctor prescription.
              </p>
            </div>
            
            <a
              href="tel:+918078422393"
              className="shrink-0 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center gap-3 text-sm md:text-base"
            >
              <PhoneCall size={20} /> Speak to Bio-Engineer
            </a>
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
