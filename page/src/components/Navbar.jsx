import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

const NAV_LINKS = [
  { label: 'HOME', href: '#top' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'WORK EXPERIENCE', href: '#experience' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'RESUME', href: '#resume' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < window.innerHeight * 0.1) {
        setVisible(true);
      } else if (!interacting) {
        setVisible(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interacting]);

  useEffect(() => {
    if (interacting) {
      setVisible(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => {
        setVisible(false);
        setInteracting(false);
      }, 2000);
    }
    return () => hideTimeout.current && clearTimeout(hideTimeout.current);
  }, [interacting]);

  const handleNavMouseEnter = () => setInteracting(true);
  const handleNavMouseLeave = () => setInteracting(false);

  return (
    <nav
      className={`navbar${visible ? ' navbar-visible' : ' navbar-hidden'}`}
      onMouseEnter={handleNavMouseEnter}
      onMouseLeave={handleNavMouseLeave}
    >
      <ul className="navbar-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
