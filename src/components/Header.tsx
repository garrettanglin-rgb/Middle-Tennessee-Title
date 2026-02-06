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
              <svg viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* House outline with chimney */}
                <path d="M27 10L10 24V46H20V36H34V46H44V24L27 10Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                {/* Chimney */}
                <rect x="36" y="14" width="5" height="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                {/* Hammer head - angled at roof */}
                <rect x="1" y="16" width="14" height="6" rx="1" className="logo-hammer" transform="rotate(-25 8 19)"/>
                {/* Hammer handle */}
                <rect x="9" y="21" width="4" height="14" rx="1" className="logo-hammer" transform="rotate(-25 11 28)"/>
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
