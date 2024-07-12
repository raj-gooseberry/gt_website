'use client';
import React from 'react';
import Card from './Card';
import '../../assets/styles/card_components.css';

const cards = [
  {
    title: 'Mountain View',
    copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
    button: 'View Trips',
    imageId: '1517021897933-0e0319cfbc28',
  },
  {
    title: 'To The Beach',
    copy: 'Plan your next beach trip with these fabulous destinations',
    button: 'View Trips',
    imageId: '1533903345306-15d1c30952de',
  },
  {
    title: 'Desert Destinations',
    copy: "It's the desert you've always dreamed of",
    button: 'Book Now',
    imageId: '1545243424-0ce743321e11',
  },
  {
    title: 'Explore The Galaxy',
    copy: 'Seriously, straight up, just blast off into outer space today',
    button: 'Book Now',
    imageId: '1531306728370-e2ebd9d7bb99',
  },
];

const CardComponents = () => {
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          copy={card.copy}
          button={card.button}
          backgroundImage={`https://images.unsplash.com/photo-${card.imageId}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ`}
        />
      ))}
    </main>
  );
};

export default CardComponents;
