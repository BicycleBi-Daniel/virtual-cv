import React from 'react';
import '../styles/education.css';

const educationData = [
  {
    year: '2014',
    title: 'Matriculated',
    institution: 'Vereeniging Gimnasium',
    details: '',
  },
  {
    year: '2021',
    title: 'Certified MicroStrategy Developer',
    institution: 'MicroStrategy',
    details: '',
  },
  {
    year: '2022',
    title: 'Certified Pyramid Analytics Professional',
    institution: 'Pyramid Analytics',
    details: '',
  },
  {
    year: '2025',
    title: 'BSc Computer Science',
    institution: 'North-West University',
    details: 'In progress',
  },
];

const EducationSection = () => (
  <section className="education-section" id="education">
    <h2 className="education-header">Education & Certifications</h2>
    <div className="education-timeline">
      {educationData.map((item, idx) => (
        <div className="education-item" key={idx}>
          <div className="education-year">{item.year}</div>
          <div className="education-details">
            <div className="education-title">{item.title}</div>
            <div className="education-institution">{item.institution}</div>
            {item.details && <div className="education-extra">{item.details}</div>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
