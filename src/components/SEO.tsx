import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://elitebiomedicalservices.com';
const defaultImage = `${siteUrl}/elite_biomedical_logo_clean.png`;

const seoByPath: Record<string, { title: string; description: string }> = {
  '/': {
    title:
      'Elite Biomedical Services | Oxygen Concentrators, CPAP & Sleep Study in Vadakara',
    description:
      'Elite Biomedical Services provides oxygen concentrator sales, service, CPAP, BiPAP, home sleep study, installation, and respiratory care support in Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram.'
  },
  '/oxygen-concentrators': {
    title: 'Oxygen Concentrators in Vadakara, Kozhikode, Kannur & Malappuram',
    description:
      'Buy or service medical oxygen concentrators with home delivery, setup, maintenance, and respiratory care support in Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram.'
  },
  '/sleep-study': {
    title: 'Home Sleep Study in Vadakara, Kozhikode, Kannur & Wayanad',
    description:
      'Book a home sleep study for sleep apnea screening with trained support from Elite Biomedical Services in Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram.'
  },
  '/cpap-bipap': {
    title: 'CPAP & BiPAP Machines in Vadakara, Kozhikode, Kannur & Malappuram',
    description:
      'CPAP and BiPAP machine guidance, setup, masks, accessories, and technical support for sleep therapy patients in Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram.'
  },
  '/about': {
    title: 'About Elite Biomedical Services | Respiratory Care Kerala',
    description:
      'Learn about Elite Biomedical Services, a Kerala-based respiratory care provider offering oxygen concentrators, sleep therapy devices, service, and patient support.'
  },
  '/contact': {
    title: 'Contact Elite Biomedical Services | Vadakara, Kozhikode, Kannur',
    description:
      'Contact Elite Biomedical Services in Edodi, Vadakara, Kozhikode for respiratory care support across Vadakara, Kozhikode, Kannur, Wayanad, and Malappuram. Call +91 9496522393.'
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

export function SEO() {
  const location = useLocation();

  useEffect(() => {
    const seo = seoByPath[location.pathname] ?? seoByPath['/'];
    const canonical = `${siteUrl}${location.pathname}`;

    document.title = seo.title;
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large'
    });
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonical
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonical
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: defaultImage
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description
    });
  }, [location.pathname]);

  return null;
}
