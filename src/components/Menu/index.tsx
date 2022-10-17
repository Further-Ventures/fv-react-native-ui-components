import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { IMenu, IMenuPosition, IMenuRef } from './types';
import useStyles from './styles';
import { Modal, Pressable, useWindowDimensions, View } from 'react-native';
import Elevation from '../Elevation';
import List from '../List';
import { getHeight, getWidth } from '../../utils/itemSize';

const MENU_SCREEN_FACTOR = 0.4;
const MENU_OFFSET = 8;

const Menu = forwardRef<IMenuRef, IMenu>(
  (
    {
      disabledTriggerPress,
      itemWidth = 'medium',
      itemHeight = 'thick',
      onSelect,
      onVisibleChange,
      children,
      listItems,
      selection,
      onlyCustomContent,
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
    const styles = useStyles(itemWidth, itemHeight, menuPosition, onlyCustomContent);
    const triggerRef = useRef<View>(null);

    const menuHeight = listItems.length * getHeight(itemHeight);
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

    const onSelectWrapper = (selected: number[]) => {
      onSelect?.(selected);
      if (selection !== 'check-icon' && selection !== 'check-box') {
        handleClose();
      }
    };

    const renderItems = () => {
      const useScroll = menuHeight > windowHeight * MENU_SCREEN_FACTOR;
      return (
        <List
          listItems={listItems}
          itemHeight={itemHeight}
          onSelect={onSelectWrapper}
          scrollEnabled={useScroll}
          style={useScroll && { maxHeight: windowHeight * MENU_SCREEN_FACTOR }}
          selection={selection}
          onlyCustomContent={onlyCustomContent}
          {...rest}
        />
      );
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
      <Pressable ref={triggerRef} onPress={() => !disabledTriggerPress && handleOpen()}>
        {children}
        {renderContext()}
      </Pressable>
    );
  }
);

Menu.displayName = 'Menu';

export default Menu;
export type { IMenu, IMenuRef };
