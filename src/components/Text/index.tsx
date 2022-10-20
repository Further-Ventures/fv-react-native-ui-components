import React from 'react';
import useStyles, { sizeToHeightMap } from './styles';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { getColorFromTheme, TPalette } from '../../utils/getColorFromTheme';
import { useTheme } from '../Theme';

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

const Text = <TIsAnyColor,>(props: IConditionalTextProps<TIsAnyColor>) => {
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
  const { theme } = useTheme();
  const generatedColor = disabled
    ? getColorFromTheme('text-disabled')
    : getColorFromTheme<TIsAnyColor, true>(color);
  const generateFontFamily = (): string => {
    switch (weight) {
      case '100':
        return theme.fontFamily.thin;
      case '200':
        return theme.fontFamily.light;
      case '300':
        return theme.fontFamily.light;
      case '400':
        return theme.fontFamily.regular;
      case '500':
        return theme.fontFamily.medium;
      case '600':
        return theme.fontFamily.bold;
      case '700':
        return theme.fontFamily.bold;
      case '800':
        return theme.fontFamily.heavy;
      case '900':
        return theme.fontFamily.black;
      default:
        return theme.fontFamily.regular;
    }
  };
  const styles = useStyles(generatedColor);
  const wrapStyle = { flexShrink: 1 } as const;
  const variantStyles = variant ? styles[variant] : {};
  const manualStyles = variant
    ? {}
    : {
        color: generatedColor,
        fontSize: size,
        fontWeight: weight,
        fontFamily: generateFontFamily(),
        lineHeight:
          height ||
          (size && size in sizeToHeightMap
            ? sizeToHeightMap[size]
            : size
            ? size + Math.trunc(size / 2)
            : 10),
      };
  return (
    <RNText style={[variantStyles, manualStyles, wrapStyle, style || {}]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
