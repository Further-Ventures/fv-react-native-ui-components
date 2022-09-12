import React from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import useStyles from './styles';

export interface IElevationProps {
  variant?: 'extraLight' | 'light' | 'medium' | 'heavy' | 'extraHeavy';
  margin?: TextStyle['margin'];
  width?: TextStyle['width'];
  height?: TextStyle['height'];
  justifyContent?: TextStyle['justifyContent'];
  alignItems?: TextStyle['alignItems'];
  borderRadius?: TextStyle['borderRadius'];
  style?: StyleProp<ViewStyle>;
}

const Elevation: React.FC<IElevationProps> = ({
  variant = 'medium',
  margin = 0,
  width = 200,
  height = 200,
  justifyContent = 'center',
  alignItems = 'center',
  borderRadius = 10,
  children,
  style,
}) => {
  const styles = useStyles();

  return (
    <View
      style={[
        styles.wrapper,
        styles[variant],
        {
          margin,
          width,
          height,
          justifyContent,
          alignItems,
          borderRadius,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Elevation;
