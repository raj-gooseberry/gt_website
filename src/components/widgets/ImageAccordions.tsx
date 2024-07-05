'use client';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../assets/styles/image_accordions.css'; // Import the CSS file

const ImageAccordions = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: {},
      effect: 'cube',
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }, []);

  return (
    <div>
      <h1 className="heading">Scroll to see more</h1>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container-general">
              <div className="gallery-wrap wrap-effect-1">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container-general">
              <div className="gallery-wrap wrap-effect-2">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container-general">
              <div className="gallery-wrap wrap-effect-3">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container-general wrap-effect-4">
              <div className="gallery-wrap">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            Inspire by
            <a className="inspire" href="https://dribbble.com/galshir" target="_blank" rel="noopener noreferrer">
              &nbsp; Galshir arts
            </a>
            . Thank you
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAccordions;
