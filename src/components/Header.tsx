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
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 16V36H16V26H24V36H36V16L20 4Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <path d="M20 10L10 18V32H16V24H24V32H30V18L20 10Z" fill="currentColor" opacity="0.2"/>
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
