import React, { useMemo, useRef } from 'react';
import Menu from '../Menu';
import Text from '../Text';
import Tag from '../Tag';
import { IMenu, IMenuRef } from '../Menu/types';
import BaseInputLayout, { IBaseInputLayoutProps } from '../Input/BaseInputLayout';
import { View } from 'react-native';
import useSelect from './useSelect';
import Icon from '../Icon';
import useStyles from './styles';

export interface ISelectItem<T> {
  label: string;
  value: T;
}

export interface IMultiSelect<T>
  extends IBaseInputLayoutProps,
    Pick<IMenu, 'itemWidth' | 'itemHeight'> {
  items: ISelectItem<T>[];
  label?: string;
  selection: Exclude<IMenu['selection'], 'none'>;
  values?: T[];
  onChange: (selected: T[]) => void;
  selectedType?: 'text' | 'tag';
  name?: string;
  clearFormValueOnUnmount?: boolean;
}

const MultiSelect = <T,>({
  name = 'select',
  label,
  items,
  values,
  itemWidth = 'medium',
  itemHeight = 'thick',
  onChange,
  clearFormValueOnUnmount,
  error,
  hint,
  selection = 'check-icon',
  selectedType,
  disabled,
  ...rest
}: IMultiSelect<T>) => {
  const menuRef = useRef<IMenuRef>(null);
  const inputRef = useRef<View>(null);
  const styles = useStyles(itemWidth);

  const data = useMemo(() => items.map((item) => item.label), [items]);
  const {
    errorMessage,
    isOpened,
    labels,
    getValuesBySelectedIndexes,
    getSelectedIndexes,
    onVisibleChange,
    updateFormValue,
  } = useSelect({
    name,
    items,
    values,
    error,
    clearFormValueOnUnmount,
  });

  let maxTagRenderCount = 3;
  if (itemWidth === 'small' || itemWidth === 'medium') {
    maxTagRenderCount = 1;
  }

  const onSelect = (selected: number[]) => {
    const selectedValues = getValuesBySelectedIndexes(selected);
    onChange(selectedValues);
    updateFormValue(name, selectedValues);
  };

  const onTagPress = (label: string) => {
    const selectedValues = getSelectedIndexes();
    const tagIndex = data.indexOf(label);

    const newSelectedValues = selectedValues.filter((selected) => selected !== tagIndex);
    onSelect(newSelectedValues);
  };

  const onTriggerPress = () => menuRef.current?.open();

  const renderSelectedList = () => {
    return (
      <Text numberOfLines={1} variant={'p2-regular'} color={'text-primary'}>
        {labels.join(', ')}
      </Text>
    );
  };

  const renderSelectedChips = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {labels.slice(0, maxTagRenderCount).map((label) => (
          <View key={label} style={{ marginHorizontal: 3, marginVertical: 1 }}>
            <Tag
              variant={'outlined'}
              iconRight={'cancel'}
              label={label}
              onPress={() => onTagPress(label)}
              disabled={disabled}
            />
          </View>
        ))}
        {maxTagRenderCount < labels.length && (
          <Text style={{ alignSelf: 'flex-end' }} size={12}>
            ...
          </Text>
        )}
      </View>
    );
  };

  const renderSelected = () => {
    if (!labels.length) return <View style={styles.divider} />;
    if (selectedType === 'tag') {
      return renderSelectedChips();
    }
    return renderSelectedList();
  };

  return (
    <Menu
      onSelect={onSelect}
      onVisibleChange={onVisibleChange}
      itemWidth={itemWidth}
      itemHeight={itemHeight}
      ref={menuRef}
      disabledTriggerPress
      listItems={data}
      selection={selection}
      initialSelected={getSelectedIndexes()}
    >
      <BaseInputLayout
        disabled={disabled}
        currentValueLength={labels.length}
        ref={inputRef}
        isFocused={isOpened}
        onPress={onTriggerPress}
        style={styles.input}
        rightContent={
          <Icon
            width={20}
            color='grey-dark'
            name={isOpened ? 'arrow_drop_up' : 'arrow_drop_down'}
          />
        }
        label={label}
        error={isOpened ? undefined : errorMessage}
        hint={isOpened ? undefined : hint}
        {...rest}
      >
        {renderSelected()}
      </BaseInputLayout>
    </Menu>
  );
};

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;
