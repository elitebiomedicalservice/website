import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram } from
'lucide-react';
import logo from '../assets/elite_biomedical_logo_clean.png';
const contactPhone = '+91 9496522393';
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
                className="h-24 w-auto max-w-[220px] object-contain" />
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Premium oxygen concentrator sales, service, and comprehensive
              respiratory care solutions across Kerala.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Oxygen Concentrator Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Device Servicing & Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home Sleep Study (HSAT)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  CPAP & BiPAP Machines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Respiratory Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Patient Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  {contactAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href={`tel:${contactPhone.replace(/\s/g, '')}`}
                  className="hover:text-primary transition-colors">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all hover:text-primary transition-colors">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Elite Biomedical Services. All rights
            reserved.
          </p>
          <p>Designed for Healthcare Excellence</p>
        </div>
      </div>
    </footer>);

}
