import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#home" className="logo" onClick={closeMobileMenu}>
            <div className="logo-mark">
              <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* House body */}
                <path d="M8 24V42H20V32H30V42H42V24" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                {/* Roof */}
                <path d="M4 24L25 6L46 24" stroke="var(--color-brand-orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                {/* Chimney / Hammer head */}
                <rect x="34" y="10" width="5" height="12" fill="var(--color-brand-orange)" rx="1"/>
                {/* Hammer handle */}
                <line x1="36.5" y1="10" x2="36.5" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                {/* Door */}
                <rect x="22" y="33" width="6" height="9" rx="1" fill="currentColor" opacity="0.15"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">Middle Tennessee Title</span>
            </div>
          </a>

          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links--open' : ''}`}>
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#process" onClick={closeMobileMenu}>Process</a></li>
            <li><a href="#contact" onClick={closeMobileMenu} className="nav-cta">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
