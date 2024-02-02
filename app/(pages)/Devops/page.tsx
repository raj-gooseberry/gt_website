import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Features2 from '~/components/widgets/Features2';
import FAQs from '~/components/widgets/FAQs';
import Features4 from '~/components/widgets/Features4';
import CallToAction from '~/components/widgets/CallToAction';
import {
  heroPricing,
  features2Services,
  features4Services,
  faqsServices,
  callToActionServices,
} from '~/shared/data/pages/devops.data';

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
    </>
  );
};

export default Page;
