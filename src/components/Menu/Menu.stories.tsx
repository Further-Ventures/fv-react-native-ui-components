import React from 'react';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';
import CenterView from '../../storybook/preview/CenterView';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import pkg from './package.json';
import Menu from '.';
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
      description: 'overwritten description 2',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    itemHeight: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
    placement: {
      label: 'preferred placement',
      control: { type: 'select' },
      options: ['bottom', 'top', 'left', 'right'],
    },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

type TriggerPosition = { style: StyleProp<ViewStyle> };

const triggerCenter: TriggerPosition = { style: { width: 50, height: 50, alignSelf: 'center' } };
const triggerBottom: TriggerPosition = {
  style: { width: 50, height: 50, alignSelf: 'center', bottom: 10, position: 'absolute' },
};
const triggerTop: TriggerPosition = {
  style: { width: 50, height: 50, alignSelf: 'center', top: 10, position: 'absolute' },
};
const baseData = { data: ['Save', 'Restore', 'Delete', 'Undo'] };

const baseArgs: Partial<IMenu> = {
  trigger: <View style={{ backgroundColor: 'red', width: '100%', height: '100%' }} />,
  itemWidth: 'small',
  itemHeight: 'thick',
  placement: 'bottom',
  onSelect: (label) => alert(`label: ${label}`),
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
  data: [
    { label: 'Save', iconProps: { name: 'info' } },
    { label: 'Restore', iconProps: { name: 'cancel' } },
    {
      label: 'Delete',
      iconProps: { name: 'error', color: 'error-main' },
      labelProps: { color: 'error-main' },
    },
    { label: 'Disabled', iconProps: { name: 'error' }, disabled: true },
  ],
};

export const BigList = Template.bind({});
BigList.args = {
  ...baseArgs,
  ...triggerCenter,
  data: Array.from(Array(30).keys()).map((v) => 'Option' + v),
};
