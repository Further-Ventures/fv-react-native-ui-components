import {ISwitchProps} from './index';
import {useFormContext} from '../Form';
import {useEffect, useState} from 'react';

interface IUseSwitch
  extends Pick<
    ISwitchProps,
    'name' | 'onChange' | 'checked' | 'clearFormValueOnUnmount'
  > {}

export const useSwitch = ({
  name = 'unnamed',
  checked,
  clearFormValueOnUnmount,
  onChange,
}: IUseSwitch) => {
  const {
    fieldValue,
    updateFormValue,
    unsetFormValue,
    updateFormTouched,
  } = useFormContext(name);
  const [internalValue, setInternalValue] = useState(fieldValue || checked);

  const onChangeWrapper = () => {
    setInternalValue(!internalValue);
    updateFormValue(name, !internalValue);
    onChange && onChange(!internalValue);
    updateFormTouched(name, true);
  };

  useEffect(() => {
    updateFormValue(name, internalValue, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {internalValue, onChangeWrapper};
};
