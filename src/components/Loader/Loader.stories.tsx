import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Loader from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    variant: {
      options: ['circular', 'bar'],

      control: {
        type: 'select',
      },
    },
  },

  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Bar = Template.bind({});
Bar.args = {
  variant: 'bar',
  flat: false,
  progress: -1,
};

export const Circular = Template.bind({});
Circular.args = {
  variant: 'circular',
  flat: false,
  progress: -1,
  size: 48,
};
