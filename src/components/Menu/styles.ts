import { createUseStyles } from '../Theme';
import { ItemHeight, ItemWidth } from './types';
import { IMenuPosition } from './types';
import { getWidth } from '../../utils/itemSize';

export default createUseStyles(
  (theme, itemWidth: ItemWidth, itemHeight: ItemHeight, menuPosition: IMenuPosition) => ({
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
