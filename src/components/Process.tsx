import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Send Us Your Contract',
    description: 'Bring us your purchase contract or reach out with your title needs. We\'ll review the details and get started right away.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Title Search',
    description: 'Our team conducts a comprehensive title search, examining public records to verify ownership and identify any liens, encumbrances, or issues.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Title Examination',
    description: 'Our experienced examiners review the search results, resolve any issues, and prepare the title commitment for your review.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M9 15l2 2 4-4"></path>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Closing Preparation',
    description: 'We coordinate with all parties, prepare closing documents, and schedule a convenient closing date and location.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    )
  },
  {
    number: '05',
    title: 'Closing Day',
    description: 'Sign your documents with our professional closing team. We ensure everything is properly executed and answer any questions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  },
  {
    number: '06',
    title: 'Post-Closing',
    description: 'We record documents, disburse funds, and issue your final title insurance policy. Your transaction is complete!',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  }
];

const Process = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">How It Works</span>
          <h2 className="section-title">Our Streamlined Process</h2>
          <p className="section-description">
            A clear path through every stage of your transaction, handled with care and professionalism.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-step-marker">
                <div className="process-step-icon">
                  {step.icon}
                </div>
                <span className="process-step-number">{step.number}</span>
              </div>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-cta">
          <p>Ready to get started on your next transaction?</p>
          <a href="#contact" className="btn btn-primary">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
