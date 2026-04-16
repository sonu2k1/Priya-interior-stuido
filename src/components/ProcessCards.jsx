import './ProcessCards.css';

const processData = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H26C27.1 4 28 4.9 28 6V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M9 10H23M9 16H23M9 22H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Consultation',
    desc: 'Our expert Interior designers will guide you through a personalized consultation to discuss and plan your dream home interiors.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4L28 10L10 28H4V22L22 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Design',
    desc: 'Our team of expert Interior designers understand your requirements and present your unique design options, to help you visualize your dream home.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: 'Execution',
    desc: 'As Pune\'s top interior design firm, we handle turnkey transformations. Beyond design, we ensure that the space is functional and truly yours.',
  },
];

const ProcessCards = () => {
  const scrollToForm = () => {
    const section = document.getElementById('how-we-work');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Process Cards Section */}
      <section className="process" id="about">

        <div className="process__container">
          <div className="process__grid">
            {processData.map((item, i) => (
              <div className="process-card" key={i} id={`process-card-${i}`}>
                <div className="process-card__icon-wrapper">
                  <div className="process-card__icon">
                    {item.icon}
                  </div>
                </div>
                <h3 className="process-card__title">{item.title}</h3>
                <p className="process-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Design Domains Section */}
      <section className="why-us" id="why-us">
        <div className="why-us__container">
          <h2 className="why-us__title">
            Why <span className="why-us__title-accent">Priya Interior Studio?</span>
          </h2>
          <p className="why-us__desc">
            We are one of the leading interior design companies in Pune, specializing in transforming spaces. If you're looking to elevate your home's interiors with style and sophistication, we're the perfect team to bring your vision to life.
          </p>
          <button className="why-us__cta" onClick={scrollToForm} id="why-us-cta-btn">
            Get Free Estimate Price
          </button>
        </div>
      </section>
    </>
  );
};

export default ProcessCards;
