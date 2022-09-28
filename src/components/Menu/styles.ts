import { createUseStyles } from '../Theme';
import { ItemHeight, ItemWidth } from './types';

const getWidth = (itemWidth: ItemWidth) => {
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

export default createUseStyles((theme, itemWidth: ItemWidth, itemHeight: ItemHeight) => ({
  item: {
    width: getWidth(itemWidth),
    height: getHeight(itemHeight),
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  },
}));
