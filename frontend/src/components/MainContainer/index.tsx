import { PropsWithChildren } from 'react';
import s from './MainContainer.module.scss';
import clsx from 'clsx';

interface MainContainerProps extends PropsWithChildren {
  className?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ className, children }) => (
  <div className={clsx(s.container, className)}>
    {children}
  </div>
);

export default MainContainer;