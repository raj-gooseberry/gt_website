import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const SocialProof = ({ title, images, id, hasBackground = false }: SocialProofProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {title && (
      <h1 className="leading-tighter font-heading mb-4 text-5xl font-bold tracking-tighter px-0 text-center">
        {title}
      </h1>
    )}
    <div className="grid md:grid-cols-4 sm:grid-cols-2 items-center justify-center gap-6 md:gap-9">
      {images &&
        images.map(({ src, alt, link }, index) => (
          <div key={`item-social-proof-${index}`}>
            <a href={link} target="_blank" rel="noopener">
              <div className=" h-48 w-48 flex justify-center rounded-full bg-white">
                {' '}
                <Image src={src} alt={alt} className="h-auto w-40 rounded-full m-10" object-fit="contain" />
              </div>
            </a>
          </div>
        ))}
    </div>
  </WidgetWrapper>
);

export default SocialProof;
