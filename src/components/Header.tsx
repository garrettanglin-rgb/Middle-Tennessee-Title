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
              <svg viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* House outline with door */}
                <path d="M29 8L6 28V50H22V38H36V50H52V28L29 8Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                {/* Chimney */}
                <rect x="40" y="14" width="6" height="12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                {/* Hammer head - horizontal extending left from roof */}
                <rect x="0" y="18" width="16" height="6" rx="1" className="logo-hammer"/>
                {/* Hammer handle - angled down */}
                <rect x="12" y="22" width="4" height="18" rx="1" className="logo-hammer" transform="rotate(-20 14 31)"/>
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
