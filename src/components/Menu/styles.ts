import { createUseStyles } from '../Theme';
import { ItemHeight, ItemWidth } from './types';
import { IMenuPosition } from './types';

export const getWidth = (itemWidth: ItemWidth) => {
  switch (itemWidth) {
    case 'small':
      return 136;
    case 'medium':
      return 200;
    case 'large':
      return 343;
  }
};

export const getHeight = (itemHeight: ItemHeight) => (itemHeight === 'thin' ? 36 : 48);

export default createUseStyles(
  (theme, itemWidth: ItemWidth, itemHeight: ItemHeight, menuPosition: IMenuPosition) => ({
    item: {
      width: getWidth(itemWidth),
      height: getHeight(itemHeight),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 16,
    },
    itemPressed: {
      backgroundColor: theme.grey.extraLight,
    },
    icon: {
      marginRight: 12,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
    dropdown: {
      ...menuPosition,
      width: getWidth(itemWidth),
      position: 'absolute',
    },
  })
);
