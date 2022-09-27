import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useStyles from './styles';
import { Pressable, PressableProps, View, StyleProp, ViewStyle, Animated } from 'react-native';
import HintMessage from '../../HintMessage';
import ErrorMessage from '../../ErrorMessage';

type ContentFunc = (hasError: boolean, disabled?: boolean) => React.ReactElement;

export interface IBaseInputLayoutProps extends PressableProps {
  label?: string;
  size?: 'small' | 'medium';
  isFocused?: boolean;
  style?: StyleProp<ViewStyle>;
  error?: string;
  disabled?: boolean;
  hint?: string;
  rightContent?: React.ReactElement | ContentFunc;
  leftContent?: React.ReactElement | ContentFunc;
  maxValueLength?: number;
  currentValueLength?: number;
  showLength?: boolean;
}

export interface IInputSize {
  width: number;
  height: number;
}

const LABEL_SCALE = 0.75;
const INPUT_RANGE = [0, 1];

const BaseInputLayout = React.forwardRef<View, IBaseInputLayoutProps>(
  (
    {
      children,
      label,
      size = 'medium',
      isFocused,
      error,
      style,
      disabled,
      hint,
      rightContent,
      leftContent,
      currentValueLength = 0,
      maxValueLength,
      showLength,
      ...rest
    },
    ref
  ) => {
    const displaySmallLabel = Boolean(isFocused || currentValueLength > 0);
    const labelAnim = useRef(new Animated.Value(displaySmallLabel ? 1 : 0)).current;
    const inputAnim = useRef(new Animated.Value(displaySmallLabel ? 1 : 0)).current;

    const [inputSize, setInputSize] = useState<IInputSize>({
      width: 0,
      height: 0,
    });

    const hasError = Boolean(error);
    const hasLabel = Boolean(label);

    const styles = useStyles(hasLabel, size);

    const getSideContent = useCallback(
      (sideContent?: ReactElement | ContentFunc): ReactElement | null => {
        if (!sideContent) return null;
        return typeof sideContent === 'function' ? sideContent(hasError, disabled) : sideContent;
      },
      [disabled, hasError]
    );

    const leftElement = useMemo(() => getSideContent(leftContent), [getSideContent, leftContent]);
    const rightElement = useMemo(
      () => getSideContent(rightContent),
      [getSideContent, rightContent]
    );

    useEffect(() => {
      Animated.timing(labelAnim, {
        useNativeDriver: false,
        toValue: displaySmallLabel ? 1 : 0,
        duration: 100,
      }).start();
      Animated.timing(inputAnim, {
        useNativeDriver: false,
        toValue: displaySmallLabel ? 1 : 0,
        duration: 100,
      }).start();
    }, [labelAnim, inputAnim, displaySmallLabel]);

    const interpolate = (outputRange: number[] | string[]) =>
      labelAnim.interpolate({
        inputRange: INPUT_RANGE,
        outputRange,
      });

    return (
      <View style={style}>
        <Pressable
          style={[
            styles.baseInput,
            isFocused && styles.baseInputFocused,
            !!error && styles.error,
            disabled && styles.baseInputDisabled,
          ]}
          disabled={disabled}
          ref={ref}
          {...rest}
        >
          {!!leftElement && <View style={styles.leftContent}>{leftElement}</View>}
          <View style={styles.mainContent}>
            {label && (
              <Animated.Text
                style={[
                  styles.label,
                  disabled && styles.labelDisabled,
                  displaySmallLabel && styles.labelSmall,
                  {
                    transform: [
                      { translateY: interpolate([0, -12]) },
                      { scale: interpolate([1, LABEL_SCALE]) },
                      {
                        translateX: interpolate([
                          0,
                          (inputSize.width * 0.75 - inputSize.width) / 2,
                        ]),
                      },
                    ],
                  },
                ]}
                onLayout={(e) => {
                  const { layout } = e.nativeEvent;
                  setInputSize(layout);
                }}
              >
                {label}
              </Animated.Text>
            )}
            <Animated.View
              style={[styles.childrenContainer, { opacity: hasLabel ? inputAnim : 1 }]}
            >
              {children}
            </Animated.View>
          </View>
          {!!rightElement && <View style={styles.rightContent}>{rightElement}</View>}
        </Pressable>
        {!!hint && <HintMessage message={hint} disabled={disabled} />}
        {!!showLength && (
          <HintMessage
            message={
              maxValueLength ? `${currentValueLength} / ${maxValueLength}` : `${currentValueLength}`
            }
            disabled={disabled}
          />
        )}
        {!!error && <ErrorMessage error={error} />}
      </View>
    );
  }
);

BaseInputLayout.displayName = 'BaseInputLayout';

export default BaseInputLayout;
