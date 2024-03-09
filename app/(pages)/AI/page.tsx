import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/FAQs3';
import Features2 from '~/components/widgets/Features2';
import FAQs from '~/components/widgets/FAQs';
import Features4 from '~/components/widgets/Features4';
import CallToAction from '~/components/widgets/CallToAction';
import {
  heroPricing,
  comparisonPricing,
  faqs3Pricing,
  features2Services,
  features4Services,
  faqsServices,
  callToActionServices,
} from '~/shared/data/pages/ai.data';

export const metadata: Metadata = {
  title: 'AI',
};

const Page = () => {
  return (
    <>
      <Hero {...heroPricing} />
      <Features2 {...features2Services} />
      <Features4 {...features4Services} />
      <FAQs {...faqsServices} />
      <CallToAction {...callToActionServices} />

      {/* <Pricing {...pricingPricing} /> */}
      {/* <Comparison {...comparisonPricing} /> */}
      {/* <FAQs3 {...faqs3Pricing} /> */}
    </>
  );
};

export default Page;
