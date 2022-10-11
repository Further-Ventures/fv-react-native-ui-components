import React, { useMemo, useRef } from 'react';
import BaseInputLayout from '../Input/BaseInputLayout';
import Icon from '../Icon';
import Menu from '../Menu';
import { IMenuRef } from '../Menu/types';
import useStyles from './styles';
import { View } from 'react-native';
import useSelect from '../MultiSelect/useSelect';

import { IMultiSelect } from '../MultiSelect';

export interface ISelect<T> extends Omit<IMultiSelect<T>, 'onChange' | 'values'> {
  onChange: (value: T) => void;
  value?: T;
}

const Select = <T,>({
  name = 'select',
  label,
  items,
  value,
  itemWidth = 'medium',
  itemHeight = 'thick',
  onChange,
  clearFormValueOnUnmount,
  error,
  style,
  hint,
  ...rest
}: ISelect<T>) => {
  const menuRef = useRef<IMenuRef>(null);
  const inputRef = useRef<View>(null);
  const styles = useStyles(itemWidth);

  const data = useMemo(() => items.map((item) => item.label), [items]);
  const {
    errorMessage,
    isOpened,
    labels,
    getValuesBySelectedIndexes,
    onVisibleChange,
    updateFormValue,
  } = useSelect({
    name,
    items,
    values: value !== undefined ? [value] : undefined,
    error,
    clearFormValueOnUnmount,
  });

  const onSelect = (selected: number[]) => {
    const selectedValues = getValuesBySelectedIndexes(selected);
    onChange(selectedValues[0]);
    updateFormValue(name, selectedValues[0]);
  };

  const onTriggerPress = () => menuRef.current?.open();

  return (
    <Menu
      onSelect={onSelect}
      onVisibleChange={onVisibleChange}
      itemWidth={itemWidth}
      itemHeight={itemHeight}
      ref={menuRef}
      disabledTriggerPress
      listItems={data}
    >
      <BaseInputLayout
        ref={inputRef}
        isFocused={isOpened}
        onPress={onTriggerPress}
        rightContent={
          <Icon
            width={20}
            color='grey-dark'
            name={isOpened ? 'arrow_drop_up' : 'arrow_drop_down'}
          />
        }
        label={labels?.[0] ?? label}
        style={[styles.input, style]}
        error={isOpened ? undefined : errorMessage}
        hint={isOpened ? undefined : hint}
        {...rest}
      >
        <View style={styles.divider} />
      </BaseInputLayout>
    </Menu>
  );
};

Select.displayName = 'Select';

export default Select;
