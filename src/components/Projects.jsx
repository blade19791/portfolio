import { useRef, useEffect } from 'react';
import './Projects.css';
import locallinkImg from '../assets/locallink.png';

const PROJECTS = [
  {
    title: 'LocalLink',
    description: 'A premium localized service finder platform for Rwanda. Connects clients with vetted local professionals like plumbers, carpenters, and IT support across Kigali.',
    techs: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/blade19791/locallink',
    demo: '#',
    image: locallinkImg,
  },
  {
    title: 'Project One',
    description: 'Short placeholder description.',
    techs: ['React', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://picsum.photos/seed/project1/400/200',
  },
  {
    title: 'Project Two',
    description: 'Short placeholder description.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    image: 'https://picsum.photos/seed/project2/400/200',
  },
  {
    title: 'Project Three',
    description: 'Short placeholder description.',
    techs: ['Express', 'MySQL'],
    github: '#',
    demo: '#',
    image: 'https://picsum.photos/seed/project3/400/200',
  },
  {
    title: 'Project Four',
    description: 'Short placeholder description.',
    techs: ['React', 'Express', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://picsum.photos/seed/project4/400/200',
  },
];

function Projects() {
  const ref = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          cardRefs.current.forEach((card, i) => {
            if (card) {
              setTimeout(() => card.classList.add('visible'), i * 100);
            }
          });
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section projects" ref={ref}>
      <h2 className="section__heading">Some Things I've Built</h2>
      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <article
            key={project.title}
            className="projects__card"
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <div className="projects__card-image">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                width="400"
                height="200"
              />
            </div>
            <div className="projects__card-header">
              <div className="projects__card-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-description">{project.description}</p>
            <ul className="projects__card-techs">
              {project.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
