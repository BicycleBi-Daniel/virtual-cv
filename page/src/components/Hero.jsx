import React from 'react';
import '../styles.css';

const Hero = () => (
  <section className="hero" id="about">
    <div className="hero-left">
      <h1>HELLO!</h1>
      <h2>I AM DANIEL VAN WYK</h2>
    </div>
    <div className="hero-right">
      <img
        src="/assets/profile_image.png"
        alt="Daniel van Wyk"
        className="hero-profile-img"
      />
    </div>
  </section>
);

export default Hero;
