import React from 'react';
import useStyles from './styles';
import { Text, TextProps, View, ViewStyle } from 'react-native';
import Icon from '../Icon';

export interface IErrorMessage extends TextProps {
  error: string;
  margin?: {
    top?: ViewStyle['marginTop'];
    right?: ViewStyle['marginRight'];
    bottom?: ViewStyle['marginBottom'];
    left?: ViewStyle['marginLeft'];
  };
}

const ErrorMessage: React.FC<IErrorMessage> = ({ error, style, margin, ...rest }) => {
  const styles = useStyles(margin);

  return (
    <View style={styles.container}>
      <Icon name='error' filled={true} color='error-main' height={16} width={16} />
      <Text style={[styles.error, style]} {...rest}>
        {error}
      </Text>
    </View>
  );
};

export default ErrorMessage;
