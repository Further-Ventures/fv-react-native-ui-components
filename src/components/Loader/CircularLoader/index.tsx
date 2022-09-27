import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import useStyles from './styles';

interface ICircularLoaderProps {
  progress?: number;
  flat?: boolean;
}

const TEST_ID = '@fv/CircularLoader';
const DIAMETER = 48;
const STROKE_WIDTH = 4;
const INNER_RADIUS = DIAMETER / 2 /* radius */ - STROKE_WIDTH / 2;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularLoader: React.FC<ICircularLoaderProps> = ({
  flat = false,
  progress = -1,
}) => {
  const styles = useStyles();
  const limitedProgress = progress < -1 ? 0 : progress > 100 ? 100 : progress;

  const circumference = 2 * Math.PI * INNER_RADIUS;
  const viewRotate = useRef(new Animated.Value(0)).current;
  const pathLength = useRef(new Animated.Value(0)).current;
  const calculateProgress = () => {
    const dasharray0 = Math.round((circumference * limitedProgress) / 100);
    const dasharray1 = circumference - dasharray0 + 5;

    return limitedProgress > -1
      ? {
          /* progress */ strokeDasharray: `${dasharray0} ${dasharray1}`,
          strokeDashoffset: `${limitedProgress === 0 ? 1 : 0}`,
        }
      : {
          /* animation */
          strokeDasharray: pathLength.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [
              `${circumference / 4} ${(circumference * 3) / 4}`,
              `${(circumference * 3) / 4} ${circumference / 4}`,
              `${circumference / 4} ${(circumference * 3) / 4}`,
            ],
          }),
          strokeDashoffset: pathLength.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0', '71', '0'],
          }),
        };
  };

  useEffect(() => {
    if (limitedProgress < 0) {
      Animated.loop(
        Animated.timing(pathLength, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ).start();
    } else {
      pathLength.stopAnimation();
    }
    return () => {
      if (limitedProgress >= 0) {
        pathLength.stopAnimation();
      }
    };
  }, [pathLength, limitedProgress]);

  useEffect(() => {
    if (limitedProgress < 0) {
      Animated.loop(
        Animated.timing(viewRotate, {
          toValue: 360,
          duration: 1000,
          easing: Easing.inOut(Easing.linear),
          useNativeDriver: false,
          isInteraction: false,
        }),
      ).start();
    }

    return () => {
      if (limitedProgress >= 0) {
        viewRotate.stopAnimation();
      }
    };
  }, [viewRotate, limitedProgress]);

  return (
    <Animated.View
      testID={`${TEST_ID}-container`}
      style={[
        styles.box,
        limitedProgress < 0 && {
          transform: [
            {
              rotate: viewRotate.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    >
      <Svg
        style={[
          styles.svg,
          styles.spin,
          limitedProgress >= 0 && styles.progress,
        ]}
        viewBox={`${DIAMETER / 2} ${DIAMETER / 2} ${DIAMETER} ${DIAMETER}`}
        testID={`${TEST_ID}-svg${!flat ? '-rounded' : ''}${
          limitedProgress >= 0 ? '-progress' : ''
        }`}
      >
        <AnimatedCircle
          // @ts-ignore-next-line
          style={[ calculateProgress()]}
          cx={DIAMETER}
          cy={DIAMETER}
          r={INNER_RADIUS}
          fill="none"
          strokeWidth="4"
          stroke="red"
          // strokeDasharray="0, 145"
          // strokeDashoffset='1'
          strokeLinecap='round'
          // transitionProperty='all'
          // transitionTimingFunction='ease-out'
          // transitionDuration='300ms'

        />
      </Svg>
    </Animated.View>
  );
};

CircularLoader.defaultProps = {
  flat: false,
  progress: -1,
};

export default CircularLoader;
