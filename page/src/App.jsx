

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import EducationSection from './components/EducationSection';
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
      {/* <section id="education">
        <EducationSection />
      </section> */}
      {/* Future sections: <Skills />, <Resume />, <Projects />, <Contact /> */}
    </div>
  );
}

export default App;
