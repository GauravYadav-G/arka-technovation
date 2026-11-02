'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowUpRight,
  Eye,
  X,
  Layers,
  Code2,
  Film,
  Compass,
  Palette,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Web & Apps' | 'Enterprise Systems' | 'Cinema & Films' | 'Branding & UI/UX' | 'Performance & SEO';
  image: string;
  client: string;
  year: string;
  aspect: 'landscape' | 'portrait' | 'square';
  description: string;
  deliverables: string[];
  stats?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'precision-cad',
    title: 'Precision CAD Industrial Portal',
    category: 'Web & Apps',
    image: '/images/products/grid-01-precision-cad.webp',
    client: 'Precision CAD International',
    year: '2024',
    aspect: 'landscape',
    description: 'High-precision industrial component configurator and engineering portal with sub-second page transitions and WebGL 3D previews.',
    deliverables: ['Next.js 15', 'Three.js 3D Viewer', 'Headless CMS', 'Global CDN'],
    stats: '100% Core Web Vitals',
  },
  {
    id: 'maison-d2c',
    title: 'Maison Luxury D2C Experience',
    category: 'Branding & UI/UX',
    image: '/images/products/grid-02-maison-d2c.webp',
    client: 'Maison Artisans',
    year: '2024',
    aspect: 'portrait',
    description: 'Bespoke high-converting e-commerce storefront with tactile micro-interactions, custom checkout flow, and international currency localization.',
    deliverables: ['Shopify Plus', 'Atomic Design System', 'Conversion Optimization', 'Motion UI'],
    stats: '+184% Checkout Lift',
  },
  {
    id: 'northline-cinema',
    title: 'Northline Cinematic Commercial',
    category: 'Cinema & Films',
    image: '/images/products/grid-03-northline-cinema.webp',
    client: 'Northline Industrial Ltd.',
    year: '2023',
    aspect: 'landscape',
    description: '4K RED digital cinema commercial and factory documentary showcasing heavy machinery automation and global export infrastructure.',
    deliverables: ['4K Cinema Camera', 'Drone Aerial Cinematography', 'Sound Design', 'Color Grading'],
    stats: '2.4M Video Views',
  },
  {
    id: 'enterprise-crm',
    title: 'CoreOps Enterprise CRM Platform',
    category: 'Enterprise Systems',
    image: '/images/products/grid-04-enterprise-crm.webp',
    client: 'CoreOps Logistics',
    year: '2024',
    aspect: 'landscape',
    description: 'Multi-tenant ERP and customer relationship engine unifying sales pipelines, warehouse inventory, and automated invoice reconciliation.',
    deliverables: ['React 19', 'Node.js Microservices', 'PostgreSQL', 'Role-Based Access'],
    stats: '99.99% Cloud Uptime',
  },
  {
    id: 'plant-seo',
    title: 'Plant Dynamics Organic Authority',
    category: 'Performance & SEO',
    image: '/images/products/grid-05-plant-seo.webp',
    client: 'Plant Dynamics',
    year: '2024',
    aspect: 'portrait',
    description: 'Multi-tier topical authority SEO engine capturing Top 3 Google search rankings for 180+ competitive manufacturing keywords.',
    deliverables: ['Technical SEO Architecture', 'Topical Authority Clusters', 'Schema.org Markup', 'Backlink Acquisition'],
    stats: '+340% Inbound Leads',
  },
  {
    id: 'meridian-health',
    title: 'Meridian Health Patient Portal',
    category: 'Web & Apps',
    image: '/images/products/grid-06-meridian-health.webp',
    client: 'Meridian Healthcare Network',
    year: '2023',
    aspect: 'landscape',
    description: 'HIPAA-compliant telemedicine booking engine with real-time doctor availability sync, medical report vaults, and accessible WCAG 2.2 UI.',
    deliverables: ['Next.js App Router', 'WCAG 2.2 AA Compliance', 'End-to-End Encryption', 'SMS/WhatsApp API'],
    stats: '45,000+ Appointments',
  },
  {
    id: 'botblox-robotics',
    title: 'BotBlox Robotics Hardware Interface',
    category: 'Enterprise Systems',
    image: '/images/products/grid-07-botblox-robotics.webp',
    client: 'BotBlox Robotics',
    year: '2024',
    aspect: 'square',
    description: 'Telemetry dashboard for autonomous warehouse robots displaying live battery thermal curves, routing grids, and collision diagnostics.',
    deliverables: ['WebSocket Realtime', 'Canvas 2D Data Visualizer', 'IoT Device Sync', 'Edge Deployment'],
    stats: '< 15ms Telemetry Latency',
  },
  {
    id: 'kestrix-thermal',
    title: 'Kestrix Thermal Drone Analytics',
    category: 'Performance & SEO',
    image: '/images/products/grid-08-kestrix-thermal.webp',
    client: 'Kestrix Green Building Tech',
    year: '2023',
    aspect: 'portrait',
    description: 'Commercial landing platform and heat-loss building audit visualizer backed by targeted PPC geofencing and thought-leadership whitepapers.',
    deliverables: ['Interactive Heatmaps', 'Addressable Geofencing', 'Lead Scoring Engine', 'PR Distribution'],
    stats: '4.6x Ad ROAS',
  },
  {
    id: 'skipper-maritime',
    title: 'Skipper Maritime Fleet Tracking',
    category: 'Web & Apps',
    image: '/images/products/grid-09-skipper-maritime.webp',
    client: 'Skipper Shipping Lines',
    year: '2024',
    aspect: 'landscape',
    description: 'Global cargo vessel telemetry interface tracking container GPS routes, weather routing alerts, and dock customs clearance status.',
    deliverables: ['Leaflet Map Engine', 'Offline PWA Support', 'Multilingual i18n', 'Cargo API Sync'],
    stats: '1,200 Vessels Tracked',
  },
];

