import * as React from 'react';
import Input, { IInputProps } from '../Input';
import Icon from '../Icon';

const SearchBar = (props: IInputProps) => {
  return (
    <Input
      leftContent={<Icon name='search' color='text-hint' />}
      rightContent={<Icon name='cancel' filled color='text-hint' />}
      {...props}
    />
  );
};
export default SearchBar;
