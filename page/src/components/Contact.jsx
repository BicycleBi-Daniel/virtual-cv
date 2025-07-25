import React from 'react';

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2 className="contact-heading">Contact</h2>
    <div className="contact-content">
      <p>Feel free to reach out for collaboration, questions, or just to connect!</p>
      <form className="contact-form" action="mailto:vwyk.daniel@gmail.com" method="POST" encType="text/plain">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/daniel-van-wyk-09253617b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://github.com/BicycleBi-Daniel" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="mailto:vwyk.daniel@gmail.com">vwyk.daniel@gmail.com</a>
      </div>
    </div>
  </section>
);

export default Contact;
