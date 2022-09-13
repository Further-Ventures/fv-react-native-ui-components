import * as React from 'react';
import {
  Pressable,
  PressableProps,
  ViewStyle,
  TextStyle,
  StyleProp,
  View,
  GestureResponderEvent,
} from 'react-native';
import {useStyles} from './styles';
import {useTheme, ThemeType} from '../Theme';
import {useFormContext} from '../Form';
import Text from '../Text';

export type TSize = 'mini' | 'small' | 'medium' | 'large';
export interface IButtonProps extends PressableProps {
  size?: TSize;
  shape?: 'curved' | 'round' | 'flat';
  variant?: 'primary' | 'secondary';
  error?: boolean;
  type?: 'submit' | 'reset';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
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
  if (variant === 'primary') {
    return theme.primary.contrast2;
  }
  if (variant === 'secondary') {
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
};

const textSize: Record<TSize, number> = {
  mini: 10,
  small: 14,
  medium: 14,
  large: 16,
};

const Button: React.FC<IButtonProps> = ({
  style,
  children,
  iconLeft,
  iconRight,
  variant = 'primary',
  error = false,
  size = 'medium',
  shape = 'round',
  textStyle,
  disabled = false,
  onPress,
  type,
  ...rest
}) => {
  const {
    formActions: {submit, reset},
  } = useFormContext();
  const styles = useStyles(size, variant, error);
  const {theme} = useTheme();

  const renderIcon = (
    position: 'leftIcon' | 'rightIcon',
    icon?: React.ReactNode,
  ) => icon && <View style={styles[position]}>{icon}</View>;

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
          {renderIcon('leftIcon', iconLeft)}

          <Text
            size={textSize[size]}
            weight="500"
            color={getTextColor({theme, variant, disabled, error, pressed})}
            style={[textStyle]}
          >
            {children}
          </Text>
          {renderIcon('rightIcon', iconRight)}
        </>
      )}
    </Pressable>
  );
};

export default Button;
