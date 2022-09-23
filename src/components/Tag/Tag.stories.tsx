import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Tag from '.';
import CenterView from '../../storybook/preview/CenterView';
import { iconSelector } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Tag',
  component: Tag,
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
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tag',
  size: 'small',
  variant: 'contained',
  iconLeft: 'account_circle',
  iconRight: 'cancel',
  disabled: false,
};
