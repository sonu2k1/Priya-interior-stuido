import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo" id="logo-link">
          <div className="navbar__logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="20" height="20" rx="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
              <path d="M8 14V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Priya</span>
            <span className="navbar__logo-subtitle">Interior Studio</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
