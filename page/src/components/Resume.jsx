// Author: Daniel Van Wyk
import React from 'react';

const Resume = () => (
  <section id="resume" style={{ backgroundColor: '#000', padding: '40px 0', color: '#fff' }}>
    <div className="container">
      <h2 className="resume-heading">Resume / CV</h2>
      <iframe
        src="/virtual-cv/assets/resume.pdf"
        width="100%"
        height="1100px"
        title="Resume"
        style={{ border: '1px solid #1a223f', borderRadius: 8, background: '#fff' }}
      />
      <div style={{ marginTop: 16 }}>
        <a
        href="/virtual-cv/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1a223f', fontWeight: 500 }}
        >
          Download my Resume (PDF)
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
