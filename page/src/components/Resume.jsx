
const Resume = () => (
  <section id="resume">
    <h2>Resume / CV</h2>
    <iframe
      src="/assets/resume.pdf"
      width="100%"
      height="700px"
      title="Resume"
      style={{ border: '1px solid #1a223f', borderRadius: 8, background: '#fff' }}
    />
    <div style={{ marginTop: 16 }}>
      <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#1a223f', fontWeight: 500 }}>
        Download my Resume (PDF)
      </a>
    </div>
  </section>
);

export default Resume;
