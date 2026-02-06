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
              <svg viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* House outline */}
                <path d="M25 8L8 22V42H18V32H32V42H42V22L25 8Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                {/* Hammer head extending from roof */}
                <rect x="2" y="12" width="12" height="5" rx="1" className="logo-hammer" />
                {/* Hammer handle */}
                <rect x="6" y="17" width="3" height="10" rx="0.5" className="logo-hammer" />
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
