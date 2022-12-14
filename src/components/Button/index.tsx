import * as React from 'react';
import {
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';
import { useStyles } from './styles';
import { useTheme, ThemeType } from '../Theme';
// import { useFormContext } from '../Form';
import Text, { IManualControlProps } from '../Text';
import Icon, { IIconProps } from '../Icon';

export type TSize = 'mini' | 'small' | 'medium' | 'large';

export interface IButton extends PressableProps {
  label?: string;
  size?: TSize;
  shape?: 'curved' | 'round' | 'flat';
  variant?: 'contained' | 'outlined' | 'empty';
  error?: boolean;
  disabled?: boolean;
  icon?: IIconProps<false>['name'];
  iconLeft?: IIconProps<false>['name'];
  iconRight?: IIconProps<false>['name'];
  iconPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  textProps?: IManualControlProps;
  iconProps?: Omit<IIconProps<false>, 'name'>;
  iconLeftProps?: Omit<IIconProps<false>, 'name'>;
  iconRightProps?: Omit<IIconProps<false>, 'name'>;
}

const getTextColor = ({
  theme,
  variant,
  disabled,
  error,
  pressed,
}: IButton & { theme: ThemeType; pressed?: boolean }) => {
  if (disabled) {
    return theme.text.disabled;
  }
  if (variant === 'contained') {
    return theme.primary.contrast2;
  }
  if (variant === 'outlined') {
    if (pressed) {
      if (error) {
        return theme.error.dark;
      }

      return theme.primary.dark;
    }
    if (error) {
      return theme.error.main;
    }

    return theme.primary.main;
  }
  if (variant === 'empty') {
    if (error) {
      return theme.error.main;
    }
    return theme.primary.contrast;
  }
};

const textSize: Record<TSize, number> = {
  mini: 10,
  small: 14,
  medium: 14,
  large: 16,
};

const Button: React.FC<IButton> = ({
  style,
  label,
  icon,
  iconPosition = 'right',
  iconLeft,
  iconRight,
  variant = 'contained',
  error = false,
  size = 'medium',
  shape = 'round',
  disabled = false,
  onPress,
  pressedStyle,
  textProps,
  iconProps,
  iconLeftProps,
  iconRightProps,
  ...rest
}) => {
  // TODO - activate when form ready
  // const {
  //   formActions: { submit, reset },
  // } = useFormContext();
  const styles = useStyles(size, variant, error, !label);
  const { theme } = useTheme();

  const handlePress = (e: GestureResponderEvent) => {
    onPress?.(e);
  };

  const allIconsStyle = (name: string, pressed: boolean, position: 'left' | 'right') => {
    const margins = {
      left: {
        marginRight: 10,
      },
      right: {
        marginLeft: 10,
      },
    };
    return {
      name: name || '',
      color: getTextColor({ theme, variant, disabled, error, pressed }),
      width: size === 'mini' ? 16 : 24,
      style: label ? margins[position] : {},
    };
  };

  const generateIcon = (
    name: string | undefined,
    position: 'left' | 'right',
    pressed: boolean,
    locationProps: Omit<IIconProps<false>, 'name'> | undefined
  ) => {
    if (
      (name && iconPosition === position) ||
      (position === 'left' && iconLeft) ||
      (position === 'right' && iconRight)
    ) {
      const newName =
        name || (position === 'left' && iconLeft) || (position === 'right' && iconRight) || '';
      if (!newName) return null;
      return (
        <Icon<true>
          {...allIconsStyle(newName, pressed, position)}
          {...iconProps}
          {...locationProps}
        />
      );
    }
    return null;
  };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles[size],
        styles[shape],
        disabled && styles.disabled,
        pressed && styles.buttonPressed,
        style,
        pressed && pressedStyle,
      ]}
      disabled={disabled}
      onPress={handlePress}
      {...rest}
    >
      {({ pressed }) => (
        <>
          {generateIcon(icon, 'left', pressed, iconLeftProps)}
          {label ? (
            <Text<true>
              size={textSize[size]}
              weight='500'
              color={getTextColor({ theme, variant, disabled, error, pressed })}
              {...textProps}
            >
              {label}
            </Text>
          ) : null}
          {generateIcon(icon, 'right', pressed, iconRightProps)}
        </>
      )}
    </Pressable>
  );
};

export default Button;
