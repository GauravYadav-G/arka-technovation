import React from 'react';

export default function FooterSection() {
  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer footer--light" id="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__headline">GET IN TOUCH.</p>
          <p className="footer__desc">
            Junca is a French creative web studio for ambitious tech companies. We design and build premium websites on Framer, Astro or Next.js, using motion design and interactive 3D to make complex products clear and easy to buy.
          </p>
        </div>
        <div className="footer__line" />
        <div className="footer__grid">
          <ul className="footer__socials">
            <li>
              <a href="https://www.linkedin.com/company/arka-technovation-private-limited/" target="_blank" rel="noopener noreferrer">
                <span className="footer__soc">LinkedIn</span>
                <svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true} focusable="false" style={{ display: 'inline-block', verticalAlign: '0.02em', flex: 'none' }}>
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/arkatechnovationpvtltd/" target="_blank" rel="noopener noreferrer">
                <span className="footer__soc">Facebook</span>
                <svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true} focusable="false" style={{ display: 'inline-block', verticalAlign: '0.02em', flex: 'none' }}>
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/arkatechnovationpvtltd/" target="_blank" rel="noopener noreferrer">
                <span className="footer__soc">Instagram</span>
                <svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true} focusable="false" style={{ display: 'inline-block', verticalAlign: '0.02em', flex: 'none' }}>
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="footer__col">
            <p className="footer__head">NAVIGATION</p>
            <ul>
              <li><a href="/studio">Studio</a></li>
              <li><a href="/projects">Our projects</a></li>
              <li><a href="/services">Our services</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <p className="footer__head footer__head--latest">LATEST PROJECTS</p>
            <ul>
              <li><a href="/projects/botblox">BotBlox Systems</a></li>
              <li><a href="/projects/hylight">Hylight</a></li>
              <li><a href="/projects/kestrix">Kestrix</a></li>
              <li><a href="/projects/skipperndt">Skipper NDT</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__head">SERVICES</p>
            <ul>
              <li><a href="/services/websites">Websites</a></li>
              <li><a href="/services/3d-motion">3D &amp; Motion</a></li>
              <li><a href="/services/branding">Brand</a></li>
              <li><a href="/services/fundraising">Fundraising</a></li>
              <li><a href="/services/seo-geo">SEO &amp; GEO</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__head">CONTACT</p>
            <ul>
              <li><a href="mailto:info@arkatechnovation.com">info@arkatechnovation.com</a></li>
              <li><a href="https://wa.me/919711487316" target="_blank" rel="noopener">Whatsapp : +91 97114 87316</a></li>
            </ul>
            <p className="footer__head footer__head--latest">LEGAL</p>
            <ul>
              <li><a href="/legal-notice">Legal notice</a></li>
              <li><a href="/privacy-policy">Privacy policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <img className="footer__logo" src="/images/logo/arka-logo-black.png" alt="ARKA Technovation Private Limited" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
          <p className="footer__copy">© 2026 ARKA Technovation Private Limited. All rights reserved.</p>
          <a className="footer__top-link" href="#top" data-back-to-top onClick={handleBackToTop}>
            BACK TO TOP <span aria-hidden={true}>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
