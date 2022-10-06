import React, { useEffect, useMemo, useRef, useState } from 'react';
import BaseInputLayout, { IBaseInputLayoutProps } from '../Input/BaseInputLayout';
import Icon from '../Icon';
import Menu from '../Menu';
import { IMenu, IMenuRef } from '../Menu/types';
import { useFormContext } from '../Form';
import useStyles from './styles';
import { View } from 'react-native';

interface ISelectItem<T> {
  label: string;
  value: T;
}

export interface ISelect<T> extends IBaseInputLayoutProps, Pick<IMenu, 'itemWidth' | 'itemHeight'> {
  items: ISelectItem<T>[];
  onChange: (value: T) => void;
  value?: T;
  label?: string;
  name?: string;
  clearFormValueOnUnmount?: boolean;
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
  const { fieldError, fieldValue, unsetFormValue, updateFormValue, updateFormTouched } =
    useFormContext(name);
  const errorMessage = fieldError || error;
  const selectedValue = fieldValue ?? value;
  const [isOpened, setOpened] = useState(false);
  const data = useMemo(() => items.map((item) => item.label), [items]);

  const getLabelByValue = () =>
    items.find((optionItem) => optionItem.value === selectedValue)?.label ?? label ?? '';

  const onSelect = (selected: number[]) => {
    if (selected.length && selected[0] !== undefined) {
      onChange(items[selected[0]].value);
      updateFormValue(name, selected);
    }
  };

  const onVisibleChange = (visible: boolean) => {
    setOpened(visible);
    if (!visible) {
      updateFormTouched(name, true);
    }
  };

  useEffect(() => {
    updateFormValue(name, selectedValue, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
  }, []);

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
        onPress={menuRef.current?.open}
        rightContent={
          <Icon
            width={20}
            color='grey-dark'
            name={isOpened ? 'arrow_drop_up' : 'arrow_drop_down'}
          />
        }
        label={getLabelByValue()}
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
