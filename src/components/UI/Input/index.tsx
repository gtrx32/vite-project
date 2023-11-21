import { ComponentPropsWithoutRef } from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

interface InputProps extends ComponentPropsWithoutRef<'input'> { }

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input className={clsx(s.input, className)} {...props} />
);

export default Input;