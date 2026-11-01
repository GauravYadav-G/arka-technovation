import dynamic from 'next/dynamic';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteHero from '../components/portfolite/PortfoliteHero';
import PortfoliteLogosMarquee from '../components/portfolite/PortfoliteLogosMarquee';

// Code-split below-the-fold sections with SSR enabled to preserve full HTML content & SEO indexability
const PortfoliteProjectsGrid = dynamic(() => import('../components/portfolite/PortfoliteProjectsGrid'), {
  ssr: true,
});
const PortfoliteServicesBento = dynamic(() => import('../components/portfolite/PortfoliteServicesBento'), {
  ssr: true,
});
const PortfoliteAbout = dynamic(() => import('../components/portfolite/PortfoliteAbout'), {
  ssr: true,
});
const DigitalGrowthShowcaseSection = dynamic(() => import('../components/home/DigitalGrowthShowcaseSection'), {
  ssr: true,
});
const PortfoliteRecentWorksCarousel = dynamic(() => import('../components/portfolite/PortfoliteRecentWorksCarousel'), {
  ssr: true,
});
const PortfoliteProcess = dynamic(() => import('../components/portfolite/PortfoliteProcess'), {
  ssr: true,
});
const ServicesStickySection = dynamic(() => import('../components/home/ServicesStickySection'), {
  ssr: true,
});
const ExpertiseTabsSection = dynamic(() => import('../components/home/ExpertiseTabsSection'), {
  ssr: true,
});
const ScalableArchitectureSection = dynamic(() => import('../components/home/ScalableArchitectureSection'), {
  ssr: true,
});
const WhyUsSection = dynamic(() => import('../components/home/WhyUsSection'), {
  ssr: true,
});
const LatestNewsSection = dynamic(() => import('../components/home/LatestNewsSection'), {
  ssr: true,
});
const PortfoliteFooter = dynamic(() => import('../components/portfolite/PortfoliteFooter'), {
  ssr: true,
});

export default function PortfoliteHome() {
  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      {/* Floating Glassmorphic Top Navbar */}
      <PortfoliteNav />

      {/* Portfolite Hero Section */}
      <PortfoliteHero />

      {/* Marquee of Enterprise & Industrial Clients */}
      <PortfoliteLogosMarquee />

      {/* 3-Column Parallax Featured Case Studies Grid (Hidden per user request) */}
      {/* <div className="cv-auto">
        <PortfoliteProjectsGrid />
      </div> */}

      {/* Services Bento Grid (Reference 6-Card Layout: Web Dev, Software Dev, SEO, Film, SMM, Digital Marketing) */}
      <div className="cv-auto">
        <PortfoliteServicesBento />
      </div>

      {/* Digital Capabilities & Growth Engine Showcase (Above Meet Founder) */}
      <div className="cv-auto">
        <DigitalGrowthShowcaseSection />
      </div>

      {/* Who We Are: Founded by Kranti Parashar, 17+ Years Heritage */}
      <div className="cv-auto">
        <PortfoliteAbout />
      </div>

      {/* Recent Works Carousel */}
      <div className="cv-auto">
        <PortfoliteRecentWorksCarousel />
      </div>

      {/* Build incredible digital products, completely scalable */}
      <div className="cv-auto">
        <ScalableArchitectureSection />
      </div>

      {/* 3-Stage Delivery Process */}
      <div className="cv-auto">
        <PortfoliteProcess />
      </div>

      {/* Interactive Sticky Stage Services Section */}
      <div className="cv-auto">
        <ServicesStickySection />
      </div>

      {/* Our Expertise / Outstanding Experience Feature Tabs */}
      <div className="cv-auto">
        <ExpertiseTabsSection />
      </div>

      {/* Why Work With Us: 4-Stage Stacking Cards with Parallax & Opacity Progression */}
      <div className="cv-auto">
        <WhyUsSection />
      </div>

      {/* Latest News: "Our take on design, technology and what makes a website convert" */}
      <div className="cv-auto">
        <LatestNewsSection />
      </div>

      {/* Clean Minimalist ARKA Corporate Footer */}
      <div className="cv-auto">
        <PortfoliteFooter />
      </div>
    </div>
  );
}
