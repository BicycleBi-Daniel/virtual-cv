// Author: Daniel Van Wyk
import React from 'react';
import '../styles.css';



const Experience = () => (
  <section className="experience-section" id="experience">
    <div className="experience-container">
      <h2 className="experience-header">EXPERIENCE</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <div className="experience-card-header">
            <h3>Various Roles</h3>
            <span className="experience-dates">2012–2016</span>
          </div>
          <ul>
            <li>Worked as a cleaner and gardener at age 16 (2012)</li>
            <li>Pharmacy assistant at Deneysville Pharmacy (2014)</li>
            <li>Waiter and bartender at local venues (2015)</li>
            <li><strong>Proud achievement:</strong> Bought first car with cash at age 19.</li>
          </ul>
        </div>
        <div className="experience-card">
          <div className="experience-card-header">
            <h3>MARANAMAN YOUTH CAMPS, ORANJEVILLE</h3>
            <span className="experience-dates">2015</span>
          </div>
          <div className="experience-role">Youth Camp Facilitator</div>
          <ul>
            <li>Led activities and workshops for youth development</li>
            <li>Organised and managed camp logistics and team coordination</li>
          </ul>
        </div>
        <div className="experience-card">
          <div className="experience-card-header">
            <h3>BICYCLE BI PTY LTD</h3>
            <span className="experience-dates">2016 – Current</span>
          </div>
          <div className="experience-role">Senior Business Intelligence Consultant</div>
          <ul>
            <li>Progressed from Associate Consultant to senior role and management team member</li>
            <li>Lead project delivery across BI lifecycle: from business analysis to deployment</li>
            <li>Experienced in dashboard development, data modeling, and ETL processes</li>
            <li>Proficient in MicroStrategy (MCEP certified), SQL (including transactional SQL), and data warehouse design</li>
            <li>Managed teams delivering BI artefacts across multiple clients</li>
            <li>Currently pursuing Pyramid Analytics certification (Level 1 certified)</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{marginTop: 40, textAlign: 'center', color: '#bfa77a', fontWeight: 600, fontSize: '1.1rem'}}>
      — Daniel Van Wyk
    </div>
  </section>
);

export default Experience;
