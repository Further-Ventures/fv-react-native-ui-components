import React, {useEffect, useRef} from 'react';
import useStyles from './styles';
import {View, Animated} from 'react-native';

interface ISwitchIconProps {
  isPressed?: boolean;
  checked?: boolean;
}

const SwitchIcon: React.FC<ISwitchIconProps> = ({isPressed, checked}) => {
  const toggleAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;
  const styles = useStyles();

  const runAnimation = () => {
    const animValue = {
      fromValue: checked ? 0 : 1,
      toValue: checked ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    };
    Animated.timing(toggleAnim, animValue).start();
  };

  useEffect(() => {
    runAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <View
      style={[
        styles.container,
        isPressed && !checked && styles.pressedUncheckedContainer,
        checked && styles.checked,
        isPressed && checked && styles.pressedCheckedContainer,
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            left: toggleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 20],
            }),
          },
        ]}
      />
    </View>
  );
};

export default SwitchIcon;
