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
import { useToggle } from './useToggle';

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
  checked?: boolean;
  heading?: string;
  label?: string;
  sentence?: string;
  style?: StyleProp<ViewStyle>;
  name?: string;
  onChange?: (checked?: boolean) => void;
  clearFormValueOnUnmount?: boolean;
  controlled?: boolean;
}

const Toggle: React.FC<IToggle> = ({
  size = 'small',
  variant = 'checkbox',
  type = 'default',
  horizontalPosition = 'left',
  verticalPosition = 'top',
  error,
  disabled = false,
  checked = false,
  heading = '',
  label = '',
  sentence = '',
  style,
  name,
  onChange,
  clearFormValueOnUnmount,
  controlled,
  ...rest
}) => {
  const [labelHeight, setLabelHeight] = useState(0);

  const { internalValue, onChangeWrapper, errorMessage } = useToggle({
    name,
    error,
    onChange,
    checked,
    clearFormValueOnUnmount,
  });

  const isChecked = controlled ? checked : internalValue;

  const styles = useStyles(size, isChecked);

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

  const handlePress = () => {
    // LayoutAnimation.configureNext({
    //   duration: 500,
    //   create: { type: 'easeOut', property: 'opacity' },
    //   update: { type: 'easeOut', springDamping: 0.4 },
    //   delete: { type: 'easeOut', property: 'opacity' },
    // });
    onChangeWrapper();
  };

  return (
    <View>
      {!!heading && (
        <>
          <Text
            variant={size === 'small' ? 'small-regular' : 'caption-regular'}
            disabled={disabled}
          >
            {heading}
          </Text>

          <View style={styles.middleVerticalSpacing} />
        </>
      )}
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
            onPress={onChangeWrapper}
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

          {!!sentence && (
            <>
              <View style={styles.smallVerticalSpacing} />
              <Text
                variant={size === 'small' ? 'label-14-regular' : 'p2-regular'}
                color='text-hint'
                disabled={disabled}
              >
                {sentence}
              </Text>
            </>
          )}

          {!disabled && !!errorMessage && (
            <ErrorMessage error={errorMessage} margin={{ left: 0, top: 8 }} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Toggle;
