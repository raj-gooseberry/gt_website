import Image from 'next/image';
import GTlogo from '~/assets/images/GTlogo.png';

const Logo = () => (
  // <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <div className="">
      <Image
        className=""
        src={GTlogo}
        alt={'Hero GTwebsite'}
        height={70}
        loading="eager"
        placeholder="blur"
        priority
      />
    </div>
  // </span>
);

export default Logo;
