import { createUseStyles } from '../Theme';
import { ItemWidth } from '../Menu/types';
import { getWidth } from '../Menu/styles';

export default createUseStyles((theme, itemWidth: ItemWidth) => ({
  input: {
    width: getWidth(itemWidth),
  },
  divider: {
    marginVertical: 10,
  },
}));
