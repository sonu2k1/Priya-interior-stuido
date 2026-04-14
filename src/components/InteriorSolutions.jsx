import './InteriorSolutions.css';

const solutionsData = [
  {
    title: 'Modular Kitchen',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="28" width="48" height="28" rx="2"/>
        <line x1="32" y1="28" x2="32" y2="56"/>
        <rect x="14" y="16" width="36" height="12" rx="2"/>
        <line x1="22" y1="16" x2="22" y2="28"/>
        <line x1="42" y1="16" x2="42" y2="28"/>
        <circle cx="20" cy="42" r="3"/>
        <circle cx="44" cy="42" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Space Saving Furniture',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="16" y="24" width="32" height="20" rx="4"/>
        <path d="M12 44h40v4H12z"/>
        <line x1="16" y1="48" x2="16" y2="56"/>
        <line x1="48" y1="48" x2="48" y2="56"/>
        <circle cx="38" cy="14" r="6"/>
        <path d="M35 11h6v2h-6z"/>
        <line x1="38" y1="8" x2="38" y2="11"/>
      </svg>
    ),
  },
  {
    title: 'False Ceiling',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 20h48"/>
        <path d="M12 20v8h40v-8"/>
        <path d="M20 28v6"/>
        <path d="M44 28v6"/>
        <ellipse cx="20" cy="38" rx="6" ry="4"/>
        <ellipse cx="44" cy="38" rx="6" ry="4"/>
        <line x1="32" y1="20" x2="32" y2="28"/>
        <path d="M28 28v4l4 6 4-6v-4"/>
      </svg>
    ),
  },
  {
    title: 'Interior Wallpaper',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="8" width="40" height="48" rx="2"/>
        <rect x="18" y="14" width="14" height="14" rx="1"/>
        <line x1="18" y1="36" x2="46" y2="36"/>
        <line x1="18" y1="42" x2="46" y2="42"/>
        <line x1="18" y1="48" x2="36" y2="48"/>
        <circle cx="42" cy="20" r="4" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Wall Paint',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="10" y="12" width="24" height="32" rx="2"/>
        <path d="M34 20h12l4 4v20H34"/>
        <line x1="10" y1="36" x2="34" y2="36"/>
        <rect x="16" y="44" width="4" height="12" rx="1"/>
        <path d="M40 12l8-4v12l-8-4"/>
      </svg>
    ),
  },
  {
    title: 'Dressing Tables',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="14" y="28" width="36" height="24" rx="2"/>
        <line x1="32" y1="28" x2="32" y2="52"/>
        <line x1="18" y1="52" x2="18" y2="58"/>
        <line x1="46" y1="52" x2="46" y2="58"/>
        <ellipse cx="32" cy="18" rx="10" ry="12"/>
        <circle cx="32" cy="16" r="4" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Storage & Wardrobe',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="8" width="40" height="48" rx="2"/>
        <line x1="32" y1="8" x2="32" y2="56"/>
        <rect x="16" y="14" width="12" height="8" rx="1"/>
        <rect x="36" y="14" width="12" height="8" rx="1"/>
        <rect x="16" y="28" width="12" height="8" rx="1"/>
        <rect x="36" y="28" width="12" height="8" rx="1"/>
        <rect x="16" y="42" width="12" height="8" rx="1"/>
        <rect x="36" y="42" width="12" height="8" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'TV Units',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="12" width="40" height="26" rx="2"/>
        <rect x="16" y="16" width="32" height="18" rx="1"/>
        <rect x="8" y="42" width="48" height="10" rx="2"/>
        <line x1="20" y1="42" x2="20" y2="52"/>
        <line x1="44" y1="42" x2="44" y2="52"/>
      </svg>
    ),
  },
  {
    title: 'Bathroom',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 32h40"/>
        <path d="M16 32v12c0 4 4 8 16 8s16-4 16-8V32"/>
        <path d="M16 16v16"/>
        <path d="M16 16c0-4 4-8 8-8"/>
        <circle cx="28" cy="12" r="3"/>
        <line x1="28" y1="8" x2="28" y2="6"/>
        <line x1="24" y1="56" x2="22" y2="60"/>
        <line x1="40" y1="56" x2="42" y2="60"/>
      </svg>
    ),
  },
  {
    title: 'Study Table',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="10" y="28" width="44" height="4" rx="1"/>
        <line x1="14" y1="32" x2="14" y2="54"/>
        <line x1="50" y1="32" x2="50" y2="54"/>
        <line x1="10" y1="48" x2="24" y2="48"/>
        <rect x="36" y="32" width="14" height="10" rx="1"/>
        <path d="M30 28l-4-12h8"/>
        <circle cx="36" cy="14" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Movable Furniture',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="14" y="16" width="36" height="28" rx="2"/>
        <line x1="14" y1="30" x2="50" y2="30"/>
        <circle cx="22" cy="52" r="4"/>
        <circle cx="42" cy="52" r="4"/>
        <line x1="22" y1="44" x2="22" y2="48"/>
        <line x1="42" y1="44" x2="42" y2="48"/>
        <line x1="26" y1="22" x2="38" y2="22"/>
        <line x1="26" y1="36" x2="38" y2="36"/>
      </svg>
    ),
  },
  {
    title: 'Light',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 8l12 20 12-20"/>
        <path d="M12 8l20 24 20-24"/>
        <line x1="32" y1="32" x2="32" y2="44"/>
        <path d="M26 44h12"/>
        <line x1="20" y1="50" x2="20" y2="56"/>
        <line x1="32" y1="50" x2="32" y2="58"/>
        <line x1="44" y1="50" x2="44" y2="56"/>
        <circle cx="20" cy="58" r="2" fill="currentColor"/>
        <circle cx="32" cy="60" r="2" fill="currentColor"/>
        <circle cx="44" cy="58" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

const InteriorSolutions = () => {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__bg">
        <img src="/images/living-room2.jpg" alt="" className="solutions__bg-img" />
        <div className="solutions__bg-overlay" />
      </div>
      <div className="solutions__container">
        <h2 className="solutions__title">
          A TO Z <span className="solutions__title-accent">INTERIOR SOLUTIONS</span>
        </h2>
        <div className="solutions__grid">
          {solutionsData.map((item, i) => (
            <div className="solution-item" key={i} id={`solution-${i}`}>
              <div className="solution-item__icon">
                {item.icon}
              </div>
              <span className="solution-item__label">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorSolutions;
