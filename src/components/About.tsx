import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Your Local Title Experts in Middle Tennessee</h2>
            <p className="about-lead">
              Middle Tennessee Title, Inc. has been serving the real estate community throughout
              Middle Tennessee with professional, reliable title and escrow services.
            </p>
            <p>
              Our team of experienced professionals understands the importance of accuracy,
              efficiency, and communication in every real estate transaction. We work closely
              with buyers, sellers, lenders, real estate agents, and attorneys to ensure
              smooth closings and protected investments.
            </p>
            <p>
              Based in Murfreesboro and serving the greater Nashville area and surrounding
              counties, we take pride in our local expertise and personal approach to every
              transaction.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Licensed & Insured</h4>
                  <p>Fully licensed title agency with comprehensive insurance coverage</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Efficient Turnaround</h4>
                  <p>Quick, thorough title searches and timely closings</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4>Personal Service</h4>
                  <p>Dedicated attention to every client and transaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <div className="about-icon-large">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span>Middle Tennessee Title, Inc.</span>
              </div>
            </div>

            <div className="about-stats-card">
              <div className="about-stat-item">
                <span className="about-stat-value">Middle TN</span>
                <span className="about-stat-label">Service Area</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-value">Local</span>
                <span className="about-stat-label">Family Owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
