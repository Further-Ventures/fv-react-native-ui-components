import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import useStyles from './styles';

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
  const styles = useStyles(width, height);

  const SvgRoot = filled
    ? require('./material-symbols/filled')
    : require('./material-symbols/unfilled');
  const SvgContent = SvgRoot[name];

  return (
    <View style={styles.wrapper}>
      <SvgContent
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        fill={color}
        {...rest}
      />
    </View>
  );
};

export default Icon;
