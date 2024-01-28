import type { Metadata } from 'next';

import { SITE } from '~/config.js';

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

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <CallToAction {...callToAction2Home} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />     
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Testimonials2 {...testimonials2About} />
      <Contact {...contactHome} />
      {/* <Testimonials {...testimonialsHome} /> */}
      <Contact {...contactHome} />
    </>
  );
}
