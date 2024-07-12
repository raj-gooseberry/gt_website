'use client';
import React from 'react';

interface CardProps {
  title: string;
  copy: string;
  button: string;
  backgroundImage: string;
}

const Card: React.FC<CardProps> = ({ title, copy, button, backgroundImage }) => {
  const cardStyle = {
    '--background-image': `url(${backgroundImage})`,
  } as React.CSSProperties;

  return (
    <div className="card" style={cardStyle}>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <button className="btn">{button}</button>
      </div>
    </div>
  );
};

export default Card;
