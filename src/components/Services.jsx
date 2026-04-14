import './Services.css';

const servicesData = [
  {
    icon: '🏠',
    title: 'Residential Interior',
    desc: 'Complete home interior solutions from concept to execution, tailored to your lifestyle and preferences.',
  },
  {
    icon: '🔑',
    title: 'Turnkey Projects',
    desc: 'End-to-end project management — we handle everything from design, material procurement to final handover.',
  },
  {
    icon: '🪑',
    title: 'Modular Interiors',
    desc: 'Factory-finished modular kitchens, wardrobes, and storage solutions with premium quality materials.',
  },
  {
    icon: '🎨',
    title: 'Design Consultation',
    desc: 'Expert design advice from our seasoned interior designers to transform your vision into reality.',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <span className="services__tag">What We Offer</span>
          <h2 className="services__title">Our Premium Services</h2>
          <p className="services__desc">
            We deliver world-class interior design solutions that combine aesthetics with functionality.
          </p>
        </div>

        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={index}
              id={`service-card-${index}`}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <div className="service-card__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
