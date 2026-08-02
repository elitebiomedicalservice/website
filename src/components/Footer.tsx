import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import logo from '../assets/elite_biomedical_logo_clean.png';

const contactPhone = '+91 8078422393';
const secondaryPhone = '+91 9496522393';
const contactEmail = 'elitebiomedicalservice@gmail.com';
const contactAddress =
  'Door no.679/A Basement floor sreesastha building, Near kelluettan smaraka mandir, edodi, vadakara, Kozhikode, Kerala- 673101';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6 inline-flex rounded-2xl bg-white p-3 shadow-glass">
              <img
                src={logo}
                alt="Elite Biomedical Services"
                className="h-20 w-auto max-w-[200px] object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Trusted respiratory and oxygen therapy equipment for home and clinical care across Kerala — built for reliability, comfort, and healthy living.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Catalog & Equipment */}
          <div>
            <h4 className="text-white font-bold mb-6">2026 Product Catalog</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  View Full Catalog
                </Link>
              </li>
              <li>
                <Link to="/products/oxymed-inteli" className="hover:text-primary transition-colors">
                  Oxymed Inteli (Smart SpO₂)
                </Link>
              </li>
              <li>
                <Link to="/products/oxymed-cure-5lpm" className="hover:text-primary transition-colors">
                  Oxymed Cure 5 LPM (&lt;35 dB)
                </Link>
              </li>
              <li>
                <Link to="/products/oxymed-p2-portable" className="hover:text-primary transition-colors">
                  Oxymed P2 (FAA Approved POC)
                </Link>
              </li>
              <li>
                <Link to="/products/evox-twinpap-b19" className="hover:text-primary transition-colors">
                  Evox TwinPAP B19 Machine
                </Link>
              </li>
              <li>
                <Link to="/products/bmc-g2s-v25-vt" className="hover:text-primary transition-colors">
                  BMC G2S V25 VT BiPAP
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/oxygen-concentrators" className="hover:text-primary transition-colors">
                  Oxygen Concentrators
                </Link>
              </li>
              <li>
                <Link to="/cpap-bipap" className="hover:text-primary transition-colors">
                  CPAP & BiPAP Therapy
                </Link>
              </li>
              <li>
                <Link to="/sleep-study" className="hover:text-primary transition-colors">
                  Home Sleep Study (HSAT)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Elite Biomedical
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{contactAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {contactPhone}
                  </a>
                  <a href={`tel:${secondaryPhone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors text-xs text-slate-400">
                    {secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href={`mailto:${contactEmail}`} className="break-all hover:text-primary transition-colors text-xs">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Elite Biomedical Services. All rights reserved.</p>
          <p>Trusted Respiratory Care Across Kerala</p>
        </div>
      </div>
    </footer>
  );
}
