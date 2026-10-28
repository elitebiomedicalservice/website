import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProductById, products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { SEO } from "../components/SEO";
import {
  ChevronRight,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  Truck,
  Wrench,
  CheckCircle2,
  Activity,
  Volume2,
  Zap,
  Weight,
  Bluetooth,
  Plane,
  FileText,
  Clock,
  Award,
  ArrowLeft,
} from "lucide-react";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "package" | "why-us"
  >("overview");

  const product = id ? getProductById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Product Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          The requested respiratory or sleep therapy device could not be found
          in our 2026 catalog.
        </p>
        <Link
          to="/products"
          className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Catalog
        </Link>
      </div>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hello Elite Biomedical Services, I would like to inquire about pricing, demo, and rental options for ${product.name} (${product.brand}).`,
  );

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.brand === product.brand),
    )
    .slice(0, 3);

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 min-h-screen pt-24 md:pt-28 lg:pt-32 pb-24">
      <SEO
        title={`${product.name} (${product.brand}) | Oxygen & Respiratory Care | Elite Biomedical Kerala`}
        description={`${product.name}${product.series ? ` - ${product.series}` : ''}: ${product.shortDesc} Contact Elite Biomedical Services to ask about pricing, sales or rental options, delivery, and service coverage in your area.`}
        keywords={`${product.name}, ${product.brand} oxygen concentrator, ${product.name} Vadakara, ${product.name} Kozhikode, ${product.name} price Kerala, buy ${product.name}`}
        image={product.image}
        product={product}
      />

      {/* Breadcrumb Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              to="/products"
              className="hover:text-primary transition-colors"
            >
              Products Catalog
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {product.category}
            </span>
            <ChevronRight size={14} />
            <span className="text-primary font-bold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Image Gallery Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              {/* Badges */}
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                {product.badge && (
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    {product.bluetoothEnabled && <Bluetooth size={14} />}
                    {product.flightApproved && <Plane size={14} />}
                    {product.badge}
                  </span>
                )}
                <span className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 shadow-sm flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  {product.warranty} Warranty
                </span>
              </div>

              {/* Brand Tag */}
              <div className="absolute top-6 right-6 z-10 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {product.brand}
              </div>

              <div className="h-[360px] md:h-[420px] w-full flex items-center justify-center pt-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Trust Badges Bar */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                  <Truck size={20} className="mx-auto text-primary mb-1" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
                    Ask About Delivery
                  </span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                  <Wrench size={20} className="mx-auto text-primary mb-1" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
                    24/7 Bio-Eng Support
                  </span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                  <Award size={20} className="mx-auto text-primary mb-1" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
                    Warranty Information
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Product Meta & Purchase Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900/40 text-primary dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                  {product.series && (
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
                      • {product.series}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
                  {product.name}
                </h1>

                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {product.tagline}
                </p>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base mb-6">
                  {product.fullDesc}
                </p>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {product.purity && (
                    <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                        <Activity size={14} className="text-primary" /> Oxygen
                        Purity
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        {product.purity}
                      </div>
                    </div>
                  )}

                  {product.flowRate && (
                    <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                        <Zap size={14} className="text-primary" /> Flow Rate
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        {product.flowRate}
                      </div>
                    </div>
                  )}

                  {product.noiseLevel && (
                    <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                        <Volume2 size={14} className="text-emerald-600" /> Noise
                        Level
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        {product.noiseLevel}
                      </div>
                    </div>
                  )}

                  {product.weight && (
                    <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                        <Weight size={14} className="text-primary" /> Weight
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        {product.weight}
                      </div>
                    </div>
                  )}

                  {product.powerDraw && (
                    <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                        <Zap size={14} className="text-amber-500" /> Power
                        Consumption
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        {product.powerDraw}
                      </div>
                    </div>
                  )}

                  <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                      <ShieldCheck size={14} className="text-emerald-500" />{" "}
                      Warranty
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">
                      {product.warranty}
                    </div>
                  </div>
                </div>

                {/* Call-to-Action Panel */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block uppercase">
                        Rental & Sales Inquiries
                      </span>
                      <span className="text-lg font-bold text-slate-900 dark:text-white">
                        Call or WhatsApp for Best Price
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      In Stock • Same-Day Dispatch
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/918078422393?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-5 rounded-2xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                    >
                      <MessageSquare size={18} /> WhatsApp Inquiry
                    </a>

                    <a
                      href="tel:+918078422393"
                      className="bg-primary hover:bg-blue-700 text-white py-3.5 px-5 rounded-2xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                    >
                      <PhoneCall size={18} /> Call Respiratory Expert
                    </a>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
                    Need help choosing? Our certified bio-engineers assist with
                    prescription &amp; home setup.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation & Detailed Content */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-8 mb-12">
            {([
              { id: 'overview', label: 'Key Features & Overview' },
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'package', label: "What's in the Box" },
              { id: 'why-us', label: 'Elite Biomedical Advantage' }
            ] as const).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm md:text-base font-bold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Key Features & Therapeutic Advantages
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start gap-4"
                  >
                    {feat.number ? (
                      <div className="w-10 h-10 rounded-xl bg-primary text-white font-bold flex items-center justify-center shrink-0">
                        {feat.number}
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-primary shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                    )}

                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights Bullet List */}
              <div className="mt-10 p-8 rounded-3xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="text-primary" /> Key Catalog Highlights
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {product.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Specs Table */}
          {activeTab === "specs" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Technical Specifications
              </h3>
              <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-w-4xl">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 0
                            ? "bg-white dark:bg-slate-900"
                            : "bg-slate-50/70 dark:bg-slate-800/50"
                        }
                      >
                        <td className="py-4 px-6 font-semibold text-slate-700 dark:text-slate-300 w-1/3 border-b border-slate-100 dark:border-slate-800">
                          {spec.label}
                        </td>
                        <td className="py-4 px-6 text-slate-900 dark:text-white font-medium border-b border-slate-100 dark:border-slate-800">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Package Includes */}
          {activeTab === "package" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Package Contents
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
                {product.packageIncludes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-emerald-500 shrink-0"
                    />
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab 4: Why Us */}
          {activeTab === "why-us" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8 max-w-4xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why Buy or Rent from Elite Biomedical Services?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                At Elite Biomedical Services, we provide end-to-end oxygen
                therapy and sleep care solutions across Kerala. When you choose
                us, you receive comprehensive biomedical backup and clinical
                peace of mind.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <Wrench size={28} className="text-primary mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    Equipment Setup & Support
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Our team of qualified biomedical engineers inspects,
                    calibrates, and verifies oxygen purity before delivery.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <Clock size={28} className="text-primary mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    24/7 Rapid Emergency Support
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Round-the-clock technical helpline and quick home assistance
                    across Kerala for urgent respiratory support.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <ShieldCheck size={28} className="text-primary mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    Warranty &amp; Service Information
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Ask about warranty coverage and service options for this model.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <FileText size={28} className="text-primary mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    Prescription & Mask Fitting
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    We assist in setting pressure parameters and fitting
                    CPAP/BiPAP masks according to doctor recommendations.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Related Devices in Catalog
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Explore other models in the 2026 Elite Biomedical catalog
                </p>
              </div>

              <Link
                to="/products"
                className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Full Catalog <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Sticky Quick Inquiry Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-3 flex gap-3 shadow-lg">
        <a
          href={`https://wa.me/918078422393?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-1"
        >
          <MessageSquare size={16} /> WhatsApp Price
        </a>
        <a
          href="tel:+918078422393"
          className="flex-1 bg-primary text-white font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-1"
        >
          <PhoneCall size={16} /> Call Expert
        </a>
      </div>
    </div>
  );
}
