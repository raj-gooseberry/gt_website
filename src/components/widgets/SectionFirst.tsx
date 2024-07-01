// src/SectionFirst.js
import React from 'react';

const SectionFirst = () => {
  return (
    <section id="first" className="flex items-center justify-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(http://lorempixel.com/1280/720/nature)' }}>
      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl text-center px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </h1>
      </div>
    </section>
  );
};

export default SectionFirst;
