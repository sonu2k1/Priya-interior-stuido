import './GuaranteeBanner.css';

const guarantees = [
  { label: 'On-time Delivery', icon: '🕐' },
  { label: 'Best Price', icon: '💰' },
  { label: 'Superior Quality', icon: '⭐' },
  { label: 'Best Policies', icon: '📋' },
];

const GuaranteeBanner = () => {
  return (
    <section className="guarantee" id="guarantee">
      <div className="guarantee__container">
        <div className="guarantee__badge">
          <div className="guarantee__badge-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="20" cy="20" r="16" />
              <path d="M12 20l5 5 11-11" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="guarantee__badge-text">
            <span className="guarantee__badge-title">Priya Interior Studio</span>
            <span className="guarantee__badge-sub">GUARANTEE</span>
          </div>
        </div>
        <div className="guarantee__items">
          {guarantees.map((item, i) => (
            <div className="guarantee__item" key={i}>
              <span className="guarantee__item-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
