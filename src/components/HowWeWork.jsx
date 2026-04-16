import './HowWeWork.css';
import EstimateForm from './EstimateForm';

const steps = [
  {
    number: '01',
    title: 'Meet & Share',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="6" />
        <circle cx="32" cy="16" r="6" />
        <path d="M8 36c0-6 4-10 8-10h4" />
        <path d="M28 26h4c4 0 8 4 8 10" />
        <rect x="18" y="28" width="12" height="8" rx="2" />
        <line x1="24" y1="28" x2="24" y2="36" />
      </svg>
    ),
    desc: 'We like to meet & share our design ideas with our client test and with all those we collaborate with on our projects.',
  },
  {
    number: '02',
    title: 'Design Options',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="24" rx="2" />
        <rect x="12" y="16" width="24" height="16" rx="1" />
        <line x1="24" y1="36" x2="24" y2="42" />
        <line x1="18" y1="42" x2="30" y2="42" />
        <path d="M20 22l-3 6h6l-3 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="24" r="3" />
      </svg>
    ),
    desc: 'We build and design the project. Design is important to us, it matters.',
  },
  {
    number: '03',
    title: 'Client',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="14" r="6" />
        <path d="M14 36c0-6 4-12 10-12s10 6 10 12" />
        <path d="M18 40l3-4 3 4" />
        <path d="M24 40l3-4 3 4" />
        <circle cx="16" cy="38" r="3" />
        <circle cx="32" cy="38" r="3" />
      </svg>
    ),
    desc: "Priya Interior Studio firm values Client's, whether it is the teams we operate within, our collaboration with our clients, or the consideration of the inhabitants for whom we design.",
  },
];

const HowWeWork = () => {
  return (
    <section className="how-work" id="how-we-work">
      <div className="how-work__bg">
        <img src="/images/living-room.jpg" alt="" className="how-work__bg-img" />
        <div className="how-work__bg-overlay" />
      </div>
      <div className="how-work__container">
        <h2 className="how-work__title">HOW DO WE WORK?</h2>
        <div className="how-work__body">
          <div className="how-work__form-wrapper">
            <EstimateForm />
          </div>
          <div className="how-work__grid">
            {steps.map((step, i) => (
              <div className="how-work__step" key={i} id={`step-${i}`}>
                <span className="how-work__number">{step.number}</span>
                <div className="how-work__icon">{step.icon}</div>
                <h3 className="how-work__step-title">{step.title}</h3>
                <p className="how-work__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
