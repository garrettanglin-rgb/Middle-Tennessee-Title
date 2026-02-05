import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">Serving Middle Tennessee</span>
          <h1 className="hero-title">
            From Contract to Keys,
            <span className="hero-title-accent"> We Handle the Details</span>
          </h1>
          <p className="hero-description">
            Clear titles. Smooth closings. Peace of mind. Middle Tennessee Title guides you through
            every step of your real estate transaction with expertise, efficiency, and personal attention.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">1000+</span>
              <span className="hero-stat-label">Closings Completed</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">25+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Client Focused</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <a href="#services" aria-label="Scroll to services">
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
