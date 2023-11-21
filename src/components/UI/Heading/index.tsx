import { PropsWithChildren } from 'react';
import s from './Heading.module.scss';
import clsx from 'clsx';

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ className, children }) => (
  <h2 className={clsx(s.heading, className)}>{children}</h2>
);

export default Heading;