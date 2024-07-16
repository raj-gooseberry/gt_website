import React, { useEffect } from 'react';
import '../../assets/styles/header.css'; // Import your CSS file
import Layer_1 from '../../assets/images/Layer_1.svg'; // Import your image

const CustomCursor = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.elem');

    elems.forEach((val) => {
      val.addEventListener('mouseenter', handleMouseEnter);
      val.addEventListener('mouseleave', handleMouseLeave);
      val.addEventListener('mousemove', handleMouseMove);

      return () => {
        val.removeEventListener('mouseenter', handleMouseEnter);
        val.removeEventListener('mouseleave', handleMouseLeave);
        val.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, []);

  const handleMouseEnter = (event) => {
    const img = event.currentTarget.querySelector('.first');
    if (img) {
      img.style.opacity = '1';
    }
  };

  const handleMouseLeave = (event) => {
    const img = event.currentTarget.querySelector('.first');
    if (img) {
      img.style.opacity = '0';
    }
  };

  const handleMouseMove = (event) => {
    const img = event.currentTarget.querySelector('.first');
    if (img) {
      const rect = img.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);

      img.style.left = `${event.clientX}px`;
      img.style.top = `${event.clientY}px`;
      img.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }
  };

  return (
    <div id="elem1" className="elem elements">
      <img className="first" src={Layer_1} alt="" />
    </div>
  );
};

export default CustomCursor;
