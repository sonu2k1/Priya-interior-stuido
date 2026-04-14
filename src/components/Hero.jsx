import { useState } from 'react';
import './Hero.css';
import EstimateForm from './EstimateForm';

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
            Trusted by 500+ Homeowners
          </div>
          <h1 className="hero__title">
            Premium Home<br />
            Interiors in Mumbai,<br />
            <span className="hero__title-accent">MH</span>
          </h1>
          <p className="hero__subtitle">
            Residential Interior&nbsp; |&nbsp; Turnkey Projects&nbsp; |&nbsp; Modular Interiors
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Projects Done</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="hero__form-wrapper">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
