import React, { useState } from 'react';
import {
  StyleProp,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import useStyles from './styles';
import Icon from '../Icon';
import Text from '../Text';
import Switch from './Switch';
import ErrorMessage from '../ErrorMessage';

export type TToggleType = 'default' | 'intermediate';
export type TVariant = 'switch' | 'checkbox' | 'radio' | 'checkboxCircle';
export type TSize = 'small' | 'medium';

export interface IToggle extends TouchableWithoutFeedbackProps {
  size?: TSize;
  variant?: TVariant;
  type?: TToggleType;
  horizontalPosition?: 'left' | 'right';
  verticalPosition?: 'top' | 'middle';
  error?: string;
  disabled?: boolean;
  defaultChecked?: boolean;

  heading?: string;
  label?: string;
  sentence?: string;

  style?: StyleProp<ViewStyle>;
}

const Toggle: React.FC<IToggle> = ({
  size = 'small',
  variant = 'checkbox',
  type = 'default',
  horizontalPosition = 'left',
  verticalPosition = 'top',
  error,
  disabled = false,
  defaultChecked = false,
  heading = '',
  label = '',
  sentence = '',
  style,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [labelHeight, setLabelHeight] = useState(0);
  const styles = useStyles(size, isChecked);
  const handlePress = () => {
    if (!disabled) {
      setIsChecked((prev) => !prev);
    }
  };
  const generateIcon = () => {
    if (isChecked) {
      if (variant === 'radio') {
        return <View style={styles.radioInnerCircle} />;
      }
      return (
        <Icon
          name={type === 'default' ? 'check' : 'remove'}
          color='primary-contrast2'
          width={size === 'small' ? 12 : 14}
        />
      );
    }
    return null;
  };

  const getSpaceBetweenToggleAndText = () => {
    if (horizontalPosition === 'right') {
      return styles.largeHorizontalSpacing;
    }
    if (size === 'medium') {
      if (variant === 'switch') {
        return styles.middleHorizontalSpacing;
      }
    }
    return styles.smallHorizontalSpacing;
  };

  return (
    <View>
      <Text variant={size === 'small' ? 'small-regular' : 'caption-regular'} disabled={disabled}>
        {heading}
      </Text>
      <View style={styles.middleVerticalSpacing} />
      <View style={[styles[horizontalPosition]]}>
        <TouchableWithoutFeedback
          onPress={handlePress}
          style={[styles.touchableWrapper]}
          disabled={disabled}
          {...rest}
        >
          <View style={[styles.toggleWrapper, { height: labelHeight }, styles[verticalPosition]]}>
            {variant === 'switch' ? (
              <Switch checked={isChecked} style={[styles.switch]} size={size} disabled={disabled} />
            ) : (
              <View
                style={[
                  styles.toggle,
                  styles[size],
                  styles[variant],
                  !!error && styles.error,
                  disabled && styles.disabled,
                  style,
                ]}
              >
                {generateIcon()}
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
        <View style={getSpaceBetweenToggleAndText()} />
        <View style={styles.textWrapper}>
          <TouchableWithoutFeedback
            onPress={handlePress}
            style={styles.touchableWrapper}
            disabled={disabled}
            {...rest}
          >
            <Text
              variant={size === 'small' ? 'label-14-regular' : 'p1-regular'}
              disabled={disabled}
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setLabelHeight(height);
              }}
            >
              {label}
            </Text>
          </TouchableWithoutFeedback>
          <View style={styles.smallVerticalSpacing} />
          <Text
            variant={size === 'small' ? 'label-14-regular' : 'p2-regular'}
            color='text-hint'
            disabled={disabled}
          >
            {sentence}
          </Text>

          {!disabled && !!error && <ErrorMessage error={error} margin={{ left: 0, top: 8 }} />}
        </View>
      </View>
    </View>
  );
};

export default Toggle;
