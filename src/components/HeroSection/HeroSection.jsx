import React from 'react';
import './HeroSection.css';
import HeroIntro from './HeroIntro';
import HeroResources from './HeroResources';
import HeroStats from './HeroStats';

const HeroSection = () => {
  return (
    <section className="hero">
        <div className='hero-top'>
            <div>
                <HeroIntro/>
                <HeroStats/>
            </div>
            <HeroResources/>
        </div>
    </section>
  );
};

export default HeroSection;