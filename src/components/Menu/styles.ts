import { createUseStyles } from '../Theme';
import { IMenuPosition } from './types';
import { getWidth, ItemHeight, ItemWidth } from '../../utils/itemSize';

export default createUseStyles(
  (
    theme,
    itemWidth: ItemWidth,
    itemHeight: ItemHeight,
    menuPosition: IMenuPosition,
    onlyCustomContent?: boolean
  ) => ({
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
      width: onlyCustomContent ? undefined : getWidth(itemWidth),
      position: 'absolute',
      borderRadius: 8,
    },
    highZ: { zIndex: 1000 },
  })
);
