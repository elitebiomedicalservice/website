import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { ChatAssistant } from './components/ChatAssistant';
import { ChatMascot } from './components/ChatMascot';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const OxygenConcentrators = lazy(() => import('./pages/OxygenConcentrators').then((module) => ({ default: module.OxygenConcentrators })));
const SleepStudy = lazy(() => import('./pages/SleepStudy').then((module) => ({ default: module.SleepStudy })));
const CpapBipap = lazy(() => import('./pages/CpapBipap').then((module) => ({ default: module.CpapBipap })));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const ProductsCatalog = lazy(() => import('./pages/ProductsCatalog').then((module) => ({ default: module.ProductsCatalog })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then((module) => ({ default: module.ProductDetail })));

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <div className="page-loader-orbit" aria-hidden="true">
        <span className="page-loader-ripple page-loader-ripple-one" />
        <span className="page-loader-ripple page-loader-ripple-two" />
        <span className="page-loader-disc" />
        <ChatMascot pose="present" size={112} className="page-loader-mascot" />
      </div>
      <div className="page-loader-caption" aria-hidden="true">
        <span>Preparing your page</span>
        <i /><i /><i />
      </div>
    </div>
  );
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary flex flex-col">
        <SEO />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsCatalog />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/oxygen-concentrators" element={<OxygenConcentrators />} />
              <Route path="/sleep-study" element={<SleepStudy />} />
              <Route path="/cpap-bipap" element={<CpapBipap />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        </div>
      </BrowserRouter>
    </MotionConfig>);

}
