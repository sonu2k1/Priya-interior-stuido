import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const scrollToForm = () => {
    setMenuOpen(false);
    const section = document.getElementById('how-we-work');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo" id="logo-link">
          <div className="navbar__logo-icon">
            <img src="/logo.svg" alt="Priya Interior Studio Logo" className="navbar__logo-img" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Priya</span>
            <span className="navbar__logo-subtitle">Interior Studio</span>
          </div>
        </a>

        {/* Nav Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <button className="navbar__cta" onClick={scrollToForm} id="navbar-cta-btn-mobile">
              Get Free Price Estimate
            </button>
          </li>
        </ul>

        {/* CTA Button (desktop) */}
        <button className="navbar__cta navbar__cta--desktop" onClick={scrollToForm} id="navbar-cta-btn">
          Get Free Price Estimate
        </button>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
