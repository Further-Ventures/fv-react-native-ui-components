import React, { useState, useEffect } from 'react';
import { TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import Input, { IInputProps } from '../Input';
import Icon from '../Icon';

export interface ISearchBar
  extends Omit<
    IInputProps,
    | 'size'
    | 'error'
    | 'rightContent'
    | 'leftContent'
    | 'showLength'
    | 'mask'
    | 'prefix'
    | 'prefixStyle'
  > {}

const SearchBar = ({ disabled, ...rest }: IInputProps) => {
  const [value, setValue] = useState('');
  const handleReset = () => setValue('');
  const handleChange = (e: string) => setValue(e);
  return (
    <Input
      disabled={disabled}
      {...rest}
      leftContent={<Icon name='search' color='text-hint' />}
      rightContent={
        <TouchableOpacity disabled={disabled} onPress={handleReset}>
          <Icon name='cancel' filled color='text-hint' />
        </TouchableOpacity>
      }
      size='small'
      controlled={true}
      value={value}
      onChangeText={handleChange}
    />
  );
};
export default SearchBar;
