'use client';

import React, { useState } from 'react';
import Link from '@/components/Link';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Activity,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Award,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  slug: string;
  highlight: string;
  tag: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-design',
    name: 'Creative Websites Design',
    category: 'Digital Experience',
    slug: '/services/development',
    highlight: 'Next.js 15, headless architecture & interactive 3D web',
    tag: 'Next.js 15',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Full-Funnel Growth',
    slug: '/services/digital-marketing',
    highlight: 'Revenue attribution, performance media & omnichannel scaling',
    tag: 'Full Funnel',
  },
  {
    id: 'software-dev',
    name: 'Software Development',
    category: 'Custom Engineering',
    slug: '/services/crm-software',
    highlight: 'Custom enterprise CRM, ERP portals & high-throughput APIs',
    tag: 'Enterprise ERP',
  },
  {
    id: 'film-making',
    name: 'Corporate Film Making',
    category: 'Creative Production',
    slug: '/services/film-making',
    highlight: 'Cinematic brand documentaries, 4K product films & aerial cinema',
    tag: '4K Cinema',
  },
  {
    id: 'seo-services',
    name: 'SEO Optimization Services',
    category: 'Organic Authority',
    slug: '/services/seo-lead-generation',
    highlight: 'Schema.org entity graphs, Core Web Vitals & Top-3 rank dominance',
    tag: 'Top 3 SERP',
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    category: 'Editorial Systems',
    slug: '/services/content-marketing',
    highlight: 'Executive thought leadership, technical whitepapers & media assets',
    tag: 'Editorial Hub',
  },
  {
    id: 'google-ads',
    name: 'Google Ads Services',
    category: 'Paid Search & Media',
    slug: '/services/digital-advertising',
    highlight: 'High-intent search capture, smart bidding & programmatic display',
    tag: 'Smart Bidding',
  },
];

interface TelemetryMode {
  id: string;
  label: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  metric3: { value: string; label: string };
  badgeText: string;
  statusText: string;
}

const TELEMETRY_MODES: TelemetryMode[] = [
  {
    id: 'velocity',
    label: 'Launch Velocity',
    metric1: { value: '99.8%', label: 'On-Time Milestones' },
    metric2: { value: '+340%', label: 'Pipeline Acceleration' },
    metric3: { value: '< 400ms', label: 'Average Edge TTFB' },
    badgeText: 'HYPER-DRIVE',
    statusText: 'All Pods Active',
  },
  {
    id: 'conversion',
    label: 'Conversion Yield',
    metric1: { value: '4.8x', label: 'ROAS Multiple' },
    metric2: { value: '18.4%', label: 'Lead-to-Call Rate' },
    metric3: { value: '88.6%', label: 'Qualified Buyer Intent' },
    badgeText: 'MAX REVENUE',
    statusText: 'Attribution Live',
  },
  {
    id: 'scale',
    label: 'Enterprise Scale',
    metric1: { value: '850+', label: 'Commercial Deployments' },
    metric2: { value: '99.99%', label: 'High-Availability SLA' },
    metric3: { value: '17+ Yrs', label: 'Continuous Heritage' },
    badgeText: 'INDUSTRIAL',
    statusText: 'Zero-Downtime SLA',
  },
];

