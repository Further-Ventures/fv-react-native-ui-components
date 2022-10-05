import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Switch from '.';
import CenterView from '../../storybook/preview/CenterView';
import { Platform } from 'react-native';
import pkg from './package.json';

export default {
  title: 'Switch',
  component: Switch,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'select',
      },
    },
    verticalPosition: {
      options: ['top', 'middle'],
      control: {
        type: 'select',
      },
    },
    horizontalPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchComponent = Template.bind({});
SwitchComponent.args = {
  size: 'medium',
  disabled: false,
  defaultChecked: true,
  verticalPosition: 'top',
  horizontalPosition: 'left',
  heading: 'Toggle heading',
  label: 'Label here',
  sentence: 'Write a sentence here',
};
