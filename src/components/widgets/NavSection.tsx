// ScrollNavigation.jsx
'use client';
import React, { useEffect } from 'react';
import '../../assets/styles/nav_section.css'; // Import CSS file for styling

const NavSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll('.navbarr a.dot');
      const top = window.scrollY;

      document.querySelectorAll<HTMLElement>('.sec').forEach((section) => {
        const id = section.id;
        const height = section.offsetHeight;
        const offset = section.offsetTop - 150;

        if (top >= offset && top < offset + height) {
          links.forEach((link) => link.classList.remove('active'));
          document.querySelector(`.navbarr [data-scroll="${id}"]`).classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbarr navbarrr">
      <ul>
        <li>
          <a href="#home" className="dot active" data-scroll="home">
            <span>home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="dot" data-scroll="about">
            <span>about</span>
          </a>
        </li>
        <li>
          <a href="#service" className="dot" data-scroll="service">
            <span>service</span>
          </a>
        </li>
        <li>
          <a href="#project" className="dot" data-scroll="project">
            <span>project</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="dot" data-scroll="contact">
            <span>contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;
