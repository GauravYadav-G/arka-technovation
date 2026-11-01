'use client';

import { useState, useEffect } from 'react';
import Link from '@/components/Link';
import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, MapPin, Sparkles, Palette } from 'lucide-react';
import { SERVICES, COMPANY, OFFICES } from '../../lib/data';
import { CircleArrow } from '../ui';
import { PRESETS, PRESET_NAMES, PRESET_ACCENTS } from '../LiquidBackground';

/* ─────────────────────────────────────────────────────────────
   BOTTOM THEME TESTER COMPONENT
   Default theme: Solar Fire (0)
   Allows interactive testing of all 12 fluid WebGL palettes
   ───────────────────────────────────────────────────────────── */
function ThemeTesterButton() {
  const [currentPreset, setCurrentPreset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arka-hero-theme');
      if (saved !== null) {
        const idx = parseInt(saved, 10);
        if (!isNaN(idx) && idx >= 0 && idx < PRESETS.length) {
          setCurrentPreset(idx);
        }
      }

      const handleThemeChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ index: number }>;
        if (typeof customEvent.detail?.index === 'number') {
          setCurrentPreset(customEvent.detail.index);
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        // Toggle theme tester visibility with Shift + 0
        if (e.shiftKey && (e.key === '0' || e.code === 'Digit0' || e.code === 'Numpad0' || e.key === ')')) {
          e.preventDefault();
          setIsVisible((prev) => !prev);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('arka:theme-change', handleThemeChange);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('arka:theme-change', handleThemeChange);
      };
    }
  }, []);

  if (!isVisible) return null;

  const selectTheme = (index: number) => {
    setCurrentPreset(index);
    if (typeof window !== 'undefined') {
      localStorage.setItem('arka-hero-theme', String(index));
      window.dispatchEvent(new CustomEvent('arka:theme-change', { detail: { index } }));
    }
  };

  const nextTheme = () => {
    const next = (currentPreset + 1) % PRESETS.length;
    selectTheme(next);
  };

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative inline-flex items-center gap-2">
      {/* Quick Test Theme Swatch Icon Button — No text, icon itself is button */}
      <button
        type="button"
        onClick={nextTheme}
        className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 border border-black/15 hover:border-black/30 flex items-center justify-center transition-all cursor-pointer group shadow-sm"
        title={`Fluid theme: ${PRESET_NAMES[currentPreset]} (Click to test next)`}
        aria-label="Cycle theme"
      >
        <span
          className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor] transition-colors group-hover:scale-110"
          style={{ backgroundColor: PRESET_ACCENTS[currentPreset] }}
        />
      </button>

      {/* Palette Tray Trigger Icon Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 border border-black/15 hover:border-black/30 flex items-center justify-center text-zinc-600 hover:text-black transition-colors cursor-pointer"
        title="Open theme palette"
        aria-label="Toggle theme picker tray"
      >
        <Palette className="w-3.5 h-3.5" />
      </button>

      {/* Popover Tray with All 12 Themes */}
      {isOpen && (
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[340px] p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200 shadow-2xl z-50 text-left text-zinc-900">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold">
              Test Fluid Themes ({PRESETS.length})
            </span>
            <button
              type="button"
              onClick={() => selectTheme(0)}
              className="text-[10px] font-mono text-solar hover:underline cursor-pointer"
            >
              Reset to Solar Fire
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 max-h-[220px] overflow-y-auto pr-1">
            {PRESET_NAMES.map((name, idx) => {
              const isSelected = idx === currentPreset;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => {
                    selectTheme(idx);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-solar/15 text-zinc-900 border border-solar/40 font-semibold'
                      : 'hover:bg-zinc-100 text-zinc-700 hover:text-black border border-transparent'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: PRESET_ACCENTS[idx] }}
                  />
                  <span className="truncate text-[11px]">{name}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>Defaults to Solar Fire</span>
            <button
              type="button"
              onClick={scrollToHero}
              className="text-solar hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Scroll to Hero</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfoliteFooter() {
  const serviceList = SERVICES.slice(0, 7);

  const socials = [
    { label: 'FB', href: '#' },
    { label: 'IN', href: 'https://linkedin.com' },
    { label: 'YT', href: 'https://youtube.com' },
    { label: 'X', href: 'https://x.com' },
    { label: 'IG', href: 'https://instagram.com' },
  ];

  return (
    <footer className="relative bg-white text-[#09090B] border-t border-zinc-200 overflow-hidden font-framer">
      {/* ── Top CTA Band ── */}
      <div className="border-b border-zinc-200 relative overflow-hidden bg-zinc-50/80">
        <div className="absolute inset-0 bg-[radial-gradient(90%_140%_at_15%_130%,rgba(232,116,44,.10),transparent_65%)] pointer-events-none" />
        <div className="relative xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-14 lg:py-20 flex flex-col md:flex-row gap-8 justify-between md:items-end">
          <div>
            <p className="mono text-[0.62rem] tracking-[0.26em] uppercase text-solar font-semibold">
              Get in touch with us today
            </p>
            <p className="mt-4 display text-[clamp(1.6rem,3.8vw,2.9rem)] leading-[1.12] max-w-[540px] text-[#09090B] font-bold">
              Let’s build something great together.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-4 font-normal text-lg md:text-2xl shrink-0 hover:text-solar transition-colors"
          >
            <span className="hover-line text-[#09090B] group-hover:text-solar transition-colors font-medium">Start a project</span>
            <CircleArrow className="text-solar transition-transform duration-500 group-hover:rotate-45" size={38} />
          </Link>
        </div>
      </div>

      {/* ── 5-Column Navigation Grid (2x Grid on Mobile, 5-Column on Desktop) ── */}
      <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-10 sm:py-14 grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-10 text-[13.5px]">
        {/* Col 1 & 2: Brand Heritage & Spin Logo */}
        <div className="col-span-2 lg:col-span-2 space-y-6">
          <Link to="/" className="inline-flex items-center group cursor-pointer" aria-label="ARKA Technovation Private Limited">
            <img
              src="/images/logo/arka-logo-black.webp"
              alt="ARKA Technovation Private Limited"
              loading="lazy"
              decoding="async"
              width={340}
              height={112}
              className="h-14 sm:h-24 md:h-28 w-auto max-w-[240px] sm:max-w-[420px] object-contain object-left transition-all duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
            />
          </Link>

          <p className="max-w-sm text-zinc-600 leading-[1.8] text-xs sm:text-sm font-normal">
            Welcome to {COMPANY.name}. We utilise our experience and world-class knowledge to help businesses reach their full online and digital potential, and ensure steady growth.
          </p>

          <p className="text-[12px] text-zinc-500 font-mono">
            Carrying forward {COMPANY.years} years of craft from {COMPANY.legacy}.
          </p>

          {/* Social Badges */}
          <div className="flex gap-2 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center border border-zinc-300 rounded-md mono text-[0.55rem] text-zinc-800 hover:bg-[#09090B] hover:text-white hover:border-[#09090B] transition-all duration-300 font-medium"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3: Useful Links */}
        <div className="col-span-1">
          <p className="mono text-[0.62rem] tracking-[0.24em] uppercase text-zinc-500 mb-5 font-semibold">
            Useful Links
          </p>
          <ul className="space-y-3">
            {[
              ['Home', '/'],
              ['Our Services', '/services'],
              ['Our Work', '/work'],
              ['Careers', '/careers'],
              ['Contact & Support', '/contact'],
            ].map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-zinc-700 hover:text-solar transition-colors block text-xs sm:text-sm font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Services */}
        <div className="col-span-1 pl-5 sm:pl-8 lg:pl-0">
          <p className="mono text-[0.62rem] tracking-[0.24em] uppercase text-zinc-500 mb-5 font-semibold">
            Services
          </p>
          <ul className="space-y-3">
            {serviceList.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-zinc-700 hover:text-solar transition-colors block text-xs sm:text-sm truncate max-w-[200px] font-medium"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Location & Contact */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-1">
          <p className="mono text-[0.62rem] tracking-[0.24em] uppercase text-zinc-500 mb-5 font-semibold">
            Contact Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-4 text-xs">
            <div>
              {OFFICES.map((o) => (
                <div key={o.city}>
                  <p className="mono text-[0.55rem] tracking-[0.18em] uppercase text-[#B84E12] font-semibold">
                    {o.label}
                  </p>
                  <p className="mt-1 text-zinc-700 leading-relaxed font-normal">
                    {o.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-1 sm:pt-0">
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-zinc-900 hover:text-solar transition-colors block font-mono text-xs font-medium"
              >
                {COMPANY.email}
              </a>
              <div className="space-y-1">
                {COMPANY.phones.slice(0, 2).map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, '')}`}
                    className="block text-zinc-900 hover:text-solar transition-colors font-mono text-xs font-medium"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Legal Band & Interactive Theme Tester ── */}
      <div className="border-t border-zinc-200 relative z-20 bg-white">
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 mono text-[0.58rem] tracking-[0.14em] uppercase text-zinc-600 font-medium">
            <span>© 2026 {COMPANY.name}. All rights reserved.</span>
          </div>

          {/* Theme Tester Button in the bottom of website */}
          <div className="flex items-center gap-3">
            <ThemeTesterButton />
          </div>

          <div className="flex items-center gap-5 mono text-[0.58rem] tracking-[0.14em] uppercase text-zinc-600 font-medium">
            <Link to="/contact" className="hover:text-[#09090B] transition-colors">Support SLA</Link>
            <a href="#" className="hover:text-[#09090B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#09090B] transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* ── Colossal Signature Bottom ARKA Animation ── */}
      <div className="relative overflow-hidden select-none pointer-events-none -mt-4 sm:-mt-6">
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center"
        >
          <p
            className="select-none text-center display leading-[0.72] text-[clamp(4.5rem,19vw,16rem)] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-black/[0.12] via-black/[0.04] to-transparent -mb-[0.11em] transition-all duration-700"
          >
            ARKA
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
