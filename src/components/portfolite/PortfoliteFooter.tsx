'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { SERVICES, COMPANY, OFFICES } from '../../lib/data';
import { CircleArrow } from '../ui';

export default function PortfoliteFooter() {
  const serviceList = SERVICES.slice(0, 7);

  const socials = [
    { label: 'FB', href: 'https://www.facebook.com/arkatechnovationpvtltd/', title: 'Facebook' },
    { label: 'IN', href: 'https://www.linkedin.com/company/arka-technovation-private-limited/', title: 'LinkedIn' },
    { label: 'IG', href: 'https://www.instagram.com/arkatechnovationpvtltd/', title: 'Instagram' },
    { label: 'YT', href: 'https://youtube.com', title: 'YouTube' },
    { label: 'X', href: 'https://x.com', title: 'X (Twitter)' },
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
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center border border-zinc-300 rounded-md mono text-[0.55rem] text-zinc-800 hover:bg-[#09090B] hover:text-white hover:border-[#09090B] transition-all duration-300 font-medium"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3: Useful Links (Navbar Pages) */}
        <div className="col-span-1">
          <p className="mono text-[0.62rem] tracking-[0.24em] uppercase text-zinc-500 mb-5 font-semibold">
            Useful Links
          </p>
          <ul className="space-y-3">
            {[
              ['About Us', '/about-us'],
              ['Services', '/services'],
              ['Gallery', '/gallery'],
              ['Blogs', '/blogs'],
              ['Career', '/career'],
              ['Contact Us', '/contact-us'],
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

        {/* Col 4: Services (5 Core Pillars & UI/UX) */}
        <div className="col-span-1 pl-5 sm:pl-8 lg:pl-0">
          <p className="mono text-[0.62rem] tracking-[0.24em] uppercase text-zinc-500 mb-5 font-semibold">
            Services
          </p>
          <ul className="space-y-3">
            {[
              ['Software Development', '/services/development'],
              ['Digital Marketing', '/services/digital-marketing'],
              ['SEO, GEO & AEO', '/seo-lead-generation'],
              ['Film Production & Media', '/services/film-making'],
              ['Corporate World News', '/blogs'],
              ['UI/UX & Interactive', '/ui-ux'],
            ].map(([title, link]) => (
              <li key={title}>
                <Link
                  to={link}
                  className="text-zinc-700 hover:text-solar transition-colors block text-xs sm:text-sm truncate max-w-[200px] font-medium"
                >
                  {title}
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

          {/* Verified High-Yield Performance Badge */}
          <div className="flex items-center gap-2 mono text-[0.58rem] tracking-[0.14em] uppercase text-zinc-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Operational Scale: Enterprise Ready</span>
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
