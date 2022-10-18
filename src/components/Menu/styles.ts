import { createUseStyles } from '../Theme';
import { ItemHeight, ItemWidth } from './types';
import { IMenuPosition } from './types';
import { getWidth } from '../../utils/itemSize';

export default createUseStyles(
  (theme, itemWidth: ItemWidth | number, itemHeight: ItemHeight, menuPosition: IMenuPosition) => ({
    overlay: {
      position: 'absolute',
      top: -100,
      bottom: -100,
      left: -100,
      right: -100,
      zIndex: 100,
    },
    dropdown: {
      ...menuPosition,
      zIndex: 101,
      width: getWidth(itemWidth),
      position: 'absolute',
      borderRadius: 8,
    },
    highZ: { zIndex: 1000 },
  })
);
