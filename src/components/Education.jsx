import { useRef, useEffect } from 'react';
import './Education.css';

function Education() {
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
    <section id="education" className="section education" ref={ref}>
      <h2 className="section__heading">Education</h2>
      <div className="education__card">
        <div className="education__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <div className="education__body">
          <h3 className="education__degree">Bachelor of Computer Science</h3>
          <p className="education__university">Kigali Independent University (ULK)</p>
          <p className="education__detail">Department: Computer Science</p>
          <p className="education__detail">Specialization: Software Engineering</p>
          <p className="education__year">Current Year: Year 3</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
