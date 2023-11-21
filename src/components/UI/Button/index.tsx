import { PropsWithChildren } from 'react';
import s from './Button.module.scss';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    className={s.button}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;