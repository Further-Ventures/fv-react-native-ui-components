import React, { createRef, forwardRef, useImperativeHandle, useState } from 'react';
import Input, { IInputProps } from '../Input';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native';
import { IContentSelectItem } from '../Select';
import ContentSelect from '../Select/ContentSelect';
import useStyles from './styles';

export interface IPhoneInput extends IInputProps {
  icon: IContentSelectItem<void>['content'];
  onSelectPress?: () => void;
}

const PhoneInput = forwardRef<TextInput, IPhoneInput>(
  ({ icon, onSelectPress, onFocus, onBlur, disabled, error, ...rest }, ref) => {
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
        {...rest}
        leftContent={
          <ContentSelect
            onPress={onSelectPress}
            disabled={disabled}
            style={styles.select}
            onVisibleChange={setIsSelectFocused}
            isFocused={(isInputFocused || isSelectFocused) && !error}
            leftContent={icon}
          />
        }
      />
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
