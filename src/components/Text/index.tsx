import React from 'react';
import useStyles from './styles';
import {Text as RNText, TextProps} from 'react-native';

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
