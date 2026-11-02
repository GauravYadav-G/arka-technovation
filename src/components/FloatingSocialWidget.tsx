'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

interface SocialItem {
  name: string;
  href: string;
  ariaLabel: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  colorClass: string;
  hoverGlow: string;
  hoverBorder: string;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919711487316',
    ariaLabel: 'Chat with ARKA on WhatsApp',
    colorClass: 'text-[#25D366]',
    hoverBorder: 'hover:border-[#25D366]/50',
    hoverGlow: 'hover:shadow-[0_0_14px_rgba(37,211,102,0.45)]',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/arka-technovation-private-limited/',
    ariaLabel: 'Connect with ARKA on LinkedIn',
    colorClass: 'text-[#0A66C2]',
    hoverBorder: 'hover:border-[#0A66C2]/50',
    hoverGlow: 'hover:shadow-[0_0_14px_rgba(10,102,194,0.45)]',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/arkatechnovationpvtltd/',
    ariaLabel: 'Follow ARKA on Facebook',
    colorClass: 'text-[#1877F2]',
    hoverBorder: 'hover:border-[#1877F2]/50',
    hoverGlow: 'hover:shadow-[0_0_14px_rgba(24,119,242,0.45)]',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/arkatechnovationpvtltd/',
    ariaLabel: 'Follow ARKA on Instagram',
    colorClass: 'text-[#E4405F]',
    hoverBorder: 'hover:border-[#E4405F]/50',
    hoverGlow: 'hover:shadow-[0_0_14px_rgba(228,64,95,0.45)]',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Call Direct',
    href: 'tel:+919711487316',
    ariaLabel: 'Call ARKA Technovation Support (+91 97114 87316)',
    colorClass: 'text-[#E8742C]',
    hoverBorder: 'hover:border-[#E8742C]/50',
    hoverGlow: 'hover:shadow-[0_0_14px_rgba(232,116,44,0.45)]',
    icon: ({ className }) => <Phone className={className} aria-hidden="true" />,
  },
];

export default function FloatingSocialWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 280);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.aside
      initial={{ y: 24, opacity: 0, scale: 0.92 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[850] select-none"
      aria-label="Floating Social and Quick Connect Hub"
    >
      {/* ── Expandable Social Capsule Hub ── */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative flex flex-row-reverse items-center transition-all duration-300 ${
          isOpen
            ? 'p-1.5 rounded-full bg-white/95 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
            : 'p-0 rounded-full shadow-none'
        }`}
      >
        {/* ── Single Social FAB Trigger Button (Vibrant Green) ── */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close social channels' : 'Open social channels'}
          style={{ backgroundColor: '#25D366', color: '#ffffff' }}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0 group/fab"
        >
          {/* Subtle radar pulse ring when closed */}
          {!isOpen && (
            <span
              className="absolute -inset-1 rounded-full opacity-40 animate-ping pointer-events-none"
              style={{ backgroundColor: '#25D366' }}
              aria-hidden="true"
            />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 flex items-center justify-center"
              >
                <X className="w-6 h-6 text-white" strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 flex items-center justify-center"
              >
                {/* Official SimpleIcons WhatsApp SVG Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover/fab:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* ── Expandable Further Social Icons Strip (Expands to Left) ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden flex items-center"
            >
              {/* Social Icons Lens Strip */}
              <div className="flex items-center gap-1.5 pl-1.5 py-0.5 shrink-0">
                {SOCIAL_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      initial={{ scale: 0.5, opacity: 0, x: 10 }}
                      animate={{ scale: 1, opacity: 1, x: 0 }}
                      exit={{ scale: 0.5, opacity: 0, x: 10 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                      href={item.href}
                      target={item.href.startsWith('tel:') ? undefined : '_blank'}
                      rel={item.href.startsWith('tel:') ? undefined : 'noreferrer noopener'}
                      aria-label={item.ariaLabel}
                      className={`relative group/icon flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-50 ${item.colorClass} border border-black/[0.06] shadow-sm transition-all duration-300 hover:scale-115 active:scale-95 hover:bg-white ${item.hoverBorder} ${item.hoverGlow}`}
                    >
                      <Icon className="w-4 h-4 sm:w-[17px] sm:h-[17px] transition-transform duration-300 group-hover/icon:scale-110" />

                      {/* Floating Micro Tooltip */}
                      <div
                        role="tooltip"
                        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 group-hover/icon:-top-9.5 transition-all duration-200 px-2.5 py-1 rounded-md bg-zinc-950 text-white text-[10px] font-sans font-medium whitespace-nowrap shadow-xl border border-white/15 backdrop-blur-md z-50"
                      >
                        {item.name}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-zinc-950 rotate-45 border-r border-b border-white/15" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Thin Vertical Divider */}
              <div className="w-px h-5 bg-zinc-300/80 mx-2 shrink-0" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
