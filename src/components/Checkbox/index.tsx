import React from 'react';
import Toggle, { IToggle } from '../Toggle';

export interface ICheckbox extends Omit<IToggle, 'variant'> {
  variant?: 'default' | 'circle';
}

const Checkbox: React.FC<ICheckbox> = ({ variant = 'default', ...rest }) => {
  return <Toggle {...rest} variant={variant === 'default' ? 'checkbox' : 'checkboxCircle'} />;
};

export default Checkbox;
