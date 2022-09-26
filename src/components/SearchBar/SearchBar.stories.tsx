import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import SearchBar from '.';
import CenterView from '../../storybook/preview/CenterView';
import { iconSelector } from '../../storybook/utils';
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
  label: 'SearchBar CTA',
  size: 'medium',
  shape: 'flat',
  variant: 'contained',
  icon: 'info',
  iconPosition: 'right',
  error: false,
  disabled: false,
};
