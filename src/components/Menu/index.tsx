import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { IItemData, IMenu, IMenuPosition, IMenuRef } from './types';
import useStyles, { getHeight, getWidth } from './styles';
import Icon from '../Icon';
import Text, { IConditionalTextProps } from '../Text';
import { Modal, Pressable, ScrollView, TextStyle, useWindowDimensions, View } from 'react-native';
import Elevation from '../Elevation';

const MENU_SCREEN_FACTOR = 0.4;
const MENU_OFFSET = 8;

const Menu = forwardRef<IMenuRef, IMenu>(
  (
    {
      trigger,
      disabledTriggerPress,
      itemWidth = 'medium',
      itemHeight = 'thick',
      data,
      onSelect,
      onVisibleChange,
      renderItem: customRenderItem,
      children,
      ...rest
    },
    ref
  ) => {
    const [menuPosition, setMenuPosition] = useState<IMenuPosition>({
      top: 0,
      left: 0,
    });
    const [visible, setVisible] = useState(false);
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();
    const styles = useStyles(itemWidth, itemHeight, menuPosition);
    const triggerRef = useRef<View>(null);

    const menuHeight = data.length * getHeight(itemHeight);
    const menuWidth = getWidth(itemWidth);
    const shrinkMenuHeight = Math.min(menuHeight, windowHeight * MENU_SCREEN_FACTOR);

    const measureTrigger = () => {
      triggerRef.current?.measure((x, y, width, height, pageX, pageY) => {
        const xOverlap = Math.max(pageX + menuWidth - windowWidth, 0);
        const left = pageX - xOverlap;
        if (pageY + height + shrinkMenuHeight < windowHeight) {
          // set to bottom
          setMenuPosition({
            top: pageY + height + MENU_OFFSET,
            left,
          });
        } else {
          // set to top
          setMenuPosition({ top: pageY - shrinkMenuHeight - MENU_OFFSET, left });
        }
      });
    };

    const onVisibleChangeWrapper = (visible: boolean) => {
      setVisible(visible);
      onVisibleChange?.(visible);
    };

    const handleOpen = () => {
      // Some triggers, like dropbox, might change themselves in an open state
      // so let's measure it after the trigger is rendered
      setTimeout(measureTrigger);
      onVisibleChangeWrapper(true);
    };

    const handleClose = () => onVisibleChangeWrapper(false);

    useImperativeHandle(ref, () => ({
      open: handleOpen,
      close: handleClose,
    }));

    const renderItem = ({ label, iconProps, labelProps, disabled }: IItemData) => {
      const textProps: IConditionalTextProps | { size: TextStyle['fontSize'] } = {
        size: 16,
        ...labelProps,
      };
      return (
        <Pressable
          key={label}
          style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
          disabled={disabled}
          onPress={() => {
            onSelect(label);
            handleClose();
          }}
        >
          {iconProps && (
            <Icon
              key={label}
              width={20}
              style={styles.icon}
              color='text-primary'
              {...iconProps}
              disabled={disabled}
            />
          )}
          <Text {...textProps} disabled={disabled}>
            {label}
          </Text>
        </Pressable>
      );
    };

    const renderItems = () => {
      const render = customRenderItem ? customRenderItem : renderItem;
      const items = data.map((item) => render(typeof item === 'string' ? { label: item } : item));
      const useScroll = menuHeight > windowHeight * MENU_SCREEN_FACTOR;
      if (useScroll) {
        return (
          <ScrollView style={{ maxHeight: windowHeight * MENU_SCREEN_FACTOR }}>{items}</ScrollView>
        );
      }
      return items;
    };

    const renderContext = () => (
      <Modal visible={visible} transparent animationType='none'>
        <Pressable style={styles.overlay} onPress={handleClose} />
        <Elevation variant='extraLight' style={styles.dropdown}>
          {renderItems()}
        </Elevation>
      </Modal>
    );

    return (
      <Pressable {...rest} ref={triggerRef} onPress={() => !disabledTriggerPress && handleOpen()}>
        {trigger || children}
        {renderContext()}
      </Pressable>
    );
  }
);

Menu.displayName = 'Menu';

export default Menu;
