import './Offerings.css';

const offeringsData = [
  {
    image: '/images/interior10.jpg',
    title: 'Professional Design Team',
    desc: 'Our skilled Interior designers will be allocated to your project as a specialised team.',
  },
  {
    image: '/images/interior11.jpg',
    title: 'Design Options',
    desc: 'Obtain a variety of interior design solutions till they match your requirements and expectations.',
  },
  {
    image: '/images/interior12.jpg',
    title: 'Material Selection',
    desc: "We'll accompany you to the vendor's showroom to finalise your material choice.",
  },
  {
    image: '/images/interior13.jpg',
    title: 'Timely Completion',
    desc: 'Ensured that the project was completed on schedule and according to the agreed-upon parameters.',
  },
  {
    image: '/images/interior14.jpg',
    title: 'Complete Home Solutions',
    desc: 'We deliver 360 Home Solutions for your comfort.',
  },
  {
    image: '/images/interior15.jpg',
    title: 'Fixed Design Charges',
    desc: "We charge you a set cost for design work. Don't be concerned about design fees rising by a percentage.",
  },
];

const Offerings = () => {
  return (
    <section className="offerings" id="offerings">
      <div className="offerings__container">
        <h2 className="offerings__title">
          OUR <span className="offerings__title-accent">OFFERINGS</span>
        </h2>
        <div className="offerings__grid">
          {offeringsData.map((item, i) => (
            <div className="offering-card" key={i} id={`offering-${i}`}>
              <div className="offering-card__image-wrapper">
                <img src={item.image} alt={item.title} className="offering-card__image" />
              </div>
              <div className="offering-card__content">
                <h3 className="offering-card__title">{item.title}</h3>
                <p className="offering-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
