import React from 'react';
import classNames from 'classnames';
import {StyleProp, View, ViewStyle} from 'react-native';
import useStyles from './styles';

interface ILoaderProps {
  variant?: 'circular' | 'bar';
  progress?:
    | -1
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64
    | 65
    | 66
    | 67
    | 68
    | 69
    | 70
    | 71
    | 72
    | 73
    | 74
    | 75
    | 76
    | 77
    | 78
    | 79
    | 80
    | 81
    | 82
    | 83
    | 84
    | 85
    | 86
    | 87
    | 88
    | 89
    | 90
    | 91
    | 92
    | 93
    | 94
    | 95
    | 96
    | 97
    | 98
    | 99
    | 100;
  flat?: boolean;
  style?: StyleProp<ViewStyle>;
}

const TEST_ID = '@fv/Loader';

export const Loader: React.FC<ILoaderProps> = ({
  variant = 'circular',
  flat = false,
  progress = -1,
  style,
}) => {
  const styles = useStyles();
  const calculateProgress = () => {
    const factor = variant === 'bar' ? 2.36 : flat ? 1.385 : 1.365;

    return progress > -1
      ? {
          strokeDasharray: `${Math.round(progress * factor)}, ${
            variant === 'bar' ? 240 : progress === 0 ? 142 : 138
          }`,
          strokeDashoffset: `${progress === 0 ? 1 : 0}`,
        }
      : {};
  };
  const svgClasses =
    'absolute t-0 l-0 r-0 b-0 m-auto w-full h-full origin-center';
  const circularComponent =
    variant === 'circular' ? (
      <svg
        style={[
          styles.svg,
          progress === -1 ? styles.animate : styles.rotate270,
        ]}
        className={classNames(svgClasses, {
          ['animate-spin']: progress === -1,
          ['rotate-270']: progress > -1,
        })}
        viewBox="24 24 48 48"
        data-testid={`${TEST_ID}-svg`}
      >
        <circle
          className={classNames('stroke-primary', {
            ['animate-partialPathFill']: progress === -1,
            ['transition-all ease-out duration-300']: progress > -1,
            ['circular-path-loader']: flat,
            ['circular-path-rounded-loader']: !flat,
          })}
          style={calculateProgress()}
          cx="48"
          cy="48"
          r="22"
          fill="none"
          strokeWidth="4"
          data-testid={`${TEST_ID}-circle`}
        />
      </svg>
    ) : null;

  // const barComponent =
  //   variant === 'bar' ? (
  //     <svg viewBox='0 0 240 4' className={svgClasses} data-testid={`${TEST_ID}-svg`}>
  //       <line
  //         x1='2'
  //         y1='2'
  //         x2='238'
  //         y2='2'
  //         className={classNames('stroke-primary-light', {
  //           ['line-path-rounded-loader']: !flat,
  //         })}
  //         strokeWidth='4'
  //         data-testid={`${TEST_ID}-backgroundLine`}
  //       />
  //       <line
  //         x1='2'
  //         y1='2'
  //         x2='238'
  //         y2='2'
  //         className={classNames('stroke-primary', {
  //           ['animate-partialLineFill']: progress === -1,
  //           ['transition-all ease-out duration-300']: progress > -1,
  //           ['line-path-rounded-loader']: !flat,
  //         })}
  //         strokeWidth='4'
  //         style={calculateProgress()}
  //         data-testid={`${TEST_ID}-progressLine`}
  //       />
  //     </svg>
  //   ) : null;

  return (
    <View
      style={[styles.wrapper, styles[variant], style]}
      data-testid={`${TEST_ID}-loader`}
    >
      {circularComponent}
      {/* {barComponent} */}
    </View>
  );
};

Loader.defaultProps = {
  variant: 'circular',
  flat: false,
  progress: -1,
};
