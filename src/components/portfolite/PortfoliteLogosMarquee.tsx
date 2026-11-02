'use client';

interface Brand {
  name: string;
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  heightClass: string;
}

const BRANDS: Brand[] = [
  {
    name: 'Dancing Stars',
    url: 'https://dancingstarsllc.com',
    src: '/portfolite/brands/dancingstars.webp',
    alt: 'Dancing Stars LLC',
    width: 298,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Honey Hut',
    url: 'https://honeyhut.in',
    src: '/portfolite/brands/honeyhut.webp',
    alt: 'Honey Hut Nature’s Products',
    width: 272,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Hindustan Expellers',
    url: 'https://hindustanexpellers.com',
    src: '/portfolite/brands/hindustanexpellers.webp',
    alt: 'Hindustan Expellers',
    width: 478,
    height: 56,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Luxa Industries',
    url: 'https://luxaindustries.com',
    src: '/portfolite/brands/luxaindustries.webp',
    alt: 'Luxa Industries',
    width: 141,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Purolite Industries',
    url: 'https://bharatautoparts.com',
    src: '/portfolite/brands/purolite.webp',
    alt: 'Purolite Industries',
    width: 120,
    height: 64,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'Ingenious Solutions India',
    url: 'https://ingenioussolutionsindia.com',
    src: '/portfolite/brands/ingenious.webp',
    alt: 'Ingenious Solutions India',
    width: 184,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'SKN Industries',
    url: 'https://www.sknindustries.com',
    src: '/portfolite/brands/sknindustries.webp',
    alt: 'SKN Industries',
    width: 181,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Laxmi Electromech',
    url: 'https://laxmielectromech.com',
    src: '/portfolite/brands/laxmielectromech.webp',
    alt: 'Laxmi Electromech Pvt. Ltd.',
    width: 274,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
  {
    name: 'Adexcel Auto',
    url: 'https://adxelauto.com',
    src: '/portfolite/brands/adexcel.webp',
    alt: 'Adexcel Auto',
    width: 90,
    height: 64,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Ambrosia Harvest',
    url: 'https://ambrosiaharvest.in',
    src: '/portfolite/brands/ambrosiaharvest.webp',
    alt: 'Ambrosia Harvest',
    width: 180,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Atlas Rolling Mill',
    url: 'https://atlasrollingmillmfg.com',
    src: '/portfolite/brands/atlasrollingmill.webp',
    alt: 'Atlas Rolling Mill',
    width: 117,
    height: 64,
    heightClass: 'h-10 sm:h-12',
  },
  {
    name: 'Chic & Holand',
    url: 'https://chicandholland.com',
    src: '/portfolite/brands/chicandholland.webp',
    alt: 'Chic & Holland',
    width: 473,
    height: 48,
    heightClass: 'h-6 sm:h-7',
  },
  {
    name: 'Refer Me Group',
    url: 'http://refermegroup.com',
    src: '/portfolite/brands/refermegroup.webp',
    alt: 'Refer Me Group',
    width: 184,
    height: 64,
    heightClass: 'h-9 sm:h-11',
  },
  {
    name: 'Sunny Lights',
    url: 'https://sunnylights.co.in',
    src: '/portfolite/brands/sunnylights.webp',
    alt: 'Sunny Lights',
    width: 91,
    height: 64,
    heightClass: 'h-11 sm:h-13',
  },
  {
    name: 'Gemak Engineering Solutions',
    url: 'http://www.gemak.co.in',
    src: '/portfolite/brands/gemak.webp',
    alt: 'Gemak Engineering Solutions',
    width: 266,
    height: 64,
    heightClass: 'h-8 sm:h-9',
  },
];

export default function PortfoliteLogosMarquee() {
  // 2 identical sets for seamless -50% marquee loop
  const displayBrands = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-label="Enterprise & Industrial Clients"
      className="py-7 sm:py-9 bg-white relative overflow-hidden font-framer select-none border-y border-black/[0.04]"
    >
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden flex py-1">
        <div
          className="animate-marquee flex items-center gap-14 sm:gap-20 opacity-90 hover:opacity-100 transition-opacity will-change-transform"
          style={{ animationDuration: '48s' }}
        >
          {displayBrands.map((brand, idx) => (
            <a
              key={`${brand.name}-${idx}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${brand.name} — Visit Website`}
              className="group flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300 ease-out"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                loading="lazy"
                decoding="async"
                className={`${brand.heightClass} w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
