import { IList } from '../List';
import { ItemWidth } from '../../utils/itemSize';

export interface IMenuPosition {
  top: number;
  left: number;
}

export interface IMenuRef {
  open: () => void;
  close: () => void;
}

export interface IMenu extends IList {
  disabledTriggerPress?: boolean;
  itemWidth?: ItemWidth | number;
  onVisibleChange?: (visible: boolean) => void;
}
