'use client';
// import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import React, { useState, useEffect } from 'react';
import Hero from '~/components/widgets/Hero2';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features4';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import SectionFirst from '~/components/widgets/SectionFirst';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
  testimonials2About,
} from '~/shared/data/pages/home.data';
import Testimonials2 from '~/components/widgets/Testimonials2';
import SectionSecond from '~/components/widgets/SectionSecond';
import SectionThird from '~/components/widgets/SectionThird';
import SectionFourth from '~/components/widgets/SectionFourth';
import SectionFifth from '~/components/widgets/SectionFifth';

// export const metadata: Metadata = {
//   title: SITE.title,
// };

const sections = [
  { name: 'First', href: 'first' },
  { name: 'Second', href: 'second' },
  { name: 'Third', href: 'third' },
  { name: 'Fourth', href: 'fourth' },
  { name: 'Fifth', href: 'fifth' },
];

function App() {
  const [activeSection, setActiveSection] = useState('first');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.href);
        return element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition;
      });

      if (currentSection) {
        setActiveSection(currentSection.href);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
export default function Page() {
  return (
    <>
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
      <SectionFifth />
      <Hero {...heroHome} />
      <CallToAction {...callToAction2Home} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Testimonials2 {...testimonials2About} />
      <Contact {...contactHome} />
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <Contact {...contactHome} /> */}
    </>
  );
}
