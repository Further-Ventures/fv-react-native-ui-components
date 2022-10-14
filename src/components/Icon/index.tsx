import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getColorFromTheme, TPalette } from '../../utils/getColorFromTheme';

export interface IIconProps<TIsAnyColor = void> extends Omit<SvgProps, 'fill'> {
  name?: string;
  source?: NodeRequire;
  filled?: boolean;
  color?: TPalette<TIsAnyColor>;
  disabled?: boolean;
}

const Icon = <TIsAnyColor,>({
  filled,
  name = 'question_mark',
  width = 24,
  height,
  color,
  disabled = false,
  source,
  style,
  ...rest
}: IIconProps<TIsAnyColor>) => {
  if (!name && !source) return null;
  const SvgRoot = filled
    ? require('./list/material-symbols/filled')
    : require('./list/material-symbols/unfilled');
  const SvgContent =
    source ||
    SvgRoot[name] ||
    (color
      ? require('./list/custom/social/dull')[name]
      : require('./list/custom/social/colorfull')[name]) ||
    require('./list/custom/payment')[name] ||
    require('./list/custom/other')[name];
  const fill = color
    ? {
        fill: disabled ? getColorFromTheme('text-disabled') : getColorFromTheme<TIsAnyColor>(color),
      }
    : {};
  const viewBox = SvgRoot[name] ? { viewBox: '0 0 48 48' } : {};
  return (
    <View style={style}>
      <SvgContent width={width} height={height || width} {...viewBox} {...fill} {...rest} />
    </View>
  );
};

export default Icon;
