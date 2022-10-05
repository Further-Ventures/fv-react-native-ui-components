import { useEffect, useState } from 'react';
import { useFormContext } from '../Form';
import { IToggle } from './index';

interface IUseToggle
  extends Pick<IToggle, 'name' | 'error' | 'onChange' | 'checked' | 'clearFormValueOnUnmount'> {}

export const useToggle = ({
  name = 'unnamed',
  error,
  onChange,
  checked,
  clearFormValueOnUnmount,
}: IUseToggle) => {
  const { fieldValue, fieldError, updateFormValue, unsetFormValue, updateFormTouched } =
    useFormContext(name);

  const [internalValue, setInternalValue] = useState(fieldValue || checked);
  const errorMessage = fieldError || error;

  const onChangeWrapper = () => {
    setInternalValue(!internalValue);
    updateFormValue(name, !internalValue);
    onChange?.(!internalValue);
    updateFormTouched(name, true);
  };

  useEffect(() => {
    updateFormValue(name, internalValue, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
  }, []);

  return { internalValue, errorMessage, onChangeWrapper };
};
