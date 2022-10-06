import React from 'react';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';
import CenterView from '../../storybook/preview/CenterView';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import pkg from './package.json';
import Menu from '.';
import { IListItem } from '../List';
import Icon from '../Icon';
import { IMenu } from './types';

export default {
  title: 'Menu',
  component: Menu,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
  argTypes: {
    itemWidth: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    itemHeight: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
    selection: {
      control: { type: 'select' },
      options: ['none', 'check-icon', 'check-box'],
    },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

type TriggerPosition = { style: StyleProp<ViewStyle> };

const triggerCenter: TriggerPosition = { style: { alignSelf: 'center' } };
const triggerBottom: TriggerPosition = {
  style: { alignSelf: 'center', bottom: 10, position: 'absolute' },
};
const triggerTop: TriggerPosition = {
  style: { alignSelf: 'center', top: 10, position: 'absolute' },
};

const renderIcon =
  (name: string) =>
  // eslint-disable-next-line react/display-name
  ({ disabled }: { disabled?: boolean }) =>
    <Icon color={'text-secondary'} disabled={disabled} name={name} />;

const baseData = { listItems: ['Save', 'Restore', 'Delete', 'Undo'] };
const iconsData: { listItems: IListItem[] } = {
  listItems: [
    { title: 'Save', leftContent: renderIcon('info') },
    { title: 'Restore', leftContent: renderIcon('cancel') },
    { title: 'Delete', leftContent: renderIcon('error') },
    { title: 'Disabled', leftContent: renderIcon('error'), disabled: true },
  ],
};

const baseArgs: Partial<IMenu> = {
  trigger: <View style={{ backgroundColor: 'red', width: 50, height: 50 }} />,
  itemWidth: 'medium',
  itemHeight: 'thick',
  onSelect: (selected) => alert(`selected index: ${selected}`),
};

export const Default = Template.bind({});
Default.args = {
  ...baseArgs,
  ...triggerCenter,
  ...baseData,
};

export const Top = Template.bind({});
Top.args = {
  ...baseArgs,
  ...triggerTop,
  ...baseData,
};

export const Bottom = Template.bind({});
Bottom.args = {
  ...baseArgs,
  ...triggerBottom,
  ...baseData,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...baseArgs,
  ...triggerCenter,
  ...baseData,
  ...iconsData,
};

export const BigList = Template.bind({});
BigList.args = {
  ...baseArgs,
  ...triggerCenter,
  listItems: Array.from(Array(30).keys()).map((v) => 'Option' + v),
};

export const Selection = Template.bind({});
Selection.args = {
  ...baseArgs,
  ...triggerCenter,
  ...baseData,
  selection: 'check-icon',
};
