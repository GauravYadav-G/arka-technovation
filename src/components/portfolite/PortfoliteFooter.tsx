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
    {
      name: 'LinkedIn',
      href: COMPANY.socials.linkedin,
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10',
    },
    {
      name: 'Facebook',
      href: COMPANY.socials.facebook,
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      ),
      hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10',
    },
    {
      name: 'Instagram',
      href: COMPANY.socials.instagram,
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10',
    },
    {
      name: 'WhatsApp',
      href: COMPANY.socials.whatsapp,
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      hoverClass: 'hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10',
    },
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
            Carrying forward {COMPANY.years} years of craft.
          </p>

          {/* Verified Social Media Channels */}
          <div className="flex items-center gap-2.5 pt-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={`Follow ARKA Technovation on ${s.name}`}
                  title={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 bg-zinc-50/80 text-zinc-700 shadow-xs transition-all duration-200 active:scale-95 ${s.hoverClass}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
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

        {/* Col 4: Services (5 Core Disciplines) */}
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
              ['Corporate World News', '/corporate-world-news'],
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
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="mono text-[0.58rem] tracking-[0.14em] uppercase text-zinc-600 font-medium">
            <span>© 2026 {COMPANY.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5 mono text-[0.58rem] tracking-[0.14em] uppercase text-zinc-600 font-medium">
            <Link to="/support-sla" className="hover:text-[#09090B] transition-colors">Support SLA</Link>
            <Link to="/privacy-policy" className="hover:text-[#09090B] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#09090B] transition-colors">Terms</Link>
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
