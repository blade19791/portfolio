import { useRef, useEffect } from 'react';
import TechIcon from './TechIcon';
import './Skills.css';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Neovim', 'Linux'],
  },
];

function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <h2 className="section__heading">Technologies I Work With</h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skills__card">
            <h3 className="skills__card-title">{group.title}</h3>
            <ul className="skills__list">
              {group.skills.map((skill) => (
                <li key={skill} className="skills__item">
                  <TechIcon name={skill} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
