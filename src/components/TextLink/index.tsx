import React, { useState } from 'react';
import useStyles from './styles';
import { Text, TextProps, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

export interface IManualControlProps extends TextProps {
  icon?: 'default' | 'left' | 'right';
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
}

const TextLink: React.FC<IManualControlProps> = (props) => {
  const { disabled = false, icon, onPress, children, ...other } = props;
  const [showUnderline, setShowUnderline] = useState(false);
  const styles = useStyles();

  const onPressIn = () => {
    setShowUnderline(true);
  };

  const onPressOut = () => {
    setShowUnderline(false);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      {icon === 'left' ? <Icon name='west' color='primary-main' height={20} /> : null}
      <Text
        style={[styles.text, showUnderline && styles.underline, disabled && styles.disabled]}
        {...other}
      >
        {children}
      </Text>
      {icon === 'right' ? <Icon name='east' color='primary-main' height={20} /> : null}
    </TouchableOpacity>
  );
};

export default TextLink;
