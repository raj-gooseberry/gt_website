import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Our Expertise',
      icon: IconChevronDown,
      links: [
        {
          label: 'Software Development',
          href: '/SoftwareDev',
        },
        {
          label: 'DevOps',
          href: '/Devops',
        },
        {
          label: 'AI Services',
          href: '/AI',
        },
        {
          label: 'Support',
          href: '/contact',
        },
        // {
        //   label: 'FAQs',
        //   href: '/faqs',
        // },
        // {
        //   label: 'Terms & Conditions',
        //   href: '/terms',
        // },
        // {
        //   label: 'Privacy Policy',
        //   href: '/privacy',
        // },
      ],
    },
    {
      label: 'Know Us',
      href: '/about',
    },
    {
      label: 'Insights',
      href: '/blog',
    },
  ],
  actions: [
    {
      text: 'Contact Us',
      href: '/contact',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'GTwebsite',
  // links: [
  //   {
  //     label: 'Terms & Conditions',
  //     href: '/terms',
  //   },
  //   {
  //     label: 'Privacy Policy',
  //     href: '/privacy',
  //   },
  // ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/gtwebwork/GTwebsite' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-dark-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://gtwebwork.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-dark-200" href="https://gtwebwork.com/">
        {' '}
        gtwebwork
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  // links: [
  //   {
  //     label: 'Terms & Conditions',
  //     href: '/terms',
  //   },
  //   {
  //     label: 'Privacy Policy',
  //     href: '/privacy',
  //   },
  // ],
  columns: [
    {
      title: 'Address',
      texts: ['677, AGP Sowbhagyam, 6th Main Rd, Ram Nagar', 'South, Madipakkam, Chennai, Tamil Nadu 600091'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
    },
    {
      title: 'Email',
      texts: ['Office: info@gooseberrytechnovision.com', 'Site: www.gooseberrytechnovision.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/gtwebwork/GTwebsite' },
  ],
  // footNote: (
  //   <div className="mr-4 text-sm">
  //     <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://gtwebwork.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
  //     Made by{' '}
  //     <a
  //       className="font-semibold text-dark-900 dark:text-dark-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
  //       href="https://gtwebwork.com/"
  //     >
  //       {' '}
  //       gtwebwork
  //     </a>{' '}
  //     · All rights reserved.
  //   </div>
  // ),
};
