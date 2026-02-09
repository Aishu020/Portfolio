import { useState } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  // { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar" role="banner">
      <nav className="navbar__inner" aria-label="Primary navigation">
        <a className="navbar__logo" href="#home" onClick={handleNavClick}>
          Portfolio
        </a>
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>
        <div
          id="primary-menu"
          className={`navbar__links ${menuOpen ? 'is-open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${
                activeSection === link.id ? 'is-active' : ''
              }`}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </nav>
    </header>
  );
}