export default function DigitalGrowthShowcaseSection() {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const currentMode = TELEMETRY_MODES[activeModeIndex];

  return (
    <section
      id="digital-services-showcase"
      className="relative py-24 sm:py-32 font-framer bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden"
      aria-labelledby="services-showcase-heading"
    >
      {/* Background Architectural Blueprint / Subtle Grid Accents */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Solar Glow Pool (Light mode subtle warmth) */}
      <div
        className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/35 via-orange-200/20 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-amber-100/40 via-orange-100/20 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Modern Dribbble/Figma Rocket Launch Console */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-lg relative">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-solar/25 via-amber-500/20 to-orange-600/25 rounded-[32px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Card Surface */}
              <div className="relative rounded-[28px] bg-gradient-to-b from-white via-zinc-50/90 to-amber-50/30 border border-zinc-200/90 shadow-[0_25px_60px_-15px_rgba(232,116,44,0.12),0_10px_25px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden backdrop-blur-sm">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-200/70 pb-3.5 mb-5 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-semibold text-zinc-600 truncate">
                      {currentMode.statusText}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider text-solar bg-solar/10 border border-solar/20 flex-shrink-0">
                    <Sparkles className="w-3 h-3 text-solar" />
                    {currentMode.badgeText}
                  </span>
                </div>

                {/* Central Rocket Launch Visual Stage */}
                <div className="relative h-[320px] sm:h-[370px] w-full flex items-center justify-center overflow-visible">
                  
                  {/* Radar / Trajectory Rings Background */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                    viewBox="0 0 400 400"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="200" cy="200" r="175" stroke="#E8742C" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
                    <circle cx="200" cy="200" r="125" stroke="#71717A" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
                    <circle cx="200" cy="200" r="75" stroke="#E8742C" strokeWidth="1" opacity="0.2" />
                    {/* Trajectory vector arc */}
                    <path
                      d="M 60,340 Q 150,180 200,60"
                      stroke="url(#solarTrajectoryGradient)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="solarTrajectoryGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EA580C" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#E8742C" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* High-Fidelity Vector Rocket System */}
                  <div className="relative z-10 flex flex-col items-center select-none transform transition-transform duration-700 ease-out hover:scale-105">
                    
                    {/* SVG Rocket Fuselage & Wings */}
                    <svg
                      width="140"
                      height="195"
                      viewBox="0 0 150 210"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-[0_12px_24px_rgba(232,116,44,0.22)]"
                      aria-label="High-tech launch rocket illustration"
                    >
                      {/* Left Booster Wing */}
                      <path
                        d="M 38 120 C 38 120 18 135 15 168 C 15 174 25 174 34 166 L 45 152 Z"
                        fill="url(#wingGradientLeft)"
                        stroke="#09090B"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      {/* Right Booster Wing */}
                      <path
                        d="M 112 120 C 112 120 132 135 135 168 C 135 174 125 174 116 166 L 105 152 Z"
                        fill="url(#wingGradientRight)"
                        stroke="#09090B"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />

                      {/* Main Rocket Body Fuselage */}
                      <path
                        d="M 75 12 C 92 48 108 95 108 152 C 108 160 98 165 75 165 C 52 165 42 160 42 152 C 42 95 58 48 75 12 Z"
                        fill="url(#rocketBodyGradient)"
                        stroke="#09090B"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />

                      {/* Rocket Nose Cone Cap */}
                      <path
                        d="M 75 12 C 82 28 89 45 93 62 L 57 62 C 61 45 68 28 75 12 Z"
                        fill="url(#noseConeGradient)"
                        stroke="#09090B"
                        strokeWidth="2"
                      />

                      {/* Aerodynamic Center Fin */}
                      <path
                        d="M 73 118 L 77 118 L 78 168 L 72 168 Z"
                        fill="#09090B"
                      />

                      {/* Cockpit / Telemetry Portal Glass Ring */}
                      <circle
                        cx="75"
                        cy="92"
                        r="17"
                        fill="#09090B"
                        stroke="#E8742C"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="75"
                        cy="92"
                        r="12"
                        fill="url(#portalGlassGradient)"
                      />
                      {/* Portal Specular Highlight */}
                      <ellipse
                        cx="72"
                        cy="88"
                        rx="5"
                        ry="3"
                        transform="rotate(-30 72 88)"
                        fill="white"
                        opacity="0.8"
                      />

                      {/* Engine Exhaust Nozzle */}
                      <path
                        d="M 60 165 L 90 165 L 94 176 L 56 176 Z"
                        fill="#27272A"
                        stroke="#09090B"
                        strokeWidth="2"
                      />

                      {/* Gradient Definitions */}
                      <defs>
                        <linearGradient id="rocketBodyGradient" x1="42" y1="88" x2="108" y2="88" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="35%" stopColor="#F4F4F5" />
                          <stop offset="70%" stopColor="#E4E4E7" />
                          <stop offset="100%" stopColor="#D4D4D8" />
                        </linearGradient>
                        <linearGradient id="noseConeGradient" x1="57" y1="37" x2="93" y2="37" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#E8742C" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#EA580C" />
                        </linearGradient>
                        <linearGradient id="wingGradientLeft" x1="15" y1="145" x2="45" y2="145" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#EA580C" />
                          <stop offset="100%" stopColor="#E8742C" />
                        </linearGradient>
                        <linearGradient id="wingGradientRight" x1="105" y1="145" x2="135" y2="145" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#E8742C" />
                          <stop offset="100%" stopColor="#EA580C" />
                        </linearGradient>
                        <linearGradient id="portalGlassGradient" x1="63" y1="80" x2="87" y2="104" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="40%" stopColor="#0284C7" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Animated Solar Propulsion Fire Plume */}
                    <div className="relative -mt-3 flex flex-col items-center">
                      <svg
                        width="76"
                        height="90"
                        viewBox="0 0 80 95"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="animate-pulse"
                      >
                        {/* Outer Flame Plume */}
                        <path
                          d="M 22 0 C 15 25 5 45 14 75 C 22 95 38 95 40 95 C 42 95 58 95 66 75 C 75 45 65 25 58 0 Z"
                          fill="url(#outerFlameGradient)"
                          opacity="0.9"
                        />
                        {/* Core White-Hot Flame */}
                        <path
                          d="M 29 0 C 24 18 19 35 25 55 C 30 70 39 72 40 72 C 41 72 50 70 55 55 C 61 35 56 18 51 0 Z"
                          fill="url(#coreFlameGradient)"
                        />
                        <defs>
                          <linearGradient id="outerFlameGradient" x1="40" y1="0" x2="40" y2="95" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#FDE047" />
                            <stop offset="25%" stopColor="#F59E0B" />
                            <stop offset="65%" stopColor="#EA580C" />
                            <stop offset="100%" stopColor="#E8742C" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="coreFlameGradient" x1="40" y1="0" x2="40" y2="72" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="40%" stopColor="#FEF08A" />
                            <stop offset="85%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Cloud Smoke Billows at Base */}
                      <div className="flex items-center justify-center -mt-6 gap-1 opacity-70">
                        <span className="w-10 h-6 bg-zinc-200/90 rounded-full blur-[2px]" />
                        <span className="w-14 h-8 bg-amber-100/80 rounded-full blur-[3px]" />
                        <span className="w-10 h-6 bg-zinc-200/90 rounded-full blur-[2px]" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Glassmorphic Telemetry Chips */}
                  
                  {/* Top-Left Chip: ROAS / Conversion Speed */}
                  <div
                    className="absolute top-2 left-0 sm:-left-3 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-solar flex-shrink-0">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] sm:text-[10px] font-mono uppercase text-zinc-500 font-semibold tracking-wider">
                        Growth Yield
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight font-framer truncate">
                        {currentMode.metric2.value}{' '}
                        <span className="text-[10px] font-normal text-zinc-500 hidden sm:inline">
                          {currentMode.metric2.label.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top-Right Chip: Core Web Vitals / Speed */}
                  <div
                    className="absolute top-6 right-0 sm:-right-3 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-mono uppercase text-zinc-500 font-semibold tracking-wider">
                        Core Vitals
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight font-framer">
                        {currentMode.metric1.value}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Chip: Active Inquiries / Qualified Pipeline */}
                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.06)] px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 whitespace-nowrap max-w-[90%]"
                  >
                    <Activity className="w-3 h-3 text-solar animate-pulse flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs font-semibold text-zinc-800 truncate">
                      {currentMode.metric3.value} {currentMode.metric3.label}
                    </span>
                  </div>
                </div>

                {/* Interactive Telemetry Lens Controller (Figma / Dribbble Style) */}
                <div className="mt-4 pt-4 border-t border-zinc-200/70">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2.5 flex items-center justify-between">
                    <span>Telemetry Mode</span>
                    <span className="text-solar font-bold">{currentMode.label}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-zinc-100/90 rounded-xl border border-zinc-200/80">
                    {TELEMETRY_MODES.map((mode, idx) => {
                      const isActive = activeModeIndex === idx;
                      const shortLabels = ['Launch', 'Yield', 'Scale'];
                      return (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => setActiveModeIndex(idx)}
                          className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                            isActive
                              ? 'bg-white text-black font-semibold shadow-sm border border-black/5'
                              : 'text-zinc-500 hover:text-black hover:bg-white/50'
                          }`}
                        >
                          {shortLabels[idx]}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Editorial Content, 7 Capabilities & Stats  */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-solar/10 border border-solar/25 text-solar text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
              <span>About ARKA Technovation</span>
            </div>

            {/* Editorial Heading */}
            <h2
              id="services-showcase-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Check out what{' '}
              <span className="relative inline-block text-zinc-900">
                digital marketing
                <span
                  className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-solar via-amber-500 to-orange-600 rounded-full"
                  aria-hidden="true"
                />
              </span>{' '}
              &amp; technology services we engineer!
            </h2>

            {/* Strategic Mission Paragraph */}
            <p
              className="mt-6 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
              style={{ textWrap: 'pretty' }}
            >
              <strong className="font-semibold text-black">ARKA Technovation</strong> is dedicated to helping forward-thinking enterprises and ambitious challenger brands augment their digital infrastructure, scale qualified commercial pipeline, and build unassailable market advantage through integrated engineering, search authority, and performance marketing ecosystems.
            </p>

            {/* 7 Capabilities Interactive List (Matching user reference) */}
            <div className="mt-8 w-full">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-solar" />
                <span>Core Capabilities &amp; Execution Verticals</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {SERVICES_LIST.map((srv) => {
                  const isHovered = hoveredService === srv.id;
                  return (
                    <Link
                      key={srv.id}
                      href={srv.slug}
                      onMouseEnter={() => setHoveredService(srv.id)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`group relative flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 ${
                        isHovered
                          ? 'bg-white border-solar/40 shadow-sm translate-x-1'
                          : 'bg-white/70 hover:bg-white border-zinc-200/80 hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        {/* Double Arrow Chevron Accent (matching reference » mark with solar flair) */}
                        <div className="flex items-center text-solar group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                          <ChevronRight className="w-3.5 h-3.5 -mr-2" strokeWidth={3} />
                          <ChevronRight className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>

                        <div className="truncate">
                          <span className="text-sm font-semibold text-zinc-900 group-hover:text-solar transition-colors block truncate">
                            {srv.name}
                          </span>
                          <span className="text-[11px] text-zinc-500 block truncate font-light">
                            {srv.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Tech Tag Pill */}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200 flex-shrink-0 group-hover:bg-solar/10 group-hover:text-solar group-hover:border-solar/20 transition-colors">
                        {srv.tag}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 3 Core Performance Metrics (6256, 12000, 1220 from Reference) */}
            <div className="mt-10 w-full pt-8 border-t border-zinc-200/90">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                
                {/* Stat 1: 6256 Projects Executed */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      6,256
                    </span>
                    <span className="text-solar font-bold text-xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700 mt-1">
                    Projects Executed
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light hidden sm:inline-block">
                    Web, ERP &amp; media deliverables
                  </span>
                </div>

                {/* Stat 2: 12000 Calls & Inbound Inquiries */}
                <div className="flex flex-col border-l border-zinc-200/80 pl-4 sm:pl-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      12,000
                    </span>
                    <span className="text-solar font-bold text-xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700 mt-1">
                    Calls Generated
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light hidden sm:inline-block">
                    High-intent qualified inbound
                  </span>
                </div>

                {/* Stat 3: 1220 Client Testimonials */}
                <div className="flex flex-col border-l border-zinc-200/80 pl-4 sm:pl-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-zinc-950 tracking-tight tabular-nums font-framer">
                      1,220
                    </span>
                    <span className="text-solar font-bold text-xl">+</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700 mt-1">
                    Client Testimonials
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light hidden sm:inline-block">
                    Verified enterprise reviews
                  </span>
                </div>

              </div>
            </div>

            {/* CTA Buttons (Let's Connect + Learn More) */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Primary CTA: Let's Connect */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-solar via-orange-600 to-amber-600 text-white font-semibold text-sm shadow-[0_8px_20px_rgba(232,116,44,0.28)] hover:shadow-[0_12px_28px_rgba(232,116,44,0.38)] hover:brightness-105 active:scale-[0.98] transition-all group"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Learn More */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-900 border border-zinc-300 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 active:scale-[0.98] transition-all shadow-sm group"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
