// This bridge is only meant to cover Chip and Tag components

import React from 'react';
import useStyles from './styles';
import Button, { IButton } from '../Button';
import { useTheme } from '../Theme';

export interface IButtonBridge
  extends Omit<IButton, 'size' | 'variant' | 'icon' | 'iconPosition' | 'iconProps' | 'error'> {
  size?: 'small' | 'large';
  variant?: 'contained' | 'outlined';
}

const ButtonBridge: React.FC<IButtonBridge> = (props) => {
  const { size = 'small', variant = 'contained', disabled, style, ...rest } = props;
  const styles = useStyles(size);
  const { theme } = useTheme();

  const textColor = disabled ? 'grey-main' : 'grey-dark';

  const iconProps = {
    color: textColor,
    filled: true,
    width: size === 'large' ? 17 : 14,
    height: size === 'large' ? 17 : 14,
  } as const;

  const pressedStyle = {
    backgroundColor: theme.grey.main,
  };

  return (
    <Button
      {...rest}
      shape='round'
      style={[
        styles[variant],
        disabled && styles.disabled,
        disabled && variant === 'contained' && styles.disabledContained,
        disabled && variant === 'outlined' && styles.disabledOutlined,
        styles[size],
        !!props.iconLeft && styles.withIconLeft,
        !!props.iconRight && styles.withIconRight,
        style,
      ]}
      textProps={{
        size: size === 'small' ? 10 : 14,
        color: textColor,
        weight: '400',
        style: {},
      }}
      iconProps={iconProps}
      iconLeftProps={{ style: styles.iconLeft }}
      iconRightProps={{ style: styles.iconRight }}
      pressedStyle={pressedStyle}
      disabled={disabled}
      {...rest}
    />
  );
};

export default ButtonBridge;
