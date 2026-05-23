import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
// Pages
import { Home } from './pages/Home';
import { OxygenConcentrators } from './pages/OxygenConcentrators';
import { SleepStudy } from './pages/SleepStudy';
import { CpapBipap } from './pages/CpapBipap';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary flex flex-col">
        <SEO />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/oxygen-concentrators"
              element={<OxygenConcentrators />} />
            
            <Route path="/sleep-study" element={<SleepStudy />} />
            <Route path="/cpap-bipap" element={<CpapBipap />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>);

}
