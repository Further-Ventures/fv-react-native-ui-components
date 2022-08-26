import React from 'react';
import useStyles from './styles';
import {Text as RNText, TextProps} from 'react-native';

// export type TVariant = 'h1-bold' | 'h1-medium' | 'h1-regular' | 'h2-bold' | 'h2-medium' | 'h2-regular' | 'h3-bold' | 'h3-medium' | 'h3-regular' | 'h1-bold' | 'h1-medium' | 'h1-regular' |
interface ITextProps extends TextProps {
  variant: keyof ReturnType<typeof useStyles>;
}

const Text: React.FC<ITextProps> = ({variant, style, children, ...rest}) => {
  const styles = useStyles();

  return (
    <RNText style={[styles[variant], style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
