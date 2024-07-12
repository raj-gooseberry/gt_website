'use client';
import React, { useState, useEffect } from 'react';
import '../../assets/styles/up_scroll.css'; // Create this CSS file with the styles provided

const UpScroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
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

  return <button className={`back-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop} type="button"></button>;
};

export default UpScroll;
