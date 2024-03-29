import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${hasBackground ? 'bg-secondary-400 dark:bg-dark-800' : 'bg-transparent'}`}>
      {children}
    </div>
  );
};

export default Background;
