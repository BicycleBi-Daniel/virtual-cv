// Author: Daniel Van Wyk
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import EducationSection from './components/EducationSection';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
          
          
      <section id="contact">
        <Contact />
      </section>
      <div style={{marginTop: 40, textAlign: 'center', color: '#bfa77a', fontWeight: 600, fontSize: '1.1rem'}}>
        — Daniel Van Wyk
      </div>
    </div>
  );
}

export default App;
