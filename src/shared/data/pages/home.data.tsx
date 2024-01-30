import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconArrowMoveRight,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconWorld,
  IconInfinity,
  IconVirusSearch,
  IconBinaryTree2,
  IconSeo,
  IconExchange,
  IconShieldLock,
  IconCloudComputing,
  IconChartDots2,
  IconTopologyStarRing,
  IconChartHistogram,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hreo7.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/hero5.jpg';
import cameraBackImg from '~/assets/images/hero3.jpg';
import gasImg from '~/assets/images/gas.jpg';
import { IconChartGridDots } from '@tabler/icons-react';
// import revanture from '~/assets/images/revanture.svg';
import client1 from '~/assets/images/client1.png';
import client2 from '~/assets/images/client2.png';
import client3 from '~/assets/images/client3.png';
import client4 from '~/assets/images/client4.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Innovate.<span className="hidden md:inline">Elevate.</span>
      <span>Dominate</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold ">
          Elevating businesses with innovative tech solutions for optimal efficiency and growth.
        </span>
      </span>
    </>
  ),
  callToAction: {
    text: 'Explore more',
    href: 'https://github.com/gtwebwork/GTwebsite',
    icon: IconArrowMoveRight,
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero GTwebsite',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  title: 'Our Clients',
  images: [
    {
      // link: 'client1',
      src: client1,
      alt: 'client1',
    },
    {
      // link: 'client2',
      src: client2,
      alt: 'client2',
    },
    {
      // link: 'client3',
      src: client3,
      alt: 'client3',
    },
    {
      // link: 'client4',
      src: client4,
      alt: 'client4',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Gooseberry Technovision</span>
      </>
    ),
    subtitle:
      "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
    // tagline: 'Features',
  },
  items: [
    {
      title: 'Web Devlopement',
      description:
        'Drive success online with our top-notch web development services, crafting websites that captivate and convert',
      icon: IconWorld,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Data Science',
      description:
        'Transform your data into a valuable asset with our expert data science services, driving efficiency, and delivering measurable results',
      icon: IconChartGridDots,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'DevOps',
      description:
        'Streamline your development and operations with cutting-edge DevOps solutions for enhanced efficiency and collaboration.',
      icon: IconInfinity,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Software Testing',
      description:
        'Unlock the potential of your software with comprehensive testing strategies that guarantee top-tier quality and performance.',
      icon: IconVirusSearch,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'A.I',
      description:
        'Explore transformative A.I. capabilities that drive productivity and success, harnessing the potential of artificial intelligence for unparalleled results.',
      icon: IconBinaryTree2,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
      icon: IconSeo,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: false,
  header: {
    title: 'Revolutionize Your Business with Gooseberry technovision - Your Premier IT Services Partner!',
    subtitle: '🌐 Discover Our Comprehensive IT Services',
    // tagline: 'Content',
  },
  // content:
  //   "As a dynamic IT services provider, we offer a suite of solutions tailored to meet the unique needs of your organization.",
  items: [
    {
      title: 'Managed IT Services',
      description:
        "Ensure the seamless operation of your IT infrastructure with our proactive and responsive managed IT services. From 24/7 monitoring to rapid issue resolution, we've got your back",
      icon: IconExchange,
    },
    {
      title: 'Cybersecurity Solutions',
      description:
        'Safeguard your digital assets with our robust cybersecurity services. Our experts employ the latest strategies and technologies to protect your business from evolving cyber threats.',
      icon: IconShieldLock,
    },
    {
      title: 'Cloud Computing',
      description:
        'Unlock the power of the cloud with our scalable and secure cloud computing solutions. Seamlessly migrate, optimize, and manage your data for enhanced flexibility and efficiency.',
      icon: IconCloudComputing,
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: false,
  // content:
  //   'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'IT Consulting',
      description:
        'Leverage our seasoned IT consultants to devise a strategic roadmap for your digital transformation. We analyze, plan, and implement solutions that align with your business goals.',
      icon: IconChartDots2,
    },
    {
      title: 'Network Infrastructure',
      description:
        'Build a strong foundation for your digital success with our network infrastructure services. From design to implementation, we ensure a robust and high-performance network tailored to your needs.',
      icon: IconTopologyStarRing,
    },
    {
      title: 'Data Analytics',
      description:
        'Harness the potential of your data with our advanced analytics services. Gain valuable insights, make informed decisions, and drive your business forward in the data-driven era.',
      icon: IconChartHistogram,
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: '💡 Why Choose Gooseberry Technovision?',
  },
  items: [
    {
      title: 'Expertise That Matters',
      description:
        'Benefit from our team of seasoned IT professionals with diverse expertise. We stay ahead of industry trends to provide you with innovative and effective solutions.',
      icon: IconArrowDown,
    },
    {
      title: 'Customer-Centric Approach',
      description:
        'Your success is our priority. We take the time to understand your business, ensuring our solutions align perfectly with your goals and challenges.',
      icon: IconArrowDown,
    },
    {
      title: 'Reliability and Scalability',
      description:
        "Count on us for reliable and scalable solutions. Whether you're a startup or a multinational corporation, our services grow with your business.",
      icon: IconArrowDown,
    },
    {
      title: 'Strategic Partnerships',
      description:
        "Gooseberry Technovision is more than a service provider; we're your strategic partner in achieving digital excellence. Together, we navigate the ever-evolving landscape of technology.",
    },
  ],
};

// Testimonials 2 data on Home page *******************

export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'What our customers say about us',
    // tagline: 'Customer comments',
  },
  testimonials: [
    {
      name: 'Jane Smith',
      job: 'UX Designer',
      testimonial: `Your templates have been a game-changer for my projects. They're not just beautifully designed; they're also incredibly easy to customize. Thanks to your templates, I've been able to save time and deliver stunning websites to my clients.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Jane Smith',
      },
      href: '/',
    },
    {
      name: 'John Doe',
      job: 'Frontend Developer',
      testimonial: `I can't say enough good things about your Next.js and Tailwind CSS templates. As a frontend developer, I appreciate the clean and well-organized code. These templates have significantly sped up my development process, and the results are always impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'John Doe',
      },
      href: '/',
    },
    {
      name: 'Emily Turner',
      job: 'Marketing Manager',
      testimonial: `This templates have made our marketing campaigns stand out. The responsiveness and performance of the websites we've built with them have boosted our conversion rates. Thank you for helping us shine in the digital world!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Emily Turner',
      },
      href: '/',
    },
    {
      name: 'Michael Clark',
      job: 'Startup Founder',
      testimonial: `I stumbled upon your templates while looking for a way to launch my startup quickly. Your templates not only saved me valuable time but also gave my business a professional and modern online presence. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Michael Clark',
      },
      href: '/',
    },
    {
      name: 'Linda Johnson',
      job: 'Freelance Web Designer',
      testimonial: `I've been using your templates for my freelance projects, and my clients are always thrilled with the results. The templates are not only visually appealing but also user-friendly, making my job much easier.`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Linda Johnson',
      },
      href: '/',
    },
    {
      name: 'David Rogers',
      job: 'E-commerce Entrepreneur',
      testimonial: `The speed and SEO-friendliness of the websites I've built with these templates have led to increased traffic and sales. I couldn't be happier!`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'David Rogers',
      },
      href: '/',
    },
  ],
};

