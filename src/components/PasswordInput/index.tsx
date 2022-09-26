import React from 'react';
import Input, { IInputProps } from '../Input';
import { useState } from 'react';
import Icon from '../Icon';
import { Pressable } from 'react-native';
import { useTheme } from '../Theme';

export interface IPasswordInput
  extends Omit<IInputProps, 'mask' | 'type' | 'leftContent' | 'rightContent'> {}

const PasswordInput: React.FC<IPasswordInput> = ({ disabled, ...rest }) => {
  const [secured, setSecured] = useState(true);
  const onToggleInput = () => setSecured((prevSecured) => !prevSecured);
  const icon = secured ? 'visibility_off' : 'visibility';
  const { theme } = useTheme();

  return (
    <Input
      disabled={disabled}
      secureTextEntry={secured}
      rightContent={(hasError, disabled) => (
        <Pressable disabled={disabled} hitSlop={8} onPress={onToggleInput}>
          <Icon<true>
            filled
            width={20}
            color={disabled ? theme.text.disabled : theme.text.primary}
            name={icon}
          />
        </Pressable>
      )}
      {...rest}
    />
  );
};

Input.displayName = 'PasswordInput';

export default PasswordInput;
