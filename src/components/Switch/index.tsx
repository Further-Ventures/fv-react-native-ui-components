import React from 'react';
import Toggle, {IToggle} from '../Toggle';

export interface ISwitch extends Omit<IToggle, 'variant' | 'type'> {}

const Switch: React.FC<ISwitch> = ({...rest}) => {
  return <Toggle {...rest} variant={'switch'} />;
};

export default Switch;
