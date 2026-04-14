import { useState } from 'react';
import './TrendingDesigns.css';

const categories = [
  {
    title: 'KITCHEN',
    accent: 'DESIGNS',
    images: ['/images/kitchen.jpg', '/images/interior1.jpg', '/images/interior7.jpg'],
  },
  {
    title: 'LIVING ROOM',
    accent: 'DESIGNS',
    images: ['/images/living-room.jpg', '/images/living-room2.jpg', '/images/interior3.jpg'],
  },
  {
    title: 'BEDROOM',
    accent: 'DESIGNS',
    images: ['/images/bedroom.jpg', '/images/bedroom2.jpg', '/images/bedroom3.jpg'],
  },
];

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__track">
        <img
          src={images[currentIndex]}
          alt="Interior design"
          className="carousel__image"
          key={currentIndex}
        />
      </div>
      <button className="carousel__btn carousel__btn--prev" onClick={goPrev} aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button className="carousel__btn carousel__btn--next" onClick={goNext} aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
      <div className="carousel__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel__dot ${i === currentIndex ? 'carousel__dot--active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

const TrendingDesigns = () => {
  return (
    <section className="trending" id="trending">
      <div className="trending__container">
        <h2 className="trending__title">
          SOME OF OUR <span className="trending__title-accent">TRENDING DESIGNS</span>
        </h2>
        <div className="trending__grid">
          {categories.map((cat, i) => (
            <div className="trending__category" key={i}>
              <h3 className="trending__category-title">
                {cat.title} <span className="trending__category-accent">{cat.accent}</span>
              </h3>
              <ImageCarousel images={cat.images} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDesigns;
