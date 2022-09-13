import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Button from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {
      action: 'pressed the button',
    },
    size: {
      options: ['mini', 'small', 'medium', 'large'],
      control: {
        type: 'select',
        labels: ['mini', 'small', 'medium', 'large'],
      },
    },
    icon: {
      options: ['', 'info', 'settings'],
      control: {
        type: 'select',
        labels: ['none', 'info', 'settings'],
      },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
        labels: ['primary', 'secondary'],
      },
    },
  },
  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button CTA',
  size: 'medium',
  variant: 'primary',
  icon: 'info',
  error: false,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button CTA',
  size: 'medium',
  variant: 'secondary',
  icon: 'info',
  error: false,
  disabled: false,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  size: 'medium',
  variant: 'primary',
  icon: 'info',
  error: false,
  disabled: false,
  outline: true,
};
