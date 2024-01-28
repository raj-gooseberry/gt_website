import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank } = callToAction as CallToActionType;

  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          {targetBlank ? (
            <Link
              className={twMerge('relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-dark-600 dark:text-tertiary-100 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group', linkClass)}
              href={href}
              target="_blank"
              rel="noopener noreferrer">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-dark-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 group-hover:text-tertiary-100">
                {Icon && (<Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5' : ''}`, iconClass)} />)}
              </span>
              <span className="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 group-hover:text-tertiary-100">
                {Icon && (<Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5' : ''}`, iconClass)} />)}
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-tertiary-100">{text}</span>
            </Link>
          ) : (
            <Link className={twMerge('relative inline-block px-4 py-2 font-medium group', linkClass)} href={href}>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-600 dark:bg-tertiary-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-tertiary-100 dark:bg-dark-600 border-2 border-dark-600 dark:border-tertiary-100 group-hover:bg-dark-600 dark:group-hover:bg-tertiary-100"></span>
              {Icon && (
                <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5' : ''}`, iconClass)} />
              )}
              <span className="relative text-dark-600 dark:text-tertiary-100 group-hover:text-tertiary-100 dark:group-hover:text-dark-600">{text}</span>
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
