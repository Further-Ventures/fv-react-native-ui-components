import { ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { IIconProps } from '../Icon';
import { IConditionalTextProps } from '../Text';
import { PartialProperties } from '../../storybook/utils/types';

export type ItemWidth = 'small' | 'medium' | 'large';
export type ItemHeight = 'thin' | 'thick';

export interface IItemData {
  label: string;
  labelProps?: PartialProperties<IConditionalTextProps, 'size'>;
  iconProps?: IIconProps;
  disabled?: boolean;
}

export interface IMenu extends PressableProps {
  trigger: ReactNode;
  itemWidth?: ItemWidth;
  itemHeight?: ItemHeight;
  data: Array<IItemData | string>;
  renderItem?: (item: IItemData) => ReactNode;
  onSelect: (label: string) => void;
}

export interface IMenuPosition {
  top: number;
  left: number;
}
