'use client';
import React, { useEffect, useRef } from 'react';
import "../../assets/styles/scroll_clip.css"
const ScrollClip = () => {
  useEffect(() => {
    const box1 = document.querySelector('.box1') as HTMLElement;
    const box2 = document.querySelector('.box2') as HTMLElement;
    
    const modifier = window.innerWidth / 520;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (box1) {
        box1.style.clipPath = `circle(${scrollY * modifier}px at 0 0)`;
      }
      if (box2) {
        box2.style.clipPath = `circle(${scrollY * modifier}px at 100% 100%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="scroll-clip">
      <div className="box box1">
        <h2>Scroll</h2>
      </div>
      <div className="box box2">
        <h2>Scroll</h2>
      </div>
      <h2>Scroll</h2>
    </section>
  );
};

export default ScrollClip;
