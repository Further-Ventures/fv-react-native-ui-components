import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import useStyles from './styles';
import CircularLoader from './CircularLoader';
import BarLoader from './BarLoader';

interface ILoaderProps {
  variant?: 'circular' | 'bar';
  progress?: number;
  flat?: boolean;
  style?: StyleProp<ViewStyle>;
}

const TEST_ID = '@fv/Loader';

const Loader: React.FC<ILoaderProps> = ({
  variant = 'circular',
  flat = false,
  progress = -1,
  style,
}) => {
  const styles = useStyles();
  const circularComponent =
    variant === 'circular' ? (
      <CircularLoader progress={progress} flat={flat} />
    ) : null;

  const barComponent =
    variant === 'bar' ? <BarLoader progress={progress} flat={flat} /> : null;

  return (
    <View
      style={[styles.wrapper, styles[variant], style]}
      data-testid={`${TEST_ID}-loader`}
    >
      {circularComponent}
      {barComponent}
    </View>
  );
};

Loader.defaultProps = {
  variant: 'circular',
  flat: false,
  progress: -1,
};

export default Loader;
