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
import IconWarning from './IconWarning';

export interface IManualControlProps extends TextInputProps {
  error?: string;
  errorText?: string;
  disabled?: boolean;
  textLimit?: number;
}

const TextArea: React.FC<IManualControlProps> = props => {
  const {
    error = false,
    errorText,
    disabled = false,
    textLimit,
    onChangeText,
    onFocus,
    onBlur,
    ...other
  } = props;
  const [focused, setFocused] = useState(false);
  const [limit, setLimit] = useState(0);
  const styles = useStyles();
  const {theme} = useTheme();

  const onFocusWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const onChangeTextWrapper = (text: string) => {
    setLimit(text?.length ?? 0);

    onChangeText && onChangeText(text);
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          focused && styles.focused,
          !!error && styles.error,
          disabled && styles.disabled,
        ]}
      >
        <Text style={[styles.label, disabled && styles.textDisabled]}>
          Label
        </Text>
        <RNTextInput
          maxLength={textLimit}
          onFocus={onFocusWrapper}
          onBlur={onBlurWrapper}
          placeholderTextColor={theme.text.disabled}
          placeholder="Type something..."
          multiline
          editable={!disabled}
          onChangeText={onChangeTextWrapper}
          {...other}
        />
      </View>
      <View
        style={[
          styles.bottomContainer,
          (disabled || (!disabled && !error)) && styles.bottomContainerEnd,
        ]}
      >
        {error && !disabled && (
          <View style={styles.errorContainer}>
            <IconWarning />
            {errorText && (
              <ErrorMessage style={styles.errorMessage} error={errorText} />
            )}
          </View>
        )}
        {textLimit && (
          <Text style={[styles.limit, disabled && styles.disabled]}>
            {limit}/{textLimit}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextArea;
