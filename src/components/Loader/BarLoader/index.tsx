import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useTheme } from '../../Theme';
import { animate } from '../common/functions';

interface IBarLoaderProps {
  progress?: number;
  flat?: boolean;
}

const WIDTH = 240;
const HEIGHT = 4;
const ACTIVE_INDICATOR_WIDTH = 112;

const BarLoader: React.FC<IBarLoaderProps> = ({ flat = false, progress = -1 }) => {
  const isProgress = progress >= 0 && progress <= 100;
  const { theme } = useTheme();

  const movingAnimation = useRef(new Animated.Value(-ACTIVE_INDICATOR_WIDTH)).current;
  const progressWidth = (WIDTH * progress) / 100;

  const animateLeftToRight = () => {
    Animated.loop(animate(movingAnimation, WIDTH)).start();
  };

  useEffect(() => {
    if (!isProgress) {
      animateLeftToRight();
    }
    return () => {
      if (isProgress) {
        movingAnimation.stopAnimation();
      }
    };
  }, [isProgress, movingAnimation]);
  const transformAnimation = isProgress ? [] : [{ translateX: movingAnimation }];
  return (
    <View
      style={{
        width: WIDTH,
        height: HEIGHT,
        overflow: 'hidden',
        backgroundColor: theme.primary.light,
        borderRadius: flat ? 0 : 4,
      }}
    >
      <Animated.View
        style={{
          height: HEIGHT,
          transform: transformAnimation,
          backgroundColor: theme.primary.main,
          width: isProgress ? progressWidth : ACTIVE_INDICATOR_WIDTH,
        }}
      />
    </View>
  );
};

export default BarLoader;
