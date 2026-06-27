import { useRef, useEffect } from 'react';
import './Contact.css';

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:example@email.com', text: 'example@email.com' },
  { label: 'GitHub', href: 'https://github.com/placeholder', text: 'github.com/placeholder' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/placeholder', text: 'linkedin.com/in/placeholder' },
  { label: 'Twitter', href: 'https://twitter.com/placeholder', text: 'twitter.com/placeholder' },
];

function Contact() {
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
    <section id="contact" className="section contact" ref={ref}>
      <h2 className="section__heading">Get In Touch</h2>
      <p className="contact__text">
        I am currently open to internship opportunities, collaborations, and discussions
        about software development and security.
      </p>
      <div className="contact__links">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            <span className="contact__link-label">{link.label}</span>
            <span className="contact__link-text">{link.text}</span>
          </a>
        ))}
      </div>
      <div className="contact__footer">
        <p>Designed &amp; Built by James</p>
      </div>
    </section>
  );
}

export default Contact;
