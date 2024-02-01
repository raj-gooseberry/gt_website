import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import softwareDev from '~/assets/images/softwareDevelopement.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Software Developement',
  subtitle:
    'Welcome to Gooseberry Technovision, where innovation meets excellence in software development for service-based solutions. Our expert team crafts cutting-edge applications, ensuring seamless user experiences and top-tier performance. Elevate your digital presence with Gooseberry Technovision - your trusted partner in creating scalable, SEO-optimized software solutions.',
  // callToAction: {
  //   text: 'Start Exploring',
  //   href: 'https://github.com/gtwebwork/gtwebsite',
  //   targetBlank: true,
  // },
  image: {
    src: softwareDev,
    alt: 'Hero gtwebsite',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Software Developement',
  },
  items: [
    {
      title: 'Web Application Development',
      description: 'Crafting responsive and dynamic web applications for enhanced online presence.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Mobile App Development',
      description: 'Creating intuitive and feature-rich mobile applications for iOS and Android platforms.',
      icon: IconComponents,
    },
    {
      title: 'UI/UX Design',
      description: 'Ensuring engaging and user-friendly interfaces for optimal user experiences.',
      icon: IconListCheck,
    },
    {
      title: 'Integration Services',
      description: 'Seamlessly integrating diverse systems and applications for enhanced functionality.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Maintenance and Support',
      description: 'Providing ongoing support and maintenance to ensure software longevity and smooth operation.',
      icon: IconBulb,
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Cu imperdiet posidonium sed',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
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
      title: 'Customization',
      description: 'Tailoring software solutions to meet the unique needs and requirements of each client.',
      icon: IconBrandTailwind,
    },
    {
      title: 'User-Friendly Interfaces',
      description: 'Creating intuitive and user-friendly interfaces to enhance the overall user experience.',
      icon: IconComponents,
    },
    {
      title: 'Integration Capabilities',
      description: 'Enabling seamless integration with existing systems and third-party applications.',
      icon: IconListCheck,
    },
    {
      title: 'Cross-Platform Compatibility',
      description: 'Developing software that works seamlessly across various devices and operating systems.',
      icon: IconRocket,
    },
    {
      title: 'Agile Development Methodology',
      description: 'Embracing agile practices to enhance collaboration, flexibility, and responsiveness to changes.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Continuous Updates and Maintenance',
      description: 'Providing ongoing support, updates, and maintenance to keep the software current and reliable.',
      icon: IconBulb,
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. gtwebsite's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with gtwebsite.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
  },
  columns: 1,
  items: [
    {
      title: 'How long does it take to develop custom software?',
      description: `The timeline varies based on project complexity. We conduct a thorough analysis to provide accurate time estimates.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How do you ensure data security in your applications?',
      description: `We employ robust encryption, secure coding practices, and regular security audits to safeguard data against potential threats.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can you integrate the software with existing systems?',
      description: `Absolutely. Our team specializes in seamless integration to ensure smooth interoperability with your current systems.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How do you ensure the scalability of the software?',
      description: `Our development process includes scalability considerations, allowing the software to grow with your business needs through efficient architecture and coding practices.`,
      icon: IconChevronsRight,
    },
  ],
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