// Testimonials data on Home page *******************

export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      job: 'Marketing Manager',
      testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to GTwebsite, my online business is thriving.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. GTwebsite's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `As a beginner in web development, I really needed clear guidance. GTwebsite made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
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
      name: 'Keith Young',
      job: 'Freelance Developer',
      testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with GTwebsite.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: '🚀 Transform Your Business Today with us!',
    subtitle:
      'Ready to embark on a journey of digital transformation? Contact us now for a personalized consultation. Gooseberry Technovision - Your Trusted IT Services Partner for a Future of Innovation and Growth! 🚀✨',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What services does Gooseberry Technovision offer?',
      description: `Gooseberry Technovision empowers businesses with cutting-edge IT solutions, from managed services and cybersecurity to cloud strategies and data analytics.`,
    },
    {
      title: 'What makes Gooseberry Technovision different from other IT service providers?',
      description: `
      Gooseberry Technovision stands out in the IT service landscape by offering a potent blend of proactive expertise, customized solutions, and unwavering commitment to your success.`,
    },
    {
      title: 'How do you migrate my data to the cloud?',
      description: `Gooseberry Technovision seamlessly transfers your data using secure tools, minimizing downtime and ensuring smooth integration into your cloud environment.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What data analytics services do you offer?',
      description: `
      We unlock hidden insights from your data through expert analysis, helping you make smarter decisions with our data visualization and actionable reports.`,
    },
    {
      title: 'What network infrastructure services do you offer?',
      description: `We design, build, and manage secure, scalable network infrastructure that empowers your business, from robust wired systems to seamless wireless solutions. Think rock-solid foundations for your digital world.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: `Transform Your Business Today with Gooseberry Technovision!`,
    // tagline: 'Contact',
  },
  content:
    'Ready to take the leap into the future of digital innovation? Contact us now for a personalized consultation. Gooseberry Technovision - Your Trusted IT Services Partner, Driving Innovation, and Powering Growth!',
  items: [
    {
      title: 'Our Address',
      description: ['677, AGP Sowbhagyam, 6th Main Rd, Ram Nagar South, Madipakkam, Chennai, Tamil Nadu 600091'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mail: info@gooseberrytechnovision.com'],
      icon: IconPhoneCall,
    },
    // {
    //   title: 'Working hours',
    //   description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
    //   icon: IconClock,
    // },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Innovation + Tech Excellence',
  subtitle:
    'Gooseberry Technovision offers dynamic tech solutions, optimizing operations and driving growth for businesses through innovative and efficient services.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/gtwebwork/GTwebsite',
    icon: IconArrowMoveRight,
  },
  items: [
    {
      title: 'Micro-Frontend',
      description: 'Elevate software with our micro-frontend service for modular and scalable solutions.',
      href: '../../blog/demo-post-1',
    },
    {
      title: 'AI Chatbots',
      description: 'Boost customer engagement with our AI chatbots for unparalleled experiences.',
      href: '/',
    },
    {
      title: 'Serverless',
      description:
        'Revolutionize your business with our serverless solutions – seamless, scalable, and tailored for your success.',
      href: '/',
    },
    // {
    //   title: 'Subscribe',
    //   description: 'Morbi orci nunc, euismod ac dui id, convallis.',
    //   form: {
    //     icon: IconMail,
    //     input: {
    //       type: 'email',
    //       name: 'email',
    //       autocomplete: 'email',
    //       placeholder: 'Enter your email address',
    //     },
    //     btn: {
    //       title: 'Subscribe',
    //       type: 'submit',
    //     },
    //   },
    // },
  ],
};
