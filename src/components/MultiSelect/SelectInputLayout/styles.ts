import { createUseStyles } from '../../Theme';
import { getWidth, ItemWidth } from '../../../utils/itemSize';

const CUSTOM_CONTENT_WIDTH = 93;

export default createUseStyles((theme, itemWidth?: ItemWidth) => ({
  input: itemWidth
    ? {
        width: getWidth(itemWidth),
      }
    : {
        width: CUSTOM_CONTENT_WIDTH,
        borderBottomEndRadius: 0,
        borderTopEndRadius: 0,
      },
}));
