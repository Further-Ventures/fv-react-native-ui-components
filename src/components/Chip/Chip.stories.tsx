import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Chip from '.';
import CenterView from '../../storybook/preview/CenterView';
import { iconSelector } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    onPress: {
      action: 'pressed the chip',
    },
    size: {
      options: ['small', 'large'],
      control: {
        type: 'select',
      },
    },

    variant: {
      options: ['contained', 'outlined'],
      control: {
        type: 'select',
      },
    },
    iconLeft: iconSelector,
    iconRight: iconSelector,
  },
  decorators: [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Chip',
  size: 'small',
  variant: 'contained',
  iconLeft: 'account_circle',
  iconRight: 'cancel',
  disabled: false,
};
