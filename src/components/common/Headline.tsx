import { HeadlineProps } from '~/shared/types';
import { twMerge } from 'tailwind-merge';

const Headline = ({ header, containerClass, titleClass, subtitleClass }: HeadlineProps) => {
  const { title, subtitle, tagline, position } = header;

  return (
    <div className="mb-4">
      {(title || subtitle || tagline) && (
        <div
          className={twMerge(
            `mb-6 mx-auto md:mb-4 ${
              position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
            }`,
            containerClass,
          )}
        >
          {tagline && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {tagline}
            </p>
          )}
          {title && <h2 className={twMerge(`font-heading mb-4 font-bold tracking-tight`, titleClass)}>{title}</h2>}
          {subtitle && (
            <p
              className={twMerge(
                `mx-auto mt-2 mb-[1.5rem] max-w-5xl  text-xl text-dark-900 dark:text-dark-100 ${
                  position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
                }`,
                subtitleClass,
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Headline;
