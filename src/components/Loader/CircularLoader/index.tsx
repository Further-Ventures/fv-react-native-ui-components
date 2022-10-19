import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from '../../Theme';
import useStyles from './styles';
import { animate } from '../common/functions';

interface ICircularLoaderProps {
  progress?: number;
  flat?: boolean;
  size?: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularLoader: React.FC<ICircularLoaderProps> = ({
  flat = false,
  progress = -1,
  size = 48,
}) => {
  const styles = useStyles();
  const isProgress = progress >= 0 && progress <= 100;
  const { theme } = useTheme();
  const STROKE_WIDTH = Math.round(size / 12);
  const INNER_RADIUS = size / 2 /* radius */ - STROKE_WIDTH / 2;
  const circum = INNER_RADIUS * Math.PI * 2;
  const LONGEST = (circum * 3) / 4;
  const SHORTEST = (circum * 1) / 4;
  const pathLengthAnimation = useRef(new Animated.Value(LONGEST)).current;
  const loopAnimation = useRef(new Animated.Value(0)).current;

  const animatePath = () => {
    return Animated.sequence([
      animate(pathLengthAnimation, SHORTEST),
      animate(pathLengthAnimation, LONGEST),
    ]).start((event) => {
      if (event.finished) {
        animatePath();
      }
    });
  };

  const animateRotation = () => Animated.loop(animate(loopAnimation, 1)).start();

  useEffect(() => {
    if (!isProgress) {
      animatePath();
      animateRotation();
    }
    return () => {
      if (isProgress) {
        loopAnimation.stopAnimation();
        pathLengthAnimation.stopAnimation();
      }
    };
  }, [isProgress]);

  const rotationStyle = isProgress
    ? { transform: [{ rotate: '-90deg' }] }
    : {
        transform: [
          {
            rotate: loopAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      };

  return (
    <Animated.View style={[styles.wrapper, rotationStyle]}>
      <Svg width={size} height={size}>
        <AnimatedCircle
          stroke={theme.primary.main}
          fill='none'
          cx={'50%'}
          cy={'50%'}
          r={INNER_RADIUS}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={isProgress ? circum - (circum * progress) / 100 : pathLengthAnimation}
          strokeLinecap={flat ? 'square' : 'round'}
          strokeWidth={STROKE_WIDTH}
        />
      </Svg>
    </Animated.View>
  );
};

export default CircularLoader;
