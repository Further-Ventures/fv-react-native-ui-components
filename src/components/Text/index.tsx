import React from 'react';
import useStyles, {sizeToHeightMap} from './styles';
import {Text as RNText, TextProps, TextStyle} from 'react-native';

interface IVariantBaseProps extends TextProps {
  variant: keyof ReturnType<typeof useStyles>;
  wrapped?: boolean;
  size?: never;
  weight?: never;
  height?: never;
  color?: TextStyle['color'];
}

interface IManualControlProps extends TextProps {
  variant?: never;
  wrapped?: boolean;
  size: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  height?: TextStyle['lineHeight'];
  color?: TextStyle['color'];
}

type IConditionalTextProps = IVariantBaseProps | IManualControlProps;

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
      style={[variantStyles, manualControlPropsToStyles, colorStyle, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
