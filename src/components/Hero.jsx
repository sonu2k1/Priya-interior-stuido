import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img
          src="/images/living-room.jpg"
          alt="Premium Home Interior"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Trusted by 50+ Homeowners
          </div>
          <h1 className="hero__title">
            Premium Home<br />
            Interiors in Pune
          </h1>
          <p className="hero__subtitle">
            Residential Interior&nbsp; |&nbsp; Turnkey Projects&nbsp; |&nbsp; Modular Interiors
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Projects Done</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">99%</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
