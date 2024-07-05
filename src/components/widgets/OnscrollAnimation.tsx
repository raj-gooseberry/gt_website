'use client';
import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import '../../assets/styles/onscroll_animation.css'; // Import your CSS file

const OnscrollAnimation = () => {
  useEffect(() => {
    // Easing function for smooth scroll
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    // Smooth Scroll
    const smoothScrollTo = (targetPosition, duration) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const easedScroll = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, easedScroll);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    // Scroll Down - Button
    window.addEventListener('scroll', () => {
      const scrollBtn = document.getElementById('scrollBtn');
      const box = document.querySelector('.scrollBtn');
      if (window.scrollY > 0) {
        box.classList.add('move');
      } else {
        box.classList.remove('move');
      }
    });

    // Preloader Text
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      const firstText = document.getElementById('first-text');
      const secondText = document.getElementById('second-text');
      firstText.style.opacity = '1';
      setTimeout(() => {
        firstText.style.opacity = '0';
        secondText.style.opacity = '1';
      }, 1000);
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 4000);
    });

    // Loader Video
    window.addEventListener('load', () => {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
      setTimeout(() => {
        const loaderVideo = document.getElementById('loaderVideo');
        loaderVideo.style.width = '90%';
        loaderVideo.style.height = '90%';
        loaderVideo.style.transform = 'translate(-50%, -50%)';
        loaderVideo.style.top = '50%';
        loaderVideo.style.left = '50%';
        loaderVideo.style.position = 'fixed';
        loaderVideo.style.borderRadius = '12px';
      }, 2000);
      setTimeout(() => {
        const loaderVideo = document.getElementById('loaderVideo');
        if (window.matchMedia('(max-width: 576px)').matches) {
          loaderVideo.style.width = '220px';
          loaderVideo.style.height = '220px';
          loaderVideo.style.top = '25%';
          loaderVideo.style.left = '24px';
          loaderVideo.style.transform = 'translate(0%, -25%)';
        } else if (window.matchMedia('(max-width: 767px)').matches) {
          loaderVideo.style.width = '220px';
          loaderVideo.style.height = '220px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '40px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 991px)').matches) {
          loaderVideo.style.width = '310px';
          loaderVideo.style.height = '310px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '40px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 1199px)').matches) {
          loaderVideo.style.width = '400px';
          loaderVideo.style.height = '400px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '60px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 1399px)').matches) {
          loaderVideo.style.width = '450px';
          loaderVideo.style.height = '450px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '80px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else {
          loaderVideo.style.width = '500px';
          loaderVideo.style.height = '500px';
          loaderVideo.style.top = '50%';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '100px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
          loaderVideo.style.position = 'absolute';
        }
        document.body.classList.remove('overflow-hidden');
        document.documentElement.classList.remove('overflow-hidden');
      }, 3000);
    });

    // ScrollMagic
    const controller = new ScrollMagic.Controller({ loglevel: 3 });
    new ScrollMagic.Scene({
      triggerElement: '#section2',
      triggerHook: 'onEnter',
      duration: '100%',
    })
      .setPin('#section1 .pinWrapper', { pushFollowers: false })
      .addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: '#section2',
      triggerHook: 'onEnter',
      duration: '200%',
    })
      .setPin('#section2 .pinWrapper', { pushFollowers: false })
      .addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 'onEnter',
      duration: '200%',
    })
      .setPin('#section3 .pinWrapper', { pushFollowers: false })
      .addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: '#section4',
      triggerHook: 'onEnter',
      duration: '100%',
    })
      .setPin('#section4 .pinWrapper', { pushFollowers: false })
      .addTo(controller);
  }, []);

  return (
    <div>
      <div id="preloader">
        <div className="text-wrapper">
          <h1 id="first-text">Studio R</h1>
          <h3 id="second-text">Creative Agency</h3>
        </div>
      </div>
      <section className="events-page">
        <div id="section1" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Living</h2>
              <p>Explore our range of stylish and comfortable living room furniture.</p>
            </div>
            <div className="image" id="loaderVideo">
              <video autoPlay loop muted playsInline>
                <source src="https://www.yudiz.com/codepen/studio-r/bg-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="scrollBtn">
            <h6>scroll</h6>
            <span></span>
          </div>
        </div>
        <div id="section2" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Kitchen</h2>
              <p>Check out our modern and functional kitchen furniture and accessories.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        <div id="section3" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Bedroom</h2>
              <p>Discover our collection of bedroom furniture to create your dream space.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        <div id="section4" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Office</h2>
              <p>Find the perfect office furniture to make your workspace comfortable and productive.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnscrollAnimation;
