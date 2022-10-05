import { createUseStyles } from '../Theme';
import { getWidth, ItemWidth } from '../../utils/itemSize';

export default createUseStyles((theme, itemWidth: ItemWidth) => ({
  input: {
    width: getWidth(itemWidth),
  },
  divider: {
    marginVertical: 10,
  },
}));
