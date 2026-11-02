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
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.55 3.73 1.5 5.27L2 22l4.98-1.58c1.47.82 3.16 1.28 4.96 1.28 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 18.06c-1.57 0-3.07-.44-4.37-1.21l-.31-.18-3.23 1.02 1.05-3.15-.2-.33c-.88-1.42-1.35-3.07-1.35-4.78 0-4.48 3.65-8.13 8.13-8.13 4.48 0 8.13 3.65 8.13 8.13 0 4.48-3.65 8.13-8.13 8.13zm4.46-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.22.24-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.16 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
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
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
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
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    ariaLabel: 'Follow ARKA on X',
    colorClass: 'text-zinc-900',
    hoverBorder: 'hover:border-black/50',
    hoverGlow: 'hover:shadow-[0_0_12px_rgba(0,0,0,0.25)]',
    icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Call Direct',
    href: 'tel:+919711487316',
    ariaLabel: 'Call ARKA Technovation Private Limited Support (+91 97114 87316)',
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
      {/* ── Light Theme Frosted Glass Capsule (Expands inwards to the left) ── */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-row-reverse items-center p-1.5 rounded-full bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_16px_44px_rgba(0,0,0,0.16),0_1px_2px_rgba(255,255,255,1)_inset] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
      >
        {/* Subtle Ambient Radial Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-solar/10 via-white/40 to-emerald-500/10 opacity-70"
        />

        {/* ── Single Social FAB Trigger Button (Always Visible at Far Right) ── */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close social channels' : 'Open social channels'}
          className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-50 hover:bg-white text-zinc-800 border border-black/[0.06] shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0 group/fab"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <X className="w-5 h-5 text-zinc-700" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {/* Modern Chat & Social Hub SVG FAB Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-zinc-900 group-hover/fab:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  <circle cx="8" cy="12" r="0.9" fill="currentColor" />
                  <circle cx="12" cy="12" r="0.9" fill="currentColor" />
                  <circle cx="16" cy="12" r="0.9" fill="currentColor" />
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
