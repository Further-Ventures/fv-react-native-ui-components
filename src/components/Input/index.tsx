import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import useStyles from './styles';
import { TextInput, NativeSyntheticEvent, TextInputFocusEventData, TextInputProps, StyleProp, ViewStyle, View } from 'react-native';
import { useFormContext } from '../Form';
import BaseInputLayout, { IBaseInputLayoutProps } from './BaseInputLayout';
import { useTheme } from '../Theme';

export interface IInputProps extends TextInputProps {
  name?: string;
  label?: string;
  clearFormValueOnUnmount?: boolean;
  hint?: string;
  error?: string | boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  controlled?: boolean;
  sideContent?: IBaseInputLayoutProps['sideContent'];
  showLength?: boolean;
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
      hint,
      style,
      disabled,
      controlled,
      maxLength,
      sideContent,
      showLength,
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

    const { fieldError, fieldValue, unsetFormValue, updateFormValue, updateFormTouched } = useFormContext(name);

    const initValue = fieldValue || value;
    const errorMessage = fieldError || error;
    const [internalValue, setInternalValue] = React.useState<string>(initValue);

    /** Wrappers to merge form and props methods */
    const onChangeTextWrapper = (text: string) => {
      const nextValue = text;

      setInternalValue(() => {
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
        onPress={handleFocus}
        error={errorMessage}
        disabled={disabled}
        hint={hint}
        maxValueLength={maxLength}
        showLength={showLength}
        currentValueLength={controlled ? value?.length : internalValue?.length}
        sideContent={sideContent}
      >
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRef}
            style={[styles.input, disabled && styles.disabledInput]}
            value={controlled ? value : internalValue}
            onBlur={onBlurWrapper}
            onChangeText={onChangeTextWrapper}
            onFocus={onFocusWrapper}
            placeholderTextColor={theme.text.disabled}
            maxLength={maxLength}
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
