import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from '../Form';
import { IMultiSelect } from './index';

interface IUseSelect<T>
  extends Pick<
    IMultiSelect<T>,
    'items' | 'values' | 'error' | 'name' | 'clearFormValueOnUnmount'
  > {}

const useSelect = <T>({
  name = 'unamed',
  items,
  values,
  error,
  clearFormValueOnUnmount,
}: IUseSelect<T>) => {
  const { fieldError, fieldValue, unsetFormValue, updateFormValue, updateFormTouched } =
    useFormContext(name);
  const errorMessage = fieldError || error;
  const selectedValues: T[] = fieldValue ?? values ?? [];
  const [isOpened, setOpened] = useState(false);

  const labels = useMemo(
    () =>
      items
        ?.filter((item) => selectedValues.indexOf(item.value) !== -1)
        .map((selectedItem) => selectedItem.label) || [],
    [items, selectedValues]
  );

  const getValuesBySelectedIndexes = (selected: number[]) => selected.map((i) => items[i].value);
  const getSelectedIndexes = () => selectedValues.map((v) => items.findIndex((i) => v === i.value));

  const onVisibleChange = (visible: boolean) => {
    setOpened(visible);
    if (!visible) {
      updateFormTouched(name, true);
    }
  };

  useEffect(() => {
    updateFormValue(name, selectedValues, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
  }, []);

  return {
    errorMessage,
    isOpened,
    labels,
    getValuesBySelectedIndexes,
    getSelectedIndexes,
    onVisibleChange,
    updateFormValue,
  };
};

export default useSelect;
