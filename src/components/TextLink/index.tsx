import React, { useState } from 'react';
import useStyles from './styles';
import { Pressable } from 'react-native';
import Text, { IVariantBaseProps } from '../Text';
import Icon, { IIconProps } from '../Icon';

export interface ITextLink extends Omit<IVariantBaseProps, 'variant'> {
  variant?: 'p1-regular' | 'p2-regular' | 'description-medium' | 'caption-regular';
  iconPosition?: 'left' | 'right';
  icon?: IIconProps['name'];
  disabled?: boolean;
  visited?: boolean;
  children: React.ReactNode;
  onPress: () => void;
}

const TextLink: React.FC<ITextLink> = (props) => {
  const {
    disabled = false,
    visited = null,
    icon,
    onPress,
    iconPosition = 'right',
    children,
    variant = 'p1-regular',
    ...rest
  } = props;
  const [showUnderline, setShowUnderline] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const styles = useStyles();
  const visitedState = visited ?? isVisited;

  const handlePress = () => {
    setIsVisited(true);
    onPress?.();
  };

  const onPressIn = () => {
    setShowUnderline(true);
  };

  const onPressOut = () => {
    setShowUnderline(false);
  };

  const generateIcon = (position: ITextLink['iconPosition']) => {
    if (!!icon && iconPosition === position) {
      const size = ['p1-regular', 'p2-regular'].includes(variant) ? 24 : 20;
      return (
        <Icon
          name={icon}
          color={visitedState ? 'primary-dark' : 'primary-main'}
          height={size}
          width={size}
          disabled={disabled}
          style={iconPosition === 'left' ? { marginRight: 4 } : { marginLeft: 4 }}
        />
      );
    }
  };

  return (
    <Pressable
      style={styles.container}
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handlePress}
    >
      {generateIcon('left')}
      <Text
        variant={variant}
        color={visitedState ? 'primary-dark' : 'primary-main'}
        disabled={disabled}
        style={[(showUnderline || visitedState) && styles.underline]}
        {...rest}
      >
        {children}
      </Text>
      {generateIcon('right')}
    </Pressable>
  );
};

export default TextLink;
