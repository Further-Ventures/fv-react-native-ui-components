import React from 'react';
import Input, { IInputProps } from '../Input';
import { useState } from 'react';
import Icon from '../Icon';
import { Pressable } from 'react-native';

export interface IPasswordInput
  extends Omit<IInputProps, 'mask' | 'type' | 'leftContent' | 'rightContent'> {}

const PasswordInput: React.FC<IPasswordInput> = ({ disabled, ...rest }) => {
  const [secured, setSecured] = useState(true);
  const onToggleInput = () => setSecured((prevSecured) => !prevSecured);
  const icon = secured ? 'visibility_off' : 'visibility';

  return (
    <Input
      disabled={disabled}
      secureTextEntry={secured}
      rightContent={({ disabled }) => (
        <Pressable disabled={disabled} hitSlop={8} onPress={onToggleInput}>
          <Icon disabled={disabled} filled width={20} color={'text-primary'} name={icon} />
        </Pressable>
      )}
      {...rest}
    />
  );
};

Input.displayName = 'PasswordInput';

export default PasswordInput;
