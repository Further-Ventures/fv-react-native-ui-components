import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import useStyles from './styles';

export interface IElevationProps {
  variant?: 'extraLight' | 'light' | 'medium' | 'heavy' | 'extraHeavy';
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const Elevation: React.FC<IElevationProps> = ({ variant = 'medium', children, style }) => {
  const styles = useStyles();

  return <View style={[styles.wrapper, styles[variant], style]}>{children}</View>;
};

export default Elevation;
