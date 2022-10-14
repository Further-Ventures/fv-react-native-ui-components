import React, { useRef } from 'react';
import useSelect from '../../MultiSelect/useSelect';
import Menu, { IMenuRef } from '../../Menu';
import SelectInputLayout from '../../MultiSelect/SelectInputLayout';
import { IContentSelect } from '../types';

const ContentSelect = <T,>({
  name = 'unnamed',
  items,
  value,
  onChange,
  clearFormValueOnUnmount,
  error,
  hint,
  style,
  ...rest
}: IContentSelect<T>) => {
  const menuRef = useRef<IMenuRef>(null);

  const data = items.map((item, i) => ({
    label: i.toString(),
    title: i.toString(),
    value: item.value,
    leftContent: item.content,
  }));

  const { errorMessage, isOpened, getValuesBySelectedIndexes, onVisibleChange, updateFormValue } =
    useSelect({
      name,
      items: data,
      values: [value],
      error,
      clearFormValueOnUnmount,
    });

  const selectedContent = items.find((i) => i.value === value)?.content;

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
      ref={menuRef}
      disabledTriggerPress
      listItems={data}
      onlyCustomContent={true}
    >
      <SelectInputLayout
        isOpened={isOpened}
        onPress={onTriggerPress}
        leftContent={selectedContent}
        error={errorMessage}
        hint={hint}
        {...rest}
        label=''
        itemWidth={undefined}
      />
    </Menu>
  );
};

ContentSelect.displayName = 'ContentSelect';

export default ContentSelect;
