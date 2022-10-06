import { ReactNode } from 'react';
import { IList } from '../List';

export type ItemWidth = 'small' | 'medium' | 'large';
export type ItemHeight = 'thin' | 'thick';
export interface IMenuPosition {
  top: number;
  left: number;
}

export interface IMenuRef {
  open: () => void;
  close: () => void;
}

export interface IMenu extends IList {
  trigger?: ReactNode;
  disabledTriggerPress?: boolean;
  itemWidth?: ItemWidth;
  onVisibleChange?: (visible: boolean) => void;
}
