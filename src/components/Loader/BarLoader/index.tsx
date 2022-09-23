import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import useStyles from './styles';

interface IBarLoaderProps {
  progress?: number;
  flat?: boolean;
}

const TEST_ID = '@fv/BarLoader';
const WIDTH = 240;
const HEIGHT = 4;
const INNER_WIDTH = 236;

const AnimatedLine = Animated.createAnimatedComponent(Line);

const BarLoader: React.FC<IBarLoaderProps> = ({
  flat = false,
  progress = -1,
}) => {
  const styles = useStyles();
  const limitedProgress = progress > 100 ? 100 : progress;

  const pathLength = useRef(new Animated.Value(0)).current;

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
      if (limitedProgress < 0) {
        pathLength.stopAnimation();
      }
    };
  }, [pathLength, limitedProgress]);

  const calculateProgress = () => {
    const dasharray0 = Math.round((INNER_WIDTH * limitedProgress) / 100);
    const dasharray1 = WIDTH - dasharray0;

    return limitedProgress > -1
      ? {
          /* progress */ strokeDasharray: `${dasharray0} ${dasharray1}`,
          strokeDashoffset: `${limitedProgress === 0 ? 1 : 0}`,
        }
      : {
          /* animation */
          strokeDasharray: pathLength.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: [
              '80, 160',
              '120, 120',
              '80, 160',
              '120, 120',
              '80, 160',
            ],
          }),
          strokeDashoffset: pathLength.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['35', '-180', '35'],
          }),
        };
  };

  return (
    <View style={styles.box}>
      <Svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={styles.svg}
        testID={`${TEST_ID}-svg${!flat ? '-rounded' : ''}${
          progress >= 0 ? '-progress' : ''
        }`}
      >
        <Line
          x1="2"
          y1="2"
          x2={INNER_WIDTH + 2}
          y2="2"
          style={[styles.backgroundLine, !flat && styles.rounded]}
          strokeWidth={HEIGHT}
        />
        <AnimatedLine
          x1="2"
          y1="2"
          x2={INNER_WIDTH + 2}
          y2="2"
          style={[
            styles.progressLine,
            !flat && styles.rounded,
            calculateProgress(),
          ]}
          strokeWidth={HEIGHT}
        />
      </Svg>
    </View>
  );
};

BarLoader.defaultProps = {
  flat: false,
  progress: -1,
};

export default BarLoader;
