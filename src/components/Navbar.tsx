import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/elite_biomedical_logo_clean.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Catalog', href: '/products' },
  { name: 'Oxygen', href: '/oxygen-concentrators' },
  { name: 'CPAP & BiPAP', href: '/cpap-bipap' },
  { name: 'Sleep Study', href: '/sleep-study' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`site-navbar${scrolled ? ' is-scrolled' : ''}`}
    >
      <div className="site-navbar-shell">
        <Link to="/" className="site-navbar-brand" aria-label="Elite Biomedical Services home">
          <img src={logo} alt="Elite Biomedical Services" />
        </Link>

        <nav className="site-navbar-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) => `site-navbar-link${isActive ? ' is-active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="site-navbar-actions">
          <Link to="/contact" className="site-navbar-contact"><Phone size={15} /><span>Book consultation</span></Link>
          <button
            type="button"
            className="site-navbar-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="site-navbar-mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) => `site-navbar-mobile-link${isActive ? ' is-active' : ''}`}
            >
              {link.name === 'Oxygen' ? 'Oxygen Concentrators' : link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className={({ isActive }) => `site-navbar-mobile-link${isActive ? ' is-active' : ''}`}>Contact</NavLink>
          <Link to="/contact" className="site-navbar-mobile-cta"><Phone size={17} /> Book consultation</Link>
        </motion.nav>
      )}
    </motion.header>
  );
}
