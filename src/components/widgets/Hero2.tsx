import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero2 = ({ title, subtitle, tagline, callToAction, image }: HeroProps) => {
  return (
    <section className="bg-primary-100 dark:bg-dark-800" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:flex md:h-screen 2xl:h-auto">
        <div className="block py-12 md:flex md:py-12 text-left lg:py-16">
          <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
            <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-4 text-5xl font-bold tracking-tighter px-0">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-8 text-xl font-normal text-dark-600 dark:text-dark-400">{subtitle}</p>}
                <div className="flex max-w-none flex-col flex-nowrap gap-4 sm:flex-row md:m-0 justify-start">
                  {callToAction && <CTA callToAction={callToAction} />}
                </div>
              </div>
            </div>
          </div>
          <div className="block flex-1 items-center md:flex">
            <div className="relative m-auto h-full max-w-4xl object-cover">
              {image && (
                <Image
                  className="mx-auto h-full w-auto rounded-md bg-dark-400 object-cover drop-shadow-2xl dark:bg-dark-700 hover:scale-105"
                  src={image.src}
                  alt={image.alt}
                  width={540}
                  height={405}
                  sizes="(min-width: 1920px) 749px, (min-width: 1540px) 43.89vw, (min-width: 1360px) 542px, (min-width: 780px) calc(39.29vw + 16px), calc(96.52vw - 22px)"
                  loading="eager"
                  placeholder="blur"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
