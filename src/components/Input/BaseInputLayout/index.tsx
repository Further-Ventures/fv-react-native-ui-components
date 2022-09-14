import React, {useEffect, useRef, useState} from 'react';
import useStyles from './styles';
import {
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
  Animated,
} from 'react-native';
import HintMessage from '../../HintMessage';
import ErrorMessage from '../../ErrorMessage';
import Button from '../../Button';
import {useTheme} from '../../Theme';

export interface IBaseInputLayoutProps extends PressableProps {
  label?: string;
  isFocused?: boolean;
  style?: StyleProp<ViewStyle>;
  error?: string;
  disabled?: boolean;
  hint?: string;
  sideContent?: React.ReactElement;
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
      isFocused,
      error,
      style,
      disabled,
      hint,
      sideContent,
      currentValueLength = 0,
      maxValueLength,
      showLength,
      ...rest
    },
    ref,
  ) => {
    const displaySmallLabel = Boolean(isFocused || currentValueLength > 0);
    const labelAnim = useRef(new Animated.Value(displaySmallLabel ? 1 : 0))
      .current;
    const inputAnim = useRef(new Animated.Value(displaySmallLabel ? 1 : 0))
      .current;

    const [inputSize, setInputSize] = useState<IInputSize>({
      width: 0,
      height: 0,
    });

    const [rightContent, setRightContent] = useState(sideContent);

    const {theme} = useTheme();

    const styles = useStyles();

    useEffect(() => {
      if (React.isValidElement(sideContent) && sideContent?.type === Button) {
        let borderColor = theme.primary.main;
        if (error) {
          borderColor = theme.error.dark;
        } else if (disabled) {
          borderColor = theme.grey.light;
        }

        const updatedContent = React.cloneElement(sideContent, {
          style: {borderColor: borderColor},
          error: Boolean(error),
          disabled: Boolean(disabled),
        });
        setRightContent(updatedContent);
      }
    }, [sideContent]);

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
    }, [isFocused]);

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
          <View style={styles.mainContent}>
            {label && (
              <Animated.Text
                style={[
                  styles.label,
                  disabled && styles.labelDisabled,
                  displaySmallLabel && styles.labelSmall,
                  {
                    transform: [
                      {translateY: interpolate([0, -10])},
                      {scale: interpolate([1, LABEL_SCALE])},
                      {
                        translateX: interpolate([
                          0,
                          (inputSize.width * 0.75 - inputSize.width) / 2,
                        ]),
                      },
                    ],
                  },
                ]}
                onLayout={e => {
                  const {layout} = e.nativeEvent;
                  setInputSize(layout);
                }}
              >
                {label}
              </Animated.Text>
            )}
            <Animated.View
              style={[styles.childrenContainer, {opacity: inputAnim}]}
            >
              {children}
            </Animated.View>
          </View>
          <View style={styles.sideContent}>{rightContent}</View>
        </Pressable>
        {!!hint && <HintMessage message={hint} disabled={disabled} />}
        {!!showLength && (
          <HintMessage
            message={
              maxValueLength
                ? `${currentValueLength} / ${maxValueLength}`
                : `${currentValueLength}`
            }
            disabled={disabled}
          />
        )}
        {!!error && <ErrorMessage error={error} />}
      </View>
    );
  },
);

export default BaseInputLayout;
