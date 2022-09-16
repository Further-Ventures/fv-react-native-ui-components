import React, {useState} from 'react';
import useStyles from './styles';
import {Text, TextProps, TouchableOpacity} from 'react-native';
import {useTheme} from '../Theme';
import Icon from '../Icon';

export interface IManualControlProps extends TextProps {
  variation?: 'large' | 'default' | 'description' | 'caption';
  icon?: 'default' | 'left' | 'right';
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
}

const TextLink: React.FC<IManualControlProps> = props => {
  const {
    disabled = false,
    variation,
    icon,
    onPress,
    children,
    ...other
  } = props;
  const [showUnderline, setShowUnderline] = useState(false);
  const styles = useStyles();
  const {theme} = useTheme();

  const onPressIn = () => {
    setShowUnderline(true);
  };

  const onPressOut = () => {
    setShowUnderline(false);
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      {icon === 'left' ? <Icon name="west" color={theme.text.primary} /> : null}
      <Text
        style={[
          styles.text,
          showUnderline && styles.underline,
          disabled && styles.disabled,
        ]}
        {...other}
      >
        {children}
      </Text>
      {icon === 'right' ? (
        <Icon name="east" color={theme.text.primary} />
      ) : null}
    </TouchableOpacity>
  );
};

export default TextLink;
