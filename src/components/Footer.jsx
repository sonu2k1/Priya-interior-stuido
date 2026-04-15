import './Footer.css';

const Footer = () => {
  const scrollToForm = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__cta-section">
        <div className="footer__cta-container">
          <h2 className="footer__cta-title">Ready to Transform Your Home?</h2>
          <p className="footer__cta-desc">
            Get a personalized design consultation and free price estimate for your dream interior.
          </p>
          <button className="footer__cta-btn" onClick={scrollToForm} id="footer-cta-btn">
            Get Free Estimate →
          </button>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="4" width="20" height="20" rx="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <path d="M8 14V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <span className="footer__logo-title">Priya</span>
                  <span className="footer__logo-subtitle">Interior Studio</span>
                </div>
              </div>
              <p className="footer__brand-desc">
                Creating premium home interiors that reflect your personality and elevate your lifestyle. Trusted by 500+ homeowners in Pune.
              </p>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__links">
                <li><a href="#services">Residential Interior</a></li>
                <li><a href="#services">Turnkey Projects</a></li>
                <li><a href="#services">Modular Kitchen</a></li>
                <li><a href="#services">Design Consultation</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact Us</h4>
              <ul className="footer__contact">
                <li>
                  <span className="footer__contact-icon">📍</span>
                  Pune, Maharashtra, India
                </li>
                <li>
                  <span className="footer__contact-icon">📞</span>
                  +91 98765 43210
                </li>
                <li>
                  <span className="footer__contact-icon">✉️</span>
                  info@priyainteriorstudio.in
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__bottom-text">
              <p>© {new Date().getFullYear()} Priya Interior Studio. All rights reserved.</p>
              <p className="footer__credit">Design and Developed By LogicPulse Innovation</p>
            </div>
            <div className="footer__socials">
              <a href="#" className="footer__social footer__social--instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer__social footer__social--facebook" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
