// src/SectionThird.js
import React from 'react';

const SectionThird = () => {
  return (
    <section id="third" className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white">
      <h2 className="text-3xl my-4">Third</h2>
      <div className="flex space-x-4">
        <div className="w-1/2 text-center p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem reiciendis eius consequuntur fugit quos nulla natus...
        </div>
        <div className="w-1/2 text-center p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non maxime odit cum quod blanditiis facilis nobis repellat id nulla...
        </div>
      </div>
    </section>
  );
};

export default SectionThird;
