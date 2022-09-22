import React from 'react';
import useStyles, {sizeToHeightMap} from './styles';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import {getColorFromTheme, TPalette} from '../../utils/getColorFromTheme';

export interface IVariantBaseProps<TIsAnyColor = void> extends TextProps {
  variant: keyof ReturnType<typeof useStyles>;
  size?: never;
  weight?: never;
  height?: never;
  color?: TPalette<TIsAnyColor, true>;
  disabled?: boolean;
}

export interface IManualControlProps<TIsAnyColor = void> extends TextProps {
  variant?: never;
  size: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  height?: TextStyle['lineHeight'];
  color?: TPalette<TIsAnyColor, true>;
  disabled?: boolean;
}

export type IConditionalTextProps<TIsAnyColor = void> =
  | IVariantBaseProps<TIsAnyColor>
  | IManualControlProps<TIsAnyColor>;

const Text = <TIsAnyColor extends unknown>(
  props: IConditionalTextProps<TIsAnyColor>,
) => {
  const {
    variant,
    style,
    size,
    weight = '500',
    height,
    color = 'text-primary',
    disabled = false,
    children,
    ...rest
  } = props;
  const styles = useStyles(
    disabled
      ? getColorFromTheme('text-disabled')
      : getColorFromTheme<TIsAnyColor, true>(color),
  );
  const variantStyles = variant ? styles[variant] : {};
  const wrapStyle = {flexShrink: 1} as const;
  const manualControlPropsToStyles = variant
    ? {}
    : {
        color,
        fontSize: size,
        fontWeight: weight,
        lineHeight:
          height ||
          (size && size in sizeToHeightMap
            ? sizeToHeightMap[size]
            : size
            ? size + Math.trunc(size / 2)
            : 10),
      };

  return (
    <RNText
      style={[
        variantStyles,
        manualControlPropsToStyles,
        wrapStyle,
        style || {},
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
