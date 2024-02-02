import { ComparisonProps, FAQsProps, PricingProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';
import { FeaturesProps } from '~/shared/types';
import AI from '~/assets/images/AI.jpeg';
import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';
import { CallToActionProps } from '~/shared/types';

// Hero data on Pricing page *******************
export const heroPricing: HeroProps = {
  title: 'AI Servers',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Empower your service-based website with the transformative capabilities of Artificial Intelligence. At Gooseberry Technovision, we integrate AI seamlessly to enhance user interactions, streamline processes, and deliver personalized services. Elevate your online presence, stay ahead in the digital landscape, and redefine customer experiences with our AI-powered solutions.`}
      </span>{' '}
      You can choose the plan that best suits your goals!
    </>
  ),
  image: {
    src: AI,
    alt: 'Hero gtwebsite',
  },
  // tagline: 'DevOps',
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Services',
  },
  items: [
    {
      title: 'AI-powered Chatbots',
      description:
        'Enhance customer engagement and support with intelligent chatbots that provide instant responses and personalized interactions.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Predictive Analytics',
      description:
        'Leverage AI algorithms to analyze data patterns, make informed predictions, and optimize business strategies for better decision-making.',
      icon: IconComponents,
    },
    {
      title: 'Containerization',
      description: 'Utilizing Docker and Kubernetes for efficient application deployment, scalability, and management.',
      icon: IconListCheck,
    },
    {
      title: 'Machine Learning Models',
      description:
        ' Develop custom machine learning models tailored to specific business needs, from fraud detection and demand forecasting to image classification and speech recognition.',
      icon: IconRocket,
    },
    {
      title: 'Automated Data Processing',
      description:
        'Streamline data workflows with AI-driven automation, facilitating tasks such as data cleaning, transformation, and integration.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'AI-powered Cybersecurity',
      description:
        'Enhance security measures with AI-driven threat detection, anomaly detection, and predictive analysis to safeguard digital assets and sensitive information.',
      icon: IconBulb,
    },
  ],
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Main Features',
    subtitle:
      'Elevate your digital presence with Gooseberry Technovision - your trusted partner in creating scalable, SEO-optimized software solutions.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Hero gtwebsite',
  },
  items: [
    {
      title: 'Advanced Chatbot Solutions',
      description:
        ' Gooseberry Technovision provides state-of-the-art AI-powered chatbots equipped with natural language processing capabilities for intelligent and interactive customer interactions.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Predictive Analytics Expertise',
      description:
        'Leveraging sophisticated AI algorithms, Gooseberry Technovision offers predictive analytics services to help businesses forecast trends, identify opportunities, and optimize decision-making processes.',
      icon: IconComponents,
    },
    {
      title: 'Robust Computer Vision Applications',
      description:
        'Specializing in computer vision, Gooseberry Technovision creates powerful solutions for image and video processing, including facial recognition, object detection, and augmented reality applications.',
      icon: IconListCheck,
    },
    {
      title: 'Speech Recognition Solutions',
      description:
        "Enable voice-enabled interfaces and transcription services with Gooseberry Technovision's expertise in developing accurate and efficient speech recognition applications.",
      icon: IconRocket,
    },
    {
      title: 'AI-driven Cybersecurity Solutions',
      description:
        "Enhance security measures with Gooseberry Technovision's AI-powered cybersecurity services, incorporating threat detection, anomaly detection, and predictive analysis to safeguard digital assets.",
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Automated Data Processing',
      description:
        "Streamline data workflows with Gooseberry Technovision's AI-driven automation services, facilitating tasks such as data cleaning, transformation, and integration for enhanced efficiency.",
      icon: IconBulb,
    },
  ],
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle: '',
  },
  columns: 1,
  items: [
    {
      title: 'How does Gooseberry Technovision leverage AI for predictive analytics?',
      description: `Our AI algorithms analyze data patterns to forecast trends, identify opportunities, and optimize decision-making processes through predictive analytics.`,
      icon: IconChevronsRight,
    },
    {
      title: 'In what ways does Gooseberry Technovision excel in computer vision applications?',
      description: `We specialize in developing robust computer vision solutions, including facial recognition, object detection, and applications in augmented reality for diverse industries.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How does your company implement personalized recommendation engines using AI?',
      description: `We harness advanced recommendation algorithms to deliver personalized content, product recommendations, and services, enhancing user experiences.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What cybersecurity measures does Gooseberry Technovision incorporate into its AI services?',
      description: `We implement AI-driven cybersecurity solutions, including threat detection, anomaly detection, and predictive analysis, to safeguard digital assets and sensitive information`,
      icon: IconChevronsRight,
    },
  ],
};

// Comparison pricing data on Pricing page *******************
export const comparisonPricing: ComparisonProps = {
  id: 'comparison-on-pricing',
  hasBackground: false,
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // tagline: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
  ],
};

// FAQS3 data on Pricing page *******************
export const faqs3Pricing: FAQsProps = {
  id: 'faqsThree-on-pricing',
  hasBackground: true,
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // tagline: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle:
    'Explore our comprehensive FAQ section to find answers to all your inquiries about our software development services, ensuring clarity and transparency in every aspect of your project.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
