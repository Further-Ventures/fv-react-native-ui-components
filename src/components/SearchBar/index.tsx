import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Input, { IInputProps } from '../Input';
import Icon, { IIconProps } from '../Icon';
import Text from '../Text';
import Elevation from '../Elevation';
import useStyles from './styles';

export type TDropdownItem = {
  icon?: IIconProps['name'];
  text?: string;
};
export interface ISearchBar
  extends Omit<
    IInputProps,
    | 'size'
    | 'error'
    | 'rightContent'
    | 'leftContent'
    | 'showLength'
    | 'mask'
    | 'label'
    | 'prefix'
    | 'prefixStyle'
  > {
  info?: string;
  dropdownItems?: TDropdownItem[];
}

const SearchBar = ({ disabled, info, dropdownItems, ...rest }: ISearchBar) => {
  const styles = useStyles();
  const [value, setValue] = useState('');
  const handleReset = () => setValue('');
  const handleChange = (e: string) => setValue(e);
  return (
    <View style={styles.wrapper}>
      <Input
        disabled={disabled}
        controlled={true}
        value={value}
        onChangeText={handleChange}
        {...rest}
        leftContent={(_, disabled) => <Icon name='search' color='text-hint' disabled={disabled} />}
        rightContent={
          <>
            {value ? (
              <TouchableOpacity disabled={disabled} onPress={handleReset}>
                <Icon name='cancel' filled color='text-hint' />
              </TouchableOpacity>
            ) : null}
          </>
        }
        size='small'
      />
      {!disabled && (
        <View style={styles.bottomContent}>
          {!!info && (
            <View style={styles.infoTextWrapper}>
              <Text variant='label-14-regular' color='text-hint'>
                {info}
              </Text>
            </View>
          )}
          {!!dropdownItems?.length && (
            <Elevation variant='light' style={styles.dropdown}>
              {dropdownItems.map(({ icon, text }, i) => (
                <View key={i} style={styles.dropdownItem}>
                  {!!icon && <Icon name={icon} color='text-primary' filled />}
                  <View style={styles.dropdownText}>
                    <Text variant='p2-regular'>{text}</Text>
                  </View>
                </View>
              ))}
            </Elevation>
          )}
        </View>
      )}
    </View>
  );
};
export default SearchBar;
