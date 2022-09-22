import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {getColorFromTheme, TPalette} from '../../utils/getColorFromTheme';

export interface IIconProps<TIsAnyColor = void> extends SvgProps {
  filled?: boolean;
  name: string;
  color?: TPalette<TIsAnyColor>;
  disabled?: boolean;
}

const Icon = <TIsAnyColor extends unknown>({
  filled,
  name,
  width = 24,
  height = 24,
  color = 'primary-contrast',
  disabled = false,
  style,
  ...rest
}: IIconProps<TIsAnyColor>) => {
  const SvgRoot = filled
    ? require('./material-symbols/filled')
    : require('./material-symbols/unfilled');
  const SvgContent =
    SvgRoot[name] ||
    (color
      ? require('./custom/social/dull')[name]
      : require('./custom/social/colorfull')[name]) ||
    require('./custom/payment')[name] ||
    require('./custom/other')[name];

  return (
    <View style={style}>
      <SvgContent
        width={width}
        height={height || width}
        viewBox={SvgRoot[name] ? '0 0 48 48' : null}
        fill={
          disabled
            ? getColorFromTheme('text-disabled')
            : getColorFromTheme<TIsAnyColor>(color)
        }
        {...rest}
      />
    </View>
  );
};

export default Icon;
