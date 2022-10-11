import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import useStyles from './styles';
import CircularLoader from './CircularLoader';
import BarLoader from './BarLoader';

export interface ILoaderComponents {
  progress?: number;
  flat?: boolean;
}
interface ILoaderProps extends ILoaderComponents {
  variant?: 'circular' | 'bar';
  style?: StyleProp<ViewStyle>;
}

const TEST_ID = '@fv/Loader';

const Loader: React.FC<ILoaderProps> = ({ variant = 'circular', ...rest }) => {
  const styles = useStyles();
  return (
    <View data-testid={`${TEST_ID}-loader`} style={styles.wrapper}>
      {variant === 'circular' ? <CircularLoader {...rest} /> : <BarLoader {...rest} />}
    </View>
  );
};

export default Loader;
