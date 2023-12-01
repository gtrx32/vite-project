import React, { PropsWithChildren } from 'react';
import s from './FormInput.module.scss';
import clsx from 'clsx';

interface FormInputProps extends PropsWithChildren {
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({ className, children }) => (
  <div className={clsx(s.form, className)}>
    {children}
  </div>
);

export default FormInput;