import { Dimensions } from 'react-native';
import { createUseStyles } from '../Theme';
import { IMenuPosition, IChildrenPosition } from './types';
import { getWidth, ItemHeight, ItemWidth } from '../../utils/itemSize';

const { width, height } = Dimensions.get('window');
export default createUseStyles(
  (
    theme,
    itemWidth: ItemWidth,
    itemHeight: ItemHeight,
    menuPosition: IMenuPosition,
    onlyCustomContent?: boolean,
    childrenPosition?: IChildrenPosition
  ) => ({
    overlay: {
      position: 'absolute',
      width,
      height,
      left: -(childrenPosition?.pageX || 0),
      top: -(childrenPosition?.pageY || 0),
      zIndex: 100,
    },
    dropdown: {
      ...menuPosition,
      width: onlyCustomContent ? undefined : getWidth(itemWidth),
      position: 'absolute',
      backgroundColor: theme.background.primary,
      borderRadius: 8,
    },
    highZ: { zIndex: 1000 },
  })
);
