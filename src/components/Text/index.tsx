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
    weight,
    height,
    color,
    children,
    ...rest
  } = props;
  const styles = useStyles();
  const variantStyles = variant ? styles[variant] : {};
  const colorStyle = color ? {color} : {};
  const wrapStyle = {flex: 1, flexWrap: 'wrap'} as const;
  const manualControlPropsToStyles = variant
    ? {}
    : {
        fontSize: size,
        fontWeight: weight || '500',
        height:
          height ||
          (size && size in sizeToHeightMap
            ? sizeToHeightMap[size]
            : sizeToHeightMap[48]),
      };

  return (
    <RNText
      style={[
        variantStyles,
        manualControlPropsToStyles,
        colorStyle,
        wrapStyle,
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
