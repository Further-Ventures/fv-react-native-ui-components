import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Chip from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
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
      options: ['contained', 'outlined', 'empty'],
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['curved', 'round', 'flat'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: 'Button CTA',
  size: 'small',
  variant: 'outlined',
  iconLeft: 'account_circle',
  iconRight: 'cancel',
  error: false,
  disabled: false,
};
