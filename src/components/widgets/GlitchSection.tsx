'use client';
import React from 'react';
import '../../assets/styles/glitch_section.css';

const GlitchSection = () => {
  return (
    <div className="container">
      <div className="row one">
        <div className="column one">
          <div className="text set1">
            <h2>OBSERVE</h2>
            <h2 style={{ letterSpacing: '7px' }}>OPPOSE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
          </div>

          <div className="text set2">
            <h2>OBSERVE</h2>
            <h2 style={{ letterSpacing: '7px' }}>OPPOSE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
          </div>

          <div className="text set3">
            <h2>OBSERVE</h2>
            <h2 style={{ letterSpacing: '7px' }}>OPPOSE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
            <h2>UPSCALE</h2>
          </div>
        </div>
        <div className="column two">
          <div className="rects set1">
            <div className="rect one"></div>
            <div className="rect two"></div>
            <div className="rect three"></div>
            <div className="rect four"></div>
            <div className="rect five"></div>
            <div className="rect six"></div>
          </div>

          <div className="rects set2">
            <div className="rect one"></div>
            <div className="rect two"></div>
            <div className="rect three"></div>
            <div className="rect four"></div>
            <div className="rect five"></div>
            <div className="rect six"></div>
          </div>

          <div className="rects set3">
            <div className="rect one"></div>
            <div className="rect two"></div>
            <div className="rect three"></div>
            <div className="rect four"></div>
            <div className="rect five"></div>
            <div className="rect six"></div>
          </div>
        </div>
      </div>
      <div className="row two">
        <a href="https://twitter.com/juxtopposed" className="column one" target="_blank">
          <div className="button set1">CONNECT</div>
          <div className="button set2">CONNECT</div>
          <div className="button set3">CONNECT</div>
        </a>
        <a
          href="https://dribbble.com/shots/21293580-Daily-Design-Code-6-Retro-Glitch-Effect-Colors-RGB"
          className="column two"
          target="_blank"
        >
          <div className="button set1">VIEW DESIGN</div>
          <div className="button set2">VIEW DESIGN</div>
          <div className="button set3">VIEW DESIGN</div>
        </a>
      </div>

      <div className="border">
        <div className="border set1"></div>
        <div className="border set2"></div>
        <div className="border set3"></div>
      </div>
    </div>
  );
};

export default GlitchSection;
