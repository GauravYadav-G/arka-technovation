'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
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
    image: '/images/gallery/gallery-01-web-apps.webp',
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
    image: '/images/gallery/gallery-02-branding-ui.webp',
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
    image: '/images/gallery/gallery-03-cinema-film.webp',
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
    image: '/images/gallery/gallery-04-enterprise-crm.webp',
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
    image: '/images/gallery/gallery-05-seo-analytics.webp',
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
    image: '/images/gallery/gallery-06-healthcare-portal.webp',
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
    image: '/images/gallery/gallery-07-robotics-hardware.webp',
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
    image: '/images/gallery/gallery-08-thermal-analytics.webp',
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
    image: '/images/gallery/gallery-09-maritime-logistics.webp',
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

  const currentIndex = activeItem
    ? filteredItems.findIndex((item) => item.id === activeItem.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (!filteredItems.length) return;
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setActiveItem(filteredItems[prevIdx]);
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (!filteredItems.length) return;
    const nextIdx = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setActiveItem(filteredItems[nextIdx]);
  }, [currentIndex, filteredItems]);

  // Lock body scroll and register keyboard controls (ESC, Left, Right)
  useEffect(() => {
    if (!activeItem) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, handlePrev, handleNext]);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#E8742C] selection:text-white">
      {/* Navigation */}
      <PortfoliteNav />

      {/* ── Editorial Header Section (NO BADGES) ── */}
      <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 border-b border-black/10 bg-[#FAF9F5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-[#E8742C] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <span className="text-black font-medium">Visual Gallery</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-3">
              Curated Portfolio Archive
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08] mb-4">
              Visual Gallery &amp; Production Showcase
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
              A curated visual archive of full-stack web platforms, corporate cinema films, enterprise software architectures, and high-conversion growth systems created in Sector 63, Noida.
            </p>
          </div>

          {/* Minimalist Category Filter Strip (NO PILL BADGES) */}
          <div className="mt-10 pt-8 border-t border-black/10 flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap pb-1.5 transition-colors cursor-pointer border-b-2 uppercase tracking-wider ${
                    active
                      ? 'text-black font-bold border-black'
                      : 'text-zinc-500 hover:text-black border-transparent font-medium'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Cards Grid (NO BADGES ON IMAGES) ── */}
      <section className="py-16 sm:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-black/10 overflow-hidden hover:border-black/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Pure Image Container (ABSOLUTELY ZERO BADGES / OVERLAYS ON IMAGE) */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-zinc-100 border-b border-black/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Details (Clean Typography) */}
                <div className="p-6">
                  {/* Category & Year Row */}
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-semibold text-[#E8742C] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-zinc-400 font-mono">
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-black group-hover:text-[#E8742C] transition-colors leading-snug mb-1">
                    {item.title}
                  </h3>

                  {/* Client */}
                  <p className="text-xs font-mono text-zinc-500 mb-3">
                    {item.client}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Key Deliverables Minimalist List */}
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-zinc-500 pt-3 border-t border-black/6">
                    {item.deliverables.slice(0, 3).map((d, i) => (
                      <span key={i}>
                        {d}{i < Math.min(item.deliverables.length - 1, 2) ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-mono">
                {item.stats ? (
                  <span className="text-emerald-700 font-medium">{item.stats}</span>
                ) : (
                  <span className="text-zinc-400">View Project</span>
                )}
                <span className="font-bold text-black group-hover:text-[#E8742C] inline-flex items-center gap-1 transition-colors">
                  <span>Inspect</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Interactive Modal for Deep Project Inspection (FIXED & HIGH-Z) ── */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-8 font-sans overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-black/15 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col z-10 text-black overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Header Bar with Prominent Navigation & Close Button */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-black/10 bg-[#FAF9F5]/98 backdrop-blur-md sticky top-0 z-30 shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
                  <span className="font-semibold text-[#E8742C] uppercase tracking-wider">
                    {activeItem.category}
                  </span>
                  <span className="text-zinc-300">·</span>
                  <span className="text-zinc-700 truncate max-w-[150px] sm:max-w-xs font-medium">{activeItem.client}</span>
                  <span className="text-zinc-300 hidden sm:inline">·</span>
                  <span className="text-zinc-400 hidden sm:inline font-mono">{activeItem.year}</span>
                </div>

                {/* Right controls: Prev / Next + High-Visibility Close Button */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="hidden sm:flex items-center border border-black/10 rounded-full overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-2.5 py-1 text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors flex items-center gap-1 text-xs font-mono cursor-pointer"
                      title="Previous project (Left Arrow)"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev</span>
                    </button>
                    <span className="w-px h-3.5 bg-black/10" />
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-2.5 py-1 text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors flex items-center gap-1 text-xs font-mono cursor-pointer"
                      title="Next project (Right Arrow)"
                      aria-label="Next project"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white hover:bg-[#E8742C] active:scale-95 flex items-center justify-center transition-all shadow-md cursor-pointer shrink-0"
                    aria-label="Close modal"
                    title="Close preview (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
                {/* Large Project Image Container */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 border border-black/10 shadow-sm">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>

                {/* Narrative & Details */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-black leading-tight">
                      {activeItem.title}
                    </h2>
                    {activeItem.stats && (
                      <span className="text-xs sm:text-sm font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 self-start sm:self-auto shrink-0">
                        {activeItem.stats}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid sm:grid-cols-2 gap-6 pt-5 border-t border-black/10">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 font-semibold">
                      Technical Deliverables
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-mono">
                      {activeItem.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8742C] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 font-semibold">
                      Production &amp; Engineering Pod
                    </h4>
                    <div className="space-y-2 text-xs sm:text-sm text-zinc-700 font-mono">
                      <p><strong className="text-black">Client:</strong> {activeItem.client}</p>
                      <p><strong className="text-black">Delivery Year:</strong> {activeItem.year}</p>
                      <p><strong className="text-black">Deployment:</strong> 100% In-House (Sector 63, Noida)</p>
                      <p><strong className="text-black">Handover:</strong> Complete IP &amp; Git Repository Handover</p>
                    </div>
                  </div>
                </div>

                {/* Action CTA Bar */}
                <div className="pt-6 border-t border-black/10 flex flex-wrap gap-3 items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-[#E8742C] text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Scope a Similar Project</span>
                    <ArrowRight size={14} />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="sm:hidden px-3 py-1.5 text-xs font-mono border border-black/15 rounded-lg text-zinc-700 hover:text-black cursor-pointer"
                    >
                      ← Prev
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="sm:hidden px-3 py-1.5 text-xs font-mono border border-black/15 rounded-lg text-zinc-700 hover:text-black cursor-pointer"
                    >
                      Next →
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveItem(null)}
                      className="text-xs font-mono text-zinc-500 hover:text-black px-3 py-1.5 cursor-pointer underline underline-offset-4"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Studio Consultation Strip ── */}
      <section className="py-16 sm:py-20 bg-zinc-950 text-white border-t border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8742C] mb-2">
              Studio &amp; Engineering Center
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Want to Review Full Project Source Code or Film Repertoire?
            </h3>
            <p className="mt-2 text-zinc-400 text-sm font-light leading-relaxed">
              Visit our headquarters at Rayos Business Park, Sector 63, Noida to review working prototypes, 4K color grading suites, and live telemetry dashboards.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shrink-0"
          >
            <span>Schedule Studio Visit</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <PortfoliteFooter />
    </div>
  );
}
