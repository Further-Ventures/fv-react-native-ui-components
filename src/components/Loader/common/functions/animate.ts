import { Animated, Easing } from 'react-native';
import { Platform } from 'react-native';

const ANIMATION_TIME = 1000;

export const animate = (
  value: Animated.Value | Animated.ValueXY,
  toValue:
    | number
    | Animated.Value
    | Animated.ValueXY
    | {
        x: number;
        y: number;
      }
    | Animated.AnimatedInterpolation,
  duration: number | undefined = ANIMATION_TIME
) => {
  return Animated.timing(value, {
    toValue: toValue,
    duration: duration,
    easing: Easing.linear,
    useNativeDriver: Platform.OS !== 'web',
  });
};
