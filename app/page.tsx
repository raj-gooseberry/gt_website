'use client';
import React, { useState, useEffect } from 'react';
export default function Page() {
  return (
    <>

      <section className="home">
        <div id="home">
          <h1>Home</h1>
        </div>
      </section>
      <section className="about">
        <div id="about">
          <h1>About</h1>
        </div>
      </section>
      <section className="portfolio">
        <div id="portfolio">
          <h1>Portfolio</h1>
        </div>
      </section>
      <section className="contact">
        <div id="contact">
          <h1>Contact</h1>
        </div>
      </section>
      {/* <Hero {...heroHome} />
      <CallToAction {...callToAction2Home} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Testimonials2 {...testimonials2About} />
      <Contact {...contactHome} /> */}
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <Contact {...contactHome} /> */}
    </>
  );
}
