import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/elite_biomedical_logo_clean.png';

const contactPhone = '+91 8078422393';
const secondaryPhone = '+91 9496522393';
const contactEmail = 'elitebiomedicalservice@gmail.com';
const contactAddress = 'Door no.679/A Basement floor sreesastha building, Near kelluettan smaraka mandir, edodi, vadakara, Kozhikode, Kerala- 673101';

const catalogLinks = [
  { label: 'View Full Catalog', to: '/products' },
  { label: 'Oxymed Inteli', to: '/products/oxymed-inteli' },
  { label: 'Oxymed Cure 5 LPM', to: '/products/oxymed-cure-5lpm' },
  { label: 'Oxymed P2 Portable', to: '/products/oxymed-p2-portable' },
  { label: 'Evox TwinPAP B19', to: '/products/evox-twinpap-b19' },
  { label: 'BMC G2S V25 VT BiPAP', to: '/products/bmc-g2s-v25-vt' },
];
const serviceLinks = [
  { label: 'Oxygen Concentrators', to: '/oxygen-concentrators' },
  { label: 'CPAP & BiPAP Therapy', to: '/cpap-bipap' },
  { label: 'Home Sleep Study', to: '/sleep-study' },
  { label: 'About Elite Biomedical', to: '/about' },
  { label: 'Contact & Support', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link to="/" className="site-footer-logo" aria-label="Elite Biomedical Services home">
              <img src={logo} alt="Elite Biomedical Services" />
            </Link>
            <p>Respiratory and oxygen therapy equipment, sleep study support, and biomedical services in Kerala.</p>
            <a className="site-footer-social" href="https://www.instagram.com/elitebiomedicalservice/" target="_blank" rel="noreferrer" aria-label="Elite Biomedical Services on Instagram"><Instagram size={17} /></a>
          </div>

          <nav className="site-footer-column" aria-label="Product catalog">
            <h3>Equipment</h3>
            {catalogLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}<ArrowUpRight size={13} /></Link>)}
          </nav>

          <nav className="site-footer-column" aria-label="Company and services">
            <h3>Explore</h3>
            {serviceLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}<ArrowUpRight size={13} /></Link>)}
          </nav>

          <div className="site-footer-column site-footer-contact">
            <h3>Reach our team</h3>
            <a href={`tel:${contactPhone.replace(/\s/g, '')}`}><Phone size={15} />{contactPhone}</a>
            <a href={`tel:${secondaryPhone.replace(/\s/g, '')}`}><Phone size={15} />{secondaryPhone}</a>
            <a href={`mailto:${contactEmail}`}><Mail size={15} />{contactEmail}</a>
            <span className="site-footer-address"><MapPin size={15} />{contactAddress}</span>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} Elite Biomedical Services. All rights reserved.</p>
          <span>Trusted respiratory care across Kerala</span>
        </div>
      </div>
    </footer>
  );
}
