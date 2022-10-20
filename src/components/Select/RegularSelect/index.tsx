import React, { useMemo, useRef } from 'react';
import Menu, { IMenuRef } from '../../Menu';
import Text from '../../Text';
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
  noneLabel = 'None',
  ...rest
}: IRegularSelect<T>) => {
  const menuRef = useRef<IMenuRef>(null);
  const itemsWithNone = [{ label: noneLabel }, ...items] as IRegularSelect<T>['items'];

  const data = useMemo(() => itemsWithNone.map((item) => item.label), [itemsWithNone]);
  const {
    errorMessage,
    isOpened,
    labels,
    getValuesBySelectedIndexes,
    setVisible,
    updateFormValue,
  } = useSelect<T>({
    name,
    items: itemsWithNone,
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

  const renderSelected = () => {
    if (!labels.length) return null;
    return (
      <Text numberOfLines={1} variant={'p2-regular'} color={'text-primary'}>
        {labels[0]}
      </Text>
    );
  };

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
        currentValueLength={labels.length}
        onPress={onTriggerPress}
        label={label}
        error={errorMessage}
        hint={hint}
        {...rest}
      >
        {renderSelected()}
      </SelectInputLayout>
    </Menu>
  );
};

Select.displayName = 'RegularSelect';

export default Select;
