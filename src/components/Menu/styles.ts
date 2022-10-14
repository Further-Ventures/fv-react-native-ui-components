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
      width: '100%',
      height: '100%',
    },
    dropdown: {
      ...menuPosition,
      width: onlyCustomContent ? undefined : getWidth(itemWidth),
      position: 'absolute',
    },
  })
);
