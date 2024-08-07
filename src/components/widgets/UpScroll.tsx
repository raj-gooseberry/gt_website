'use client';
import React, { useState, useEffect } from 'react';
import '../../assets/styles/up_scroll.css';

const UpScroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="up-scroll">
      <button className={`back-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop} type="button"></button>
    </div>
  );
};

export default UpScroll;
