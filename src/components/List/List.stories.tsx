import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import List, { IListItem } from '.';
import pkg from './package.json';
import { View, Platform } from 'react-native';
import Icon from '../Icon';

const label = 'Label';
const title = 'Item';
const subtitle = 'This is a hint text to help user.';
const leftContent = ({ disabled }: { disabled?: boolean }) => (
  <Icon name='account_circle' disabled={disabled} filled color={'grey-dark'} />
);
const rightContent = <Icon name='arrow_drop_up' filled color={'grey-dark'} />;
const onSelect = (selected: number[]) => console.log('selected index: ' + selected);

const listItems: IListItem[] = new Array(4)
  .fill({ title })
  .map((_, index) => ({ title: title + (index + 1) }));

const disabledItems: IListItem[] = new Array(4)
  .fill({ title })
  .map((_, index) => ({ title: title + (index + 1), disabled: true }));

export default {
  title: 'List',
  component: List,
  parameters: {
    pkg,
    controls: {
      exclude: ['initialSelected', 'onlyCustomContent', 'onSelect'],
    },
  },
  argTypes: {
    itemHeight: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
    selection: {
      control: { type: 'select' },
      options: ['none', 'check-icon', 'check-box'],
    },
  },
  args: {
    itemHeight: 'thick',
    selection: 'none',
    dividerBottomEnabled: false,
    dividerTopEnabled: false,
    onSelect,
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <>
    {Platform.OS !== 'web' && <View style={{ paddingTop: 200 }} />}
    <List {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  listItems,
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  listItems: listItems.map((item) => ({ ...item, subtitle })),
  onSelect,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  listItems: listItems.map((item) => ({ ...item, label })),
};

export const WithSubtitleAndLabel = Template.bind({});
WithSubtitleAndLabel.args = {
  listItems: listItems.map((item) => ({ ...item, subtitle, label })),
};

export const Disabled = Template.bind({});
Disabled.args = {
  listItems: disabledItems.map((item) => ({ ...item, subtitle, label, leftContent })),
};

export const WithLeftAndRightContent = Template.bind({});
WithLeftAndRightContent.args = {
  listItems: listItems.map((item) => ({
    ...item,
    subtitle,
    leftContent,
    rightContent,
  })),
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  selection: 'check-box',
  listItems: listItems.map((item) => ({
    ...item,
    subtitle,
  })),
};

export const Prechecked = Template.bind({});
Prechecked.args = {
  selection: 'check-icon',
  initialSelected: [0, 2],
  listItems: listItems.map((item) => ({
    ...item,
    subtitle,
  })),
};
