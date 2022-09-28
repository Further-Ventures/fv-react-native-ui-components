import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
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

export interface IMenu {
  trigger: ReactNode;
  style?: StyleProp<ViewStyle>;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  itemWidth: ItemWidth;
  itemHeight: ItemHeight;
  data: Array<IItemData | string>;
  renderItem?: (item: IItemData) => ReactNode;
  onSelect: (label: string) => void;
}
