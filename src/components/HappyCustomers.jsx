import './HappyCustomers.css';

const HappyCustomers = () => {
  const scrollToForm = () => {
    const section = document.getElementById('how-we-work');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="happy" id="happy-customers">
      <div className="happy__container">
        <div className="happy__content">
          <span className="happy__tag">Happy Customers</span>
          <h2 className="happy__title">
            <span className="happy__title-accent">Delighted by Our Service</span>
          </h2>
          <p className="happy__desc">
            Discover the stories of satisfied clients who have experienced the remarkable journey of transformation with us. From dream concepts to stunning reality, our interior design expertise has left smiles on the faces of those we've had the pleasure to serve. Read on to learn how we've turned visions into vibrant, livable spaces that our customers now call home.
          </p>
          <button className="happy__cta" onClick={scrollToForm} id="happy-cta-btn">
            Get Free Estimate Price
          </button>
        </div>
        <div className="happy__image-wrapper">
          <img
            src="/images/interior9.jpg"
            alt="Happy customers enjoying their new interior"
            className="happy__image"
          />
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
