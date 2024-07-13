"use client"
import React, { useEffect } from 'react';
import "../../assets/styles/down_scroll.css"

const DownScroll = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    };

    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
    });

    // Cleanup event listeners on unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className='down-scroll'>
      <section id="section10" className="demo">
        <a href="#home">
          <span></span> scroll
        </a>
      </section>
    </div>
  );
};

export default DownScroll;
