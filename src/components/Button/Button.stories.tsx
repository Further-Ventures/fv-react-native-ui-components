import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Button from '.';
import CenterView from '../../storybook/preview/CenterView';
import { getMaterialSymbols } from '../../storybook/utils';
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
      },
    },
    icon: getMaterialSymbols(),
    iconPosition: {
      options: ['left', 'right'],

      control: {
        type: 'select',
      },
    },
    iconLeft: getMaterialSymbols(),
    iconRight: getMaterialSymbols(),
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
  decorators: [CenterView],
  args: {},
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  label: 'Button CTA',
  size: 'medium',
  shape: 'flat',
  variant: 'contained',
  icon: 'info',
  iconPosition: 'right',
  error: false,
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button CTA',
  size: 'medium',
  shape: 'flat',
  variant: 'outlined',
  icon: 'info',
  iconPosition: 'right',
  error: false,
  disabled: false,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  size: 'medium',
  shape: 'flat',
  variant: 'contained',
  icon: 'info',
  error: false,
  disabled: false,
};

export const LeftAndRightIconProps = Template.bind({});
LeftAndRightIconProps.args = {
  label: 'Flexible props',
  size: 'medium',
  shape: 'flat',
  variant: 'outlined',
  iconLeft: 'info',
  iconRight: 'settings',
  error: false,
  disabled: false,
};
