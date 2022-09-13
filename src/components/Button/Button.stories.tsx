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
  children: 'Button CTA',
  size: 'medium',
  variant: 'primary',
  icon: 'info',
  outline: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button CTA',
  size: 'medium',
  variant: 'secondary',
  icon: 'info',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Button CTA',
  size: 'medium',
  icon: 'info',
  error: true,
};
export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  size: 'medium',
  icon: 'info',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button CTA',
  size: 'medium',
  icon: 'info',
  disabled: true,
};
