import { ComparisonProps, FAQsProps, PricingProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';
import { FeaturesProps } from '~/shared/types';
import Devops from '~/assets/images/DevOps.png';
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
  title: 'DevOps',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`DevOps, an amalgamation of development and operations, enhances collaboration and productivity in software development.`}
      </span>{' '}
      You can choose the plan that best suits your goals!
    </>
  ),
  image: {
    src: Devops,
    alt: 'Hero gtwebsite',
  },
  // tagline: 'DevOps',
};

// Pricing data on Pricing page *******************
// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Services',
  },
  items: [
    {
      title: 'Continuous Integration (CI)/Continuous Deployment (CD)',
      description:
        'Streamlining code integration and automated deployment for faster and more reliable software releases.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'Automating infrastructure provisioning and management to achieve consistency and scalability.',
      icon: IconComponents,
    },
    {
      title: 'Containerization',
      description: 'Utilizing Docker and Kubernetes for efficient application deployment, scalability, and management.',
      icon: IconListCheck,
    },
    {
      title: 'Automated Testing',
      description: 'Integration of automated testing tools for efficient and reliable testing processes.',
      icon: IconRocket,
    },
    {
      title: 'Security Automation',
      description:
        'Integrating security measures into the development pipeline, ensuring a secure software development lifecycle.Integrating security measures into the development pipeline, ensuring a secure software development lifecycle.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Continuous Feedback',
      description: ' Implementing feedback loops to gather insights and improve the development process continually.',
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
      title: 'Continuous Integration (CI)',
      description:
        'Automating the process of integrating code changes from multiple contributors into a shared repository. This ensures that code is regularly built and tested, reducing integration issues.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Continuous Deployment (CD)',
      description:
        'Automating the deployment of code changes to production environments, allowing for faster and more reliable releases.',
      icon: IconComponents,
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description:
        'Managing and provisioning infrastructure through code, enabling consistent and repeatable deployments. Tools like Terraform and Ansible are commonly used.',
      icon: IconListCheck,
    },
    {
      title: 'Containerization',
      description:
        'Using container technologies like Docker to package and isolate applications and their dependencies, providing consistency across different environments.',
      icon: IconRocket,
    },
    {
      title: 'Collaborative Development',
      description:
        'Fostering collaboration and communication between development, operations, and other stakeholders throughout the software development lifecycle.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Version Control',
      description:
        'Using version control systems, such as Git, to track changes, manage code versions, and facilitate collaboration among team members.',
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
      title: 'How can DevOps automation improve our software development process?',
      description: `Leverage Gooseberry Technovision's DevOps automation solutions to streamline workflows, from continuous integration to deployment. Enhance code quality, reduce errors, and expedite release cycles with our robust automation frameworks.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What role does Continuous Integration (CI) play in DevOps practices?',
      description: `Gooseberry Technovision employs CI to automate code integration, ensuring a consistent and error-free codebase. Experience faster development cycles and reliable builds with our comprehensive CI solutions.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How does Gooseberry Technovision ensure security in DevOps processes?',
      description: `Security is paramount in our DevOps approach. We integrate robust security measures into the entire development pipeline, providing proactive protection for your applications and infrastructure.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can Gooseberry Technovision assist in setting up Infrastructure as Code (IaC)?',
      description: `Yes, empower your business with Infrastructure as Code (IaC) expertise from Gooseberry Technovision. Achieve consistent and scalable infrastructure deployments, reducing manual errors and enhancing agility.`,
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
