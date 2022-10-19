import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import useStyles from './styles';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
  TextStyle,
  Text,
} from 'react-native';
import { useFormContext } from '../Form';
import BaseInputLayout, { IBaseInputLayoutProps } from './BaseInputLayout';
import { useTheme } from '../Theme';
import { applyDigitMask } from './utils';

export interface IInputProps extends TextInputProps {
  name?: string;
  label?: string;
  size?: IBaseInputLayoutProps['size'];
  clearFormValueOnUnmount?: boolean;
  hint?: string;
  error?: string | boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  controlled?: boolean;
  rightContent?: IBaseInputLayoutProps['rightContent'];
  leftContent?: IBaseInputLayoutProps['leftContent'];
  showLength?: boolean;
  mask?: string;
  prefix?: string;
  prefixStyle?: StyleProp<TextStyle>;
}

const Input = forwardRef<TextInput, IInputProps>(
  (
    {
      name = 'input',
      onChangeText,
      onFocus,
      onBlur,
      clearFormValueOnUnmount,
      error,
      value = '',
      label,
      size = 'medium',
      hint,
      style,
      disabled,
      controlled,
      maxLength,
      rightContent,
      leftContent,
      showLength,
      mask,
      prefix,
      prefixStyle,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = React.createRef<TextInput>();
    const { theme } = useTheme();

    const styles = useStyles();

    const handleFocus = () => inputRef.current!.focus();

    useImperativeHandle(ref, () => inputRef.current as TextInput);

    const { fieldError, fieldValue, unsetFormValue, updateFormValue, updateFormTouched } =
      useFormContext(name);

    const initValue = fieldValue || value;
    const errorMessage = fieldError || error;
    const [internalValue, setInternalValue] = React.useState<string>(
      mask && initValue ? applyDigitMask(initValue, mask) : initValue
    );

    /** Wrappers to merge form and props methods */
    const onChangeTextWrapper = (text: string) => {
      if (disabled) return;
      let nextValue = text;

      setInternalValue((prevValue) => {
        if (mask) {
          nextValue = prevValue.length >= text.length ? text : applyDigitMask(text, mask);
        }
        return nextValue;
      });

      updateFormValue(name, nextValue);
      onChangeText?.(nextValue);
    };
    const onFocusWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      onFocus?.(e);
    };
    const onBlurWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      updateFormTouched(name, true);
      onBlur?.(e);
    };

    useEffect(() => {
      updateFormValue(name, internalValue, true);
      return () => {
        clearFormValueOnUnmount && unsetFormValue(name);
      };
    }, []);

    return (
      <BaseInputLayout
        style={style}
        label={label}
        isFocused={isFocused}
        size={size}
        onPress={handleFocus}
        error={errorMessage}
        disabled={disabled}
        hint={hint}
        maxValueLength={maxLength}
        showLength={showLength}
        currentValueLength={controlled ? value?.length : internalValue?.length}
        rightContent={rightContent}
        leftContent={leftContent}
        onFocusAnimationEnabled
      >
        <View style={styles.inputContainer}>
          {prefix && <Text style={[styles.prefix, prefixStyle]}>{prefix}</Text>}
          <TextInput
            ref={inputRef}
            multiline={true}
            numberOfLines={10}
            style={[styles.input, disabled && styles.disabledInput]}
            value={controlled ? value : internalValue}
            onBlur={onBlurWrapper}
            onChangeText={onChangeTextWrapper}
            onFocus={onFocusWrapper}
            placeholderTextColor={theme.text.disabled}
            maxLength={mask?.length || maxLength}
            editable={!disabled}
            {...rest}
          />
        </View>
      </BaseInputLayout>
    );
  }
);

Input.displayName = 'Input';

export default Input;
