// Author: Daniel Van Wyk
import React from 'react';


const Projects = () => (
  <section className="projects-section" id="projects">
    <h2 className="projects-heading">Projects</h2>
    <ul className="projects-list">
      <li>
        <strong>SQL Assignment</strong>: Repository contains SQL statements for a database module.{' '}
        <a href="https://github.com/BicycleBi-Daniel/cmpg311.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
      <li>
        <strong>SPCA Project</strong>: Systems Analysis and Design module project.{' '}
        <a href="https://github.com/33505136-vanWykD/spca_project.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
    </ul>
    <div style={{marginTop: 40, textAlign: 'center', color: '#bfa77a', fontWeight: 600, fontSize: '1.1rem'}}>
      — Daniel Van Wyk
    </div>
  </section>
);

export default Projects;
