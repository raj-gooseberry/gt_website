'use client';

import React, { useEffect } from 'react';
import '../../assets/styles/header.css';
import '../../assets/images/GT logo.png';
import Image from 'next/image';
import logo from '../../assets/images/GT logo.png';
import Layer_1 from '../../assets/images/Layer_1.svg';
import DownScroll from './DownScroll';

const Header = () => {
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');
    const elems = document.querySelectorAll('.elem');

    let width = window.innerWidth;

    function handleMouseMove(e) {
      let normalizedPosition = e.pageX / (width / 2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;
      spansSlow.forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedFast}px)`;
      });

      elems.forEach((val) => {
        const img = val.querySelector('.first') as HTMLElement;
        if (img) {
          const rect = img.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

          img.style.left = e.clientX + 'px';
          img.style.top = e.clientY + 'px';
          img.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }
      });
    }

    function handleWindowResize() {
      width = window.innerWidth;
    }

    elems.forEach((val) => {
      val.addEventListener('mouseenter', function () {
        const img = val.querySelector('.first') as HTMLElement;
        if (img) {
          img.style.opacity = '1';
        }
      });
      val.addEventListener('mouseleave', function () {
        const img = val.querySelector('.first') as HTMLElement;
        if (img) {
          img.style.opacity = '0';
        }
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div id="elem1" className="elem element">
        <img className="first" src={Layer_1.src} alt="Layer 1" />
      
      <div className="flex justify-center items-center py-[10vh] bg">
        <Image width={150} height={150} alt="Test" src={logo} />
      </div>
      <div className="my-[10vh]">
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="slogan spanSlow">Aladdin</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="slogan spanSlow">Aladdin</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="slogan spanSlow">What do</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="slogan spanSlow">what do</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="slogan spanFast">you</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="slogan spanFast">you</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="slogan spanSlow">want</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="slogan spanSlow">want</span>
            </div>
          </div>
        </div>
      </div>
      <DownScroll />
      </div>
    </>
  );
};

export default Header;


