const ICONS = {
  HTML: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 2l2.18 25.16L16 30l9.82-2.84L28 2H4z" fill="#E44D26" />
      <path d="M26.3 5.5H16v23.22l7.96-2.3L26.3 5.5z" fill="#F16529" />
      <path d="M11.5 13.5l.4 4.5H16v-4.5h-4.5zm-.8-8H16v4.5h-5l-.3-4.5z" fill="#fff" />
      <path d="M16 18h-4.1l.6 6.5L16 25.9v-7.9zm0-8.5v4.5h5.2l.4-4.5H16z" fill="#EBEBEB" />
      <path d="M16 13.5v-4.5h5.6l-.3-4.5H16V0h10.6l-.4 5.5-1 10.5H16z" fill="#fff" />
    </svg>
  ),
  CSS: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 2l2.18 25.16L16 30l9.82-2.84L28 2H4z" fill="#264DE4" />
      <path d="M26.3 5.5H16v23.22l7.96-2.3L26.3 5.5z" fill="#2965F1" />
      <path d="M10.5 11.5l.4 4.5h5.1v-4.5h-5.5zm-.8-8h6.3V8h-5.5l-.3-4.5z" fill="#fff" />
      <path d="M16 18h-3.6l.6 6.5L16 25.9v-7.9zm0-8.5v4.5h5.2l.4-4.5H16z" fill="#EBEBEB" />
      <path d="M16 13.5v-4.5h5.6l-.3-4.5H16V0h10.6l-.4 5.5-1 10.5H16z" fill="#fff" />
    </svg>
  ),
  JavaScript: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="2" fill="#F7DF1E" />
      <path d="M8.5 24.5l2.5-3.5c.8.8 1.5 1.5 2.5 1.5s1.5-.7 1.5-2v-7h-3v7c0 .3-.1.5-.5.5s-.7-.2-1-.5" fill="#000" />
      <path d="M18 25c1.5 0 2.8-.7 3.5-2h.5v2c-1 .5-2.3.8-4 .8-3 0-5-1.5-5-4.5s2-4.5 5-4.5c1.5 0 2.5.4 3.5 1l-1.5 2c-.5-.5-1.2-.8-2-.8-1.2 0-2 .7-2 2s.8 2 2 2z" fill="#000" />
    </svg>
  ),
  React: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <ellipse cx="16" cy="16" rx="13" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="16" rx="4" ry="13" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="4" ry="13" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(-60 16 16)" />
      <circle cx="16" cy="16" r="2" fill="#61DAFB" />
    </svg>
  ),
  'Node.js': (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 2L3 9.5v13L16 30l13-7.5v-13L16 2z" fill="#539E43" />
      <path d="M16 2v28l13-7.5v-13L16 2z" fill="#68A063" opacity="0.6" />
      <path d="M16 6l-9 5.2v10.6l9 5.2 9-5.2V11.2L16 6z" fill="#fff" opacity="0.1" />
      <path d="M12.5 12l-2.5 1.5v5l2.5 1.5 2.5-1.5v-5L12.5 12z" fill="#fff" opacity="0.3" />
      <path d="M19.5 12l2.5 1.5v5l-2.5 1.5-2.5-1.5v-5L19.5 12z" fill="#fff" opacity="0.3" />
      <path d="M16 14.5l-2.5 1.5v3l2.5 1.5 2.5-1.5v-3L16 14.5z" fill="#fff" opacity="0.4" />
    </svg>
  ),
  Express: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M2 22.5c2.5-1 4.5-3 5.5-5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 22.5c-2.5-1-4.5-3-5.5-5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 8v16" stroke="#fff" strokeWidth="1.8" />
      <path d="M24 12c2 .5 4 2 4 4s-2 3.5-4 4" stroke="#fff" strokeWidth="1.8" fill="none" />
      <path d="M20 14c1 .3 2 1.2 2 2s-1 1.7-2 2" stroke="#fff" strokeWidth="1.5" fill="none" />
      <path d="M28 12h2v8h-2" fill="#fff" />
    </svg>
  ),
  PostgreSQL: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M22.5 4c-1.5-1-3-1-4-.5l-1 .5" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 11c0-2-1-4-2.5-5.5" stroke="#336791" strokeWidth="1.5" />
      <path d="M28 18c0-3-1-5.5-2-7" stroke="#336791" strokeWidth="1.5" />
      <path d="M12 8l2-3h4l2 3v4l-2 3h-4l-2-3V8z" fill="#336791" />
      <path d="M14 12l-2 2v6l2 2h4l2-2v-6l-2-2" fill="#336791" />
      <path d="M16 22v6" stroke="#336791" strokeWidth="1.5" />
      <path d="M12 28h8" stroke="#336791" strokeWidth="1.5" />
      <path d="M10 26h12" stroke="#336791" strokeWidth="1.5" />
    </svg>
  ),
  MySQL: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 18c2 8 8 12 14 12s8-4 8-8-4-8-8-8-6 2-8 4" stroke="#00758F" strokeWidth="1.5" fill="none" />
      <path d="M20 12c2 2 4 6 2 10" stroke="#F29111" strokeWidth="1.5" fill="none" />
      <path d="M18 8c-2-2-6-4-10-2S4 10 6 14" stroke="#00758F" strokeWidth="1.5" fill="none" />
      <path d="M10 6c2-2 6-3 8 0" stroke="#F29111" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="24" r="1.5" fill="#00758F" />
    </svg>
  ),
  Git: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M2 16l14 14 14-14L16 2 2 16z" fill="#F05032" />
      <path d="M12 8l8 8-4 4" stroke="#fff" strokeWidth="1.5" fill="none" />
      <path d="M16 12l4 4-4 4" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="12" cy="8" r="2" fill="#fff" />
      <circle cx="20" cy="16" r="2" fill="#fff" />
      <circle cx="12" cy="24" r="2" fill="#fff" />
    </svg>
  ),
  Neovim: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 4l8 24h4L26 4h-4l-6 18L10 4H6z" fill="#57A143" />
      <path d="M18 4l-4 12-2-6 2-6h4z" fill="#37A842" opacity="0.6" />
    </svg>
  ),
  Linux: (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="8" r="5" stroke="#FCC624" strokeWidth="1.5" fill="none" />
      <path d="M10 18c0-3 2-5 6-5s6 2 6 5" stroke="#FCC624" strokeWidth="1.5" fill="none" />
      <path d="M8 24c1-3 4-5 8-5s7 2 8 5" stroke="#FCC624" strokeWidth="1.5" fill="none" />
      <path d="M16 13v10" stroke="#FCC624" strokeWidth="1.5" />
      <path d="M12 28c1-1 2-2 4-2s3 1 4 2" stroke="#FCC624" strokeWidth="1.5" fill="none" />
    </svg>
  ),
};

function TechIcon({ name }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return <span className="tech-icon">{icon}</span>;
}

export default TechIcon;
