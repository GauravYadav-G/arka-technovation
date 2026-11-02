import type { Metadata, Viewport } from 'next';
import '../index.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const BASE_URL = 'https://arkatechnovation.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ARKA Technovation Private Limited — Digital Products, Software & Growth',
    template: '%s | ARKA Technovation Private Limited',
  },
  description:
    'ARKA Technovation Private Limited designs and builds enterprise software, high-performance web platforms, and growth systems for ambitious brands. Corporate HQ in Sector 63, Noida.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'ARKA Technovation Private Limited',
    'ARKA Technovation',
    'Enterprise Software Development',
    'SEO & Lead Generation',
    'Custom CRM Software',
    'Corporate Film Production',
    'Digital Marketing Agency Noida',
    'Next.js Web Applications',
    'Mr. Kranti Parashar',
  ],
  authors: [{ name: 'ARKA Technovation Private Limited', url: BASE_URL }],
  creator: 'ARKA Technovation Private Limited',
  publisher: 'ARKA Technovation Private Limited',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'ARKA Technovation Private Limited — Digital Products, Software & Growth',
    description:
      'Enterprise software, high-performance web platforms, and growth systems for ambitious brands. Headquartered in Sector 63, Noida.',
    url: BASE_URL,
    siteName: 'ARKA Technovation Private Limited',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo/arka-logo-black.png',
        width: 800,
        height: 600,
        alt: 'ARKA Technovation Private Limited Corporate Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARKA Technovation Private Limited — Digital Products, Software & Growth',
    description:
      'Enterprise software, high-performance web platforms, and growth systems for ambitious brands.',
    images: ['/images/logo/arka-logo-black.png'],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'ARKA Technovation Private Limited',
      legalName: 'ARKA Technovation Private Limited',
      url: BASE_URL,
      logo: `${BASE_URL}/images/logo/arka-logo-black.png`,
      image: `${BASE_URL}/images/logo/arka-logo-black.png`,
      telephone: '+91 97114 87316',
      email: 'info@arkatechnovation.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rayos Business Park, Office No- 202, C-4, Sector 63',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201301',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.6280',
        longitude: '77.3790',
      },
      founder: {
        '@type': 'Person',
        name: 'Mr. Kranti Parashar',
        jobTitle: 'Founder & Managing Director',
      },
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/arkatechnovationpvtltd/',
        'https://www.linkedin.com/company/arka-technovation-private-limited/',
        'https://www.instagram.com/arkatechnovationpvtltd/',
        'https://youtube.com',
        'https://x.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'ARKA Technovation Private Limited',
      description: 'Enterprise software engineering, search authority, performance marketing, and corporate cinema.',
      publisher: {
        '@id': `${BASE_URL}/#organization`,
      },
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="ARKA Technovation Private Limited designs and builds enterprise software, high-performance web platforms, and growth systems for ambitious brands. Corporate HQ in Sector 63, Noida."
        />
        <link
          rel="preload"
          href="/images/logo/arka-logo-white.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/cabinet-grotesk-400-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cabinet-grotesk-300-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-400-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cabinet-grotesk-500-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        {/* Speculation Rules API for instant same-origin client navigation (conservative to prevent bandwidth/CPU contention on load) */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: '/*' },
                  eagerness: 'conservative',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased selection:bg-solar selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
