import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import EducationSection from './components/EducationSection';
import Skills from './components/Skills';
import Resume from './components/Resume';
import './styles.css';

function App() {
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
      {/* <section id="education">
        <EducationSection />
      </section> */}
      {/* Future sections: <Projects />, <Contact /> */}
    </div>
  );
}

export default App;
