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
      <div>
        <section id="section10" className="demo">
          
          <a href="#thanks">
            <span></span> scroll
          </a>
        </section>
  
        <section id="thanks">
          <div>
            <h2></h2>
            <p>
              <a href="#section10"></a>
            </p>
          </div>
        </section>
      </div>
    );
  };
  
export default DownScroll;
