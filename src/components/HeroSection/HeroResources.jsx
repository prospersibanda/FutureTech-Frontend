import React from 'react';
import './HeroResources.css';
import profile from '../../assets/logo.png'
import background from '../../assets/hero-bg.png'

const HeroResources = () => {
  return (
    <section className="hero-resources">
        <img src={background} className='moon-img' alt="" />
      <div className="resource-avatars">
        <img src={profile} alt="Avatar 1" />
        <img src={profile} alt="Avatar 2" />
        <img src={profile} alt="Avatar 3" />
        <img src={profile} alt="Avatar 4" />
      </div>
      <div className="resource-text">
        <p className="resource-title">Explore 1000+ resources</p>
        <p className="resource-description">
          Over 1,000 articles on emerging tech trends and breakthroughs.
        </p>
        <button className="explore-button">Explore Resources &#10140;</button>
      </div>
    </section>
  );
};

export default HeroResources;