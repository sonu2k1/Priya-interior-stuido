import { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Kothrud, Pune',
    rating: 5,
    text: 'Priya Interior Studio transformed our 3BHK into a stunning modern space. The attention to detail and quality of work exceeded our expectations. Highly recommend!',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Rahul Mehra',
    location: 'Koregaon Park, Pune',
    rating: 5,
    text: 'Exceptional service from start to finish. The team was professional, delivered on time, and the modular kitchen they designed is absolutely gorgeous.',
    avatar: 'RM',
  },
  {
    id: 3,
    name: 'Anjali & Karan Desai',
    location: 'Hinjewadi, Pune',
    rating: 5,
    text: 'We chose Priya Interior Studio for our villa project and couldn\'t be happier. The turnkey service was seamless and the result is a dream home.',
    avatar: 'AD',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__tag">Client Stories</span>
          <h2 className="testimonials__title">What Our Clients Say</h2>
        </div>

        <div className="testimonials__cards">
          {testimonialsData.map((t, index) => (
            <div
              className={`testimonial-card ${index === activeIndex ? 'testimonial-card--active' : ''}`}
              key={t.id}
              onClick={() => setActiveIndex(index)}
              id={`testimonial-${t.id}`}
            >
              <div className="testimonial-card__stars">
                {Array(t.rating).fill(0).map((_, i) => (
                  <span key={i} className="testimonial-card__star">★</span>
                ))}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.avatar}</div>
                <div>
                  <h4 className="testimonial-card__name">{t.name}</h4>
                  <span className="testimonial-card__location">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
