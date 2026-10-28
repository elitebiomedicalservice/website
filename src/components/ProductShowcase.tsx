import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const featuredProductIds = new Set([
  'oxymed-inteli',
  'oxymed-cure-5lpm',
  'oxymed-p2-portable',
  'evox-twinpap-b19',
]);

const featuredProducts = products.filter((product) => featuredProductIds.has(product.id));

export function ProductShowcase() {
  return (
    <section className="overflow-hidden bg-[#f5f9f8] py-16 sm:py-20" aria-labelledby="featured-equipment-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              2026 Product Catalog
            </span>
            <h2 id="featured-equipment-title" className="mb-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Featured Respiratory Equipment
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore trusted oxygen therapy and respiratory care equipment selected for home and clinical use.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-teal-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            View all products <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="product-showcase-grid" aria-label="Featured respiratory equipment">
          {featuredProducts.map((product, index) => {
            const quickSpecs = [product.purity, product.flowRate, product.noiseLevel, product.weight]
              .filter((spec): spec is string => Boolean(spec))
              .slice(0, 2);
            const whatsappMessage = encodeURIComponent(
              `Hello Elite Biomedical Services, I would like to enquire about ${product.name}. Please provide pricing and availability.`,
            );

            return (
              <article key={product.id} className="product-showcase-card group">
                <div className="product-showcase-card-media">
                  <span className="product-showcase-card-brand">{product.brand}</span>
                  <span className="product-showcase-card-warranty">{product.warranty} warranty</span>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    decoding="async"
                    className="product-showcase-card-image"
                  />
                </div>

                <div className="product-showcase-card-content">
                  <p className="product-showcase-card-category">
                    {product.category}{product.series ? ` · ${product.series}` : ''}
                  </p>
                  <h3 className="product-showcase-card-title">{product.name}</h3>
                  <p className="product-showcase-card-description">{product.shortDesc}</p>

                  <div className="product-showcase-card-specs" aria-label="Product highlights">
                    {quickSpecs.map((spec) => <span key={spec}>{spec}</span>)}
                  </div>

                  <div className="product-showcase-card-actions">
                    <Link to={`/products/${product.id}`} className="product-showcase-card-details">
                      View details <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                    <a
                      href={`https://wa.me/918078422393?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-showcase-card-price"
                    >
                      Get price
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
