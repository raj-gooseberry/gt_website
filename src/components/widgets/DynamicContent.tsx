'use client';
import React from 'react';
import '../../assets/styles/dynamic_content.css';

const DynamicContent = () => {
  return (
    <div className="dynamic-section">
      <div className="video-visual">
        <video className="video" autoPlay loop muted poster="" role="none" aria-label="background gradient animation">
          <source
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="section-wrapper">
        <div className="content-wrapper">
          <Content
            imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
            imgAlt="Fantasy warrior - Video game character"
            headline="Unleash Your Inner Warrior"
            desc="Join the battle and conquer the arena with unmatched skill and strategy."
            highlight="Inner Warrior"
            className="content-1"
          />
          <Content
            imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
            imgAlt="Green haired ninja in armor - Video game character"
            headline="Embark on Your Legendary Journey"
            desc="Immerse Yourself in a World Where Legends Clash and Heroes Rise to Glory."
            highlight="Legendary Journey"
            className="content-2"
          />
          <Content
            imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
            imgAlt="Female warrior in armor - Video game character"
            headline="Master the Art of Magic"
            desc="Harness powerful spells and enchantments to dominate your foes and change the course of battle."
            highlight="Art of Magic"
            className="content-3"
          />
          <Content
            imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
            imgAlt="Agile warrior - Video game character"
            headline="Rise as the Champion"
            desc="Lead your team to victory with unparalleled strength and unwavering determination."
            highlight="Champion"
            className="content-4"
          />
        </div>
        <div className="visual">
          <div className="card-wrapper">
            <Card
              imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
              imgAlt="Fantasy warrior - Video game character"
              className="card-1"
            />
            <Card
              imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
              imgAlt="Green haired ninja in armor - Video game character"
              className="card-2"
            />
            <Card
              imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
              imgAlt="Female warrior in armor - Video game character"
              className="card-3"
            />
            <Card
              imgSrc="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
              imgAlt="Agile warrior - Video game character"
              className="card-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = ({ imgSrc, imgAlt, headline, desc, highlight, className }) => {
  return (
    <div className={`content ${className}`}>
      <div className="mobile-visual">
        <img className="card-img" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="meta">
        <h2 className="headline">
          {headline.split(highlight)[0]}
          <span className="text-highlight"> {highlight}</span>
          {headline.split(highlight)[1]}
        </h2>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

const Card = ({ imgSrc, imgAlt, className }) => {
  return (
    <div className={`card ${className}`}>
      <img className="card-img" src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default DynamicContent;
