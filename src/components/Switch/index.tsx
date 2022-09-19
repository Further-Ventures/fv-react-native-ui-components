import React, {useState} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {useSwitch} from './useSwitch';
import SwitchIcon from './components/SwitchIcon';
import useStyles from './styles';

export interface ISwitchProps extends Omit<PressableProps, 'onPress'> {
  name?: string;
  onChange?: (checked?: boolean) => void;
  clearFormValueOnUnmount?: boolean;
  controlled?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: 'medium' | 'small';
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}
const Switch: React.FC<ISwitchProps> = ({
  name,
  onChange,
  clearFormValueOnUnmount,
  controlled,
  checked,
  disabled,
  style,
  pressedStyle,
  children,
  ...rest
}) => {
  const {internalValue, onChangeWrapper} = useSwitch({
    name,
    onChange,
    checked,
    clearFormValueOnUnmount,
  });

  const styles = useStyles();

  const [isPressed, setIsPressed] = useState(false);

  const isChecked = controlled ? checked : internalValue;

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onChangeWrapper}
      disabled={disabled}
      hitSlop={3}
      style={({pressed}) => [
        disabled && styles.disabled,
        style,
        pressed && pressedStyle,
      ]}
      {...rest}
    >
      <View style={styles.toggleInputWrapper}>
        <SwitchIcon isPressed={isPressed} checked={isChecked} />
        <View style={styles.textContainer}>{children}</View>
      </View>
    </Pressable>
  );
};

export default Switch;
