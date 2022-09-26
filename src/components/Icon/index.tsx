import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getColorFromTheme, TPalette } from '../../utils/getColorFromTheme';

export interface IIconProps<TIsAnyColor = void> extends Omit<SvgProps, 'fill'> {
  filled?: boolean;
  name: string;
  color?: TPalette<TIsAnyColor>;
  disabled?: boolean;
}

const Icon = <TIsAnyColor,>({
  filled,
  name,
  width = 24,
  height = 24,
  color,
  disabled = false,
  style,
  ...rest
}: IIconProps<TIsAnyColor>) => {
  const SvgRoot = filled
    ? require('./material-symbols/filled')
    : require('./material-symbols/unfilled');
  const SvgContent =
    SvgRoot[name] ||
    (color ? require('./custom/social/dull')[name] : require('./custom/social/colorfull')[name]) ||
    require('./custom/payment')[name] ||
    require('./custom/other')[name];

  if (!SvgContent) throw new Error('Icon name not found');
  const fill = color
    ? {
        fill: disabled ? getColorFromTheme('text-disabled') : getColorFromTheme<TIsAnyColor>(color),
      }
    : {};
  return (
    <View style={style}>
      <SvgContent
        width={width}
        height={height || width}
        viewBox={SvgRoot[name] ? '0 0 48 48' : null}
        {...fill}
        {...rest}
      />
    </View>
  );
};

export default Icon;
