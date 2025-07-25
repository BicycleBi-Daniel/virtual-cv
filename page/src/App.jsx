

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import './styles.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      {/* Future sections: <Education />, <Skills />, <Resume />, <Projects />, <Contact /> */}
    </>
  );
}

export default App;
