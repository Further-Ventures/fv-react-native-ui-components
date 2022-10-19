import React, { FC } from 'react';
import BaseInputLayout, { IBaseInputLayoutProps } from '../../Input/BaseInputLayout';
import Icon from '../../Icon';
import { ItemWidth } from '../../../utils/itemSize';
import useStyles from './styles';

export interface ISelectInputLayout extends IBaseInputLayoutProps {
  isOpened: boolean;
  itemWidth?: ItemWidth;
}

const SelectInputLayout: FC<ISelectInputLayout> = ({
  disabled,
  currentValueLength,
  isOpened,
  itemWidth,
  onPress,
  label,
  error,
  hint,
  children,
  ...rest
}) => {
  const styles = useStyles(itemWidth);
  return (
    <BaseInputLayout
      disabled={disabled}
      currentValueLength={currentValueLength}
      isFocused={isOpened}
      onPress={onPress}
      style={styles.input}
      rightContent={({ disabled }) => (
        <Icon
          disabled={disabled}
          width={20}
          color='text-hint'
          name={isOpened ? 'arrow_drop_up' : 'arrow_drop_down'}
        />
      )}
      label={label}
      error={isOpened ? undefined : error}
      hint={isOpened ? undefined : hint}
      isFocusAnimationEnabled={false}
      {...rest}
    >
      {children}
    </BaseInputLayout>
  );
};

export default SelectInputLayout;
