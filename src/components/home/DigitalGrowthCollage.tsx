'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  TrendingUp,
  Target,
  Sparkles,
  Search,
  CheckCircle2,
  Zap,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  Cpu,
} from 'lucide-react';

export default function DigitalGrowthCollage() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[430px] lg:max-w-[460px] mx-auto aspect-[4/5] min-h-[480px] sm:min-h-[540px] select-none flex items-center justify-center">
      {/* ======================================================== */}
      {/* 1. Ambient Solar & Amber Glow Pools in Background        */}
      {/* ======================================================== */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-amber-400/25 via-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-bl from-orange-400/20 via-amber-200/15 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Blueprint Crosshairs */}
      <div className="absolute top-2 left-2 text-zinc-300 font-mono text-[10px] hidden sm:block">
        + DEV // SEO // MKT
      </div>
      <div className="absolute top-2 right-2 text-zinc-300 font-mono text-[10px] hidden sm:block">
        [ARKA_LAB]
      </div>

      {/* ======================================================== */}
      {/* 2. CARD 1 (Top-Left): SOFTWARE DEVELOPMENT (Dark IDE)   */}
      {/* ======================================================== */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [-0.8, 0.4, -0.8],
        }}
        transition={{
          duration: 5.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2 sm:top-3 left-0 sm:-left-3 w-[86%] sm:w-[88%] z-20 rounded-2xl bg-[#0B0F19]/95 border border-zinc-800/90 p-3.5 sm:p-4 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.35),0_1px_2px_rgba(255,255,255,0.05)] backdrop-blur-xl"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-800/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 inline-block" />
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
            <Code2 className="w-3 h-3 text-solar" />
            <span>app/core/engine.tsx</span>
          </div>

          <span className="inline-flex items-center gap-1 text-[9px] font-mono font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Next.js 15
          </span>
        </div>

        {/* Code Content */}
        <div className="font-mono text-[10px] sm:text-[11px] leading-relaxed text-zinc-300 space-y-0.5">
          <p className="text-zinc-500">// Custom Software &amp; Scalable Architecture</p>
          <p>
            <span className="text-purple-400 font-semibold">export const</span>{' '}
            <span className="text-amber-300">EnterpriseApp</span> ={' '}
            <span className="text-purple-400">async</span> () =&gt; &#123;
          </p>
          <p className="pl-3 sm:pl-4">
            <span className="text-purple-400">const</span> system ={' '}
            <span className="text-purple-400">await</span>{' '}
            <span className="text-blue-400">deploy</span>(&#123;
          </p>
          <p className="pl-6 sm:pl-7 text-zinc-400">
            stack: <span className="text-emerald-300">&quot;React 19 + API&quot;</span>, latency:{' '}
            <span className="text-emerald-300">&quot;0.8ms&quot;</span>
          </p>
          <p className="pl-3 sm:pl-4">&#125;);</p>
          <p className="pl-3 sm:pl-4">
            <span className="text-purple-400">return</span> &lt;
            <span className="text-solar font-semibold">HighConcurrencyPortal</span> active /&gt;;
          </p>
          <p>&#125;;</p>
        </div>

        {/* Terminal Footer Pill */}
        <div className="mt-2.5 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Cpu className="w-3 h-3 text-solar" />
            <span>Software Development</span>
          </div>
          <span className="text-emerald-400 font-semibold">0 Error · 99.99%</span>
        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* 3. CARD 2 (Middle-Right): SEO OPTIMIZATION DOMINANCE     */}
      {/* ======================================================== */}
      <motion.div
        animate={{
          y: [6, -6, 6],
          rotate: [0.6, -0.6, 0.6],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
        className="absolute top-[34%] sm:top-[33%] right-0 sm:-right-3 w-[84%] sm:w-[86%] z-30 rounded-2xl bg-white/95 border border-zinc-200/90 p-3.5 sm:p-4 shadow-[0_22px_45px_-12px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl"
      >
        {/* Mock Search Bar Header */}
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-[10px] sm:text-[11px] text-zinc-600 mb-3">
          <Search className="w-3 h-3 text-solar shrink-0" />
          <span className="font-mono text-zinc-800 truncate font-medium">
            google.com/search?q=enterprise-technology
          </span>
          <span className="ml-auto px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-bold shrink-0">
            #1
          </span>
        </div>

        {/* SEO Dominance Headline & Stats */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-solar">
                Search Authority
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span className="text-[10px] font-mono text-zinc-500">Google SERP</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-950 font-display">
              SEO Optimization Services
            </h4>
          </div>

          <div className="text-right shrink-0">
            <div className="flex items-center gap-0.5 text-emerald-600 font-bold text-xs sm:text-sm">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+380%</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-400">Organic Traffic</span>
          </div>
        </div>

        {/* Upward Compounding SVG Trendline */}
        <div className="relative w-full h-11 sm:h-12 my-1 overflow-hidden rounded-lg bg-gradient-to-b from-orange-50/50 to-transparent p-1">
          <svg
            viewBox="0 0 280 50"
            className="w-full h-full stroke-solar fill-none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="seoGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8742C" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#E8742C" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Filled area */}
            <path
              d="M 0,45 Q 40,42 70,36 T 140,28 T 210,16 T 280,4 L 280,50 L 0,50 Z"
              fill="url(#seoGradient)"
            />
            {/* Trend line */}
            <path
              d="M 0,45 Q 40,42 70,36 T 140,28 T 210,16 T 280,4"
              stroke="#E8742C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Top Dot */}
            <circle cx="280" cy="4" r="3.5" fill="#E8742C" className="animate-ping" />
            <circle cx="280" cy="4" r="3" fill="#E8742C" />
          </svg>
        </div>

        {/* Metrics Pill Grid */}
        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-zinc-100 text-center">
          <div className="p-1 rounded-md bg-zinc-50 border border-zinc-100">
            <span className="block text-[9px] font-mono text-zinc-500">Rank</span>
            <span className="font-bold text-zinc-950 text-[11px]">Top 1-3</span>
          </div>
          <div className="p-1 rounded-md bg-zinc-50 border border-zinc-100">
            <span className="block text-[9px] font-mono text-zinc-500">Keywords</span>
            <span className="font-bold text-zinc-950 text-[11px]">18.4k+</span>
          </div>
          <div className="p-1 rounded-md bg-zinc-50 border border-zinc-100">
            <span className="block text-[9px] font-mono text-zinc-500">CWV Score</span>
            <span className="font-bold text-emerald-600 text-[11px]">100%</span>
          </div>
        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* 4. CARD 3 (Bottom-Left): DIGITAL MARKETING (ROAS Growth) */}
      {/* ======================================================== */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
        className="absolute bottom-2 sm:bottom-3 left-1 sm:left-0 w-[88%] sm:w-[90%] z-40 rounded-2xl bg-white/95 border border-zinc-200/90 p-3.5 sm:p-4 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.14),0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-solar shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-solar">
                Full-Funnel Acquisition
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-950 font-display">
                Digital Marketing &amp; Media
              </h4>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-solar/10 text-solar text-[10px] font-mono font-bold shrink-0">
            <Sparkles className="w-3 h-3" />
            Omnichannel
          </span>
        </div>

        {/* Conversion & ROAS Numbers */}
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-zinc-50 to-orange-50/30 border border-zinc-200/70">
            <div className="flex items-baseline justify-between">
              <span className="text-lg sm:text-2xl font-extrabold text-zinc-950 font-display tabular-nums">
                4.8x
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-600 flex items-center">
                <ArrowUpRight className="w-3 h-3" />
                +310%
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium text-zinc-600 block mt-0.5">
              Verified Ad ROAS
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-zinc-50 to-orange-50/30 border border-zinc-200/70">
            <div className="flex items-baseline justify-between">
              <span className="text-lg sm:text-2xl font-extrabold text-zinc-950 font-display tabular-nums">
                100+
              </span>
              <span className="text-[10px] font-mono font-bold text-solar">Verified</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium text-zinc-600 block mt-0.5">
              Client Testimonials
            </span>
          </div>
        </div>

        {/* Live Channel Badges */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[10px] font-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-800 font-medium">Google Ads</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-800 font-medium">Meta</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-800 font-medium">LinkedIn</span>
          </div>
          <span className="text-solar font-semibold">Live Attribution</span>
        </div>
      </motion.div>
    </div>
  );
}
