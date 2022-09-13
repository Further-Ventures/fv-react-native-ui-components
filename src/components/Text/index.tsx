import React from 'react';
import useStyles, {sizeToHeightMap} from './styles';
import {Text as RNText, TextProps, TextStyle} from 'react-native';

export interface IVariantBaseProps extends TextProps {
  variant: keyof ReturnType<typeof useStyles>;
  size?: never;
  weight?: never;
  height?: never;
  color?: TextStyle['color'];
}

export interface IManualControlProps extends TextProps {
  variant?: never;
  size: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  height?: TextStyle['lineHeight'];
  color?: TextStyle['color'];
}

export type IConditionalTextProps = IVariantBaseProps | IManualControlProps;

const Text: React.FC<IConditionalTextProps> = props => {
  const {
    variant,
    style,
    size,
    weight = '500',
    height,
    color = '#000',
    children,
    ...rest
  } = props;
  const styles = useStyles(color);
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
  console.log(
    variantStyles,
    manualControlPropsToStyles,
    wrapStyle,
    style || {},
  );
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
