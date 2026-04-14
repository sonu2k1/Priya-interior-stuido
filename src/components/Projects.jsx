import { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Living Room',
    image: '/images/living-room.jpg',
    description: 'Contemporary design with warm tones and premium furnishing',
  },
  {
    id: 2,
    title: 'Luxury Bedroom Suite',
    category: 'Bedroom',
    image: '/images/bedroom.jpg',
    description: 'Elegant bedroom with custom wardrobes and ambient lighting',
  },
  {
    id: 3,
    title: 'Modular Kitchen',
    category: 'Kitchen',
    image: '/images/kitchen.jpg',
    description: 'Space-efficient kitchen with premium fittings and appliances',
  },
  {
    id: 4,
    title: 'Designer Lounge',
    category: 'Living Room',
    image: '/images/lounge.jpg',
    description: 'Artistic lounge area with statement furniture pieces',
  },
  {
    id: 5,
    title: 'Master Bedroom',
    category: 'Bedroom',
    image: '/images/bedroom2.jpg',
    description: 'Spacious master suite with integrated entertainment unit',
  },
  {
    id: 6,
    title: 'Premium Living Space',
    category: 'Living Room',
    image: '/images/living-room2.jpg',
    description: 'Open-concept living with custom TV wall and lighting',
  },
];

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <span className="projects__tag">Our Portfolio</span>
          <h2 className="projects__title">Stunning Interior Projects</h2>
          <p className="projects__desc">
            Explore our collection of beautifully designed spaces that reflect our commitment to excellence and attention to detail.
          </p>
        </div>

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter ${activeCategory === cat ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              id={`project-card-${project.id}`}
            >
              <div className="project-card__image-wrapper">
                <img src={project.image} alt={project.title} className="project-card__image" />
                <div className="project-card__overlay">
                  <span className="project-card__category">{project.category}</span>
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
