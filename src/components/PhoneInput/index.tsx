import React, { createRef, forwardRef, useImperativeHandle, useState } from 'react';
import Input, { IInputProps } from '../Input';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native';
import Select, { IContentSelect } from '../Select';
import useStyles from './styles';

export interface IPhoneInput extends IInputProps, Pick<IContentSelect<string>, 'items'> {
  phonePrefixValue: string;
  onPhonePrefixChange: IContentSelect<string>['onChange'];
}

const PhoneInput = forwardRef<TextInput, IPhoneInput>(
  (
    { items, phonePrefixValue, onPhonePrefixChange, onFocus, onBlur, disabled, error, ...rest },
    ref
  ) => {
    const inputRef = createRef<TextInput>();
    useImperativeHandle(ref, () => inputRef.current as TextInput);

    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isSelectFocused, setIsSelectFocused] = useState(false);

    const styles = useStyles(isSelectFocused && !isInputFocused, !!error);
    const onFocusWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsInputFocused(true);
      onFocus?.(e);
    };
    const onBlurWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsInputFocused(false);
      onBlur?.(e);
    };

    return (
      <Input
        style={styles.input}
        onFocus={onFocusWrapper}
        onBlur={onBlurWrapper}
        ref={inputRef}
        disabled={disabled}
        error={error}
        prefix={phonePrefixValue}
        {...rest}
        leftContent={
          <Select
            disabled={disabled}
            style={styles.select}
            onVisibleChange={setIsSelectFocused}
            isFocused={(isInputFocused || isSelectFocused) && !error}
            items={items}
            onChange={onPhonePrefixChange}
            value={phonePrefixValue}
          />
        }
      />
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
