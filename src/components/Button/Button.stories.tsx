import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Button from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';
import InfoIcon from '../../storybook/preview/Icons/InfoIcon';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {
      action: 'pressed the button',
    },
  },
  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: 'Button',
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'Primary',
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const Mini = Template.bind({});
Mini.args = {
  children: 'Mini',
  size: 'mini',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large',
  size: 'large',
};

export const Circle = Template.bind({});
Circle.args = {
  children: 'Circle',
  shape: 'circle',
};

export const Flat = Template.bind({});
Flat.args = {
  children: 'Flat',
  shape: 'flat',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  iconLeft: <InfoIcon />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  iconRight: <InfoIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