const CATEGORIES = [
  'All',
  'Web & Apps',
  'Enterprise Systems',
  'Cinema & Films',
  'Branding & UI/UX',
  'Performance & SEO',
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black font-sans selection:bg-solar selection:text-white">
      {/* Floating Glassmorphic Top Navbar */}
      <PortfoliteNav />

      {/* ======================================================== */}
      {/* HERO SECTION: Title & Philosophy                         */}
      {/* ======================================================== */}
      <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle Architectural Dot Grid */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient Solar Warmth Glow Pool */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-200/25 via-orange-200/10 to-transparent rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-solar" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700">
              Visual Archive · Production Deliverables
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 font-display leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Curated Visual Gallery &amp; Engineering Showcase
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base md:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto"
            style={{ textWrap: 'pretty' }}
          >
            Explore our visual gallery of full-stack web platforms, corporate cinema films, enterprise software architectures, and high-conversion growth systems created in Sector 63, Noida.
          </motion.p>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-1.5 sm:gap-2"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-md'
                      : 'bg-white text-zinc-600 hover:text-black border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* GALLERY GRID: Responsive Masonry Card Layout             */}
      {/* ======================================================== */}
      <section className="relative pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)] hover:border-zinc-300 transition-all duration-300"
              >
                {/* Image Container with Hover Zoom & Action Overlay */}
                <div
                  onClick={() => setActiveItem(item)}
                  className="relative w-full aspect-[16/11] overflow-hidden bg-zinc-100 cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-900 shadow-sm">
                    {item.category}
                  </div>

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-zinc-950 font-semibold text-xs shadow-lg backdrop-blur-md">
                      <Eye className="w-3.5 h-3.5 text-solar" />
                      View Project
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-semibold">
                    {item.year}
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-mono font-semibold text-solar uppercase tracking-wider mb-1">
                      {item.client}
                    </p>
                    <h3
                      onClick={() => setActiveItem(item)}
                      className="text-base sm:text-lg font-bold text-zinc-950 font-display tracking-tight hover:text-solar transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-600 font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="mt-4 pt-3.5 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                      {item.stats || 'Production Ready'}
                    </span>
                    <button
                      onClick={() => setActiveItem(item)}
                      className="text-xs font-semibold text-zinc-900 hover:text-solar inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-solar" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ======================================================== */}
      {/* LIGHTBOX MODAL: Inspect Project in High-Resolution       */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[990] flex items-center justify-center p-3 sm:p-6 lg:p-8">
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur-md text-zinc-700 hover:text-black border border-black/10 shadow-md cursor-pointer transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Big Image Display */}
              <div className="relative w-full md:w-3/5 h-64 md:h-auto min-h-[280px] bg-zinc-950 flex items-center justify-center">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Column: Project Specifications */}
              <div className="w-full md:w-2/5 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-solar/10 text-solar text-[10px] font-mono font-bold uppercase">
                      {activeItem.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {activeItem.year}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 font-display leading-tight mb-2">
                    {activeItem.title}
                  </h2>
                  <p className="text-xs font-mono text-zinc-500 mb-4">
                    Client: {activeItem.client}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed mb-6">
                    {activeItem.description}
                  </p>

                  {/* Deliverables Specs */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-900 font-semibold mb-2 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-solar" />
                      <span>Deliverables &amp; Tech Stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.deliverables.map((del, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-800 text-[11px] font-medium"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Result */}
                  {activeItem.stats && (
                    <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/60 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-solar shrink-0" />
                        <div>
                          <p className="text-[10px] font-mono text-zinc-500 uppercase">Verified Impact</p>
                          <p className="text-sm font-bold text-zinc-950 font-display">{activeItem.stats}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTAs in Modal */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-2.5">
                  <Link
                    href="/contact-us"
                    onClick={() => setActiveItem(null)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-sm"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-solar" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* BOTTOM CTA: Transform Your Digital Product               */}
      {/* ======================================================== */}
      <section className="relative py-20 sm:py-28 bg-white border-t border-black/10 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-2">
            Initiate Engagement
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 font-display leading-[1.15]">
            Have an engineering vision or creative film in mind?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 font-light max-w-xl mx-auto leading-relaxed">
            Collaborate directly with our in-house engineering and production directors in Sector 63, Noida. Fast proposals with transparent timelines.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[48px] rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold tracking-wide shadow-md transition-all active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-solar" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 border border-zinc-200 text-sm font-medium transition-colors"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PortfoliteFooter />
    </div>
  );
}

