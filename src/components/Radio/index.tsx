import React from 'react';
import Toggle, { IToggle } from '../Toggle';

export interface IRadio extends Omit<IToggle, 'variant' | 'type'> {}

const Radio: React.FC<IRadio> = ({ ...rest }) => {
  return <Toggle {...rest} variant={'radio'} />;
};

export default Radio;
