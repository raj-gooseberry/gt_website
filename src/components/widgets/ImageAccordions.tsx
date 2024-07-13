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
      </div>
    </div>
  );
};

export default ImageAccordions;
