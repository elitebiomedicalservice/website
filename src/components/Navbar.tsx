import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/elite_biomedical_logo_clean.png';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isLightOverHero = !isHome && !scrolled;
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // Handle Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const navLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Catalog',
    href: '/products'
  },
  {
    name: 'Oxygen Concentrators',
    href: '/oxygen-concentrators'
  },
  {
    name: 'CPAP & BiPAP',
    href: '/cpap-bipap'
  },
  {
    name: 'Sleep Study',
    href: '/sleep-study'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }];

  // Dynamic classes based on contrast needs
  const mutedTextColorClass = isLightOverHero ?
  'text-white/80 hover:text-white' :
  'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary';
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'liquid-glass py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center rounded-2xl transition-all ${isLightOverHero ? 'bg-white/95 shadow-glass px-3 py-2' : 'bg-white/85 dark:bg-white/95 shadow-soft px-3 py-2'}`}>
            <img
              src={logo}
              alt="Elite Biomedical Services"
              className="h-12 w-auto max-w-[190px] object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
              `text-sm font-medium transition-all ${isActive ? isLightOverHero ? 'text-white font-bold border-b-2 border-white pb-1' : 'text-primary font-bold border-b-2 border-primary pb-1' : mutedTextColorClass}`
              }>
              
                {link.name}
              </NavLink>
            )}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 transition-colors rounded-full ${isLightOverHero ? 'text-white hover:bg-white/20' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              aria-label="Toggle Dark Mode">
              
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2 ${isLightOverHero ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-glass' : 'bg-primary hover:bg-teal-700 text-white shadow-float hover:shadow-glow'}`}>
              
              <Phone size={16} />
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 transition-colors rounded-full ${isLightOverHero ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>
              
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${isLightOverHero ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
              
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        exit={{
          opacity: 0,
          height: 0
        }}
        className="lg:hidden liquid-glass absolute top-full left-0 right-0 border-t border-slate-200 dark:border-slate-700">
        
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) =>
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
            `block px-3 py-3 text-base font-medium rounded-lg transition-colors ${isActive ? 'bg-teal-50 dark:bg-teal-900/30 text-primary dark:text-teal-300' : 'text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800'}`
            }
            onClick={() => setMobileMenuOpen(false)}>
            
                {link.name}
              </NavLink>
          )}
            <div className="pt-4">
              <Link
              to="/contact"
              className="w-full bg-primary text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow-float"
              onClick={() => setMobileMenuOpen(false)}>
              
                <Phone size={18} />
                Book Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      }
    </motion.nav>);

}
