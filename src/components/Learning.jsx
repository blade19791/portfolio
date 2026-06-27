import { useRef, useEffect } from 'react';
import './Learning.css';

const TOPICS = [
  'Web Security',
  'OWASP Top 10',
  'Cryptography Fundamentals',
  'Secure Authentication',
];

function Learning() {
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
    <section id="learning" className="section learning" ref={ref}>
      <h2 className="section__heading">Currently Learning</h2>
      <p className="learning__description">
        I enjoy exploring topics beyond traditional web development and am currently
        focusing on building secure applications and understanding common security vulnerabilities.
      </p>
      <div className="learning__topics">
        {TOPICS.map((topic) => (
          <span key={topic} className="learning__tag">{topic}</span>
        ))}
      </div>
      <div className="learning__stats">
        <div className="learning__stat">
          <span className="learning__stat-number">4+</span>
          <span className="learning__stat-label">Projects Built</span>
        </div>
        <div className="learning__stat">
          <span className="learning__stat-number">10+</span>
          <span className="learning__stat-label">Technologies Used</span>
        </div>
        <div className="learning__stat">
          <span className="learning__stat-number">3+</span>
          <span className="learning__stat-label">Years Programming</span>
        </div>
      </div>
    </section>
  );
}

export default Learning;
