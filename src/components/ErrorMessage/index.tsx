import React from 'react';
import useStyles from './styles';
import {Text, TextProps, View} from 'react-native';
import Icon from '../Icon';
import {useTheme} from '../Theme';

interface IErrorMessageProps extends TextProps {
  error: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({
  error,
  style,
  ...rest
}) => {
  const styles = useStyles();
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <Icon
        name="error"
        filled={true}
        color={theme.error.main}
        height={16}
        width={16}
      />
      <Text style={[styles.error, style]} {...rest}>
        {error}
      </Text>
    </View>
  );
};

export default ErrorMessage;
