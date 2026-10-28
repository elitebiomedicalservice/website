import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from '../types/product';

const siteUrl = 'https://elitebiomedicalservice.com';
const defaultImage = `${siteUrl}/elite_biomedical_logo_clean.png`;

const defaultSeoByPath: Record<string, { title: string; description: string; keywords: string; type?: string }> = {
  '/': {
    title: 'Elite Biomedical Services | Oxygen Concentrator & BiPAP Sales, Rental & Service in Vadakara, Kozhikode',
    description: 'Elite Biomedical Services provides medical oxygen concentrators, CPAP, BiPAP, home sleep study, and 24/7 technical service across Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram.',
    keywords: 'oxygen concentrator Vadakara, oxygen concentrator Kozhikode, oxygen concentrator Kannur, BiPAP rental Kozhikode, CPAP machine Vadakara, home sleep study Kerala, Oxymed oxygen concentrator Kerala, Evox concentrator Vadakara, BMC BiPAP Kozhikode'
  },
  '/products': {
    title: '2026 Medical Equipment Product Catalog | Oxygen Concentrators & BiPAP | Elite Biomedical Services Kerala',
    description: 'Explore the 2026 Product Catalog of Elite Biomedical Services. Featuring Oxymed Inteli, Oxymed Cure, Evox 5LPM, Oxymed P2 Portable POC, Evox TwinPAP B19, BMC G2S V25 VT, and Oxymed BiPAP ST.',
    keywords: 'Oxymed Inteli Kerala, Oxymed Cure 5LPM Vadakara, Oxymed P2 portable oxygen concentrator India, Evox 5LPM Kozhikode, BMC BiPAP VT control Kannur, Evox TwinPAP B19 Wayanad, medical oxygen concentrator price Kerala'
  },
  '/oxygen-concentrators': {
    title: 'Medical Oxygen Concentrator Sales & Rental in Vadakara, Kozhikode, Kannur | Elite Biomedical',
    description: 'Buy or rent 5LPM & portable medical oxygen concentrators with 93% ± 3% purity. Same-day delivery, installation, and 24/7 biomedical engineer support in Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram.',
    keywords: 'oxygen concentrator sales Vadakara, oxygen concentrator rental Kozhikode, 5LPM oxygen machine Kannur, portable oxygen concentrator Malappuram, Oxymed concentrator Kerala, Evox concentrator repair Vadakara'
  },
  '/sleep-study': {
    title: 'Home Sleep Apnea Testing (HSAT) Level 3 in Vadakara, Kozhikode, Kannur & Wayanad',
    description: 'Book clinical-grade Home Sleep Study (HSAT) for sleep apnea screening. Next-day report by sleep specialists and expert CPAP/BiPAP guidance across North Kerala.',
    keywords: 'home sleep study Vadakara, sleep apnea test Kozhikode, HSAT sleep test Kannur, sleep study cost Wayanad, sleep apnea screening Malappuram, CPAP fitting Vadakara'
  },
  '/cpap-bipap': {
    title: 'CPAP & BiPAP Machines Sales, Rental & Mask Setup in Vadakara, Kozhikode, Kannur',
    description: 'Advanced CPAP & BiPAP machines with Target Tidal Volume (VT), German-Engineered Turbines, and heated humidifiers. Complete mask setup and pressure calibration in Kerala.',
    keywords: 'CPAP machine Vadakara, BiPAP machine Kozhikode, BiPAP ST rental Kannur, BMC BiPAP V25 VT Kerala, Evox TwinPAP B19 Vadakara, Oxymed BiPAP ST Wayanad, CPAP mask fitting Kozhikode'
  },
  '/about': {
    title: 'About Elite Biomedical Services | Certified Biomedical Care & Oxygen Support in Kerala',
    description: 'Learn about Elite Biomedical Services, Kerala’s trusted respiratory care provider led by certified biomedical engineers. Offering sales, rentals, servicing, and 24/7 patient support.',
    keywords: 'Elite Biomedical Services Vadakara, biomedical engineers Kozhikode, respiratory care company Kerala, oxygen machine service center Vadakara, certified medical equipment Kerala'
  },
  '/contact': {
    title: 'Contact Elite Biomedical Services | Vadakara, Kozhikode Helpline +91 8078422393',
    description: 'Get in touch with Elite Biomedical Services at Edodi, Vadakara, Kozhikode. Call +91 8078422393 or +91 9496522393 for 24/7 emergency oxygen support and sales across Kerala.',
    keywords: 'Elite Biomedical Vadakara contact, oxygen concentrator helpline Kozhikode, medical equipment shop Vadakara, emergency oxygen supply Kannur, respiratory care contact Kerala'
  }
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function injectJsonLd(id: string, schemaObj: object) {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schemaObj);
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  product?: Product;
}

export function SEO({ title, description, keywords, image, product }: SEOProps = {}) {
  const location = useLocation();

  useEffect(() => {
    const defaultSeo = defaultSeoByPath[location.pathname] ?? defaultSeoByPath['/'];
    const pageTitle = title || defaultSeo.title;
    const pageDesc = description || defaultSeo.description;
    const pageKeywords = keywords || defaultSeo.keywords;
    const pageImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
    const canonical = `${siteUrl}${location.pathname}`;

    // 1. Basic Metadata
    document.title = pageTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: pageDesc });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: pageKeywords });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
    upsertMeta('meta[name="author"]', { name: 'author', content: 'Elite Biomedical Services' });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });

    // 2. OpenGraph Tags
    const ogType = product ? 'product' : 'website';
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Elite Biomedical Services' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageDesc });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: pageImage });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' });

    // 3. Twitter Card Tags
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDesc });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: pageImage });

    // 4. Dynamic JSON-LD Schema
    if (product) {
      // Product Schema
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': product.name,
        'image': [pageImage],
        'description': product.fullDesc,
        'sku': product.id,
        'brand': {
          '@type': 'Brand',
          'name': product.brand
        },
        'category': product.category,
      };
      injectJsonLd('dynamic-product-schema', productSchema);

      // Breadcrumb Schema
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': `${siteUrl}/`
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Products Catalog',
            'item': `${siteUrl}/products`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': product.name,
            'item': canonical
          }
        ]
      };
      injectJsonLd('dynamic-breadcrumb-schema', breadcrumbSchema);
    } else {
      // Remove product schema if leaving product page
      const prodEl = document.head.querySelector('script#dynamic-product-schema');
      if (prodEl) prodEl.remove();
      const breadEl = document.head.querySelector('script#dynamic-breadcrumb-schema');
      if (breadEl) breadEl.remove();
    }
  }, [location.pathname, title, description, keywords, image, product]);

  return null;
}
