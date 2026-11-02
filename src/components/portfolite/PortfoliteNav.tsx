'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/Link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Search,
  Layers,
  Zap,
  Target,
  Crosshair,
  Share2,
  Star,
  Database,
  Code2,
  GitBranch,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  Film,
  Sparkles,
  Layout,
  Rocket,
  BarChart3,
  FileText,
  SlidersHorizontal,
  PieChart,
  Globe,
  ShieldCheck,
  RefreshCw,
  PhoneCall,
  GitMerge,
  Workflow,
  Award,
  Compass,
  Users,
  Briefcase,
  HeartHandshake,
  ArrowUpRight,
  Newspaper,
} from 'lucide-react';
import { NAV, COMPANY } from '../../lib/data';

const getNavIcon = (label: string) => {
  switch (label) {
    case 'Organic Search & SEO': return Search;
    case 'Enterprise SEO Services': return Layers;
    case 'Local SEO & Google Guarantee': return MapPin;
    case 'Page Speed & Core Web Vitals': return Zap;
    case 'PPC Management Services': return Target;
    case 'Competitor & Addressable Geofencing': return Crosshair;
    case 'Social Media Advertising': return Share2;
    case 'Online Review Acceleration': return Star;
    case 'CRM Software & SaaS': return Database;
    case 'ERP Enterprise Solutions': return Layers;
    case 'Website Development': return Code2;
    case 'Lead Management Systems (LMS)': return GitBranch;
    case 'Mobile Application Development': return Smartphone;
    case 'Digital Marketing & Growth': return TrendingUp;
    case 'Search Engine Optimization': return Search;
    case 'E-Commerce Development & SEO': return ShoppingBag;
    case 'Corporate World News': return Newspaper;
    case 'Corporate Film Making': return Film;
    case 'Content Marketing & Motion': return Sparkles;
    case 'UI/UX & Interactive Design': return Layout;
    case 'UI/UX Design & Architecture': return Layout;
    case 'UX Website Design & Redesign': return Layout;
    case 'High-Converting Landing Pages': return Rocket;
    case 'Conversion Rate Optimization (CRO)': return BarChart3;
    case 'Content Marketing & SEO Copy': return FileText;
    case 'Personalized Web Content': return SlidersHorizontal;
    case 'Infographics & Motion Graphics': return PieChart;
    case 'Digital Experience Development': return Globe;
    case 'ADA Compliance & Accessibility': return ShieldCheck;
    case 'ADA Web Compliance Services': return ShieldCheck;
    case 'Revenue Acceleration Platform': return Zap;
    case 'Customer Data Platform (CDP)': return Database;
    case 'CRM Retargeting & ETL Pipelines': return RefreshCw;
    case 'Web Channel Call Tracking': return PhoneCall;
    case 'Channel Partner Pipeline': return GitMerge;
    case 'Marketing Automation & ABM': return Workflow;
    case 'Our Story & Heritage': return Award;
    case 'Working Methodology': return Compass;
    case 'Leadership & Specialist Pods': return Users;
    case 'Why ARKA Technovation': return ShieldCheck;
    case 'Featured Client Work': return Briefcase;
    case 'Careers at ARKA': return HeartHandshake;
    default: return ArrowUpRight;
  }
};

const contentVariants: Variants = {
  enter: (dir: number) => ({
    x: dir === 0 ? 0 : dir > 0 ? 28 : -28,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 380, damping: 32 },
      opacity: { duration: 0.18 },
    },
  },
  exit: (dir: number) => ({
    x: dir === 0 ? 0 : dir > 0 ? -28 : 28,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 380, damping: 32 },
      opacity: { duration: 0.14 },
    },
  }),
};

