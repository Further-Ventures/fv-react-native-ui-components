import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Switch from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Switch',
  component: Switch,

  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    onPress: {
      action: 'pressed the button',
    },
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
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const SwitchComponent = Template.bind({});
SwitchComponent.args = {
  size: 'medium',
  error: 'This is a hint text to help user',
  disabled: false,
  checked: false,
  verticalPosition: 'top',
  heading: 'Circle Check heading',
  label:
    'Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label Label ',
  sentence:
    'Write a Radio button sentence here Write a Radio button sentence here Write a Radio button sentence here',
};
