// Author: Daniel Van Wyk


// Author: Daniel Van Wyk
import React from 'react';
import './AboutMe.css';
import EducationSection from '../styles/../components/EducationSection';

const AboutMe = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <div className="about-left">
        <img
          src="/virtual-cv/assets/aboutme.jpg"
          alt="Daniel Van Wyk"
          className="about-profile-img"
        />
        <h2 className="about-name">Daniel Van Wyk</h2>
        <h3 className="about-title">Business Intelligence Consultant</h3>
      </div>
      <div className="about-right">
        <div className="about-block">
          <h3 className="about-section-header">ABOUT ME</h3>
          <h2 className="about-heading">About Me</h2>
          <p className="about-body">
            I am a Business Intelligence Consultant with nearly 10 years of experience across the full BI development lifecycle, including data warehousing, ETL, dashboarding, and SQL. Known for delivering practical, insight-driven solutions and progressing rapidly into leadership roles. Certified in MicroStrategy and Pyramid Analytics, with a strong focus on aligning project outcomes with business objectives.
          </p>
          <p className="about-body">
            I’m a patient and thorough learner with a deep respect for detail. I thrive in environments where I can stick around, grow, and excel, both technically and personally. My creative touch and ability to apply abstract thinking often help me see patterns and possibilities others might miss.
          </p>
        </div>
        
        <EducationSection />
      </div>
    </div>
    <div style={{marginTop: 40, textAlign: 'center', color: '#bfa77a', fontWeight: 600, fontSize: '1.1rem'}}>
      — Daniel Van Wyk
    </div>
  </section>
);

export default AboutMe;
