'use client'

import React, { useEffect } from 'react';
import '../../assets/styles/header.css'
import Image from 'next/image';
import logo from '../../assets/images/GT logo.png';
import DownScroll from './DownScroll';

const Header = () => {
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    let width = window.innerWidth;

    function handleMouseMove(e) {
      let normalizedPosition = e.pageX / (width / 2) - 1;
      let speedSlow = 100 * normalizedPosition;
      let speedFast = 200 * normalizedPosition;
      spansSlow.forEach((span: any) => {
        span.style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span: any) => {
        span.style.transform = `translate(${speedFast}px)`
      })
    }
    //we need to recalculate width when the window is resized
    function handleWindowResize() {
      width = window.innerWidth;
    }
  })
  return (
    <>
      <div className='flex justify-center items-center py-[10vh]'>
        <Image
          width={150}
          height={150}
          alt="Test"
          src={logo}
        />
      </div>
      {/* <div className='company_logo'>
        <Image
          width={200}
          height={200}
          alt="Test"
          src={logo}
        />
      </div>
      <div className='company_name'>
        <span>

        <Image
          width={200}
          height={50}
          alt="Test"
          src={name}
          />
          </span>
      </div> */}
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
    </>
  );
};

export default Header;
