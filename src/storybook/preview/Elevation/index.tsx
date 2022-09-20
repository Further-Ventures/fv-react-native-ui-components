import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Elevation from '../../../components/Elevation';

export interface IElevationProps {
  variant?: 'extraLight' | 'light' | 'medium' | 'heavy' | 'extraHeavy';
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ElevationView: React.FC<IElevationProps> = (args) => {
  return (
    <Elevation
      {...args}
      style={{
        margin: 20,
        width: 216,
        height: 216,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    />
  );
};

export default ElevationView;
