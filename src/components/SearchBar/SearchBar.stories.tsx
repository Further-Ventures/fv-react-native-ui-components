import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import SearchBar from '.';
import CenterView from '../../storybook/preview/CenterView';
import pkg from './package.json';

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes: {
    onPress: {
      action: 'pressed the SearchBar',
    },
  },
  decorators: [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  info: 'This is an info text',
  placeholder: 'Placeholder',
  dropdownItems: [
    { icon: 'account_circle', text: 'Item 1' },
    { icon: 'account_circle', text: 'Item 1' },
    { icon: 'account_circle', text: 'Item 1' },
  ],
  disabled: false,
};
