// import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <div className={`grid ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-1'}`}>
        <div className="h-full pr-6">
          {content && <p className="mt-3 mb-12 text-lg text-primary-100 dark:text-dark-200">{content}</p>}
          <ul className="mb-6 md:mb-0 flex justify-between">
            {items &&
              items.map(({ title, description, icon: Icon }, index) => (
                <li key={`item-contact-${index}`} className="flex w-[28rem]">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary-800 text-dark-50">
                    {Icon && <Icon className="h-6 w-10" />}
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-dark-900 dark:text-tertiary-100">{title}</h3>
                    {typeof description === 'string' ? (
                      <p key={`text-description-${index}`} className="text-primary-100 dark:text-dark-200">
                        {description}
                      </p>
                    ) : (
                      description &&
                      description.map((desc, index) => (
                        <p key={`text-description-${index}`} className="text-primary-100 dark:text-dark-200">
                          {desc}
                        </p>
                      ))
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" /> */}
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
