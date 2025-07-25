import React from 'react';
import '../styles.css';



const timelineStart = 2012;
const timelineEnd = 2025;


const allYears = Array.from({ length: timelineEnd - timelineStart + 1 }, (_, i) => timelineStart + i);

const Experience = () => (
  <section className="experience-section" id="experience">
    <div className="experience-container">
      <h2 className="experience-header">EXPERIENCE</h2>
      <div className="experience-timeline-wrapper">
        <div className="experience-timeline-line-bg" />
        <div className="experience-timeline">
          {allYears.map((year) => (
            <div className="experience-timeline-item" key={year}>
              <div className="experience-timeline-dot" />
              <div className="experience-timeline-year">{year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
