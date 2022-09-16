import React, {useState} from 'react';
import useStyles from './styles';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps,
  Text,
  View,
} from 'react-native';
import {useTheme} from '../Theme';
import ErrorMessage from '../ErrorMessage';
import Icon from '../Icon';

export interface IManualControlProps extends TextInputProps {
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  textLimit?: number;
  name?: string;
}

const TextArea: React.FC<IManualControlProps> = props => {
  const {
    errorText,
    disabled = false,
    textLimit,
    name = 'Label',
    onChangeText,
    onFocus,
    onBlur,
    value,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);
  const styles = useStyles();
  const {theme} = useTheme();

  const onFocusWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onFocus?.(e);
  };
  const onBlurWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const onChangeTextWrapper = (text: string) => {
    onChangeText?.(text);
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          focused && styles.focused,
          !!errorText && styles.error,
          disabled && styles.disabled,
        ]}
      >
        <Text style={[styles.label, disabled && styles.textDisabled]}>
          {name}
        </Text>
        <RNTextInput
          maxLength={textLimit}
          onFocus={onFocusWrapper}
          onBlur={onBlurWrapper}
          placeholderTextColor={theme.text.disabled}
          placeholder="Type something..."
          multiline
          style={styles.textArea}
          editable={!disabled}
          onChangeText={onChangeTextWrapper}
          value={value}
          {...rest}
        />
      </View>
      <View
        style={[
          styles.bottomContainer,
          (disabled || (!disabled && !errorText)) && styles.bottomContainerEnd,
        ]}
      >
        {!!errorText && !disabled && (
          <View style={styles.errorContainer}>
            {(errorText?.length ?? 0) > 0 && (
              <ErrorMessage
                style={styles.errorMessage}
                error={errorText || ''}
              />
            )}
          </View>
        )}
        {textLimit && !errorText && (
          <Text style={[styles.limit, disabled && styles.disabled]}>
            {value?.length ?? 0}/{textLimit}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextArea;
