import React from 'react';
import '../styles.css';

const Home = () => (
  <section className="home" id="home">
    <div className="home-left">
      <h1>HELLO!</h1>
      <h2>I AM DANIEL VAN WYK</h2>
    </div>
    <div className="home-right">
      <img
        src="/assets/profile_image.png"
        alt="Daniel van Wyk"
        className="home-profile-img"
      />
    </div>
  </section>
);

export default Home;
