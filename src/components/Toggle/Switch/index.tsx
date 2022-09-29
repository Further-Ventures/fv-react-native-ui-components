import React, { useEffect, useRef } from 'react';
import useStyles from './styles';
import { View, Animated, StyleProp, ViewStyle } from 'react-native';

import { TSize } from '../';

export interface ISwitch {
  isPressed?: boolean;
  checked?: boolean;
  size?: TSize;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Switch: React.FC<ISwitch> = ({
  isPressed,
  checked,
  size = 'small',
  disabled = false,
  style,
}) => {
  const toggleAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;
  const styles = useStyles(size, disabled);

  const runAnimation = () => {
    const animValue = {
      fromValue: checked ? 0 : 1,
      toValue: checked ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    };
    Animated.timing(toggleAnim, animValue).start();
  };

  useEffect(() => {
    runAnimation();
  }, [checked]);

  return (
    <View
      style={[
        styles.container,
        isPressed && !checked && styles.pressedUncheckedContainer,
        checked && styles.checked,
        isPressed && checked && styles.pressedCheckedContainer,
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            left: toggleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, size === 'small' ? 12 : 20],
            }),
          },
        ]}
      />
    </View>
  );
};

export default Switch;
