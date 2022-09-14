import * as React from 'react';
import {
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';
import {useStyles} from './styles';
import {useTheme, ThemeType} from '../Theme';
import {useFormContext} from '../Form';
import Text from '../Text';
import Icon, {IIconProps} from '../Icon';

export type TSize = 'mini' | 'small' | 'medium' | 'large';

export interface IButtonProps extends PressableProps {
  label?: string;
  size?: TSize;
  shape?: 'curved' | 'round' | 'flat';
  variant?: 'contained' | 'outlined' | 'empty';
  error?: boolean;
  type?: 'submit' | 'reset';
  disabled?: boolean;
  icon?: IIconProps['name'];
  iconPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
}

const getTextColor = ({
  theme,
  variant,
  disabled,
  error,
  pressed,
}: IButtonProps & {theme: ThemeType; pressed?: boolean}) => {
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

const Button: React.FC<IButtonProps> = ({
  style,
  label,
  icon,
  iconPosition = 'right',
  variant = 'contained',
  error = false,
  size = 'medium',
  shape = 'round',
  disabled = false,
  onPress,
  type,
  ...rest
}) => {
  const {
    formActions: {submit, reset},
  } = useFormContext();
  const styles = useStyles(size, variant, error, !label);
  const {theme} = useTheme();

  const handlePress = (e: GestureResponderEvent) => {
    switch (type) {
      case 'submit':
        return submit();
      case 'reset':
        return reset();
      default:
        return onPress && onPress(e);
    }
  };

  const allIconsStyle = (pressed: boolean) => ({
    name: icon || '',
    color: getTextColor({theme, variant, disabled, error, pressed}),
    width: size === 'mini' ? 13 : 20,
    style: label ? styles[iconPosition] : {},
  });

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        styles[size],
        styles[shape],
        pressed && styles.buttonPressed,
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled}
      onPress={handlePress}
      {...rest}
    >
      {({pressed}) => (
        <>
          {!!icon && iconPosition === 'left' && (
            <Icon {...allIconsStyle(pressed)} />
          )}
          {label ? (
            <Text
              size={textSize[size]}
              weight="500"
              color={getTextColor({theme, variant, disabled, error, pressed})}
            >
              {label}
            </Text>
          ) : null}
          {!!icon && iconPosition === 'right' && (
            <Icon {...allIconsStyle(pressed)} />
          )}
        </>
      )}
    </Pressable>
  );
};

export default Button;
