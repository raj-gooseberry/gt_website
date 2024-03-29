import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, image }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-10xl px-4 sm:px-6">
        <div className="py-10 md:py-16">
          <div className="mx-auto max-w-5xl pb-10 text-left md:pb-16">
            {tagline && (
              <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}
            <div className="mr-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-dark-600 dark:text-dark-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 sm:flex-row sm:justify-left">
                {callToAction && <CTA callToAction={callToAction} />}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <Image
                className="mx-auto h-auto w-full rounded-md bg-dark-400 dark:bg-dark-700"
                src={image.src}
                alt={image.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
