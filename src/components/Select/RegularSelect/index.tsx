import React, { useMemo, useRef } from 'react';
import Menu, { IMenuRef } from '../../Menu';
import useSelect from '../../MultiSelect/useSelect';
import SelectInputLayout from '../../MultiSelect/SelectInputLayout';
import { IRegularSelect } from '../types';

const Select = <T,>({
  name = 'unnamed',
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
  onVisibleChange,
  dividerBottomEnabled,
  ...rest
}: IRegularSelect<T>) => {
  const menuRef = useRef<IMenuRef>(null);

  const data = useMemo(() => items.map((item) => item.label), [items]);
  const {
    errorMessage,
    isOpened,
    labels,
    getValuesBySelectedIndexes,
    setVisible,
    updateFormValue,
  } = useSelect({
    name,
    items,
    values: value !== undefined ? [value] : undefined,
    error,
    clearFormValueOnUnmount,
    onVisibleChange,
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
      onVisibleChange={setVisible}
      itemWidth={itemWidth}
      itemHeight={itemHeight}
      ref={menuRef}
      disabledTriggerPress
      listItems={data}
      dividerBottomEnabled={dividerBottomEnabled}
    >
      <SelectInputLayout
        isOpened={isOpened}
        itemWidth={itemWidth}
        onPress={onTriggerPress}
        label={labels?.[0] ?? label}
        error={errorMessage}
        hint={hint}
        {...rest}
      />
    </Menu>
  );
};

Select.displayName = 'RegularSelect';

export default Select;
