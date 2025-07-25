// Author: Daniel Van Wyk
import React from 'react';

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-category">
        <h3>Core Business Intelligence Skills</h3>
        <ul className="skills-list">
          <li>BI Development Lifecycle (end-to-end delivery)</li>
          <li>Data Warehouse Design & Architecture</li>
          <li>ETL Processes & Tools</li>
          <li>Dashboard Development & Data Visualization</li>
          <li>Business Requirements Analysis</li>
          <li>Data Modeling</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Programming & Scripting</h3>
        <ul className="skills-list">
          <li>SQL (including Transactional SQL)</li>
          <li>Python (intermediate)</li>
          <li>C#</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML / XML</li>
          <li>JSON</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Tools & Technologies</h3>
        <ul className="skills-list">
          <li>MicroStrategy (MCEP Certified)</li>
          <li>Pyramid Analytics (Level 1 Certified)</li>
          <li>SQL Server</li>
          <li>IDEs (Visual Studio, VS Code, etc.)</li>
          <li>Linux Server Setup & Maintenance</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Project & Team Skills</h3>
        <ul className="skills-list">
          <li>Project Management</li>
          <li>Agile Workflows</li>
          <li>BI Team Leadership & Mentorship</li>
          <li>Cross-functional Collaboration</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
