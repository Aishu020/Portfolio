import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'certifications',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const sectionOffsets = useMemo(() => {
    return SECTION_IDS.map((id) => ({
      id,
      top: 0,
    }));
  }, []);

  useEffect(() => {
    const updateOffsets = () => {
      SECTION_IDS.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          sectionOffsets[index].top = el.offsetTop;
        }
      });
    };

    const onScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = 'home';
      SECTION_IDS.forEach((id, index) => {
        if (scrollPosition >= sectionOffsets[index].top) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('resize', updateOffsets);
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionOffsets]);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === 'light' ? 'dark' : 'light'))
        }
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
