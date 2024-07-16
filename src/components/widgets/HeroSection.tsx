'use client';
import React, { useEffect, useRef } from 'react';
import '../../assets/styles/hero_section.css';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layers = document.querySelectorAll<HTMLDivElement>('.hero__image');

    const parallaxHero = (e: MouseEvent | TouchEvent) => {
      const mouseX = e.type.includes('touch') ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      const mouseY = e.type.includes('touch') ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
      const heroH = heroRef.current!.offsetHeight;
      const heroW = heroRef.current!.offsetWidth;
      const heroMidX = heroRef.current!.offsetLeft + heroW / 2;
      const heroMidY = heroRef.current!.offsetTop + heroH / 2;
      const diffX = heroMidX - mouseX;
      const diffY = heroMidY - mouseY;

      layers.forEach((layer) => {
        const ratioX = parseFloat(layer.dataset.x!);
        const ratioY = parseFloat(layer.dataset.y!);
        const scale = parseFloat(layer.dataset.scale!);
        const minScale = (scale - 1) / 2;

        const minX = heroW * minScale;
        const minY = heroH * minScale;

        const maxX = -(heroW * minScale);
        const maxY = -(heroH * minScale);

        const moveX = Math.max(maxX, Math.min(minX, ratioX * diffX));
        const moveY = Math.max(maxY, Math.min(minY, ratioY * diffY));

        layer.style.left = `${moveX}px`;
        layer.style.top = `${moveY}px`;
        layer.style.transform = `scale(${scale})`;
      });
    };

    heroRef.current!.addEventListener('mousemove', parallaxHero);
    heroRef.current!.addEventListener('touchmove', parallaxHero);

    layers.forEach((layer) => {
      const scale = parseFloat(layer.dataset.scale!);
      layer.style.transform = `scale(${scale})`;
    });

    return () => {
      heroRef.current!.removeEventListener('mousemove', parallaxHero);
      heroRef.current!.removeEventListener('touchmove', parallaxHero);
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero__inner">
        <div className="hero__image" data-x="0.05" data-y="0.05" data-scale="1.05">
          <img src="https://assets.codepen.io/450456/layer-sky.jpg" alt="Sky" />
        </div>
        <div className="hero__image hero__image--sun" data-x="0.065" data-y="0.065" data-scale="1.1">
          <img src="https://assets.codepen.io/450456/layer-sunNoSparkle.png" alt="Sun" />
        </div>
        <div className="hero__image hero__image--sparkle" data-x="0.065" data-y="0.065" data-scale="1.1">
          <img src="https://assets.codepen.io/450456/layer-sunSparkle.png" alt="Sun Sparkle" />
        </div>
        <div className="hero__image" data-x="0.09" data-y="0.09" data-scale="1.15">
          <img src="https://assets.codepen.io/450456/layer-smallField.png" alt="Small Field" />
        </div>
        <div className="hero__image" data-x="0.13" data-y="0.13" data-scale="1.15">
          <img src="https://assets.codepen.io/450456/layer-bigField.png" alt="Big Field" />
        </div>
        <div className="hero__image hero__image--leaf7" data-x="0.17" data-y="0.17" data-scale="1.19">
          <img src="https://assets.codepen.io/450456/layer-leaf7Trans.png" alt="Leaf 7" />
        </div>
        <div className="hero__image hero__image--leaf6" data-x="0.22" data-y="0.22" data-scale="1.2">
          <img src="https://assets.codepen.io/450456/layer-leaf6Trans.png" alt="Leaf 6" />
        </div>
        <div className="hero__image" data-x="0.25" data-y="0.25" data-scale="1.2">
          <img src="https://assets.codepen.io/450456/layer-leaf5.png" alt="Leaf 5" />
        </div>
        <div className="hero__image hero__image--leaf4" data-x="0.28" data-y="0.28" data-scale="1.22">
          <img src="https://assets.codepen.io/450456/layer-leaf4Trans.png" alt="Leaf 4" />
        </div>
        <div className="hero__image" data-x="0.3" data-y="0.3" data-scale="1.25">
          <img src="https://assets.codepen.io/450456/layer-leaf3.png" alt="Leaf 3" />
        </div>
        <div className="hero__image hero__image--leaf2" data-x="0.2" data-y="0.2" data-scale="1.18">
          <img src="https://assets.codepen.io/450456/layer-leaf2Trans.png" alt="Leaf 2" />
        </div>
        <div className="hero__image hero__image--leaf1" data-x="0.28" data-y="0.28" data-scale="1.25">
          <img src="https://assets.codepen.io/450456/layer-leaf1Trans.png" alt="Leaf 1" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
