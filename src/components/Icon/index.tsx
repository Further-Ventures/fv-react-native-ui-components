import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface IIconProps extends SvgProps {
  filled?: boolean;
  name: string;
}

const Icon: React.FC<IIconProps> = ({
  filled,
  name,
  width = 24,
  height = 24,
  color = '#000',
  ...rest
}) => {
  const SvgRoot = filled
    ? require('./material-symbols/filled')
    : require('./material-symbols/unfilled');
  const SvgContent = SvgRoot[name];

  return (
    <View {...rest}>
      <SvgContent
        width={width}
        height={height || width}
        viewBox={'0 0 48 48'}
        fill={color}
      />
    </View>
  );
};

export default Icon;
