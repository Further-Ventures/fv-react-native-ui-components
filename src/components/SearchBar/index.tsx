import React, { forwardRef, useEffect, useState, useRef, useImperativeHandle } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Input, { IInputProps } from '../Input';
import Icon, { IIconProps } from '../Icon';
import Text from '../Text';
import Menu from '../Menu';
import Loader from '../Loader';
import { IMenu, IMenuRef } from '../Menu/types';

import useStyles from './styles';

export type TDropdownItem = {
  icon?: IIconProps['name'];
  title: string;
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
  loading?: boolean;
}

const renderIcon =
  (name: string) =>
  // eslint-disable-next-line react/display-name
  ({ disabled }: { disabled?: boolean }) =>
    <Icon filled color='text-primary' disabled={disabled} name={name} />;

const SearchBar = forwardRef<IMenuRef, ISearchBar>(
  ({ disabled, info, dropdownItems, loading = false, onChangeText, ...rest }, ref) => {
    const styles = useStyles();
    const menuRef = useRef<IMenuRef>(null);
    const [value, setValue] = useState('');

    const [inputWidth, setInputWidth] = useState(0);
    const handleReset = () => setValue('');
    const handleChange = (e: string) => {
      setValue(e);
      onChangeText?.(e);
    };
    const listItems: IMenu['listItems'] = dropdownItems?.map(({ title, icon }) => ({
      title,
      ...(icon ? { leftContent: renderIcon(icon) } : {}),
    })) || [{ title: 'Add title' }];
    useEffect(() => {
      if (disabled) {
        closeMenu();
      }
    }, [disabled]);
    const generateRightContent = () => {
      if (loading) {
        return <Loader variant='circular' size={16} />;
      }
      if (value) {
        return (
          <TouchableOpacity disabled={disabled} onPress={handleReset}>
            <Icon name='cancel' filled color='text-hint' />
          </TouchableOpacity>
        );
      }
    };

    const openMenu = () => {
      // setMenuIsOpen(true);
      menuRef.current?.open();
    };

    const closeMenu = () => {
      // setMenuIsOpen(false);
      menuRef.current?.close();
    };

    useImperativeHandle(ref, () => ({
      open: openMenu,
      close: closeMenu,
    }));

    const handleMenuSelect = (index: number[]) => {
      setValue(listItems?.[index[0]]?.title);
    };

    return (
      <>
        <Menu
          ref={menuRef}
          onSelect={handleMenuSelect}
          itemWidth={inputWidth}
          itemHeight='thick'
          listItems={listItems}
        >
          <View
            style={styles.wrapper}
            onLayout={(e) => {
              const { layout } = e.nativeEvent;
              setInputWidth(layout.width);
            }}
          >
            <Input
              disabled={disabled}
              controlled={true}
              value={value}
              {...rest}
              onChangeText={handleChange}
              leftContent={(_: any, disabled: boolean) => (
                <Icon name='search' color='text-hint' disabled={disabled} />
              )}
              rightContent={generateRightContent()}
              size='small'
            />
          </View>
        </Menu>
        <View style={styles.bottomContent}>
          {!!info && (
            <View style={styles.infoTextWrapper}>
              <Text variant='label-14-regular' color='text-hint'>
                {info}
              </Text>
            </View>
          )}
        </View>
      </>
    );
  }
);
SearchBar.displayName = 'SearchBar';
export default SearchBar;