export default function PortfoliteNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [prevOpen, setPrevOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [solid, setSolid] = useState(false);
  const [mobGroup, setMobGroup] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const pathname = usePathname() || '/';

  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});
  const [coords, setCoords] = useState<{ left: number; width: number }>({
    left: 0,
    width: 710,
  });

  const calculateCoords = (label: string) => {
    const navEl = navRef.current;
    const itemEl = itemRefs.current[label];
    if (!navEl || !itemEl) return;

    const navRect = navEl.getBoundingClientRect();
    const itemRect = itemEl.getBoundingClientRect();

    const itemCenter = itemRect.left - navRect.left + itemRect.width / 2;

    const targetWidth =
      label === 'Services'
        ? 710
        : label === 'About Us'
        ? 580
        : 560;

    const idealLeft = itemCenter - targetWidth / 2;
    const padding = 12;
    const minLeft = -padding;
    const maxLeft = navRect.width - targetWidth + padding;
    const clampedLeft = Math.max(minLeft, Math.min(idealLeft, maxLeft));

    setCoords({
      left: clampedLeft,
      width: targetWidth,
    });
  };

  // Throttled scroll listener to avoid redundant re-renders (120 FPS optimized)
  useEffect(() => {
    let prevSolid = false;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
          const nextSolid = window.scrollY > 35;
          if (nextSolid !== prevSolid) {
            prevSolid = nextSolid;
            setSolid(nextSolid);
          }
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobile]);

  const enter = (k: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPrevOpen(open);
    setOpen(k);
    calculateCoords(k);
  };

  const leave = () => {
    closeTimer.current = window.setTimeout(() => {
      setOpen(null);
      setPrevOpen(null);
    }, 180);
  };

  useEffect(() => {
    const handleResize = () => {
      if (open) calculateCoords(open);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  // Consistent high-contrast frosted glass navigation across the entire site
  const isHome = pathname === '/';
  const isOverHero = false;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[900] font-sans">
        {/* Hardware-accelerated glassmorphic solid background layer */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            isOverHero ? 'opacity-0' : 'opacity-100'
          } bg-white/95 backdrop-blur-md border-b border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)]`}
        />
        {/* Transparent hero boundary line */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 pointer-events-none border-b transition-opacity duration-300 ${
            isOverHero ? 'opacity-100 border-white/10' : 'opacity-0 border-transparent'
          }`}
        />

        <div className="relative z-10">
          {/* ── Utility Strip (Offices + Contact, collapses smoothly on scroll) ── */}
          <div
            className="hidden lg:block overflow-hidden transition-[height,opacity] duration-300 ease-out"
            style={{
              height: solid ? 0 : 36,
              opacity: solid ? 0 : 1,
            }}
          >
            <div
              className={`xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 h-9 flex items-center justify-between font-mono text-[9.5px] tracking-[0.08em] uppercase border-b transition-colors duration-300 ${
                isOverHero ? 'text-white border-white/15' : 'text-zinc-500 border-black/[0.06]'
              }`}
            >
              <span className="flex items-center gap-2 min-w-0 pr-4">
                <MapPin className={`h-3 w-3 shrink-0 ${isOverHero ? 'text-white' : 'text-solar'}`} />
                <span className="truncate">Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India</span>
              </span>
              <span className="flex items-center gap-6 shrink-0">
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                  className={`flex items-center gap-1.5 transition-colors ${
                    isOverHero ? 'hover:text-white/80' : 'hover:text-solar'
                  }`}
                >
                  <Phone className="h-3 w-3" />
                  <span>{COMPANY.phones[0]}</span>
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className={`flex items-center gap-1.5 transition-colors ${
                    isOverHero ? 'hover:text-white/80' : 'hover:text-solar'
                  }`}
                >
                  <Mail className="h-3 w-3" />
                  <span>{COMPANY.email}</span>
                </a>
              </span>
            </div>
          </div>

          {/* ── Main Edge-to-Edge Navigation Bar ── */}
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 h-[70px] sm:h-[78px] flex items-center justify-between gap-2 lg:gap-4 xl:gap-6">
            {/* Official ARKA Technovation Logo: Zero-lag preloaded crossfade between white and black logos */}
            <Link to="/" className="relative flex items-center group cursor-pointer shrink-0 py-1" aria-label="ARKA Technovation Private Limited Home">
              <div className="relative h-10 sm:h-12 lg:h-[46px] w-[150px] sm:w-[175px] lg:w-[190px] xl:w-[215px]">
                <img
                  src="/images/logo/arka-logo-white.webp"
                  alt="ARKA Technovation Private Limited"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  width={215}
                  height={46}
                  className={`absolute inset-0 h-full w-auto max-w-full object-contain transition-opacity duration-300 group-hover:scale-105 ${
                    isOverHero ? 'opacity-100 drop-shadow-[0_0_14px_rgba(255,255,255,0.4)]' : 'opacity-0 pointer-events-none'
                  }`}
                />
                <img
                  src="/images/logo/arka-logo-black.webp"
                  alt="ARKA Technovation Private Limited"
                  loading="lazy"
                  decoding="async"
                  width={215}
                  height={46}
                  className={`absolute inset-0 h-full w-auto max-w-full object-contain transition-opacity duration-300 group-hover:scale-105 ${
                    isOverHero ? 'opacity-0 pointer-events-none' : 'opacity-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]'
                  }`}
                />
              </div>
            </Link>

          {/* Desktop Navigation Links with Full Height & Underline Indicator */}
          <nav
            ref={navRef}
            className="relative hidden lg:flex items-center h-full min-w-0"
            style={{ color: isOverHero ? '#ffffff' : undefined }}
            onMouseLeave={leave}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setOpen(null);
            }}
          >
            {NAV.filter((item) => !item.hideOnDesktop).map((item) => {
              const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
              const isOpen = open === item.label;

              return (
                <div
                  key={item.label}
                  ref={(el) => {
                    itemRefs.current[item.label] = el;
                  }}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.children && enter(item.label)}
                  onFocus={() => item.children && enter(item.label)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) leave();
                  }}
                >
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    aria-haspopup={item.children ? true : undefined}
                    aria-expanded={item.children ? isOpen : undefined}
                    className={`group relative h-full flex items-center gap-1.5 px-2.5 xl:px-3.5 text-xs xl:text-[13px] 2xl:text-sm tracking-[-0.01em] font-medium transition-colors duration-200 whitespace-nowrap ${
                      isOverHero
                        ? active
                          ? 'text-white font-semibold'
                          : 'text-white hover:text-white/80'
                        : active
                        ? 'text-solar font-semibold'
                        : 'text-zinc-700 hover:text-black'
                    }`}
                  >
                    <span>
                      {item.shortLabel ? (
                        <>
                          <span className="hidden xl:inline">{item.label}</span>
                          <span className="xl:hidden">{item.shortLabel}</span>
                        </>
                      ) : (
                        item.label
                      )}
                    </span>
                    {item.children && (
                      <ChevronDown
                        style={{ color: isOverHero ? '#ffffff' : undefined }}
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        } ${isOverHero ? 'text-white' : isOpen ? 'text-solar' : 'text-zinc-400 group-hover:text-black'}`}
                      />
                    )}
                    <span
                      style={{
                        backgroundColor: isOverHero ? '#ffffff' : undefined,
                        boxShadow: isOverHero ? '0 0 10px rgba(255,255,255,0.9)' : undefined,
                      }}
                      className={`absolute bottom-0 left-2 right-2 h-0.5 origin-left transition-transform duration-300 ${
                        isOverHero ? 'bg-white' : 'bg-solar'
                      } ${active ? 'scale-x-100' : 'scale-x-0'}`}
                    />
                  </Link>
                </div>
              );
            })}

            {/* ── Stripe-Style Morphing Floating Dropdown ── */}
            {(() => {
              const desktopNav = NAV.filter((item) => !item.hideOnDesktop);
              const navWithChildren = desktopNav.filter((item) => Boolean(item.children));
              const prevIdx = navWithChildren.findIndex((i) => i.label === prevOpen);
              const curIdx = navWithChildren.findIndex((i) => i.label === open);
              const direction = prevIdx !== -1 && curIdx !== -1 ? (curIdx > prevIdx ? 1 : -1) : 0;
              const activeNav = navWithChildren.find((i) => i.label === open);

              return (
                <AnimatePresence>
                  {open && activeNav && (
                    <motion.div
                      key="stripe-dropdown-panel"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        x: coords.left,
                      }}
                      exit={{
                        opacity: 0,
                        y: 6,
                        scale: 0.98,
                        transition: { duration: 0.16 },
                      }}
                      transition={{
                        x: { type: 'spring', stiffness: 380, damping: 34 },
                        opacity: { duration: 0.18 },
                        scale: { duration: 0.18 },
                        y: { duration: 0.18 },
                      }}
                      className="absolute top-full pt-2 z-50 pointer-events-auto"
                      style={{ left: 0 }}
                      onMouseEnter={() => {
                        if (closeTimer.current) window.clearTimeout(closeTimer.current);
                      }}
                      onMouseLeave={leave}
                    >
                      {/* Invisible hover bridge to eliminate gaps between navbar and panel */}
                      <div className="absolute -top-3.5 inset-x-0 h-4 pointer-events-auto" />

                      {/* Morphing Background Card */}
                      <motion.div
                        animate={{ width: coords.width }}
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                        className="relative z-20 overflow-hidden bg-white/98 backdrop-blur-2xl border border-black/10 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.18),0_0_1px_1px_rgba(0,0,0,0.06)] rounded-2xl text-black"
                      >
                        {/* Direction-Aware Crossfading Content Pane */}
                        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                          <motion.div
                            key={activeNav.label}
                            custom={direction}
                            variants={contentVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full"
                          >
                            {(() => {
                              const half = Math.ceil(activeNav.children!.length / 2);
                              const col1 = activeNav.children!.slice(0, half);
                              const col2 = activeNav.children!.slice(half);

                              return (
                                <>
                                  <div className="p-3.5 sm:p-4">
                                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                                      <div className="space-y-1">
                                        {col1.map((c) => (
                                          <DropLink key={c.to} c={c} onGo={() => setOpen(null)} />
                                        ))}
                                      </div>
                                      <div className="space-y-1">
                                        {col2.map((c) => (
                                          <DropLink key={c.to} c={c} onGo={() => setOpen(null)} />
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Stripe Tinted Bottom Bar */}
                                  <div className="border-t border-black/[0.06] px-5 py-2.5 flex items-center justify-end bg-zinc-50/80">
                                    <Link
                                      to={activeNav.to}
                                      onClick={() => setOpen(null)}
                                      className="font-sans text-xs tracking-[-0.01em] text-solar hover:text-[#c65a19] inline-flex items-center gap-1.5 font-semibold transition-colors group"
                                    >
                                      <span>Explore all {activeNav.label}</span>
                                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                  </div>
                                </>
                              );
                            })()}
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })()}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className={`site-button hidden sm:inline-flex font-sans text-xs tracking-[0.06em] uppercase h-[36px] px-4 xl:px-5 items-center gap-2 rounded-full font-semibold shadow-sm group transition-all duration-300 whitespace-nowrap shrink-0 ${
                isOverHero
                  ? 'bg-white !text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-black !text-white hover:bg-zinc-800 shadow-[0_2px_10px_rgba(0,0,0,0.18)]'
              }`}
              style={{
                color: isOverHero ? '#000000' : '#FFFFFF',
                backgroundColor: isOverHero ? '#FFFFFF' : '#000000',
              }}
            >
              <span
                className={isOverHero ? '!text-black' : '!text-white'}
                style={{ color: isOverHero ? '#000000' : '#FFFFFF' }}
              >
                Start a project
              </span>
              <CircleArrow
                size={14}
                className={`shrink-0 group-hover:rotate-45 transition-transform duration-300 ${
                  isOverHero ? '!text-black' : '!text-white'
                }`}
                style={{
                  color: isOverHero ? '#000000' : '#FFFFFF',
                  stroke: isOverHero ? '#000000' : '#FFFFFF',
                }}
              />
            </Link>

            <button
              onClick={() => {
                setMobile(true);
                setMobGroup(null);
              }}
              className={`lg:hidden grid h-11 w-11 place-items-center rounded-lg border transition-colors ${
                isOverHero
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-black/15 text-zinc-800 hover:text-black hover:bg-black/5'
              }`}
              aria-label="Open menu"
              aria-expanded={mobile}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* ── Mobile Slide-in Drawer ── */}
      <AnimatePresence>
        {mobile && (
          <>
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[940] lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              id="mobile-navigation"
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white/98 backdrop-blur-2xl z-[950] border-l border-black/[0.08] shadow-2xl flex flex-col lg:hidden text-black font-sans"
            >
              <div className="h-[70px] sm:h-[80px] px-5 flex items-center justify-between border-b border-black/8">
                <Link to="/" onClick={() => setMobile(false)} className="flex items-center" aria-label="ARKA Technovation Private Limited">
                  <img
                    src="/images/logo/arka-logo-black.webp"
                    alt="ARKA Technovation Private Limited"
                    loading="lazy"
                    decoding="async"
                    width={240}
                    height={48}
                    className="h-11 sm:h-13 w-auto max-w-[240px] object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobile(false)}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-black/15 text-zinc-700 hover:text-black hover:bg-black/5"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
                {NAV.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isGroupOpen = mobGroup === item.label;
                  const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);

                  return (
                    <div key={item.label} className="border-b border-black/6 pb-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.to}
                          onClick={() => {
                            if (!hasChildren) setMobile(false);
                          }}
                          className={`flex-1 py-3.5 px-3 font-medium text-base tracking-[-0.015em] transition-colors flex items-center gap-2 ${
                            active ? 'text-solar' : 'text-zinc-900 hover:text-solar'
                          }`}
                          aria-current={active ? 'page' : undefined}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="font-mono text-[9px] px-1.5 py-0.2 rounded-full bg-solar/15 text-solar border border-solar/25 font-semibold">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                        {hasChildren && (
                          <button
                            onClick={() => setMobGroup(isGroupOpen ? null : item.label)}
                            className="p-3 text-zinc-500 hover:text-black"
                            aria-label={`Toggle ${item.label}`}
                            aria-expanded={isGroupOpen}
                            aria-controls={isGroupOpen ? `mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}` : undefined}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isGroupOpen ? 'rotate-180 text-solar' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {hasChildren && isGroupOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            id={`mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                            className="overflow-hidden pl-4 pr-2 pb-2 space-y-1 bg-zinc-50/70 rounded-xl"
                          >
                            {item.children!.map((c) => (
                              <Link
                                key={c.to}
                                to={c.to}
                                onClick={() => setMobile(false)}
                                className="block py-2 px-3 text-sm tracking-[-0.01em] text-zinc-800 hover:text-solar transition-colors rounded-lg hover:bg-white font-medium"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="p-5 border-t border-black/8 space-y-3 bg-zinc-50/50">
                <Link
                  to="/contact"
                  onClick={() => setMobile(false)}
                  className="site-button w-full h-[44px] rounded-full bg-black !text-white hover:bg-zinc-800 transition-colors font-sans text-xs tracking-[0.08em] uppercase font-semibold flex items-center justify-center gap-2 shadow-sm"
                  style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
                >
                  <span style={{ color: '#FFFFFF' }}>Start a project</span>
                  <CircleArrow size={14} className="!text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
                </Link>
                <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-zinc-500 space-y-1 text-center">
                  <p>{COMPANY.phones[0]}</p>
                  <p>{COMPANY.email}</p>
                  <p>Rayos Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function DropLink({
  c,
  onGo,
}: {
  c: { label: string; to: string; note?: string };
  onGo: () => void;
}) {
  const Icon = getNavIcon(c.label);

  return (
    <Link
      to={c.to}
      onClick={onGo}
      className="group flex items-center justify-between gap-2.5 p-2 rounded-xl hover:bg-zinc-100/80 focus-visible:bg-zinc-100/80 transition-all duration-150"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-zinc-100/90 border border-black/5 group-hover:bg-solar/15 group-hover:border-solar/30 text-zinc-700 group-hover:text-solar flex items-center justify-center transition-all duration-200 shrink-0">
          <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
        </div>
        <span className="text-[13px] xl:text-[13.5px] font-semibold text-zinc-900 group-hover:text-solar transition-colors truncate">
          {c.label}
        </span>
      </div>
      <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-solar group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
    </Link>
  );
}

// Inline CircleArrow icon for precision styling
function CircleArrow({
  size = 16,
  className = '',
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 50 50"
      width={size}
      height={size}
      style={{ ...style, fill: 'none' }}
      className={`fill-none stroke-current shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="25" cy="25" r="24" strokeWidth="2.5" style={{ fill: 'none' }} />
      <g transform="rotate(-45 25 25) translate(7 10)">
        <path d="M 9 15 L 27.45 15" strokeWidth="2.5" style={{ fill: 'none' }} />
        <path d="M 27 15 L 21 9" strokeWidth="2.5" style={{ fill: 'none' }} />
        <path d="M 27 15 L 21 21" strokeWidth="2.5" style={{ fill: 'none' }} />
      </g>
    </svg>
  );
}
