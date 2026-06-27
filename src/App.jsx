import { useCallback } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Learning from './components/Learning';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { useActiveSection } from './hooks/useActiveSection';
import './App.css';

const SECTIONS = ['about', 'skills', 'learning', 'projects', 'education', 'contact'];

function App() {
  const activeSection = useActiveSection(SECTIONS);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="app">
      <Sidebar
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />
      <main className="content">
        <About />
        <Skills />
        <Learning />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
