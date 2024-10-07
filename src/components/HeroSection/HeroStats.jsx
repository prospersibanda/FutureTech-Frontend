import React from 'react';
import './HeroStats.css';

const HeroStats = () => {
  return (
    <section className="hero-stats">
      <div className="stat">
        <h3>300<span className="plus">+</span></h3>
        <p>Resources available</p>
      </div>
      <div className="stat">
        <h3>12k<span className="plus">+</span></h3>
        <p>Total Downloads</p>
      </div>
      <div className="stat">
        <h3>10k<span className="plus">+</span></h3>
        <p>Active Users</p>
      </div>
    </section>
  );
};

export default HeroStats;