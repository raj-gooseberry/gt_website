import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Footer from '~/components/widgets/Footer2';


import { Poppins as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import Header from '~/components/widgets/Header';
import Navbar from '~/components/widgets/Navbar';

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
          <Navbar />
          <main>{children}</main>
          <footer className="footer">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
