import { useRef, useEffect } from 'react';
import './About.css';

function About() {
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
    <section id="about" className="section about" ref={ref}>
      <h2 className="section__heading">About Me</h2>
      <div className="about__content">
        <p>
          I am a third-year Software Engineering student at Kigali Independent University (ULK),
          pursuing a degree in Computer Science with a specialization in Software Engineering.
        </p>
        <p>
          My interests revolve around building web applications, learning backend technologies,
          and understanding how secure systems are designed and implemented.
        </p>
        <p>
          I enjoy working with Linux, customizing Neovim, and exploring topics related to web security.
        </p>
      </div>
    </section>
  );
}

export default About;
