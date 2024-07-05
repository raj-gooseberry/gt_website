import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Footer from '~/components/widgets/Footer2';

import '../src/assets/styles/navbar.css';

import { Poppins as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import Header from '~/components/widgets/Header';
import DynamicContent from '~/components/widgets/DynamicContent';
import SvgAnimation from '~/components/widgets/SvgAnimation';
import CircularMenu from '~/components/widgets/CircularMenu';
import ImageAccordions from '~/components/widgets/ImageAccordions';
import OnscrollAnimation from '~/components/widgets/OnscrollAnimation';

const customFont = CustomFont({ weight: '500', subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[18px] sm:text-[14px] ${customFont.variable} font-sans`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-dark-900 dark:text-dark-300">
        <Providers>
          <header className="header">
            <Header />
          </header>

          <nav className="sticky navbar">
            <div className="brand  display__logo">
              <a href="#top" className="nav__link">
                {' '}
                <span className="logo">Mohammad Abu Mattar</span>
              </a>
            </div>

            <input type="checkbox" id="nav" className="hidden" />
            <label htmlFor="nav" className="nav__open">
              <i></i>
              <i></i>
              <i></i>
            </label>
            <div className="nav">
              <ul className="nav__items">
                <li className="nav__item">
                  <a href="#home" className="nav__link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    Portfolio
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <nav className="navMenu">
              <a href="#">Home</a>
              <a href="#">Blog</a>
              <a href="#">Work</a>
              <a href="#">About</a>
              <div className="dot"></div>
            </nav>
          </nav>
          <main>{children}</main>
          <CircularMenu />
          {/* <SvgAnimation /> */}
          {/* <DynamicContent /> */}
          {/* <ImageAccordions /> */}
          {/* <OnscrollAnimation /> */}
          <footer className="footer">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
