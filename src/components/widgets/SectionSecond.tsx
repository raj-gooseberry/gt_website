// src/SectionSecond.js
import React from 'react';

const SectionSecond = () => {
  return (
    <section id="second" className="flex flex-col items-center justify-center min-h-screen bg-green-600">
      <div className="flex space-x-4">
        {[1, 2, 3].map((card) => (
          <div key={card} className="bg-black bg-opacity-20 p-4 shadow-lg">
            <h4 className="text-center text-lg">Lorem ipsum dolor sit amet consectetur</h4>
            <div className="my-2">
              <img src="http://www.lorempixel.com/250/120" alt="" className="w-full h-auto" />
            </div>
            <div className="text-center text-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSecond;
